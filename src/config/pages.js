import { RiDashboardFill, RiCalendarEventFill } from "react-icons/ri"
import { ImStatsDots } from "react-icons/im"
import { CgProfile } from "react-icons/cg"
import { MdLogout } from "react-icons/md"
const pagesData = [
    { name: "dashboard", icon: <RiDashboardFill /> },
    { name: "stats", icon: <ImStatsDots /> },
    { name: "daily routinue", icon: <RiCalendarEventFill /> },
    { name: "profile", icon : <CgProfile /> },
    {name : "logout", icon : <MdLogout />}
]

export default pagesData;