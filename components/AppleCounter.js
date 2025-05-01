// // import { createRoot } from "react-dom/client";

// import leftArrow from "url:../assets/images/left-arrow.png";
// import rightArrow from "url:../assets/images/right-arrow.png";

// import Button from "./Button";
// import Basket from "./Basket";

// import "./AppleCounter.css";

// // const root = createRoot(document.getElementById("root"));

// const totalAppleCount = 10;
// let rightAppleCount = 0;
// let leftAppleCount = totalAppleCount - rightAppleCount;

// export default function AppleCounter({ root }) {
//   const handleLeftArrow = () => {
//     if (rightAppleCount > 0) {
//       rightAppleCount--;
//       leftAppleCount++;
//       root.render(<AppleCounter root={root} />);
//     }
//   };

//   const handleRightArrow = () => {
//     if (leftAppleCount > 0) {
//       leftAppleCount--;
//       rightAppleCount++;
//       root.render(<AppleCounter root={root} />);
//     }
//   };

//   return (
//     <>
//       <section>
//         <Basket appleCount={leftAppleCount} basketName="Basket 1" />
//         <Button
//           imageUrl={leftArrow}
//           buttonTitle="Left Arrow"
//           clickHandler={handleLeftArrow}
//         />
//         <Button
//           imageUrl={rightArrow}
//           buttonTitle="Right Arrow"
//           clickHandler={handleRightArrow}
//         />
//         <Basket appleCount={rightAppleCount} basketName="Basket 2" />
//       </section>
//       <p
//         style={{
//           textAlign: "center",
//           marginTop: "32px",
//         }}
//       >
//         <button
//           onClick={() => {
//             root.render(<AppleCounter root={root} />);
//           }}
//         >
//           Re - Render
//         </button>
//       </p>
//     </>
//   );
// }

// using state hook

import leftArrow from "url:../assets/images/left-arrow.png";
import rightArrow from "url:../assets/images/right-arrow.png";

import Button from "./Button";
import Basket from "./Basket";

import "./AppleCounter.css";
import { useState } from "react";

const totalAppleCount = 10;

export default function AppleCounter() {
  const [rightAppleCount, setRightAppleCount] = useState(0);
  const [leftAppleCount, setLeftAppleCount] = useState(
    totalAppleCount - rightAppleCount
  );
  const handleLeftArrow = () => {
    if (rightAppleCount > 0) {
      setRightAppleCount(rightAppleCount - 1);
      setLeftAppleCount(leftAppleCount + 1);
    }
  };

  const handleRightArrow = () => {
    if (leftAppleCount > 0) {
      setRightAppleCount(rightAppleCount + 1);
      setLeftAppleCount(leftAppleCount - 1);
    }
  };

  return (
    <section>
      <Basket appleCount={leftAppleCount} basketName="Basket 1" />
      <Button
        imageUrl={leftArrow}
        buttonTitle="Left Arrow"
        clickHandler={handleLeftArrow}
      />
      <Button
        imageUrl={rightArrow}
        buttonTitle="Right Arrow"
        clickHandler={handleRightArrow}
      />
      <Basket appleCount={rightAppleCount} basketName="Basket 2" />
    </section>
  );
}
