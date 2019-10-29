<template>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">
        <img style="max-height:25px;" alt="Vue logo" src="../assets/logo.png">Task Manager</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tasks</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="#">Register</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Login</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Logout</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Cory</a>
            </li>
          </ul>
          <form class="form-inline mt-2 mt-md-0">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </header>
</template>