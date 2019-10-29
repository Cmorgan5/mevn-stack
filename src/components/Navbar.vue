<template>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <router-link to="/" class="navbar-brand">
          <img style="max-height:25px;" alt="Vue logo" src="../assets/logo.png">Task Manager
          </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <router-link to="/" class="nav-link">
                    Home
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/tasks-all" class="nav-link">
                    Tasks
                </router-link>
            </li>
            
            <li class="nav-item">
                <router-link to="/register" class="nav-link">
                    Register
                </router-link>
            </li>

            <li class="nav-item">
                <router-link to="/login" class="nav-link">
                    Login
                </router-link>
            </li>

            <li class="nav-item">
                <router-link to="" class="nav-link">
                    Logout
                </router-link>
            </li>

            <li class="nav-item">
             <router-link to="" class="nav-link">
                 Cory
             </router-link>
            </li>
          </ul>
          <form class="form-inline mt-2 mt-md-0">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </header>
</template>