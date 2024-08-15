import { useNavigate } from "react-router-dom";

import Button from "../../components/atoms/Button";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate("/board");
  };

  return (
    <div className="home-container">
      <Button className="btn-start" onClick={startGame}>
        Start Game
      </Button>
    </div>
  );
};

export default Home;
