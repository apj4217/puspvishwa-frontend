import { Link } from "react-router-dom";

function BrandLogo({ light = false, compact = false, className = "" }) {
  return (
    <Link
      to="/"
      className={`pv-brand-logo text-decoration-none ${light ? "pv-brand-logo-light" : ""} ${compact ? "pv-brand-logo-compact" : ""} ${className}`}
      aria-label="Apj's Florals home"
    >
      <span className="pv-brand-mark" aria-hidden="true">
        <span>APJ</span>
      </span>

      <span className="pv-brand-copy">
        <span className="pv-brand-name">Apj's Florals</span>
        <span className="pv-brand-tagline">Flowers & Events</span>
      </span>
    </Link>
  );
}

export default BrandLogo;
