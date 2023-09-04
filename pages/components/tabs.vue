<template>
  <div>
    <!-- META TAGS -->
    <Head>
      <Title>Tabs - Components</Title>
      <Meta name="title" content="Tabs - Component"/>
      <Meta property="og:title" content="Tabs - Component"/>
      <Meta name="twitter:title" content="Tabs - Component"/>
      <Meta name="description" content="Tabs UI components examples"/>
      <Meta property="og:description" content="Tabs UI components examples"/>
      <Meta name="twitter:description" content="Tabs UI components examples"/>
    </Head>

    <TheHeader back-route="/components"
               category="Components"
               title="Tabs"/>

    <!-- CONTENT -->
    <div class="container">
      <div class="row mb-3">
        <div class="col-md-12 mb-1">
          <h2>Type</h2>
        </div>
        <div class="col-md-12 mb-5">
          <div class="card">
            <div class="card-body">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-12 mb-1">
          <h2>Animated tab</h2>
        </div>
        <div class="col-md-12 mb-5">
          <div class="card">
            <div class="card-body">
              <ul class="nav-pill-controls nav-tab"
                  ref="navPillControls"
                  :style="{'--left': left,'--width': width}">
                <li class="nav-pill-item"
                    id="pillHome"
                    ref="pillHome"
                    role="presentation"
                    @click="changeTab($refs.pillHome)">
                  <button :class="['nav-pill-link', activePill === $refs.pillHome ? 'active' : '']"
                          aria-current="page">
                    Home
                  </button>
                </li>
                <li class="nav-pill-item"
                    id="pillVideos"
                    ref="pillVideos"
                    role="presentation"
                    @click="changeTab($refs.pillVideos)">
                  <button :class="['nav-pill-link', activePill === $refs.pillVideos ? 'active' : '']">
                    Videos
                  </button>
                </li>
                <li class="nav-pill-item"
                    id="pillPlaylists"
                    ref="pillPlaylists"
                    role="presentation"
                    @click="changeTab($refs.pillPlaylists)">
                  <button :class="['nav-pill-link', activePill === $refs.pillPlaylists ? 'active' : '']">
                    Playlists
                  </button>
                </li>
                <li class="nav-pill-item"
                    id="pillCommunity"
                    ref="pillCommunity"
                    role="presentation"
                    @click="changeTab($refs.pillCommunity)">
                  <button :class="['nav-pill-link', activePill === $refs.pillCommunity ? 'active' : '']">
                    Community
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-12 mb-1">
          <h2>Pill segment control</h2>
        </div>
        <div class="col-md-12 mb-3">
          <div class="card">
            <div class="card-body">
              <ul class="nav-pill-controls"
                  ref="navPillControls"
                  :style="{'--left': left,'--width': width}">
                <li class="nav-pill-item"
                    id="pillHome"
                    ref="pillHome"
                    role="presentation"
                    @click="changeTab($refs.pillHome)">
                  <button :class="['nav-pill-link', activePill === $refs.pillHome ? 'active' : '']"
                          aria-current="page">
                    Home
                  </button>
                </li>
                <li class="nav-pill-item"
                    id="pillVideos"
                    ref="pillVideos"
                    role="presentation"
                    @click="changeTab($refs.pillVideos)">
                  <button :class="['nav-pill-link', activePill === $refs.pillVideos ? 'active' : '']">
                    Videos
                  </button>
                </li>
                <li class="nav-pill-item"
                    id="pillPlaylists"
                    ref="pillPlaylists"
                    role="presentation"
                    @click="changeTab($refs.pillPlaylists)">
                  <button :class="['nav-pill-link', activePill === $refs.pillPlaylists ? 'active' : '']">
                    Playlists
                  </button>
                </li>
                <li class="nav-pill-item"
                    id="pillCommunity"
                    ref="pillCommunity"
                    role="presentation"
                    @click="changeTab($refs.pillCommunity)">
                  <button :class="['nav-pill-link', activePill === $refs.pillCommunity ? 'active' : '']">
                    Community
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ComponentsTabs",
  data() {
    return {
      left: '0px',
      width: '122px',
      activePill: null
    }
  },
  mounted() {
    this.setActivePill()
  },
  methods: {
    setActivePill() {
      this.activePill = this.$refs.pillHome

      this.left = this.$refs.pillHome.offsetLeft + 'px'
      this.width = this.$refs.pillHome.offsetWidth + 'px'
    },
    changeTab(tabRef) {
      const ref = tabRef
      this.activePill = ref

      this.left = `${ref.offsetLeft}px`
      this.width = `${ref.offsetWidth}px`

      // tabRef.toggleAttribute('aria-selected', true)
      // tabRef.toggleAttribute('tabindex', 0)
    }
  }
}
</script>
