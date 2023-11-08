import { css } from "lit-element";

export default css`
  #cajas {
    height: 70px;
    font-size: 40px;
    font-weight: bold;
    background-color: #2ec6ff;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    color: white;
  }
  #btnFiltrar {
    width: 700px;
  }
  #pt {
    padding-top: 210px;
  }
  #cajas2 {
    width: 200px;
    height: 70px;
    font-size: 15px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #a5ddf2;
    color: white;
  }
  #cuadro {
    width: 60rem;
    height: 40rem;
    border-radius: 1rem;
    border-color: black;
  }
  .move-right-button {
  margin-left: 450px; /* Puedes ajustar este valor según sea necesario */
}
.custom-button {
  border-radius: 5px;
  border: #343A40;
  background-color: #343A40;
  color: white;
  padding: 5px 10px;
  font-size: 14px;
}



 /* Estilos para el modal */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #f9f9f9;
  margin: 5% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 40%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.input-group {
  width: 100%;
  margin-top: 10px;
}

.form-control {
  width: calc(100% - 20px);
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-top: 5px;
}

.btn-primary {
  width: 100px;
  background-color: #4CAF50;
  border-color: #4CAF50;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  margin-top: 10px;
}
.custom-button {
      font-size: 14px; /* Ajusta el tamaño de la fuente del botón */
      padding: 5px 10px; /* Ajusta el relleno del botón para cambiar su tamaño */
    }
  
`;
