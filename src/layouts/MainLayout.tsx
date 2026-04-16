import type { ReactNode } from "react";
import { Box, Typography } from "@mui/joy";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <Box sx={{ px: 2, py: 1.5, color: "white", bgcolor: "primary.500" }}>
        <Typography level="h4">Incentive Portal</Typography>
      </Box>
      <Box sx={{ p: 2, mx: "auto" }}>{children}</Box>
    </Box>
  );
};

export default MainLayout;
