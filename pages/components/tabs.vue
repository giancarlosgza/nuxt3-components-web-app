<template>
  <div>
    <!-- HEADER -->
    <div class="container mt-3">
      <div class="row mb-3">
        <div class="col-md-12 mb-3">
          <div class="card header-hero header-sidebar">
            <div class="card-body">
              <p class="overline">Components</p>
              <h1>Tabs</h1>
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
              <h2 class="title">Tabs</h2>
            </div>
            <div class="card-body">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ComponentsTabs"
}
</script>
