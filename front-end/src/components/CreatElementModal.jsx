import { useState } from "react";
import * as ReactStrap from "reactstrap";
import { BiPlus } from "react-icons/bi";
import Button from "../components/Button";
import "../assets/styles/formModal.scss";

function CreateElementModal({ CustomHeader, children, onSubmitForm }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [isLoading, setIsLoading] = useState(false);

  async function submitForm(e) {
    e.preventDefault();
    const label = e.target.label.value;
    const description = e.target.description.value;
    const starting_date = e.target.started_at.value;
    const ending_date = e.target.ended_at.value;

    setIsLoading(true);
    const response = await onSubmitForm({
      label,
      description,
      starting_date,
      ending_date,
    });
    setIsLoading(false);

    if (response.success) toggle();
  }
  return (
    <div>
      <div>
        <Button label="Add project" onClick={toggle}>
          <BiPlus style={{ fontSize: "23px", marginRight: "10px" }} />
        </Button>
      </div>
      <ReactStrap.Modal isOpen={modal} toggle={toggle}>
        {/* header */}
        <CustomHeader closeModal={toggle} />
        {/* Body */}
        <ReactStrap.ModalBody>
          <ReactStrap.Form onSubmit={submitForm}>
            <ReactStrap.FormGroup>
              <ReactStrap.Label for="label">Valid input</ReactStrap.Label>
              <ReactStrap.Input
                required
                name="label"
                placeholder="Write a label..."
              />
            </ReactStrap.FormGroup>
            <ReactStrap.FormGroup>
              <ReactStrap.Label for="description">Description</ReactStrap.Label>
              <ReactStrap.Input
                required
                id="description"
                name="description"
                type="textarea"
                placeholder="Write a description..."
              />
            </ReactStrap.FormGroup>
            {children}
            <ReactStrap.FormGroup>
              <ReactStrap.Label for="started_at">Started at</ReactStrap.Label>
              <ReactStrap.Input
                required
                id="started_at"
                name="started_at"
                placeholder="pick a date..."
                type="date"
              />
            </ReactStrap.FormGroup>
            <ReactStrap.FormGroup>
              <ReactStrap.Label for="ended_at">Ended at</ReactStrap.Label>
              <ReactStrap.Input
                required
                id="ended_at"
                name="ended_at"
                placeholder="pick a date..."
                type="date"
              />
            </ReactStrap.FormGroup>
            {/* Footer */}
            <ReactStrap.ModalFooter>
              <Button style={{ color: "#000" }} onClick={toggle}>
                Cancel
              </Button>
              <Button type="submit">
                {isLoading && (
                  <ReactStrap.Spinner size="sm">Loading...</ReactStrap.Spinner>
                )}
                <span>&nbsp;Save</span>
              </Button>
            </ReactStrap.ModalFooter>
          </ReactStrap.Form>
        </ReactStrap.ModalBody>
      </ReactStrap.Modal>
    </div>
  );
}

export default CreateElementModal;
