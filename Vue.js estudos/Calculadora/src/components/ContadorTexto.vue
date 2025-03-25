<template>
    <p :class="classeTexto">Número de caracteres: {{ mensagem.length }}</p>
  </template>
  
  <script>
  export default {
    props: ['mensagem'],
    computed: {
      classeTexto() {
        if (this.mensagem.length > 20) {
          return 'texto-vermelho'
        } else {
          return 'texto-verde'
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .texto-vermelho {
    color: red;
    font-weight: bold;
  }
  .texto-verde {
    color: green;
  }
  </style>
  