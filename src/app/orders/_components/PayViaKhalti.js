import Image from "next/image";
import khaltiIcon from "@/assets/images/payments/khalti-logo.jpeg";
import { toast } from "react-toastify";
import { payViaKhalti } from "@/api/orders";

const PayViaKhalti = ({ order }) => {
  function initOrderPayment() {
    payViaKhalti(order._id)
      .then((response) => {
        const data = response.data;

        window.location.href = data.payment_url;
      })
      .catch((error) => {
        toast.error(error.response.data, { autoClose: 1500 });
      });
  }

  return (
    <button
      onClick={initOrderPayment}
      className="text-white bg-[#4E2C6D] hover:bg-[#4e2c6dbe] cursor-pointer rounded-md flex items-center text-sm pl-2 pr-4 py-1 gap-2"
    >
      <Image
        src={khaltiIcon}
        height={30}
        width={100}
        alt=""
        className="h-5 w-auto"
      />
      Khalti
    </button>
  );
};

export default PayViaKhalti;
