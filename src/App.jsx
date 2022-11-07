import { useState } from 'react';
import { List } from './components/Mark';
import { Nav } from './components/Nav';

const SampleData = {
  books: [
    { id: 1, title: 'Private Book' },
    { id: 2, title: 'React Study' },
  ],
};

function App() {
  const [data, setData] = useState(SampleData);

  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <List />
      </main>
      {/* <footer>Copyright Indiflex Senior Coding</footer> */}
    </div>
  );
}

export default App;
