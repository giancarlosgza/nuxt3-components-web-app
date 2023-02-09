<template>
  <div>
    <!-- HEADER -->
    <div class="container my-3">
      <div class="row mb-3">
        <div class="col-md-12 mb-3">
          <NuxtLink :to="backRoute" class="btn btn-link mb-3 mx-0 px-1">
            <i class="material-icons-outlined mdc-18 me-1">&#xe5c4;</i>
            Go back
          </NuxtLink>
          <p class="overline">{{ category }}</p>
          <h1>{{ title }}</h1>
          <div class="hl-gradient"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  props: {
    backRoute: {
      type: String,
      default: null
    },
    category: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    }
  }
}
</script>
