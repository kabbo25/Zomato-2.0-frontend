import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "@/AppRoutes.tsx";
import AuthProviderWithNavigate from "@/auth/AuthProviderWithNavigate.tsx";
import {QueryClient, QueryClientProvider} from "react-query";
import {ToastContainer} from "react-toastify";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        }
    }
});
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router>
            <QueryClientProvider client={queryClient}>
                <AuthProviderWithNavigate>
                    <AppRoutes/>
                    <ToastContainer/>
                </AuthProviderWithNavigate>
            </QueryClientProvider>
        </Router>
    </React.StrictMode>,
)
