import { ISHOWCASE } from "@/consts"
import Link from "next/link"

type Props = {
  showcase: ISHOWCASE[]
}

export const Showcase = (props: Props) => {
  return <div className="bg-[#EB9486] p-5 flex flex-col justify-center items-center h-screen">
    <h1 className='text-4xl'>Showcase</h1>
    <div className="showcaseList flex flex-row justify-between">
      {props.showcase.map(proj => {
        return <div className="p-10" key={proj.title}>
          <h1>{proj.title}</h1>
          <p>{proj.description}</p>
          {proj.link && <Link target="_blank" className="hover:opacity-50" href={proj.link}>{proj.link}</Link>}
        </div>
      })}
    </div>
  </div>
}