import {useState} from 'react';
import 'mapbox-gl/dist/mapbox-gl.css'
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import BranchList from "./components/BranchList";


function App() {

    const branches = [
        {branchName: "BranchOne", latitude: 43.87310, longitude: -79.28572, id: "b1", image:"https://images.unsplash.com/photo-1614656048454-dda85616f0a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=100"},
        {branchName: "BranchTwo", latitude: 43.88319, longitude: -79.30572, id: "b2", image: "https://images.unsplash.com/photo-1550827783-07a572d03390?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGJhbmslMjBtYXJrZXRpbmd8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
        {branchName: "BranchThree", latitude: 43.86319, longitude: -78.30572, id: "b3", image: "https://images.unsplash.com/photo-1518534543674-5933a2307dca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" }

    ]

    const [viewport, setViewport] = useState({

        latitude: 43.89310,
        longitude: -79.29572,
        zoom: 10,

    });

    const [selectedBranch, setSelectedBranch] = useState(null)

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
                    {branches.map((location) => {
                        return <Marker key={location.id}
                                       latitude={location.latitude}
                                       longitude={location.longitude}>
                            <button className="marker-btn"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSelectedBranch(location)

                                    }}
                            >
                                <img src="/mapbox-marker-icon-orange.svg" alt=" "/>
                            </button>
                        </Marker>
                    })}

                    {selectedBranch ? (<Popup longitude={selectedBranch.longitude} latitude={selectedBranch.latitude}>
                            <div className="popup-img">
                                <img src={selectedBranch.image}/> </div>
                            <div className="popup-text">
                            <h2>{selectedBranch.branchName}</h2>
                            </div>
                        </Popup>
                    ) : null}
                </ReactMapGL>
            </div>
        </div>
    );
}

export default App;
