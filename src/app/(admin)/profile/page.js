"use client";

import { updateUserProfile } from "@/redux/auth/authActions";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "@/components/Button";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { resetSuccess } from "@/redux/auth/authSlice";
import ProfileImage from "./_components/ProfileImage";

const ProfilePage = () => {
  const { error, loading, user, success } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      city: user?.address.city,
      province: user?.address.province,
    },
  });

  const dispatch = useDispatch();

  function submitForm(data) {
    dispatch(
      updateUserProfile({
        id: user._id,
        name: data.name,
        phone: data.phone,
        address: {
          city: data.city,
          province: data.province,
        },
      })
    );
  }

  useEffect(() => {
    if (error) {
      toast.error(error, {
        autoClose: 1000,
      });
    }

    if (success) {
      toast.success("User updated successfully.", {
        autoClose: 1000,
      });

      dispatch(resetSuccess());
    }
  }, [error, success]);

  return (
    <section>
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-3xl font-semibold mb-5 dark:text-white text-gray-800">
          Your Profile
        </h1>
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 dark:bg-slate-700 bg-white rounded-2xl w-full border border-gray-200 dark:border-gray-600 shadow-lg">
          <ProfileImage user={user} />
          <form
            onSubmit={handleSubmit(submitForm)}
            className="space-y-4 md:space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John doe"
                {...register("name", {
                  required: "Name is required.",
                })}
              />
              <p className="text-red-600 text-sm m-1">{errors.name?.message}</p>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="disabled:bg-gray-100 disabled:text-gray-600 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                disabled
                {...register("email")}
              />
              <p className="text-red-600 text-sm m-1">
                {errors.email?.message}
              </p>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="9876543210"
                {...register("phone", {
                  required: "Phone number is required.",
                })}
              />
              <p className="text-red-600 text-sm m-1">
                {errors.phone?.message}
              </p>
            </div>
            <div>
              <label
                htmlFor="city"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address City
              </label>
              <input
                type="text"
                id="city"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Itahari"
                {...register("city", {
                  required: "Address city is required.",
                })}
              />
              <p className="text-red-600 text-sm m-1">{errors.city?.message}</p>
            </div>
            <div>
              <label
                htmlFor="province"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Province
              </label>
              <select
                id="province"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                {...register("province", {
                  required: "Province is required.",
                })}
                defaultValue=""
              >
                <option value="" disabled>
                  Select province
                </option>
                <option value="Bagmati">Bagmati</option>
                <option value="Gandaki">Gandaki</option>
                <option value="Karnali">Karnali</option>
                <option value="Koshi">Koshi</option>
                <option value="Lumbini">Lumbini</option>
                <option value="Madesh">Madesh</option>
                <option value="Sudurpaschim">Sudurpaschim</option>
              </select>
              <p className="text-red-600 text-sm m-1">
                {errors.province?.message}
              </p>
            </div>

            <Button loading={loading} label="Update user" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
