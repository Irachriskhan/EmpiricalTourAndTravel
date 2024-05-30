import {
  HiOutlineViewGrid,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi";
import { BiSolidDonateBlood } from "react-icons/bi";
import { FaHospital } from "react-icons/fa";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/admin",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "Recent",
    label: "Recent",
    path: "/admin/RecentTour",
    icon: <BiSolidDonateBlood />,
  },
  {
    key: "Booking",
    label: "Booking",
    path: "/admin/booking",
    icon: <FaHospital />,
  },
  {
    key: "request",
    label: "Requests",
    path: "/admin/requests",
    icon: <HiOutlineUsers />,
  },
  {
    key: "TourPackage",
    label: "package",
    path: "/admin/tour-package",
    icon: <HiOutlineDocumentText />,
  },
  {
    key: "messages",
    label: "Messages",
    path: "/admin/messages",
    icon: <HiOutlineAnnotation />,
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
