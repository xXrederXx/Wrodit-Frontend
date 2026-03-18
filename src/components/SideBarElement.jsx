import { Link } from "react-router-dom";
export default function SideBarElement({ to, name, onClick}) {
  return (
    <>
      <Link to={to} onClick={onClick}>
        {name}
      </Link>
    </>
  );
}
