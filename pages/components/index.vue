<template>
  <div>
    <!-- SECTION HEADER -->
    <section class="section section-hero">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <p class="overline">Nuxt 3 - C4</p>
            <h1>Components</h1>
          </div>
        </div>
      </div>
    </section>

    <!-- COMPONENTS LIST -->
    <div class="container mt-3">
      <div class="row mb-3">
        <div class="col-md-12 mb-3">
          <h2>Components</h2>
        </div>
        <!-- V FOR LIST -->
        <div v-for="(element, index) in uiElements"
             :key="`element-${index}`"
             class="col-md-3 mb-3">
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
useHead({
  title: 'Components',
  meta: [
    {name: 'description', content: 'Components list'}
  ]
})

const uiElements = [
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
    name: 'Navbars',
    route: 'navbars'
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
