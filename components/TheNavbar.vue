<template>
    <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container">
            <NuxtLink to="/"
                      class="navbar-brand">
                <span class="text-secondary">C4</span> - Nuxt 3
            </NuxtLink>
            <button class="navbar-toggler btn btn-link mx-0 "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <i class="material-icons-outlined">&#xe5d2;</i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <NuxtLink to="/"
                                  class="nav-link" aria-current="page">
                            Dashboard
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/components"
                                  class="nav-link">
                            Components
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/templates"
                                  class="nav-link">
                            Templates
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/design-system"
                                  class="nav-link">
                            Design System
                        </NuxtLink>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <div class='dropdown'>
                            <button
                                    id='themeDropdown'
                                    class='nav-link btn btn-link ripple ripple-primary'
                                    type='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'>
                                <i class='material-icons-outlined'
                                   data-bs-toggle='tooltip'
                                   data-bs-placement='bottom'
                                   title='Tema del sistema'>&#xe0f0;</i>
                            </button>
                            <IncludeColorModePicker/>
                        </div>
                    </li>
                    <li class="nav-item navigation-menu"
                        @click="toggleNavApps(); hideNavUser();">
                        <button class="nav-link btn btn-link">
                            <i class="material-icons-outlined">&#xe5c3;</i>
                        </button>
                        <NavigationApps :is-nav-apps-active="isNavAppsActive"/>
                    </li>
                    <li class="nav-item navigation-menu"
                        @click="toggleNavUser(); hideNavApp();">
                        <button class="nav-link btn btn-link">
                            <i class="material-icons-outlined">&#xe853;</i>
                        </button>
                        <NavigationUser :is-nav-user-active="isNavUserActive"/>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "TheNavbar",
    data() {
        return {
            isNavAppsActive: false,
            isNavUserActive: false,
        }
    },
    methods: {
        toggleNavApps() {
            this.isNavAppsActive = !this.isNavAppsActive
        },
        toggleNavUser() {
            this.isNavUserActive = !this.isNavUserActive
        },
        hideNavApp() {
            this.isNavAppsActive = false
        },
        hideNavUser() {
            this.isNavUserActive = false
        },
        hideNavs() {
            this.hideNavApp()
            this.hideNavUser()
        }
    }
}
</script>
