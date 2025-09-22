import { FaPencil, FaRegCircleUser } from "react-icons/fa6";
import { toast } from "react-toastify";
import { updateUserRoles } from "@/api/users";
import { useState } from "react";
import Modal from "@/components/Modal";

const Action = ({ id, userRoles = [] }) => {
  const [showModal, setShowModal] = useState(false);
  const [roles, setRoles] = useState(userRoles);

  function updateRole(role) {
    let updatedRoles = roles;

    if (updatedRoles.includes(role)) {
      updatedRoles = updatedRoles.filter((item) => item != role);
    } else {
      updatedRoles.push(role);
    }

    setRoles(updatedRoles);
  }

  function update() {
    updateUserRoles(id, { roles })
      .then(() => {
        toast.success(`User update success.`, { autoClose: 1500 });
      })
      .catch(() => {
        toast.error("User update failed.", { autoClose: 1500 });
      })
      .finally(() => {
        setShowModal(false);
      });
  }

  return (
    <div className="flex items-center gap-4 justify-center">
      <button
        onClick={() => setShowModal(true)}
        className="text-blue-600 cursor-pointer"
      >
        <FaPencil />
      </button>

      <Modal
        icon={
          <FaRegCircleUser className="mx-auto text-6xl text-gray-400 mb-5" />
        }
        showModal={showModal}
        setShowModal={setShowModal}
        label={"Update user roles."}
        info={
          <div className="pb-5 flex items-center justify-center-safe gap-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="admin"
                className="mr-1"
                defaultChecked={roles.includes("ADMIN")}
                onClick={() => updateRole("ADMIN")}
              />
              <label htmlFor="admin">ADMIN</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="merchant"
                className="mr-1"
                defaultChecked={roles.includes("MERCHANT")}
                onClick={() => updateRole("MERCHANT")}
              />
              <label htmlFor="merchant">MERCHANT</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="user"
                className="mr-1"
                defaultChecked={roles.includes("USER")}
                onClick={() => updateRole("USER")}
                disabled
              />
              <label htmlFor="user">USER</label>
            </div>
          </div>
        }
        confirmAction={
          <button
            onClick={update}
            className="bg-green-700 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-green-800"
          >
            Update
          </button>
        }
      />
    </div>
  );
};

export default Action;
