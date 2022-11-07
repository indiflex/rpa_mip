import { useState } from 'react';
import { Book } from './components/Book';
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
      <main className='container flex justify-start px-6 mx-auto mt-5 space-y-0'>
        <Book />
        <Book />
        <div>
          <button>+ Book</button>
        </div>
      </main>
      {/* <footer>Copyright Indiflex Senior Coding</footer> */}
    </div>
  );
}

export default App;
