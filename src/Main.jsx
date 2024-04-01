
import "./Main.css"
import kedi from "./images/kedi.png"

const Main = () => {
  return (
    <div className="main">Main
      <div>
    <img className="img" src="https://ozenduvarkagidi.com.tr/images/urunler/Gokyuzu-Manzarasi-39-resim-10957.jpg" alt="manzara" />

    <img className="img" src="https://ozenduvarkagidi.com.tr/images/urunler/Gokyuzu-Manzarasi-24-resim-10942.jpg" alt="manzara1" />

    <img className="img" src={kedi} alt="kedi" />

    <img className="img" src="./img/lessi.jpg" alt="lessi" />
     
      </div>
    </div>
    
  )
}

export default Main