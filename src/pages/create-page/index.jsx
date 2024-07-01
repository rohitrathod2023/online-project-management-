import React from "react";
import "./create-page.css";
import Navbar from "../../common/components/navbar";
import { Form, Container } from "react-bootstrap";
const CreateProject = () => {
  return (
    <div className="create-page">
      <Navbar />
      <div className="create-page-container">
        <div className="create-page-form">
          <div className="form-navbar-section">
            <div className="project-theme-input">
              <input
                type="text"
                placeholder="Enter Project Theme"
                className="project-theme-input-text"
              />
            </div>
            <div className="btn save-btn">
              <button className="custom-save-btn">Save Project</button>
            </div>
          </div>
          <div className="form-main-section">
            {/* we can crate new componets and send the inpormation as pros to that componets so we don't have to repeat it */}
            <div className="form-reason">
              <Container>
                <Form>
                  <Form.Group controlId="formSelect">
                    <Form.Label className="create-form-label-text">
                      Reason
                    </Form.Label>
                    <Form.Select size="lg" className="custom-select">
                      <option className="create-option-text">
                        For Business
                      </option>
                      <option className="create-option-text">
                        Another option
                      </option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </Container>
            </div>
            <div className="form-reason">
              <Container>
                <Form>
                  <Form.Group controlId="formSelect">
                    <Form.Label className="create-form-label-text">
                      Type
                    </Form.Label>
                    <Form.Select size="lg" className="custom-select">
                      <option className="create-option-text">Internal</option>
                      <option className="create-option-text">
                        Another option
                      </option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </Container>
            </div>
            <div className="form-reason">
              <Container>
                <Form>
                  <Form.Group controlId="formSelect">
                    <Form.Label className="create-form-label-text">
                      Division
                    </Form.Label>
                    <Form.Select size="lg" className="custom-select">
                      <option className="create-option-text">Filters</option>
                      <option className="create-option-text">
                        Another option
                      </option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </Container>
            </div>
            <div className="form-reason">
              <Container>
                <Form>
                  <Form.Group controlId="formSelect">
                    <Form.Label className="create-form-label-text">
                      Category
                    </Form.Label>
                    <Form.Select size="lg" className="custom-select">
                      <option className="create-option-text">Quality A</option>
                      <option className="create-option-text">
                        Another option
                      </option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </Container>
            </div>
            <div className="form-reason">
              <Container>
                <Form>
                  <Form.Group controlId="formSelect">
                    <Form.Label className="create-form-label-text">
                      Priority
                    </Form.Label>
                    <Form.Select size="lg" className="custom-select">
                      <option className="create-option-text">High</option>
                      <option className="create-option-text">
                        Another option
                      </option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </Container>
            </div>
            <div className="form-reason">
              <Container>
                <Form>
                  <Form.Group controlId="formSelect">
                    <Form.Label className="create-form-label-text">
                      Department
                    </Form.Label>
                    <Form.Select size="lg" className="custom-select">
                      <option className="create-option-text">Strategy</option>
                      <option className="create-option-text">
                        Another option
                      </option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </Container>
            </div>
            <div className="form-reason">
              <Container>
                <Form>
                  <Form.Group controlId="formSelect">
                    <Form.Label className="create-form-label-text">
                      Start Date as per Project Plan
                    </Form.Label>
                    <Form.Select size="lg" className="custom-select">
                      <option className="create-option-text">
                        D Month, Yr
                      </option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </Container>
            </div>
            <div className="form-reason">
              <Container>
                <Form>
                  <Form.Group controlId="formSelect">
                    <Form.Label className="create-form-label-text">
                      End Date as per Project Plan
                    </Form.Label>
                    <Form.Select size="lg" className="custom-select">
                      <option className="create-option-text">
                        D, month, Yr
                      </option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </Container>
            </div>
            <div className="form-reason">
              <Container>
                <Form>
                  <Form.Group controlId="formSelect">
                    <Form.Label className="create-form-label-text">
                      Location
                    </Form.Label>
                    <Form.Select size="lg" className="custom-select">
                      <option className="create-option-text">Pune</option>
                      <option className="create-option-text">
                        Another option
                      </option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </Container>
            </div>
          </div>
          <div className="status-text-section">
            <span className="status-text">Status:</span>
            <span className="status-value-text"> Registered</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
