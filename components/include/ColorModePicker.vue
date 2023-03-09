<template>
  <ul
      class='dropdown-menu dropdown-menu-end p-2'
      aria-labelledby='themeDropdown'>
    <li v-for='color of colors' :key='color'>
      <input
          :id='color'
          v-model='$colorMode.preference'
          :value='color'
          type='radio'
          class='btn-check'
          name='themeOptions'
          autocomplete='off'/>
      <label class='btn btn-default-outline d-flex justify-content-start' :for='color'>
        <span v-if="color === 'system'">
          <i class='material-icons text-gradient grey mdc-18 me-1'>&#xe31e;</i>
          Sistema</span>
        <span v-else-if="color === 'light'">
          <i class='material-icons text-gradient orange mdc-18 me-1'>&#xe518;</i>
          Claro</span>
        <span v-else>
          <i class='material-icons text-gradient gold mdc-18 me-1'>&#xe51c;</i>
          Oscuro</span>
      </label>
    </li>
  </ul>
</template>

<script setup>
const colorMode = useColorMode()
const colors = ['system', 'light', 'dark']
// const selectedColor = colorMode.value || 'system'

console.log(colorMode.value)
</script>
