import "./ButtonExample.css"

const ButtonExample = (props) => {
  return(
    <button onClick={props.onClick}>{props.texto}</button>
  )
}

export default ButtonExample