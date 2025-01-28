import React from 'react';
import AppRoutes from './routes/app.routes.jsx';
import UserProvider from '../src/context/user.context.jsx'; // Reverted path

const App = () => {
    return (
        <>
            <UserProvider>
                <AppRoutes />
            </UserProvider>
        </>
    );
}

export default App;
