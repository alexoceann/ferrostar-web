import { customElement } from "solid-element";
import { createSignal } from 'solid-js'
import './App.css'
import MapGL, { Viewport } from "solid-map-gl";
import * as maplibre from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

customElement(
  'workspace-team',
  () => {
    const [viewport, setViewport] = createSignal({
      center: [24., 0.],
      zoom: 4,
    } as Viewport);
  
    return (
      <MapGL
        mapLib={maplibre} // <- Pass MapLibre package here
        options={{ style: 'https://demotiles.maplibre.org/style.json' }}
        viewport={viewport()}
        onViewportChange={(evt: Viewport) => setViewport(evt)}
      />
    );
  }
)
