import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Questions from "./Questions";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
/**redux store import */
import { useSelector, useDispatch } from "react-redux";
import { PushAnswer } from "../hooks/setResult";

function Quiz() {
    const [check, setChecked] = useState(undefined);

    /**console questions */
    const state = useSelector((state) => state);
    const result = useSelector((state) => state.result.result);
    const { queue, trace } = useSelector((state) => state.questions);
    const dispatch = useDispatch();

    /*Prev Button Event Handler*/
    function onPrev() {
        if (trace > 0) {
            /**update the trace value by one using move prev action */
            dispatch(MovePrevQuestion());
        }
    }
    /*Next Button Event Handler*/
    function onNext() {
        if (trace < queue.length) {
            /**update the trace value by one using move next action */
            dispatch(MoveNextQuestion());

            /**insert the new result in the array */
            if (result.length <= trace) {
                dispatch(PushAnswer(check));
            }
        }

        /**reset the value of the checked variable */
        setChecked(undefined);
    }

    function onChecked(check) {
        setChecked(check);
    }

    /**Finished exam after the last question */
    if (result.length && result.length >= queue.length) {
        return <Navigate to={"/result"} replace="true" />;
    }
    return (
        <div className="container">
            <h1 className="title text-light">Quiz Application</h1>
            {/* Display Questions */}
            <Questions onChecked={onChecked} />
            <div className="grid">
                {trace > 0 ? (
                    <button className="btn prev" onClick={onPrev}>
                        {" "}
                        Prev{" "}
                    </button>
                ) : (
                    <div></div>
                )}
                <button className="btn next" onClick={onNext}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Quiz;
