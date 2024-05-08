import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav></Nav>
      <div className="flex justify-center mt-5">
        <div className=" card w-96 bg-base-100 shadow-xl ">
          <figure><img src="https://img.wongnai.com/p/1968x0/2024/04/01/5b84b056f2a847d6b0dc5a03b0da86c3.jpg" alt="Shoes" /></figure>
          <div className="card-body ">
            <h2 className="card-title">ที่1 ระบบหวยออนไลน์!</h2>
            <p>เว็บคาซิโนออนไลน์อันดับ 1 แทงหวย แทงบอล บาคาร่า</p>
          <div className="card-actions justify-end">
          <button className="btn btn-primary">สมัคร ที่นี่</button>
    </div>
  </div>
</div>
      </div>
      
    </>
  );
}

export default App;
