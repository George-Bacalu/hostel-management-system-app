import React from "react";
import "./SelectNrEntries.css";

function SelectNrEntries() {
  return (
    <div className="entries-row">
      <label htmlFor="entries-selection">Show:</label>
      <select className="selection-layout" id="entries-selection" name="entries-selection">
        <option value="1">1</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
      <label for="entries-selection">entries</label>
    </div>
  );
}

export default SelectNrEntries;
