<template>
  <div>
    <TheHeader back-route="/components"
               category="Components"
               title="Icons & Texts"/>

    <!-- CONTENT -->
    <div class="container">
      <div class="row mb-3">
        <div class="col-md-12 mb-3">
          <h2>Icon wrap</h2>
        </div>
        <div class="col-md-12 mb-3">
          <div class="card card-no-border">
            <div class="card-body d-flex justify-content-between">
              <i class="material-icons-outlined icon-wrap">&#xe8b8;</i>
              <i class="material-icons-outlined icon-wrap icon-wrap-primary">&#xe5d2;</i>
              <i class="material-icons-outlined icon-wrap icon-wrap-secondary">&#xe853;</i>
              <i class="material-icons-outlined icon-wrap icon-wrap-success">&#xe145;</i>
              <i class="material-icons-outlined icon-wrap icon-wrap-default">&#xe3c9;</i>
              <i class="material-icons-outlined icon-wrap icon-wrap-info">&#xe5c3;</i>
              <div class="align-self-center">
                <i class="material-icons-outlined icon-wrap icon-wrap-sm icon-wrap-primary">&#xe87a;</i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-12 mb-3">
          <h2>Texts</h2>
        </div>
        <div class="col-md-12 mb-3">
          <div class="card card-no-border">
            <div class="card-body d-flex justify-content-between">
              <h3 class="text-primary fw-bold my-3">Text primary</h3>
              <h3 class="text-secondary fw-bold my-3">Text secondary</h3>
              <h3 class="text-muted fw-bold my-3">Text muted</h3>
              <h3 class="text-success fw-bold my-3">Text success</h3>
              <h3 class="text-warning fw-bold my-3">Text warning</h3>
              <h3 class="text-danger fw-bold my-3">Text danger</h3>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "ComponentsIcons"
}
</script>
