import { useMemo, useEffect, useState } from "react";
import "./App.css";
import Kbc from "./components/Kbc";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [userName, setUserName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [Stop, setStop] = useState(false);
  const [earned, setEarned] = useState("0");

  const data = [
    {
      id: 1,
      question: "In Which State has the Largest Area?",
      answers: [
        {
          text: "Maharashtra",
          correct: false,
        },
        {
          text: "Madhya Pradesh",
          correct: false,
        },
        {
          text: "Uttar Pradesh",
          correct: false,
        },
        {
          text: "Rajasthan",
          correct: true,
        },
      ],
    },
    {
      id: 2,
      question: "Who won the IPL 2021 tournament?",
      answers: [
        {
          text: "Mumbai Indians",
          correct: false,
        },
        {
          text: "Kolkata Knight Riders",
          correct: false,
        },
        {
          text: "Delhi Capital",
          correct: false,
        },
        {
          text: "Chennei Super Kings",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "Who is the Prime Minister of India?",
      answers: [
        {
          text: "Narendra Modi",
          correct: true,
        },
        {
          text: "Rajnath Singh",
          correct: false,
        },
        {
          text: "Sardar Patel",
          correct: false,
        },
        {
          text: "Rahul Gandhi",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "The first case of Novel CoronaVirus was identified in.....?",
      answers: [
        {
          text: "Beijing",
          correct: false,
        },
        {
          text: "Shanghai",
          correct: false,
        },
        {
          text: "Wuhan,Hubai",
          correct: true,
        },
        {
          text: "Tianjin",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which Cricketer scored four hundreds in the 2016 IPL?",
      answers: [
        {
          text: "Rohit Sharma",
          correct: false,
        },
        {
          text: "Suresh Raina",
          correct: false,
        },
        {
          text: "Chris Gayle",
          correct: false,
        },
        {
          text: "Virat Kohli",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "Which is the largest joint in the human body?",
      answers: [
        {
          text: "Elbow",
          correct: false,
        },
        {
          text: "Knee",
          correct: true,
        },
        {
          text: "Hip",
          correct: false,
        },
        {
          text: "Shoulder",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question:
        "In Which song this film feature? (Song: Ye Mausam ki barish , ye barish ka pani...)",
      answers: [
        {
          text: "Half Girlfriend",
          correct: true,
        },
        {
          text: "Baaghi",
          correct: false,
        },
        {
          text: "Shershaah",
          correct: false,
        },
        {
          text: "Ok Jaanu",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which of these is not a country?",
      answers: [
        {
          text: "North Macedonia",
          correct: false,
        },
        {
          text: "East Timor",
          correct: false,
        },
        {
          text: "West Indies",
          correct: true,
        },
        {
          text: "South Sudan",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question:
        "Which of the following is the oldest test cricket playing country in the world?",
      answers: [
        {
          text: "Austalia",
          correct: true,
        },
        {
          text: "India",
          correct: false,
        },
        {
          text: "England",
          correct: false,
        },
        {
          text: "South Africa",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which day is celebrated as World Health Day?",
      answers: [
        {
          text: "10 April",
          correct: false,
        },
        {
          text: "9 April",
          correct: false,
        },
        {
          text: "6 April",
          correct: false,
        },
        {
          text: "7 April",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question:
        "In which year , Capital of India was shifted to Delhi from Kolkata?",
      answers: [
        {
          text: "1910",
          correct: false,
        },
        {
          text: "1911",
          correct: true,
        },
        {
          text: "1915",
          correct: false,
        },
        {
          text: "1917",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Indian played their First ODI Match against______?",
      answers: [
        {
          text: "Pakistan",
          correct: false,
        },
        {
          text: "South Africa",
          correct: false,
        },
        {
          text: "England",
          correct: true,
        },
        {
          text: "Australia",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question:
        "What is main reason for the average temperature of the Earth remains fairly steady as compared to that of the moon?",
      answers: [
        {
          text: "Hydrosphere",
          correct: false,
        },
        {
          text: "Biosphere",
          correct: false,
        },
        {
          text: "Lithosphere",
          correct: false,
        },
        {
          text: "Atmosphere",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question:
        "Which neighbouring country of India has adopted India's BHIM UPI?",
      answers: [
        {
          text: "Nepal",
          correct: false,
        },
        {
          text: "Bhutan",
          correct: true,
        },
        {
          text: "Bangladesh",
          correct: false,
        },
        {
          text: "Srilanka",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "When was first Bharat Ratna Award given?",
      answers: [
        {
          text: "January 1954",
          correct: true,
        },
        {
          text: "Dec 1952",
          correct: false,
        },
        {
          text: "July 1956",
          correct: false,
        },
        {
          text: "January 1951",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "1,000" },
        { id: 2, amount: "2,000" },
        { id: 3, amount: "3,000" },
        { id: 4, amount: "5,000" },
        { id: 5, amount: "10,000" },
        { id: 6, amount: "20,000" },
        { id: 7, amount: "40,000" },
        { id: 8, amount: "80,000" },
        { id: 9, amount: "1,60,000" },
        { id: 10, amount: "3,20,000" },
        { id: 11, amount: "6,40,000" },
        { id: 12, amount: "12,50,000" },
        { id: 13, amount: "25,00,000" },
        { id: 14, amount: "50,00,000" },
        { id: 15, amount: "1 Crore" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);
  return (
    <div className="app">
      {userName ? (
        <>
          <div className="main">
            {Stop ? (
              <h1 className="endText">You Earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Kbc
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setEarned={setEarned}
                    moneyPyramid={moneyPyramid}
                  />
                </div>
              </>
            )}
            ;
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUserName={setUserName} />
      )}
    </div>
  );
}

export default App;
