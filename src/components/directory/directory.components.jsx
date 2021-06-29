import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';

class Directory extends React.Component {

    constructor(){
        super();

        this.state = {
            sections: [{
                title: 'sign in',
                imageUrl: 'https://i.ibb.co/chSDM1z/scooter8.jpg',
                size: 'large',
                id: 1
            },
            {
                title: 'sign up',
                imageUrl: 'https://i.ibb.co/tbHBLbg/scooter4.jpg',
                size: 'large',
                id: 2  
            },
            {
                title: 'contact us',
                imageUrl: 'https://i.ibb.co/LRTttrm/contact.jpg',
                id: 3
            }] 
        }
    }

    render(){
        return (
            <div className='directory-menu'>
               {
                   this.state.sections.map(({title, imageUrl, id, size}) => (
                       <MenuItem key = {id} title = {title} imageUrl = {imageUrl} size = {size}/>
                   ))} 
            </div>
        );
    }
}

export default Directory;