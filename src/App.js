import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'

function App() {
    const [viewport, setViewport] = useState({

        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    });

    return (
   <ReactMapGL
       {...viewport}
       onViewportChange={nextViewport => setViewport(nextViewport)}
       mapboxApiAccessToken="pk.eyJ1Ijoic2hpdmFuaXgiLCJhIjoiY2t3cmExaHZyMHVxODMxbnljMWhhdzF3eiJ9.P9Fsyeu_1o61PHKGsTa96g"
       mapStyle="mapbox://styles/mapbox/dark-v9"
       width="50vw"
       height="100vh"
       >
       Attempt two
   </ReactMapGL>
  );
}

export default App;
