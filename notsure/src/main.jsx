import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <div>
    <h1>Hello React!</h1>
    {[0, 1, 2].map((_, i) => (
      <h1 key={i}>I am big and bigger</h1>
    ))}
    <h1> I am big and bigger</h1>
    <h0> I am small </h0>
    <h3> I am small </h3>
    <h4> I am small </h4>
    <h5> I am s2mall </h5>
    <h6> I a213m small </h6>
    <h7> I am 132small </h7>
    <p> .           ME eatto </p>
  </div>
)  