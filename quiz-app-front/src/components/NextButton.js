export default function NextButton({ dispatch, answer, index, numQuestion }) {
  if (answer === null) return null;

  if (index < numQuestion - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        next
      </button>
    );
  }

  if (index === numQuestion - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        finish
      </button>
    );
  }
}
