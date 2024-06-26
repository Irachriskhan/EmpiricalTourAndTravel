import {
  HiOutlineViewGrid,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi";
import { FaUmbrellaBeach, FaUserFriends, FaSuitcaseRolling, FaRegCalendarAlt, FaMapSigns, FaCommentDots } from "react-icons/fa";
// import Customers from "../../components/shared/AdminPage.jsx/Customers";
export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/admin",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "customers",
    label: "Customers",
    path: "/admin/Customers",
    icon: <FaUserFriends />,
  },
  {
    key: "tours",
    label: "Tours",
    path: "/admin/toursPage",
    icon: <FaUmbrellaBeach />,
  },
  {
    key: "booking",
    label: "Bookings",
    path: "/admin/bookings",
    icon: <FaRegCalendarAlt />,
  },

  {
    key: "tourPackage",
    label: "Tour Package",
    path: "/admin/tourPackage",
    icon: <FaSuitcaseRolling />,
  },
  {
    key: "Feedback",
    label: "Feedback",
    path: "/admin/Feedback",
    icon: <HiOutlineUsers />,
  },
  {
    key: "messages",
    label: "Messages",
    path: "/admin/Messages",
    icon: <FaCommentDots />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/admin/settings",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];

