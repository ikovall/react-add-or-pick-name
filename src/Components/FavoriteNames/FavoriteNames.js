import React from 'react';
import './../../App.css'
import Chip from "@material-ui/core/Chip";

const FavoriteNames = ({favoriteName, deleteFavorite}) => {
    const namesList = favoriteName.map(id => {
        return (
            <span key={id.id}>
                <Chip className={'favorite'} color="primary" onClick={() => deleteFavorite(id.id)}
                      label={id.name} variant="outlined"/>
    </span>
        )
    });

    return (
        <div className={'mb2 '}>
            {namesList.length === 0 ?
                <Chip color="primary" variant="outlined" label={'favorite name'}/>
                : <span>{namesList}</span>
            }
        </div>
    );
};

export default FavoriteNames;
