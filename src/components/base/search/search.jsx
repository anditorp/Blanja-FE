import React from 'react';
import './search.css';
import Search from '../../../assets/icon/Search.png';

const SearchBar = ({ value, onChange, className, ...props }) => {
    return (
        <div id='searchcontainer' className={`searchwrapper flex ${className}`}>
            <div className='searchinput'>
                <input
                    type="search"
                    placeholder='Search...'
                    value={value}
                    onChange={onChange}
                    {...props}
                />
            </div>
            <div className='searchright'>
                <div className='searchicon'>
                    <img src={Search} alt="Search icon" />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
