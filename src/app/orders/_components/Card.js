import {
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_SHIPPED,
} from "@/constants/orderStatus";
import Image from "next/image";
import { FaImage } from "react-icons/fa6";
import DeleteAction from "./DeleteAction";
import CashOnDelivery from "./CashOnDelivery";
import PayViaKhalti from "./PayViaKhalti";
import PayViaStripe from "./PayViaStripe";

const OrderStatusBadge = ({ status }) => {
  switch (status) {
    case ORDER_STATUS_CONFIRMED:
      return (
        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
          {status}
        </span>
      );

    case ORDER_STATUS_SHIPPED:
      return (
        <span className="bg-orange-100 text-orange-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-orange-900 dark:text-orange-300">
          {status}
        </span>
      );
    case ORDER_STATUS_DELIVERED:
      return (
        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">
          {status}
        </span>
      );

    default:
      return (
        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">
          {status}
        </span>
      );
  }
};

const OrderCard = ({ order, setIsUpdated }) => {
  return (
    <div className="border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white rounded-lg shadow-md overflow-hidden">
      <div className="py-4 px-6">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Order Number: #{order.orderNumber}</h3>
          <OrderStatusBadge status={order.status} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
          {order.orderItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-md px-4 py-2"
            >
              <div className="flex items-center gap-4">
                {item.product?.imageUrls.length > 0 ? (
                  <Image
                    src={item.product.imageUrls[0]}
                    alt={item.product?.name}
                    height={100}
                    width={100}
                    className="h-18 w-18 object-cover rounded-md"
                  />
                ) : (
                  <FaImage className="h-14 w-14 text-gray-300" />
                )}
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                    {item.product?.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Rs. {item.product?.price} x {item.quantity}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 py-4 justify-between items-center bg-gray-100 dark:bg-gray-700 md:flex-row md:py-3 px-6">
        <p className="font-medium">Total: Rs. {order.totalPrice}</p>
        {order.status == ORDER_STATUS_PENDING && (
          <div className="flex gap-2">
            <CashOnDelivery order={order} />
            <PayViaKhalti order={order} />
            <PayViaStripe order={order} />
            <DeleteAction order={order} setIsUpdated={setIsUpdated} />
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
