import React from 'react';
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

class News extends React.Component{
	constructor(props){
		super(props);
		this.state={
			article_author: "",
			article_source: "",
			article_publishedAt: "",
			article_title: "",
			article_description: "",
			article_content: "",
			article_url: "",
			
		}
		
		
	}
componentDidMount(){
	
	
}
findArticle(){
	let keyWord;
	if (document.getElementById("KeywordInput").value.length<26 && document.getElementById("KeywordInput").value.length>0){
		keyWord=document.getElementById("KeywordInput").value
		let API_URL = `https://newsapi.org/v2/everything?q=${keyWord}&language=en&apiKey=${API_KEY}`;/*API Key stored in .env in project root, you can get a free API key from https://newsapi.org */
		fetch(API_URL)
		.then(response => {
		// indicates whether the response is successful (status code 200-299) or not
		if (!response.ok) {
			throw new Error(`Request failed with status ${response.status}`)
		}
		else{
			return response.json()
		}
    })
	
	.then(response => {
		console.log(response)
	if (response.totalResults==0){
		alert('No results found bozo');
	}
	else{
	let random=Math.floor(Math.random()*19); /*Creates a random number between 0 and 19 which I use to pick a random article from the first page of 20 articles the API provides for me to use*/
	let publishDate=(response.articles[random].publishedAt).slice(0,10);/*I slice off the Time the article was published to only display the date*/
	this.setState({article_author : "Author(s): "+response.articles[random].author});/*Next seven rows just assign values to display to the state object*/
	this.setState({article_source : response.articles[random].source.name});
	this.setState({article_title : response.articles[random].title});
	this.setState({article_description : response.articles[random].description});
	this.setState({article_content : response.articles[random].content});
	this.setState({article_url : response.articles[random].url});
	this.setState({article_publishedAt : publishDate});
	document.getElementById("KeywordForm").reset(); /*this clears the text input box for easier re-use*/
		}
	})
	.catch(error => console.log(error))
	}
	else{
		alert("Keyword too long or missing completely bozo");
	}
	
}
	
	

//this just disables the Enter key from executing the Submit form function, because it would reset the text field without adding the listing
submitHandler(e) {
    e.preventDefault();
	
}
	render(){
		return(
		<div className="NewsBox">{/*Layout stuff mainly*/}
			<div className="NewsInnerBox">
				<div className="NewsUpper">
				<p> Find random article based on keyword</p>
					<p> {this.state.article_source}   {this.state.article_publishedAt}</p>
					<p> {this.state.article_title}</p>
				</div>	
				<div className="NewsLower">
					<p> <a target="_blank" rel="noreferrer"href={this.state.article_url}>{this.state.article_url}</a></p>
					<p> {this.state.article_description}</p>
					<p> {this.state.article_author}</p>
				</div>
				<div className="KeywordBox">
					<form id="KeywordForm" autoComplete="off" onSubmit={this.submitHandler}>
						<label>Enter keyword (Max Length 25)<br />
						<input className="KeywordText" type="text" id="KeywordInput" name="name" />
						</label>
					</form>
					<button className="KeywordSubmit" onClick={this.findArticle.bind(this)}> Search </button>
				</div>
			</div>	
		</div>
		);
	}
}

function NewsDisplay() {
  return (
  <News />
   );
}

export default NewsDisplay;