import React from "react";

function Test() {
  return (
    <>
      {/* Outer Main Container */}
      <div className="container mx-auto p-4">
        {/* 🎯 Row 1: Positioned side-by-side using Flexbox */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="font-semibold">row 1 COL1</div>
          <div className="text-slate-500">row 1 COL2</div>
          <div className="text-slate-500">row 1 COL3</div>
        </div>

        {/* 🎯 Row 2: Separated by a top border line and centered */}
        <div className="text-center border-t border-slate-200 dark:border-slate-800 pt-4 text-sm">
          2nd row RIGHTS RESERcontainer
        </div>
      </div>
    </>
  );
}

export default Test;
