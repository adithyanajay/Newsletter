
function Button({text, onClickbutton}) {
  return (
    <button onClick={onClickbutton} className="w-full bg-darkgrey py-3 rounded-md mt-5 mb-10 max-w-lg m-auto block hover:bg-tomato  hover:shadow-lg hover:shadow-shadowtomato">
      <p className="text-white font-bold text-base ">{text}</p>
    </button>
  )
}

export default Button
