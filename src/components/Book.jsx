import { Mark } from './Mark';

export const Book = ({ book }) => {
  return (
    <div className='box-border border-4 mr-2 w-4/12 p-1.5'>
      <div className='font-bold text-xl text-slate-700'>{book.title}</div>
      {book.marks.length ? (
        book.marks.map((mark) => <Mark key={mark.id} mark={mark} />)
      ) : (
        <hr className='border-3 mt-0 mb-3' />
      )}
      <button className='bg-cyan-400 rounded-full px-4 py-1 text-white font-medium hover:bg-cyan-500 float-right'>
        + Add Mark
      </button>
    </div>
  );
};
