import React from "react";

function nameList() {
  const names = ["John", "Mark", "Jane", "Mary"];
  const nameList = names.map((name) => <h2>{name}</h2>);
  return (
    <div className="container text-center">
      <h1>Name List</h1>
      {nameList}
    </div>
  );
}

export default nameList;
