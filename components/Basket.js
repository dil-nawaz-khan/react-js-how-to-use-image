export default function AppleBasket({ appleCount, basketName }) {
  return (
    <div className="basket">
      <h2>
        <span>{appleCount} </span>
        apples
      </h2>
      <p>
        {basketName} {appleCount === 10 && "(full)"}
      </p>
    </div>
  );
}
