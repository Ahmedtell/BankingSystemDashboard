import { useState } from "react";
import Header from "./components/Header";

// Import all pages
import Home from "./pages/Home"; // Dashboard
import SettingsPage from "./pages/SettingsPage";
import ServicesPage from "./pages/ServicesPage";
import UsersPage from "./pages/UsersPage";
import ReportsPage from "./pages/ReportsPage";
import CompliancePage from "./pages/CompliancePage";
import OnboardingPage from "./pages/OnboardingPage";
import GenericCustomerPage from "./pages/GenericCustomerPage";

// All customer sub-pages that share a layout
const customerSubPages = [
  "Individual & Common",
  "Blocked Customers",
  "Inactive Customers",
  "Corporate",
  "Forget Credentials",
  "Customers Card Info",
  "Delete Duplicate Cliq",
  "Delete Duplicate Cliq Auditing",
  "Delete Duplicate Cliq Card",
  "Delete Duplicate Cliq Auditing - Card",
  "Card State",
  "Efawateercom Limit",
];

function renderPage(activePage) {
  if (customerSubPages.includes(activePage))
    return <GenericCustomerPage title={activePage} />;

  switch (activePage) {
    case "Settings":
      return <SettingsPage />;
    case "Services":
      return <ServicesPage />;
    case "Users":
      return <UsersPage />;
    case "Reports":
      return <ReportsPage />;
    case "Compliance Reports":
      return <CompliancePage />;
    case "Onboarding":
      return <OnboardingPage />;
    default:
      return <Home title="Dashboard" />;
  }
}

export default function App() {
  const [activePage, setActivePage] = useState("Customers");

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header active={activePage} setActive={setActivePage} />
      <div
        className="flex mt-16 overflow-hidden"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <main className="flex-1 w-full p-4 overflow-y-auto sm:p-6 lg:p-8">
          {renderPage(activePage)}
        </main>
      </div>
    </div>
  );
}
