import { useState } from "react";

const blockedCustomers = [
  {
    customerId: "102",
    userName: "khaled.nasser",
    fullArabicName: "خالد ناصر",
    fullEnglishName: "Khaled Nasser",
    phoneNumber: "0793456789",
    status: "Blocked",
    statusInternet: "Inactive",
  },
  {
    customerId: "104",
    userName: "omar.fayyad",
    fullArabicName: "عمر فياض",
    fullEnglishName: "Omar Fayyad",
    phoneNumber: "0795678901",
    status: "Blocked",
    statusInternet: "Blocked",
  },
  {
    customerId: "111",
    userName: "ali.qasem",
    fullArabicName: "علي قاسم",
    fullEnglishName: "Ali Qasem",
    phoneNumber: "0793344556",
    status: "Blocked",
    statusInternet: "Blocked",
  },
];

const columns = [
  { key: "customerId", label: "Customer ID" },
  { key: "userName", label: "User Name" },
  { key: "fullArabicName", label: "Full Arabic Name" },
  { key: "fullEnglishName", label: "Full English Name" },
  { key: "phoneNumber", label: "Phone Number" },
  { key: "status", label: "Status" },
  { key: "statusInternet", label: "Status Internet" },
];

function SearchIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export default function BlockedCustomers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");

  const normalizedSearch = submittedSearch.trim().toLowerCase();
  const displayedCustomers = normalizedSearch
    ? blockedCustomers.filter((customer) =>
        Object.values(customer).some((value) =>
          value.toLowerCase().includes(normalizedSearch),
        ),
      )
    : [];

  const handleCancel = () => {
    setSearchQuery("");
    setSubmittedSearch("");
  };

  const handleSearch = () => {
    setSubmittedSearch(searchQuery);
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="relative flex-1">
            <span className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2">
              <SearchIcon />
            </span>
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") handleSearch();
              }}
              placeholder="Search blocked customers..."
              className="h-11 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-3 text-sm text-gray-700 outline-none transition-colors placeholder:text-gray-400 focus:border-[#D01030] focus:bg-white focus:ring-2 focus:ring-red-100"
            />
          </div>
          <button
            type="button"
            onClick={handleSearch}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#D01030] px-4 text-sm font-semibold text-white transition-colors hover:bg-red-700"
          >
            <SearchIcon />
            Search
          </button>
        </div>

        <div className="mt-4 overflow-hidden border border-gray-200 rounded-lg">
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[900px] text-sm">
              <thead className="text-gray-600 bg-gray-50">
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column.key}
                      className="px-3 py-3 font-semibold text-left"
                    >
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {displayedCustomers.map((customer) => (
                  <tr key={customer.customerId}>
                    {columns.map((column) => (
                      <td key={column.key} className="px-3 py-3 text-gray-700">
                        {customer[column.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="divide-y divide-gray-100 md:hidden">
            {displayedCustomers.map((customer) => (
              <div key={customer.customerId} className="p-3 space-y-2">
                {columns.map((column) => (
                  <div
                    key={column.key}
                    className="flex items-start justify-between gap-3 text-sm"
                  >
                    <span className="font-semibold text-gray-500">
                      {column.label}
                    </span>
                    <span className="text-right text-gray-800">
                      {customer[column.key]}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {displayedCustomers.length === 0 && normalizedSearch && (
            <p className="p-4 text-sm text-center text-gray-400">
              No blocked customers found.
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 mt-5 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            className="rounded-lg bg-[#D01030] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700"
          >
            Unblock all mobile clients
          </button>
          <button
            type="button"
            className="rounded-lg bg-[#D01030] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700"
          >
            Unblock all internet clients
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
