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
          class="tw-shadow-md tw-p-2 tw-rounded-md tw-m-1 tw-mb-3 tw-transition tw-border-solid tw-border-transparent hover:tw-border-current tw-border-2"
          :class="{ 'tw-border-red-500': sentence.errors == true }">
          <div class="tw-flex tw-justify-between tw-items-center">
            <n-avatar round size="small" :color="sentence.errors ? '#f08a00' : '#1D3134'"
              class="tw-flex tw-items-center">
              <template v-if="!sentence.errors">
                {{ sentence_i + 1 }}
              </template>
              <template v-else>
                <n-icon :component="InformationOutline" />
              </template>
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
            <div class="" style="direction: ltr">
              <QuillEditor ref="myEditor" :options="editorOption" contentType="html" v-model:content="sentence.body" />
            </div>
          </InputWrapper>
          <!-- //-- form  -->

          <!-- question wrapper  -->
          <n-collapse arrow-placement="right">
            <template #arrow>
              <n-icon-wrapper :size="24" :border-radius="5" color="#f08a00" v-if="
                questionHasError(formValue.sentences[sentence_i].questions)
              ">
                <n-icon :size="18" :component="InformationOutline" />
              </n-icon-wrapper>
            </template>

            <n-collapse-item v-if="!questionChangingLoading" :title="`عدد الاسئلة ${counter(sentence_i, 1)}`" name="1"
              class="!tw-m-0">
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
                        class="tw-flex tw-flex-wrap tw-mx-1 tw-p-2 tw-my-3 tw-border-2 tw-border-solid tw-border-transparent tw-shadow-md tw-rounded-md tw-cursor-pointer tw-transition-all hover:tw-shadow-lg hover:tw-mx-2"
                        @click.stop="question.modal = true" :class="{
                          '!tw-border-red-500': question.errors == true,
                        }">
                        <div class="tw-flex-1 tw-flex tw-items-center tw-justify-between tw-flex-wrap">
                          <n-avatar size="small" round :color="question.errors ? '#f08a00' : '#1D3134'">
                            <template v-if="!question.errors">
                              {{ question_i + 1 }}
                            </template>
                            <template v-else>
                              <n-icon :component="InformationOutline" />
                            </template>
                          </n-avatar>
                          <span class="tw-text-sm tw-m-auto tw-text-center tw-opacity-90">
                            {{ question.body ?? 'اكتب عنوان السؤال' }}
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
      <n-form-item style="direction: ltr" class="tw-flex tw-items-center tw-justify-start">
        <n-button color="#688065" round type="primary" style="margin-inline-start: auto" @click.prevent="handleValidate"
          :loading="saveSentenceLoading" :disabled="saveSentenceLoading">
          حفظ
        </n-button>
      </n-form-item>
      <!-- senteneces -->
    </n-form>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import draggable from 'vuedraggable'
import AddQuestionModal from './AddQuestionModal.vue'
import useExamInfoHandler from '../../../composition/useExamInfoHandler'
import InputWrapper from '../../shared/InputWrapper.vue'


import ImageUploader from 'quill-image-uploader'


import {
  Add,
  TrashOutline,
  MoveOutline,
  PencilOutline,
  InformationOutline,
} from '@vicons/ionicons5'

export default {
  components: {
    draggable,
    AddQuestionModal,
    InputWrapper,
  },
  setup() {
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
      myEditor
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

    const questionHasError = (questions) => {
      const isError = questions.find((x) => x.errors === true)
      if (isError) return true
      else return false
    }

    const editorOption = {
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote'],
          // ['blockquote', 'code-block'],
          [{ header: 1 }, { header: 2 }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          // [{ script: 'sub' }, { script: 'super' }],
          [{ indent: '-1' }, { indent: '+1' }],
          [{ direction: 'rtl' }],
          // [{ size: ['small', false, 'large', 'huge'] }],
          // [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          ['link', 'image'],
        ],
      },
    }

    const modules = {
      name: 'imageUploader',
      module: ImageUploader,
      options: {
        upload: (file) => {
          return new Promise((resolve) => {
            const formData = new FormData()
            formData.append('image', file)
            resolve(formData)
            // axios
            //   .post('/upload-image', formData)
            //   .then((res) => {
            //     console.log(res)
            //     resolve(res.data.url)
            //   })
            //   .catch((err) => {
            //     reject('Upload failed')
            //     console.error('Error:', err)
            //   })
          })
        },
      },
    }


    onMounted(async () => {
      const { fetchSentences } = handleFetching()
      await fetchSentences()
    })
    return {
      addSentence_form,
      formValue,
      handleSentence,
      counter,
      handleQuestion,
      ques_dragging,
      answer_dragging,
      sentencesList,
      handleSent_ques,
      questionChangingLoading,
      handleValidate,
      saveSentenceLoading,
      draggableQuestProps,
      editorOption,
      questionHasError,
      modules,
      myEditor,
      // icons
      Add,
      TrashOutline,
      MoveOutline,
      PencilOutline,
      InformationOutline,
    }
  },
}
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
