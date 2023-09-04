<template>
  <div class="sidebar">
    <div class="sidebar-content">
      <div class="sidebar-header">
        <div class="sidebar-toggle">
          <input id="btn-check"
                 type="checkbox"
                 class="btn-check"
                 autocomplete="off">
          <label class="btn btn-chip p-2 my-0"
                 for="btn-check">
            <i class="material-icons-outlined">&#xe9bd;</i>
          </label>
        </div>
        <a class="overline ms-2" href="/">Nuxt 3 App</a>
      </div>
      <div class="sidebar-body">
        <div class="sidebar-item">
          <NuxtLink to="/" class="nav-link">
            <i class="material-symbols-rounded">&#xe871;</i>
            Dashboard
          </NuxtLink>
        </div>
        <div class="sidebar-item">
          <NuxtLink to="/components" class="nav-link">
            <i class="material-symbols-rounded">&#xea25;</i>
            Components
          </NuxtLink>
        </div>
        <div class="sidebar-item">
          <NuxtLink to="/templates" class="nav-link">
            <i class="material-symbols-rounded">&#xef54;</i>
            Templates
          </NuxtLink>
        </div>
        <div class="sidebar-item">
          <NuxtLink to="/design-system" class="nav-link">
            <i class="material-symbols-rounded">&#xf10a;</i>
            Design System
          </NuxtLink>
        </div>
      </div>
      <div class="sidebar-footer">
        <span class="subtitle-2">Kyber D.S. v{{ clientVersion }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import pkg from '../package.json'

export default {
  name: "TheSidebar",
  computed: {
    clientVersion() {
      return pkg.version
    }
  }
}
</script>
