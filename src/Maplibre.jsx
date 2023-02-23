import React, { useEffect, useRef, useState } from "react";
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

export function Maplibre({ id, children, setMap }) {
  const [map, setMapInternal] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) return;

    console.log("create map");
    const newMap = (ref.current = createMap(id));
    setMapInternal(newMap);

    window.maplibre = newMap;

    return () => {
      setMapInternal(null);
      ref.current = null;
      delete window.maplibre;

      // setTimeout is one way to avoid the crash
      //setTimeout(() => {
      console.log("before remove");
      newMap.remove();
      //}, 1);
    };
  }, [id]);

  useEffect(() => {
    if (!map) return;

    const onLoad = () => setMap && setMap(map);
    map.on("load", onLoad);
    const onRemove = () => console.log("on remove") && setMap && setMap(null);
    map.on("remove", onRemove);

    return () => {
      map?.off(onLoad);
      map?.off(onRemove);

      setMap(null);
    };
  }, [map, setMap]);

  return (
    <div className="Maplibre-container" id={id}>
      {children}
    </div>
  );
}
