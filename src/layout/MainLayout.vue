<script setup>
import { NConfigProvider } from 'naive-ui'
import { arDZ, dateArDZ } from 'naive-ui'
import App from '../App.vue'

import useThemeHandler from '../composition/useThemeHandler'
const { themeOverrides } = useThemeHandler()
</script>

<template>
  <n-config-provider
    :theme-overrides="themeOverrides"
    :locale="arDZ"
    :date-locale="dateArDZ"
    :rtl="[arDZ]"
  >
    <n-message-provider>
      <n-card class="tw-min-h-screen">
        <App />
      </n-card>
    </n-message-provider>
  </n-config-provider>
</template>

