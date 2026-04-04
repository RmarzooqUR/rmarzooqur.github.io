const fs = require('node:fs')
const readline = require('node:readline')
const path = require('node:path')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('creating blog and assets')
const BASE_DIR = path.resolve(__dirname, '../')
const POST_PATH = path.join(BASE_DIR, '_posts/')
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

async function main() {
    while (true) {
        let [newPostPath, newAssetPath] = ['', ''];

        const title = await new Promise((resolve) => {
            rl.question('Enter the title of new Blog: ', (name) => {
                resolve(name)
            })
        })

        newPostPath = path.join(POST_PATH, `${title}.mdx`)
        newAssetPath = path.join(ASSET_PATH, title)

        if (fs.existsSync(newPostPath) || fs.existsSync(newAssetPath)) {
            console.log('Post with same title already exists, please try again \n');
            continue;
        }

        try {
            fs.writeFileSync(newPostPath, createTemplate(title))
            console.log('Created a new Post successfully')
            fs.mkdir(newAssetPath, { recursive: true }, (err) => {
                if (err) throw err
                console.log('Created assets folder for the post')
            })
        } catch (error) {
            if (error) console.error(error)
        }
        rl.close()
        return
    }
}

main()