export default function FinishScreen({
  points,
  maxPssiblePoint,
  highscore,
  dispatch,
}) {
  const percentage = (points / maxPssiblePoint) * 100;
  let emoji;

  if (percentage === 100) emoji = "💰";
  if (percentage < 100 && percentage >= 80) emoji = "😄";
  if (percentage < 80 && percentage >= 50) emoji = "🤔";
  if (percentage < 50) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        <span>{emoji}</span>You Scored <strong>{points}</strong> out of{" "}
        {maxPssiblePoint}({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}
