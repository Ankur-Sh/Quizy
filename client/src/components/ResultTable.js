import React, { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";

export default function ResultTable() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getServerData(
            `${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`,
            (res) => {
                setData(res);
            }
        );
    });

    return (
        <div>
            <div className="title_leaderboard">
                {" "}
                <center>LeaderBoard Positioning</center>{" "}
            </div>
            <table>
                <thead className="table_header">
                    <tr className="table_row">
                        <td>Name</td>
                        <td>Attemps</td>
                        <td>Earn Points</td>
                        <td>Result</td>
                    </tr>
                </thead>
                <tbody>
                    {!data ?? <div>No Data Found </div>}
                    {data.map((v, i) => (
                        <tr className="table_body" key={i}>
                            <td>{v?.username || ""}</td>
                            <td>{v?.attempts || 0}</td>
                            <td>{v?.points || 0}</td>
                            <td>{v?.achived || ""}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
