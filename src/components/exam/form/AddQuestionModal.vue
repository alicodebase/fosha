<template>
  <n-card class="tw-max-w-[1000px] tw-my-2 !tw-bg-white" max-width="300px">
    <template #footer>
      <div class="tw-flex tw-gap-2 tw-justify-end">
        <n-button @click="closeDialog" round size="large" type="error">
          Close
        </n-button>
        <n-button color="#688065" round size="large" type="primary" @click.prevent="saveDialog">
          حفظ
        </n-button>
      </div>
    </template>
    <InputWrapper label="" style="direction: rtl">
      <!-- question wrapper  -->
      <div class="tw-flex tw-flex-wrap tw-gap-3">
        <div class="tw-flex tw-items-center tw-gap-1 tw-flex-1">
          <!-- //-- stored questions  -->
          <n-dropdown trigger="click" :options="questionsList.data" :show-arrow="true" @select="
            handleSelectedDropdownQues(
              props.question_i,
              props.sentence_i,
              $event,
            )
          ">
            <n-button strong circle :loading="questionsList.loading" :disabled="questionsList.loading">
              <template #icon>
                <n-icon>
                  <ChevronDown />
                </n-icon>
              </template>
            </n-button>
          </n-dropdown>
          <!-- //-- stored questions  -->
          <n-form-item label="عنوان السؤال" :path="`sentences[${props.sentence_i
          }].questions[${getValidationIndexForQues(
            question.drag_id,
            sentence_i,
          )}].body`" :rule="{
    min: 5,
    required: true,
    message: 'برجاء ادخال عنوان صالح',
    trigger: ['input', 'blur'],
  }" class="tw-flex-auto">
            <n-input v-model:value="question.body" type="text" clearable />
          </n-form-item>
        </div>
        <n-form-item label="الدرجة" :path="`sentences[${sentence_i}].questions[${getValidationIndexForQues(
          question.drag_id,
          sentence_i,
        )}].degreee`" :rule="{
  type: 'number',
  required: true,
  message: 'برجاء ادخال درجة صالحة',
  trigger: ['input', 'blur'],
}">
          <n-input-number v-model:value="question.degreee" type="number" :min="0" clearable />
        </n-form-item>
      </div>
      <!-- //-- add answer toolbar  -->
      <div
        class="tw-flex tw-justify-between tw-items-center tw-p-2 tw-py-2 tw-flex-wrap tw-mt-4 tw-m-2 tw-bg-[#b6b19d26] tw-my-1 tw-shadow-md tw-rounded-md">
        <span class="tw-font-bold"> اضافة خيارات </span>
        <n-button color="#688065" round type="primary" @click="
          handleQuestion(
            {
              sentence_i: props.sentence_i,
              question_i: props.question_i,
            },
            'answer_add',
          )
        ">
          <n-icon :component="Add" size="large" />
        </n-button>
      </div>

      <!-- //-- add answers list  -->

      <draggable :list="
        formValue.sentences[props.sentence_i].questions[props.question_i]
          .answers
      " v-bind="draggableAnswerProps" item-key="drag_id" :disabled="ques_dragging" @start="answer_dragging = true"
        @end="answer_dragging = false">
        <template #item="{ element: answer, index: answer_i }">
          <li class="tw-shadow-lg tw-p-2 tw-rounded-md tw-m-2">
            <div v-if="
              formValue.sentences[sentence_i].questions[question_i].answers
                .length > 1
            "
              class="tw-flex tw-justify-between tw-items-center tw-p-2 tw-py-2 tw-flex-wrap tw-my-1 tw-shadow-sm tw-rounded-md">
              <span class="tw-font-bold"> تعديل الترتيب الاختيار</span>
              <n-button ghost round class="handle">
                <n-icon :component="MoveOutline" />
              </n-button>
            </div>

            <InputWrapper :label="`الاختيار رقم ${answer_i + 1}`">
              <div class="tw-flex tw-flex-wrap tw-gap-3">
                <n-form-item label="عنوان الاختيار" :path="`sentences[${sentence_i}].questions[${getValidationIndexForQues(
                  question.drag_id,
                  sentence_i,
                )}].answers[${getValidationIndexForAnswer(
                  question.drag_id,
                  answer.drag_id,
                  sentence_i,
                )}].body`" :rule="{
  min: 5,
  required: true,
  message: 'برجاء ادخال عنوان صالح',
  trigger: ['input', 'blur'],
}" class="tw-flex-auto">
                  <n-input v-model:value="answer.body" type="text" clearable />
                </n-form-item>
                <n-form-item label="الايجابة الصحيحة" :path="`sentences[${sentence_i}].questions[${getValidationIndexForQues(
                  question.drag_id,
                  sentence_i,
                )}].answers[${getValidationIndexForAnswer(
                  question.drag_id,
                  answer.drag_id,
                  sentence_i,
                )}].is_correct`" class="tw-flex-auto">
                  <n-switch v-model:value="answer.is_correct" @update:value="
                    handleCorrectAnswer(
                      {
                        sentence_i,
                        question_i,
                        answer_i,
                      },
                      $event,
                    )
                  " />
                </n-form-item>
                <n-form-item>
                  <n-button v-if="
                    formValue.sentences[sentence_i].questions[question_i]
                      .answers.length > 1
                  " circle class="tw-mx-3" @click="
  () =>
    handleQuestion(
      {
        question_i,
        sentence_i,
        answer_i,
      },
      'answer_remove',
    )
">
                    <n-icon :component="TrashOutline" size="large" />
                  </n-button>
                </n-form-item>
              </div>
            </InputWrapper>
          </li>
        </template>
      </draggable>
    </InputWrapper>
  </n-card>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import { defineProps, computed, onMounted } from 'vue'
import useExamInfoHandler from '../../../composition/useExamInfoHandler'
import { Add, TrashOutline, MoveOutline, ChevronDown } from '@vicons/ionicons5'
const props = defineProps(['question_i', 'sentence_i'])

const { ADD_QUEST_FORM } = useExamInfoHandler()
const {
  formValue,
  getValidationIndexForAnswer,
  handleCorrectAnswer,
  questionsList,
  handleSelectedDropdownQues,
  getValidationIndexForQues,
  answer_dragging,
  ques_dragging,
  handleQuestion,
  handleFetching,
  //--- handle
  handleDialog
} = ADD_QUEST_FORM()
const question = computed(() => {
  return formValue.sentences[props.sentence_i].questions[props.question_i]
})
const closeDialog = () => {
  question.value.modal = false
}
const saveDialog = () => {
  handleDialog(question, props.sentence_i, props.question_i)
}

const draggableAnswerProps = computed(() => {
  return {
    'item-key': 'drag_id',
    handle: '.handle',
    class: 'list-group tw-list-none tw-p-0',
    animation: 200,
    group: 'description',
    ghostClass: 'ghost',
    'component-data': {
      tag: 'ul',
      type: 'transition-group',
      key: 'drag_id',
      name: 'flip-list',
    },
  }
})
onMounted(async () => {
  const { fetchQuestions } = handleFetching()
  await fetchQuestions()
})
</script>

<style lang="scss" scoped>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
