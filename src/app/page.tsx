import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/session";
import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

async function  Home() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login")
  };
  console.log(user)
  return (
    <DefaultLayout user = {user}>
      <ECommerce />
    </DefaultLayout>
  );
}

export default Home;
