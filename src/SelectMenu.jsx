class SelectMenu extends React.Component {
	constructor(props) {
		super(props);
		//this.handleChange = this.handleChange.bind(this);
	}

	/*handleChange(event) {
		this.props.handleChange(event);
		console.log(this.target.value);
	}*/

	//receives specific select menu array, builds all option tags
	GetSelectOptions(selectOptions) {
		return selectOptions.map(value => <option value={value}>{value}</option>);
	}

	Options(props) {
		return this.GetSelectOptions(this.props.selectOptions);
	}

	render() {
		return (
			<select
				type="select"
				name={this.props.name}
				value={this.props.value}
				onChange={this.props.action}
			>
				{this.Options()}
			</select>
		);
	}
}

export default SelectMenu;
