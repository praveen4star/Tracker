import { RiDashboardFill, RiCalendarEventFill } from "react-icons/ri"
import { ImStatsDots } from "react-icons/im"
import { CgProfile } from "react-icons/cg"
import { MdLogout } from "react-icons/md"
const pagesData = [
    { name: "dashboard", icon: <RiDashboardFill />, path : "/dashboard" },
    { name: "stats", icon: <ImStatsDots /> ,path : "/stats"},
    { name: "daily routinue", icon: <RiCalendarEventFill />, path : "/dailyroutinue" },
    { name: "profile", icon : <CgProfile /> , path : "/profile"},
    {name : "logout", icon : <MdLogout />, path : "/logout"}
]

export default pagesData;