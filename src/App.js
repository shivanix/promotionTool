import {useState} from 'react';
import 'mapbox-gl/dist/mapbox-gl.css'
import ReactMapGL, {Marker} from 'react-map-gl';
import BranchList from "./components/BranchList";


function App() {

    const branches = [
        {branchName: "BranchOne", latitude:43.87310, longitude: -79.28572, id: "b1"},
        {branchName: "BranchTwo", latitude:43.88319, longitude: -79.30572, id: "b2"},
        {branchName: "BranchThree", latitude:44.88319, longitude: -80.30572, id: "b3"}

    ]

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
                    {branches.map((location)=>{
                        return <Marker key={location.id}
                                       latitude={location.latitude}
                                       longitude={location.longitude}>
                            <button>
                                <img src="/mapbox-marker-icon-orange.svg" alt=" "/>
                            </button>
                        </Marker>
                    })}
                </ReactMapGL>
            </div>
        </div>
    );
}

export default App;
