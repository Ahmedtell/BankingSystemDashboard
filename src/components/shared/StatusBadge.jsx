const statusStyle = {
  Active: "text-green-700 bg-green-50",
  Inactive: "text-yellow-700 bg-yellow-50",
  Blocked: "text-red-700 bg-red-50",
};

export function StatusBadge({ status }) {
  return (
    <span className={`px-2 py-1 text-xs rounded ${statusStyle[status]}`}>
      {status}
    </span>
  );
}
