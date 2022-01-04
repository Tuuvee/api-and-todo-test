import './App.css';
import TodoList from './Components/TodoList.js';
function App() {
  return (
    <div className="App">
		<div className="WeatherContainer">
		<p>yeah</p> {/*Weather display goes here when i get to it*/}
		</div>
		
		<div className="ContentContainer">
		<p>yeah</p>{/*Other API Content goes here*/}
		</div>
		
		<div className="TodoContainer">
		<TodoList />
		</div>
    </div>
  );
}

export default App;
