import { FaRegClock } from "react-icons/fa6";

const Card = () => {
  return (
    <div className="p-6 rounded-lg shadow-md bg-green-100 min-h-36 gap-3 flex flex-col items-start justify-center">
      <div className="flex items-center gap-4">
        <FaRegClock className="text-4xl text-green-700" />
        <h3 className="text-gray-700">Pending</h3>
      </div>
      <div className="text-3xl font-semibold text-gray-700">20</div>
    </div>
  );
};

export default Card;
