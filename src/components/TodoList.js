import React from 'react';
class Wack extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			todoArray : [],
			
		};
		
	}
componentDidMount(){
		let array = JSON.parse(localStorage.getItem("todo")); //loads list from localstorage
		this.setState({todoArray:array});
}
//this function adds listings
addListing(){
	if (this.state.todoArray.length < 10){ //Checks if there is room on the list, alerts user if list is full
		
		if(document.getElementById("textInput").value!=='' && document.getElementById("textInput").value.length < 24){ //checks the length of the inputed listing to make sure its not empty or too long
		let temp;
		let array = [...this.state.todoArray]; 
		temp=[[document.getElementById("textInput").value, false]];
		array=array.concat(temp);
		localStorage.todo = JSON.stringify(array); //stores list in localstorage for future sessions
		this.setState({todoArray : array});
		document.getElementById("formID").reset();
		}
		else{	//displayed alert if listing is empty or too long
		alert("Listing cannot be empty or contain more than 23 characters");
		}
	}
	else { //displayed alert if list is full
		alert("List is full, remove a listing to add a listing.");
	}
}
//this function removes listings
removeListing(x){ 
	let array = [...this.state.todoArray];
	array.splice(x,1);//removes listing without leaving any empty space in array
	localStorage.todo = JSON.stringify(array);//stores list in localstorage for future sessions
	this.setState({todoArray:array});
	
}
//this function marks listings as completed and as a result the results will be styled with a line-through
lineTrue(x){ 
	let array =[...this.state.todoArray];
	array[x][1]=true;//marks listing as completed
	this.setState({todoArray:array});
	localStorage.todo = JSON.stringify(this.state.todoArray);//stores list in localstorage for future sessions
}
//this just disables the Enter key from executing the Submit form function, because it would reset the text field without adding the listing
submitHandler(e) {
    e.preventDefault();
}
	render(){
		return(
	<div className="todo">
  <h2>Todo list</h2>{/*this is some of the worst code i think ive ever written
	first checks if theres anything to display,   then checks if listing is marked as completed in todoArray[x][1], then displays listing from todoArray[x][0], then there are buttons for marking listing as complete and removing a listing completely.*/}
	{this.state.todoArray[0]==null ?  null : <p id="p0" style={{textDecoration:this.state.todoArray[0][1] ? "line-through":"none"}}>{this.state.todoArray[0][0]}<button onClick={this.lineTrue.bind(this, 0)}>Complete</button><button onClick={this.removeListing.bind(this, 0)}>Delete</button></p>}
	{this.state.todoArray[1]==null ?  null : <p id="p1" style={{textDecoration:this.state.todoArray[1][1] ? "line-through":"none"}}>{this.state.todoArray[1][0]}<button onClick={this.lineTrue.bind(this, 1)}>Complete</button><button onClick={this.removeListing.bind(this, 1)}>Delete</button></p>}
	{this.state.todoArray[2]==null ?  null : <p id="p2" style={{textDecoration:this.state.todoArray[2][1] ? "line-through":"none"}}>{this.state.todoArray[2][0]}<button onClick={this.lineTrue.bind(this, 2)}>Complete</button><button onClick={this.removeListing.bind(this, 2)}>Delete</button></p>}
	{this.state.todoArray[3]==null ?  null : <p id="p3" style={{textDecoration:this.state.todoArray[3][1] ? "line-through":"none"}}>{this.state.todoArray[3][0]}<button onClick={this.lineTrue.bind(this, 3)}>Complete</button><button onClick={this.removeListing.bind(this, 3)}>Delete</button></p>}
	{this.state.todoArray[4]==null ?  null : <p id="p4" style={{textDecoration:this.state.todoArray[4][1] ? "line-through":"none"}}>{this.state.todoArray[4][0]}<button onClick={this.lineTrue.bind(this, 4)}>Complete</button><button onClick={this.removeListing.bind(this, 4)}>Delete</button></p>}
	{this.state.todoArray[5]==null ?  null : <p id="p5" style={{textDecoration:this.state.todoArray[5][1] ? "line-through":"none"}}>{this.state.todoArray[5][0]}<button onClick={this.lineTrue.bind(this, 5)}>Complete</button><button onClick={this.removeListing.bind(this, 5)}>Delete</button></p>}
	{this.state.todoArray[6]==null ?  null : <p id="p6" style={{textDecoration:this.state.todoArray[6][1] ? "line-through":"none"}}>{this.state.todoArray[6][0]}<button onClick={this.lineTrue.bind(this, 6)}>Complete</button><button onClick={this.removeListing.bind(this, 6)}>Delete</button></p>}
	{this.state.todoArray[7]==null ?  null : <p id="p7" style={{textDecoration:this.state.todoArray[7][1] ? "line-through":"none"}}>{this.state.todoArray[7][0]}<button onClick={this.lineTrue.bind(this, 7)}>Complete</button><button onClick={this.removeListing.bind(this, 7)}>Delete</button></p>}
	{this.state.todoArray[8]==null ?  null : <p id="p8" style={{textDecoration:this.state.todoArray[8][1] ? "line-through":"none"}}>{this.state.todoArray[8][0]}<button onClick={this.lineTrue.bind(this, 8)}>Complete</button><button onClick={this.removeListing.bind(this, 8)}>Delete</button></p>}
	{this.state.todoArray[9]==null ?  null : <p id="p9" style={{textDecoration:this.state.todoArray[9][1] ? "line-through":"none"}}>{this.state.todoArray[9][0]}<button onClick={this.lineTrue.bind(this, 9)}>Complete</button><button onClick={this.removeListing.bind(this, 9)}>Delete</button></p>}
	<form id="formID" autoComplete="off" onSubmit={this.submitHandler}>
		<label>
			Add task<br />
			<input type="text" id="textInput" name="name" />
		</label>
		<input type="button" value="Add" onClick={this.addListing.bind(this)}/>
	</form>
   </div>
   );
	}
}

function TodoList() {
  return (
	<Wack />
  );
}

export default TodoList;