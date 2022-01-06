import React from 'react';
import ImageDisplay from './ImageDisplay.js';
import NewsDisplay from './NewsDisplay.js';
import RecipeDisplay from './RecipeDisplay.js';

class ContentContainer extends React.Component{
	constructor(props){
		super(props);
		this.state={
			useComponent:"news",
		}
	}
	
Navbar(){
	return(
	<div className="navbar">
	<button>News</button>
	<button>Image</button>
	<button>Recipe</button>
	</div>
	);
}
	render(){
		switch(this.state.useComponent){
				case 'image': //displayed content when useComponent=image
					return(
					<div className="contentBox">
					<ImageDisplay />
					<this.Navbar />
					</div>
					);
					break;
					
					case 'news': //displayed content when useComponent=news
					return(
					<div className="contentBox">
					<NewsDisplay />
					<this.Navbar />
					</div>
					);
					break;
					
					case 'recipe': //displayed content when useComponent=recipe
					return(
					<div className="contentBox">
					<RecipeDisplay />
					<this.Navbar />
					</div>
					);
					break;
		}
	}
}

function Content() {
  return (
   <ContentContainer />
  );
}

export default Content;