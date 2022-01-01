import BottomNav from "../components/BottomNav";
import DropLoader from "../components/DropLoader";
import Posts from "../components/Post/Posts";

const Index = () => {
  return (
    <div>
      <DropLoader />
      <Posts />
      <BottomNav />
    </div>
  );
};

export default Index;
