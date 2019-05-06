import React from 'react'

function Joke(props){
	/*const wholeJoke = {
		punchline: i.joke.punchline
	};

	if(typeof(i.joke.question) !== 'undefined'){
		wholeJoke.question = i.joke.question;
	}else{
		wholeJoke.question = '';
	}*/
	return(
		<div>
			<p>{props.joke.punchline}</p>
		</div>
	);
}

export default Joke