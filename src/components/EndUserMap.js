import mapboxgl from "mapbox-gl";
import {useEffect, useRef, useState} from "react";

import "./endUserMap.css"

export default function EndUserMap(){

    mapboxgl.accessToken = "pk.eyJ1Ijoic2hpdmFuaXgiLCJhIjoiY2t3cmExaHZyMHVxODMxbnljMWhhdzF3eiJ9.P9Fsyeu_1o61PHKGsTa96g";

    const mapContainerRef= useRef(null);
    // const map = useRef(null);
    const [lng, setLng] = useState(-90.29);
    const [lat, setLat] = useState(50.893);
    const [zoom, setZoom] = useState(3);



useEffect(()=>{
    // if (map.endUser) return; // initialize map only once
    const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
    });


    // Add Geolocatecontrol to the map.
    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
// When active the map will receive updates to the device's location as it changes.
            trackUserLocation: true,
// Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: false,
// Hide accuracy circle
            showAccuracyCircle: false,
// Hide user location dot
            showUserLocation: false,
        })
    );


},[])

return (
    <div className="end-user-map-container">
        <div ref={mapContainerRef} className="user-map"/>
    </div>
)
}