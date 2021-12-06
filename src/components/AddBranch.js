import {useState} from "react";
import "./addBranch.css"
export default function AddBranch() {

    const [name, setName] = useState('');
    const [offer, setOffer] = useState('');
    const [imgurl, setImgurl] = useState('');

    let branches = {'name': 'newName', 'image': 'thumbnail', 'latitude': 43.87310,
        'longitude': -79.28572, 'offer': 'offer' }

    const handle = () => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Promoffer', offer);
        localStorage.setItem('Img-url', imgurl);
    };


    const updateData= (data) => {

    }
        // localStorage.setItem('Branches', branches object})
        // newBranch = {....new branch data}
        //
        // let updatedBranches = localStorage.getItem('Branches')
        //
        // updatedBranches[newBranch.id] = newBranch
        //
        // localStorage.setItem('Branches', updatedBranches})

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
