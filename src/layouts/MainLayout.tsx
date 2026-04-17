import type { ReactNode } from "react";
import { Box, Typography } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/joy";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login", { replace: true });
  };
  return (
    <Box>
      <Box
        sx={{
          px: 3,
          py: 1.5,
          color: "rgb(255, 255, 255)",
          bgcolor: "primary.500",

          display: "flex",
          justifyContent: "space-between", // 👈 pushes to edges
          alignItems: "center", // 👈 vertical alignment
        }}
      >
        <Typography level="h4" sx={{ color: "white" }}>
          Incentive Portal
        </Typography>

        <Button onClick={handleLogout} color="danger" variant="soft">
          Logout
        </Button>
      </Box>
      <Box sx={{ p: 2, mx: "auto" }}>{children}</Box>
    </Box>
  );
};

export default MainLayout;
