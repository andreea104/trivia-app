import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({avatar}) => {
  console.log(avatar)
  return (
    <div className="header">
      {avatar === 'f' ? <img src="/female.png" /> : <img src="/man.png" />}
      <Link to="/" className="title_header">
        Trivia Game
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default Header;
