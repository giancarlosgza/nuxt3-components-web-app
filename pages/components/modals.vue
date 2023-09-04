<template>
  <div>
    <TheHeader back-route="/components"
               category="Components"
               title="Modals"/>

    <!-- CONTENT -->
    <div class="container">
      <div class="row mb-3">
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-header">
              <h2 class="title">Modal</h2>
            </div>
            <div class="card-body">
              <p class="subtitle-1 text-muted mb-3">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <button class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal">
                Open modal
              </button>
              <button class="btn btn-link">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL -->
    <div class="modal fade"
         id="exampleModal"
         tabindex="-1"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <p class="modal-title fs-5"
               id="exampleModalLabel">Title</p>
            <button type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-6 col-md-6 mb-3">
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
                    <button class="btn btn-primary">
                      View details
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-6 mb-3">
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
                    <button class="btn btn-default">
                      View details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button"
                    class="btn btn-link"
                    data-bs-dismiss="modal">Close
            </button>
            <button type="button"
                    class="btn btn-primary">Save changes
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Modals - Components',
  ogTitle: 'Modals - Components - C4 MTY',
  twitterTitle: 'Modals - Components - C4 MTY',
  description: 'Modals UI components examples',
  ogDescription: 'Modals UI components examples',
  twitterDescription: 'Modals UI components examples'
})
</script>
