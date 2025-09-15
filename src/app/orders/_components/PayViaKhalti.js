import Image from "next/image";
import khaltiIcon from "@/assets/images/payments/khalti-logo.jpeg";

const PayViaKhalti = () => {
  return (
    <button className="text-white bg-[#4E2C6D] rounded-md flex items-center text-sm pl-2 pr-4 py-1 gap-2">
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
