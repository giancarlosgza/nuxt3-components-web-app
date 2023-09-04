<template>
  <div>
    <!-- SECTION HEADER -->
    <section class="section section-hero sc-gradient"></section>

    <!-- CARD HEADER TITLE -->
    <div class="container container-overflow">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <p class="overline">C4 - MTY</p>
              <h1>Components</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- COMPONENTS LIST -->
    <div class="container mt-5">
      <div class="row mb-3">
        <div class="col-md-12">
          <h2 class="fw-bold">UI elements</h2>
        </div>
      </div>
      <div class="row mb-3">
        <!-- V FOR LIST -->
        <div v-for="(element, index) in routesComponents"
             :key="`element-${index}`"
             class="col-6 col-md-3 mb-3">
          <NuxtLink :to="`components/${element.route}`"
                    class="card card-no-border is-interactive">
            <div class="card-body">
              <p class="subtitle-1 mb-0">{{ element.name }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Components',
  ogTitle: 'Components - C4 MTY',
  twitterTitle: 'Components - C4 MTY',
  description: 'Components examples',
  ogDescription: 'Components examples',
  twitterDescription: 'Components examples'
})

const routesComponents = [
  {
    name: 'Badges',
    route: 'badges'
  },
  {
    name: 'Breadcrumbs',
    route: 'breadcrumbs'
  },
  {
    name: 'Buttons',
    route: 'buttons'
  },
  {
    name: 'Cards',
    route: 'cards'
  },
  {
    name: 'Dropdowns',
    route: 'dropdowns'
  },
  {
    name: 'Form control',
    route: 'forms'
  },
  {
    name: 'Icons & Texts',
    route: 'icons'
  },
  {
    name: 'Images',
    route: 'images'
  },
  {
    name: 'Modals',
    route: 'modals'
  },
  {
    name: 'Navbar',
    route: 'navbar'
  },
  {
    name: 'Offcanvas',
    route: 'offcanvas'
  },
  {
    name: 'Tabs',
    route: 'tabs'
  },
  {
    name: 'Tables',
    route: 'tables'
  }
]
</script>
