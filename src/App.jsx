import { useRef, useState } from "react";
import "./App.css";
import { signup_desk, signup_mob } from "./assets/images";
import Check from "./components/Check";
import Input from "./components/Input";
import { errors, list_data, validRegex } from "./constants";
import Button from "./components/Button";
import Model from "./components/Model";

function App() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [popup, setPopup] = useState(false);
  const inputRef = useRef(null);

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };
  const closeModel = () => {
    setPopup(false);
    setInput("")
  };

  const onSubmitButton = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      setError(errors.required);
      setPopup(false);
      inputRef.current.focus();
    } else if (!input.match(validRegex)) {
      setError(errors.invalid);
      setPopup(false);
      inputRef.current.focus();
    } else {
      setError("");
      setPopup(true);
    }
  };

  return (
    <main className="md:flex items-center justify-center md:bg-darkgrey min-h-screen">
      {popup ? (
        <Model email={input} closeModel={closeModel} />
      ) : (
        <div className="lg:flex flex-row-reverse items-center justify-between gap-10 max-w-5xl 2xl:max-x-7xl m-auto bg-white rounded-xl md:p-5">
          <img src={signup_mob} alt="hero-img" className="w-full lg:hidden" />
          <img src={signup_desk} alt="hero-img" className="hidden lg:block" />
          <div className="data px-6 mt-8">
            <h1 className="text-4xl lg:text-6xl font-bold inline-block text-primary mb-5">
              Stay updated!
            </h1>
            <p className="text-charcolgrey font-normal text-xl mb-6">
              Join 60,000+ product managers receving monthly updates on:
            </p>
            <div className="check-list">
              {list_data.map((data, key) => {
                return <Check data={data} key={key} />;
              })}
            </div>
            <Input
              onChangeInput={onChangeInput}
              value={input}
              error={error}
              inputRef={inputRef}
            />
            <Button
              type="submit"
              text={"Subscribe to monthly newsletter"}
              onClickbutton={onSubmitButton}
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
