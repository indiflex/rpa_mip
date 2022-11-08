import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { useReducer, useState } from 'react';
import { Mark } from './Mark';

export const Book = ({ book, saveBook, removeBook }) => {
  const [bookTitle, setBookTitle] = useState(book.title);
  const [isEditing, toggleEditing] = useReducer((pre) => !pre, false);

  const changeBookTitle = () => {
    book.title = bookTitle;
    saveBook(book);
    toggleEditing();
  };

  return (
    <div className='mr-3 w-64 flex-shrink-0 rounded bg-gray-200 p-1.5'>
      <div className='h-[80vh] overflow-y-scroll xs:h-[82vh] sm:h-[84vh] md:h-[86vh] xl:h-[88vh]'>
        <div className='flex items-center justify-between text-xl font-bold text-slate-700'>
          <h3>{book.title}</h3>
          <button
            onClick={toggleEditing}
            className='text-sm text-cyan-400 hover:text-cyan-600'
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>
        {book.marks.length ? (
          book.marks.map((mark) => <Mark key={mark.id} mark={mark} />)
        ) : (
          <>
            <hr className='border-3 mt-0 mb-3 border-white' />
            {(book.id === 0 || isEditing) && (
              <div className='px-1.5'>
                <input
                  type='text'
                  value={bookTitle}
                  onChange={(evt) => setBookTitle(evt.target.value)}
                  className='w-full rounded px-1'
                  placeholder='타이틀...'
                />
                <button
                  onClick={() => removeBook(book.id)}
                  className='float-left text-rose-400 hover:text-rose-600'
                >
                  Remove
                </button>
                <button
                  onClick={changeBookTitle}
                  className='float-right text-cyan-400 hover:text-cyan-600'
                >
                  Save
                </button>
              </div>
            )}
          </>
        )}
      </div>
      <button className='float-right mt-2 rounded-full bg-cyan-400 px-4 py-1 font-medium text-white hover:bg-cyan-500'>
        + Add Mark
      </button>
    </div>
  );
};
