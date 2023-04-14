<template>
    <div>
        <div :class="['nav-menu', isNavAppsActive ? 'nav-active' : '']">
            <div class="nav-menu-content">
                <div class="nav-menu-header">
                    <p>LookAI</p>
                    <p>Apps</p>
                </div>
                <div class="nav-menu-body">
                    <div class="nav-menu-item">
                        <i class="material-icons-outlined">&#xf1b7;</i>
                        <p title="Alertamientos">Alertamientos</p>
                    </div>
                    <div class="nav-menu-item">
                        <i class="material-icons-outlined">&#xf1b7;</i>
                        <p title="FaceData">FaceData</p>
                    </div>
                    <div class="nav-menu-item">
                        <i class="material-icons-outlined">&#xf1b7;</i>
                        <p title="LookAI">LookAI</p>
                    </div>
                    <div class="nav-menu-item">
                        <i class="material-icons-outlined">&#xf1b7;</i>
                        <p title="Mapas">Mapas</p>
                    </div>
                    <div class="nav-menu-item">
                        <i class="material-icons-outlined">&#xf1b7;</i>
                        <p title="VMS">VMS</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavigationApps",
    props: {
        isNavAppsActive: {
            type: Boolean,
            default: null
        }
    }
}
</script>
