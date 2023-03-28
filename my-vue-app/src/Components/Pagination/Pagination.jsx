import React from "react";
import Card from "../Card/Card";
//import "./styles/Card.css";

const Pagination = () => {
  return (
    <div className="h-25 grid content-center">
      <Card
        title="Example Title"
        description="This is an example card description."
        imageUrl="https://picsum.photos/600/400"
      />
    </div>
  );
};

export default Pagination;
