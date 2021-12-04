import {useState} from 'react';
import 'mapbox-gl/dist/mapbox-gl.css'
import ReactMapGL, {Marker} from 'react-map-gl';
import BranchList from "./components/BranchList";


function App() {



    const [viewport, setViewport] = useState({

        latitude: 43.89310,
        longitude: -79.29572,
        zoom: 10,

    });

    return (
        <div className="main-container"
             style={{
                 border: `3px solid red`,
                 display: `flex`,
                 justifyContent: `space-between`
             }}>
            <div className="first-container">
                <BranchList
                    items={branches}
                />

            </div>
            <div className="second-container">
                <ReactMapGL
                    {...viewport}
                    onViewportChange={nextViewport => setViewport(nextViewport)}
                    mapboxApiAccessToken="pk.eyJ1Ijoic2hpdmFuaXgiLCJhIjoiY2t3cmExaHZyMHVxODMxbnljMWhhdzF3eiJ9.P9Fsyeu_1o61PHKGsTa96g"
                    mapStyle="mapbox://styles/shivanix/ckwrgbosw16pq14odakx3r50k"
                    width="70vw"
                    height="100vh"
                    style={{}}
                >
             
                </ReactMapGL>
            </div>
        </div>
    );
}

export default App;
