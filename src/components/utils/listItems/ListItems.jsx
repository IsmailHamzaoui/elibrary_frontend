import React, {Component} from 'react';
import style from './ListItem.module.css'

 class ListItems extends Component{

     render() {
         return <div className={style.ListItem}>
             {this.props.children}
         </div>
     }


};

export default ListItems;