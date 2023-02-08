<template>
  <div>
    <TheHeader back-route="/components"
               category="Components"
               title="Dropdowns"/>

    <!-- CONTENT -->
    <div class="container">
      <div class="row mb-3">
        <div class="col-md-12 mb-3">
          <h2>Types</h2>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card">
            <div class="card-body d-flex">
              <div class="dropdown">
                <button class="btn btn-default dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                  Username
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <button class="dropdown-item">Action</button>
                  </li>
                  <li>
                    <button class="dropdown-item">Another action</button>
                  </li>
                  <li>
                    <button class="dropdown-item">Something else here</button>
                  </li>
                </ul>
              </div>
              <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                  Options
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <button class="dropdown-item">Action</button>
                  </li>
                  <li>
                    <button class="dropdown-item">Another action</button>
                  </li>
                  <li>
                    <button class="dropdown-item">Something else here</button>
                  </li>
                </ul>
              </div>
              <div class="dropdown">
                <button class="btn btn-default-outline dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                  Learn more
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <button class="dropdown-item">Action</button>
                  </li>
                  <li>
                    <button class="dropdown-item">Another action</button>
                  </li>
                  <li>
                    <button class="dropdown-item">Something else here</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card">
            <div class="card-body d-flex">
              <div class="dropdown">
                <button class="btn btn-default-outline"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                  <i class="material-icons-outlined">&#xe5d3;</i>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <button class="dropdown-item">Action</button>
                  </li>
                  <li>
                    <button class="dropdown-item">Another action</button>
                  </li>
                  <li>
                    <button class="dropdown-item">Something else here</button>
                  </li>
                </ul>
              </div>
              <div class="dropdown">
                <button class="btn btn-default btn-icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                  <i class="material-icons-outlined">&#xe5d4;</i>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <button class="dropdown-item">Action</button>
                  </li>
                  <li>
                    <button class="dropdown-item">Another action</button>
                  </li>
                  <li>
                    <button class="dropdown-item">Something else here</button>
                  </li>
                </ul>
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
  name: "ComponentsDropdowns"
}
</script>
