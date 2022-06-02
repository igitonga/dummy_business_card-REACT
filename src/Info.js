
import './App.css';
import logo from './profile.png';

export default function Info(){
    return(
        <div className="wrapper">
            <div className="image_container">
                <img className="image" src={logo} alt="profile"/>
            </div>
            <div className="info_container">
                <h3 className="name">John Doe</h3>
                <p className="title">Front end developer</p>
                <a href='http://localhost:3000/'>John's website</a>
            </div>
            <div className="buttons_container">
                <button className="email">Email</button>
                <button className="linkedin">LinkedIn</button>
            </div>
        </div>
    )
}