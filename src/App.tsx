import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";
import { AdminRoom } from './pages/AdminRoom';
 
import { AuthContextProvider } from './contexts/AuthContext'
import { ThemeContextProvider } from './contexts/ThemeContext';

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />               
            <Route path="/rooms/new" exact component={NewRoom} />
            <Route path="/rooms/:id" exact component={Room} />
            <Route path="/admin/rooms/:id" exact component={AdminRoom} />
          </Switch>
        </AuthContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

// exact: indica que a rota será acessada somente por aquele caminho exato

// switch: se uma rota for achada/satisfeita, o código irá parar de procurar por outras que satisfaçam aquele mesmo endereço

export default App;