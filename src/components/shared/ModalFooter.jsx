export function ModalFooter({
  onClose,
  closeButtonText = "Close",
  closeButtonColor = "#D01030",
}) {
  return (
    <div className="border-t p-4 bg-gray-50">
      <button
        onClick={onClose}
        style={{ backgroundColor: closeButtonColor }}
        className="px-4 py-2 text-white rounded-lg hover:opacity-90 transition-opacity"
      >
        {closeButtonText}
      </button>
    </div>
  );
}
