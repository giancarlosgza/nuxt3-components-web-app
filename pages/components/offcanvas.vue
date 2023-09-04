<template>
  <div>
    <TheHeader back-route="/components"
               category="Components"
               title="Offcanvas"/>

    <!-- CONTENT -->
    <div class="container">
      <div class="row mb-3">
        <div class="col-md-12 mb-3">
          <h2>Types</h2>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-header">
              <h2 class="title">Left offcanvas / sidebar</h2>
            </div>
            <div class="card-body">
              <p class="subtitle-1 text-muted mb-3">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <button class="btn btn-primary"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasExample"
                      aria-controls="offcanvasExample">
                Open left offcanvas
              </button>
              <button class="btn btn-link">Learn more</button>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-header">
              <h2 class="title">Right offcanvas / sidebar</h2>
            </div>
            <div class="card-body">
              <p class="subtitle-1 text-muted mb-3">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <button class="btn btn-primary"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasExampleEnd"
                      aria-controls="offcanvasExampleEnd">
                Open right offcanvas
              </button>
              <button class="btn btn-link">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="offcanvas offcanvas-start"
         tabindex="-1"
         id="offcanvasExample"
         aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <p class="offcanvas-title"
           id="offcanvasExampleLabel">Filters</p>
        <button type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div>
          Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
          etc.
        </div>
        <div class="dropdown mt-3">
          <button class="btn btn-default dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown">
            Dropdown button
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="offcanvas offcanvas-end"
         tabindex="-1"
         id="offcanvasExampleEnd"
         aria-labelledby="offcanvasExampleEndLabel">
      <div class="offcanvas-header">
        <p class="offcanvas-title"
           id="offcanvasExampleLabel">Filters</p>
        <button type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
      </div>
      <div class="offcanvas-body d-flex flex-column justify-content-between">
        <div>
          <div class="mb-3">
            <label for="">Name</label>
            <input type="text" class="form-control">
          </div>
          <div class="mb-3">
            <label for="">Last name</label>
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="d-grid">
          <button class="btn btn-primary">Search</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Offcanvas - Components',
  ogTitle: 'Offcanvas - Components - C4 MTY',
  twitterTitle: 'Offcanvas - Components - C4 MTY',
  description: 'Offcanvas UI components examples',
  ogDescription: 'Offcanvas UI components examples',
  twitterDescription: 'Offcanvas UI components examples'
})
</script>
