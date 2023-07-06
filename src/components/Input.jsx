

function Input({onChangeInput, value, error, inputRef}) {
  return (
    <form className="m-auto max-w-lg">
    <div className="labels flex justify-between">
    <label htmlFor="email" className="text-sm text-primary font-bold ">Email address:</label>
      <p className=" text-red-500 text-sm">{error}</p>
    </div>
      
      <input name="email" type="email" placeholder="email@comapany.com" onChange={onChangeInput} value={value} className={`mt-3 block w-full px-5 py-3 border ${error?"border-red-300 focus:border-red-500":"border-grey focus:border-charcolgrey"} rounded-md text-sm lg:text-base `} ref={inputRef} />
    </form>
  )
}

export default Input
