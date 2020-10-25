import Dashboard from "views/Company/Dashboard";
import CompanyQuestions from "./views/Company/Questions/CompanyQuestions.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/company",
  },
  {
    path: "/companyQuestions",
    name: "Company Questions",
    icon: "pe-7s-graph",
    component: CompanyQuestions,
    layout: "/company",
  },
];

export default dashboardRoutes;
