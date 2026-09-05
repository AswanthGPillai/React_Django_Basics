import React from 'react'

const LazyFifteen = () => {
    const images = [
    "https://picsum.photos/id/1/800/600",
    "https://picsum.photos/id/2/800/600",
    "https://picsum.photos/id/3/800/600",
    "https://picsum.photos/id/4/800/600",
    "https://picsum.photos/id/5/800/600",
    "https://picsum.photos/id/6/800/600",
    "https://picsum.photos/id/7/800/600",
    "https://picsum.photos/id/8/800/600",
    "https://picsum.photos/id/9/800/600",
    "https://picsum.photos/id/10/800/600",

    "https://picsum.photos/id/11/800/600",
    "https://picsum.photos/id/12/800/600",
    "https://picsum.photos/id/13/800/600",
    "https://picsum.photos/id/14/800/600",
    "https://picsum.photos/id/15/800/600",
    "https://picsum.photos/id/16/800/600",
    "https://picsum.photos/id/17/800/600",
    "https://picsum.photos/id/18/800/600",
    "https://picsum.photos/id/19/800/600",
    "https://picsum.photos/id/20/800/600",

    "https://picsum.photos/id/21/800/600",
    "https://picsum.photos/id/22/800/600",
    "https://picsum.photos/id/23/800/600",
    "https://picsum.photos/id/24/800/600",
    "https://picsum.photos/id/25/800/600",
    "https://picsum.photos/id/26/800/600",
    "https://picsum.photos/id/27/800/600",
    "https://picsum.photos/id/28/800/600",
    "https://picsum.photos/id/29/800/600",
    "https://picsum.photos/id/30/800/600",

    "https://picsum.photos/id/31/800/600",
    "https://picsum.photos/id/32/800/600",
    "https://picsum.photos/id/33/800/600",
    "https://picsum.photos/id/34/800/600",
    "https://picsum.photos/id/35/800/600",
    "https://picsum.photos/id/36/800/600",
    "https://picsum.photos/id/37/800/600",
    "https://picsum.photos/id/38/800/600",
    "https://picsum.photos/id/39/800/600",
    "https://picsum.photos/id/40/800/600",

    "https://picsum.photos/id/41/800/600",
    "https://picsum.photos/id/42/800/600",
    "https://picsum.photos/id/43/800/600",
    "https://picsum.photos/id/44/800/600",
    "https://picsum.photos/id/45/800/600",
    "https://picsum.photos/id/46/800/600",
    "https://picsum.photos/id/47/800/600",
    "https://picsum.photos/id/48/800/600",
    "https://picsum.photos/id/49/800/600",
    "https://picsum.photos/id/50/800/600"
]
  return (
    <div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        loading="lazy"
                        width="800"
                        height="600"
                    />
                ))}
        </div>
    </div>
  )
}

export default LazyFifteen