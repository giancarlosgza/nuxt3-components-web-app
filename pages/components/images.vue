<template>
  <div>
    <TheHeader back-route="/components"
               category="Components"
               title="Images"/>

    <!-- CONTENT -->
    <div class="container">
      <div class="row mb-3">
        <div class="col-md-12 mb-3">
          <h2>Types</h2>
        </div>
        <div class="col-md-8 mb-5">
          <div class="card">
            <div class="card-body">
              <h2 class="fw-bold">2023</h2>
              <img src="https://images.pexels.com/photos/39943/pexels-photo-39943.jpeg"
                   class="img-fluid border-radius-4 scroll-driven animation-reveal"
                   alt="Example image">
              <p class="subtitle-1 mb-0">
                In 2023, CSS and SCSS are both widely used in web development, but they serve different purposes and
                offer distinct advantages. CSS (Cascading Style Sheets) is a styling language used to add visual design
                to web pages, while SCSS (Sassy CSS) is a preprocessor that extends CSS with features like variables,
                nesting, and functions.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-8 mb-5">
          <div class="card">
            <div class="card-body">
              <h2 class="fw-bold">Complex</h2>
              <img src="https://images.pexels.com/photos/39943/pexels-photo-39943.jpeg"
                   class="img-fluid border-radius-12 scroll-driven animation-fade"
                   alt="Example image">
              <p class="subtitle-1 mb-0">
                While CSS is a simple language, it can become complex and hard to manage in larger projects. SCSS offers
                a number of benefits over plain CSS, making it a popular choice for many developers. Here are some ways
                that SCSS can be useful over CSS in 2023.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-8 mb-5">
          <div class="card">
            <div class="card-body">
              <h2 class="fw-bold">Summary</h2>
              <img src="https://images.pexels.com/photos/39943/pexels-photo-39943.jpeg"
                   class="img-fluid border-radius-25 scroll-driven animation-reveal"
                   alt="Example image">
              <p class="subtitle-1 mb-0">
                In summary, while CSS is a simple and effective way to style web pages, SCSS offers a number of benefits
                that make it a popular choice for many developers in 2023. Its modular and reusable approach, improved
                readability, time-saving features, better code organization, and strong community support make it a
                powerful tool for modern web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Images - Components',
  ogTitle: 'Images - Components - C4 MTY',
  twitterTitle: 'Images - Components - C4 MTY',
  description: 'Images UI components examples',
  ogDescription: 'Images UI components examples',
  twitterDescription: 'Images UI components examples'
})
</script>
