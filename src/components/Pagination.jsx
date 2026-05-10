import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ITEMS_PER_PAGE } from "./IndividualAndCommon";

export function Pagination({ currentPage, totalItems, onPageChange }) {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between px-3 py-2 border-t">
      <p className="text-xs text-gray-500">
        Showing {currentPage * ITEMS_PER_PAGE + 1}–
        {Math.min((currentPage + 1) * ITEMS_PER_PAGE, totalItems)} of{" "}
        {totalItems}
      </p>
      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 0}
          className="p-1.5 rounded text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <FaChevronLeft size={11} />
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`w-7 h-7 text-xs rounded ${
              i === currentPage
                ? "bg-[#D01030] text-white font-semibold"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
          className="p-1.5 rounded text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <FaChevronRight size={11} />
        </button>
      </div>
    </div>
  );
}
