import Link from "next/link";
import styles from './styles.module.css'

export default function NavBar() {
  return <div className={`${styles.nav_container}`}>
      <div className={`${styles.glass} py-8 px-20 flex flex-row justify-between`}>
        <div className="logo">
          <Link href={'/'} className="mx-2 hover:opacity-35">Logo</Link>
        </div>
        <div className="nav flex flex-row justify-center">

          <Link href="/" className="mx-2 hover:opacity-35">
            Home
          </Link >
          <Link href="" className="mx-2 hover:opacity-35">
            Resources
          </Link >
          <Link href="/blog" className="mx-2 hover:opacity-35">
            Blog
          </Link >
          <Link href="" className="mx-2 hover:opacity-35">
            Contact
          </Link >
        </div>
      </div>
    </div>
}