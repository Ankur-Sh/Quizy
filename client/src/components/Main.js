import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../styles/Main.css";
import { setUserId } from "../redux/result_reducer";
import { useFetchQuestion } from "../hooks/FetchQuestion";

function Main() {
    const { changeLanguage } = useFetchQuestion();
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const [lang, setLang] = useState("");

    function handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        startQuiz();
    }

    function startQuiz() {
        if (inputRef.current?.value) {
            dispatch(setUserId(inputRef.current?.value));
        }
    }
    return (
        <div className="container_main">
            <div className="main_box">
                <h1 className="title_main text-light">Quiz Application</h1>
                <ol>
                    <li className="steps_text">
                        You will be asked 10 questions one after another.
                    </li>
                    <li className="steps_text">
                        5 points is awarded for correct answer.
                    </li>
                    <li className="steps_text">
                        Each Question has 4 options. You can choose only one
                        option at a time.
                    </li>
                    <li className="steps_text">
                        You can review and change answers before the quiz
                        finish.
                    </li>
                    <li className="steps_text">
                        The result will be declared at the end of the quiz.
                    </li>
                </ol>
                <form className="form_main" id="form" onSubmit={handleSubmit}>
                    <input
                        ref={inputRef}
                        className="userid_main"
                        type="text"
                        placeholder="Username*"
                    />
                </form>
                <div className="start_main">
                    <Link
                        className="btn_main"
                        to={"quiz"}
                        onClick={() => {
                            changeLanguage("py");
                            startQuiz();
                        }}
                    >
                        Start Py Quiz
                    </Link>
                    <Link
                        className="btn_main"
                        to={"quiz"}
                        onClick={() => {
                            changeLanguage("js");
                            startQuiz();
                            console.log("js is working");
                        }}
                    >
                        Start Js Quiz
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Main;
