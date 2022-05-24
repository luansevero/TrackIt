import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/pages/HomePage"
import RegisterPage from "./components/pages/RegisterPage"
import HabitsPage from "./components/pages/HabitsPage"
import TodayPage from "./components/pages/TodayPage"
import HistoryPage from "./components/pages/HistoryPage"

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