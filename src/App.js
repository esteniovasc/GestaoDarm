import AppRoutes from './Route';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId="329981701372-ei15jv725o4430isbgh8k1mkmtv6fb5d.apps.googleusercontent.com">
      <div>
        <AppRoutes />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;