import styles from './styles.module.css'

interface Props {
  text: string[], // for multiple texts appearing and disappearing one after other
}

export const TypeWriter = (props: Props) => {
  return <p className={`${styles.typewriter}`}>
    {props.text[0]}
  </p>
}