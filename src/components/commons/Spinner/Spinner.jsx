import { SyncLoader } from "react-spinners";
import "./spinner.css";

const Spinner = () => {
  return (
    <div className="containerSpinner">
      <SyncLoader size={15} color="#169aff" margin={2} speedMultiplier={1} />
    </div>
  );
};

export default Spinner;
