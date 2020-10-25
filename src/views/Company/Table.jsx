import React, { useEffect, useState } from 'react';
import { Grid, Row, Col, Table, DropdownButton, MenuItem } from 'react-bootstrap';
import Card from 'components/Card/Card.jsx';
import Axios from 'axios';
const TableList = (props) => {
	const thArray = [ 'ID', 'Name', 'Email', 'Phone', 'Rating (Out of 100)', 'Experience', 'Status' ];
	const [ state, setState ] = useState();
	useEffect(() => {
		Axios.get(
			'http://631136d22786.ngrok.io/company/f6cdec9a-1669-11eb-a469-9c5a4439f34c/dashboard/'
		).then((res) => {
			console.log(res.data);
			setState(res.data);
		});
	}, []);
	return (
		<div className="content">
			<Grid fluid>
				<Row>
					<Col md={12}>
						<Card
							title="List of candidates"
							ctTableFullWidth
							ctTableResponsive
							content={
								<Table striped hover>
									<thead>
										<tr>
											{thArray.map((prop, key) => {
												return <th key={key}>{prop}</th>;
											})}
										</tr>
									</thead>
									<tbody>
										{state ? (
											state.map((prop, key) => {
												return (
													<tr>
														<React.Fragment>
															<td key={key}>{prop.key}</td>
															<td key={key}>{prop.name}</td>
															<td key={key}>{prop.email}</td>
															<td key={key}>{prop.phone}</td>
															<td key={key}>{prop.total_result}</td>
															<td key={key}>{prop.experience}</td>
														</React.Fragment>
														<DropdownButton
															onChange={(e) => console.log(e.target.value)}
															bsStyle="mass"
															title="Status"
														>
															<MenuItem eventKey="1">Pending</MenuItem>
															<MenuItem eventKey="2">Rejected</MenuItem>
															<MenuItem eventKey="3">Accepted</MenuItem>
														</DropdownButton>
													</tr>
												);
											})
										) : null}
									</tbody>
								</Table>
							}
						/>
					</Col>
				</Row>
			</Grid>
		</div>
	);
};

export default TableList;
