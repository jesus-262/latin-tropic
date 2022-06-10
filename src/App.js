import "./App.css";
import Header from "./component/Header";
import Section1 from "./component/Section1";
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";
import Section4 from "./component/Section4";
import Section5 from "./component/Section5";
import Video from "./component/Video";

function App() {
  return (
    <div className="App">
      <Header foto="Recurso 1-100" />
      <Video />
      <Section1
        foto="Recurso 2-100"
        texto="Maxi estampados inspirados en la
flora tropical son los
protagonistas de la nueva
colección."
      />

      <Section2
        foto1="Recurso 4-100"
        foto2="Recurso 3-100"
        foto3="Recurso 5-100"
        foto4="Recurso 6-100"
      />
      <Section3
        foto1="Recurso 7-100"
        foto2="Recurso 8-100"
        foto3="Recurso 9-100"
        texto="Lentes de sol “CAT” en carey, un
        must pata este verano "
      />
      <Section4
        foto1="Recurso 17-100"
        foto2="Recurso 11-100"
        foto3="Recurso 12-100"
        foto4="Recurso 13-100"
        foto5="Recurso 14-100"
        
        texto="Linos y twills de algodón en
        colores moka y terrosos
        contrastan con tonalidades
        vibrantes como el azafrán. "
        
      />
      <Section5
        foto1="Recurso 16-100"
        foto2="Recurso 15-100"
       
        
      />
    </div>
  );
}

export default App;
