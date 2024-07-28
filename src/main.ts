import "./style.css";

import Map from "@arcgis/core/Map";
import SceneView from '@arcgis/core/views/SceneView';

const map = new Map({
  basemap: "topo-vector"
});

new SceneView({
  container: "map-viewer",
  map,
  camera: {
    position: {
      x: -100,
      y: 40,
      z: 7_000_000
    }
  }
});
