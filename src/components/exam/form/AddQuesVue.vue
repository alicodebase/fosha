<template>
  <div style="direction: rtl" class="tw-p-1 border tw-shadow-md tw-m-1 tw-mt-0 tw-rounded-md">
    <div
      class="tw-flex tw-justify-center tw-items-center tw-p-2 tw-py-4 tw-flex-wrap tw-bg-[#b6b19d26] tw-my-1 tw-shadow-md tw-rounded-md">
      <span class="tw-font-bold"> العبارات </span>
    </div>
    <n-form ref="addSentence_form" :model="formValue" class="tw-p-1 tw-mt-2">
      <!-- senteneces -->
      <div class="tw-flex tw-justify-between tw-items-center tw-p-2 tw-flex-wrap">
        <span class="tw-font-bold">اضافة عبارة</span>
        <n-button color="#688065" circle type="primary" @click="() => handleSentence('_', 'add')">
          <n-icon :component="Add" size="large" />
        </n-button>
      </div>
      <div>
        <div v-for="(sentence, sentence_i) in formValue.sentences" :key="sentence_i"
          class="tw-shadow-md tw-p-2 tw-rounded-md tw-m-1 tw-mb-3 tw-border-solid tw-border-transparent hover:tw-border-current">
          <div class="tw-flex tw-justify-between tw-items-center">
            <n-avatar round color="#1D3134">
              {{ sentence_i + 1 }}
            </n-avatar>
            <n-button v-if="formValue.sentences.length > 1" circle type="error" class="tw-mx-3"
              @click="() => handleSentence(sentence_i, 'remove')">
              <n-icon :component="TrashOutline" />
            </n-button>
          </div>

          <!-- //-- form  -->
          <InputWrapper label="عنوان العبارة" :is-required="true">
            <n-form-item :show-label="false" :path="`sentences[${sentence_i}].category`" :rule="{
              type: 'number',
              required: false,
              message: `برجاء اختيار عنوان صالح`,
              trigger: ['input', 'blur'],
            }">
              <n-select v-model:value="sentence.category" size="large" filterable :options="sentencesList.data"
                :loading="sentencesList.loading" :disabled="sentencesList.loading"
                @update:value="handleSent_ques($event, sentence_i)" />
            </n-form-item>
          </InputWrapper>

          <InputWrapper label="وصف العبارة" :is-required="true" class="tw-pb-3">
            <!-- <n-form-item
              :show-label="false"
              :path="`sentences[${sentence_i}].body`"
              :rule="{
                min: 5,
                required: true,
                message: 'برجاء ادخال وصف عبارة صالح',
                trigger: ['input', 'blur'],
              }"
            >
              <n-input
                v-model:value="sentence.body"
                type="textarea"
                :autosize="{
                  minRows: 3,
                  maxRows: 5,
                }"
                clearable
              />
            </n-form-item> -->
            <ckeditor v-model="sentence.body" :editor="editor" :config="editorConfig"></ckeditor>
          </InputWrapper>
          <!-- //-- form  -->

          <!-- question wrapper  -->
          <n-collapse display-directive="show" arrow-placement="right">
            <n-skeleton v-if="questionChangingLoading" height="40px" round />
            <n-collapse-item v-else :title="`عدد الاسئلة ${counter(sentence_i, 1)}`" name="1" class="!tw-m-0">
              <n-collapse title="الاسئلة" class="!tw-m-0 quest-accorion" arrow-placement="right" accordion
                :expanded-names="ques_dragging ? null : undefined">
                <div class="tw-px-3">
                  <!-- //-- add question toolbar  -->
                  <div
                    class="tw-flex tw-justify-between tw-items-center tw-p-2 tw-py-2 tw-flex-wrap tw-mt-4 tw-bg-[#b6b19d10] tw-my-1 tw-shadow-md tw-rounded-md">
                    <span class="tw-font-bold"> اضافة اسئلة </span>
                    <n-button color="#688065" circle type="primary"
                      @click="handleQuestion({ sentence_i }, 'question_add')">
                      <n-icon :component="Add" size="large" />
                    </n-button>
                  </div>
                  <!-- //-- add question toolbar  -->

                  <draggable :list="formValue.sentences[sentence_i].questions" item-key="drag_id"
                    v-bind="draggableQuestProps" :disabled="answer_dragging" @start="ques_dragging = true"
                    @end="ques_dragging = false">
                    <template #item="{ element: question, index: question_i }">
                      <div
                        class="tw-mx-1 tw-flex tw-flex-wrap tw-transition-all tw-rounded-md tw-p-2 tw-my-3 tw-cursor-pointer tw-shadow-md tw-border-r-2 hover:tw-shadow-lg hover:tw-mx-2 hover:tw-border-r-black"
                        @click.stop="question.modal = true">
                        <div class="tw-flex-1 tw-flex tw-items-center tw-justify-between tw-flex-wrap">
                          <n-avatar size="small" round color="#1D3134">
                            {{ question_i + 1 }}
                          </n-avatar>
                          <span class="tw-text-sm tw-m-auto tw-text-center tw-opacity-90">
                            {{ question.body ?? 'عنوان السؤال' }}
                          </span>
                        </div>
                        <div class="tw-flex tw-gap-2">
                          <n-button ghost circle class="handle-quest" size="small" @click.stop="() => { }">
                            <n-icon :component="MoveOutline" />
                          </n-button>

                          <n-button circle @click="question.modal = true" size="small">
                            <n-icon :component="PencilOutline" />
                          </n-button>
                          <n-button v-if="
                            formValue.sentences[sentence_i].questions.length >
                            1
                          " circle type="error" size="small" @click="
  handleQuestion(
    { sentence_i, question_i },
    'question_remove',
  )
