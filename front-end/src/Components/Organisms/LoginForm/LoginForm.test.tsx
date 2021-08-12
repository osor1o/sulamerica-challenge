import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { LoginForm, LoginFormData } from "./index";

describe("<LoginForm />", () => {
  describe("inputs", () => {
    beforeEach(() => {
      render(<LoginForm />);
    });

    it("should render two inputs when start component", async () => {
      const textFields = await screen.findAllByRole("textbox");
      expect(textFields.length).toEqual(2);
    });

    it("should render inputs with name attribute when start component", async () => {
      const textFields = (await screen.findAllByRole(
        "textbox"
      )) as HTMLInputElement[];
      textFields.forEach((textField) => {
        expect(textField.name).toMatch(/(email|name)/);
      });
    });

    it("should render inputs with label attribute when start component", async () => {
      const labelsText = ["E-mail", "Nome"];
      for (let labelText of labelsText) {
        const label = (await screen.findByText(labelText, {
          selector: "label",
        })) as HTMLInputElement;
        expect(label).toBeValid();
        expect(label).toBeVisible();
      }
    });
  });

  describe("button", () => {
    beforeEach(() => {
      render(<LoginForm />);
    });

    it("should render button when start component", async () => {
      const button = await screen.findByRole("button");
      expect(button).toBeValid();
      expect(button).toBeVisible();
    });

    it("should render button with text when start component", async () => {
      const button = await screen.findByRole("button");
      expect(button.textContent).not.toEqual("");
    });

    it("should render button with type submit when start component", async () => {
      const button = (await screen.findByRole("button")) as HTMLButtonElement;
      expect(button.type).toEqual("submit");
    });
  });

  describe("form", () => {
    let onSubmit = jest.fn();
    let formData: LoginFormData = {};
    let form: HTMLFormElement;

    beforeEach(async () => {
      onSubmit = jest.fn();
      render(<LoginForm onSubmit={onSubmit} />);
      formData = {
        name: "homestead",
        email: "homestead@homestead.com",
      };
      form = (await screen.findByTestId("login-form")) as HTMLFormElement;
    });

    it("should render form when start component", async () => {
      expect(form).toBeValid();
      expect(form).toBeVisible();
      expect(form).toBeInstanceOf(HTMLFormElement);
    });

    it("should call submit function with data when emit submit event", async () => {
      const emailInput = (await screen.findByTestId(
        "login-form-input-email"
      )) as HTMLInputElement;
      const nameInput = (await screen.findByTestId(
        "login-form-input-name"
      )) as HTMLInputElement;

      fireEvent.change(emailInput, { target: { value: formData.email } });
      fireEvent.change(nameInput, { target: { value: formData.name } });
      fireEvent.submit(form);

      await waitFor(() =>
        expect(onSubmit).toHaveBeenCalledWith(formData, expect.anything())
      );
    });

    it("should not call submit function when empty fields", async () => {
      fireEvent.submit(form);
      await waitFor(
        async () => {
          const errorMessages = await screen.findAllByText("Obrigatório.");
          expect(errorMessages).toHaveLength(2);
        },
        { timeout: 500 }
      );
      expect(onSubmit).not.toHaveBeenCalled();
    });

    it("should not call submit function when invalid email format", async () => {
      const emailInput = (await screen.findByTestId(
        "login-form-input-email"
      )) as HTMLInputElement;
      const nameInput = (await screen.findByTestId(
        "login-form-input-name"
      )) as HTMLInputElement;
      fireEvent.change(nameInput, { target: { value: formData.name } });
      fireEvent.change(emailInput, { target: { value: "invalidemail.com" } });
      fireEvent.submit(form);
      await waitFor(
        async () => {
          const errorMessages = await screen.findAllByText(
            "Deve ser um e-mail válido."
          );
          expect(errorMessages).toHaveLength(1);
        },
        { timeout: 500 }
      );
      await waitFor(() => expect(onSubmit).not.toHaveBeenCalled());
    });
  });
});
