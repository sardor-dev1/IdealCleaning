import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import HomeIcon from "@mui/icons-material/Home";
const routes = [
  {
    path: "/",
    content: "Home",
    icon: <HomeIcon />,
  },
  {
    path: "/clients",
    content: "Clients",
    icon: <LocalPostOfficeIcon />,
  },
  {
    path: "/services",
    content: "Service",
    icon: <LocalPostOfficeIcon />,
  },
  {
    path: "/orders",
    content: "Order",
    icon: <LocalPostOfficeIcon />,
  },
];

export default routes;
