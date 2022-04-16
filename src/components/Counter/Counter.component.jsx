import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../store/counter/counter.action";
import { selectCount } from "../../store/counter/counter.selector";


const Counter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button 
                    aria-label="Increment value"
                    onClick={() => dispatch(increment(count))}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button 
                    aria-label="decrement value"
                    onClick={() => dispatch(decrement(count))}
                >
                    decrement
                </button>
            </div>
        </div>
    )
}

export default Counter;