// Instance the tour
var tour = new Tour({
  storage: window.localStorage,
  orphan: true,
  steps: [
    {
      title: "Welcome User",
      content: "Welcome to the dashboard, this tour will help you get started.",
      backdrop: true,
      orphan: true
    },
    {
      element: "#about",
      title: "Navigation",
      content:
        "Navigation will help you quickly move around the dashboard app.",
      backdrop: true
    },
    {
      element: "#dashboard",
      title: "Dashboard View",
      content: "This is where you can view the main dashboard.",
      backdrop: true
    },
    {
      element: "#reports",
      title: "Create Report",
      content:
        "This is where you can manage and create reports for the dashboard view.",
      backdrop: true
    },
    {
      element: "#box",
      title: "View Report",
      content: "You can click any of your create reports to view them.",
      backdrop: true
    },
    {
      element: "#contact",
      title: "Supprt",
      content: "If you need any assistace please contact us.",
      backdrop: true
    }
  ]
});

// Initialize the tour
tour.init();

// Start the tour
tour.start();
