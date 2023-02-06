// import axios from 'axios'
import { ref, reactive } from 'vue'
import { getMaterial, getStages, getQuestions, getSentences, saveQuestion, putQuestion, saveSentence, putSentence } from '../services/apies'
import { v4 as uuidv4 } from 'uuid';
import { useMessage } from 'naive-ui'

//-- reactive values

const activePanel = ref(['1'])
const allowedPanels = ref(['1'])

// -- 


// -- client payload

const payload = reactive({
  mainInfo: {
    examName: null,
    category: null,
    startDate: Date.now(),
    endDate: null,
    isLive: true
  },
  pedigree: {

    grade_d: {
      from: null,
      to: null
    },
    grade_c: {
      from: null,
      to: null
    },
    grade_b: {
      from: null,
      to: null
    },
    grade_a: {
      from: null,
      to: null
    }
  },
  stage: {
    stageName: null,
    branches: null
  },
  addQuest: {
    sentences: [
      {
        id: uuidv4(),
        req_id: null,
        category: null,
        body: '',
        questions: [
          {
            modal: false,
            drag_id: uuidv4(),
            body: null,
            degreee: null,
            id: null,
            stage_id: null,
            pivot: { sentence_id: null, question_id: null, question_mark: null },
            answers: [
              {
                drag_id: uuidv4(),
                body: null,
                is_correct: true,
              }
            ]
          }
        ]
      }
    ],
  }
})

// -- 


// -- input options

const stageOption = reactive({
  stage: [],
  branches: [],
  sentences: [
    {
      label: 'اختيار 1',
      value: '1',
      disabled: false,
    },
    {
      label: 'اختيار 2',
      value: '2',
    },
  ]
})

// -- 
const serverSentences = ref([])

