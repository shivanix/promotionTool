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

        // Create default Markers and popups and add it to the map.
        props.branchesDetails.map((eachBranch) => {
            new mapboxgl.Marker({color: 'orange'})
                .setLngLat([eachBranch.longitude, eachBranch.latitude])
                .setPopup(new mapboxgl.Popup({offset: 30 }).setHTML(`<div class="popup-img"><img src=${eachBranch.image} alt="thumbnail"/></div>
            <div class="popup-text">
                <h2>${eachBranch.branchName}</h2>
                <p>${eachBranch.offer}</p>
            </div>`))

                .addTo(map.current)
        })

        const marker = new mapboxgl.Marker();
        function add_marker (event) {
            const coordinates = event.lngLat;
            console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat);
            marker.setLngLat(coordinates).addTo(map.current);
        }

        map.current.on('click', add_marker);
    });

    const [selectedBranch, setSelectedBranch] = useState(null)


    return (
        <div className="second-container">
            <div ref={mapContainer} className="map-container"/>

        </div>
    )
}