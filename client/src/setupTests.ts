// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { mockTopArtists } from "./mocks";

jest.mock("react-router-dom")

jest.mock("./hooks", () => ({
  useAuth: () => ({
    logout: () => jest.fn(),
    accessToken: "mock-token"
  }),
  useTopArtists: () => mockTopArtists()
}))
