import { LitElement, html } from "lit-element";
import stylesScss from "./indexStyle";
import { Router } from "@vaadin/router";

export class Home1 extends LitElement {
  static get properties() {
    return {
      isModalOpen: { type: Boolean },
      tableData: { type: Array },
    };
  }

  constructor() {
    super();
    this.isModalOpen = false;
    this.tableData = JSON.parse(localStorage.getItem('savedData')) || [];
  }

  usuarios() {
    Router.go("/usuarios");
  }

  campanas() {
    Router.go("/campanas");
  }

  equipos() {
    Router.go("/equipos");
  }

  login() {
    Router.go("/");
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  static get styles() {
    return [stylesScss];
  }

  saveUser(e) {
    e.preventDefault();
    const nombreInput = this.shadowRoot.querySelector("#nombreInput");
    const apellidoInput = this.shadowRoot.querySelector("#apellidoInput");
    const campaignInput = this.shadowRoot.querySelector("#campaignInput");
    const telefonoInput = this.shadowRoot.querySelector("#telefonoInput");

    if (nombreInput && apellidoInput && campaignInput && telefonoInput) {
      const nombre = nombreInput.value;
      const apellido = apellidoInput.value;
      const campaign = campaignInput.value;
      const telefono = telefonoInput.value;

      const newUser = {
        nombre: nombre,
        apellido: apellido,
        campaign: campaign,
        telefono: telefono
      };

      this.tableData.push(newUser);
      localStorage.setItem('savedData', JSON.stringify(this.tableData));
      this.requestUpdate();
      this.closeModal();
    } else {
      console.error("Elemento no encontrado. Por favor, verifica los IDs de los campos de entrada.");
    }
  }

  searchUser() {
    const numeroInput = this.shadowRoot.querySelector("#numero");
    const nombreInput = this.shadowRoot.querySelector("#nombre");

    if (numeroInput && nombreInput) {
      const numero = numeroInput.value;
      const nombre = nombreInput.value;

      const foundUsers = this.tableData.filter(user => user.nombre === nombre && user.telefono.toString() === numero);

      if (foundUsers.length > 0) {
        let message = "Usuarios encontrados:\n";
        foundUsers.forEach(user => {
          message += `Nombre: ${user.nombre}, Apellido: ${user.apellido}, Campaña: ${user.campaign}\n`;
        });
        alert(message);
      } else {
        console.log("Usuario no encontrado en la tabla");
        alert("Usuario no encontrado");
      }
    } else {
      alert("Elemento no encontrado. Por favor, verifica los IDs de los campos de entrada.");
    }
  }


  showUserModal(user) {
    this.isModalOpen = true;
    const modalNombreInput = this.shadowRoot.querySelector("#modalNombreInput");
    const modalNumeroInput = this.shadowRoot.querySelector("#modalNumeroInput");
    if (modalNombreInput && modalNumeroInput) {
      modalNombreInput.value = user.nombre;
      modalNumeroInput.value = user.telefono;
    } else {
      alert("Elemento no encontrado. Por favor, verifica los IDs de los campos de entrada del modal.");
    }
  }



  render() {
    return html`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" 
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
        crossorigin="anonymous">
      <div class="d-flex">
        <div class="pt-2 d-flex justify-content-left">
          <div
            class="d-flex flex-shrink-0 p-3 ml-5"
            style="width: 250px; background-color: rgb(201, 205, 207); border-radius: 1rem; height: 36rem;"
          >
            <hr />
            <ul class="nav nav-pills flex-column mb-auto" style="width: 25rem;">
              <li class="nav-item">
                <a
                  href="#" @click=${(e) => this.usuarios()}
                  class="nav-link active bg-light pt-2 font-weight-bold"
                  style="color: blue; border-radius: 10px; height: 45px; font-size: 18px;"
                  aria-current="page"
                >
                  <i class="fas fa-user me-2"></i> Usuarios
                </a>
              </li>
              <li class="nav-item pt-3">
                <a
                  href="#"
                  @click=${(e) => this.campanas()}
                  class="nav-link active bg-light pt-2 font-weight-bold"
                  style="color: blue; border-radius: 10px; height: 45px; font-size: 18px;"
                  aria-current="page"
                >
                  <i class="fas fa-building me-2"></i>Campañas
                </a>
              </li>
              <li class="nav-item pt-3">
                <a
                  href="#"
                  @click=${(e) => this.equipos()}
                  class="nav-link active bg-light pt-2 font-weight-bold"
                  style="color: blue; border-radius: 10px; height: 45px; font-size: 18px;"
                  aria-current="page"
                >
                    <i class="fas fa-users me-2"></i>   Equipos
                </a>
              </li>
            </ul>
            <hr />
          </div>
        </div>
        &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp
        <div class="pt-2">
          <div class="d-flex justify-content-left">
            &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp
            <div class="row d-flex">
              <div class="row g-0 text-center pt-3">
                <div id="cajas" class="col-sm-6 col-md-4">${this.tableData.length}</div>
<div id="cajas2" class="col-md-5 pt-2">Usuarios Conectados</div>
              </div>
              &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp
              <div class="row g-0 text-center pt-3">
                <div id="cajas" class="col-sm-6 col-md-4">0</div>
                <div id="cajas2" class="col-md-5 pt-2">Usuarios Ausentes</div>
              </div>
              &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp
              <div class="row g-0 text-center pt-3">
                <div id="cajas" class="col-sm-6 col-md-4">${this.tableData.length}</div>
                <div id="cajas2" class="col-md-5 pt-2">Campañas Activas</div>
              </div>
              &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp
              <div class="row g-0 pt-3">
                <div id="cajas" class="col-sm-6 col-md-4">0</div>
                <div id="cajas2" class="col-md-5 pt-2">Llamadas Realizadas</div>
              </div>
            </div>
          </div>
          <br />
          <div id="cuadro" class="container border border-dark ml-2">
            <div class="d-flex p-3">
              <div
                class="border border-dark"
                style="width: 14rem; height: 27rem; border-radius: 1rem;"
              >
                <div>
                  <div
                    class="d-flex flex-shrink-0 p-3"
                    style="width: 222px; background-color: rgb(201, 205, 207); border-top-left-radius: 1rem; border-top-right-radius: 1rem; height: 10rem;"
                  >
                    <hr />
                    <ul class="nav nav-pills flex-column mb-auto" style="width: 25rem;">
                      <div class="input-group mt-1" style="width: 12rem;">
                        <input
                          id="numero"
                          class="form-control font-weight-bold"
                          type="number"
                          placeholder="Número"
                        />
                      </div>
                      <div class="input-group mt-3" style="width: 12rem;">
                        <input
                          id="nombre"
                          class="form-control font-weight-bold"
                          type="text"
                          placeholder="Nombre"
                        />
                      </div>
                      <div class="d-flex justify-content-center">
                        <button
                            @click=${this.searchUser}
                            class="mt-2 text-center"
                            style="width: 5rem; border-radius: 5px; border: #343A40; background-color: #343A40; color: white;"
                          >
                          Buscar
                        </button>


                      </div>
                    </ul>
                    <hr />
                  </div>
                </div>
              </div>
              <div>
                <div class="d-flex justify-content-around">
                  <div class="ml-5 d-flex justify-content-around">
                    <div class="row g-0 text-center pt-1">
                      <button
                        @click=${this.openModal}
                        class="mt-1 text-center move-right-button"
                        style="width: 70px; height: 40px; border-radius: 5px; border: #343A40; background-color: #343A40; color: white;"
                      >
                        Nuevo
                      </button>
                    </div>
                  </div>
                </div>
                <div id="modalNuevoUsuario" style="display: ${this.isModalOpen ? 'block' : 'none'}; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; padding: 20px; border-radius: 10px; z-index: 9999;">
      <h2>Registrar Nuevo Usuario</h2>
      <form>
        <label for="nombreInput">Nombre:</label>
        <input type="text" id="nombreInput" name="nombreInput"><br><br>
        <label for="apellidoInput">Apellido:</label>
        <input type="text" id="apellidoInput" name="apellidoInput"><br><br>
        <label for="telefonoInput">Teléfono:</label>
        <input type="number" id="telefonoInput" name="telefonoInput"><br><br>
        <label for="campaignInput">Campaña:</label>
        <input type="text" id="campaignInput" name="campaignInput"><br><br>

        <button @click=${this.saveUser} style="padding: 10px; border: none; background-color: #4CAF50; color: white; border-radius: 5px; cursor: pointer;">
          Registrar
        </button>
        <button @click=${this.closeModal} style="padding: 10px; border: none; background-color: #555555; color: white; border-radius: 5px; cursor: pointer; margin-left: 10px;">
          Cerrar
        </button>
      </form>
    </div>
                <div class="container border border-dark mt-4 ml-4" style="border-radius: 1rem; width: 35rem; height: 21rem; margin-bottom: 35px;">
     <table class="table table-bordered">
        <thead>
          <tr>
            <th style="width: 10px">#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Campaña</th>
          </tr>
        </thead>
        <tbody>
          ${this.tableData.map((user, index) => html`
            <tr>
              <td>${index + 1}</td>
              <td>${user.nombre}</td>
              <td>${user.apellido}</td>
              <td>${user.campaign}</td>
            </tr>
          `)}
        </tbody>
      </table>
      ${this.isModalOpen
        ? html`
          <div id="userModal" class="modal">
            <div class="modal-content">
              <span @click=${this.closeModal} class="close">&times;</span>
              <div>
                <label for="modalNumeroInput">Número:</label>
                <input id="modalNumeroInput" type="text" disabled />
              </div>
              <div>
                <label for="modalNombreInput">Nombre:</label>
                <input id="modalNombreInput" type="text" disabled />
              </div>
            </div>
          </div>
        `
        : ""}

    `;
  }
}

customElements.define("cmp-home1", Home1);
