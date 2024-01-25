
import React from "react";

class HelloWorld extends React.Component {
  render() {
    const modules = ["Fundamentos", "Front-end", "Back-end", "Ciência da computação"];
    console.log(modules);
    return (
      <section className="hello">
        {modules.map((mod) => (
          <span key={mod}>✅ Hello World {mod}</span>
        ))}
      </section>
    );
  }
}

export default HelloWorld;