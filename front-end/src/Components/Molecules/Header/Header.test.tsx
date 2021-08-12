import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Header } from "./index";
import { User } from "@/Types/User";

describe("<Header />", () => {
  describe("logo", () => {
    it("should render logo when start component", async () => {
      render(<Header />);
      const logo = await screen.findByText("Locadora");
      expect(logo).toBeValid();
      expect(logo).toBeVisible();
    });

    it("should render logo with h1 tag when start component", async () => {
      render(<Header />);
      const logo = await screen.findByText("Locadora");
      expect(logo.tagName).toBe("H1");
    });
  });
  describe("auth flow", () => {
    let user: User;

    beforeEach(() => {
      user = {
        email: "homestead@homestead.com",
        name: "Joaquim Silva",
      };
    });

    it("should render user when authenticated", async () => {
      render(<Header user={user} />);
      const userName = await screen.findByText(new RegExp(user.name, "ig"));
      expect(userName).toBeValid();
      expect(userName).toBeVisible();
    });

    it("should render logout button when authenticated", async () => {
      render(<Header user={user} />);
      const logoutButton = await screen.findByRole("button");
      expect(logoutButton).toBeValid();
      expect(logoutButton).toBeVisible();
      expect(logoutButton.textContent).not.toBe("");
    });

    it("should not render user when not authenticated", async () => {
      render(<Header />);
      try {
        const userName = await screen.findByText(new RegExp(user.name, "ig"));
        expect(userName).not.toBeValid();
        expect(userName).not.toBeVisible();
      } catch (e) {}
    });

    it("should not render logout button when not authenticated", async () => {
      render(<Header />);
      try {
        const logoutButton = await screen.findByRole("button");
        expect(logoutButton).not.toBeValid();
        expect(logoutButton).not.toBeVisible();
      } catch (e) {}
    });

    it("should call logout function when click logout button", async () => {
      const onLogout = jest.fn();
      render(<Header user={user} onLogout={onLogout} />);
      const logoutButton = await screen.findByRole("button");
      fireEvent.click(logoutButton);
      await waitFor(() => expect(onLogout).toBeCalled());
    });
  });
});
