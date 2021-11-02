import axios, { AxiosInstance } from "axios";
import { GithubApiUserResponse, Repository } from "../interfaces/githubApi";

export class GithubApi {
  githubApi: AxiosInstance;
  constructor() {
    this.githubApi = axios.create({ baseURL: "https://api.github.com" });
  }

  getUser(username: string) {
    return this.githubApi.get<GithubApiUserResponse>(`/users/${username}`);
  }

  getUserRespos(username: string, page = 1) {
    return this.githubApi.get<Repository[]>(
      `/users/${username}/repos?page=${page}&sort=updated`
    );
  }
}

export const githubApi = new GithubApi();
