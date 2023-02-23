import "./App.css";
import { useState } from "react";
import { Maplibre } from "./Maplibre";
import { MaplibreLayer } from "./MaplibreLayer";

function App() {
  const [showMap, setShowMap] = useState(true);
  const [showLayer, setShowLayer] = useState(true);
  const [map, setMap] = useState(null);

  return (
    <div className="App">
      <button className="App-button" onClick={() => setShowMap(!showMap)}>
        Toggle map
      </button>
      <button className="App-button" onClick={() => setShowLayer(!showLayer)}>
        Toggle layer
      </button>
      <div className="App-Maplibre">
        {showMap && (
          <Maplibre id="map" setMap={setMap}>
            {showLayer && <MaplibreLayer map={map}></MaplibreLayer>}
          </Maplibre>
        )}
      </div>
    </div>
  );
}

export default App;
