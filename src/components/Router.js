import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookDetail from "./BookDetail";
import Container from "./Container";
import Header from "./Header";
import Menu from "./Menu";
const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Menu />
                            <Header />
                            <Container />
                        </>
                    } />
                    <Route path="/auth/login" element={
                        <></>
                    } />
                    <Route path="/auth/register" element={
                        <></>
                    } />
                    <Route path="/book">
                        <Route path=":bookId" element={<BookDetail />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;