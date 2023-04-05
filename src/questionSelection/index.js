import { createRoot } from 'react-dom/client';
import '../styles/global.css';
import '../styles/questionselection.css';
import QuestionSelection from './QuestionSelection.js';

const root = createRoot(document.getElementById('app'));
root.render(<QuestionSelection />);
