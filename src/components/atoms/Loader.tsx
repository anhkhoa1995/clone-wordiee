import { ILoader } from "../../types/common";

const Loader: React.FC<ILoader> = ({ size = 40, color = "#fff" }) => {
  return (
    <div className="loader">
      <div
        className="loader-container"
        style={{
          width: size,
          height: size,
          borderColor: `${color} transparent ${color} transparent`,
        }}
      ></div>
    </div>
  );
};

export default Loader;
