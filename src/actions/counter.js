const incrementCounter = (value) => {
  return {
    type: "INCREMENT",
    payload: value,
  };
};

const decrementCounter = (value) => {
  return {
    type: "DECREMENT",
    payload: value,
  };
};

export { incrementCounter, decrementCounter };
