import React from 'react';
import { Grid, Row, Col, Table, DropdownButton, MenuItem } from 'react-bootstrap';
import Card from 'components/Card/Card.jsx';

const TableList = (props) => {
	const thArray = [ 'ID', 'Job Opening', 'Candidate Name', 'Phone', 'Rating', 'Experience', 'Status' ];
	const tdArray = [ [ '1', 'Senior Dev', 'Mass', 'mass@g.com', 'Calicut', '8 Years' ] ];

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
										{tdArray.map((prop, key) => {
											return (
												<tr key={key}>
													{prop.map((prop, key) => {
														return (
															<React.Fragment>
																<td key={key}>{prop}</td>
															</React.Fragment>
														);
													})}
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
										})}
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
