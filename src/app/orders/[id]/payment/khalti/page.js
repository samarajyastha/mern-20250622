"use client";

import { confirmPayment } from "@/api/orders";
import { ORDER_STATUS_CONFIRMED } from "@/constants/orderStatus";
import { ORDERS_ROUTE } from "@/constants/routes";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Spinner from "@/components/Spinner";

const KhaltiPaymentPage = () => {
  const searchParams = useSearchParams();
  const status = searchParams?.get("status");
  const params = useParams();

  const router = useRouter();

  useEffect(() => {
    confirmPayment(params.id, { status })
      .then(() => {
        toast.success("Payment success.", {
          autoClose: 2500,
          onClose: () => {
            router.push(`${ORDERS_ROUTE}?status=${ORDER_STATUS_CONFIRMED}`);
          },
        });
      })
      .catch(() => {
        toast.error("Payment failed.", {
          autoClose: 2500,
          onClose: () => {
            router.push(ORDERS_ROUTE);
          },
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Spinner className="h-12 w-12 fill-primary" />
      <h2 className="mt-5 text-3xl">Verifying payment...</h2>
    </div>
  );
};

export default KhaltiPaymentPage;
