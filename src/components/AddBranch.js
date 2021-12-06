import {useState} from "react";

export default function AddBranch() {

    const [name, setName] = useState('');
    const [offer, setOffer] = useState('');
    const [imgurl, setImgurl] = useState('');

    



    const handle = () => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Promoffer', offer);
        localStorage.setItem('Img-url', imgurl);
    };

    return (
        <form>
            <div>
                <div>
                    <label >New Branch Name</label>
                    <input type="text" id="bName" name="newBranchname" placeholder="New Branch.."
                    value={name}
                           onChange={(e)=>{setName(e.target.value)}}

                    />
                </div>
                <div>
                    <label >Promotional Offer</label>
                    <input type="text" id="oName" name="newOffer" placeholder="New promotional offer.."
                    value={offer}
                           onChange={(e)=>{setOffer(e.target.value)}}
                    />
                </div>

                <div>
                    <label >Image URL</label>
                    <input type="text" id="img-url" name="image-url" placeholder="Add Image URL.."
                    value={imgurl}
                           onChange={(e)=>{setImgurl(e.target.value)}}
                    />
                </div>
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
