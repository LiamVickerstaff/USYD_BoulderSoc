import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({
  path,
  children,
}: {
  path: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="nav-item-text" to={`/${path}`}>
      {children}
    </Link>
  );
}
