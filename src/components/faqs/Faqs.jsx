import React from "react";
import styles from "./Faqs.module.scss";

const qAndAs = [
  {
    id: 1,
    question:
      "Do I want to be a Software Developer, or an IT Business Analyst?",
    answer:
      "I love software development, and I like Business Analysis. I reguarly complete courses and projects in software development because I enjoy it, so I would love to continue doing that as a career, but I also like money, and my work is worth more as an analyst. That's not to say I don't enjoy analyst work. I'm analytical be nature and absolutely love the communication that comes with being an Analyst. Being a translater between Developers and Business is an interesting place to be. \nThats why I am applying for, and happy to be in, both roles.",
  },
  {
    id: 2,
    question: "Why is my background so varied?",
    answer:
      "I've spent a long time finding the right career. I started in environmental science, which I loved, but didn't love me back and I ended up unemployed after uni. I had a few odd jobs and an accounting degree between that and becoming an IT Business Analyst with Services Australia. \n My partner had some visa issues and so we left Australia and I therefore left the BA job. Overseas I then had visa issues and only ended up working a quick three month job as an IT Analyst. \n\n When I came back to Australia I took on a non-IT BA role. It gave me some good BA skills, like process mapping, but it made it harder to jump back into IT and as it involved large (upto 5 hour) sessions of training customers how to use a software, I burnt out. I saw an opportunity to retrain as a developer, and as I was already coding as a hobby, I jumped on it. For 18 months I worked for Lendi as a developer and loved it. I was on a contract though and so my work with them finished at the 18 month mark. I had good reviews, but my timing was bad and they also laid off several permanenet members of my team.",
  },
  {
    id: 3,
    question: "What is my salary expectation?",
    answer:
      "This is a hard one to determine in a FAQ section as it depends on the role, location, ability to remote work and what I'll be able to learn from the role. In general, as a developer I'd be expecting $85,000 (fully remote, +super) to $100,000 (fully in office, +super), and as a BA $650/day to $800/day. These aren't concrete though so chat with me about the role if that doesn't quite suit.",
  },
  {
    id: 4,
    question: "Where am I based?",
    answer:
      "I'm between Perth and Sydney at the moment, but have lived in a few places around Australia and am happy anywhere as long as the company culture is good. My only restriciton is that my partner is on a partner visa, so I need to be based in Australia",
  },
];

const Faqs = () => {
  return (
    <div className={styles.faqs}>
      <h1 className={styles.faqs__title}>FAQs</h1>
      <p className={styles.faqs__intro}>
        Hi Recruiters. I've gotten some questions repeatedly throughout my job
        search, and I get it - my background is different than most people. So
        here are some answers
      </p>
      {qAndAs.map((qAndA) => (
        <div key={qAndA.id} className={styles.faqs__container}>
          <h4 className={styles.faqs__question}>{qAndA.question}</h4>
          <p className={styles.faqs__answer}>{qAndA.answer}</p>
        </div>
      ))}
      {/* FAQ title */}
      {/* FAQ answer */}
    </div>
  );
};

export default Faqs;
