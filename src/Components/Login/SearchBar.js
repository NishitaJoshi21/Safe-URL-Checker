import React, { useState } from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";
import Modal from "./Modal";
import Report from "./Report";

const SearchBar = (setOpenModal, setOpenReport) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [url, setURL] = useState("");

  function handleChange(e) {
    const text = e.target.value;
    setURL(text);
  }

  return (
    <div className="input-container">
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          placeholder="Enter URL"
          value={url}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="button-container">
        <button
          id="check"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Check
        </button>
        {modalOpen && (
          <Modal
            url={url}
            setOpenModal={setModalOpen}
            setOpenReport={setReportOpen}
          />
        )}

        <button
          onClick={() => {
            setReportOpen(true);
          }}
          id="report"
        >
          Report
        </button>
        {reportOpen && <Report url={url} setOpenReport={setReportOpen} />}
      </div>
    </div>
  );
};
export default SearchBar;
