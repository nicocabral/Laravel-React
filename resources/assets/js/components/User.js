import React from 'react';
import ReactDOM from 'react-dom';


export default class User extends React.Component{
	constructor(){
		super();
		this.state = {
			data: []
		}
	}
	componentWillMount(){
		let $this = this;

		axios.get('/api/users').then(response => {
			$this.setState({
				data: response.data
			})
		}).catch(error => {
			console.log(error);
		})
	}
	render(){
		return (

				<div>

					<h2>Users Listing</h2>
					<a href="users/create" className="btn btn-success"> Add new user </a>
					<br/>
					<table className="table table-bordered">
						<thead>
							<tr>
								<th>ID</th>
								<th>NAME</th>
								<th>EMAIL</th>
								<th>ACTION</th>
							</tr>
						</thead>
						
						<tbody>
							{this.state.data.map((user, i) => (
								<tr>
								<td>{user.id}</td>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>
								<a href="" className="btn btn-primary">Edit</a> |     
								<a href="" className="btn btn-danger">Delete</a>
								</td>
							</tr>
							)
						)}
						</tbody>
					</table>
				</div>
			)
			
		
	}
}


if (document.getElementById('app')) {

    ReactDOM.render(<User/>, document.getElementById('app'))
}
