import BranchList from "./BranchList";
import MapTool from "./MapTool";
import Modal from "../Modal";
import EditBranch from "../EditBranch";
import {useState} from "react";

export default function MarketerPage(props) {

    const [bttnDisplay, setBttnDisplay] = useState('Add Branch');
    const [, updateData] = useState({});
    const [refreshMarkers, setRefreshMarkers] = useState(false);
    const [modalInfo, setModalInfo] = useState({
        title: 'Edit the branch',
        message: 'Please enter new branch info',
        toggle: false
    });
    const [editBranch, setEditBranch] = useState(null);

    const toggleModal = () => {
        setModalInfo(prev => {
            return {...prev, toggle: !modalInfo.toggle}
        });
        setBttnDisplay('Add Branch');
    };
    // Save coords received to the localstorage key newCoords
    const setNewBranchCoords = (coords) => {
        localStorage.setItem('newCoords', JSON.stringify(coords));
    };


    return (
        <div className="main-container">

            <div className="first-container">
                <BranchList
                    bttnDisplay={bttnDisplay}
                    setBttnDisplay={setBttnDisplay}
                    updateData={updateData}
                    setRefreshMarkers={setRefreshMarkers}
                    onEdit={toggleModal}
                    setEditBranch={setEditBranch}
                />

            </div>
            <MapTool
                setNewBranchCoords={setNewBranchCoords}
                setBttnDisplay={setBttnDisplay}
                setRefreshMarkers={setRefreshMarkers}
                refreshMarkers={refreshMarkers}
            />
            {modalInfo.toggle &&
            <Modal title={modalInfo.title}
                   message={modalInfo.message}
                   form={
                       <EditBranch
                           setBttnDisplay={props.setBttnDisplay}
                           editBranch={editBranch}
                       />}
                   onConfirm={toggleModal}
            />}
        </div>
    )
}