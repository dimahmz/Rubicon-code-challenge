import { HiClipBoardDocumentList } from "react-icons/hi";
export default function AddTaskHeader() {
  return (
    <div className="modal-header">
      <HiClipBoardDocumentList />
      <div>
        <h2>Add New Task</h2>
        <p>Fill your task attributs</p>
      </div>
    </div>
  );
}
