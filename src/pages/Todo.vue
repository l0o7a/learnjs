<script setup>
import { computed, ref } from 'vue';
import ItemList from '../components/ItemList.vue';

let message = ref('Hello Vue');
let isDanger = ref(false);
let newItem = ref('Piim')
let i = 0;
let items = ref([
  { id: i++, name: 'Piim', isDone: true },
  { id: i++, name: 'Su ema', isDone: false },
  { id: i++, name: 'Veel piima', isDone: false },
])

function add() {
  if (newItem.value.trim() !== '') {
    items.value.push({ id: i++, name: newItem.value, isDone: false });
  }
  newItem.value = '';
}

let doneItems = computed(() => items.value.filter(item => item.isDone));
let toDoItems = computed(() => items.value.filter(item => !item.isDone));



</script>

<template>
  <div class="container mt-2">
    <div class="content">
      <button class="button is-primary" @click="message = 'Hello VM24'">Click me!</button>
      <h1>{{ message }}</h1>
      <button class="button" :class="{ 'is-danger': isDanger, 'is-warning': !isDanger }"
        @click="isDanger = !isDanger">Cool button</button>

      <div class="field has-addons mt-2">
        <div class="control is-expanded">
          <input v-model="newItem" @keydown.enter="add" class="input" type="text" placeholder="Add item">
        </div>
        <div class="control">
          <button class="button is-info" @click="items.push(newItem)">
            Add item
          </button>
        </div>
      </div>
      <h1>{{ newItem.split('').reverse().join('') }}</h1>

      <ItemList :items="items" title="All Items"></ItemList>
      <ItemList :items="doneItems" title="Done Items"></ItemList>
      <ItemList :items="toDoItems" title="toDo Items"></ItemList>
    </div>
  </div>
</template>