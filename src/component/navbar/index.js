import { AiOutlinePlus } from "react-icons/ai"
import { MdOutlineNotificationsNone } from "react-icons/md"
import "./index.css"
const Navbar = () =>
    <div className="nav-navbar">
        <div className="nav-search-icon">
            <input type="text" placeholder="Search..."/>
        </div>
        <div className="nav-personal-icon">
            <div className="nav-plus_icon"><AiOutlinePlus /></div>
            <div className="nav-notification"><MdOutlineNotificationsNone /></div>
            <div className="nav-profile">profile</div>
        </div>
    </div>

export default Navbar