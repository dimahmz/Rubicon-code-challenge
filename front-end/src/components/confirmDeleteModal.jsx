import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, Spinner } from "reactstrap";
import { setOpenDeleteModal } from "../store/appSlice";
import { useState } from "react";
// import Button from "../components/Button";

function ModalFocusAfterClose({ handleDelete }) {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const open = useSelector((store) => store.app.openDeleteModal);

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
        <ModalBody>
          <h5>Are sure you want to delete it ?</h5>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={close}>
            Close
          </Button>
          <Button color="danger" onClick={confirmDelete}>
            {isLoading && <Spinner size="sm">Loading...</Spinner>}
            <span> Delete</span>
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalFocusAfterClose;
