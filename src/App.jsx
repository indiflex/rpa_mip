import { Book } from './components/Book';
import { Nav } from './components/Nav';
import { useData } from './hooks/data-context';

function App() {
  const { data, addBook, saveBook, removeBook } = useData();

  return (
    <div className='bg-cyan-100x h-screen  w-full overflow-y-hidden overflow-x-scroll'>
      <header>
        <Nav />
      </header>

      <main>
        <div className='flex items-start p-4'>
          {data.books
            .sort((a, b) => a.id - b.id)
            .map((book) => (
              <Book
                key={book.id}
                book={book}
                saveBook={saveBook}
                removeBook={removeBook}
              />
            ))}
          <div>
            <button
              onClick={addBook}
              className='mr-2 w-64 rounded-sm bg-cyan-400 px-5 py-1 font-medium text-white hover:bg-cyan-500'
            >
              + Add Book
            </button>
          </div>
        </div>
      </main>

      <footer className='text-center text-slate-500'>
        Copyright Indiflex Senior Coding 2022
      </footer>
    </div>
  );
}

export default App;
