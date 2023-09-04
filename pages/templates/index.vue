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
              <h1>Templates</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TEMPLATES LIST -->
    <div class="container mt-5">
      <div class="row mb-3">
        <div class="col-md-12">
          <h2 class="fw-bold">Examples</h2>
        </div>
      </div>
      <div class="row mb-3">
        <!-- V FOR LIST -->
        <div v-for="(element, index) in routesTemplates"
             :key="`element-${index}`"
             class="col-6 col-md-3 mb-3">
          <NuxtLink :to="`templates/${element.route}`"
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

<script setup lang="ts">
useSeoMeta({
  title: 'Templates',
  ogTitle: 'Templates - C4 MTY',
  twitterTitle: 'Templates - C4 MTY',
  description: 'UI templates examples',
  ogDescription: 'UI templates examples',
  twitterDescription: 'UI templates examples'
})

const routesTemplates = [
  {
    name: 'Developer Tool Landing Page',
    route: 'landing/developer'
  }
]
</script>
