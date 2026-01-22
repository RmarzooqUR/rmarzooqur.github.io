import { ISHOWCASE } from "@/consts"
import Link from "next/link"

type Props = {
  showcase: ISHOWCASE[]
}

export const Showcase = (props: Props) => {
  return <div className="projects flex flex-col justify-center items-center">
    <h1 className='text-4xl'>Showcase</h1>
    <div className="showcaseList">
      {props.showcase.map(proj => {
        return <div key={proj.title}>
          <h1>{proj.title}</h1>
          <p>{proj.description}</p>
          {proj.link && <Link href={proj.link}>{proj.title}</Link>}
        </div>
      })}
    </div>
  </div>
}