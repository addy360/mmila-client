import { Backdrop, CircularProgress } from "@mui/material";

const DropLoader = () => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={false}
      // onClick={() => setOpen(false)}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default DropLoader;
