import React from 'react'
import Joke from './Joke.js'
import './style.css'

function App(){

	return(
		<div id="wrapper">
			<Joke 
				joke={{
					question: 'kleptomaniacs are weird',
					punchline: 'It’s hard to explain puns to kleptomaniacs because they always take things literally.'}}/>
		</div>
	);
}

export default App
