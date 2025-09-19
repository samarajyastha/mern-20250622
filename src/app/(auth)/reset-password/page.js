"use client";

import { LOGIN_ROUTE } from "@/constants/routes";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import Link from "next/link";
import { resetPassword } from "@/api/auth";
import { toast } from "react-toastify";
import { useState } from "react";
import PasswordInput from "../_components/PasswordInput";
import { useSearchParams } from "next/navigation";

const ResetPasswordPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const password = watch("password");

  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();

  const token = searchParams.get("token");
  const userId = searchParams.get("userId");

  function submitForm(data) {
    setLoading(true);

    resetPassword(token, userId, data)
      .then(() => {
        toast.success("Password reset successful.", {
          autoClose: 1500,
        });

        reset();
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
        Reset password?
      </h1>
      <form
        className="space-y-4 md:space-y-6"
        onSubmit={handleSubmit(submitForm)}
      >
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

export default ResetPasswordPage;
