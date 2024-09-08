import React, { useState } from "react";
import Header from "./header";
import HelpInput from "./HelpInput";
import InfoPlate from "./InfoPlate";
import { infoData } from "./InfoData";

function App() {
  return (
    <div>
      <Header />
      <HelpInput />
      <div className="info-main">
        {infoData.map((info, index) => {
          return (
            <InfoPlate
              key={index}
              image={info.image}
              title={info.title}
              content={info.content}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
