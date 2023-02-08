<template>
  <div>
    <TheHeader back-route="/components"
               category="Components"
               title="Images"/>

    <!-- CONTENT -->
    <div class="container">
      <div class="row mb-3">
        <div class="col-md-12 mb-3">
          <h2>Types</h2>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <img src="https://images.pexels.com/photos/39943/pexels-photo-39943.jpeg"
                   class="img-fluid border-radius-4 mb-3"
                   alt="Example image">
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <img src="https://images.pexels.com/photos/39943/pexels-photo-39943.jpeg"
                   class="img-fluid border-radius-12 mb-3"
                   alt="Example image">
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <img src="https://images.pexels.com/photos/39943/pexels-photo-39943.jpeg"
                   class="img-fluid border-radius-25 mb-3"
                   alt="Example image">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentsImages"
}
</script>
