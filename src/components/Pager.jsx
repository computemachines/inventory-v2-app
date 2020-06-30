import React from "react";
import { Link } from "@reach/router";
export function Pager({ currentPage: page, numPages, linkHref }) {
  const shownPageLinks = [page - 2, page - 1, page, page + 1, page + 2].filter(
    (p) => p >= 1 && p <= numPages
  );

  if (!numPages) return null;

  return (
    <div className="pager">
      <span className="pager--note">Page:</span>
      {page - 2 > 1 ? (
        <Link to={linkHref + 1} className="pager--page-link">
          |&lt;
        </Link>
      ) : null}
      {page !== 1 ? (
        <Link to={linkHref + (page - 1)} className="pager--page-link">
          &lt;
        </Link>
      ) : null}
      {page - 2 > 1 ? "..." : null}
      {shownPageLinks.map((p) => (
        <Link
          to={linkHref + p}
          key={p}
          className={`pager--page-link ${
            p == page ? "pager--page-link__active" : ""
          }`}
        >
          {p}
        </Link>
      ))}
      {page + 2 < numPages ? "..." : null}
      {numPages > page ? (
        <Link to={linkHref + (page + 1)} className="pager--page-link">
          &gt;
        </Link>
      ) : null}
      {page + 2 < numPages ? (
        <Link to={linkHref + numPages} className="pager--page-link">
          &gt;|
        </Link>
      ) : null}
    </div>
  );
}
