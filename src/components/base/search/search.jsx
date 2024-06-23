import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './search.css';
import SearchIcon from '../../../assets/icon/Search.png';

const SearchBar = ({ className, ...props }) => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.trim() === '') {
            navigate('/search');
        }
    };

    const handleSearch = () => {
        if (query.trim() !== '') {
            navigate(`/search?query=${query}`);
        } else {
            navigate('/search');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div id='searchcontainer' className={`searchwrapper flex ${className}`}>
            <div className='searchinput'>
                <input
                    type="search"
                    placeholder='Search...'
                    value={query}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    {...props}
                />
            </div>
            <div className='searchright' onClick={handleSearch}>
                <div className='searchicon'>
                    <img src={SearchIcon} alt="Search icon" />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
