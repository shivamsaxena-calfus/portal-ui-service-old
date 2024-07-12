"use client";
import { Box, Button } from "@mui/material";
import Cookies from "@/node_modules/@types/js-cookie";
import { useAuth } from "react-oidc-context";

const Dashboard = () => {
  const auth = useAuth();

  const logout = () => {
    console.log("Logout button clicked");
    auth.signoutSilent({
      id_token_hint: auth.user?.id_token,
    });
  };

  return (
    <Box>
      Hello from Dashboard
      <Button variant="contained" color="primary" onClick={logout}>
        logout
      </Button>
    </Box>
  );
};

export default Dashboard;
