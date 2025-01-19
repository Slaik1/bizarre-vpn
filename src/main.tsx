import { createRoot } from 'react-dom/client';

import App from './components/App';
import './i18n';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(<App />);
