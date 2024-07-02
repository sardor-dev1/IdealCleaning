import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import HomeIcon from "@mui/icons-material/Home";
const routes = [
  {
    path: "/",
    content: "Asosiy",
    icon: <HomeIcon />,
  },
  {
    path: "/Orders",
    content: "Buyurtmalar",
    icon: <HomeIcon />,
  },
  {
    path: "/services",
    content: "Xizmatlar",
    icon: <LocalPostOfficeIcon />,
  },
];

export default routes;
