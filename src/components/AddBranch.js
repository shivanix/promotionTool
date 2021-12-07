import {useState} from "react";
import "./addBranch.css"
import { uuid } from 'uuidv4';

export default function AddBranch(props) {

    const [name, setName] = useState('');
    const [offer, setOffer] = useState('');
    const [imgurl, setImgurl] = useState('');

    const handle = () => {
        const coords = JSON.parse(localStorage.getItem('newCoords'));
        const updatedBranches = JSON.parse(localStorage.getItem('Branches'));
        const newId = uuid();
        updatedBranches[newId] = {'id':newId, 'branchName': name, 'image': imgurl, 'latitude': coords.lat, 'longitude': coords.lng, 'offer': offer};
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

            {localStorage.getItem('Name') && (
                <div>
                    Name: <p>{localStorage.getItem('Name')}</p>
                </div>
            )}

            {localStorage.getItem('Promoffer') && (
                <div>
                    Name: <p>{localStorage.getItem('Promoffer')}</p>
                </div>
            )}

            {localStorage.getItem('Img-url') && (
                <div>
                    Name: <p>{localStorage.getItem('Img-url')}</p>
                </div>
            )}
        </form>

    )
}