<template>
  <div>
    <TheHeader back-route="/components"
               category="Components"
               title="Buttons"/>

    <!-- CONTENT -->
    <div class="container">
      <div class="row mb-3">
        <div class="col-md-6 mb-3">
          <div class="card">
            <div class="card-header">
              <h2 class="title">Primary</h2>
            </div>
            <div class="card-body">
              <button class="btn btn-primary">Primary button</button>
              <button class="btn btn-primary btn-icon">
                <i class="material-icons-outlined">&#xe3c9;</i>
              </button>
              <button class="btn btn-primary btn-icon">
                <i class="material-icons-outlined">&#xe3c9;</i>
                <span>Primary icon button</span>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card">
            <div class="card-header">
              <h2 class="title">Secondary</h2>
            </div>
            <div class="card-body">
              <button class="btn btn-secondary">Secondary button</button>
              <button class="btn btn-secondary btn-icon">
                <i class="material-icons-outlined">&#xe5d5;</i>
              </button>
              <button class="btn btn-secondary btn-icon">
                <i class="material-icons-outlined">&#xe5d5;</i>
                <span>Secondary icon button</span>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card">
            <div class="card-header">
              <h2 class="title">Link</h2>
            </div>
            <div class="card-body">
              <button class="btn btn-link">Link button</button>
              <button class="btn btn-link btn-icon">
                <i class="material-icons-outlined">&#xe5c4;</i>
              </button>
              <button class="btn btn-link btn-icon">
                <i class="material-icons-outlined">&#xe5c4;</i>
                <span>Link icon button</span>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card">
            <div class="card-header">
              <h2 class="title">Default</h2>
            </div>
            <div class="card-body">
              <button class="btn btn-default">Default button</button>
              <button class="btn btn-default btn-icon">
                <i class="material-icons-outlined">&#xef4f;</i>
              </button>
              <button class="btn btn-default btn-icon">
                <i class="material-icons-outlined">&#xef4f;</i>
                <span>Default icon button</span>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card">
            <div class="card-header">
              <h2 class="title">Default outline</h2>
            </div>
            <div class="card-body">
              <button class="btn btn-default-outline">Default outline button</button>
              <button class="btn btn-default-outline btn-icon">
                <i class="material-icons-outlined">&#xef4f;</i>
              </button>
              <button class="btn btn-default-outline btn-icon">
                <i class="material-icons-outlined">&#xef4f;</i>
                <span>Default outline icon button</span>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card">
            <div class="card-header">
              <h2 class="title">Danger</h2>
            </div>
            <div class="card-body">
              <button class="btn btn-danger">Danger button</button>
              <button class="btn btn-danger btn-icon">
                <i class="material-icons-outlined">&#xe872;</i>
              </button>
              <button class="btn btn-danger btn-icon">
                <i class="material-icons-outlined">&#xe872;</i>
                <span>Danger icon button</span>
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
  title: 'Buttons - Components',
  ogTitle: 'Buttons - Components - C4 MTY',
  twitterTitle: 'Buttons - Components - C4 MTY',
  description: 'Buttons UI components examples',
  ogDescription: 'Buttons UI components examples',
  twitterDescription: 'Buttons UI components examples'
})
</script>
