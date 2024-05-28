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
    path: "/admin/dashboard",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "Recent",
    label: "Recent",
    path: "/admin/dashboard/RecentTour",
    icon: <BiSolidDonateBlood />,
  },
  {
    key: "Booking",
    label: "Booking",
    path: "/admin/dashboard/Booking",
    icon: <FaHospital />,
  },
  {
    key: "request",
    label: "Requests",
    path: "/admin/dashboard/requests",
    icon: <HiOutlineUsers />,
  },
  {
    key: "TourPackage",
    label: "package",
    path: "/admin/dashboard/TourPackage",
    icon: <HiOutlineDocumentText />,
  },
  {
    key: "messages",
    label: "Messages",
    path: "/admin/dashboard/messages",
    icon: <HiOutlineAnnotation />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/admin/dashboard/settings",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/admin/dashboard/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
