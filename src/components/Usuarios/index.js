import React from 'react';
import { connect } from 'react-redux';
import * as usuariosActions from '../../actions/usuariosActions';

class Usuarios extends React.Component {

  componentDidMount() {
    this.props.traerTodos();
  }

  agregarFilas = () => (
    this.props.usuarios.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ))
  );

  render() {
    return (
      <div>
        <table className="tabla">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Enlace</th>
            </tr>
          </thead>
  
          <tbody>
            {this.agregarFilas()}
          </tbody>
        </table>
      </div>
  
    );
  }
}

const mapStateToProps = (state) => {
    return state.usuariosReducer;
};

export default connect(mapStateToProps, usuariosActions)(Usuarios);
