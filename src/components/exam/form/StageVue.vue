<template>
  <div style="direction: rtl">
    <div class="tw-container tw-my-2">
      <n-form ref="stage_form" :model="formValue" :rules="rules">
        <n-grid cols="1 400:2 600:2">
          <n-grid-item>
            <InputWrapper label="المرحلة" :is-required="true">
              <n-form-item path="stageName" :show-label="false">
                <n-select
                  v-model:value="formValue.stageName"
                  size="large"
                  :options="stageOption.stage"
                  :loading="stageOption.stage.length === 0"
                  :disabled="stageOption.stage.length === 0"
                />
              </n-form-item>
            </InputWrapper>
          </n-grid-item>
          <n-grid-item>
            <InputWrapper label="الاقسام والفروع" :is-required="true">
              <n-form-item path="branches" :show-label="false">
                <n-select
                  v-model:value="formValue.branches"
                  size="large"
                  :options="stageOption.branches"
                  :loading="stageOption.branches.length === 0"
                  :disabled="stageOption.branches.length === 0"
                />
              </n-form-item>
            </InputWrapper>
          </n-grid-item>
        </n-grid>
        <n-form-item>
          <n-button
            color="#688065"
            round
            size="large"
            type="primary"
            style="margin-inline-start: auto"
            @click.prevent="handleValidateClick"
          >
            حفظ
          </n-button>
        </n-form-item>
      </n-form>
    </div>
  </div>
  <!-- <pre>
    {{ JSON.stringify(formValue, null, 2) }}
  </pre> -->
</template>

<script setup>
import InputWrapper from '../../shared/InputWrapper.vue'
import useExamInfoHandler from '../../../composition/useExamInfoHandler'
import { onMounted } from 'vue'
const { STAGE_FORM } = useExamInfoHandler()
const {
  stageOption,
  stage_form,
  formValue,
  rules,
  handleValidateClick,
  fetchStageData,
} = STAGE_FORM()

//-- making requests
onMounted(async () => {
  await fetchStageData()
})
</script>

<style scoped></style>
