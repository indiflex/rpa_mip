import { Mark } from './Mark';

export const Book = () => {
  return (
    <div className='box-border border-4 mr-2 w-4/12 p-1'>
      <div className='font-bold text-xl'>Title</div>
      <Mark />
      <button>+ Add</button>
    </div>
  );
};
