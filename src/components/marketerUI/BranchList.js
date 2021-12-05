import "./branchList.css"

export default function BranchList(props) {

    return (
        <ul className="branch-list">
            {props.items.map((branch) => {

                return <li className="branch-list-item">
                    <div className="image-box">
                        <img src={branch.image} alt="thumbnail"/>
                    </div>
                    <div className="text-box">
                        <h2> {branch.branchName}</h2>
                    </div>
                </li>
            })}
        </ul>
    );
}