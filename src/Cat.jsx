import { Name } from "./Name"

const Cat = ({ name, img, color = "green", isBlueEyed }) => {
    return (

        <div>
        <Name name={name} />
        <p>Blue eyed? : {isBlueEyed ? "Yes" : "No"} </p>
        <img src={img} alt="cat-img" height="300px" />
        <p style={{backgroundColor: color}}> Color: {color} </p>
        <hr />
        </div>

    )
}

export default Cat