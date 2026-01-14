<script setup>
import { ref } from 'vue';
import Modal from '../components/Modal.vue';


let modal1Active = ref(false);
let modal2Active = ref(false);
let modal3Active = ref(false);

</script>

<template>
  <div class="container mt-2">
    <div class="content">
      <button class="button is-primary" @click="modal1Active = true">Open Modal 1</button>
      <button class="button is-link" @click="modal2Active = true">Open Modal 2</button>
      <button class="button is-warning" @click="modal3Active = true">Open Modal 3</button>

      
      <Modal :active="modal1Active" @close="modal1Active = false" url="https://picsum.photos/1280/960?random=1"></Modal>
      <Modal :active="modal2Active" @close="modal2Active = false" url="https://picsum.photos/1280/960?random=2"></Modal>
      <Modal :active="modal3Active" @close="modal3Active = false">
<div class="card">
  <div class="card-content">
    <div class="content">
      Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec
      id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus
      et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis
      consectetur purus sit amet fermentum.
    </div>
  </div>
</div>
      </Modal>
    </div>
  </div>
</template>