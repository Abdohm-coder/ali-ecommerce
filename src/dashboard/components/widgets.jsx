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
    <div className="flex-1 h-20 border-dark border-1">
      <h3 className="text-dark">first widget</h3>
    </div>
  );
}

export default Widgets;
