import { useEffect, useState } from "react"
export default function RandomGif() {
  const [gif, setGif] = useState();

  useEffect(() => {
    const fetchGif = async () => {
      setGif("Loading...")
      try {
        const res = await fetch("https://api.giphy.com/v1/gifs/random?api_key=kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S");
        const data = await res.json();
        setGif(data.data.images.original.url);
      } catch (error) {
        console.error(error);
        setGif("Error")
      }
    }

    fetchGif();
  }, [])

  return <img src={gif} alt="Random gif" />
}