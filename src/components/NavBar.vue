<template>
  <div class="div">
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color:#2c3e50;">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="../assets/imgs/logoTipo.png" alt="" width="125" height="35">
        </router-link>
        <span></span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" style="margin-inline-start:20px;">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/" style="color:#FFFFFF;">Início</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color:#FFFFFF;">
                Categorias
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><router-link to="/eletronicsAll" class="dropdown-item" style="color:#2c3e50;font-weight: bold;">Eletrônicos</router-link></li>
                <li><router-link to="/" class="dropdown-item" style="color:#2c3e50;font-weight: bold;">Jóias</router-link></li>
                <li><router-link to="/" class="dropdown-item" style="color:#2c3e50;font-weight: bold;">Roupas masculinas</router-link></li>
                <li><router-link to="/" class="dropdown-item" style="color:#2c3e50;font-weight: bold;">Roupas femininas</router-link></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link" style="color:#FFFFFF;">Produtos</router-link>
            </li>
            <li>
              
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" id="mySearch" type="search" placeholder="Buscar" aria-label="Buscar" @click="searchFunction">
            <button class="btn btn-outline-success" type="submit">Buscar</button>
          </form>
          <ul>
            <li>
              <router-link to="/carrinho" class="nav-link" style="color:#FFFFFF;">
                <img src="../assets/imgs/carrinho.png">
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    searchFunction() {
      // Declare variables
      var input, filter, ul, li, a, i;
      input = document.getElementById("mySearch");
      filter = input.value.toUpperCase();

      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
          } else {
          li[i].style.display = "none";
          }
      }
    }
  }
};
</script>

