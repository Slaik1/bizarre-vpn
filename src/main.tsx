import { createRoot } from 'react-dom/client';

import App from './components/App';
import './i18n';

createRoot(document.getElementById('root')!).render(<App />);
