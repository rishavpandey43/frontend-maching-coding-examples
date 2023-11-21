import QuestionAccordion from "./QuestionAccordion";

const faqData = [
  {
    id: 1,
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    id: 2,
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    id: 3,
    question: "How long do cats live?",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
];

function App() {
  return (
    <>
      {faqData.map((faq) => (
        <QuestionAccordion key={faq.id} {...faq} />
      ))}
    </>
  );
}

export default App;
