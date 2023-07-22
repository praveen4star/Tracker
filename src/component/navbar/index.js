import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { CgProfile }   from 'react-icons/cg';
import "./index.css";


const Navbar = () =>
    <div className="nav-navbar">
        <div className="nav-search-icon">
            <input type="text" placeholder="Search..."/>
        </div>
        <div className="nav-personal-icon">
            <span className="nav-plus_icon"><AiOutlinePlus size={28} /></span>
            <span className="nav-notification"><MdOutlineNotificationsNone size={28} /></span>
            <span className="nav-profile"><CgProfile size={28} /></span>
        </div>
    </div>

export default Navbar