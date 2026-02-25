import Link from "next/link";
import styles from './styles.module.css'
import VariantGlass from "./VariantGlass";

type Props = {
  variant?: string
}

export default function NavBar({variant}: Props) {
  if (variant === 'glass') {
    return <VariantGlass />
  }
  return <VariantGlass />
}