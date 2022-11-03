import "./App.css";
import qrImg from './qr-code.png';

function App() {
  return <>
    <div className="app-header">
      <div className="qr-body">
        <div className="qr-img">
          <img className="qr-img" src={qrImg} alt="qr img"/>
        </div>
      <div className="qr-txt">
        <p className="txt-p1">
          Improve your front-end skills by building projects
        </p>
        <p className="txt-p2">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
      </div>
    </div>
  </>;
}

export default App;
