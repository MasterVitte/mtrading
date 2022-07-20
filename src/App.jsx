import './App.css';
import {MainLayout} from "./layouts/MainLayout";
import {ListItems} from "./components/ListItems";

function App() {
  const data = require('./mocks/mock.json')
  return <MainLayout title="Copy the best masters">
    <ListItems data={data} />
  </MainLayout>
}

export default App;
