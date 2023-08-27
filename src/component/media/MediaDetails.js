import Overview from "./Overview";
import Reviews from "./Reviews";

const MediaDetails = ({ media ,type}) => {
  return (
    <div>
      <Overview media={media}></Overview>
      <Reviews id={media.id} type={type}></Reviews>
    </div>
  );
};

export default MediaDetails;
