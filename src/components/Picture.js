// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Picture = ({ word }) => {
//   const [imageUrl, setImageUrl] = useState("");

//   useEffect(() => {
//     const fetchPicture = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.pexels.com/v1/search?query=${word}&per_page=1`,
//           {
//             headers: {
//               Authorization: `Bearer FKpX18SXdc3NKp8ejxilT1y7HkAAlRwH4HVqVM1uyOffr9hxInCSpMls`
//             }
//           }
//         );
//         setImageUrl(response.data.photos[0].src.medium);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchPicture();
//   }, [word]);

//   return (
//     <div>
//       {imageUrl && <img src={imageUrl} alt="pexels" className="img-fluid rounded" />}
//     </div>
//   );
// };

// export default Picture;
import React, { useState, useEffect } from "react";
import axios from "axios";

const Picture = ({ word }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchPicture = async () => {
      if (word) {
        try {
          const response = await axios.get(
            `https://api.pexels.com/v1/search?query=${word}&per_page=1`,
            {
              headers: {
                Authorization: `Bearer FKpX18SXdc3NKp8ejxilT1y7HkAAlRwH4HVqVM1uyOffr9hxInCSpMls`
              }
            }
          );
          setImageUrl(response.data.photos[0].src.medium);
        } catch (error) {
          console.error(error);
        }
      } else {
        setImageUrl("");
      }
    };

    fetchPicture();
  }, [word]);

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="pexels" className="img-fluid rounded" />}
    </div>
  );
};

export default Picture;
