import { createSignal } from 'solid-js';

function Navbar() {
  const [count, setCount] = createSignal(0);

  return (
    <nav style={{ 'background-color': 'tomato', color: 'black' }}>
      <div>I am hydratable Navbar</div>
      <button type="button" onClick={() => setCount(count() + 1)}>
        {count()}
      </button>
    </nav>
  )
}

export default Navbar;