import { Button } from "reactstrap";
export default function AppButton({ label, children, onClick, ...props }) {
  return (
    <Button {...props} className="app-button" onClick={onClick}>
      {children}
      {label}
    </Button>
  );
}
