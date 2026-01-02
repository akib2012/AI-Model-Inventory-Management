import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Router/Router";
import AuthProvide from "./ContextAuth/AuthProvide";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "next-themes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light">
      <AuthProvide>
        <RouterProvider router={router}></RouterProvider> <ToastContainer />
      </AuthProvide>
    </ThemeProvider>
  </StrictMode>
);
