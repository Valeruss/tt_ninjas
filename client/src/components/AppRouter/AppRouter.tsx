import { Routes, Route, Navigate } from 'react-router-dom';
import { RouteNames, publicRoutes } from '../../router';

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map((route) => 
                <Route element={<route.element />} path={route.path} key={route.path} />
            )}
            <Route path='/*' element={<Navigate to={RouteNames.MAIN} replace />} />
        </Routes>
    );
};

export default AppRouter;
