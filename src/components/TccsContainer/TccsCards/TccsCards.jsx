import React from "react";
import { TccsCard } from "./TccsCard/TccsCard";

export function TccsCards() {
  return (
    <div className="mx-24 grid grid-cols-2 gap-x-20 gap-y-8">
      <TccsCard />
      <TccsCard />
      <TccsCard />
      <TccsCard />
    </div>
  );
}
