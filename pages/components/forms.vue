<template>
  <div>
    <!-- HEADER -->
    <div class="container mt-3">
      <div class="row mb-3">
        <div class="col-md-12 mb-3">
          <div class="card header-hero header-sidebar">
            <div class="card-body">
              <p class="overline">Components</p>
              <h1>Forms</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="container mt-3">
      <div class="row mb-3">
        <div class="col-md-12 mb-3">
          <h2>Form control</h2>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="">Email</label>
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="">Password</label>
            <input type="text" class="form-control">
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-6">
          <div class="card card-no-border">
            <div class="card-body">
              <div class="mb-3">
                <label for="">Email</label>
                <input type="text" class="form-control">
              </div>
              <div class="mb-3">
                <label for="">Password</label>
                <input type="text" class="form-control">
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
  name: "ComponentsForms"
}
</script>
