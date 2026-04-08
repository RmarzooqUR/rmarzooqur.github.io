const fs = require('node:fs')
const readline = require('node:readline')
const path = require('node:path')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const BASE_DIR = path.resolve(__dirname, '../')
const POST_PATH = path.join(BASE_DIR, '_posts/drafts')
const ASSET_PATH = path.join(BASE_DIR, 'public/assets/blog/')


const createTemplate = (title) => {
    const date = new Date()
    return `
export const data = {
    layout: "post",
    title:  "${title}",
    date:   "${date.toISOString()}",
    categories: [],
    summary: "",
}

<div className="flex justify-center p-5">
    <h1>{data.title}</h1>
</div>
`
}

const createTemplateJsx = () => {
    return `
"use client"

export const DefaultComponent = () => {
    return <div>
        <button>Click me!</button>
    </div>
}
`
}

async function main() {
    while (true) {
        let [newPostPath, newAssetPath, newComponentPath] = ['', '', ''];

        const title = await new Promise((resolve) => {
            rl.question('Enter the title of new Blog: ', (name) => {
                resolve(name)
            })
        })

        newPostPath = path.join(POST_PATH, `${title}`)
        newAssetPath = path.join(ASSET_PATH, title)


        if (fs.existsSync(newPostPath) || fs.existsSync(newAssetPath)) {
            console.log('❌Post with same title already exists, please try again \n');
            continue;
        }

        try {
            console.log('🔃Creating Blog directory')
            fs.mkdir(newPostPath, { recursive: true }, (err) => {
                if (err) throw err
                console.log('🔃Writing post template')
                fs.writeFileSync(path.join(newPostPath, 'index.mdx'), createTemplate(title))
                console.log('🔃Writing JSX template')
                fs.writeFileSync(path.join(newPostPath, 'index.jsx'), createTemplateJsx())
                console.log('✅Created a new Post successfully')
            })
            fs.mkdir(newAssetPath, { recursive: true }, (err) => {
                if (err) throw err
                console.log('✅Created assets folder for the post')
            })
        } catch (error) {
            if (error) console.error(error)
        }
        rl.close()
        return
    }
}

main()