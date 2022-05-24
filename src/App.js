import { BrowserRouter, Routes, Route, UNSAFE_RouteContext } from "react-router-dom";
import { useState } from "react";

import TokenContext from "./contexts/TokenContext";
import UserContext from "./contexts/UserContext";

import HomePage from "./components/pages/HomePage";
import RegisterPage from "./components/pages/RegisterPage";
import HabitsPage from "./components/pages/HabitsPage";
import TodayPage from "./components/pages/TodayPage";
import HistoryPage from "./components/pages/HistoryPage";

export default function App() {
    const [token, setToken] = useState("");
    const [profilePic, setProfilePic] = useState("");

    return (
        <TokenContext.Provider value={{token, setToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="cadastro" element={<RegisterPage />} />
                    <UserContext.Provider>
                        <Route path="/habitos" element={<HabitsPage />} />
                        <Route path="/hoje" element={<TodayPage />} />
                        <Route path="/historico" element={<HistoryPage />} />
                    </UserContext.Provider>
                </Routes>
            </BrowserRouter>
        </TokenContext.Provider>
    )
}