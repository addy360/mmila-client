// import DropContainer from "../DropContainer";
// import PostItem from "./PostItem";

// const PostDetailed = () => {
//   return (
//     <DropContainer>
//       <PostItem />
//     </DropContainer>
//   );
// };

// export default PostDetailed;

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import PostItem from "./PostItem";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ open, handleClose }) {
  return (
    <div>
      <Dialog
        fullScreen
        open={!!open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container>
          <Card sx={{ maxWidth: "full" }}>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/random"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                story
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                deleniti adipisci esse, illo velit neque iste vitae tempore
                eaque aspernatur sequi fuga
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Dialog>
    </div>
  );
}
