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
      alterIcon: "OrgStructureColor",
      icon: "OrgStructure",
      body: [
        {
          title: "ELEMENTS",
          items: [
            {
              name: "Organization",
              icon: "Organization",
            },
            {
              name: "Business Units",
              icon: "BusinessUnits",
            },
            {
              name: "Organizational Units",
              icon: "OrganizationalUnits",
            },
            {
              name: "Lists & Groups",
              icon: "ListsAndGroups",
            },
            {
              name: "Job Titles",
              icon: "JobTitles",
            },
            {
              name: "Users",
              icon: "Users",
            },
          ],
        },
      ],
      footer: [
        {
          name: "Organizational Chart",
          icon: "OrganizationalChart",
        },
        {
          name: "View Tour",
          icon: "ProductTour",
          notification: true,
        },
      ],
    },
    {
      name: "Workspace",
      icon: "Workspace",
    },
  ],
};
