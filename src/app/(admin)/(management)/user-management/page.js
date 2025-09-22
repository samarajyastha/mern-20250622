import UsersTable from "./_components/Table";

const UserManagement = () => {
  return (
    <div className="px-4 mx-auto max-w-screen-2xl">
      <h2 className="font-semibold text-2xl text-gray-700 mb-5 dark:text-white">
        User Management
      </h2>
      <UsersTable />
    </div>
  );
};

export default UserManagement;
