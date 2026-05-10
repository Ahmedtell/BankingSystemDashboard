export function StatusCheckbox({ id, label, status, isActive }) {
  return (
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        id={id}
        checked={isActive}
        disabled
        className="w-4 h-4 cursor-pointer"
      />
      <label htmlFor={id} className="text-sm text-gray-700 cursor-pointer">
        {label}
        <span className="ml-2 text-xs text-gray-500">({status})</span>
      </label>
    </div>
  );
}
