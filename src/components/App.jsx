import { BrowserRouter, Routes, Route } from "react-router";

import { store } from "../Stored/Store.js";
import {Provider} from 'react-redux'

import HomePage from "./HomePage.jsx"
import RestaurantPage from "./RestaurantPage.jsx"
import RestaurantMenu from "./RestaurantMenu.jsx";

export default function App() {

    return (
        <>
        <Provider store={store}>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/restaurant" element={<RestaurantPage />}></Route>
                    <Route path="/city/kolkata/:id" element={<RestaurantMenu />}></Route>
                    
                </Routes>

            </BrowserRouter>
        </Provider>
        </>
    )
}