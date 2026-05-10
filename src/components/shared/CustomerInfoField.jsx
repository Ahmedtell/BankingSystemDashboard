export function CustomerInfoField({ label, value }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 uppercase">
        {label}
      </label>
      <p className="mt-1 text-gray-800">{value}</p>
    </div>
  );
}
