<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h1>Adicionar Produtos</h1>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-2">&nbsp;</div>
      <div class="col-8">
        <div class="form">
          <form>
            <div class="row mb-3">
              <div class="col-12">
                <label for="title" class="form-label">Nome do produto:</label>
                <input type="text" class="form-control" v-model="title"/>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-12">
                <label for="category" class="form-label">Categoria:</label>
                <select v-model="category" class="form-select">
                  <option value="eletronics">Eletrônicos</option>
                  <option value="jewerlery">Jóias</option>
                  <option value="men's clothing">Roupas masculina</option>
                  <option value="women's clothing">Roupas femininas</option>
                </select>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-12">
                <label for="price" class="form-label">Preço:</label>
                <input type="text" class="form-control" v-model="price" />
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-12">
                <label for="description" class="form-label">Descrição:</label>
                <textarea class="form-control" v-model="description" rows="3"></textarea>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-12">
                <label for="title" class="form-label">URL da imagem:</label>
                <input type="text" class="form-control" v-model="imageURL" />
              </div>
            </div>

            <div class="row">
              <div class="col-12 text-center">
                <button type="button" class="btn btn-primary" @click="addProduct">Adicionar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="col-3">&nbsp;</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AddProdutoView",
  data() {
    return {
      title: "",
      category: "",
      price: "",
      description: "",
      imageURL: "",
    };
  },
  methods: {
    addProduct() {
      console.log(
        this.title,
        this.category,
        this.price,
        this.description,
        this.imageURL
      );
    },
  },
};
</script>

<style scoped></style>
