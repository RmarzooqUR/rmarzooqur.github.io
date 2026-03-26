import Link from "next/link";
import styles from './styles.module.css'

export default function VariantGlass() {
  return <div className={`${styles.nav_container}`}>
    <div className={`${styles.glass} py-3 md:py-4 px-5 md:px-10 flex flex-col md:flex-row w-5/6 justify-between`}>
      <div className={`${styles.logo} flex order-1 justify-center`}>
        <Link href="/" className={styles['nav-button']}>Logo</Link>
        {/* needs info elements */}
        {/* ex: next availability */}
      </div>
      <div className="order-2 md:block nav flex flex-row justify-center">
        <Link href="/" className={styles['nav-button']}>
          Home
        </Link>
        <Link href="" className={styles['nav-button']}>
          Tools
        </Link>
        <Link href="/blog" className={styles['nav-button']}>
          Blog
        </Link>
        <Link href="" className={styles['nav-button']}>
          Contact
          {/* needs to be a CTA */}
          {/* like - become a client */}
          {/* request a callback */}
          {/* send requirements */}
        </Link>
        {/* or CTA here */}
      </div>
    </div>
  </div>
}