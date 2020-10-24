import React from 'react';
import { Grid, Row, Col, Table, Button } from 'react-bootstrap';
import Card from 'components/Card/Card.jsx';

const TableList = (props) => {
	const thArray = [ 'ID', 'Company Name', 'Username', 'Email', 'City', 'Action' ];
	const tdArray = [
		[ '1', 'Doodle', 'doodle_name', 'doodle@g.com', 'Calicut' ],
		[ '2', 'Doodle', 'doodle_name', 'doodle@g.com', 'Calicut' ],
		[ '2', 'Doodle', 'doodle_name', 'doodle@g.com', 'Calicut' ],
		[ '2', 'Doodle', 'doodle_name', 'doodle@g.com', 'Calicut' ]
	];
	const deleteHandler = (id) => {
		console.log(id);
	};
	return (
		<div className="content">
			<Grid fluid>
				<Row>
					<Col md={12}>
						<Card
							title="Striped Table with Hover"
							category="Here is a subtitle for this table"
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
													<Button
														key={key}
														onClick={() => deleteHandler(prop[0])}
														style={{ margin: 5 }}
														bsSize="small"
														bsStyle="danger"
													>
														Delete
													</Button>
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
