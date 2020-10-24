import React, { useEffect, useState } from 'react';
import { Grid, Row, Col, Table, Button } from 'react-bootstrap';
import Card from 'components/Card/Card.jsx';
import Axios from 'axios';

const TableList = (props) => {
	const [ state, setState ] = useState({ data: null });
	useEffect(() => {
		Axios.get('http://631136d22786.ngrok.io/admin/company/')
			.then((res) => {
				setState({ data: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	const thArray = [ 'ID', 'Company Name', 'Username', 'Email', 'Phone', 'Action' ];

	const deleteHandler = (id) => {
		Axios.delete(`http://631136d22786.ngrok.io/admin/company/${id}`)
			.then((res) => {
				let newArray = state.data.filter((company) => company.id !== id);
				setState({ data: newArray });
			})
			.catch((err) => {
				console.log(err);
			});
		console.log(id);
	};
	return (
		<div className="content">
			<Grid fluid>
				<Row>
					<Col md={12}>
						<Card
							title="Company"
							ctTableFullWidth
							ctTableResponsive
							content={
								<React.Fragment>
									<a href="/admin/dashboard/form">
										<Button style={{ margin: 10 }}>Add Company</Button>
									</a>

									<Table striped hover>
										<thead>
											<tr>
												{thArray.map((prop, key) => {
													return <th key={key}>{prop}</th>;
												})}
											</tr>
										</thead>
										<tbody>
											{state.data ? (
												state.data.map((prop, key) => {
													console.log(prop);
													return (
														<tr key={key}>
															<React.Fragment>
																<td key={key}>{key + 1}</td>
																<td>{prop.name}</td>
																<td>{prop.username}</td>
																<td>{prop.email}</td>
																<td>{prop.phone}</td>
																<Button
																	key={key}
																	onClick={() => deleteHandler(prop.id)}
																	style={{ margin: 5 }}
																	bsSize="small"
																	bsStyle="danger"
																>
																	Delete
																</Button>
															</React.Fragment>
														</tr>
													);
												})
											) : null}
										</tbody>
									</Table>
								</React.Fragment>
							}
						/>
					</Col>
				</Row>
			</Grid>
		</div>
	);
};

export default TableList;
