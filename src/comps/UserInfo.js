import React from 'react';

export default function UserInfo({name, email, favoriteAnimal}) {
    return (
        <div class='user'>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Favorite Animal: {favoriteAnimal}</p>
        </div>
    )
}