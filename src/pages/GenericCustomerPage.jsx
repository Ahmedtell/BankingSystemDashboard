import IndividualAndCommon from "../components/IndividualAndCommon";
import BlockedCustomers from "../components/BlockedCustomers";
import InactiveCustomers from "../components/InactiveCustomers";
import Corporate from "../components/Corporate";

export default function GenericCustomerPage({ title }) {
  if (title === "Individual & Common") {
    return (
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm text-gray-400">
          View and manage customer accounts.
        </p>

        <IndividualAndCommon />
      </div>
    );
  }

  if (title === "Blocked Customers") {
    return (
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm text-gray-400">
          Search and unblock blocked customer access.
        </p>

        <BlockedCustomers />
      </div>
    );
  }

  if (title === "Inactive Customers") {
    return (
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm text-gray-400">
          Search and Active inactive customer.
        </p>

        <InactiveCustomers />
      </div>
    );
  }

  if (title === "Corporate") {
    return (
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm text-gray-400">Search Corporate customer.</p>
        <Corporate />
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm text-gray-400">
        Manage and view all {title.toLowerCase()} records.
      </p>

      <div className="p-8 text-center bg-white rounded-lg shadow-md">
        <p className="text-sm text-gray-400">Content coming soon...</p>
      </div>
    </div>
  );
}
