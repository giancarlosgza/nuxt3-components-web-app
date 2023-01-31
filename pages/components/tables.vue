<template>
  <div>
    <!-- HEADER -->
    <div class="container mt-3">
      <div class="row mb-3">
        <div class="col-md-12 mb-3">
          <div class="card header-hero header-cards">
            <div class="card-body">
              <p class="overline">Components</p>
              <h1>Tables</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="container mt-3">
      <div class="row mb-3">
        <div class="col-md-12 mb-3">
          <div class="card">
            <div class="card-header">
              <h2 class="title">Table borderless</h2>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover table-borderless">
                  <thead>
                  <tr>
                    <th scope="col">UUID</th>
                    <th scope="col">NOMBRE</th>
                    <th scope="col">TIPO DE PUNTO</th>
                    <th scope="col">FECHA DE CREACIÓN</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>bc43b7c2-30f1-430c-b009-e5d0fc3c36e1</td>
                    <td>JULIO A. ROCA Y ROSETA</td>
                    <td>
                      <div class="badge badge-primary">
                        <i class="material-icons-outlined me-1">&#xef56;</i>
                        Punto de monitoreo
                      </div>
                    </td>
                    <td>30/1/2023, 17:04:19</td>
                  </tr>
                  <tr>
                    <td>618cebcf-e148-4c32-ac70-d446ed82fc5e</td>
                    <td>PARQUE CHEPEVERA</td>
                    <td>
                      <div class="badge badge-success">
                        <i class="material-icons-outlined me-1">&#xea63;</i>
                        Parque
                      </div>
                    </td>
                    <td>26/1/2023, 13:14:02</td>
                  </tr>
                  <tr>
                    <td>9ea061f4-bcaf-494d-a391-4e4d1ec0d3df</td>
                    <td>Av. Gonzalitos y Pico de Orizaba</td>
                    <td>
                      <div class="badge badge-warning">
                        <i class="material-icons-outlined me-1">&#xe565;</i>
                        Puente
                      </div>
                    </td>
                    <td>23/1/2023, 16:29:04</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 mb-3">
          <div class="card">
            <div class="card-header">
              <h2 class="title">Table striped</h2>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover table-striped">
                  <thead>
                  <tr>
                    <th scope="col">UUID</th>
                    <th scope="col">NOMBRE</th>
                    <th scope="col">TIPO DE PUNTO</th>
                    <th scope="col">FECHA DE CREACIÓN</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>bc43b7c2-30f1-430c-b009-e5d0fc3c36e1</td>
                    <td>JULIO A. ROCA Y ROSETA</td>
                    <td>
                      <div class="badge badge-primary">
                        <i class="material-icons-outlined me-1">&#xef56;</i>
                        Punto de monitoreo
                      </div>
                    </td>
                    <td>30/1/2023, 17:04:19</td>
                  </tr>
                  <tr>
                    <td>618cebcf-e148-4c32-ac70-d446ed82fc5e</td>
                    <td>PARQUE CHEPEVERA</td>
                    <td>
                      <div class="badge badge-success">
                        <i class="material-icons-outlined me-1">&#xea63;</i>
                        Parque
                      </div>
                    </td>
                    <td>26/1/2023, 13:14:02</td>
                  </tr>
                  <tr>
                    <td>9ea061f4-bcaf-494d-a391-4e4d1ec0d3df</td>
                    <td>Av. Gonzalitos y Pico de Orizaba</td>
                    <td>
                      <div class="badge badge-warning">
                        <i class="material-icons-outlined me-1">&#xe565;</i>
                        Puente
                      </div>
                    </td>
                    <td>23/1/2023, 16:29:04</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ComponentsTables"
}
</script>
