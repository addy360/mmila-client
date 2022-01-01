import { CircularProgress } from "@mui/material";
import DropContainer from "./DropContainer";

const DropLoader = () => {
  return (
    <DropContainer>
      <CircularProgress color="inherit" />
    </DropContainer>
  );
};

export default DropLoader;
