import React, { useEffect, useState } from "react";

function App() {
    const [showDogs, setShowDogs] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
          setShowDogs(data.message);
          setIsLoaded(true);
        });
    }, []);
  
    if (!isLoaded) return <p>Loading...</p>;
  
    return <img src={showDogs} alt="A Random Dog"></img>;
  }

export default App