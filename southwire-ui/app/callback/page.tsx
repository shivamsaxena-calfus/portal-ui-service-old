"use client";
import { useEffect } from "react";
import { useAuth } from "react-oidc-context";
import Dashboard from "../dashboard/page";
import Cookies from "js-cookie";

const Callback = () => {
  const auth = useAuth();
  useEffect(() => {
    if (auth?.user?.access_token) {
      Cookies.set("accessToken", auth.user.access_token);
    } else {
      throw "no access token";
    }
  }, [auth]);

  if (auth.isAuthenticated) {
    return <Dashboard />;
  }
};

export default Callback;
