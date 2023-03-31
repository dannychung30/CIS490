import { createRoot } from 'react-dom/client';
import Results from './Results.js';
import '../styles/global.css';

const root = createRoot(document.getElementById('app'));
root.render(<Results />);
