import React from 'react';
// import Comments from './AddComments'

const Pagination = ({postsPerPage, totalPosts, setCurreatPage, }) => {

    // Change page
    const paginate = (pageNumber) => setCurreatPage(pageNumber);

    const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            pageNumbers.push(i);
        }

    return (
        <div>
            <nav className='pagination-sm'>
                <ul className="pagination">
                    {pageNumbers.map(number =>(
                        <li key={number} className="page-item">
                            <a 
                            onClick={() => paginate(number)} 
                            href="!#" 
                            className = "page-link"
                            >
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
                <br />
            </nav>
            {/* {userId ? <Comments userId={userId}/> : null} */}
        </div>
    )
}



export default Pagination;