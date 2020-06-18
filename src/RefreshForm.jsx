import SelectMenu from "./SelectMenu";
import Data from "./Data";

class RefreshForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: ""
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const name = event.target.name;
		const value =
			event.target.type === "checkbox"
				? event.target.checked
				: event.target.value;

		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		var myData = [];
		myData.push(this.state);
		console.log(myData);
		//how to add multiple?
	}

	a() {
		var i = 0;
		var list = [];
		list[i].push(i);
		i = i + 1;
		console.log(list);
	}

	render() {
		return (
			<div>
				<form class="refresh-form" onSubmit={this.handleSubmit}>
					<h3>Asset Type(s)</h3>
					<label for="assetType">
						Hero
						<input
							name="assetType"
							type="checkbox"
							value={this.state.assetType}
							onChange={this.handleChange}
						/>
					</label>
					<label for="colabra-paste">
						Paste Colabra:
						<input
							name="colabra-paste"
							type="text"
							value={this.state.collabra}
							onChange={this.handleChange}
						/>
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default RefreshForm;
