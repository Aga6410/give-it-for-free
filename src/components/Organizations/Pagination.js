import React, {useState, useEffect} from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    const tempTab = [];
    for (let i = 0; i < Math.ceil(totalPosts / postsPerPage); i++) {
      tempTab.push(i);
    }
    console.log({totalPosts,tempTab, postsPerPage});
    setPageNumbers(tempTab);
  }, [totalPosts, postsPerPage]) 


  return (
    (totalPosts > postsPerPage) && <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={(e) => {
              e.preventDefault();
              paginate(number)}} 
              href="foo" 
              className='page-link'>
              {number+1}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

