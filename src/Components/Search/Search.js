import React from 'react';
import Input from "@material-ui/core/Input";
import './../../App.css'

const Search = ({filterUpdate}) => {

    const inputValue = React.createRef();

    const search = () => {
        const val = inputValue.current.value;
        filterUpdate(val)
    };

    return (
        <div>
            <form className={'card'}>
                <Input inputRef={inputValue} onChange={search} placeholder={'filter name...'}/>
            </form>
        </div>
    );
};

export default Search;
