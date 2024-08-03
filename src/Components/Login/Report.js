import React, { useEffect, useState } from "react";
import "./Report.css";
import HashLoader from "react-spinners/HashLoader";
import axios from "axios";
import URL from "../../api";

function Report({ url, setOpenReport }) {
  console.log("URL:", url);
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReport() {
      try {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        console.log("url:", URL.reportURL, "url2:", url);
        const response = await axios.post(URL.reportURL, { url });
        console.log(response.data);

        if (response.status === 200) {
          setReport(response.data?.report);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
    fetchReport();
  }, [url]);
  return (
    <div className="reportBackground">
      <div className="reportContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenReport(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          {loading ? (
            <HashLoader className="hash" color="#8236d8" speedMultiplier={1} />
          ) : (
            <h1>
              {" "}
              {report ? "something went wrong" : "This website is reported"}
            </h1>
          )}
        </div>

        <div className="footer">
          <button
            onClick={() => {
              setOpenReport(false);
            }}
            id="cancel"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Report;
