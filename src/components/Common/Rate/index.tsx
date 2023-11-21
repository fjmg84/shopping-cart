import React, { useEffect, useState } from "react";

function Rate({ count = 5 }) {
  const [stars, setStars] = useState<string[]>([]);

  useEffect(() => {
    let tempRates: string[] = [];
    for (let i = 1; i <= 5; i++) {
      tempRates = [
        ...tempRates,
        `fa fa-star ${i <= count ? "text-amber-300" : "text-slate-950"}`,
      ];
    }
    setStars(tempRates);
  }, [count]);

  return (
    <div>
      {stars.map((star, index) => (
        <i key={index} className={star}></i>
      ))}
    </div>
  );
}

export default Rate;
