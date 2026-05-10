import { useState } from "react";
import { RegisterModal } from "./RegisterModal";
import { ClientInformationModal } from "./ClientInformationModal";
import { CustomerTable } from "./shared/CustomerTable";
import { AdvancedSearchForm } from "./shared/AdvancedSearchForm";

const mockCustomers = {
  100: {
    id: "100",
    name: "Ahmad Al-Rashid",
    arabic_name: "أحمد الرشيد",
    phone: "0791234567",
    email: "ahmad.rashid@email.com",
    nationality: "Jordanian",
    national_number: "9876543210",
    account_nature: "Individual",
    gender: "Male",
    language: "Arabic",
    day_of_birth: "1995-03-15",
    status_mobile: "Active",
    status_internet: "Active",
  },
  101: {
    id: "101",
    name: "Sara Mansour",
    arabic_name: "سارة منصور",
    phone: "0792345678",
    email: "sara.mansour@email.com",
    nationality: "Jordanian",
    national_number: "9876543211",
    account_nature: "Individual",
    gender: "Female",
    language: "Arabic",
    day_of_birth: "1998-07-22",
    status_mobile: "Inactive",
    status_internet: "Active",
  },
  102: {
    id: "102",
    name: "Khaled Nasser",
    arabic_name: "خالد ناصر",
    phone: "0793456789",
    email: "khaled.nasser@email.com",
    nationality: "Jordanian",
    national_number: "9876543212",
    account_nature: "Business",
    gender: "Male",
    language: "Arabic",
    day_of_birth: "1990-11-05",
    status_mobile: "Blocked",
    status_internet: "Inactive",
  },
  103: {
    id: "103",
    name: "Lina Haddad",
    arabic_name: "لينا حداد",
    phone: "0794567890",
    email: "lina.haddad@email.com",
    nationality: "Jordanian",
    national_number: "9876543213",
    account_nature: "Individual",
    gender: "Female",
    language: "Arabic",
    day_of_birth: "1997-01-30",
    status_mobile: "Active",
    status_internet: "Inactive",
  },
  104: {
    id: "104",
    name: "Omar Fayyad",
    arabic_name: "عمر فياض",
    phone: "0795678901",
    email: "omar.fayyad@email.com",
    nationality: "Jordanian",
    national_number: "9876543214",
    account_nature: "Business",
    gender: "Male",
    language: "Arabic",
    day_of_birth: "1988-09-12",
    status_mobile: "Blocked",
    status_internet: "Blocked",
  },
  105: {
    id: "105",
    name: "Yousef Darwish",
    arabic_name: "يوسف درويش",
    phone: "0796789012",
    email: "yousef.darwish@email.com",
    nationality: "Jordanian",
    national_number: "9876543215",
    account_nature: "Individual",
    gender: "Male",
    language: "Arabic",
    day_of_birth: "1996-05-18",
    status_mobile: "Active",
    status_internet: "Active",
  },
  106: {
    id: "106",
    name: "Rana Khalil",
    arabic_name: "رنا خليل",
    phone: "0797890123",
    email: "rana.khalil@email.com",
    nationality: "Jordanian",
    national_number: "9876543216",
    account_nature: "Individual",
    gender: "Female",
    language: "Arabic",
    day_of_birth: "1999-02-10",
    status_mobile: "Inactive",
    status_internet: "Inactive",
  },
  107: {
    id: "107",
    name: "Tariq Saleh",
    arabic_name: "طارق صالح",
    phone: "0798901234",
    email: "tariq.saleh@email.com",
    nationality: "Jordanian",
    national_number: "9876543217",
    account_nature: "Business",
    gender: "Male",
    language: "Arabic",
    day_of_birth: "1992-06-25",
    status_mobile: "Blocked",
    status_internet: "Active",
  },
  108: {
    id: "108",
    name: "Huda Samir",
    arabic_name: "هدى سمير",
    phone: "0799012345",
    email: "huda.samir@email.com",
    nationality: "Jordanian",
    national_number: "9876543218",
    account_nature: "Individual",
    gender: "Female",
    language: "Arabic",
    day_of_birth: "2000-12-03",
    status_mobile: "Active",
    status_internet: "Inactive",
  },
  109: {
    id: "109",
    name: "Fadi Hamdan",
    arabic_name: "فادي حمدان",
    phone: "0791122334",
    email: "fadi.hamdan@email.com",
    nationality: "Jordanian",
    national_number: "9876543219",
    account_nature: "Individual",
    gender: "Male",
    language: "Arabic",
    day_of_birth: "1994-08-14",
    status_mobile: "Inactive",
    status_internet: "Active",
  },
  110: {
    id: "110",
    name: "Maha Zidan",
    arabic_name: "مها زيدان",
    phone: "0792233445",
    email: "maha.zidan@email.com",
    nationality: "Jordanian",
    national_number: "9876543220",
    account_nature: "Individual",
    gender: "Female",
    language: "Arabic",
    day_of_birth: "1993-04-09",
    status_mobile: "Active",
    status_internet: "Active",
  },
  111: {
    id: "111",
    name: "Ali Qasem",
    arabic_name: "علي قاسم",
    phone: "0793344556",
    email: "ali.qasem@email.com",
    nationality: "Jordanian",
    national_number: "9876543221",
    account_nature: "Business",
    gender: "Male",
    language: "Arabic",
    day_of_birth: "1987-10-21",
    status_mobile: "Blocked",
    status_internet: "Blocked",
  },
  112: {
    id: "112",
    name: "Dina Farraj",
    arabic_name: "دينا فرج",
    phone: "0794455667",
    email: "dina.farraj@email.com",
    nationality: "Jordanian",
    national_number: "9876543222",
    account_nature: "Individual",
    gender: "Female",
    language: "Arabic",
    day_of_birth: "1998-01-11",
    status_mobile: "Active",
    status_internet: "Inactive",
  },
  113: {
    id: "113",
    name: "Nabil Odeh",
    arabic_name: "نبيل عودة",
    phone: "0795566778",
    email: "nabil.odeh@email.com",
    nationality: "Jordanian",
    national_number: "9876543223",
    account_nature: "Individual",
    gender: "Male",
    language: "Arabic",
    day_of_birth: "1991-06-06",
    status_mobile: "Inactive",
    status_internet: "Inactive",
  },
  114: {
    id: "114",
    name: "Rami Haddad",
    arabic_name: "رامي حداد",
    phone: "0796677889",
    email: "rami.haddad@email.com",
    nationality: "Jordanian",
    national_number: "9876543224",
    account_nature: "Business",
    gender: "Male",
    language: "Arabic",
    day_of_birth: "1989-03-27",
    status_mobile: "Blocked",
    status_internet: "Active",
  },
  115: {
    id: "115",
    name: "Salma Issa",
    arabic_name: "سلمى عيسى",
    phone: "0797788990",
    email: "salma.issa@email.com",
    nationality: "Jordanian",
    national_number: "9876543225",
    account_nature: "Individual",
    gender: "Female",
    language: "Arabic",
    day_of_birth: "1997-09-19",
    status_mobile: "Active",
    status_internet: "Active",
  },
  116: {
    id: "116",
    name: "Wael Shami",
    arabic_name: "وائل الشامي",
    phone: "0798899001",
    email: "wael.shami@email.com",
    nationality: "Jordanian",
    national_number: "9876543226",
    account_nature: "Business",
    gender: "Male",
    language: "Arabic",
    day_of_birth: "1986-12-01",
    status_mobile: "Inactive",
    status_internet: "Blocked",
  },
  117: {
    id: "117",
    name: "Noor Khatib",
    arabic_name: "نور الخطيب",
    phone: "0799900112",
    email: "noor.khatib@email.com",
    nationality: "Jordanian",
    national_number: "9876543227",
    account_nature: "Individual",
    gender: "Female",
    language: "Arabic",
    day_of_birth: "2001-02-28",
    status_mobile: "Active",
    status_internet: "Active",
  },
  118: {
    id: "118",
    name: "Ziad Barakat",
    arabic_name: "زياد بركات",
    phone: "0791011122",
    email: "ziad.barakat@email.com",
    nationality: "Jordanian",
    national_number: "9876543228",
    account_nature: "Business",
    gender: "Male",
    language: "Arabic",
    day_of_birth: "1990-07-07",
    status_mobile: "Blocked",
    status_internet: "Inactive",
  },
  119: {
    id: "119",
    name: "Lara Nasser",
    arabic_name: "لارا ناصر",
    phone: "0792122233",
    email: "lara.nasser@email.com",
    nationality: "Jordanian",
    national_number: "9876543229",
    account_nature: "Individual",
    gender: "Female",
    language: "Arabic",
    day_of_birth: "1999-05-13",
    status_mobile: "Active",
    status_internet: "Inactive",
  },
};

