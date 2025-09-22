"use client";
import { getOrders, getOrdersByMerchant, getOrdersByUser } from "@/api/orders";
import { toast } from "react-toastify";
import Card from "./_components/Card";
import { useEffect, useState } from "react";
import { FaVanShuttle } from "react-icons/fa6";
import { FaCertificate, FaRegCheckCircle, FaRegClock } from "react-icons/fa";
import {
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_SHIPPED,
} from "@/constants/orderStatus";
import { useSelector } from "react-redux";
import { ADMIN_ROLE, MERCHANT_ROLE } from "@/constants/userRoles";

const Dashboard = () => {
  const [orders, setOrders] = useState([]);

  const { user } = useSelector((state) => state.auth);

  async function getAllOrders() {
    try {
      const response = user.roles.includes(ADMIN_ROLE)
        ? await getOrders()
        : user.roles.includes(MERCHANT_ROLE)
        ? await getOrdersByMerchant()
        : await getOrdersByUser();

      console.log(response);

      setOrders(response.data);
    } catch (error) {
      toast.error(error.response.data, { autoClose: 1500 });
    }
  }

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <div className="px-4 mx-auto max-w-screen-2xl">
      <h2 className="font-semibold text-2xl text-gray-700 dark:text-white mb-5">
        Dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card
          label="Pending"
          icon={<FaRegClock className="text-4xl text-red-600" />}
          value={
            orders.filter((order) => order.status === ORDER_STATUS_PENDING)
              .length
          }
        />
        <Card
          label="Confirmed"
          icon={<FaRegCheckCircle className="text-4xl text-blue-600" />}
          value={
            orders.filter((order) => order.status === ORDER_STATUS_CONFIRMED)
              .length
          }
        />
        <Card
          label="Shipped"
          icon={<FaVanShuttle className="text-4xl text-yellow-600" />}
          value={
            orders.filter((order) => order.status === ORDER_STATUS_SHIPPED)
              .length
          }
        />
        <Card
          label="Delivered"
          icon={<FaCertificate className="text-4xl text-green-600" />}
          value={
            orders.filter((order) => order.status === ORDER_STATUS_DELIVERED)
              .length
          }
        />
      </div>
    </div>
  );
};

export default Dashboard;
