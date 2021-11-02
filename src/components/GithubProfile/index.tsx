import React from "react";
import { GithubApiUserResponse } from "../../interfaces/githubApi";

interface GithubProfileProps {
  children: React.ReactNode;
  isLoading: boolean;
  user: GithubApiUserResponse | undefined;
  onLoading: () => JSX.Element;
}

export const GithubProfile = ({
  children,
  isLoading,
  user,
  onLoading,
}: GithubProfileProps): JSX.Element => {
  if (isLoading || !user) {
    return onLoading();
  }

  return <main className="container">{children}</main>;
};
