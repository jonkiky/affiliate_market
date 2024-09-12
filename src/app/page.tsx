import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/session";
import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Ecom Partner Program",
  description: "Earn Passive Income Easily,Hire Us to Manage Your Shop amazon, tiktok, esty and Earn Commissions Effortlessly!",
};

async function  Home() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login")
  };
  return (
    <DefaultLayout user = {user}>
      <ECommerce />
    </DefaultLayout>
  );
}

export default Home;
