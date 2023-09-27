import { useState, ChangeEvent, FormEvent } from "react";
import Qr from "./qr";

export default function InputQr() {
  const [input, setInput] = useState<string | undefined>();
  const [flag, setFlag] = useState<boolean>(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFlag(true);
  };

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { value } = e.target;
    setInput(value);
    setFlag(false);
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input placeholder="enter URL" onChange={handleChange}></input>
        <button type="submit">Submit</button>
      </form>
      {flag && <Qr props={input} />}
    </div>
  );
}
