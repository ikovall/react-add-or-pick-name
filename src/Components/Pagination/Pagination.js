import React from 'react';

const Pagination = ({totalPages, namesPerPage, pagination}) => {

    const pageNumber = [];

    for (let i = 1; i < Math.ceil(totalPages / namesPerPage); i++) {
        pageNumber.push(i)
    }
    return (
        <nav>
            <ul className={'nav'}>
                {pageNumber.map(number => (
                    <li>
                        <a onClick={() => pagination(number)} href="#">{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
