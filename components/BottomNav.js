import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useState } from "react";

const BottomNav = () => {
  const [value, setValue] = useState(0);
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: (theme) => theme.palette.primary.main,
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          console.log(`newValue`, newValue);
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" />
        <BottomNavigationAction label="About" />
        <BottomNavigationAction label="Contact" />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
