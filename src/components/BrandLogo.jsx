import { Link } from "react-router-dom";

function BrandLogo({ light = false, compact = false, className = "" }) {
  return (
    <Link
      to="/"
      className={`pv-brand-logo text-decoration-none ${light ? "pv-brand-logo-light" : ""} ${compact ? "pv-brand-logo-compact" : ""} ${className}`}
      aria-label="Evara Florals and Events home"
    >
      <span className="pv-brand-mark" aria-hidden="true">
        <span>EF</span>
      </span>

      <span className="pv-brand-copy">
        <span className="pv-brand-name">Evara Florals</span>
        {!compact && <span className="pv-brand-tagline">& Events</span>}
      </span>
    </Link>
  );
}

export default BrandLogo;
