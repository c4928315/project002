import React from "react";
import "./recentOpenings.css";
import OpeningsCard from "../openingsCard/openingsCard";

function RecentOpenings({data}) {
 

  return (
    <div className="openingsTabs">
      <div className="openingsTabsInner">
        {data.map((item, i) => {
          return <OpeningsCard data={item} key={i} className="openingsTabsMainCard"/>;
        })}
      </div>
    </div>
  );
}

export default RecentOpenings;
