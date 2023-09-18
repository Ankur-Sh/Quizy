import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getServerData } from "../helper/helper";
/**import redux actions */
import * as Action from "../redux/question_reducer";

/**fetch question hook to fetch api data and set value to store */
export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({
        isLoading: false,
        apiData: [],
        serverError: null,
    });
    const [languageQueryParam, setLanguageQueryParam] = useState("js"); // Initialize with a default value

    useEffect(() => {
        setGetData((prev) => ({ ...prev, isLoading: true }));
        console.log(`language is ${languageQueryParam}`);
        /**async function to fetch backend data */
        (async () => {
            try {
                const [{ questions, answers }] = await getServerData(
                    `${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions?language=${languageQueryParam}`,
                    (data) => data
                );
                console.log({ questions, answers });

                if (questions.length > 0) {
                    setGetData((prev) => ({ ...prev, isLoading: false }));
                    setGetData((prev) => ({
                        ...prev,
                        apiData: questions,
                    }));

                    /**dispatch an action */
                    dispatch(
                        Action.startExamAction({
                            question: questions,
                            answers,
                        })
                    );
                } else {
                    throw new Error("No Question Available");
                }
            } catch (error) {
                setGetData((prev) => ({ ...prev, isLoading: false }));
                setGetData((prev) => ({ ...prev, serverError: error }));
            }
        })();

        /**use dispatch to stop from continuously loading of useeffect */
    }, [dispatch, languageQueryParam]);

    // Function to handle changing the languageQueryParam
    const changeLanguage = (newLanguage) => {
        setLanguageQueryParam(newLanguage);
        console.log(` language changed to ${newLanguage}`);
    };

    return { getData, setGetData, changeLanguage };
};

/**Move action dispatch function */
export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction()); /**increase trace value by 1 */
    } catch (error) {
        console.log(error);
    }
};

/**Previous Action Dispatch Function */
export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction()); /**decrease trace value by 1 */
    } catch (error) {
        console.log(error);
    }
};
