import { render, screen } from "@testing-library/react";
import ButtonSample from "./ButtonSample";
import "@testing-library/jest-dom";

describe("ButtonSampleのテスト", () => {
  it("renders a heading", () => {
    render(<ButtonSample />);

    // 見出し要素を名前を指定して取得
    const heading = screen.getByRole("heading", {
      name: "This is button sample",
    });

    // 取得した要素がドキュメント内に存在したらテストOK
    expect(heading).toBeInTheDocument();
  });
});
