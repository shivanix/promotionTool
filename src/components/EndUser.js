import "./enduser.css"

export default function EndUser(props) {

    const branchArr = Object.values(props.branches)
    return (
        <div className="enduser-container">
            <div className="enduser-form-container">
                <form>
                    <div className="enduser--controls">
                    <div className="enduser-control">
                        <label>Latitude</label>
                        <input type="text"/>
                    </div>
                    <div className="enduser-control">
                        <label>Latitude</label>
                        <input type="text"/>
                    </div>
                        <button type="submit">Add Coordinates</button>
                    </div>
                </form>

            </div>
            <div className="offer-container">
                <ul className="offer-list">

                    {branchArr.map((item) => {
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