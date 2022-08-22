import React from "react";

import { Stage, Layer, Circle } from "react-konva";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Stage width={300} height={400} draggable>
          <Layer>
            <Circle fill="blue" x={100} y={150} width={200} height={200} />
          </Layer>
        </Stage>
      </header>
    </div>
  );
}

export default App;
