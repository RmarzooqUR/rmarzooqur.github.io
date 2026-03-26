import { FC } from "react";
import styles from './styles.module.css'
export const Footer: FC = () => {
  return (
    <div className={`${styles.footer} bottom-0 relative h-auto px-5 py-8`}>
      <h1 className='text-4xl'>Contact Us</h1>
      <p>Fill form for services</p>
      <p><a href="https://storyset.com/technology">Technology illustrations by Storyset</a></p>
    </div>
  )
}