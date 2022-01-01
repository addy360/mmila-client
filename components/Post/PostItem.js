import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

const PostItem = () => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
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
              deleniti adipisci esse, illo velit neque iste vitae tempore eaque
              aspernatur sequi fuga
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default PostItem;
