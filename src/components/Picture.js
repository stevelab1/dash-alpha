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
            Authorization:
              "FKpX18SXdc3NKp8ejxilT1y7HkAAlRwH4HVqVM1uyOffr9hxInCSpMls",
          },
        }
      );
      if (response.data.photos.length === 0) {
        setImageUrl("");
      } else {
        setImageUrl(response.data.photos[0].src.medium);
      }
    };

    fetchPicture();
  }, [word]);

  return (
    <div>
      {imageUrl && (
        <img src={imageUrl} alt="pexels" className="img-fluid rounded" />
      )}
    </div>
  );
};

export default Picture;
