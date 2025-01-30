import { increment, toggleAutoIncrement } from "./counterSlice";

export const startAutoIncrement = () => (dispatch, getState) => {
  dispatch(toggleAutoIncrement());

  if (!getState().counter.isAutoIncrement) return;

  const intervalId = setInterval(() => {
    if (!getState().counter.isAutoIncrement) {
      clearInterval(intervalId);
    } else if (getState().counter.count < 98) {
      dispatch(increment());
    }
  }, 1100);
};
