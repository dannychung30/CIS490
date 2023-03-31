import { createRoot } from 'react-dom/client';
import Results from './Results.js';
import Matcher from '../Models/Matcher.js';
import '../styles/global.css';

const root = createRoot(document.getElementById('app'));
const m = new Matcher();
m.generateScores();
root.render(<Results />);
