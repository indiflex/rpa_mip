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
    { id: 2, title: 'React Study2', marks: [] },
  ],
};

function App() {
  const [data, setData] = useState(SampleData);

  const addBook = () => {
    setData({
      ...data,
      books: [...data.books, { id: 0, title: '', marks: [] }],
    });
  };

  // 수정(등록포함)
  const saveBook = (book) => {
    // 1. 현재 수정중인 book을 제외한 book 필터링
    const books = data.books.filter((_book) => _book.id !== book.id);

    // 2. 만약 id=0인 등록 상태라면 기존 id 가장 큰 값에서 +1 해서 신규 id 생성
    if (!book.id) {
      book.id = Math.max(...data.books.map((_book) => _book.id)) + 1;
    }

    // 3. 새롭게 데이터를 만들 때, 현재 수정중인것을 제외한 books에,
    // 현재 수정중인 book 추가해서 새로운 books 생성
    setData({
      ...data,
      books: [...books, book],
    });
  };

  const removeBook = (bookId) => {
    setData({
      ...data,
      books: [...data.books.filter((_book) => _book.id !== bookId)],
    });
  };

  return (
    <div className='bg-cyan-100x h-screen  w-full overflow-y-hidden overflow-x-scroll'>
      <header>
        <Nav />
      </header>

      <main>
        <div className='flex items-start p-4'>
          {data.books.map((book) => (
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
      {/* <footer>Copyright Indiflex Senior Coding</footer> */}
    </div>
  );
}

export default App;
