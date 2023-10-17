"use client";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isValidate, setIsValidate] = useState(false);

  const onclickSubmit = () => {
    setIsClicked(true);
    setIsValidate(isOverStringLength(inputValue, 10));
  };

  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          data-testid="name-input"
          placeholder="田中太郎"
        />
      </label>
      <button onClick={() => onclickSubmit()}>送信</button>
      {isClicked && (
        <div>
          {isValidate ? "10文字以下で入力してください。" : "送信完了しました。"}
        </div>
      )}
    </div>
  );
}

export const isOverStringLength = (input: string, length: number) => {
  return length < input.length;
};
