import { useState } from "react";

const OPTIONS = [
  { name: "javascript", votes: 0 },
  { name: "Python", votes: 0 },
  { name: "kotlin", votes: 0 },
  { name: "Java", votes: 0 },
];

const Vote = ({ option, clickHandler, index }) => {
  console.log({ index });
  return (
    <div key={index}>
      <button onClick={() => clickHandler(index)}>
        Vote {option.name} {option.votes}
      </button>
    </div>
  );
};

const Test = () => {
  const [language, setLanguage] = useState(OPTIONS);

  const clickHandler = (index) => {
    console.log(index);
    const currentOptions = [...OPTIONS];
    currentOptions[index].votes++;
    setLanguage(currentOptions);
  };

  return (
    <div className="container">
      Please Vote:
      {language.map((option, index) => {
        return (
          <Vote option={option} clickHandler={clickHandler} index={index} />
        );
      })}
    </div>
  );
};

export default Test;
