import {useState} from "react";
import "./addBranch.css"
import { uuid } from 'uuidv4';

export default function AddBranch(props) {

    const [name, setName] = useState(props.editBranch.branchName);
    const [offer, setOffer] = useState(props.editBranch.offer);
    const [imgurl, setImgurl] = useState(props.editBranch.image);
    const [latitude, setLatitude] = useState(props.editBranch.latitude);
    const [longitude, setLongitude] = useState(props.editBranch.longitude);


    const handle = () => {
        const updatedBranches = JSON.parse(localStorage.getItem('Branches'));
        updatedBranches[props.editBranch.id] = {'id':props.editBranch.id, 'branchName': name, 'image': imgurl, 'latitude': latitude, 'longitude': longitude, 'offer': offer};
        localStorage.setItem('Branches', JSON.stringify(updatedBranches));
        localStorage.setItem('allowBranch', 'false');
    };

    return (
        <form>
            <div className="new-branch-controls">
                <div className="new-branch--control">
                    <label >New Branch Name</label>
                    <input type="text" id="bName" name="newBranchname" placeholder="New Branch.."
                           value={name}
                           onChange={(e)=>{setName(e.target.value)}}

                    />
                </div>
                <div className= "new-branch--control">
                    <label >Promotional Offer</label>
                    <input type="text" id="oName" name="newOffer" placeholder="New promotional offer.."
                           value={offer}
                           onChange={(e)=>{setOffer(e.target.value)}}
                    />
                </div>

                <div className= "new-branch--control">
                    <label >Image URL</label>
                    <input type="text" id="img-url" name="image-url" placeholder="Add Image URL.."
                           value={imgurl}
                           onChange={(e)=>{setImgurl(e.target.value)}}
                    />
                </div>
            </div>
            <div className="new-branch-submit">
                <button onClick={handle}>Submit</button>
            </div>
        </form>

    )
}
