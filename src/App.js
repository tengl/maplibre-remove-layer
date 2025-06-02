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
      <div className="App-content">
        <div className="App-Maplibre">
          {showMap && (
            <Maplibre id="map" setMap={setMap}>
              {showLayer && <MaplibreLayer map={map}></MaplibreLayer>}
            </Maplibre>
          )}
        </div>
        <div className="App-description">
          <h1>Reproduce a bug when removing map and layer.</h1>
          <h2>Steps to reproduce.</h2>
            <ol>
            <li>Click Toggle layer button. The line layer should disappear.</li>
            <li>Click Toggle map layer. The map should disappear.</li>
          </ol>
          <p>In step 2. the app crashes instead.</p>

          <p>Checking if (map?.style) before removing layer and source is one (ugly) way to avoid the problem. Setting a timeout for the call to map.remove is a bit better way, but still a work around.</p>
          
        </div>
      </div>
    </div>
  );
}

export default App;
