import React from "react";
import Counter from "../Component/Counter/Counter";

const CounterPage = () => {
  return (
    <div className="container">
      <div className="row mt-5 justify-content-center m-auto">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
