import { AiFillFlag, AiOutlineClose } from "react-icons/ai";

export default function AddProjectHeader({ closeModal }) {
  return (
    <div className="modal-header">
      <div className="modal-title">
        <div>
          <AiFillFlag />
        </div>
        <div className="titles">
          <h4>Add New Project</h4>
          <p>Fill your project attributs</p>
        </div>
      </div>
      <span onClick={closeModal}>
        <AiOutlineClose size={26} />
      </span>
    </div>
  );
}
