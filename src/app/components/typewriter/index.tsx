import styles from './styles.module.css'

interface Props {
  text: string[], // for multiple texts appearing and disappearing one after other
}

const TypeWriter = (props: Props) => {
  return <p className="">
    {props.text[0]}
  </p>
}