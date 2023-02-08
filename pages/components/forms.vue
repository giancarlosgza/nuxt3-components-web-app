<template>
  <div>
    <TheHeader back-route="/components"
               category="Components"
               title="Form control"/>

    <!-- CONTENT -->
    <div class="container">
      <div class="row mb-3">
        <div class="col-md-12">
          <h2>Text fields</h2>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-12 col-md-4 mb-3">
          <div class="mb-3">
            <label for="">Username</label>
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="col-6 col-md-4 mb-3">
          <div class="mb-3">
            <label for="">Password</label>
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="col-6 col-md-4 mb-3">
          <div class="mb-3">
            <label for="">Password</label>
            <input type="password" class="form-control">
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-6 mb-3">
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
        <div class="col-md-6 mb-3">
          <div class="card card-no-border h-100">
            <div class="card-body">
              <div class="mb-3">
                <label for="">Comments</label>
                <textarea class="form-control" rows="4"/>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="row mb-3">
        <div class="col-md-12">
          <h2>Select</h2>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-6 mb-3">
          <div class="card card-no-border">
            <div class="card-body">
              <div class="mb-3">
                <label for="">Country</label>
                <select class="form-control form-select">
                  <option value="">Mexico</option>
                  <option value="">USA</option>
                  <option value="">Canada</option>
                </select>
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
