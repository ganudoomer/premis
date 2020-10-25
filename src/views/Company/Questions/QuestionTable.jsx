import React, { Fragment, useEffect, useState } from "react";
import Axios from "axios";
import {
  Grid,
  Row,
  Col,
  Table,
  DropdownButton,
  MenuItem,
} from "react-bootstrap";
import Card from "components/Card/Card.jsx";

const TableList = (props) => {
  const [question, setQuestion] = useState([]);

  const thArray = [
    "ID",
    "Question",
    "Choice1",
    "Choice2",
    " Choice3",
    "Choice4",
    "Answer",
  ];
  const data = [
    ["1", "Senior Dev", "Mass", "mass@g.com", "Calicut", "8 Years", "Answer"],
  ];

  useEffect(() => {
    let id = localStorage.getItem("companyId");
    Axios.get(`http://631136d22786.ngrok.io/company/${id}/questions/`)
      .then((response) => {
        for (let counter = 0; counter <= response.data.length; counter++) {
          setQuestion(...question, response.data[counter].questions);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(question);
  return (
    <div className="content">
      <Grid fluid>
        <DropdownButton bsStyle="dfault" title="">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3" active>
            Active Item
          </MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </DropdownButton>
        <Row>
          <Col md={12}>
            <Card
              title="Questions"
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
                    <tr>
                      {question.map((item, key) => {
                        return (
                          <Fragment>
                            <td>{item.id}</td>
                            <td>{item.question}</td>
                            <td>{item.choice1}</td>
                            <td>{item.choice2}</td>
                            <td>{item.choice3}</td>
                            <td>{item.choice4}</td>
                            <td>{item.answer}</td>
                          </Fragment>
                        );
                      })}
                    </tr>
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
