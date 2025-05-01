export default function Basket({ appleCount, basketName }) {
  return (
    <div className="basket">
      <h2>
        <span>{appleCount} </span>
        apples
      </h2>
      <p>{basketName}</p>
    </div>
  );
}
