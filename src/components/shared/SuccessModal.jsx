export function SuccessModal({
  title,
  message,
  details,
  onClose,
  buttonText = "Done",
}) {
  return (
    <div className="w-full">
      <div className="w-full max-w-3xl p-8 text-center bg-white border border-gray-100 rounded-lg shadow-sm">
        <div className="flex justify-center mb-4">
          <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h2 className="mb-2 text-2xl font-bold text-green-600">{title}</h2>
        {details && (
          <div className="p-4 mb-6 space-y-3 border border-green-200 rounded-lg bg-green-50">
            {details.map((detail, idx) => (
              <p key={idx} className="text-gray-700">
                <span className="font-semibold">{detail.label}:</span>{" "}
                <span
                  className={
                    detail.highlight ? "font-semibold text-green-600" : ""
                  }
                >
                  {detail.value}
                </span>
              </p>
            ))}
          </div>
        )}
        {message && <p className="mb-6 text-sm text-gray-600">{message}</p>}
        <button
          onClick={onClose}
          className="px-6 py-3 font-semibold text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
