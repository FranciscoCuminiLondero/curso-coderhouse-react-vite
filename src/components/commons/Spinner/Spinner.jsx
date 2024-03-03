import { SyncLoader } from "react-spinners";
import "./spinner.css";

const Spinner = () => {
  return (
    <div className="containerSpinner">
      <SyncLoader size={20} color="#32180f" margin={2} speedMultiplier={1} />
    </div>
  );
};

export default Spinner;
