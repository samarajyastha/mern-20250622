"use client";
import OrdersTable from "./_components/Table";

const OrderManagementPage = () => {
  return (
    <div className="px-4 mx-auto max-w-screen-2xl">
      <h2 className="font-semibold text-2xl text-gray-700 dark:text-white mb-5">
        Order Management
      </h2>
      <OrdersTable />
    </div>
  );
};

export default OrderManagementPage;
