import { useState } from "react";
import logo from "../assets/islamicBankLogo.png";

const customerSubItems = [
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

const navItems = [
  {
    label: "Customers",
    subItems: customerSubItems,
  },
  {
    label: "Settings",
  },
  {
    label: "Services",
  },
  {
    label: "Users",
  },
  {
    label: "Reports",
  },
  {
    label: "Compliance Reports",
  },
  {
    label: "Onboarding",
  },
  {
    label: "Logout",
  },
];

function ChevronDownIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function LogoutIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}

function HeaderNavItem({ item, active, setActive, openMenu, setOpenMenu }) {
  const isCustomersActive =
    item.label === "Customers" && customerSubItems.includes(active);
  const isActive = active === item.label || isCustomersActive;
  const hasDropdown = item.subItems?.length > 0;
  const isOpen = openMenu === item.label;

  const handleMainClick = () => {
    setActive(item.label);
    setOpenMenu(hasDropdown ? item.label : null);
  };

  const handleSubItemClick = (subItem) => {
    setActive(subItem);
    setOpenMenu(null);
  };

  return (
    <div
      className="relative flex-shrink-0"
      onMouseEnter={() => hasDropdown && setOpenMenu(item.label)}
      onMouseLeave={() => hasDropdown && setOpenMenu(null)}
    >
      <button
        type="button"
        onClick={handleMainClick}
        className={`flex h-9 items-center gap-1 rounded-lg px-2 text-xs font-semibold transition-colors whitespace-nowrap xl:h-10 xl:gap-1.5 xl:px-3 xl:text-sm
          ${
            isActive
              ? "bg-red-50 text-[#D01030]"
              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          }`}
        aria-haspopup={hasDropdown ? "menu" : undefined}
      >
        {item.label === "Logout" && <LogoutIcon className="text-[#D01030]" />}
        <span>{item.label}</span>
        {hasDropdown && (
          <span
            className={`text-gray-400 transition-transform ${
              isOpen ? "rotate-180 text-gray-600" : ""
            }`}
          >
            <ChevronDownIcon />
          </span>
        )}
      </button>

      {hasDropdown && isOpen && (
        <div className="absolute left-0 z-50 pt-2 top-full min-w-56 xl:min-w-64">
          <div className="p-2 bg-white border border-gray-200 rounded-lg shadow-lg">
            {item.subItems.map((subItem) => (
              <button
                key={subItem}
                type="button"
                onClick={() => handleSubItemClick(subItem)}
                className={`block w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors
                  ${
                    active === subItem
                      ? "bg-red-50 text-[#D01030]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                role="menuitem"
              >
                {subItem}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileNavPanel({
  active,
  setActive,
  openMenu,
  setOpenMenu,
  setMobileMenuOpen,
}) {
  const handleMainClick = (item) => {
    if (item.subItems?.length) {
      setOpenMenu(openMenu === item.label ? null : item.label);
      return;
    }

    setActive(item.label);
    setOpenMenu(null);
    setMobileMenuOpen(false);
  };

  const handleSubItemClick = (subItem) => {
    setActive(subItem);
    setOpenMenu(null);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className="absolute left-0 right-0 top-16 max-h-[calc(100vh-64px)] overflow-y-auto border-b border-gray-200 bg-white px-3 py-3 shadow-lg lg:hidden"
      aria-label="Mobile main menu"
    >
      <button
        type="button"
        className="flex items-center w-full gap-2 px-3 mb-3 text-sm font-semibold text-left text-gray-500 transition-colors bg-gray-100 rounded-lg min-h-11 hover:bg-gray-200"
      >
        <SearchIcon />
        <span>Search</span>
      </button>

      <div className="space-y-1">
        {navItems.map((item) => {
          const hasDropdown = item.subItems?.length > 0;
          const isCustomersActive =
            item.label === "Customers" && customerSubItems.includes(active);
          const isActive = active === item.label || isCustomersActive;
          const isOpen = openMenu === item.label;

          return (
            <div key={item.label}>
              <button
                type="button"
                onClick={() => handleMainClick(item)}
                className={`flex min-h-11 w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-semibold transition-colors
                  ${
                    isActive
                      ? "bg-red-50 text-[#D01030]"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                aria-expanded={hasDropdown ? isOpen : undefined}
              >
                <span className="flex items-center gap-2">
                  {item.label === "Logout" && (
                    <LogoutIcon className="text-[#D01030]" />
                  )}
                  {item.label}
                </span>
                {hasDropdown && (
                  <span
                    className={`text-gray-400 transition-transform ${
                      isOpen ? "rotate-180 text-gray-600" : ""
                    }`}
                  >
                    <ChevronDownIcon />
                  </span>
                )}
              </button>

              {hasDropdown && isOpen && (
                <div className="p-2 mt-1 space-y-1 rounded-lg bg-gray-50">
                  {item.subItems.map((subItem) => (
                    <button
                      key={subItem}
                      type="button"
                      onClick={() => handleSubItemClick(subItem)}
                      className={`block min-h-10 w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors
                        ${
                          active === subItem
                            ? "bg-white text-[#D01030] shadow-sm"
                            : "text-gray-600 hover:bg-white hover:text-gray-900"
                        }`}
                    >
                      {subItem}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default function Header({ active, setActive }) {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center w-full h-16 gap-2 px-2 bg-white border-b border-gray-200 sm:px-4 xl:gap-3 xl:px-5"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
    >
      <button
        type="button"
        onClick={() => {
          setMobileMenuOpen((current) => !current);
          setOpenMenu(null);
        }}
        className="flex items-center justify-center flex-shrink-0 text-gray-700 transition-colors bg-gray-100 rounded-lg h-9 w-9 hover:bg-gray-200 sm:h-10 sm:w-10 lg:hidden"
        aria-label="Toggle menu"
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div className="flex items-center flex-shrink-0 w-48 h-12 mr-auto sm:w-60 md:w-64 lg:mr-0 lg:w-52 xl:w-60">
        <img
          src={logo}
          alt="Logo"
          className="object-contain w-full h-auto max-h-12"
        />
      </div>

      <nav
        className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 overflow-visible py-2 lg:flex xl:gap-1"
        aria-label="Main menu"
      >
        {navItems.map((item) => (
          <HeaderNavItem
            key={item.label}
            item={item}
            active={active}
            setActive={setActive}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />
        ))}
      </nav>

      <div className="flex items-center flex-shrink-0 gap-1 sm:gap-2">
        <div className="hidden w-px h-6 bg-gray-200 sm:block" />

        <button
          type="button"
          className="flex items-center gap-1 px-1 py-1 transition-colors rounded-lg hover:bg-gray-100 xl:gap-2 xl:px-2"
          aria-label="User menu"
        >
          <span
            className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-xs font-bold text-white rounded-full"
            style={{ background: "linear-gradient(135deg,#FF5000,#D01030)" }}
          >
            A
          </span>
          <span className="hidden text-left xl:block">
            <span className="block text-xs font-semibold leading-tight text-gray-700">
              Admin
            </span>
            <span className="block text-xs leading-tight text-gray-400">
              Admin
            </span>
          </span>
        </button>
      </div>

      {mobileMenuOpen && (
        <MobileNavPanel
          active={active}
          setActive={setActive}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      )}
    </header>
  );
}
