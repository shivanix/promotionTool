import ReactMapGL, {GeolocateControl, Marker, Popup, StaticMap} from "react-map-gl";
import {useState} from "react";

export default function MapTool(props) {


    const [viewport, setViewport] = useState({
        latitude: 43.89310,
        longitude: -79.29572,
        zoom: 10,

    });

    const [selectedBranch, setSelectedBranch] = useState(null)



    return (
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
                {props.branchesDetails.map((location) => {
                    return <Marker key={location.id}
                                   latitude={location.latitude}
                                   longitude={location.longitude}>
                        <button className="marker-btn"
                                onMouseOver={(e) => {
                                    e.preventDefault();
                                    setSelectedBranch(location)

                                }}
                        >
                            <img src="/mapbox-marker-icon-orange.svg" alt=" "/>
                        </button>
                    </Marker>
                })}

                {selectedBranch ? (<div className="popup-main"><Popup
                        longitude={selectedBranch.longitude}
                        latitude={selectedBranch.latitude}
                        onClose={() => {
                            setSelectedBranch(null)
                        }}>
                        <div className="popup-img">
                            <img src={selectedBranch.image} alt="thumbnail"/></div>
                        <div className="popup-text">
                            <h2>{selectedBranch.branchName}</h2>
                            <p>{selectedBranch.offer}</p>
                        </div>
                    </Popup>
                    </div>
                ) : null}

                <GeolocateControl
                    positionOptions={{enableHighAccuracy: true}}
                    trackUserLocation={true}
                    showUserLocation={true}
                    onClick={(e)=>{
                        console.log(e)
                    }}
                    onGeolocate={('click', (e)=>{
                        let cordino = e

                        console.log("Did you find it", cordino)
                        onclick((e)=>{
                            console.log("Thisssssssss",e)
                        })
                    })}

                    <StaticMap



                    />


                />
            </ReactMapGL>
        </div>
    )
}