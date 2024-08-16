import { Outlet } from "react-router-dom";

import Tag from "../components/atoms/Tag";

const MainLayout: React.FC = () => {
  return (
    <div className="main-layout">
      <header>
        <Tag tag="h1">Clone Wordiee</Tag>
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

export default MainLayout;