const submit = ref(false)
export default function () {
  const message = useMessage()

  const HANDLE_ACTIVE_PANEL = () => {
    const gotToNextDialog = (item) => {
      activePanel.value[0] = item

      //-- fire req
      console.log(payload)
      //-- 
      const isExist = allowedPanels.value.find((x) => x === item)
      if (isExist) return
      else allowedPanels.value.push(item)
    }
    const pannelIsDisabled = (name) => {
      const isExist = allowedPanels.value.find((x) => x === name)
      return isExist
    }
    const handelPanelUpdate = (item) => {
      activePanel.value = item
      console.log(payload)
    }
    return {
      activePanel,
      allowedPanels,
      gotToNextDialog,
      pannelIsDisabled,
      handelPanelUpdate,
    }
  }

  const MAIN_INFO_FORM = () => {
    const catOpts = ref([
      {
        label: 'اختبار',
        value: 'quiz',
      },
      {
        label: 'مسابقة',
        value: 'contest',
      },
      {
        label: 'واجب',
        value: 'homework',
      },
      {
        label: 'ذهبي',
        value: 'golden',
      },
    ])
    const mainInfoForm = ref(null)
    const formValue = payload.mainInfo
    const rules = {
      examName: {
        type: "string",
        required: true,
        min: 3,
        validator: (rule, value) => {
          if (!value) {
            return Error('الاسم مطلوب')
          }
          if (typeof value !== 'string') {
            return Error('برجاء ادخال اسم صالح')
          }
          if (value.length <= rule.min) {
            return Error(`يجب ان يكون الاسم اكبر من ${rule.min} حروف`)
          }
        },
        trigger: ['blur', 'input'],
      },
      category: {
        required: true,
        message: 'برجاء اختيار النوع',
        trigger: ['blur', 'input'],
      },
      startDate: {
        type: 'number',
        required: true,
        message: 'برجاء اختيار تاريخ صالح',
        trigger: ['blur', 'input'],
      },
      endDate: {
        type: 'number',
        required: true,
        validator: (_, value) => {
          if (!value) {
            return Error('التاريخ مطلوب')
          }
          const endDate = new Date(value)
          const TendDate = endDate.setSeconds(0)

          const startDate = new Date(payload.mainInfo.startDate)
          const TstartDate = startDate.setSeconds(0)

          if (new Date(TendDate) <= new Date(TstartDate)) {
            return Error('يجب ان يكون تاريخ الانتهاء اكبر من تاريخ البدأ')
          }

        },
        trigger: ['blur', 'input'],
      },
    }
    const handleValidateClick = (e) => {
      e.preventDefault()
      mainInfoForm.value?.validate((errors) => {
        if (!errors) {
          HANDLE_ACTIVE_PANEL().gotToNextDialog('2')
        }
      })
    }
    const dateDisabled = (ts) => {
      const date = new Date(ts).getDate()
      const currentDate = new Date(Date.now()).getDate()
      return date < currentDate
    }
    return {
      catOpts,
      mainInfoForm,
      formValue,
      rules,
      handleValidateClick,
      dateDisabled,
    }
  }

  const PEGIREE_FORM = () => {
    const pedigree_form = ref(null)
    const formValue = payload.pedigree
    const rules = {
      // نسبة المقبول
      grade_d: {
        from: {
          type: 'number',
          required: true,
          validator(rule, value) {
            if (!value) {
              return Error('الحقل مطلوب')
            }
          },
          trigger: ['blur', 'input'],
        },
        to: {
          type: 'number',
          required: true,
          validator(rule, value) {
            const fromVal = payload.pedigree.grade_d.from
            if (!value) {
              return Error('الحقل مطلوب')
            }
            if (value <= fromVal && fromVal) {
              return Error('يجب ان تكون النهاية لا تساوي او اصغر من البداية')
            }
          },
          trigger: ['blur', 'input'],

        },
      },

      // نسبة الجيد

      grade_c: {
        from: {
          type: 'number',
          required: true,
          validator(rule, value) {
            const grad_d_toVal = payload.pedigree.grade_d.to

            if (!value) {
              return Error('الحقل مطلوب')
            }
            if (value <= grad_d_toVal) {
              return Error('يجب ان تكون النهاية لا تساوي او اصغر من نهاية نسبة المقبول')
            }
          },
          trigger: ['blur', 'input'],

        },
        to: {
          type: 'number',
          required: true,
          validator(rule, value) {
            const fromVal = payload.pedigree.grade_c.from
            if (!value) {
              return Error('الحقل مطلوب')
            }
            if (value <= fromVal) {
              return Error('يجب ان تكون النهاية لا تساوي او اصغر من البداية')
            }
          },
          trigger: ['blur', 'input'],

        },
      },

      // نسبة الجيد جدا

      grade_b: {
        from: {
          type: 'number',
          required: true,
          validator(rule, value) {
            const grad_d_toVal = payload.pedigree.grade_c.to

            if (!value) {
              return Error('الحقل مطلوب')
            }
            if (value <= grad_d_toVal) {
              return Error('يجب ان تكون البداية لا تساوي او اصغر من نهاية نسبة الجيد')
            }
          },
          trigger: ['blur', 'input'],

        },
        to: {
          type: 'number',
          required: true,
          validator(rule, value) {
            const fromVal = payload.pedigree.grade_b.from
            if (!value) {
              return Error('الحقل مطلوب')
            }
            if (value <= fromVal) {
              return Error('يجب ان تكون النهاية لا تساوي او اصغر من البداية')
            }
          },
          trigger: ['blur', 'input'],

        },
      },

      // نسبة الامتياز

      grade_a: {
        from: {
          type: 'number',
          required: true,
          validator(rule, value) {
            const grad_d_toVal = payload.pedigree.grade_b.to

            if (!value) {
              return Error('الحقل مطلوب')
            }
            if (value <= grad_d_toVal) {
              return Error('يجب ان تكون البداية لا تساوي او اصغر من نهاية نسبة الجيد جدا')
            }
          },
          trigger: ['blur', 'input'],

        },
        to: {
          type: 'number',
          required: true,
          validator(rule, value) {
            const fromVal = payload.pedigree.grade_a.from
            if (!value) {
              return Error('الحقل مطلوب')
            }
            if (value <= fromVal) {
              return Error('يجب ان تكون النهاية لا تساوي او اصغر من البداية')
            }
          },
          trigger: ['blur', 'input'],

        },
      },
    }
    const handleValidateClick = (e) => {
      e.preventDefault()
      pedigree_form.value?.validate((errors) => {
        if (!errors) {
          HANDLE_ACTIVE_PANEL().gotToNextDialog('3')
        }
      })
    }
    return {
      pedigree_form,
      formValue,
      rules,
      handleValidateClick
    }
  }

  const STAGE_FORM = () => {
    const stage_form = ref(null)
    const formValue = payload.stage
    const rules = {
      stageName: {
        type: 'number',
        required: true,
        message: 'المرحلة مطلوبة',
        trigger: ['blur', 'input'],
      },
      branches: {
        type: 'number',
        required: true,
        message: 'الاقسام والفروع مطلوبة',
        trigger: ['blur', 'input'],
      },

    }
    const handleValidateClick = (e) => {
      e.preventDefault()
      stage_form.value?.validate((errors) => {
        if (!errors) {
          HANDLE_ACTIVE_PANEL().gotToNextDialog('4')
        }
      })
    }
    //- fetch data
    const fetchStageData = async () => {
      if (stageOption.stage.length !== 0 || stageOption.branches.length !== 0) return
      const result = await Promise.allSettled([getStages(), getMaterial()])


      const [stage_res, materials_res] = result


      if (stage_res.status === 'fulfilled') {
        const { data } = stage_res.value
        if (!data || !data.length || typeof data !== 'object') return
        stageOption.stage = data.map((x) => {
          return {
            label: x.title,
            value: x.id,
            disabled: false,
          }
        })
      }
      if (materials_res.status === 'fulfilled') {
        const { data } = materials_res.value
        if (!data.data || !data.data.length || typeof data.data !== 'object') return
        stageOption.branches = data.data.map((x) => {
          return {
            label: x.name,
            value: x.id,
            disabled: x.is_show !== 1,
          }
        })
      }
      console.group('new results', stage_res, materials_res)


    }

    return {
      stageOption,
      stage_form,
      formValue,
      rules,
      handleValidateClick,
      fetchStageData
    }
  }

  const ADD_QUEST_FORM = () => {
    const questionChangingLoading = ref(false)
    const modalLoading = ref(false)
    const saveSentenceLoading = ref(false)
    //-- state
    const questionsList = reactive({
      loading: true,
      data: []
    })

    const sentencesList = reactive({
      loading: true,
      data: []
    })

    const ques_dragging = ref(false)
    const answer_dragging = ref(false)


    const addSentence_form = ref(null)
    const formValue = payload.addQuest
    //-- getters
    const counter = (id, type) => {
      /*
       * question => 1 
       * answers => 2
       * senttences => 3
       */
      if (typeof id !== 'number' || typeof type !== 'number') return
      if (type == 1) {
        return formValue.sentences[id].questions.length
      } else if (type == 2) {
        const { question_i, sentence_i } = id

        return formValue.sentences[sentence_i].questions[question_i].answers.length

      }

    }
    //-- callbacks
    const handleSentence = (index, type) => {
      const sentence = { id: uuidv4(), req_id: null, category: null, body: '', questions: [{ drag_id: uuidv4(), body: null, degreee: null, pivot: { sentence_id: null, question_id: null, question_mark: null }, answers: [{ drag_id: uuidv4(), body: null, is_correct: true, }] }] }
      submit.value = false
      if (type === 'add') {
        formValue.sentences.push(sentence)
      } else {
        if (formValue.sentences.length < 1) return
        formValue.sentences.splice(index, 1)
      }
    }
    const handleSent_ques = (value, sentence_i) => {
      questionChangingLoading.value = true
      if ([typeof value, typeof sentence_i].includes('undefined')) return

      const selectedSentence = payload.addQuest.sentences[sentence_i]
      const selectedItem = sentencesList.data.find((x) => x.value === value)



      const { sentence, questions } = selectedItem.body

      if ([typeof questions, typeof questions].includes('undefined')) {
        questionChangingLoading.value = false
        return
      }

      selectedSentence.body = sentence
      selectedSentence.questions = questions.map((item) => {
        return {
          drag_id: uuidv4(),
          body: item.question,
          degreee: item.degreee ?? null,
          id: item.id,
          stage_id: item.stage_id,
          ///- add sentence id to question
          pivot: item.pivot,
          //---
          answers: item.choices.length ? item.choices.map((choice) => {
            return {
              drag_id: uuidv4(),
              body: choice.name,
              id: choice.id,
              quesionID: choice.question_id,
              is_correct: choice.is_correct == 1 ? true : false,
            }
          }) : [
            {
              drag_id: uuidv4(),
              body: null,
              is_correct: true,
            }
          ]
        }
      })
      questionChangingLoading.value = false
    }
    const handleSelectedDropdownQues = (question_i, sentence_i, value) => {
      if ([typeof question_i, typeof sentence_i, typeof value].includes('undefined')) return
      const selectedQuestion = payload.addQuest.sentences[sentence_i].questions[question_i]
      const selectedStoredQuestion = questionsList.data.find((x) => x.key === value)
      const { question, stage_id, id, choices } = selectedStoredQuestion.body



      selectedQuestion.body = question
      selectedQuestion.stage_id = stage_id
      selectedQuestion.id = id
      // -- handle question id realted to choices

      if (choices.length) {

        selectedQuestion.answers = choices.map((x) => {
          return {
            drag_id: uuidv4(),
            body: x.name,
            is_correct: x.is_correct == 1 ? true : false,
          }
        })
      }

    }


    const handleQuestion = (args, type) => {
      const answer = { drag_id: uuidv4(), body: null, is_correct: false, }
      const question = { modal: false, drag_id: uuidv4(), body: null, degreee: null, id: null, stage_id: null, pivot: { sentence_id: null, question_id: null, question_mark: null }, answers: [{ drag_id: uuidv4(), body: null, is_correct: true, }] }

      const { sentence_i, question_i, answer_i } = args

      submit.value = false
      /** 
      * @args
      * sentence_i
      * question_i
      * answer_i
      ---------
      * @types
      * question_add
      * question_remove
      * answer_add
      * answer_remove
      */
      if (!['question_add', 'question_remove', 'answer_add', 'answer_remove'].includes(type)) return
      const callbacks = {
        question_add: () => formValue.sentences[sentence_i].questions.push(question),
        question_remove: () => formValue.sentences[sentence_i].questions.splice(question_i, 1),
        answer_add: () => formValue.sentences[sentence_i].questions[question_i].answers.push(answer),
        answer_remove: () => {
          formValue.sentences[sentence_i].questions[question_i].answers.splice(answer_i, 1)
          //-- handling correct answer
          if (formValue.sentences[sentence_i].questions[question_i].answers === 1) {
            formValue.sentences[sentence_i].questions[question_i].answers[0].is_correct = true
          }
        }
      }
      callbacks[type]()
    }

    const getValidationIndexForQues = (dragId, sentence_i) => {
      const itemIndex = formValue.sentences[sentence_i].questions.findIndex((x) => x.drag_id === dragId)
      return itemIndex
    }
    const getValidationIndexForAnswer = (question_drag_id, answer_drag_id, sentence_i) => {
      const QUESIndex = formValue.sentences[sentence_i].questions.findIndex(
        (x) => x.drag_id === question_drag_id,
      )
      const itemIndex = formValue.sentences[sentence_i].questions[QUESIndex].answers.findIndex(
        (x) => x.drag_id === answer_drag_id,
      )
      return itemIndex
    }

    const handleCorrectAnswer = (args, value) => {
      const { sentence_i, question_i, answer_i } = args

      const isAllFalse = formValue.sentences[sentence_i].questions[question_i].answers.filter((x) => x.is_correct === false)

      if (formValue.sentences[sentence_i].questions[question_i].answers.length === 1) {
        formValue.sentences[sentence_i].questions[question_i].answers[0].is_correct = true
        return
      }
      if (isAllFalse.length === 0, !formValue.sentences[sentence_i].questions[question_i].answers[answer_i].is_correct) {
        formValue.sentences[sentence_i].questions[question_i].answers[answer_i].is_correct = true
        return
      }

      formValue.sentences[sentence_i].questions[question_i].answers.forEach((item) => {
        item.is_correct = false
      })
      formValue.sentences[sentence_i].questions[question_i].answers[answer_i].is_correct = value
    }


    const handleValidate = () => {
      let invalid = false

      payload.addQuest.sentences.forEach((item) => {
        if (item.body === null || item.body.split('').length <= 2) {
          invalid = true
          return
        }
        item.questions.forEach((question) => {
          if (question.body === null || question.degreee === null || question.body.split('').length <= 1) {
            invalid = true
            return
          }
        })
      })
      if (invalid) {
        notify('error', 'please fill all required fields')
        return
      } else {
        handleSubmitSentence()
      }
    }

    const handleFetching = () => {
      const fetchQuestions = async () => {
        const result = await Promise.allSettled([getQuestions()])
        const [res] = result
        if (res.status === 'fulfilled') {
          const { data } = res.value
          questionsList.data = data.data.map((item) => {
            return {
              label: item.question,
              key: item.id,
              disabled: false,
              body: item
            }
          })
          questionsList.loading = false
        }
      }
      const fetchSentences = async () => {

        const result = await Promise.allSettled([getSentences()])
        const [res] = result
        if (res.status === 'fulfilled') {
          const { data } = res.value
          sentencesList.data = data.data.map((item) => {
            return {
              label: item.sentence,
              value: item.id,
              disabled: false,
              body: item
            }
          })
          serverSentences.value = data.data.map((item) => {
            return {
              label: item.sentence,
              value: item.id,
              disabled: false,
              body: item
            }
          })
          sentencesList.loading = false
        }
      }

      return {
        fetchQuestions,
        fetchSentences
      }
    }

    const handleSubmitSentence = async () => {
      let sentenceArrayToCreate = []
      let sentenceArrayToPut = []
      submit.value = false
      const { sentences } = payload.addQuest
      sentences.forEach((sentence, index) => {
        if (sentence.category === null && sentence.req_id === null) {
          sentenceArrayToCreate.push({ sentence, index })
        } else {
          sentenceArrayToPut.push(sentence)
        }
      })

      //-- triggger request
      if (sentenceArrayToCreate.length > 0) {
        saveSentenceLoading.value = true
        sentenceArrayToCreate.forEach(async (item, $index) => {
          const req_payload = {
            sentence: item.sentence.body,
            stage_id: payload.stage.stageName,
            material_id: payload.stage.branches,
            lesson_name: null,
            questions: item.sentence.questions.map((q, i) => {
              return {
                question_id: q.id,
                question_mark: q.degreee,
                order: i + 1
              }
            })
          }
          await handleCreateSentence(req_payload, sentenceArrayToCreate[$index].index)
        })
      }
      if (sentenceArrayToPut.length > 0) {
        saveSentenceLoading.value = true
        sentenceArrayToPut.forEach(async (item) => {
          const req_payload = {
            sentence: item.body,
            stage_id: payload.stage.stageName,
            material_id: payload.stage.branches,
            lesson_name: null,
            questions: item.questions.map((q, i) => {
              return {
                question_id: q.id,
                question_mark: q.degreee,
                order: i + 1
              }
            })
          }
          await handlePutSentence(req_payload)
        })
      }



    }




    //-- handle dialog

    const handleDialog = (question, sentence_i, question_i) => {
      let invalid = true
      if (question.value.body == null || question.value.body.split('').length < 3) {
        notify('error', 'please fill all required fields')
        return
      }
      if (question.value.degreee == null || question.value.degreee <= 0) {
        notify('error', 'please fill all required fields')
        return
      }
      question.value.answers.forEach((item) => {
        if (item.body == null || item.body.split('').length <= 2) {
          notify('error', 'please fill all required fields')
          return
        } else {
          invalid = false
        }
      })
      if (invalid) {
        notify('error', 'please fill all required fields')
        return
      }
      if (question.value.id == null) {
        handleCreateQuestion(question, sentence_i, question_i)
        return
      } else {
        handlePutQuestion(question, question_i)
        return
      }

    }


    //--- handle creating and edit sentence and questions 

    const handleCreateQuestion = async (question, sentence_i, question_i) => {
      modalLoading.value = true
      const { value: q_data } = question
      const req_payload = {
        question: q_data.body,
        stage_id: payload.stage.stageName,
        material_id: payload.stage.branches,
        lesson_name: null,
        choices: q_data.answers.map((x, i) => {
          return {
            name: x.body,
            correct: x.is_correct,
            order: i + 1
          }
        })
      }
      try {
        const { data } = await saveQuestion(req_payload)
        if (!data) return
        payload.addQuest.sentences[sentence_i].questions[question_i].id = data.id
        modalLoading.value = false
        question.value.modal = false
      } catch (error) {
        modalLoading.value = false
        notify('error', error)
      }
      console.log('create request here !', req_payload)

    }
    const handlePutQuestion = async (question, question_i) => {
      modalLoading.value = true
      const { value: q_data } = question
      const req_payload = {
        question: q_data.body,
        stage_id: payload.stage.stageName,
        material_id: payload.stage.branches,
        lesson_name: null,
        choices: q_data.answers.map((x, i) => {
          return {
            name: x.body,
            correct: x.is_correct,
            order: i + 1
          }
        })
      }
      try {
        const data = await putQuestion(req_payload, question_i)
        modalLoading.value = false
        if (!data) return
        question.value.modal = false
      } catch (error) {
        modalLoading.value = false
        notify('error', error)

      }
      console.log('create put here !', req_payload, q_data.id)
    }
    const handleCreateSentence = async (sentence, sentence_i) => {
      try {
        const { data } = await saveSentence(sentence)
        saveSentenceLoading.value = false
        submit.value = true
        if (!data) return
        console.log(data.id)
        payload.addQuest.sentences[sentence_i].req_id = data.id
        return data
      } catch (error) {
        saveSentenceLoading.value = false
        notify('error', error)
      }
    }
    const handlePutSentence = async (sentence) => {
      try {
        const { data } = await putSentence(sentence)
        saveSentenceLoading.value = false
        submit.value = true
        if (!data) return
        notify('success', data.message)
        return data
      } catch (error) {
        saveSentenceLoading.value = false
        notify('error', error)
      }
    }
    //-------------

    return {
      addSentence_form,
      formValue,
      handleSentence,
      handleValidate,
      handleQuestion,
      answer_dragging,
      ques_dragging,
      handleCorrectAnswer,
      getValidationIndexForQues,
      getValidationIndexForAnswer,
      handleFetching,
      counter,
      questionsList,
      sentencesList,
      handleSent_ques,
      handleSelectedDropdownQues,
      questionChangingLoading,
      handleDialog,
      modalLoading,
      saveSentenceLoading,
      submit
    }
  }




  const HandleSubmit = () => {
    if (!submit.value) return
    const { stage, addQuest, pedigree, mainInfo } = payload

    let questArr = []
    addQuest.sentences.forEach((item) => {
      return item.questions.forEach((x, i) => {
        questArr.push({
          "question_id": x.id,
          "question_mark": x.degreee,
          "order": i + 1
        })
      })
    })

    const examPayload = {
      "title": mainInfo.examName,
      "is_live": mainInfo.isLive ? 1 : 0,
      "type": mainInfo.category,
      "start_date": mainInfo.startDate,
      "end_date": mainInfo.endDate,
      "exam_type": null,
      "stage_id": stage.stageName,
      "material_id": stage.branches,
      "sentences": addQuest.sentences.map((x) => {
        return x.req_id ? x.req_id : x.category
      }),
      "questions": questArr,
      "grade_d": {
        "from": pedigree.grade_d.from,
        "to": pedigree.grade_d.to
      },
      "grade_c": {
        "from": pedigree.grade_c.from,
        "to": pedigree.grade_c.to
      },
      "grade_b": {
        "from": pedigree.grade_b.from,
        "to": pedigree.grade_b.to
      },
      "grade_a": {
        "from": pedigree.grade_a.from,
        "to": pedigree.grade_a.to
      }
    }
    console.log('request triggered', examPayload)
  }




  const notify = (type, msg) => {
    const opts = {
      keepAliveOnHover: true,
      closable: true,
      duration: 5000,
    }
    switch (type) {
      case 'loading':
        message[type](msg, opts)
        break;
      case 'error':
        message[type](msg, opts)

        break;
      case 'success':
        message[type](msg, opts)

        break;

      default:
        console.log('invalid type check')
        break;
    }
  }



  return {
    HANDLE_ACTIVE_PANEL,
    MAIN_INFO_FORM,
    PEGIREE_FORM,
    STAGE_FORM,
    ADD_QUEST_FORM,
    HandleSubmit,
    submit,
    notify,
  }
}
