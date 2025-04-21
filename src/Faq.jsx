import Accordion from "./components/Accordion";
import { FAQS } from "./data";

export default function Faq() {
  return (
    <>
      <h1>FAQ</h1>
      <p>Frequently Asked Questions</p>
      <div>
        {FAQS.map((faq, i) => <Accordion key={i} question={`Q${i + 1}: ${faq.question}`} answer={faq.answer} />)}
      </div>
    </>
  )
}