import BranchList from "./BranchList";
import MapTool from "./MapTool";
import Modal from "../Modal";
import AddBranch from "../AddBranch";
import {useState} from "react";

export default function MarketerPage(props) {


    const [modalInfo, setModalInfo] = useState({
        title: 'Add new branch',
        message: 'Please enter new branch info',
        toggle: false
    });


    const toggleModal = () => {
        setModalInfo(prev =>{return {...prev, toggle: !modalInfo.toggle}});
    };

    return(
        <div className="main-container">
            {modalInfo.toggle &&
            <Modal title={modalInfo.title}
                   message={modalInfo.message}
                   form={<AddBranch/>}
                   onConfirm={toggleModal}/>}
            <div className="first-container">
                <BranchList
                    items={props.branches}
                    onAdd={toggleModal}
                />

            </div>
            <MapTool
                branchesDetails={props.branches}
            />
        </div>
    )
}