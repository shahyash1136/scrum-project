import React, { useState } from "react";
import Card from "../components/Card/Index";

const Home = () => {
  const [taskType, setTaskType] = useState([
    { id: 1, name: "to do" },
    { id: 2, name: "in progress" },
    { id: 3, name: "code review" },
    { id: 4, name: "done" },
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
