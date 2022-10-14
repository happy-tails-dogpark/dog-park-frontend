import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import UserProvider from '../state/UserContext';
import Auth from './Auth/Auth';
import AuthForm from './Auth/AuthForm';
import Credits from './Credits/Credits';
import Layout from './page/Layout';
import ParkList from './lists/ParkList';

export default function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="auth" element={<Auth />} >
              <Route index element={<AuthForm mode="signin" />} />
              <Route path="signup" element={<AuthForm mode="signup" />} />
            </Route>
            <Route path="search" element={<ParkList />} />
          
            <Route path="credits" element={<Credits />} />

          </Route>
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </UserProvider>
    </Router>
  );
}
