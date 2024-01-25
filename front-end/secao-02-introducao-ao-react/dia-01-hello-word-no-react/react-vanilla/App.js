function App() {
  return (
    <section>
      <h1>Hello World React</h1>
      <form>
        <label>
          <input type="text" />
        </label>
      </form>
    </section>
  )
}

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);
