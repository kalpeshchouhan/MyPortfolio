import React, { memo, useEffect } from "react";

import "./TextShpere.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = () => {
  // Animation settings for Text Cloud

  useEffect(() => {
    // return () => {
    const container = ".tagcloud";
    const texts = [
      "Java",
      "React JS",
      "JavaScript",
      "CSS",
      "Html",
      "Bootstrap",
      "Node JS",
      "Mongo DB",
      "Sql",
      "Git Hub",
      "WordPress",
      "ES5/ES6",
    ];
    const options = {
      radius: getRadius(),
      maxSpeed: "fast",
      initSpeed: "fast",
      keep: true,
    };
    function getRadius() {
      const width = window.innerWidth;

      if (width > 320 && width <= 375) {
        return 170;
      }
      if (width <= 320) {
        return 160;
      }
      if (width < 768) {
        return 200;
      } else {
        return 300;
      }
    }

    TagCloud(container, texts, options);
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default memo(TextShpere);
