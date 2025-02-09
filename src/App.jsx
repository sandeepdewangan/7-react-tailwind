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
    </div>
  );
}

export default App;
