import type { ReactNode } from "react";
import { Box, Stack, Typography } from "@mui/joy";
import { Button } from "@mui/joy";
import { useNavigate, useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChartOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import { Tooltip } from "@mui/joy";
const MainLayout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login", { replace: true });
  };
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* 🔷 Header */}
      <Box
        sx={{
          px: 3,
          py: 1.5,
          bgcolor: "primary.500",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button variant="soft" onClick={() => setCollapsed((prev) => !prev)}>
          {collapsed ? "➡️" : "⬅️"}
        </Button>
        <Typography level="h4" sx={{ color: "white" }}>
          Incentive Portal
        </Typography>

        <Button onClick={handleLogout} color="danger" variant="soft">
          Logout
        </Button>
      </Box>
      {/* 🔻 Body (Sidebar + Content) */}
      <Box sx={{ display: "flex", flex: 1 }}>
        {/* 🧩 Sidebar */}
        <Box
          sx={{
            width: collapsed ? 80 : 220,
            transition: "width 0.3s",
            bgcolor: "neutral.100",
            p: 1,
          }}
        >
          <Stack spacing={1.5}>
            <Tooltip
              title="Dashboard"
              placement="right"
              enterDelay={300}
              disableHoverListener={!collapsed}
            >
              <Button
                startDecorator={<DashboardIcon />}
                variant={location.pathname === "/dashboard" ? "soft" : "plain"}
                color={
                  location.pathname === "/dashboard" ? "primary" : "neutral"
                }
                onClick={() => navigate("/dashboard")}
                sx={{
                  justifyContent: collapsed ? "center" : "flex-start",
                }}
              >
                {!collapsed && "Dashboard"}
              </Button>
            </Tooltip>

            {/* Add more later */}
            <Tooltip
              title="Reports"
              placement="right"
              enterDelay={300}
              disableHoverListener={!collapsed}
            >
              <Button
                startDecorator={<BarChartIcon />}
                variant={isActive("/reports") ? "soft" : "plain"}
                color={isActive("/reports") ? "primary" : "neutral"}
                onClick={() => navigate("/reports")}
                sx={{
                  justifyContent: collapsed ? "center" : "flex-start",
                }}
              >
                {!collapsed && "Reports"}
              </Button>
            </Tooltip>
            <Tooltip
              title="Settings"
              placement="right"
              enterDelay={300}
              disableHoverListener={!collapsed}
            >
              <Button
                startDecorator={<SettingsIcon />}
                variant={isActive("/settings") ? "soft" : "plain"}
                color={isActive("/settings") ? "primary" : "neutral"}
                onClick={() => navigate("/settings")}
                sx={{
                  justifyContent: collapsed ? "center" : "flex-start",
                }}
              >
                {!collapsed && "Settings"}
              </Button>
            </Tooltip>
          </Stack>
        </Box>
        {/* 📄 Main Content */}
        <Box
          sx={{
            flex: 1,
            p: 3,
            bgcolor: "#f9f9f9",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
