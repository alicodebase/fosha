<template>
  <div style="direction: rtl">
    <div class="tw-my-2">
      <n-form ref="pedigree_form" :model="formValue" :rules="rules">
        <n-grid cols="1 400:2 600:4">
          <n-grid-item>
            <div
              class="tw-flex tw-flex-col tw-shadow-sm tw-rounded-md tw-p-1 tw-m-1 tw-h-full tw-transition hover:tw-shadow-lg">
              <InputWrapper :label="'بداية نسبة المقبول'" :is-required="true">
                <n-form-item path="grade_d.from" :show-label="false">
                  <n-input-number v-model:value="formValue.grade_d.from" :min="0" :max="100" class="tw-w-full">
                    <template #prefix> % </template>
                    <template #minus-icon>
                      <n-icon :component="ChevronDown" />
                    </template>
                    <template #add-icon>
                      <n-icon :component="ChevronUp" />
                    </template>
                  </n-input-number>
                </n-form-item>
              </InputWrapper>

              <InputWrapper :label="'نهاية نسبة المقبول'" :is-required="true">
                <n-form-item path="grade_d.to" :show-label="false">
                  <n-input-number v-model:value="formValue.grade_d.to" :min="0" :max="formValue.grade_c.from || 100"
                    class="tw-w-full">
                    <template #prefix> % </template>
                    <template #minus-icon>
                      <n-icon :component="ChevronDown" />
                    </template>
                    <template #add-icon>
                      <n-icon :component="ChevronUp" />
                    </template>
                  </n-input-number>
                </n-form-item>
              </InputWrapper>
            </div>
          </n-grid-item>

          <n-grid-item>
            <div
              class="tw-flex tw-flex-col tw-shadow-sm tw-rounded-md tw-p-1 tw-m-1 tw-h-full tw-transition hover:tw-shadow-lg">

              <InputWrapper :label="'بداية نسبة جيد'" :is-required="true">
                <n-form-item path="grade_c.from" :show-label="false">
                  <n-input-number v-model:value="formValue.grade_c.from" :min="formValue.grade_d.to || 0" :max="100"
                    class="tw-w-full">
                    <template #prefix> % </template>
                    <template #minus-icon>
                      <n-icon :component="ChevronDown" />
                    </template>
                    <template #add-icon>
                      <n-icon :component="ChevronUp" />
                    </template>
                  </n-input-number>
                </n-form-item>
              </InputWrapper>
              <InputWrapper :label="'نهاية نسبة جيد'" :is-required="true">
                <n-form-item path="grade_c.to" :show-label="false">
                  <n-input-number v-model:value="formValue.grade_c.to" :min="0" :max="100" class="tw-w-full">
                    <template #prefix> % </template>
                    <template #minus-icon>
                      <n-icon :component="ChevronDown" />
                    </template>
                    <template #add-icon>
                      <n-icon :component="ChevronUp" />
                    </template>
                  </n-input-number>
                </n-form-item>
              </InputWrapper>
            </div>
          </n-grid-item>

          <n-grid-item>
            <div
              class="tw-flex tw-flex-col tw-shadow-sm tw-rounded-md tw-p-1 tw-m-1 tw-h-full tw-transition hover:tw-shadow-lg">

              <InputWrapper :label="'بداية نسبة جيد جدا'" :is-required="true">
                <n-form-item path="grade_b.from" :show-label="false">
                  <n-input-number v-model:value="formValue.grade_b.from" :min="formValue.grade_c.to || 0" :max="100"
                    class="tw-w-full">
                    <template #prefix> % </template>
                    <template #minus-icon>
                      <n-icon :component="ChevronDown" />
                    </template>
                    <template #add-icon>
                      <n-icon :component="ChevronUp" />
                    </template>
                  </n-input-number>
                </n-form-item>
              </InputWrapper>
              <InputWrapper :label="'نهاية نسبة جيد جدا'" :is-required="true">
                <n-form-item path="grade_b.to" :show-label="false">
                  <n-input-number v-model:value="formValue.grade_b.to" :min="0" :max="100" class="tw-w-full">
                    <template #prefix> % </template>
                    <template #minus-icon>
                      <n-icon :component="ChevronDown" />
                    </template>
                    <template #add-icon>
                      <n-icon :component="ChevronUp" />
                    </template>
                  </n-input-number>
                </n-form-item>
              </InputWrapper>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div
              class="tw-flex tw-flex-col tw-shadow-sm tw-rounded-md tw-p-1 tw-m-1 tw-h-full tw-transition hover:tw-shadow-lg">

              <InputWrapper :label="'بداية نسبة الامتياز'" :is-required="true">
                <n-form-item path="grade_a.from" :show-label="false">
                  <n-input-number v-model:value="formValue.grade_a.from" :min="formValue.grade_b.to || 0" :max="100"
                    class="tw-w-full">
                    <template #prefix> % </template>
                    <template #minus-icon>
                      <n-icon :component="ChevronDown" />
                    </template>
                    <template #add-icon>
                      <n-icon :component="ChevronUp" />
                    </template>
                  </n-input-number>
                </n-form-item>
              </InputWrapper>

              <InputWrapper :label="'نهاية نسبة الامتياز'" :is-required="true">
                <n-form-item path="grade_a.to" :show-label="false">
                  <n-input-number v-model:value="formValue.grade_a.to" :min="0" :max="100" class="tw-w-full">
                    <template #prefix> % </template>
                    <template #minus-icon>
                      <n-icon :component="ChevronDown" />
                    </template>
                    <template #add-icon>
                      <n-icon :component="ChevronUp" />
                    </template>
                  </n-input-number>
                </n-form-item>
              </InputWrapper>
            </div>
          </n-grid-item>
        </n-grid>
        <n-form-item>
          <n-button color="#688065" round type="primary" style="margin-inline-start: auto"
            @click.prevent="handleValidateClick">
            حفظ
          </n-button>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputWrapper from '../../shared/InputWrapper.vue'
import { ChevronDown, ChevronUp } from '@vicons/ionicons5'

import useExamInfoHandler from '../../../composition/useExamInfoHandler'
const { PEGIREE_FORM } = useExamInfoHandler()
const { pedigree_form, formValue, rules, handleValidateClick } = PEGIREE_FORM()
</script>

<style scoped>

</style>
