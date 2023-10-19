import React, { useState } from "react";
import { setOpenEditModal } from "../store/appSlice";
import { useDispatch, useSelector } from "react-redux";
import {
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
import { getYearMonthDay } from "../utils/time";
import Button from "../components/Button";

function CreateElementModal({ children, onSubmitForm, selectedElement }) {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const close = () => dispatch(setOpenEditModal(false));

  const open = useSelector((store) => store.app.openEditModal);

  async function submitForm(e) {
    e.preventDefault();

    const label = e.target.label.value;
    const description = e.target.description.value;
    const starting_date = e.target.started_at.value;
    const ending_date = e.target.ended_at.value;

    setIsLoading(true);

    const response = await onSubmitForm({
      id: selectedElement._id,
      element: {
        label,
        description,
        starting_date,
        ending_date,
      },
    });

    setIsLoading(false);

    if (response.success) close();
  }
  return (
    <div>
      <Modal isOpen={open} toggle={close}>
        <ModalHeader toggle={close}>Edit</ModalHeader>
        <ModalBody>
          <Form onSubmit={submitForm}>
            <FormGroup>
              <Label for="label">Label</Label>
              <Input
                required
                name="label"
                placeholder="Write a label..."
                defaultValue={selectedElement?.label}
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                required
                id="description"
                name="description"
                type="textarea"
                placeholder="Write a description..."
                defaultValue={selectedElement?.description}
                rows={5}
                cols={10}
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
                defaultValue={getYearMonthDay(selectedElement?.starting_date)}
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
                defaultValue={getYearMonthDay(selectedElement?.ending_date)}
              />
            </FormGroup>
            <ModalFooter>
              <Button type="cancel" color="secondary" onClick={close}>
                Cancel
              </Button>
              <Button type="submit">
                {isLoading && <Spinner size="sm">Loading...</Spinner>}
                <span>&nbsp; Save</span>
              </Button>
            </ModalFooter>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default CreateElementModal;
