// import ReactMapGL, {GeolocateControl, Marker, Popup, StaticMap} from "react-map-gl";
import {useEffect, useRef, useState} from "react";
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

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
    });
    // const [viewport, setViewport] = useState({
    //     latitude: 43.89310,
    //     longitude: -79.29572,
    //     zoom: 10,
    //
    // });

    const [selectedBranch, setSelectedBranch] = useState(null)


    return (
        <div className="second-container">
            <div ref={mapContainer} className="map-container" />
        </div>
    )
}