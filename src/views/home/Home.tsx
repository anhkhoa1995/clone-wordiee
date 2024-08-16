import { Link } from "react-router-dom";

import Tag from "../../components/atoms/Tag";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <img src="/wordiee-icon.svg" alt="Icon Game" />
      <Tag tag="h1" className="game-title">
        Clone Wordiee
      </Tag>
      <Tag tag="p" className="game-description">
        Get 5 chances to guess a 5-letter word.
      </Tag>
      <div className="group-btn">
        <Tag tag="span" className="btn-play">
          <Link to="/board">Play</Link>
        </Tag>
        <Tag tag="span" className="btn-github">
          <Link to="https://github.com/anhkhoa1995/clone-wordiee" target="_blank">GitHub</Link>
        </Tag>
      </div>
      <Tag tag="p" className="game-source">
        Products developed to serve learning needs.
        <br />
        References from many sources on the Internet.
      </Tag>
    </div>
  );
};

export default Home;
