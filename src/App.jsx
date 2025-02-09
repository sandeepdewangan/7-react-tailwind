function App() {
  return (
    <div>
      <div className="text-2xl bg-yellow-200 py-4 px-2 border-b-2 border-orange-300">
        <span className="tracking-[1em]">Header</span>
      </div>
      <div className="px-4">
        <h1 className="text-3xl font-semibold text-yellow-500 text-center">
          Hello
        </h1>
        <div className="flex justify-between ">
          <p className="space-x-2">
            <span>Hello</span>
            <span>Bye</span>
          </p>
          <span>ADD TO CART</span>
        </div>
      </div>
      {/* Grid */}
      {/* 1 row 3 cols */}
      <div className="grid grid-rows-1 grid-cols-3 text-center gap-4">
        <p className="bg-amber-200">Hello</p>
        <p className="bg-green-300">Hello</p>
        <p className="bg-orange-200"> Hello</p>
      </div>
      <a className="text-sm text-orange-800 hover:text-orange-300" href="">
        🏠 Go to home page
      </a>
      <br />
      <button className="uppercase bg-orange-300 px-4 py-2 rounded-2xl tracking-wider text-md hover:bg-orange-200 text-stone-800 font-semibold transition-colors duration-500 active:bg-red-500">
        Order Now
      </button>
      <br />
      {/* Form */}
      <div className="bg-green-100 max-w-90 mx-auto">
        <div>
          <label>Enter first name</label>
          <br />
          <input type="text" className="input" />
        </div>
        <div>
          <label>Enter mobile number</label>
          <br />
          <input type="text" className="input" />
        </div>
        <div>
          <label>Enter address</label>
          <br />
          <input type="text" className="input" />
        </div>
      </div>
    </div>
  );
}

export default App;
