import BranchList from "./BranchList";
import MapTool from "./MapTool";
import Modal from "../Modal";
import AddBranch from "../AddBranch";
import {useState} from "react";

export default function MarketerPage(props) {

    const [bttnDisplay, setBttnDisplay] = useState('Add Branch');
    const [, updateData] = useState({});
    const [refreshMarkers, setRefreshMarkers] = useState(false);


    const setNewBranchCoords = (coords) => {
        localStorage.setItem('newCoords',JSON.stringify(coords));
    };


    return(
        <div className="main-container">

            <div className="first-container">
                <BranchList
                    bttnDisplay={bttnDisplay}
                    setBttnDisplay={setBttnDisplay}
                    updateData={updateData}
                    setRefreshMarkers={setRefreshMarkers}
                />

            </div>
            <MapTool
                setNewBranchCoords={setNewBranchCoords}
                setBttnDisplay={setBttnDisplay}
                setRefreshMarkers={setRefreshMarkers}
                refreshMarkers={refreshMarkers}
                // refreshMarkers={refreshMarkers}
                // setRefreshMarkers={setRefreshMarkers}
            />
        </div>
    )
}