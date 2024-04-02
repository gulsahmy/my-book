// import "./Buton.css"
import btnStyle from "./Buton.module.css"


function Buton() {
  return (
    <div className={btnStyle.wrapper}>

        <button className={`${btnStyle.btn} ${btnStyle["btn-blue"]}`}>Info</button>

        <button className={`${btnStyle.btn} ${btnStyle["btn-red"]}`}>Back</button>
    </div>
  )
}

export default Buton