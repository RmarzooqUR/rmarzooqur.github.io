import Image from 'next/image'
import styles from './styles.module.css'


export function HeroBanner() {
  return <div className='p-2 '>
    {/*bg-[#BCF4DE]*/}
    <div className="flex w-full h-screen items-center">
      {/* 2 columns */}

      {/* left col */}
      {/* hero title */}
      {/* hero pitch */}
      {/* CTA or showcase section */}
      <div className="px-3 w-1/2 h-full flex items-center">
        <div className="flex-col flex">

          <h1 className="text-5xl">
            <span>
              Your <span className='text-yellow-500'>partner</span> in Digital Transformation.
            </span>
            <span> Delivering Value with</span>
            <span className="text-blue-600"> Technology</span>
          </h1>
          <div className="flex flex-row justify-start text-2xl gap-3 w-full py-5">
            <button className={`${styles.btn} ${styles.secondary}`}>Explore Works</button>
            <button className={styles.btn}>Start Journey</button>
          </div>
        </div>
      </div>

      {/* right col */}
      {/* graphic */}
      {/* robot & human working together? */}
      {/* project flow */}
      {/* carousel ? */}
      <div className="px-3 w-1/2 h-full flex items-center justify-end">
        <Image alt='' width={1000} height={1000} src={'./assets/Telecommuting-rafiki.svg'} />
      </div>
    </div>
  </div>
}
