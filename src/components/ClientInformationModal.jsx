import { useState } from "react";
import { ModalHeader } from "./shared/ModalHeader";
import { TabMenu } from "./shared/TabMenu";
import { CustomerInfoField } from "./shared/CustomerInfoField";
import { Edit, Trash2, Plus } from "lucide-react";

const statusOptions = ["Active", "Inactive", "Blocked"];
const statusColors = {
  Active: {
    bg: "bg-green-100",
    text: "text-green-700",
    border: "border-green-400",
  },
  Inactive: {
    bg: "bg-yellow-100",
    text: "text-yellow-700",
    border: "border-yellow-400",
  },
  Blocked: {
    bg: "bg-red-100",
    text: "text-red-700",
    border: "border-red-400",
  },
};

const accounts = [
  {
    id: 1,
    accountNumber: "1811327410400005",
    accountType: "Current Account",
    branch: "Al-Shmaisani",
    enabled: true,
    isFavorite: true,
  },
  {
    id: 2,
    accountNumber: "1811327410400012",
    accountType: "Savings Account",
    branch: "	Wasfi Altal",
    enabled: false,
    isFavorite: false,
  },
  {
    id: 3,
    accountNumber: "1811327410400099",
    accountType: "Current Account",
    branch: "Al-Shmaisani",
    enabled: true,
    isFavorite: false,
  },
];

const accountPermissionFields = [
  { key: "active", label: "Active" },
  { key: "isFavorite", label: "Is Favorite" },
  { key: "transferTo", label: "Transfer To" },
  { key: "intraTransfer", label: "Intra Transfer" },
  { key: "internalTransfer", label: "Internal Transfer" },
  { key: "domesticTransfer", label: "Domestic Transfer" },
  { key: "internationalTransfer", label: "International Transfer" },
  { key: "payBills", label: "Pay Bills" },
  { key: "authenticatedStatement", label: "Authenticated Statement" },
  { key: "checkbookRequest", label: "Checkbook Request" },
  { key: "accountStatement", label: "Account Statement" },
  { key: "financeRequest", label: "Finance Request" },
  { key: "inquireAboutBalance", label: "Inquire About Balance" },
  { key: "jomopayAllow", label: "Jomopay Allow" },
  { key: "cliqAllow", label: "CliQ Allow" },
  { key: "cardRequest", label: "Card Request" },
  {
    key: "inquireAboutBalanceMovement",
    label: "Inquire About Balance N/Movement",
  },
];

const emptyAccountForm = accountPermissionFields.reduce(
  (form, field) => ({ ...form, [field.key]: false }),
  {
    accountInfo: "",
    accountType: "",
  },
);

const accountToForm = (account) => ({
  ...emptyAccountForm,
  ...account,
  accountInfo: account.accountInfo || account.accountNumber || "",
  accountType: account.accountType || "",
  active: account.active ?? account.enabled ?? false,
  isFavorite: account.isFavorite ?? false,
});

