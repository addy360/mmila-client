import { Container, Grid } from "@mui/material";
import { useCallback, useState } from "react";
import PostItem from "./PostItem";
import PostDetailed from "./PostDetailed";

const Posts = () => {
  const [onDetail, setOndetail] = useState(null);
  const handleOnDetail = useCallback((data) => {
    setOndetail(data);
    console.log(`data`, data);
  }, []);
  return (
    <>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <PostItem onDetail={handleOnDetail} />
          </Grid>{" "}
          <Grid item xs={12} sm={6} md={4}>
            <PostItem onDetail={handleOnDetail} />
          </Grid>{" "}
          <Grid item xs={12} sm={6} md={4}>
            <PostItem onDetail={handleOnDetail} />
          </Grid>{" "}
          <Grid item xs={12} sm={6} md={4}>
            <PostItem onDetail={handleOnDetail} />
          </Grid>{" "}
          <Grid item xs={12} sm={6} md={4}>
            <PostItem onDetail={handleOnDetail} />
          </Grid>
        </Grid>
      </Container>
      <PostDetailed open={onDetail} handleClose={() => setOndetail(null)} />
    </>
  );
};

export default Posts;
