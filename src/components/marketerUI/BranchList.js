import "./branchList.css"

export default function BranchList(props) {

    const branchArr = Object.values(JSON.parse(localStorage.getItem('Branches')));

    const allowAddingBranch = () => {
        localStorage.setItem('allowBranch','true');
    };

    return (<ul className="branch-list">
            <li>
                <div className="add-branch">
                    <button
                        type="submit"
                        onClick={allowAddingBranch}
                    >Add Branch
                    </button>
                </div>
            </li>
            {branchArr.map((branch) => {

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
    )
}