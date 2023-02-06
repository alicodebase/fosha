<script setup>
import MainInfoVue from './form/MainInfoVue.vue'
import Pedigree from './form/PedigreeVue.vue'
import Stage from './form/StageVue.vue'
import AddQuesVue from './form/AddQuesVue.vue'
import useExamsInfoHandler from '../../composition/useExamInfoHandler'

const { HANDLE_ACTIVE_PANEL, HandleSubmit, submit } =
  useExamsInfoHandler()
const { activePanel, pannelIsDisabled, handelPanelUpdate } =
  HANDLE_ACTIVE_PANEL()
</script>

<template>
  <div class="__exams">
    <n-collapse
      :accordion="true"
      :default-expanded-names="activePanel"
      :on-update:expanded-names="handelPanelUpdate"
    >
      <n-collapse-item
        title="البيانات الرئيسية"
        name="1"
        class="tw-rounded-md tw-shadow-md"
        :disabled="!pannelIsDisabled('1')"
      >
        <div class="tw-p-3">
          <MainInfoVue />
        </div>
      </n-collapse-item>
      <n-collapse-item
        title="بيانات النسب"
        name="2"
        class="tw-rounded-md tw-shadow-md"
        :disabled="!pannelIsDisabled('2')"
      >
        <div class="tw-p-3">
          <Pedigree />
        </div>
      </n-collapse-item>
      <n-collapse-item
        title="الاقسام والفروع والمرحلة"
        name="3"
        class="tw-rounded-md tw-shadow-md"
        :disabled="!pannelIsDisabled('3')"
      >
        <div class="tw-p-3">
          <Stage />
        </div>
      </n-collapse-item>
      <n-collapse-item
        title="اضافة اسألة"
        name="4"
        class="tw-rounded-md tw-shadow-md tw-mt-1 shdow"
        :disabled="!pannelIsDisabled('4')"
      >
        <AddQuesVue />
      </n-collapse-item>
    </n-collapse>
    <n-button
      v-if="submit"
      color="#688065"
      round
      size="large"
      type="primary"
      style="margin-inline-start: auto"
      class="tw-mt-4"
      @click.prevent="HandleSubmit"
    >
      حفظ الكل
    </n-button>
  </div>
</template>
<style lang="scss">
.__exams {
  .n-collapse-item__content-wrapper {
    background: #fff;
    border-radius: 0px 0px 10px 10px;
  }
  .n-collapse-item__header {
    padding: 0rem !important;
    border-radius: 10px;
    background: #b6b19d26;
    color: #1d3134;
    --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    
    .n-collapse-item__header-main {
      padding: 1rem !important;
      justify-content: space-between;
      font-weight: bold !important;
      font-size: 18px;
    }
  }
}
.n-base-select-menu {
  .n-base-select-option {
    justify-content: flex-end !important;
  }
}
</style>
