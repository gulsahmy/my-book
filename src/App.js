import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Cat from "./Cat";
import Card from "./components/card/Card";
import data from "./data"


function App() {

  console.log(data)

  const dnm = "Kocaeli Üniversitesi"
  const deneme = "Bilgisayar Programcılığı"

  return (
    <div className="App">
      <h2 style={{ color: "blue", fontSize: "3rem" }}>Gülşah Mutluay</h2>
      <p className="par">{dnm}</p>
      <p className="par">{deneme}</p>

      <Header />
      <Main />
      <Footer />
      <Cat 
      name="Cenitin" 
      img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/A_baby_british_cat.jpg/220px-A_baby_british_cat.jpg" 
      color= "grey"
      isBlueEyed= {true} />

      <Cat 
      name="Hıdır" 
      img="https://www.whiskas.com.tr/Content/img/home/article-kittenV2.png" 
      color= "yellow"
      isBlueEyed= {true} />
      
      <Cat   
      name="Garfield" 
      img="https://upload.wikimedia.org/wikipedia/en/b/bc/Garfield_the_Cat.svg" 
      isBlueEyed= {false}
       />



       <h3 style= {{textAlign:"center"}}>LANGUAGES</h3>

       {
        data.map((item, i) => {
          return <Card key={item.id} lang={item.language} img={item.img} />
        })
       }





      

 

    </div>
  );
}

export default App
