import { Outlet } from "react-router-dom";

const DefaultLayout: React.FC = () => {
  return (
    <div className="default-layout">
      <main>
        <Outlet /> {/* Đây là nơi render các route con */}
      </main>
    </div>
  );
};

export default DefaultLayout;
