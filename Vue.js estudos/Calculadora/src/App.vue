<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <h1>{{ mensagem }}</h1>
  <input v-model="mensagem" />
  <button @click="limparMensagem">Limpar</button>
  <button @click="salvarMensagem">Salvar mensagem</button>

  <ContadorTexto :mensagem="mensagem" />

  <h2>Mensagens salvas:</h2>
  <ul>
    <li v-for="(frase, index) in frasesSalvas" :key="index">
      {{ frase }}
    </li>
  </ul>
</template>

<script>
import ContadorTexto from './components/ContadorTexto.vue'

export default {
  components: {
    ContadorTexto
  },
  data() {
    return {
      mensagem: '',
      frasesSalvas: []
    };
  },
  methods: {
    limparMensagem() {
      this.mensagem = ''
    },
    salvarMensagem() {
      if (this.mensagem.trim() !== '') {
        this.frasesSalvas.push(this.mensagem)
        this.mensagem = ''
      }
    }
  }
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
