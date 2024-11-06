import React from 'react';
import './Posts.css';

function Posts() {
  const images = [
    "https://tse4.mm.bing.net/th?id=OIP.Mvcr0QDsGXOx29cSBfXd6AHaE7&pid=Api&P=0&h=180",
    "https://img.freepik.com/premium-photo/serene-lake-surrounded-by-blooming-trees_931878-14162.jpg",
    "https://tse4.mm.bing.net/th?id=OIP.7MsMzrwDjxzE9QnjB9KPyQHaEI&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.fK7udoag2JsgUXQGeWrEXAHaHa&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP.fOf7DZsCo0YnFltadpw49gHaEo&pid=Api&P=0&h=180",
    "https://img.freepik.com/premium-photo/mountain-peaks-winter-snow-covered-mountains-landscape_160901-5623.jpg",
    "https://tse4.mm.bing.net/th?id=OIP.WHCABVE4tEb7Nc9LT7fkAQHaEo&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP.yOEsmNO5gyTW7ZeQ97C2IwHaHZ&pid=Api&P=0&h=180",
    "https://i.ytimg.com/vi/CoQtaW0BpDY/maxresdefault.jpg",
  ];

  const captions = [
    "Beautiful sunset over the mountains",
    "Serene lake surrounded by trees",
    "Vibrant cityscape at night",
    "Majestic waterfall in the forest",
    "Golden beach on a sunny day",
    "Snow-covered peaks in winter",
    "Colorful autumn leaves",
    "Desert landscape with blue skies",
    "Calm river flowing through the valley"
  ];

  return (
    <div className="posts-grid">
      {images.map((image, index) => (
        <div key={index} className="post">
          <img src={image} alt={`Post ${index + 1}`} />
          <p className="caption">{captions[index]}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
