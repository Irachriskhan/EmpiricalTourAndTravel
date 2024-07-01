import {
  HiOutlineViewGrid,
  HiOutlineUsers,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi";
import { 
  FaUmbrellaBeach, 
  FaUserFriends, 
  FaSuitcaseRolling, 
  FaRegCalendarAlt, 
  FaCommentDots 
} from "react-icons/fa";

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
    dropdown: [
      {
        key: "allTours",
        label: "All Tours",
        path: "/admin/ToursPage/AllTours",
      },
      {
        key: "addTour",
        label: "Add Tour",
        path: "/admin/toursPage/addTours",
      },
      {
        key: "manageTours",
        label: "Manage Tours",
        path: "/admin/toursPage/manageTours",
      },
    ],
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
