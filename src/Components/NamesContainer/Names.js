import React from 'react';
import './../../App.css'
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Chip from "@material-ui/core/Chip";

const Names = ({names, setNames, filterText, addFavorite}) => {

    const inputNameRef = React.createRef();

    const addName = (e) => {
        e.preventDefault();
        const name = document.getElementById('listSelect').value;

        const inputName = inputNameRef.current.value;
        if (inputName === '') {
            return alert('You not write name')
        }


        const randomNum = Math.random() * 10;
        const newName = {
            id: randomNum,
            name: inputName,
            sex: name
        };
        console.log(randomNum, newName)
        setNames([...names, newName])
        inputNameRef.current.value = ''
    };

    return (
        <div>
            <form noValidate autoComplete="off" className={'form'}>
                <Input inputRef={inputNameRef} placeholder={'add name...'}/>
                <select  name="listSelect" id={'listSelect'} className="ml2">
                    {/*<option de="">--Please choose an option--</option>*/}
                    <option value="boy">boy</option>
                    <option value="girl">girl</option>
                </select>
                <div className="ml2">
                    <Button onClick={addName} variant="contained" color="primary"> add </Button>
                </div>
            </form>

            <div className={'container'}>
                {names
                    .filter(name => {
                        return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
                    })
                    .map(name => {
                        return (
                            <div key={name.id} className={`${name.sex} card`}>
                                <div>
                                    <Chip variant={'outlined'} label={name.name} onClick={() => {
                                        addFavorite(name.name)
                                    }}/>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    );
};

export default Names;
