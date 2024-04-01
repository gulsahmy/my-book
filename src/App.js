import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {

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

    </div>
  );
}

export default App
