import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import ResidentInfo from "./components/ResidentInfo";

function App() {
  const [dataMorty, setDataMorty] = useState({});
  const [locationType, setLocationType] = useState("");

  useEffect(() => {
    const randomLocation = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomLocation}`)
      .then((res) => setDataMorty(res.data));
  }, []);
  console.log("Los de Api", dataMorty);

  const searchLocation = () => {
    if (Number(locationType) === 0 || Number(locationType) > 126) {
      alert("Number not allowed must be in the range between 1 and 126");
      return;
    }

    axios
      .get(`https://rickandmortyapi.com/api/location/${locationType}`)
      .then((res) => setDataMorty(res.data));
  };

  return (
    <div className="App">
      <Header />
      <div className="card-info">
        <div>
          <h2>Name:</h2>
          <p>{dataMorty.name}</p>
        </div>
        <div>
          <h2>Type:</h2>
          <p>{dataMorty.type}</p>
        </div>
        <div>
          <h2>Dimension:</h2>
          <p>{dataMorty.dimension}</p>
        </div>
        <div className="div-population">
          <h2>Population:</h2>
          <p>{dataMorty.residents?.length}</p>
        </div>
        <div className="div-id">
          <h2>ID:</h2>
          <p>{dataMorty.id}</p>
        </div>
      </div>
      <div className="container-search">
        <input
          type="text"
          name="Search"
          placeholder="Enter number from 1 to 126"
          onChange={(e) => setLocationType(e.target.value)}
        />

        <button type="submit" onClick={searchLocation}> Search </button>
      </div>

      <div className="container-list-character">
        <div className="container-character">
          {dataMorty.residents?.map((listResidents) => (
            <ResidentInfo key={listResidents} urlCharacter={listResidents} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
