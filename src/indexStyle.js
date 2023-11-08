import { css } from "lit-element";

export default css`
  #cajas {
    height: 70px;
    font-size: 40px;
    font-weight: bold;
    background-color: #FF5733;
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
    background-color: #FF9966; 
    color: white;
  }
  #cuadro {
    width: 60rem;
    height: 40rem;
    border-radius: 1rem;
    border-color: black;
  }
  .move-right-button {
    margin-left: 450px;
  }
  .custom-button {
    border-radius: 5px;
    border: #FF5733; 
    background-color: #FF5733; 
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
    background-color: #3366FF; 
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
    font-size: 14px;
    padding: 5px 10px;
  }
`;
