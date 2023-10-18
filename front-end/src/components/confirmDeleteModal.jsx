import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, Spinner } from "reactstrap";
import { setOpenDeleteModal } from "../store/projectsSice";
import { useState } from "react";

function ModalFocusAfterClose({ handleDelete }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const open = useSelector((store) => store.projects.openDeleteModal);

  const close = () => dispatch(setOpenDeleteModal(false));

  async function confirmDelete() {
    setIsLoading(true);
    await handleDelete();
    setIsLoading(false);
    close();
  }

  return (
    <div>
      <Modal isOpen={open}>
        <ModalBody>Are sure you want to delete it ?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={close}>
            Close
          </Button>
          <Button color="primary" onClick={confirmDelete}>
            {isLoading && <Spinner size="sm">Loading...</Spinner>}
            <span> Delete</span>
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalFocusAfterClose;
