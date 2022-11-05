import React from "react";

function Widgets() {
  return (
    <section className="flex gap-4 w-full">
      <Widget />
      <Widget />
    </section>
  );
}

function Widget() {
  return (
    <div className="flex-1 h-20">
      <h2 className="text-red-900">first widget</h2>
    </div>
  );
}

export default Widgets;
