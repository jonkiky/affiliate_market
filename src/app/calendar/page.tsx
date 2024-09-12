import Calendar from "@/components/Calender";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { auth } from "@/auth"; 
import DefaultLayout from "@/components/Layouts/DefaultLayout";
// Ensure the User type has id: number
type User = {
  id: number;
  name: string;
  email: string;
  image: string;
  emailVerified:string;
};

export const metadata: Metadata = {
  title: "Ecom Partner Program",
  description: "Earn Passive Income Easily,Hire Us to Manage Your Shop amazon, tiktok, esty and Earn Commissions Effortlessly!",
};

 async function  CalendarPage() {

  const session = await auth();
   if (!session || !session.user) {
      redirect("/login")
    }

    // Provide default values to ensure the properties match the User type
  const user: User = {
    id: Number(session.user.id) || 0,
    name: session.user.name || "Unknown Name", // Default value if name is null or undefined
    email: session.user.email || "unknown@example.com", // Default value if email is null or undefined
    image: session.user.image || "/images/user/user-01.png", // Default placeholder image if undefined
    emailVerified:""
  };


  return (
    <DefaultLayout user ={user} >
      <Calendar />
    </DefaultLayout>
  );
};

export default CalendarPage;