export const ITEMS_PER_PAGE = 10;

export default function Corporate() {
  const [advancedMode, setAdvancedMode] = useState(false);
  const [registerType, setRegisterType] = useState(null);
  const [searchId, setSearchId] = useState("");
  const [searchName, setSearchName] = useState("");
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [filters, setFilters] = useState({
    userName: "",
    customerId: "",
    phone: "",
    mobileStatus: "Any",
    internetStatus: "Any",
  });

  const handleSearch = () => {
    const filtered = Object.values(mockCustomers).filter(
      (c) =>
        (!searchId || c.id.includes(searchId)) &&
        (!searchName ||
          c.name.toLowerCase().includes(searchName.toLowerCase())),
    );
    setResults(filtered);
    setCurrentPage(0);
  };

  const handleAdvancedSearch = () => {
    const filtered = Object.values(mockCustomers).filter(
      (c) =>
        (!filters.userName ||
          c.name.toLowerCase().includes(filters.userName.toLowerCase())) &&
        (!filters.customerId || c.id.includes(filters.customerId)) &&
        (!filters.phone || c.phone.includes(filters.phone)) &&
        (filters.mobileStatus === "Any" ||
          c.status_mobile === filters.mobileStatus) &&
        (filters.internetStatus === "Any" ||
          c.status_internet === filters.internetStatus),
    );
    setResults(filtered);
    setCurrentPage(0);
  };

  const handleCancel = () => {
    setAdvancedMode(false);
    setSearchId("");
    setSearchName("");
    setResults([]);
    setCurrentPage(0);
  };

  const handleRegisterCustomer = (action, customerId, customerName, type) => {
    if (action === "check") {
      return mockCustomers[customerId];
    }
    if (action === "register") {
      mockCustomers[customerId] = {
        id: customerId,
        name: customerName,
        status: "Active",
        arabic_name: customerName,
        email: `${customerId}@email.com`,
        phone: "0000000000",
        nationality: "Jordanian",
        national_number: "0000000000",
        account_nature: type,
        gender: "Other",
        language: "Arabic",
        day_of_birth: "1990-01-01",
        status_mobile: "Active",
        status_internet: "Active",
      };
    }
  };

  const handleSaveCustomer = (updatedCustomer) => {
    mockCustomers[updatedCustomer.id] = updatedCustomer;
    setSelectedCustomer(updatedCustomer);
    setResults((currentResults) =>
      currentResults.map((customer) =>
        customer.id === updatedCustomer.id ? updatedCustomer : customer,
      ),
    );
  };

  const paginatedResults = results.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE,
  );

  if (registerType) {
    return (
      <RegisterModal
        type={registerType}
        onRegister={handleRegisterCustomer}
        onClose={() => setRegisterType(null)}
      />
    );
  }

  if (selectedCustomer) {
    return (
      <ClientInformationModal
        customer={selectedCustomer}
        onSave={handleSaveCustomer}
        onClose={() => setSelectedCustomer(null)}
      />
    );
  }

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            onClick={() => setRegisterType("Individual")}
            className="px-4 py-2 text-white bg-[#D01030] rounded-lg"
          >
            Registration
          </button>
        </div>
        <div className="flex flex-col gap-2 pt-2 border-t sm:flex-row">
          <button
            onClick={() => setAdvancedMode(true)}
            className="px-4 py-2 text-white transition-colors bg-blue-600 border border-blue-600 rounded-lg hover:bg-blue-700"
          >
            Advanced Search
          </button>
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-red-600 border border-red-200 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder="Search customer id..."
          className="flex-1 px-3 py-2 border rounded-lg"
        />
        <input
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          placeholder="Search customer name..."
          className="flex-1 px-3 py-2 border rounded-lg"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 text-white bg-green-600 rounded-lg whitespace-nowrap"
        >
          Search
        </button>
      </div>

      {advancedMode && (
        <AdvancedSearchForm
          filters={filters}
          onFilterChange={setFilters}
          onSearch={handleAdvancedSearch}
        />
      )}

      {results.length > 0 && (
        <CustomerTable
          customers={paginatedResults}
          currentPage={currentPage}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChange={setCurrentPage}
          onViewCustomer={setSelectedCustomer}
        />
      )}

      {results.length === 0 && advancedMode && (
        <p className="text-sm text-gray-400">No results found</p>
      )}

    </div>
  );
}
