import {
  ChevronRight,
  GalleryVerticalEnd,
  Bot,
  Settings2,
  Frame,
  PieChart,
  Map,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../ui/collapsible";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarFooter,

} from "../../ui/sidebar";

// This is sample data.
const items = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Books Management",
      icon: GalleryVerticalEnd,
      isActive: true,
      items: [
        {
          title: "Books",
          url: "#",
        },
        {
          title: "Add a Book",
          url: "#",
        },
      ],
    },
    {
      title: "Authors Management",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Authors",
          url: "#",
        },
        {
          title: "Add an Author",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function DbSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <UserInfo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <Navgation />
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex justify-between p-4">
          <div className="flex items-center">
            <button className="text-sm text-red-500 hover:underline">Logout</button>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

function UserInfo() {
  return (
    <>
      <div className="flex items-center gap-2 px-4 py-2">
        <div className="h-8 w-8 rounded-full flex items-center justify-center bg-gray-200">
          <span className="text-lg font-semibold">HA</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{items.user.name}</span>
          <span className="text-xs text-gray-500">{items.user.email}</span>
        </div>
      </div>
    </>
  );
}

function Navgation() {
  return (
    <div>
      {items.navMain.map((item) => (
        <Collapsible
          key={item.title}
          asChild
          defaultOpen={item.isActive}
          className="group/collapsible"
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {item.items?.map((subItem) => (
                  <SidebarMenuSubItem key={subItem.title}>
                    <SidebarMenuSubButton asChild>
                      <a href={subItem.url}>
                        <span>{subItem.title}</span>
                      </a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      ))}
    </div>
  );
}
