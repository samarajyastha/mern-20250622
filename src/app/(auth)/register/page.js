"use client";

import { EMAIL_REGEX } from "@/constants/regex";
import { LOGIN_ROUTE } from "@/constants/routes";
import { registerUser } from "@/redux/auth/authActions";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import PasswordInput from "../_components/PasswordInput";
import Button from "@/components/Button";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const { error, loading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  function submitForm(data) {
    dispatch(
      registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
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
  }, [error]);

  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 dark:bg-slate-700 rounded-2xl">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Create an account
      </h1>
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: EMAIL_REGEX,
                message: "Invalid email address.",
              },
            })}
          />
          <p className="text-red-600 text-sm m-1">{errors.email?.message}</p>
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="9876543210"
            {...register("phone", {
              required: "Phone number is required.",
            })}
          />
          <p className="text-red-600 text-sm m-1">{errors.phone?.message}</p>
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
          <p className="text-red-600 text-sm m-1">{errors.province?.message}</p>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <PasswordInput
            id="password"
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "Password length must be greater than 6.",
              },
            })}
          />
          <p className="text-red-600 text-sm m-1">{errors.password?.message}</p>
        </div>
        <div>
          <label
            htmlFor="confirm-password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </label>
          <PasswordInput
            id="confirm-password"
            {...register("confirmPassword", {
              required: "Confirm password is required.",
              minLength: {
                value: 6,
                message: "Password length must be greater than 6.",
              },
              validate: (value) =>
                value === password || "Passwords do not match.",
            })}
          />
          <p className="text-red-600 text-sm m-1">
            {errors.confirmPassword?.message}
          </p>
        </div>
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="terms"
              className="font-light text-gray-500 dark:text-gray-300"
            >
              I accept the{" "}
              <Link
                className="font-medium text-primary hover:underline dark:text-primary-500"
                href="#"
              >
                Terms and Conditions
              </Link>
            </label>
          </div>
        </div>

        <Button loading={loading} label="Create an account" />

        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            href={LOGIN_ROUTE}
            className="font-medium text-primary hover:underline dark:text-primary-500"
          >
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
