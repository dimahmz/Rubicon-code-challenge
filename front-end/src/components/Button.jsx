import { Button } from "reactstrap";
export default function AppButton({ label, props, children, onClick }) {
  return (
    <Button className="app-button" {...props} onClick={onClick}>
      {children}
      {label}
    </Button>
  );
}
