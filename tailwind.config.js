/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    colors: {
      // Configure your color palette here
      white: "#fff",
      black: "#000",
      "bg-color": "#f7f7ff",
      primary: "#7269ef",
      "primary-loading": "#8A84FF",
      "text-muted": "#7a7f9a",
      "secondary-color": "#7a7f9a",
      "border-input": "#e6ebf5",
      "bg-btn-hover": "#6159cb",
      "bg-icon": "#f8f9fa",
      "text-danger": "#dc3545",
      "bs-sidebar-menu-item-color": "#f7f7ff",
      "bs-dark": "#343a40",
      "bs-primary-bg-subtle": "#e3e1fc",
      "bs-success-rgb": "#06d6a0",
      "bs-border-color": "#f0eff5",
    },
  },
};
