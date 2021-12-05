import BranchList from "./BranchList";
import MapTool from "./MapTool";

export default function MarketerPage(props) {

    //
    // const branches = [
    //     {
    //         id: "b1",
    //         branchName: "BranchOne",
    //         latitude: 43.87310,
    //         longitude: -79.28572,
    //         offer: "Offer 1",
    //         image: "https://images.unsplash.com/photo-1614656048454-dda85616f0a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=100"
    //     },
    //     {
    //         id: "b2",
    //         branchName: "BranchTwo",
    //         latitude: 43.88319,
    //         longitude: -79.30572,
    //         offer: "Offer 2",
    //         image: "https://images.unsplash.com/photo-1550827783-07a572d03390?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGJhbmslMjBtYXJrZXRpbmd8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    //     },
    //     {
    //         id: "b3",
    //         branchName: "BranchThree",
    //         latitude: 43.86319,
    //         longitude: -78.30572,
    //         offer: "Offer 3",
    //         image: "https://images.unsplash.com/photo-1518534543674-5933a2307dca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    //     }
    // ]
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