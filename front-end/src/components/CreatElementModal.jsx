import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Label,
  Input,
  FormGroup,
  Spinner,
} from "reactstrap";
import Project from "../utils/APIs";

function CreateElementModal({ children, onSubmitForm }) {
  const [modal, setModal] = useState(false);
  const [errModal, setErrModal] = useState(false);

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
    else {
    }
  }
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        <BiPlus />
        add Project
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>header</ModalHeader>
        <ModalBody>
          <Form onSubmit={submitForm}>
            <FormGroup>
              <Label for="label">Valid input</Label>
              <Input required name="label" placeholder="Write a label..." />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                required
                id="description"
                name="description"
                type="textarea"
                placeholder="Write a description..."
              />
            </FormGroup>
            {children}
            <FormGroup>
              <Label for="started_at">Started at</Label>
              <Input
                required
                id="started_at"
                name="started_at"
                placeholder="pick a date..."
                type="date"
              />
            </FormGroup>
            <FormGroup>
              <Label for="ended_at">Ended at</Label>
              <Input
                required
                id="ended_at"
                name="ended_at"
                placeholder="pick a date..."
                type="date"
              />
            </FormGroup>
            <ModalFooter>
              <Button color="primary" type="submit">
                {isLoading ? <Spinner size="sm">Loading...</Spinner> : "Save"}
              </Button>
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default CreateElementModal;
