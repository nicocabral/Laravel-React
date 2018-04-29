import React from 'react';
import ReactDOM from 'react-dom';


export default class Create extends React.Component{
	constructor(){
		super();
		this.state = {
			name:'',
			email:'',
			password:''
		}
	}
	handleNameChange(e){
		this.setState({
			name: e.target.value

		})
	}
	handleEmailChange(e){
		this.setState({
			email: e.target.value
		})
	}
	handlePasswordChange(e){
		this.setState({
			password: e.target.value
		})
	}
	handleSubmit(e){
		 e.preventDefault();
		 console.log(this.state);
	}

	render(){
		return (

				<div>
					<h2>Add New User</h2>
						<form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
							<div className="form-group">
								<label className="control-label col-sm-2">Name</label>
								<div className="col-md-10">
									<input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
								</div>
							</div>
							<div className="form-group">
								<label className="control-label col-sm-2">Email</label>
								<div className="col-md-10">
									<input type="email" className="form-control" id="email" name="email" placeholder="Enter your Email" value={this.state.email} onChange={this.handleEmailChange.bind(this)}/>
								</div>
							</div>
							<div className="form-group">
								<label className="control-label col-sm-2">Password</label>
								<div className="col-md-10">
									<input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />
								</div>
							</div>
							<div className="form-group">
								<div className="col-md-12">
								<span className="pull-right">
									<button className="btn btn-primary" type="submit">Save</button>
								</span>
								</div>
							</div>
						</form>
				</div>
			)
			
		
	}
}


if (document.getElementById('create')) {

    ReactDOM.render(<Create/>, document.getElementById('create'))
}
