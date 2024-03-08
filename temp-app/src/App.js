import "./App.css"
import Template from "./contains/Template";
import data from "./contains/data";
function App() {

  return (
    <div className="flex items-center justify-center h-screen bg-gray-500">
      <Template data = {data}/>
    </div>
  );
}

export default App;
