"use client";
import React, { useState, ReactNode } from "react";
import { redirect } from "next/navigation"
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DefaultLayout({user, 
  children,
}: {
  children: React.ReactNode;
  user?: {
  id: number;
  name: string;
  email: string;
  image: string;
  emailVerified:string;
}
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

   if (!user) {
      redirect("/login")
    }
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col lg:ml-72.5">
          {/* <!-- ===== Header Start ===== --> */}
          <Header user={user} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
