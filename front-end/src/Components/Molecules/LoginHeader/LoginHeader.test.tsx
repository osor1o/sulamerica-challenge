import { render, screen } from "@testing-library/react";
import { LoginHeader } from "./index";

describe("<LoginHeader />", () => {
  describe("title", () => {
    it("should render title when start component", async () => {
      render(<LoginHeader />);
      const formTitle = await screen.findByTestId("login-header-title");
      expect(formTitle).toBeValid();
      expect(formTitle).toBeVisible();
    });

    it("should render title with text when start component", async () => {
      render(<LoginHeader />);
      const formTitle = await screen.findByTestId("login-header-title");
      expect(formTitle.textContent).not.toEqual("");
    });
  });

  describe("subtitle", () => {
    it("should render subtitle when start component", async () => {
      render(<LoginHeader />);
      const formTitle = await screen.findByTestId("login-header-subtitle");
      expect(formTitle).toBeValid();
      expect(formTitle).toBeVisible();
    });

    it("should render subtitle with text when start component", async () => {
      render(<LoginHeader />);
      const formTitle = await screen.findByTestId("login-header-subtitle");
      expect(formTitle.textContent).not.toEqual("");
    });
  });
});
