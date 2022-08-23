import React from "react";
import { Layer, Stage, Circle } from "./es/ReactKonvaCore";
import "./konva/lib/shapes/Circle";
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
