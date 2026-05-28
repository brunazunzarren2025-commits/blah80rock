import './Loader.css';

export default function Loader() {
  return (
    <div className="loader-container">
      {/* Background */}
      <div className="loader-background"></div>

      {/* Smoke/Fog Effect */}
      <div className="smoke-container">
        <div className="smoke smoke-1"></div>
        <div className="smoke smoke-2"></div>
        <div className="smoke smoke-3"></div>
      </div>

      {/* Stage Lights */}
      <div className="stage-lights">
        <div className="light light-1"></div>
        <div className="light light-2"></div>
        <div className="light light-3"></div>
        <div className="light light-4"></div>
        <div className="light light-5"></div>
      </div>

      {/* Center Content */}
      <div className="loader-content">
        {/* Amplifier Visualizer */}
        <div className="amplifier">
          <div className="amp-bar bar-1"></div>
          <div className="amp-bar bar-2"></div>
          <div className="amp-bar bar-3"></div>
          <div className="amp-bar bar-4"></div>
          <div className="amp-bar bar-5"></div>
        </div>

        {/* Logo */}
        <div className="loader-logo">BLAH80</div>

        {/* Loading Text */}
        <div className="loader-text">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="loader-subtitle">O rock dos anos 80 vive aqui</div>

      {/* Scan Lines */}
      <div className="loader-scan-lines"></div>
    </div>
  );
}
