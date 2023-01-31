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
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
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
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
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
