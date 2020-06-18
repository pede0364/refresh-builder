import React from "react";
import { render } from "react-dom";

import Data from "./Data";
import DataContainer from "./DataContainer";
import RefreshForm from "./RefreshForm";

class RefreshApp extends React.Component {
	render() {
		return (
			<div>
				<h1>Refresh Builder</h1>
				<RefreshForm />
				<DataContainer />
			</div>
		);
	}
}

ReactDOM.render(<RefreshApp />, document.getElementById("container"));

//TODO: google map
export class Container extends React.Component {
	render() {
		if (!this.props.loaded) {
			return <div>Loading...</div>;
		}
		return <div>Map will go here</div>;
	}
}
