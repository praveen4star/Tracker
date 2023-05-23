import { RiDashboardFill, RiCalendarEventFill } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import NextPlanOutlinedIcon from '@mui/icons-material/NextPlanOutlined';

const pagesData = [
    { name: "dashboard", icon: <RiDashboardFill />, path : "/dashboard" },
    { name: "Today", icon: < EventOutlinedIcon />, path : "today" },
    { name: "Upcoming", icon: < NextPlanOutlinedIcon />, path : "upcoming" },
    { name: "Daily Routinue", icon: <RiCalendarEventFill />, path : "dailyroutinue" },
    { name: "Personality", icon :<ImStatsDots /> , path : "quiz"},
    { name: "profile", icon : <CgProfile /> , path : "profile"},
    { name: "logout", icon : <MdLogout />, path : "logout"}
    ]

export default pagesData;