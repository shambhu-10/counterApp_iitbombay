import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { increment, decrement, toggleAutoIncrement } from "./store/counterSlice"
import "./counter.css"

export default function CounterView() {
  const { count, isAutoIncrementing } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  useEffect(() => {
    let intervalId = null

    if (isAutoIncrementing) {
      intervalId = setInterval(() => {
        dispatch(increment())
      }, 1000)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [isAutoIncrementing, dispatch])

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1 className="counter-value">{count}</h1>
        <div className="button-group">
          <button
            onClick={() => dispatch(decrement())}
            className="button button-decrement"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="button button-increment"
          >
            Increment
          </button>
        </div>
        <button
          onClick={() => dispatch(toggleAutoIncrement())}
          className={`button button-auto ${isAutoIncrementing ? "active" : ""}`}
        >
          {isAutoIncrementing ? "Stop Auto Increment" : "Start Auto Increment"}
        </button>
      </div>
    </div>
  )
}