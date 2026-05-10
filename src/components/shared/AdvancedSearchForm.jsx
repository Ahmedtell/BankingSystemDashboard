export function AdvancedSearchForm({ filters, onFilterChange, onSearch }) {
  const handleInputChange = (field, value) => {
    onFilterChange({ ...filters, [field]: value });
  };

  return (
    <div className="p-4 space-y-3 border rounded-lg bg-gray-50">
      <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
        <input
          placeholder="User Name"
          value={filters.userName}
          onChange={(e) => handleInputChange("userName", e.target.value)}
          className="px-3 py-2 border rounded-lg"
        />
        <input
          placeholder="Customer ID"
          value={filters.customerId}
          onChange={(e) => handleInputChange("customerId", e.target.value)}
          className="px-3 py-2 border rounded-lg"
        />
      </div>
      <input
        placeholder="Phone"
        value={filters.phone}
        onChange={(e) => handleInputChange("phone", e.target.value)}
        className="w-full px-3 py-2 border rounded-lg"
      />
      <div className="space-y-1">
        <p className="text-xs text-gray-500">Mobile Customer Status</p>
        <select
          value={filters.mobileStatus}
          onChange={(e) => handleInputChange("mobileStatus", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        >
          <option value="Any">Any</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Blocked">Blocked</option>
        </select>
      </div>
      <div className="space-y-1">
        <p className="text-xs text-gray-500">Internet Customer Status</p>
        <select
          value={filters.internetStatus}
          onChange={(e) => handleInputChange("internetStatus", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        >
          <option value="Any">Any</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Blocked">Blocked</option>
        </select>
      </div>
      <button
        onClick={onSearch}
        className="w-full py-2 text-white bg-[#D01030] rounded-lg hover:bg-red-700 transition-colors"
      >
        Apply Filters
      </button>
    </div>
  );
}
