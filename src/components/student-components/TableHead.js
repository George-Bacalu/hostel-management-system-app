import React from "react";

function TableHead(props) {
  return (
    <thead>
      <tr>
        <th>{props.id}</th>
        <th>{props.name}</th>
        <th>{props.email}</th>
        <th>{props.payment}</th>
        <th>{props.room}</th>
      </tr>
    </thead>
  );
}

export default TableHead;
