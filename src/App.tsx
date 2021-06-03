import React from "react";
import "./App.css";
import Button from "./components/Button";

const variations: string[] = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
  "link",
];

export const App: React.FC = () => (
  <main className="main__container">
    <section className="btns__container">
      <Button variation="primary">Primary</Button>
      <Button variation="secondary">Secondary</Button>
      <Button variation="success">Success</Button>
      <Button variation="danger">Danger</Button>
      <Button variation="warning">Warning</Button>
      <Button variation="info">Info</Button>
      <Button variation="light">Light</Button>
      <Button variation="dark">Dark</Button>
      <Button variation="link">Link</Button>
    </section>
    
    <code className="btns-code__container">
      {variations.map(variation => (
        <span key={variation}>{`<Button variantion=${variation}>${
          variation.charAt(0).toUpperCase() + variation.slice(1)
        }</Button>`}</span>
      ))}
    </code>
  </main>
);

export default App;
