import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { StoreProvider, createStore } from "easy-peasy";
import model from './StoreModel';
import { MemoryRouter ,BrowserRouter } from "react-router-dom"


const store = createStore(model);
ReactDOM.createRoot(document.getElementById('root')).render(
    <StoreProvider store={store}>
        <MemoryRouter>
            <App />
        </MemoryRouter>
    </StoreProvider>
)
