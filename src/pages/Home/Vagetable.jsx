import React from "react";
import Background from "../../assets/images/Cms-Banner-1.jpg";
import food from "../../assets/images/Cms-Banner-2.jpg";
export default function Vagetable() {
  return (
    <>
      <div className="md:flex gap-5 p-5">
        <div
       style={{
            background: `url(${Background})`,
            height: "100vh",
            width: "100%",
            backgroundRepeat: "no-repeat",
          
          }}

        >
      
        </div>
        <div
          style={{
            background: `url(${food})`,
            height: "100vh",
            width: "100%",
            backgroundRepeat: "no-repeat",
           
          }}
        >
         djhdjdjdj
        </div>
      </div>
    </>
  );
}
