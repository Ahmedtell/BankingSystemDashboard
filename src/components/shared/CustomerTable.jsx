import { FaEye } from "react-icons/fa";
import { StatusBadge } from "./StatusBadge";
import { Pagination } from "../Pagination";

export function CustomerTable({
  customers,
  currentPage,
  onPageChange,
  onViewCustomer,
}) {
  return (
    <div className="overflow-hidden bg-white border rounded-lg">
      <table className="w-full text-sm">
        <thead className="text-gray-600 bg-gray-50">
          <tr>
            <th className="p-3 text-center"></th>
            <th className="p-3 text-center">ID</th>
            <th className="p-3 text-center">Name</th>
            <th className="p-3 text-center">Phone</th>
            <th className="p-3 text-center">Status Mobile</th>
            <th className="p-3 text-center">Status Internet</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="border-t">
              <td className="p-3 text-center">
                <button
                  onClick={() => onViewCustomer(customer)}
                  className="text-blue-500 hover:text-blue-700"
                  title="View customer details"
                >
                  <FaEye />
                </button>
              </td>
              <td className="p-3 text-center">{customer.id}</td>
              <td className="p-3 text-center">{customer.name}</td>
              <td className="p-3 text-center">{customer.phone}</td>
              <td className="p-3 text-center">
                <StatusBadge status={customer.status_mobile} />
              </td>
              <td className="p-3 text-center">
                <StatusBadge status={customer.status_internet} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalItems={customers.length}
        onPageChange={onPageChange}
      />
    </div>
  );
}
