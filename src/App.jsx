import { useState } from 'react';
import { Book } from './components/Book';
import { Nav } from './components/Nav';

const SampleData = {
  books: [
    {
      id: 1,
      title: 'Private Book',
      marks: [
        {
          id: 1,
          title: 'Mark Title...',
          image: 'https://tailwindcss.com/api/og?path=/docs/height',
          description: 'mark description',
        },
        {
          id: 2,
          title: 'Mark Title2...',
          image: 'https://tailwindcss.com/api/og?path=/docs/height',
          description: 'mark description2',
        },
      ],
    },
    { id: 2, title: 'React Study', marks: [] },
    { id: 3, title: 'React Study', marks: [] },
    { id: 4, title: 'React Study', marks: [] },
  ],
};

function App() {
  const [data, setData] = useState(SampleData);

  return (
    <div className='h-screen w-full overflow-y-hidden overflow-x-scroll'>
      <header>
        <Nav />
      </header>
      <main className='container mt-5 w-screen min-w-full flex-nowrap space-y-0 overflow-scroll px-6 md:flex'>
        {data.books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
        <div>
          <button className='rounded-sm bg-cyan-400 px-5 py-1 font-medium text-white hover:bg-cyan-500'>
            + Add Book
          </button>
        </div>
      </main>
      {/* <footer>Copyright Indiflex Senior Coding</footer> */}
    </div>
  );
}

export default App;
