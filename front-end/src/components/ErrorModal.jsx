import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { setErrorResponse } from "../store/projectsSice";

function ModalFocusAfterClose() {
  const dispatch = useDispatch();

  const response = useSelector((store) => store.projects.errorResponse);

  const toggle = () =>
    dispatch(
      setErrorResponse({
        title: "",
        openModal: false,
        description: "",
      })
    );
  return (
    <div>
      <Modal isOpen={response.openModal}>
        <ModalBody>
          <h2>{response.title}</h2>
          <p>{response.description}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalFocusAfterClose;
