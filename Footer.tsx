import { isServer } from 'solid-js/web';
import { createSignal } from "solid-js";

function Footer() {
  const [count, setCount] = createSignal(0);

  if (!isServer) {
    setInterval(() => {
      setCount(count() + 1)
    }, 1000); 
  }

  return (
    <footer style={{ 'background-color': '#ddd' }}>
      Also hydratable footer { count() }
    </footer>
  )
}

export default Footer;