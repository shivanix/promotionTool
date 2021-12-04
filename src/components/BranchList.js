export default function BranchList(props){

    return(
    <ul className="branch-list">
        {props.items.map((branch)=>{

            return <li className="branch-list-item"
            style={{listStyle:`none`,
                border:`3px solid red`,
            margin:0,
            padding: 0,
            }}
            >
                <h2> {branch.branchName}</h2>
            </li>


        })}
    </ul>
    );
}