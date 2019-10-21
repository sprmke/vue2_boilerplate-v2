<template>
  <main class="profile-container profile-page">
    <section class="section section-profile-cover section-shaped my-0">
      <!-- Circles background -->
      <div class="shape shape-style-1 shape-success">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="card card-profile shadow mt--300">
          <div class="px-4">
            <div class="row justify-content-center">
              <div class="col-lg-3">
                <div class="card-profile-image">
                  <a href="#">
                    <img src="https://demos.creative-tim.com/argon-design-system/assets/img/theme/team-4-800x800.jpg" class="rounded-circle img-fluid" alt="image">
                  </a>
                </div>
              </div>
            </div>
            <div class="profile-name text-center">
              <h3>Jingle Bells</h3>
              <div class="h6 text-danger"><i class="ni location_pin mr-2"></i>You are authenticated!</div>
            </div>
            <div class="mt-3 py-5 border-top text-center">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est assumenda voluptatibus odio labore quas aspernatur facilis possimus repellat fuga similique beatae necessitatibus sint consequatur quisquam soluta facere natus, commodi consectetur?</p>
                  <button type="button" class="btn btn-primary my-4" @click="onLogout">Log out</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script src="./profile-container.js"></script>

<style lang="scss" scoped>
  @import './profile-container.scss';
</style>

