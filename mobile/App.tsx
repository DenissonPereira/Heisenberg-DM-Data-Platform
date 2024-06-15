import { HDMProvider } from './src/contexts/HDMContext';
import Routes from './src/routes/index.routes';

export default function App() {
  return (
    <HDMProvider>
      <Routes />
    </HDMProvider>
  );
}
