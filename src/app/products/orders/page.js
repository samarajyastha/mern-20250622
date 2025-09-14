"use client";

import { getOrdersByUser } from "@/api/orders";
import Spinner from "@/components/Spinner";
import { useEffect, useState } from "react";
import OrderCard from "./_components/Card";

const OrdersPage = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrdersByUser()
      .then((response) => setOrders(response.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="py-10 flex justify-center">
        <Spinner className="w-10 h-10 fill-secondary" />
      </div>
    );

  return (
    <section className="py-10">
      <h1 className="text-3xl font-semibold mb-5">Order items</h1>
      <div className="grid grid-cols-1 gap-6">
        {orders.map((order, index) => (
          <OrderCard key={index} order={order} />
        ))}
      </div>
    </section>
  );
};

export default OrdersPage;
