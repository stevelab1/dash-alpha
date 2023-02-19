import React, { useState, useEffect } from "react";
import axios from "axios";

const Picture = ({ word }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchPicture = async () => {
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${word}&per_page=1`,
        {
          headers: {
            Authorization: "YOUR_PEXELS_API_KEY"
          }
        }
      );
      setImageUrl(response.data.photos[0].src.medium);
    };

    fetchPicture();
  }, [word]);

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="pexels" />}
    </div>
  );
};

export default Picture;
