import "./enduser.css"
import EndUserMap from "./EndUserMap";
import {useState} from "react";

export default function EndUser(props) {
    // const [centerToCoordinates, setCenterToCoordinates] = useState([-90.29, 50.893]);

    // Longitude coords to center map at
    const [centerToLng, setCenterToLng] = useState(-90.29);

    // Latitude coords to center map at
    const [centerToLat, setCenterToLat] = useState(50.893);


    const [lngInput, setLngInput] = useState(); // User coordinate input for longitude
    const [latInput, setLatInput] = useState();// User coordinate input for latitude

/**********************************************************************/


    const branchArr = Object.values(JSON.parse(localStorage.getItem('Branches')));


    //Func that sets the coords of END-USER
    const setCoordinates = () => {
        setCenterToLng(lngInput);
        setCenterToLat(latInput);
    };

    // Compare user coordinates and marker/branch coordinates
    //HERE IN THE FUNC THE PARAMS WILL BE MARKER/BRANCH COORDS
    // If they are within a margin of less than 0.030 of END-USER LOCATION
    // Then return a boolean, symbolizing if they are near or not
    // and the location should be displayed
    const isNear = (lng, lat) => {
        const lngDist = Math.abs(Math.abs(lng) - Math.abs(centerToLng));
        const latDist = Math.abs(Math.abs(lat) - Math.abs(centerToLat));
        // console.log('disntace', lngDist, latDist)
        return lngDist < 0.030 && latDist < 0.030;
    };


    //fUNC TO CHECK IF THE COORDS OF branches ARE WITHIN THE RANGE OF END-USER LOCATION
    //w.r.t THE CALC IN isNear() func
    const filteredBranches = branchArr.filter(
        branch=> isNear(branch.longitude, branch.latitude));


    return (
        <div className="enduser-container">
            <div className="enduser-form-container">
                <form
                    onSubmit={event => {
                        event.preventDefault();
                        setCoordinates();
                    }}
                >
                    <div className="enduser--controls">
                        <div className="enduser-control">
                            <label>Longitude</label>
                            <input type="text"
                                   value={lngInput}
                                   onChange={(e)=>{setLngInput(e.target.value)}}
                            />
                        </div>
                        <div className="enduser-control">
                            <label>Latitude</label>
                            <input type="text"
                                   value={latInput}
                                   onChange={(e)=>{
                                       setLatInput(e.target.value)}}

                            />
                        </div>
                        <button
                            type="submit"
                        >Set Coordinates</button>
                    </div>
                </form>

            </div>
            <div className="offer-container">
                <ul className="offer-list">
                    <li>
                        <EndUserMap
                            centerToLng={centerToLng}
                            centerToLat={centerToLat}
                            setCenterToLng={setCenterToLng}
                            setCenterToLat={setCenterToLat}

                            /*Send setStates for coords input as props*/
                            setLngInput={setLngInput}
                            setLatInput={setLatInput}
                        />
                    </li>

                    {filteredBranches.map((item) => {
                        return <li>
                            <div className="offer-list-item">
                                <div className="offer-list-item-img">
                                    <img src={item.image} alt="thumbnail"/>
                                </div>
                                <div className="offer-list-item-textbox">
                                    <div className="textbox-first">
                                        <h2>{item.offer}</h2>
                                    </div>
                                    <div className="textbox-second">
                                        <p>{item.branchName}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    })}

                </ul>
            </div>
        </div>
    );
}