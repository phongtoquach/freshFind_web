import { useEffect, useState } from "react";
import "../App.css";

function Footer() {
  const [visitCount, setVisitCount] = useState(234);

useEffect(() => {
  const oldCount = Number(localStorage.getItem("visits") ?? 233);
  const newCount = oldCount + 1;

  localStorage.setItem("visits", newCount);
  setVisitCount(newCount);
}, []);

  return (
    <footer className="simple-footer">
      <div className="container footer-content">
        <p>© Copyright by FreshFind</p>
        <p>Total visits: <span>{visitCount}</span></p>
      </div>
    </footer>
  );
}

export default Footer;