<template>
  <div>
    <TheSidebar/>
    <main>
      <div class="content">
        <TheNavbar/>
        <slot/>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>
