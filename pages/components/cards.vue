<template>
  <div>
    <TheHeader back-route="/components"
               category="Components"
               title="Cards"/>

    <!-- CONTENT -->
    <div class="container">
      <div class="row mb-3">
        <div class="col-md-12 mb-3">
          <h2>Types</h2>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-header">
              <h2 class="title">Elevated card</h2>
            </div>
            <div class="card-body">
              <p class="subtitle-1 text-muted mb-3">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <button class="btn btn-primary">Get started</button>
              <button class="btn btn-link">Learn more</button>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card card-no-border">
            <div class="card-header">
              <h2 class="title">No elevated card</h2>
            </div>
            <div class="card-body">
              <p class="subtitle-1 text-muted mb-3">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <button class="btn btn-primary">Get started</button>
              <button class="btn btn-default-outline">Learn more</button>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card card-outline">
            <div class="card-header">
              <h2 class="title">Outline card</h2>
            </div>
            <div class="card-body">
              <p class="subtitle-1 text-muted mb-3">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <button class="btn btn-default">Get started</button>
              <button class="btn btn-default-outline">Learn more</button>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-12 mb-3">
          <h2>Dashboard cards</h2>
        </div>
        <div class="col-md-3 mb-3">
          <div class="card card-outline">
            <div class="card-body">
              <p class="subtitle-1 text-muted mb-4">Cameras</p>
              <p class="mdc-48 fw-bold mb-3">4177</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <div class="card card-no-border">
            <div class="card-body">
              <i class="material-icons-outlined mdc-28 mb-3">&#xe7ef;</i>
              <p class="fw-bold mdc-38 mb-3">2500</p>
              <p class="subtitle-1 text-muted mb-0">People detected</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <div class="card">
            <div class="card-body">
              <i class="material-icons-outlined icon-wrap icon-wrap-sm icon-wrap-primary mb-3">&#xeff7;</i>
              <p class="fw-bold mdc-38 mb-3">7850</p>
              <p class="subtitle-1 text-muted mb-0">Plates detected</p>
            </div>
            <div class="card-footer d-grid">
              <button class="btn btn-primary">
                View details
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <div class="card">
            <div class="card-body">
              <i class="material-icons-outlined icon-wrap icon-wrap-sm icon-wrap-secondary mb-3">&#xe7f7;</i>
              <p class="fw-bold mdc-38 mb-3">3</p>
              <p class="subtitle-1 text-muted mb-0">Active alerts</p>
            </div>
            <div class="card-footer d-grid">
              <button class="btn btn-default">
                View details
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-12 mb-3">
          <h2>Image cards</h2>
        </div>
        <div class="col-6 col-md-2 mb-3">
          <div class="card">
            <div class="card-body">
              <img src="https://images.pexels.com/photos/39943/pexels-photo-39943.jpeg"
                   class="img-fluid card-img mb-3"
                   alt="Example image">
              <div class="text-center">
                <p class="subtitle-1 fw-bold mb-1">7850</p>
                <p class="subtitle-1 text-muted mb-0">31/01/2023 - 3:09 pm</p>
              </div>
            </div>
            <div class="card-footer d-grid">
              <button class="btn btn-primary">
                View details
              </button>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-2 mb-3">
          <div class="card card-no-border">
            <div class="card-body">
              <img src="https://images.pexels.com/photos/39943/pexels-photo-39943.jpeg"
                   class="img-fluid card-img mb-3"
                   alt="Example image">
              <div class="text-center">
                <p class="subtitle-1 fw-bold mb-1">7850</p>
                <p class="subtitle-1 text-muted mb-0">31/01/2023 - 3:09 pm</p>
              </div>
            </div>
            <div class="card-footer d-grid">
              <button class="btn btn-default">
                View details
              </button>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-2 mb-3">
          <div class="card card-outline">
            <div class="card-body">
              <img src="https://images.pexels.com/photos/39943/pexels-photo-39943.jpeg"
                   class="img-fluid card-img mb-3"
                   alt="Example image">
              <div class="text-center">
                <p class="subtitle-1 fw-bold mb-1">7850</p>
                <p class="subtitle-1 text-muted mb-0">31/01/2023 - 3:09 pm</p>
              </div>
            </div>
            <div class="card-footer d-grid">
              <button class="btn btn-default-outline">
                View details
              </button>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-2 mb-3">
          <div class="card">
            <div class="card-body">
              <img src="https://images.pexels.com/photos/39943/pexels-photo-39943.jpeg"
                   class="img-fluid card-img mb-3"
                   alt="Example image">
              <div class="text-center">
                <p class="subtitle-1 fw-bold mb-1">7850</p>
                <p class="subtitle-1 text-muted mb-0">31/01/2023 - 3:09 pm</p>
              </div>
            </div>
            <div class="card-footer d-grid">
              <button class="btn btn-primary">
                View details
              </button>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-2 mb-3">
          <div class="card card-no-border">
            <div class="card-body">
              <img src="https://images.pexels.com/photos/39943/pexels-photo-39943.jpeg"
                   class="img-fluid card-img mb-3"
                   alt="Example image">
              <div class="text-center">
                <p class="subtitle-1 fw-bold mb-1">7850</p>
                <p class="subtitle-1 text-muted mb-0">31/01/2023 - 3:09 pm</p>
              </div>
            </div>
            <div class="card-footer d-grid">
              <button class="btn btn-default">
                View details
              </button>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-2 mb-3">
          <div class="card card-outline">
            <div class="card-body">
              <img src="https://images.pexels.com/photos/39943/pexels-photo-39943.jpeg"
                   class="img-fluid card-img mb-3"
                   alt="Example image">
              <div class="text-center">
                <p class="subtitle-1 fw-bold mb-1">7850</p>
                <p class="subtitle-1 text-muted mb-0">31/01/2023 - 3:09 pm</p>
              </div>
            </div>
            <div class="card-footer d-grid">
              <button class="btn btn-default-outline">
                View details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Cards - Components',
  ogTitle: 'Cards - Components - C4 MTY',
  twitterTitle: 'Cards - Components - C4 MTY',
  description: 'Cards UI components examples',
  ogDescription: 'Cards UI components examples',
  twitterDescription: 'Cards UI components examples'
})
</script>
