import {BiCart} from "react-icons/bi"

const CardWidget = () => {
  return (
    <div>
      <BiCart size={35} color="white" />
      <span style={{color: "white",}}>0</span>
    </div>
  )
}

export default CardWidget
