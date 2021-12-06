import {useEffect, useRef, useState} from "react";
import mapboxgl from 'mapbox-gl';


export default function MapTool(props) {

    mapboxgl.accessToken = "pk.eyJ1Ijoic2hpdmFuaXgiLCJhIjoiY2t3cmExaHZyMHVxODMxbnljMWhhdzF3eiJ9.P9Fsyeu_1o61PHKGsTa96g";

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-79.29);
    const [lat, setLat] = useState(43.893);
    const [zoom, setZoom] = useState(9);

    //convert object-of-objects to an array - for mapping easily
    const branchArr = Object.values(props.branchesDetails);


    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });

        // Add Geolocatecontrol to the map.
        map.current.addControl(
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

        // Create default Markers and popups; add it to the map.
        branchArr.map((eachBranch) => {
            new mapboxgl.Marker({color: 'orange'})
                .setLngLat([eachBranch.longitude, eachBranch.latitude])
                .setPopup(new mapboxgl.Popup({offset: 30}).setHTML(`<div class="popup-img"><img src=${eachBranch.image} alt="thumbnail"/></div>
            <div class="popup-text">
                <h2>${eachBranch.branchName}</h2>
                <p>${eachBranch.offer}</p>
            </div>`))

                .addTo(map.current)
        })

        const marker = new mapboxgl.Marker();

        function add_marker(event) {
            const coordinates = event.lngLat;
            console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat);
            marker.setLngLat(coordinates).addTo(map.current);
        }

        // map.current.on('click', add_marker);
    });

    // const [selectedBranch, setSelectedBranch] = useState(null)


    return (
        <div className="second-container">
            <div ref={mapContainer} className="map-container"/>
        </div>
    )
}