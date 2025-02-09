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
    </div>
  );
}

export default App;
