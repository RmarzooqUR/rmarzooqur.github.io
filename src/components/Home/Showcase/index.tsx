import { ISHOWCASE } from "@/consts"
import Link from "next/link"

type Props = {
  showcase: ISHOWCASE[]
}

export const Showcase = (props: Props) => {
  return <div className="p-5 flex flex-col justify-center items-center h-screen">
    {/* bg-[#EB9486]  */}
    <h1 className='text-4xl'>Showcase</h1>
    <div className="showcaseList flex md:flex-row flex-col justify-between w-full">
      {props.showcase.map(proj => {
        return <div className="py-5 w-1/3" key={proj.title}>
          <h1 className="font-extrabold">{proj.title}</h1>
          <p>{proj.description}</p>
          {proj.link && <Link target="_blank" className="hover:opacity-50" href={proj.link}>{proj.link}</Link>}
        </div>
      })}
    </div>
  </div>
}