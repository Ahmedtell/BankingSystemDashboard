import { useState } from "react";
import { SuccessModal } from "./shared/SuccessModal";

export function RegisterModal({ type, onClose, onRegister }) {
  const [customerId, setCustomerId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState("");
  const [checked, setChecked] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleCheck = () => {
    if (!customerId.trim()) {
      setError("Please enter a Customer ID");
      return;
    }
    const found = onRegister("check", customerId.trim());
    if (found) {
      setCustomer(found);
      setError(`Customer already exists: ${found.name}`);
      setChecked(false);
    } else {
      setCustomer(null);
      setError("");
      setChecked(true);
    }
  };

  const handleRegister = () => {
    if (!customerId.trim() || !customerName.trim()) {
      setError("Please enter both Customer ID and Name");
      return;
    }
    onRegister("register", customerId.trim(), customerName.trim(), type);
    setSuccess(true);
  };

  const handleReset = () => {
    setCustomerId("");
    setCustomerName("");
    setCustomer(null);
    setError("");
    setChecked(false);
  };

  const handleSuccessClose = () => {
    setCustomerId("");
    setCustomerName("");
    setCustomer(null);
    setError("");
    setChecked(false);
    setSuccess(false);
    onClose();
  };

  if (success) {
    return (
      <SuccessModal
        title={`${customerName} Registered Successfully`}
        message="The customer has been registered successfully in the system."
        details={[
          { label: "Type", value: type },
          { label: "Customer ID", value: customerId },
          { label: "Customer Name", value: customerName },
        ]}
        onClose={handleSuccessClose}
        buttonText="Done"
      />
    );
  }

  return (
    <div className="w-full">
      <div className="p-5 mb-4 bg-white border border-gray-100 rounded-lg shadow-sm">
        <p className="text-sm font-semibold text-gray-400">Customer Registration</p>
        <h2 className="mt-1 text-2xl font-bold text-gray-900">
          Register {type}
        </h2>
      </div>

      <div className="w-full max-w-3xl p-5 space-y-4 bg-white border border-gray-100 rounded-lg shadow-sm">
        <div>
          <label className="block mb-1 text-xs font-medium text-gray-600">
            Customer ID <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full p-2 border rounded"
            placeholder="Enter Customer ID"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            disabled={checked}
          />
        </div>
        {checked && (
          <div>
            <label className="block mb-1 text-xs font-medium text-gray-600">
              Customer Name <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full p-2 border rounded focus:ring-1 focus:ring-blue-500"
              placeholder="Enter Customer Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>
        )}
        {error && <p className="text-sm text-red-600">{error}</p>}
        {customer && (
          <div className="p-3 space-y-2 border border-red-200 rounded bg-red-50">
            <p>
              <b>ID:</b> {customer.id}
            </p>
            <p>
              <b>Name:</b> {customer.name}
            </p>
          </div>
        )}
        <div className="flex flex-col gap-2 sm:flex-row">
          {!checked ? (
            <>
              <button
                onClick={handleCheck}
                className="px-4 py-2 text-white bg-black rounded hover:bg-gray-800"
              >
                Check
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
              >
                Back
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleRegister}
                disabled={!customerId || !customerName}
                className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Register
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
              >
                Back
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
