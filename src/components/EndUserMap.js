import mapboxgl from "mapbox-gl";
import {useEffect, useRef, useState} from "react";

import "./endUserMap.css"

export default function EndUserMap(props) {

    mapboxgl.accessToken = "pk.eyJ1Ijoic2hpdmFuaXgiLCJhIjoiY2t3cmExaHZyMHVxODMxbnljMWhhdzF3eiJ9.P9Fsyeu_1o61PHKGsTa96g";

    const mapContainerRef = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-90.29);
    const [lat, setLat] = useState(50.893);
    const [zoom, setZoom] = useState(3);
    const [renderedOnce, setRenderedOnce] = useState(false);


    const easeTo = (coordinates) => {
        if (Number.isFinite(coordinates[0]) || Number.isFinite(coordinates[1]) || coordinates[0] > 90 || coordinates[0] < -90 || coordinates[1] > 90 || coordinates[1] < -90) {
            console.log('invalid coordinates');
            return;
        }
        console.log('easing')
        map.current.easeTo({center: coordinates, zoom: 13});
    };

    //convert object-of-objects to an array - for mapping easily
    const branchArr = Object.values(JSON.parse(localStorage.getItem('Branches')));

    useEffect(() => {
        console.log('mapccurent', map.current)
        if (!map.current) { // initialize map only once
            console.log('creating map')
            map.current = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [lng, lat],
                zoom: zoom
            });


            let geolocate = new mapboxgl.GeolocateControl({
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

            // Add Geolocatecontrol to the map.
            map.current.addControl(
                geolocate
            );

            geolocate.on('geolocate', function(e) {
                let lon = e.coords.longitude;
                let lat = e.coords.latitude
                let position = [lon, lat];
                // console.log("positionnnnnnn",position);
                props.setCenterToLng(lon);
                props.setCenterToLat(lat);
            });
            branchArr.map((eachBranch) => {
                new mapboxgl.Marker({color: 'orange'})
                    .setLngLat([eachBranch.longitude, eachBranch.latitude])
                    .setPopup(new mapboxgl.Popup({offset: 30}).setHTML(`<div class="popup-img"><img src=${eachBranch.image} alt="thumbnail"/></div>
            <div class="popup-text">
                <h2>${eachBranch.branchName}</h2>
                <p>${eachBranch.offer}</p>
            </div>`))

                    .addTo(map.current);
                // markers.push(marker);
            })
        }
        console.log(props.centerToLng, props.centerToLat)
        if (renderedOnce) {
            if (props.centerToLng && props.centerToLat) {
                easeTo([props.centerToLng, props.centerToLat]);
            }else{
                console.log('Invalid coordinates');
            }
        } else {
            setRenderedOnce(true);
        }

    }, [props.centerToLng, props.centerToLat])

    return (
        <div className="end-user-map-container">
            <div ref={mapContainerRef} className="user-map"/>
        </div>
    )
}