import BranchList from "./BranchList";
import MapTool from "./MapTool";

export default function MarketerPage(props) {
return(
    <div className="main-container">
        <div className="first-container">
            <BranchList
                items={props.branches}
            />

        </div>
        <MapTool
            branchesDetails={props.branches}
        />
    </div>
)
}