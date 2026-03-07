import * as motion from 'motion/react-client'

export function HeroBanner() {
  return <div className='p-5 '> 
    {/*bg-[#BCF4DE]*/}
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="mx-2">
        <p className="font-light">{">"}_ whoami</p>
      </div>
    </motion.div>
    <motion.div className='' initial={{ opacity: 0 }} animate={{ opacity: 1, animationDelay: '30' }}>
      <div className="flex h-96 items-center justify-center">
        <div>
          <p className="font-light">rmarzooqur</p>
          <p>Md Marzooq Ur Rahman</p>
          <p className="font-extralight">{">"}_ react dev</p>
        </div>
      </div>
    </motion.div>
  </div>
}