function StatusSelect({ label, value, onChange }) {
  return (
    <div>
      <label className="block mb-2 text-sm font-semibold text-gray-700">
        {label}
      </label>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`w-full rounded-lg border-2 px-4 py-2 text-sm font-semibold outline-none transition-colors focus:ring-2 focus:ring-red-100 sm:max-w-xs ${statusColors[value].bg} ${statusColors[value].text} ${statusColors[value].border}`}
      >
        {statusOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function CustomerInfoTab({ customer, onSave }) {
  const [mobileStatus, setMobileStatus] = useState(customer.status_mobile);
  const [internetStatus, setInternetStatus] = useState(
    customer.status_internet,
  );
  const [saved, setSaved] = useState(false);

  const hasChanges =
    mobileStatus !== customer.status_mobile ||
    internetStatus !== customer.status_internet;

  const handleSave = () => {
    onSave({
      ...customer,
      status_mobile: mobileStatus,
      status_internet: internetStatus,
    });
    setSaved(true);
  };

  return (
    <div className="p-5 space-y-6">
      {/* INFO GRID */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <CustomerInfoField label="Arabic Name" value={customer.arabic_name} />
        <CustomerInfoField label="Email" value={customer.email} />
        <CustomerInfoField label="Nationality" value={customer.nationality} />
        <CustomerInfoField
          label="National Number"
          value={customer.national_number}
        />
        <CustomerInfoField
          label="Account Nature"
          value={customer.account_nature}
        />
        <CustomerInfoField label="Gender" value={customer.gender} />
        <CustomerInfoField label="Language" value={customer.language} />
        <CustomerInfoField
          label="Date of Birth"
          value={customer.day_of_birth}
        />
      </div>

      {/* STATUS CARD */}
      <div className="p-5 border border-red-100 shadow-sm rounded-xl bg-gradient-to-br from-red-50/60 to-white">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-sm font-bold text-[#D01030] uppercase tracking-wide">
            Customer Services Status
          </h3>

          <span className="px-2 py-1 text-xs font-semibold text-red-600 bg-red-100 rounded-full">
            Editable
          </span>
        </div>

        {/* Status Controls */}
        <div className="grid gap-5 sm:grid-cols-2">
          <StatusSelect
            label="Mobile Banking"
            value={mobileStatus}
            onChange={setMobileStatus}
          />
          <StatusSelect
            label="Internet Banking"
            value={internetStatus}
            onChange={setInternetStatus}
          />
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 pt-5 mt-6 border-t border-red-100 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleSave}
              disabled={!hasChanges}
              className="px-5 py-2 text-sm font-semibold text-white transition-all bg-[#D01030] rounded-lg hover:bg-[#b20d29] disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              Save Changes
            </button>

            {saved && !hasChanges && (
              <span className="text-sm font-semibold text-green-600">
                Saved successfully ✓
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
function AccountsTable({
  accountsData,
  onAccountsChange,
  onAdd,
  onEdit,
  onDelete,
}) {
  const [deleteId, setDeleteId] = useState(null);

  const toggleEnabled = (id) => {
    onAccountsChange((prev) =>
      prev.map((acc) =>
        acc.id === id
          ? { ...acc, enabled: !acc.enabled, active: !acc.enabled }
          : acc,
      ),
    );
  };

  const toggleFavorite = (id) => {
    onAccountsChange((prev) =>
      prev.map((acc) =>
        acc.id === id ? { ...acc, isFavorite: !acc.isFavorite } : acc,
      ),
    );
  };

  return (
    <>
      <div className="overflow-hidden bg-white border border-blue-100 rounded-lg shadow-sm">
        <table className="w-full text-sm">
          <thead className="text-blue-800 bg-blue-50">
            <tr>
              <th className="p-3 text-center">Actions</th>
              <th className="p-3 text-center">Account Number</th>
              <th className="p-3 text-center">Account Type</th>
              <th className="p-3 text-center">Branch</th>
              <th className="p-3 text-center">Enabled</th>
              <th className="p-3 text-center">Favorite</th>
            </tr>
          </thead>

          <tbody>
            {accountsData.map((acc) => (
              <tr key={acc.id} className="border-t hover:bg-blue-50/40">
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => onEdit(acc)}
                      className="text-blue-600 hover:text-blue-800"
                      title="Edit"
                    >
                      <Edit size={18} />
                    </button>

                    <button
                      onClick={() => setDeleteId(acc.id)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>

                <td className="p-3 text-center">{acc.accountNumber}</td>

                <td className="p-3 text-center">
                  <span className="px-2.5 py-1 text-xs font-bold text-indigo-700 bg-indigo-50 rounded-full">
                    {acc.accountType}
                  </span>
                </td>

                <td className="p-3 text-center">{acc.branch}</td>

                <td className="p-3 text-center">
                  <input
                    type="checkbox"
                    checked={acc.enabled}
                    onChange={() => toggleEnabled(acc.id)}
                  />
                </td>

                <td className="p-3 text-center">
                  <input
                    type="checkbox"
                    checked={acc.isFavorite}
                    onChange={() => toggleFavorite(acc.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add button */}
        <div className="p-3 border-t">
          <button
            onClick={onAdd}
            className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700"
          >
            <Plus size={16} />
            Add Account
          </button>
        </div>
      </div>

      {/* 🧨 DELETE CONFIRMATION MODAL */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-sm p-6 bg-white shadow-xl rounded-xl">
            <h2 className="text-lg font-bold text-gray-900">
              Confirm Deletion
            </h2>

            <p className="mt-2 text-sm text-gray-600">are you sure?</p>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => {
                  onDelete(deleteId);
                  setDeleteId(null);
                }}
                className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
function AccountFormPage({ mode, initialAccount, onSave, onCancel }) {
  const [form, setForm] = useState(
    initialAccount ? accountToForm(initialAccount) : emptyAccountForm,
  );
  const isEdit = mode === "edit";

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSave = () => {
    onSave({
      ...form,
      id: form.id || Date.now(),
      accountNumber: form.accountInfo,
      accountType: form.accountType,
      branch: form.branch || "-",
      enabled: form.active,
    });
  };

  const canSave = form.accountInfo.trim() && form.accountType.trim();

  return (
    <div className="p-4 space-y-5">
      <div className="p-5 border border-blue-100 rounded-lg bg-gradient-to-r from-blue-50 via-red-50 to-amber-50">
        <h3 className="text-lg font-bold text-gray-900">
          {isEdit ? "Edit Account" : "Add Account"}
        </h3>
        <p className="mt-1 text-sm text-gray-600">
          {isEdit
            ? "Update account details and allowed services."
            : "Enter account details and select the allowed services."}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Account Info
          </label>
          <input
            value={form.accountInfo}
            onChange={(event) => updateField("accountInfo", event.target.value)}
            className="w-full px-3 py-2 border border-blue-200 rounded-lg outline-none bg-blue-50/40 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            placeholder="Enter account info"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Account Type
          </label>
          <input
            value={form.accountType}
            onChange={(event) => updateField("accountType", event.target.value)}
            className="w-full px-3 py-2 border border-indigo-200 rounded-lg outline-none bg-indigo-50/40 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            placeholder="Enter account type"
          />
        </div>
      </div>

      <div className="pt-4 border-t">
        <h4 className="mb-3 text-sm font-bold text-gray-800">
          Account Permissions
        </h4>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {accountPermissionFields.map((field) => (
            <label
              key={field.key}
              className={`flex items-center gap-3 rounded-lg border p-3 text-sm font-semibold transition-colors ${
                form[field.key]
                  ? "border-green-200 bg-green-50 text-green-700"
                  : "border-gray-100 bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              <input
                type="checkbox"
                checked={form[field.key]}
                onChange={(event) =>
                  updateField(field.key, event.target.checked)
                }
                className="w-4 h-4 accent-[#D01030]"
              />
              {field.label}
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-4 border-t sm:flex-row">
        <button
          type="button"
          onClick={handleSave}
          disabled={!canSave}
          className="px-5 py-2 text-sm font-semibold text-white bg-[#D01030] rounded-lg hover:bg-[#b20d29] disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          {isEdit ? "Save Changes" : "Save"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2 text-sm font-semibold text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

function AccountsTab() {
  const [accountsData, setAccountsData] = useState(accounts);
  const [mode, setMode] = useState("list");
  const [editingAccount, setEditingAccount] = useState(null);

  const handleSaveAccount = (account) => {
    setAccountsData((current) => [...current, account]);
    setMode("list");
  };

  const handleUpdateAccount = (updatedAccount) => {
    setAccountsData((current) =>
      current.map((account) =>
        account.id === updatedAccount.id ? updatedAccount : account,
      ),
    );
    setEditingAccount(null);
    setMode("list");
  };

  const handleEditAccount = (account) => {
    setEditingAccount(account);
    setMode("edit");
  };

  const handleCancelForm = () => {
    setEditingAccount(null);
    setMode("list");
  };

  if (mode === "add") {
    return (
      <AccountFormPage
        mode="add"
        onSave={handleSaveAccount}
        onCancel={handleCancelForm}
      />
    );
  }

  if (mode === "edit" && editingAccount) {
    return (
      <AccountFormPage
        mode="edit"
        initialAccount={editingAccount}
        onSave={handleUpdateAccount}
        onCancel={handleCancelForm}
      />
    );
  }

  return (
    <AccountsTable
      accountsData={accountsData}
      onAccountsChange={setAccountsData}
      onAdd={() => setMode("add")}
      onEdit={handleEditAccount}
      onDelete={(id) =>
        setAccountsData((current) =>
          current.filter((account) => account.id !== id),
        )
      }
    />
  );
}

function ComingSoonTab() {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-gray-400">Coming soon...</p>
    </div>
  );
}

export function ClientInformationModal({ customer, onClose, onSave }) {
  const [activeTab, setActiveTab] = useState("Info");

  const tabs = ["Info", "Accounts", "Account Settings", "Other Accounts"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Info":
        return <CustomerInfoTab customer={customer} onSave={onSave} />;
      case "Accounts":
        return <AccountsTab />;
      case "Account Settings":
      case "Other Accounts":
        return <ComingSoonTab />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col w-full overflow-hidden bg-white border border-gray-100 rounded-lg shadow-sm">
        <ModalHeader
          title={customer.name}
          subtitle={`ID: ${customer.id}`}
          onClose={onClose}
        />

        <TabMenu
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          activeColor="#D01030"
        />

        <div className="flex-1">{renderTabContent()}</div>
      </div>
    </div>
  );
}
