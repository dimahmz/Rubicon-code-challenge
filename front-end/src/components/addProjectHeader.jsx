import { AiFillFlag, AiOutlineClose } from "react-icons/ai";

export default function AddProjectHeader({ closeModal }) {
  return (
    <div className="modal-header">
      <div className="modal-title">
        <div>
          <AiFillFlag />
        </div>
        <div className="titles">
          <h2>Add New Project</h2>
          <p>Fill your project attributs</p>
        </div>
      </div>
      <span onClick={closeModal}>
        <AiOutlineClose size={26} />
      </span>
    </div>
  );
}
