import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import thêm
import {createStore} from "redux";
import appReducers from "./reducers/index"
import {Provider} from "react-redux"

const store = createStore(
	appReducers,
	window.__Redux_DEVTOOLS_EXTENSION__ &&  window.__Redux_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(

	<Provider store={store}>
		<App />
	</Provider>,
	
	document.getElementById("root")
);

reportWebVitals();
