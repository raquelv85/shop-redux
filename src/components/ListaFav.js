import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteFav } from '../actions';
import { deleteItems } from '../utils/delete_items'

class ListaFav extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  _delete(id){
    let  shopFav = this.props.ListaFav;
    shopFav = deleteItems(id, shopFav);
    this.props.deleteFav(shopFav)
  }

  render() { 
    return ( 
    <div className="container">
        <h1 className="title">Favoritos</h1>
        <ul className="list">
        {
          this.props.ListaFav.map((item, index) =>{
              return <li key={index} className= "item">
              <p>{item.nombre}</p>
              <p><FontAwesomeIcon onClick= {this._delete.bind(this, item.id)} icon={faTimes}/></p>
           </li>
          })
        }
      </ul>
    </div> 
    );
  }
}
 
function mapStateToProps (state) {
  return {
    ListaFav : state.fav.favoritos
  } 
}

function mapDispatchToProps (dispatch) {

  return {
    deleteFav: (item) => dispatch(deleteFav(item))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListaFav)