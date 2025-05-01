export default function Button({ imageUrl, buttonTitle, clickHandler }) {
  return (
    <button title={buttonTitle} onClick={clickHandler}>
      <img src={imageUrl} alt={buttonTitle} />
    </button>
  );
}
