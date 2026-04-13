"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
// import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
// import logo from "@/assets/logo.png";
import Link from "next/link";
// import Image from "next/image";
import { TAdminDetails } from "@/types/auth.types";
import { transformRoleFeatures } from "@/utils/transformRoleFeature";
import { useRouter } from "next/navigation";

export function AppSidebar({
  variant,
  data,
}: {
  variant: "sidebar" | "floating" | "inset" | undefined;
  data?: TAdminDetails;
}) {
  const router = useRouter();

  // Handle undefined or missing data
  React.useEffect(() => {
    if (!data || !data?.role?.roleFeature) {
      router.push("/login");
    }
  }, [data, router]);

  if (!data || !data?.role?.roleFeature) {
    return null;
  }

  const { navMain } = transformRoleFeatures(data.role.roleFeature);

  return (
    <Sidebar
      collapsible="offcanvas"
      variant={variant}
      className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white border-r border-slate-700/50"
    >
      <SidebarHeader className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-4 hover:bg-white/10 transition-all duration-300"
            >
              <Link href="/" className="cursor-pointer flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white">CODYSTA</span>
                  <span className="text-xs text-teal-100">Dashboard</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter className="bg-gradient-to-r from-slate-900 to-slate-800 border-t border-slate-700/50 p-4">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-teal-600/10 to-emerald-600/10 border border-teal-500/20">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {data.fullName?.charAt(0).toUpperCase() || "U"}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-medium text-sm truncate">
              {data.fullName || "User"}
            </p>
            <p className="text-slate-400 text-xs truncate">{data.email}</p>
          </div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
