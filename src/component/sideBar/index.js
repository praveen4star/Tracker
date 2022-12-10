import pagesData from "config/pages";
import logo from "assets/images/logo.png"
import { Link } from "react-router-dom";
import "./index.css"
const SideBar = () =>
    <div className="sidebar">
        <div className="logo">
            <img src={logo} alt="logo of the company" />
        </div>
        <div className="user_profile">
            <div className="user_image">
            </div>
            <div className="user_name">
                Avenya 
            </div>
            <div className="user_title">
                <h5>Student</h5>
            </div>
        </div>
        {pagesData.map((ele, i) =>
            <div key={i} className="nav_link">
                <Link to={ele.path }>
                    <div className="nav_icon">{ ele.icon}</div>
                    <div className="nav_name"> {ele.name}</div>    
                </Link>
            </div>
            )
        }
    </div>

export default SideBar;