import { Container, Grid } from "@mui/material";
import PostItem from "./PostItem";

const Posts = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={4}>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </Grid>
      </Container>
    </div>
  );
};

export default Posts;
