import { Outlet } from "react-router-dom";
import Tag from "../components/atoms/Tag";

const DefaultLayout: React.FC = () => {
  return (
    <div className="default-layout">
      <header>
        <Tag tag="h1">Fake Wordiee</Tag>
      </header>
      <main>
        <Outlet /> {/* Đây là nơi render các route con */}
      </main>
      <footer>
        <Tag tag="p">Play games for fun, not to win or lose</Tag>
      </footer>
    </div>
  );
};

export default DefaultLayout;
