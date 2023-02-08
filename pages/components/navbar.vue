<template>
  <div>
    <TheHeader back-route="/components"
               category="Components"
               title="Navbar"/>

    <!-- CONTENT -->
    <div class="container">
      <div class="row mb-3">
        <div class="col-md-12 mb-3">
          <h2>Type</h2>
        </div>
        <div class="col-md-12 mb-3">
          <div class="card">
            <div class="card-body">
              <nav class="navbar navbar-expand-lg">
                <div class="container">
                  <NuxtLink to="/"
                            class="navbar-brand">Nuxt 3
                  </NuxtLink>
                  <button class="navbar-toggler"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarNav"
                          aria-controls="navbarNav"
                          aria-expanded="false"
                          aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto">
                      <li class="nav-item">
                        <a class="nav-link" aria-current="page">
                          Dashboard
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link">
                          Components
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link">
                          Templates
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link">
                          Design System
                        </a>
                      </li>
                    </ul>
                    <ul class="navbar-nav ms-auto">
                      <li class="nav-item">
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
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentsNavbar"
}
</script>
