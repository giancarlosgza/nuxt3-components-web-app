<template>
  <div>
    <TheHeader back-route="/components"
               category="Components"
               title="Badges"/>

    <!-- CONTENT -->
    <div class="container">
      <div class="row mb-3">
        <div class="col-md-6 mb-3">
          <div class="card">
            <div class="card-header">
              <h2 class="title">Primary</h2>
            </div>
            <div class="card-body">
              <div class="badge badge-primary">Primary badge</div>
              <div class="badge badge-primary">
                <i class="material-icons-outlined me-2">&#xe3c9;</i>
                <span>Primary icon button</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card">
            <div class="card-header">
              <h2 class="title">Secondary</h2>
            </div>
            <div class="card-body">
              <div class="badge badge-secondary">Secondary button</div>
              <div class="badge badge-secondary">
                <i class="material-icons-outlined me-2">&#xe5d5;</i>
                <span>Secondary icon button</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card">
            <div class="card-header">
              <h2 class="title">Default</h2>
            </div>
            <div class="card-body">
              <div class="badge badge-default">Default badge</div>
              <div class="badge badge-default">
                <i class="material-icons-outlined me-2">&#xe5c4;</i>
                <span>Default icon badge</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card">
            <div class="card-header">
              <h2 class="title">Default</h2>
            </div>
            <div class="card-body">
              <div class="badge badge-default-outline">Default outline badge</div>
              <div class="badge badge-default-outline">
                <i class="material-icons-outlined me-2">&#xef4f;</i>
                <span>Default outline icon badge</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card">
            <div class="card-header">
              <h2 class="title">Default outline</h2>
            </div>
            <div class="card-body">
              <div class="badge badge-body">Body badge</div>
              <div class="badge badge-body">
                <i class="material-icons-outlined me-2">&#xef4f;</i>
                <span>Body icon badge</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card">
            <div class="card-header">
              <h2 class="title">Danger</h2>
            </div>
            <div class="card-body">
              <div class="badge badge-danger">Danger badge</div>
              <div class="badge badge-danger">
                <i class="material-icons-outlined me-2">&#xe872;</i>
                <span>Danger icon badge</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card">
            <div class="card-header">
              <h2 class="title">Warning</h2>
            </div>
            <div class="card-body">
              <div class="badge badge-warning">Warning badge</div>
              <div class="badge badge-warning">
                <i class="material-icons-outlined me-2">&#xe872;</i>
                <span>Warning icon badge</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card">
            <div class="card-header">
              <h2 class="title">Success</h2>
            </div>
            <div class="card-body">
              <div class="badge badge-success">Success badge</div>
              <div class="badge badge-success">
                <i class="material-icons-outlined me-2">&#xe872;</i>
                <span>Success icon badge</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card">
            <div class="card-header">
              <h2 class="title">Info</h2>
            </div>
            <div class="card-body">
              <div class="badge badge-info">Info badge</div>
              <div class="badge badge-info">
                <i class="material-icons-outlined me-2">&#xe872;</i>
                <span>Info icon badge</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ComponentsBadges"
}
</script>
