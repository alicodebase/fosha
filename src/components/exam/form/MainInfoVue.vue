<template>
  <div style="direction: rtl">
    <div class="tw-container tw-my-2">
      <n-form ref="mainInfoForm" :model="formValue" :rules="rules">
        
        <n-grid cols="1 400:2 600:4">
          <n-grid-item>
            <InputWrapper label="اسم الامتحان" :is-required="true">
              <n-form-item path="examName" :show-label="false">
                <n-input v-model:value="formValue.examName" size="large" />
              </n-form-item>
            </InputWrapper>
          </n-grid-item>
          <n-grid-item>
            <InputWrapper :label="'النوع'" :is-required="true">
              <n-form-item path="category" :show-label="false">
                <n-select v-model:value="formValue.category" size="large" :options="catOpts" />
              </n-form-item>
            </InputWrapper>
          </n-grid-item>
          <n-grid-item>
            <InputWrapper :label="'تاريخ البدأ'" :is-required="true">
              <n-form-item path="startDate" :show-label="false">
                <n-date-picker v-model:value="formValue.startDate" :is-date-disabled="dateDisabled" type="datetime"
                  :format="'yyyy/MM/dd - HH:mm'" size="large" class="tw-w-full" />
              </n-form-item>
            </InputWrapper>
          </n-grid-item>
          <n-grid-item>
            <InputWrapper :label="'تاريخ الانتهاء'" :is-required="true">
              <n-form-item path="endDate" :show-label="false">
                <n-date-picker v-model:value="formValue.endDate" :is-date-disabled="dateDisabled" type="datetime"
                  :format="'yyyy/MM/dd - HH:mm'" :time-picker-props:seconds="[0]" clearable size="large"
                  class="tw-w-full" />
              </n-form-item>
            </InputWrapper>
          </n-grid-item>
        </n-grid>
        <InputWrapper label="ظهور الامتحان">
          <n-form-item path="isLive" :show-label="false">
            <n-switch :round="false" size="small" v-model:value="formValue.isLive" />
          </n-form-item>
        </InputWrapper>
        <n-form-item>
          <n-button color="#688065" round size="large" type="primary" style="margin-inline-start: auto"
            @click.prevent="handleValidateClick">
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
import useExamsInfoHandler from '../../../composition/useExamInfoHandler'
const { MAIN_INFO_FORM } = useExamsInfoHandler()
// const disablesSec = () => {
//   return [seconds=[0]]
// }
const {
  mainInfoForm,
  formValue,
  rules,
  handleValidateClick,
  dateDisabled,
  catOpts,
} = MAIN_INFO_FORM()
</script>
