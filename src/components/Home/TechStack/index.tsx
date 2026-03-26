import { FC } from "react";
import Image from "next/image";

const techStack = [
    { title: 'JavaScript', src: 'assets/js.svg' },
    { title: 'React', src: 'assets/React.svg' },
    { title: 'Nextjs', src: 'assets/Next.js.svg' },
    { title: 'Django', src: 'assets/Django.svg' },
    { title: 'Python', src: 'assets/Python.svg' },
    { title: 'Nodejs', src: 'assets/Node.js.svg' },
]

export const TechStack: FC = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="gap-4 flex flex-row justify-between pb-10 overflow-x-hidden">
                {techStack.map(i => {
                    return (
                        <div key={i.title} className="flex-col justify-center w-20">
                            <Image className="rounded-3xl" width={100} height={100} src={i.src} alt="" />
                            <p className="text-center">{i.title}</p>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}