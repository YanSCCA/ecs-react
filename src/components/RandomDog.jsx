import { useEffect, useState } from "react"

export default function RandomDog() {
  const [dog, setDog] = useState();

  useEffect(() => {
    const fetchDog = async () => {
      setDog("Loading...")
      try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await res.json();
        setDog(data.message);
      } catch (error) {
        console.error(error);
        setDog("Error")
      }
    }

    fetchDog();
  }, [])

  return <img src={dog} alt="Random dog" />
}