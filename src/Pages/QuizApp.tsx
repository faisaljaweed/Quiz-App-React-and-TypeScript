// import React, { useState } from "react";
import { useState } from "react";
export default function Quizapp() {
  var questions = [
    {
      question: "HTML Stands For _________",
      options: [
        "Anchor Text Language",
        "HTML",
        "Case Cading Style Sheet",
        "HyperText markup language",
      ],
      correctAns: "HyperText markup language",
    },
    {
      question: "CSS Stands For _________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language",
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "JS Stands For _________",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "Java Script",
    },
    {
      question: "DOM Stands For _________",
      options: ["Document Object Model", "html", "Css", "Java"],
      correctAns: "Document Object Model",
    },
    {
      question: "RAM Stands For _________",
      options: ["Read Only Memory", "Dom", "Random Access Memory", "For Pc"],
      correctAns: "Random Access Memory",
    },
    {
      question: "ROM Stands For _________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory",
      ],
      correctAns: "Read Only Memory",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const handleScore = (correctanswer:any) => {
    if(correctanswer==questions[currentIndex].correctAns){
        setScore(score+1);
    }
    if(currentIndex+1<questions.length){
    setCurrentIndex(currentIndex+1);
    }
    else{
        setQuizCompleted(true)
    }
  };
  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="flex flex-col items-center bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h1 className="text-[50px] font-bold text-blue-900 text-center">
          QUIZ APPLICATION
        </h1>
        {quizCompleted ?(
        <div className="mt-4">
            <p className="text-[18px] font-bold">Your Score is {score}</p>
        </div>) 
        :<div className="">
          <p className="item-start flex text-[20px]">
            Questions {currentIndex + 1}/{questions.length}
          </p>
          <div>
          <h2 className="item-start flex pt-4 text-[24px]">
            {questions[currentIndex].question}
          </h2>
          <hr className="my-4 w-full border border-t-2 border-black"/>
        </div>
        <div className="flex flex-col mt-4">
          {questions[currentIndex].options.map((item, index) => {
            return (
              <div key={index} className="mt-3">
                <button
                  className="bg-blue-800 text-white hover:bg-red-600"
                  onClick={() => {
                    handleScore(item)
                  }}
                >
                  {item}
                </button>
              </div>
            );
          })}
        </div>
      </div>}
      </div>
      {/* <div>
        <p>{score}</p>
      </div> */}
    </div>
  );
}