">
                            <n-icon :component="TrashOutline" />
                          </n-button>
                        </div>
                        <n-modal v-model:show="question.modal" :mask-closable="false" :bordered="false">
                          <AddQuestionModal :question_i="question_i" :question="question" :sentence_i="sentence_i" />
                        </n-modal>
                      </div>
                    </template>
                  </draggable>
                </div>
              </n-collapse>
            </n-collapse-item>
          </n-collapse>
          <!-- question wrapper  -->
        </div>
      </div>
      <n-form-item style="direction:ltr" class=" tw-flex tw-items-center tw-justify-start" v-if="!submit">
        <n-button color="#688065" round type="primary" style="margin-inline-start: auto" @click.prevent="handleValidate"
          :loading="saveSentenceLoading" :disabled="saveSentenceLoading">
          حفظ
        </n-button>
      </n-form-item>
      <!-- senteneces -->
    </n-form>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import draggable from 'vuedraggable'
import AddQuestionModal from './AddQuestionModal.vue'
import useExamInfoHandler from '../../../composition/useExamInfoHandler'
import InputWrapper from '../../shared/InputWrapper.vue'
import {
  Add,
  TrashOutline,
  MoveOutline,
  PencilOutline,
} from '@vicons/ionicons5'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'


const editor = ClassicEditor
const editorConfig = {
  highlight: {
    options: [
      {
        model: 'greenMarker',
        class: 'marker-green',
        title: 'Green marker',
        color: 'var(--ck-highlight-marker-green)',
        type: 'marker',
      },
      {
        model: 'redPen',
        class: 'pen-red',
        title: 'Red pen',
        color: 'var(--ck-highlight-pen-red)',
        type: 'pen',
      },
    ],
  },
  toolbar: {
    items: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'undo',
      'redo',
      'numberedList',
      'blockQuote',
    ],
  },
  language: 'ar',
}
const { ADD_QUEST_FORM } = useExamInfoHandler()
const {
  addSentence_form,
  formValue,
  handleSentence,
  counter,
  handleQuestion,
  ques_dragging,
  answer_dragging,
  handleFetching,
  sentencesList,
  handleSent_ques,
  questionChangingLoading,
  handleValidate,
  saveSentenceLoading,
  submit
} = ADD_QUEST_FORM()

const draggableQuestProps = computed(() => {
  return {
    handle: '.handle-quest',
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

//-- making requests

onMounted(async () => {
  const { fetchSentences } = handleFetching()
  await fetchSentences()
})
</script>

<style lang="scss">
.custom-scroll-bar {
  &::-webkit-scrollbar-thumb {
    background: #1d3134;
    border-radius: 5px;
    width: 3px !important;
  }

  &::-webkit-scrollbar {
    width: 5px !important;
    background: #ffffff00;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
  }

  &::-webkit-scrollbar-track {
    width: 3px !important;
    border-radius: 5px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.not-draggable {
  cursor: no-drop;
}

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.quest-accorion {
  .n-collapse-item {
    margin: 0.3rem 0rem !important;
  }

  .n-collapse-item__header {
    background: transparent !important;
  }
}

.n-dropdown-menu {
  max-height: 300px !important;
  overflow-x: hidden !important;
  text-align: end !important;

  &::-webkit-scrollbar-thumb {
    background: #1d3134;
    border-radius: 5px;
    width: 3px !important;
  }

  &::-webkit-scrollbar {
    width: 5px !important;
    background: #ffffff00;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
  }

  &::-webkit-scrollbar-track {
    width: 3px !important;
    border-radius: 5px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
}
</style>
