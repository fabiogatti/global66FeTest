<template>
    <div class="flex flex-col items-center">
        <div class="flex flex-row items-center space-x-2">
            <p :class="[toggled ? '' : 'text-red font-bold']">{{ first }}</p>
            <label class="switch">
                <input type="checkbox" @click="triggerToggle">
                <span class="slider round"></span>
            </label>
            <p :class="[toggled ? 'text-red font-bold' : '']">{{ second }}</p>
        </div>
        <p class="font-bold text-lg">{{ title }}</p>
    </div>
    
    
</template>

<script setup>
import { ref } from 'vue'
 
defineProps({
    first:{
        type:String,
        default: ''
    },
    second:{
        type:String,
        default: ''
    },
    title:{
        type:String,
        default: ''
    }
})

const emit = defineEmits(['toggled'])

const toggled = ref(false)

const triggerToggle = (event) => {
    toggled.value = event.target.checked
    emit('toggled',toggled.value)
}

</script>

<style scoped>
 .switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  @apply bg-red;
}

input:checked + .slider:before {
  transform: translateX(18px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
} 
</style>