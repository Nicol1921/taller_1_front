import { LitElement, html } from "lit-element";
import stylesScss from "./indexStyle";
import { Router } from "@vaadin/router";
import { UserService } from "./routes";

export class Home2 extends LitElement {
  static get properties() {
    return {
      campnas: { type: Array },
      campanasencontrado: { type: Object },
    };
  }

  constructor() {
    super();
    this.campanas = UserService.campanas;
    this.campanasencontrado = null;
    this.tableData = JSON.parse(localStorage.getItem('tableData')) || [];
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

  showEquipoDetails(equip) {
    this.campanasencontrado = equip;
  }

  closeEquipoDetails() {
    this.campanasencontrado = null;
  }

  static get styles() {
    return [stylesScss];
  }

  openModal() {
    const modal = this.shadowRoot.getElementById('myModal');
    modal.style.display = 'block';
  }

  closeModal() {
    const modal = this.shadowRoot.getElementById('myModal');
    modal.style.display = 'none';
  }

  registrarCompania() {
    const nombreElement = this.shadowRoot.getElementById('nombre');
    const equipoElement = this.shadowRoot.getElementById('equipo');
    const campanaElement = this.shadowRoot.getElementById('campana');

    if (nombreElement && equipoElement && campanaElement) {
      const nombre = nombreElement.value;
      const equipo = equipoElement.value;
      const campana = campanaElement.value;

      this.tableData.push({ nombre, equipo, campana, activa: true });
      this.saveData();
      this.requestUpdate();
      this.closeModal();
    } else {
      console.error('Los elementos no se han encontrado en el DOM.');
    }
  }

  toggleCampaignStatus(index) {
    this.tableData[index].activa = !this.tableData[index].activa;
    this.saveData();
    this.requestUpdate();
  }

  saveData() {
    localStorage.setItem('tableData', JSON.stringify(this.tableData));
  }


  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />

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
                  href="#"href="#" @click=${(e) => this.usuarios()}
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
                  style="color: grey; border-radius: 10px; height: 45px; font-size: 18px;"
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
                <div id="cajas" class="col-sm-6 col-md-4">${this.tableData.length}
                </div>
                <div id="cajas2" class="col-md-5 pt-2">Campañas Activas</div>
              </div>
            </div>
          </div>
          <br />

          <div id="cuadro" class="container border border-dark ml-2">
            <div class="d-flex p-3">
            
              <div
                  class="container border border-dark mt-4 ml-4"
                  style="border-radius: 1rem; width: 15rem; height: 21rem;"
                >
                  <!-- Aquí se muestra la sección de detalles -->
                  <h3>Detalles del usuario seleccionado:</h3>
                  ${this.campanasencontrado
        ? html`
                        <p><strong>Nombre:</strong> ${this.campanasencontrado.nombre}</p>
                        <p><strong>Equipo:</strong> ${this.campanasencontrado.equipo}</p>
                        <p><strong>Campaña:</strong> ${this.campanasencontrado.campana}</p>
                        <p><strong>Estado:</strong> ${this.campanasencontrado.activa ? 'Activa' : 'Inactiva'}</p>
                      `
        : html`
                        <p>Selecciona un usuario para ver sus detalles.</p>
                      `}
                </div>
                  <div
                    class="d-flex flex-shrink-0 p-3"
                    style="width: 3px; border-top-left-radius: 1rem; border-top-right-radius: 1rem; height: 5rem; "
                  >
                    <hr />
                    
              </div>
              <div>
                <div class="d-flex justify-content-around">
                  <div class="ml-5 d-flex justify-content-around">
                    <div class="row g-0 text-center pt-1">
                      <button
                        id="btnFiltrar"
                        class="col-sm-6 col-md-4 border border-secondary font-weight-bold"
                        style="font-size: 19px; height: 68px; border-radius: 7px;"
                      >
                        Filtrar por campaña</button
                      >&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                      <button
                        @click=${this.openModal}
                        class="mt-1 text-center"
                        style="width: 70px; height: 40px; border-radius: 5px; border: #343A40; background-color: #343A40; color: white;"
                      >
                        Nuevo
                      </button>
                    </div>
                  </div>
                </div>
                <div id="myModal" class="modal">
                  <div class="modal-content">
                    <span class="close" @click="${this.closeModal}">&times;</span>
                    <input id="nombre" type="text" placeholder="Nombre" />
                    <input id="equipo" type="text" placeholder="Equipo" />
                    <input id="campana" type="text" placeholder="Campaña" />
                    <button @click="${this.registrarCompania}">Registrar Compañía</button>
                  </div>
                </div>

                <div
                  class="container border border-dark mt-4 ml-4"
                  style="border-radius: 1rem; width: 40rem; height: 21rem;"
                >
                 <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>Nombre</th>
                      <th>Equipo</th>
                      <th>Campaña</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${this.tableData.map((user, index) => html`
                      <tr>
                        <td>${index + 1}</td>
                        <td>${user.nombre}</td>
                        <td>${user.equipo}</td>
                        <td>${user.campana}</td>
                        <td>${user.activa ? 'Activa' : 'Inactiva'}</td>
                        <td style="display: flex; gap: 5px;">
                          <button @click=${() => this.toggleCampaignStatus(index)} class="btn btn-sm btn-primary custom-button">
                            ${user.activa ? 'Desactivar' : 'Activar'} 
                          </button>
                          <button @click=${() => this.showEquipoDetails(user)} class="btn btn-sm  custom-button">
                            Ver Detalles
                          </button>
                        </td>
                      </tr>
                    `)}
                  </tbody>
                </table>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("cmp-home2", Home2);