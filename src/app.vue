<script setup>
import { ref } from 'vue';

 
let message = ref('Hello Vue');
let isDanger = ref(false);
let newItem = ref('Viin');
let items = ref([
    {id: i++, name: 'piim', isDone: true},
    {id: i++, name: 'juust', isDone: false},
    {id: i++, name: 'sai', isdone: true},
    {id: i++, name: 'leib', isDone: false},
]); 

function add(){
    if(newItem.value.trim() !== ''){
    items.value.push({id: i++, name: newItem.value, isDone: false});
}
    newItem.value ='';
}

let DoneItems = computed(() => items.value.filters(item => item.isDone));

</script> 

<template>
    <div class="content">
        <button class="button is-primary" @click="message = 'Hello VM24'">Click me!</button>
         <h1>{{ message }}</h1>
         <button class="button" :class="{'is-danger': isDanger, 'is-warning': !isDanger}" 
         @click="isDanger = !isDanger">Cool button</button>

        <div class="field has-addons">
  <div class="control is-expanded">
    <input v-model="newItem" @keydown.enter="add" class="input" type="text" placeholder="Add Item">
  </div>
  <div class="control">
    <button class="button is-info" @click="add">
      Add Item
    </button>
  </div>
  <h1>{{newItem.split('').reverse().join('')}}</h1>

  <h1>All Items</h1>
  <ul>
    <li v-for="item in items">
        {{item.name}}
        <input typw="checkbox" v-model="item.isDone">
    </li>
  </ul>

  <h1>Done Items</h1>
  <ul>
    <li v-for="item in items">
        {{item.name}}
        <input typw="checkbox" v-model="item.isDone">
    </li>
  </ul>
</div>
    </div>
</template>
