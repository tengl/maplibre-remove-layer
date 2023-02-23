import React, { useEffect, useState } from "react";
import { Map } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./Maplibre.css";

function createMap(id) {
  return new Map({
    container: id,
    style: "https://demotiles.maplibre.org/style.json",
    center: [-122.486052, 37.830348],
    zoom: 15,
  });
}

export function Maplibre({ id, children, onLoad }) {
  const [map, setState] = useState(null);

  useEffect(() => {
    const newMap = createMap(id);
    setState(newMap);

    window.maplibre = newMap;

    return () => {
      delete window.maplibre;
      newMap.remove();
    };
  }, [id]);

  useEffect(() => {
    if (!map) return;

    map.on("load", () => onLoad && onLoad(map));
  }, [map, onLoad]);

  return (
    <div className="Maplibre-container" id={id}>
      {children}
    </div>
  );
}
