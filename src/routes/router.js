import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import Estados from "../pages/Estados";
import Home from "../pages/Home";

export const DefaultRouter = () => {
    return (
        <Router>
            <Layout>     
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/estado" element={ <Estados /> } />
                </Routes>
            </Layout>
        </Router>
    )
}