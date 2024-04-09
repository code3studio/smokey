import { CSSProperties, useState } from "react";
import FireGif1 from "../../assets/fire1.gif";
import WaterBucketCursor from "../../assets/water_bucket.png";
import WaterBucketRotateCursor from "../../assets/water_bucket_rotate.png";

type Props = {
  top: number;
  right: number;
  width: string;
};

const Fire = ({ top, right, width }: Props) => {
    const [cursor, setCursor] = useState(WaterBucketCursor);
    const [isFireVisible, setIsFireVisible] = useState(true);
    const [opacity, setOpacity] = useState(1); 

    const handleClick = () => {
        setCursor(current => (current === WaterBucketCursor ? WaterBucketRotateCursor : WaterBucketCursor));
        
        setOpacity(0);

        setTimeout(() => {
            setIsFireVisible(false);
        }, 500); 
    };

    // Include the transition in the style
    const imageStyle:CSSProperties = {
        width: width,
        position: "absolute",
        top: top,
        right: right,
        cursor: `url(${cursor}), auto`,
        opacity: opacity, 
        transition: 'opacity 0.5s ease' 
    };

    return isFireVisible ? (
      <img
        onClick={handleClick}
        src={FireGif1}
        alt="fire"
        style={imageStyle}
      />
    ) : null;
};

export default Fire;
