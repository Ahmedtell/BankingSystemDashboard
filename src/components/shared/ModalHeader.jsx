export function ModalHeader({ title, subtitle, onClose }) {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-gray-50">
      <div>
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
      </div>
      <button
        onClick={onClose}
        className="px-4 py-2 text-sm font-semibold text-white transition-all rounded-lg shadow-sm bg-gradient-to-r from-[#D01030] to-[#FF5000] hover:opacity-90 hover:shadow-md"
      >
        Back
      </button>
    </div>
  );
}
