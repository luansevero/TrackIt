import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage"
import RegisterPage from "./Pages/RegisterPage"
import HabitsPage from "./Pages/HabitsPage"
import TodayPage from "./Pages/TodayPage"
import HistoryPage from "./Pages/HistoryPage"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="cadastro" element={<RegisterPage />} />
                <Route path="/habitos" element={<HabitsPage />} />
                <Route path="/hoje" element={<TodayPage />} />
                <Route path="/historico" element={<HistoryPage />} />
            </Routes>
        </BrowserRouter>
    )
}