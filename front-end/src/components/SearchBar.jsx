import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { StatusContext } from '../contexts/StatusContext';

const SearchBar = () => {
    const { status } = useContext(StatusContext)
    
    return (
        <div className='header__search'>
            <input type="text" name="search" id="search" placeholder={`Pesquisar ${status}`} className='header__search--searchBar' />
            <div className='header__search--button'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='header__search--buttonIcon' />
            </div>
        </div>
    )
}

export default SearchBar