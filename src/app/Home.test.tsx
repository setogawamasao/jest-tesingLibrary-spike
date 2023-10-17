import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./page";
import "@testing-library/jest-dom";

test("Name:ラベルの確認", () => {
  render(<Home />);

  const nameLabel = screen.getByText("Name:");
  expect(nameLabel).toBeInTheDocument();
});

test("バリデーションテスト:NG", async () => {
  const user = userEvent.setup();
  render(<Home />);

  const nameInput = screen.getByPlaceholderText("田中太郎");
  const submitButton = screen.getByRole("button", { name: "送信" });

  await user.type(nameInput, "12345678901");
  await user.click(submitButton);

  const resultLabel = screen.getByText("10文字以下で入力してください。");
  expect(resultLabel).toBeInTheDocument();
});

test("バリデーションテスト:OK", async () => {
  const user = userEvent.setup();
  render(<Home />);

  const nameInput = screen.getByPlaceholderText("田中太郎");
  const submitButton = screen.getByRole("button", { name: "送信" });

  await user.type(nameInput, "1234567890");
  await user.click(submitButton);

  const resultLabel = screen.getByText("送信完了しました。");
  expect(resultLabel).toBeInTheDocument();
});
