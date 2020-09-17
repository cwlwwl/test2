import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker.js';

function GetUl() {
  return(
	<>
		<ul>
			<li>dfdsfds苏格拉底</li>
			<li>老子</li>
			<li>修莫</li>
			<li>亚里士多德</li>
		</ul>
		<div>
			审是
		</div>
	</>
  );
}

ReactDOM.render(
	<React.StrictMode>
		<GetUl />
	</React.StrictMode>
	, 
	document.getElementById('root')  
);


// ReactDOM.render(
// 	<React.StrictMode>
// 		<div>
// 			<button>React.StrictMode是要求代码采用严格模式</button> <br />
// 			<ul>
// 				<li>小五</li>
// 				<li>小王</li>
// 			</ul>
// 		</div>
// 	</React.StrictMode>
// 	, 
// 	document.getElementById('root')  
// );

serviceWorker.unregister();
