import { createContext, useContext, useEffect, useState } from 'react';

const SKEY = 'mipdata';

const SampleData = {
  books: [
    {
      id: 1,
      title: 'My Private Book',
      marks: [],
    },
  ],
};

const reducer = (data, action) => {};

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(SampleData);

  // Add Book 버튼 클릭시 호출되며, id=0인 book을 하나 끼워 넣는다!
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

  useEffect(() => {
    const mipData = localStorage.getItem(SKEY);
    console.log(mipData);
    if (mipData) setData(JSON.parse(mipData));
  }, []);

  return (
    <DataContext.Provider value={{ data, addBook, saveBook, removeBook }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
