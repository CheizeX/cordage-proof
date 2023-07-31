import { SidebarItems } from "./Sidebar.interface";

export const sidebarItems: SidebarItems = {
  body: [
    {
      title: "My Tools",
      items: [
        {
          name: "Dashboard",
          icon: "Dashboard",
        },
        {
          name: "Task",
          icon: "Task",
        },
        {
          name: "Calendar",
          icon: "Calendar",
        },
        {
          name: "Workflows",
          icon: "Workflows",
        },
        {
          name: "Reports",
          icon: "Reports",
        },
      ],
    },
    {
      title: "Modules",
      items: [
        {
          name: "Documents",
          icon: "Documents",
          body: [
            {
              title: "FEATURES",
              items: [
                {
                  name: "Documents",
                },
                {
                  name: "Document Sets",
                },
                {
                  name: "Requests",
                },
                {
                  name: "Printed Copies",
                },
              ],
            },
            {
              title: "ADMIN SETTINGS",
              items: [
                {
                  name: "Context Fields",
                },
                {
                  name: "Action Profiles",
                },
                {
                  name: "Obsolete Reasons",
                },
                {
                  name: "Workspace",
                },
                {
                  name: "Document Types",
                },
              ],
            },
          ],
          footer: [
            {
              name: "What’s New",
              icon: "WhatsNew",
            },
            {
              name: "Product Tour",
              icon: "ProductTour",
            },
          ],
        },
        {
          name: "CAPAS",
          icon: "Capas",
        },
        {
          name: "Training",
          icon: "Training",
        },
        {
          name: "Add Module",
          icon: "AddModule",
        },
      ],
    },
  ],
  footer: [
    {
      name: "Org. Structure",
      icon: "OrgStructure",
    },
    {
      name: "Workspace",
      icon: "Workspace",
    },
  ],
};
