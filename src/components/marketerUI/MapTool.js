import {useEffect, useRef, useState} from "react";
import mapboxgl from 'mapbox-gl';
import Modal from "../Modal";
import AddBranch from "../AddBranch";


export default function MapTool(props) {
    mapboxgl.accessToken = "pk.eyJ1Ijoic2hpdmFuaXgiLCJhIjoiY2t3cmExaHZyMHVxODMxbnljMWhhdzF3eiJ9.P9Fsyeu_1o61PHKGsTa96g";

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-79.29);
    const [lat, setLat] = useState(43.893);
    const [zoom, setZoom] = useState(9);
    const [modalInfo, setModalInfo] = useState({
        title: 'Add new branch',
        message: 'Please enter new branch info',
        toggle: false
    });
    const toggleModal = () => {
        setModalInfo(prev => {
            return {...prev, toggle: !modalInfo.toggle}
        });
        props.setBttnDisplay('Add Branch');
    };

    //convert object-of-objects to an array - for mapping easily
    const branchArr = Object.values(JSON.parse(localStorage.getItem('Branches')));

    function add_marker(event) {
        console.log('allowBranch', localStorage.getItem('allowBranch'))
        if (localStorage.getItem('allowBranch') === 'true') {
            const coordinates = event.lngLat;
            props.setNewBranchCoords(coordinates);
            localStorage.setItem('allowBranch', 'false');
            toggleModal();
        }
    }

    useEffect(() => {
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v10',
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

                .addTo(map.current);

        })

        map.current.on('click', add_marker);
        props.setRefreshMarkers(false);
    },[props.refreshMarkers]);


    return (
        <div className="second-container">
            {modalInfo.toggle &&
            <Modal title={modalInfo.title}
                   message={modalInfo.message}
                   form={
                       <AddBranch
                           setBttnDisplay={props.setBttnDisplay}
                       />}
                   onConfirm={toggleModal}
            />}
            <div ref={mapContainer} className="map-container"/>
        </div>
    )
}