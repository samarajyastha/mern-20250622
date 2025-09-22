import { updateProfileImage } from "@/api/users";
import Button from "@/components/Button";
import Spinner from "@/components/Spinner";
import { updateUser } from "@/redux/auth/authSlice";
import Image from "next/image";
import { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const ProfileImage = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const dispatch = useDispatch();

  function updateImage(event) {
    event.preventDefault();

    setLoading(true);

    const formdata = new FormData();

    formdata.append("image", profileImage);

    updateProfileImage(user._id, formdata)
      .then((response) => {
        dispatch(updateUser(response.data.profileImageUrl));

        setProfileImage(null);
      })
      .catch((error) => {
        toast.error(error.response.data, { autoClose: 1500 });
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="flex flex-col md:flex-row items-center gap-5">
      {user?.profileImageUrl ? (
        <Image
          src={user.profileImageUrl}
          alt=""
          height={64}
          width={64}
          className="h-16 w-16 rounded-full object-cover border border-gray-200 p-1"
        />
      ) : (
        <FaUser className="h-16 w-16 rounded-full p-3 bg-gray-200 text-gray-700" />
      )}

      <form
        className="flex flex-col md:flex-row items-center gap-2"
        onSubmit={updateImage}
      >
        <input
          type="file"
          accept=".png,.jpg,.jpeg"
          className="border border-gray-400 rounded-md px-3 py-1 w-full dark:text-white"
          required
          onChange={(e) => {
            const file = e.target.files[0];

            setProfileImage(file);
          }}
        />

        <button
          type="submit"
          className="bg-secondary text-white py-1 px-4 rounded-md w-full md:w-max flex items-center gap-2 whitespace-nowrap"
        >
          Update Image
          {loading && <Spinner className="h-4 w-4 fill-secondary" />}
        </button>
      </form>
    </div>
  );
};

export default ProfileImage;
