import React, { useState } from "react";
import Card from "../components/Card/Index";

const Home = () => {
  const [taskType, setTaskType] = useState([
    { id: 1, name: "To Do" },
    { id: 2, name: "In Progress" },
    { id: 3, name: "Code Review" },
    { id: 4, name: "Done" },
  ]);
  return (
    <div className='cards__container'>
      {taskType.map((type) => {
        return <Card key={type.id} heading={type.name} />;
      })}
    </div>
  );
};

export default Home;
