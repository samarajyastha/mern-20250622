"use client";

import { EMAIL_REGEX } from "@/constants/regex";
import { LOGIN_ROUTE } from "@/constants/routes";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import Link from "next/link";
import { forgotPassword } from "@/api/auth";
import { toast } from "react-toastify";
import { useState } from "react";

const ForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  function submitForm(data) {
    setLoading(true);

    forgotPassword(data)
      .then(() => {
        toast.success("Reset password link sent successfully.", {
          autoClose: 1500,
        });
      })
      .catch((error) => {
        toast.error(error.response?.data, {
          autoClose: 1500,
        });
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 dark:bg-slate-700 rounded-2xl">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Forgot password?
      </h1>
      <form
        className="space-y-4 md:space-y-6"
        onSubmit={handleSubmit(submitForm)}
      >
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
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                required
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary dark:ring-offset-gray-800"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="remember"
                className="text-gray-500 dark:text-gray-300"
              >
                I accept the{" "}
                <span className="font-medium">Terms and conditions</span>
              </label>
            </div>
          </div>
        </div>
        <Button loading={loading} label="Submit" />
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Please login to continue?{" "}
          <Link
            href={LOGIN_ROUTE}
            className="font-medium text-primary hover:underline dark:text-primary-500"
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
