import { hydrate } from 'solid-js/web';
import Navbar from './Navbar';
import Footer from './Footer';

hydrate(() => <Navbar />, document.querySelector('#solid-nav'));
hydrate(() => <Footer />, document.querySelector('#solid-footer'));