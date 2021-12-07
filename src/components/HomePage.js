import Button from "./Button";
import "./homepage.css"
export default function HomePage() {
    return(
        <div className="home-main-container">
            <div className="home-text-box">
                <h1>Hello there!</h1>
            </div>
            <div className="home-child-containers">
            <div >
                <h2>Marketer UI</h2>
               <p> You can access the Marketer UI through the nav bar</p>
               <p> You can add new branches by clicking on the button "Add Branch"</p>
               <p> You can choose the location for the new branch on the map</p>
               <p> You can fill the details of the new branch in the form generated</p>
                <p> A marker will appear on the map indicating a new branch</p>
               <p> User can edit/update a selected branch's details</p>
               <p> You can delete a branch if yu dont like it!</p>
               <p> Deletion of a branch will remove the branch's marker as well</p>
            </div>
            <div >
                <h2>End-User UI</h2>
                <p> You can access the End-User UI through the nav bar</p>
                <p>You can enter a set of coordinates(Longitude and Latitude) in the input fields to search for Bank branches near that location</p>
                <p>You can use the 'Find my location' button on the top right-hand corner of the map for accessing your current location</p>
                <p>All the promotional offers in the area around the location provided will be displayed on the screen</p>

            </div>
            </div>
        </div>
    )
}