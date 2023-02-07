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
              <p class="overline">Nuxt 3 - Project</p>
              <h1>C4 - MTY</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- COMPONENTS LIST -->
    <div class="container mt-5">
      <div class="row mb-3">
        <div class="col-md-12">
          <h2 class="fw-bold">Components</h2>
        </div>
      </div>
      <div class="row mb-3">
        <!-- V FOR LIST -->
        <div v-for="(route, index) in mainRoutes"
             :key="`route-${index}`"
             class="col-md-4 mb-3">
          <NuxtLink :to="`${route.route}`"
                    class="card card-no-border is-interactive">
            <div class="card-body">
              <i class="material-icons-outlined icon-wrap icon-wrap-primary mb-3" v-html="route.icon"></i>
              <p class="subtitle-1 mb-0">{{ route.name }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
useHead({
  title: 'Dashboard',
  meta: [
    {name: 'description', content: 'Dashboard description'}
  ]
})

const mainRoutes = [
  {
    name: 'Components',
    icon: '&#xe9b0;',
    route: 'components'
  },
  {
    name: 'Templates',
    icon: '&#xef54;',
    route: 'templates'
  },
  {
    name: 'Design System',
    icon: '&#xe40a;',
    route: 'design-system'
  }
]
</script>
