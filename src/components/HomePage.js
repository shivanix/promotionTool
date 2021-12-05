import Button from "./Button";
import "./homepage.css"
export default function HomePage() {
    return(
        <div className="home-main-container">
            <div className="btn-container">
            <div >
                <Button className="btn"type="submit">MArketer</Button>
            </div>
            <div >
                <Button className="btn" type="submit">EndUSrer</Button>
            </div>
            </div>
        </div>
    )
}