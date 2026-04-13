"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

interface NavItem {
  title: string
  url: string
}

interface NavMainProps {
  items: NavItem[]
}

export function NavMain({ items }: NavMainProps) {
  const pathname = usePathname()

  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.url}>
          <SidebarMenuButton
            asChild
            isActive={pathname === item.url || pathname.startsWith(item.url + "/")}
            className={cn(
              "hover:bg-white/10 transition-all duration-300",
              pathname === item.url || pathname.startsWith(item.url + "/")
                ? "bg-teal-600/30 text-teal-100 font-medium"
                : "text-slate-300"
            )}
          >
            <Link href={item.url} className="cursor-pointer">
              {item.title}
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
