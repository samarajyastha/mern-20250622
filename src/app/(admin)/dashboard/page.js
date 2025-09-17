import React from "react";
import Card from "./_components/Card";

const Dashboard = () => {
  return (
    <div className="px-4 mx-auto max-w-screen-2xl">
      <h2 className="font-semibold text-2xl text-gray-700 dark:text-white mb-5">
        Dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Dashboard;
