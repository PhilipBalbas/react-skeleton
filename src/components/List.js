import React from 'react';
import ListItem from './ListItem';

var ingredients = [{'id': 1, 'text': 'ham'}, {'id':2, 'text':'cheese'}, {'id':3, 'text':'potato'}];

class List extends React.Component {
    render() {
        var listItems = ingredients.map((item) => {
            return <ListItem key={item.id} ingredient={item.text} />
        });
        
        return (
            <ul>{listItems}</ul>
        )
    }
}

export default List;