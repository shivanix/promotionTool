import "./branchList.css"
import {useEffect, useState} from "react";
import {uuid} from "uuidv4";

export default function BranchList(props) {
    //Convert obj-of-obj to array
    const branchArr = Object.values(JSON.parse(localStorage.getItem('Branches')));


    const allowAddingBranch = () => {
        localStorage.setItem('allowBranch','true');
        props.setBttnDisplay('Click on the map to add the new branch');
    };

    const editBranch = (branch) => (event) => {
        console.log('editing', branch);
        props.onEdit();
        props.setEditBranch(branch);
    };

    const deleteBranch = (id) => (event) => {
        console.log('deleting', id);
        const updatedBranches = JSON.parse(localStorage.getItem('Branches'));
        delete updatedBranches[id];
        localStorage.setItem('Branches', JSON.stringify(updatedBranches));
        props.updateData({});
        props.setRefreshMarkers(true);
    };
    return (<ul className="branch-list">
            <li>
                <div className="add-branch">
                    <button
                        type="submit"
                        onClick={allowAddingBranch}
                    >{props.bttnDisplay}
                    </button>
                </div>
            </li>
            {branchArr.map((branch) => {
                console.log(branch);
                return <li className="branch-list-item">
                    <div className="image-box">
                        <img src={branch.image} alt="thumbnail"/>
                    </div>
                    <div className="text-btn-box">
                        <h2> {branch.branchName}</h2>
                        <p>{branch.offer}</p>

                        <div className="btn-box">
                            <div className="btn-branch">
                                <button onClick={editBranch(branch)}>Edit</button>
                            </div>
                            <div className="btn-branch">
                                <button onClick={deleteBranch(branch.id)}>Delete</button>
                            </div>
                        </div>

                    </div>

                </li>
            })}
        </ul>
    )
}