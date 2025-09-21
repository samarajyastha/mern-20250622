const Card = ({ label, value, icon }) => {
  return (
    <div className="p-6 rounded-lg shadow-md bg-white min-h-36 gap-3 flex flex-col items-start justify-center">
      <div className="flex items-center gap-4">
        {icon}
        <h3 className="text-gray-700">{label}</h3>
      </div>
      <div className="text-3xl font-semibold text-gray-700">{value}</div>
    </div>
  );
};

export default Card;
