import {useEffect, useRef, useState} from "react";
import mapboxgl from 'mapbox-gl';



export default function MapTool(props) {

    mapboxgl.accessToken = "pk.eyJ1Ijoic2hpdmFuaXgiLCJhIjoiY2t3cmExaHZyMHVxODMxbnljMWhhdzF3eiJ9.P9Fsyeu_1o61PHKGsTa96g";

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-79.29);
    const [lat, setLat] = useState(43.893);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });

        // Create a default Markers and add it to the map.
        props.branchesDetails.map((eachBranch)=>{
            new mapboxgl.Marker()
                .setLngLat([eachBranch.longitude,eachBranch.latitude])
                .setPopup(new mapboxgl.Popup({offset: 30}).setHTML(`<div class="popup-img"><img src=${eachBranch.image} alt="thumbnail"/></div>
            <div class="popup-text">
                <h2>${eachBranch.branchName}</h2>
                <p>${eachBranch.offer}</p>
            </div>`))

                .addTo(map.current)
        })

    });

    const [selectedBranch, setSelectedBranch] = useState(null)



    return (
        <div className="second-container">
            <div ref={mapContainer} className="map-container"/>

        </div>
    )
}