import { Backdrop } from "@mui/material";
import { useState } from "react";

const DropContainer = ({ children }) => {
  const [open, setOpen] = useState(true);
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={() => setOpen(false)}
    >
      {children}
    </Backdrop>
  );
};

export default DropContainer;
