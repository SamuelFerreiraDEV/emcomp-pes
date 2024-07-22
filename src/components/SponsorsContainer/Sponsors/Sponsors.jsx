import React from "react";
import sponsor1 from "@/assets/sponsor1.svg";
import sponsor2 from "@/assets/sponsor2.svg";
import sponsor3 from "@/assets/sponsor3.svg";
import sponsor4 from "@/assets/sponsor4.svg";
import sponsor5 from "@/assets/sponsor5.svg";

const sponsors = [
  {
    logo: sponsor1,
  },
  {
    logo: sponsor2,
  },
  {
    logo: sponsor3,
  },
  {
    logo: sponsor4,
  },
  {
    logo: sponsor5,
  },
];

export function Sponsors() {
  return (
    <div className="flex justify-center gap-[4vw]">
      {sponsors.map(({ logo }) => {
        return <img className="w-[10vw]" src={logo} key={logo} />;
      })}
    </div>
  );
}
