import React from 'react';
import './Highlights.css';

function Highlights() {
  const images = [
    "https://tse4.mm.bing.net/th?id=OIP.6Axh0-PYY8UQVpfS08w3gwHaE8&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.1gh9nKA4gdIOYPGwF2HlFgHaJQ&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP.uohw7doOcbjVZDnRAWOsywHaHa&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.dqjEYnMOzSWw_6s9fWRWVQHaDW&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.NGrRqjlWe-0rhIuDX0UaPQHaEK&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.nz6D-hX-hfeTLtT4z-fOeQHaEK&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.Dc6D7wCGbfSBhW_lZ_entgHaD2&pid=Api&P=0&h=180",
    
    
  ];

  const captions = [
    "Adventure",
    "Memories",
    "Sunsets",
    "Travel",
    "Nature",
    "Moments",
    "love"
  ];

  return (
    <div className="highlights">
      {images.map((image, index) => (
        <div key={index} className="highlight">
          <img src={image} alt={`Highlight ${index + 1}`} />
          <p>{captions[index]}</p>
        </div>
      ))}
    </div>
  );
}

export default Highlights;
