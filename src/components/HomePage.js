import Button from "./Button";
import "./homepage.css"
export default function HomePage() {
    return(
        <div className="home-main-container">
            <div className="btn-container">
            <div >
                <h2>Marketer UI</h2>
               <p> You can access the Marketer UI through the nav bar</p>
               <p> You can add new branches by clicking on the button "Add Branch"</p>
               <p> You can choose the location for the new branch on the map</p>
               <p> You can fill the details of the new branch in the form generated</p>
               <p> You can delete a branch if yu dont like it!</p>
               <p> Deletion of a branch will remove the branch's marker as well</p>
            </div>
            <div >
                <h2>End-User UI</h2>
                <p> You can access the End-User UI through the nav bar</p>
            </div>
            </div>
        </div>
    )
}