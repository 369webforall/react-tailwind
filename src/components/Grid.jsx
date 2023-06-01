import React from 'react';

const Grid = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-6 gap-4 ">
      <div className="bg-blue-500 p-4 col-span-12">Item 1</div>
      <div className="bg-green-500 p-4 col-start-1 col-end-4 row-span-6">Item 2</div>
      <div className="bg-red-500 p-4 col-start-4 col-end-13 row-start-2 row-end-4">Item 3</div>
      <div className="bg-yellow-500 p-4">Item 4</div>
      <div className="bg-purple-500 p-4">Item 5</div>
      <div className="bg-pink-500 p-4">Item 6</div>
    </div>
  );
};

export default Grid;
