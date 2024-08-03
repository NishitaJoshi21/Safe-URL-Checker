import React, { useState, useEffect } from "react";
import Report from "./Report";
import "./Modal.css";
import HashLoader from "react-spinners/HashLoader";
import axios from "axios";
import URL from "../../api";

function Modal({ url, setOpenModal, setOpenReport }) {
  console.log("URL:", url);
  const [safe, setSafe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reportOpen, setReportOpen] = useState(false);

  useEffect(() => {
    async function fetchSafe() {
      try {
        setLoading(true);
        console.log("url:", URL.checkURL, "url2:", url);
        const response = await axios.post(URL.checkURL, { url });
        console.log(response.data);
        if (response.status === 200) {
          setSafe(response.data?.safe);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
    fetchSafe();
  }, [url]);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
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
              This URL is{" "}
              {safe == null ? " not in the Database" : safe ? "safe" : "unsafe"}
            </h1>
          )}
        </div>

        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setOpenReport(true);
              setOpenModal(false);
            }}
            id="reportBtn"
          >
            Report
          </button>
          {reportOpen && <Report url={url} setOpenReport={setReportOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Modal;
