import React from "react";

import "./repository-list.css";

interface RepositoryListProps {
  children: React.ReactNode;
}

export const RepositoryList = ({
  children,
}: RepositoryListProps): JSX.Element => {
  return <section className="repositories">{children}</section>;
};
