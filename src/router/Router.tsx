import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Loading component
import { Loading } from '../components/utils/Loading';

// Import pages with lazy loading
const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>                
                <main>
                    <Routes>
                        {/* General */}
                        <Route index path="/" element={<Home />} />

                        {/* Not found page */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </Suspense>
        </BrowserRouter>
    )
}