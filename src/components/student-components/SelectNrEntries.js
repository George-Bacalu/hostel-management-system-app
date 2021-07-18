import React from "react";
import "./SelectNrEntries.css";

function SelectNrEntries() {
  return (
    <div className="entries-row">
      <label htmlFor="entriesSelection">Show:</label>
      <select className="selection-layout" id="entriesSelection" name="entriesSelection">
        <option value="1">1</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
      <label htmlFor="entries-selection">entries</label>
    </div>
  );
}

export default SelectNrEntries;
