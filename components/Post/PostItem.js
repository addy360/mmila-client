import { CardActionArea, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const PostItem = ({ onDetail }) => {
  return (
    <>
      <Card sx={{ maxWidth: "full" }}>
        <CardActionArea onClick={() => onDetail(true)}>
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
    </>
  );
};

export default PostItem;
