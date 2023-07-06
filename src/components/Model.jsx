import { success } from "../assets/images";
import Button from "./Button";

function Model({ email, closeModel }) {
  return (
    <div className="w-full min-h-screen lg:max-w-2xl bg-white lg:rounded-xl lg:min-h-fit absolute p-10 flex flex-col justify-between items-center md:justify-around">
      <div className="mt-20 md:m-0">
        <img src={success} alt="success icon" className="block" />
        <div className="data mt-8">
          <h1 className="text-5xl lg:text-6xl font-bold inline-block text-primary mb-5 leading-none">
            Thanks for subscribing!
          </h1>
          <p className="text-charcolgrey font-normal text-base md:text-xl mb-6">
            A confirmation email has been sent to <span>{email}</span>. Please
            open it and click the button inside to confirm your subscription.
          </p>
        </div>
      </div>
      <Button text={"Dismiss message"} onClickbutton={closeModel} />
    </div>
  );
}

export default Model;
