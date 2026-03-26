import { ISHOWCASE } from "@/consts"
import Link from "next/link"

type Props = {
  showcase: ISHOWCASE[]
}

export const Showcase = (props: Props) => {
  return <div className="py-5 flex flex-col justify-center items-center">
    {/* bg-[#EB9486]  */}
    <h1 className='text-4xl p-5'>Showcase</h1>
    <div className="showcaseList flex flex-col w-full">
      {props.showcase.map(proj => {
        return <div className="py-5 w-full flex flex-col justify-end h-screen shadow-2xl" key={proj.title}>
          <div className="px-5">
            <h1 className="font-extrabold">{proj.title}</h1>
            <p>{proj.description}</p>
            {proj.link && <Link target="_blank" className="hover:opacity-50" href={proj.link}>{proj.link}</Link>}
          </div>
        </div>
      })}
    </div>
  </div>
}