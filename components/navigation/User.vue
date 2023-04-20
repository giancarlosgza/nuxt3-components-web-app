<template>
    <div>
        <div :class="['nav-menu', isNavUserActive ? 'nav-active' : '']">
            <div class="nav-menu-content">
                <div class="nav-menu-header">
                    <div>
                        <p>Root Developer</p>
                        <p>root@c4mty.org</p>
                    </div>
                </div>
                <div class="nav-menu-body">
                    <div class="nav-menu-item menu-account">
                        <i class="material-icons-outlined">&#xf1b7;</i>
                        <p title="Administrar mi cuenta">Administrar mi cuenta</p>
                    </div>
                </div>
                <div class="nav-menu-footer">
                    <button class="btn btn-default">Cerrar sesión</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavigationUser",
    props: {
        isNavUserActive: {
            type: Boolean,
            default: null
        }
    }
}
</script>
