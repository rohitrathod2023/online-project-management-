import React from "react";
import "./list-main.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const ListMain = () => {
  return (
    <div className="list-main-container">
      <div className="list-top-section">
        <div className="list-search">
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </Col>
            </Row>
          </Form>
        </div>
        <div className="list-sortby">
          <span className="list-sortby-text">Sort By : </span>
          <div>
            <select className="list-select-options">
              <option className="select-option">prority</option>
              <option className="select-option">no prority</option>
            </select>
          </div>
        </div>
      </div>
      <div className="project-list-section">
        <div className="project-title-bar">
          <span className="project-title-name">Project name</span>
          <span className="project-title-Reason">Reason</span>
          <span className="project-title-name">Type</span>
          <span className="project-title-name">Division</span>
          <span className="project-title-name">Category</span>
          <span className="project-title-name"> Priority</span>
          <span className="project-title-name"> Dept. </span>
          <span className="project-title-name"> Location</span>
          <span className="project-title-name"> Status</span>
        </div>
        <div className="project-lists"></div>
      </div>
    </div>
  );
};

export default ListMain;
