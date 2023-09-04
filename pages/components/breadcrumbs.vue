<template>
  <div>
    <TheHeader back-route="/components"
               category="Components"
               title="Breadcrumbs"/>

    <!-- CONTENT -->
    <div class="container">
      <div class="row mb-3">
        <div class="col-md-12 mb-3">
          <div class="card">
            <div class="card-header">
              <h2 class="title">Example</h2>
            </div>
            <div class="card-body">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active" aria-current="page">Home</li>
                </ol>
              </nav>

              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
              </nav>

              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item"><a href="#">Library</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Breadcrumbs - Components',
  ogTitle: 'Breadcrumbs - Components - C4 MTY',
  twitterTitle: 'Breadcrumbs - Components - C4 MTY',
  description: 'Breadcrumbs UI components examples',
  ogDescription: 'Breadcrumbs UI components examples',
  twitterDescription: 'Breadcrumbs UI components examples'
})
</script>
