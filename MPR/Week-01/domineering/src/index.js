import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import './assets/bootstrap-5.3/css/bootstrap.min.css';
import App from './App';
import Board from './components/Board';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Board size={10} />);
