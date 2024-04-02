
import "./Main.css"
import kedi from "./images/kedi.png"

const Main = () => {
  const paragRaf = {
    color: "gray",
    fontSize: "1rem"
  }

  return (
    <div className="main">Main
      <div>
    <img className="img" src="https://ozenduvarkagidi.com.tr/images/urunler/Gokyuzu-Manzarasi-39-resim-10957.jpg" alt="manzara" />

    <img className="img" src="https://ozenduvarkagidi.com.tr/images/urunler/Gokyuzu-Manzarasi-24-resim-10942.jpg" alt="manzara1" />

    <img className="img" src={kedi} alt="kedi" />

    <img className="img" src="./img/lessi.jpg" alt="lessi" />

    <p style={paragRaf} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem amet nam ut ipsum praesentium assumenda harum officiis. Beatae sapiente doloribus iusto, soluta saepe molestias repellat numquam minus unde fugiat. Quidem?</p>
     
      </div>
    </div>
    
  )
}

export default Main