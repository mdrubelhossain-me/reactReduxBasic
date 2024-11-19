import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/state/counter/counterSlice";

const Counter = () => {

const count = useSelector((state)=>state.counter.value);

const dispatch = useDispatch();



  return (
    <div className="card">
      <div className="card-header border-bottom">
        <h4>My Counter</h4>
      </div>
      <div className="card-body mt-3">
        <h4>{count}</h4>
        <div className="mt-4 mb-4">
          <button onClick={()=>{dispatch(increment())}} className="btn btn-success">Increase</button>
          <button onClick={()=>{dispatch(decrement())}} className="btn btn-danger mx-2">Decrease</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
