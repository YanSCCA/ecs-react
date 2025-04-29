import { useEffect, useState } from "react"

export default function RandomFact() {
  const [fact, setFact] = useState();

  useEffect(() => {
    const fetchFact = async () => {
      setFact("Loading...")
      try {
        const res = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
        const data = await res.json();
        setFact(data.text);
      } catch (error) {
        console.error(error);
        setFact("Error")
      }
    }

    fetchFact();
  }, [])

  return <p>Random Fact: {fact}</p>
}