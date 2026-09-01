import React, { useState } from "react";

const images = [
    "https://picsum.photos/id/10/600/400",
    "https://picsum.photos/id/20/600/400",
    "https://picsum.photos/id/30/600/400",
    "https://picsum.photos/id/40/600/400",
    "https://picsum.photos/id/50/600/400",
    "https://picsum.photos/id/60/600/400",
];

const LazyImages = () => {
    const [loadedImages, setLoadedImages] = useState({});

    const handleImageLoad = (index) => {
        setLoadedImages((prev) => ({
            ...prev,
            [index]: true,
        }));
    };

    return (
        <div>
            <h1>Lazy Loading Images</h1>

            {images.map((image, index) => (
                <div key={image} style={{ marginBottom: "30px", }}>
                    <h3>Image {index + 1}</h3>

                    <div style={{ position: "relative", width: "600px", maxWidth: "100%", height: "400px", overflow: "hidden", background: "#eee" }}>
                        {/* Loading GIF */}
                        {!loadedImages[index] && (
                            <div style={{ position: "absolute", inset: 0, display: "flex", justifyContent: "center", alignItems: "center", zIndex: 2, background: "#eee" }}><img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="Loading..." width="60" height="60" />
                            </div>
                        )}

                        {/* Actual Image */}
                        <img src={image} alt={`Example ${index + 1}`} loading="lazy" width="600" height="400" onLoad={() => handleImageLoad(index)} style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", filter: loadedImages[index] ? "blur(0px)" : "blur(20px)", transform: loadedImages[index] ? "scale(1)" : "scale(1.05)", transition: "filter 0.5s ease, transform 0.5s ease" }} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LazyImages;