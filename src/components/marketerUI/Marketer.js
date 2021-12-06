import BranchList from "./BranchList";
import MapTool from "./MapTool";
import Modal from "../Modal";
import AddBranch from "../AddBranch";
import {useState} from "react";

export default function MarketerPage(props) {

    const setNewBranchCoords = (coords) => {
        localStorage.setItem('newCoords',JSON.stringify(coords));
    };


    return(
        <div className="main-container">

            <div className="first-container">
                <BranchList
                />

            </div>
            <MapTool
                setNewBranchCoords={setNewBranchCoords}
            />
        </div>
    )
}