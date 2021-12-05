import "./enduser.css"

export default function EndUser(props) {
    return (
        <div className="enduser-container">
            <div className="form-container">
            <form>
                <label>Latitude</label>
                <input type="text"/>

                <label>Latitude</label>
                <input type="text"/>

                <button type="submit">Add Coordinates</button>
            </form>
            </div>
            <div className="offer-container">
            <ul className="offer-list">

                {props.branches.map((item) => {
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