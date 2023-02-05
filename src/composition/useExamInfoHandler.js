// import axios from 'axios'
import { ref, reactive } from 'vue'
import { getMaterial, getStages, getQuestions, getSentences, saveQuestion } from '../services/apies'
import { v4 as uuidv4 } from 'uuid';
import { useMessage } from 'naive-ui'

//-- reactive values

const activePanel = ref(['4'])
const allowedPanels = ref(['4'])

// -- 


// -- client payload

const payload = reactive({
  mainInfo: {
    examName: null,
    category: null,
    startDate: Date.now(),
    endDate: null,
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

const submit = ref(true)
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
      const sentence = { id: uuidv4(), category: null, body: '', questions: [{ drag_id: uuidv4(), body: null, degreee: null, pivot: { sentence_id: null, question_id: null, question_mark: null }, answers: [{ drag_id: uuidv4(), body: null, is_correct: true, }] }] }
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
      switch (type) {
        case 'question_add':
          formValue.sentences[sentence_i].questions.push(question)
          break;
        case 'question_remove':
          formValue.sentences[sentence_i].questions.splice(question_i, 1)
          break;
        case 'answer_add':
          formValue.sentences[sentence_i].questions[question_i].answers.push(answer)
          break;
        case 'answer_remove':
          formValue.sentences[sentence_i].questions[question_i].answers.splice(answer_i, 1)
          //-- handling correct answer
          if (formValue.sentences[sentence_i].questions[question_i].answers === 1) {
            formValue.sentences[sentence_i].questions[question_i].answers[0].is_correct = true
          }
          break;
        default:
          console.log('invalid type')
          break;
      }

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


    const handleValidateSentence = () => {
      addSentence_form.value?.validate((errors) => {
        if (!errors) {
          submit.value = true
        } else {
          console.log(errors)
        }
      })
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




    const handleStoreData = async () => {
      const findQuestionToCreate = () => {
        const { sentences } = payload.addQuest
        let quesArray = []
        sentences.forEach((sentence) => {
          sentence.questions.forEach((ques) => {
            if (ques.pivot.question_id === null && ques.pivot.sentence_id === null && ques.pivot.question_mark === null) {
              quesArray.push({ id: sentence.id, ques })
            }
          })
        })
        // console.log('question to create', quesArray)
        return quesArray
      }
      const findSentenceToCreate = () => {
        const { sentences } = payload.addQuest
        let sentenceArray = []
        sentences.forEach((sentence) => {
          if (sentence.category === null) {
            sentenceArray.push(sentence)
          }
        })
        // console.log('sentence to create', sentenceArray)
        return sentences
      }
      const findSentenceToPut = () => {
        let sentencesArray = []
        if (serverSentences.value.length === 0) {
          console.log('server sentences not found')
          return
        }
        const newSentence = payload.addQuest.sentences
        const oldSentences = serverSentences.value.filter((x) => {
          return payload.addQuest.sentences.find((y) => {
            if (typeof x.value !== 'undefined' && typeof y.category !== 'undefined') {
              return y.category == x.value
            }
          })
        })
        if (oldSentences && oldSentences.length != 0 && newSentence.length != 0) {
          oldSentences.forEach((oldItem) => {
            const itemTocheck = newSentence.find((x) => x.category == oldItem.value)
            if (itemTocheck) {

              if (!itemTocheck.body.includes(oldItem.label)) {
                sentencesArray.push(itemTocheck)
              }
            }
          })
        }

        // console.log('*********filterd used sentences to put******', sentencesArray)
        return sentencesArray
      }
      // const question = findQuestionToCreate()
      // const questionList = {
      //   //  create question then create sentence 
      //   create: [],
      //   // if question has id  create sentece else
      //   edit: []
      // }
      // if (question.length !== 0) {
      //   question.forEach(item => {
      //     if (item.ques.id === null) {
      //       questionList.create.push(item)
      //     } else {
      //       questionList.edit.push(item)
      //     }
      //   })
      // }
      // // question first then sentence
      // if (questionList.create.length) {
      //   questionList.create.forEach((item) => {
      //     //-- create request
      //     const Quespayload = {
      //       question: item.ques.body,
      //       stage_id: payload.stage.stageName,
      //       lesson_name: null,
      //       material_id: payload.stage.branches,
      //       choices: item.ques.answers.map((x, i) => {
      //         return {
      //           name: x.body,
      //           correct: x.is_correct,
      //           order: i + 1
      //         }
      //       })
      //     }
      //     console.warn(Quespayload, 'Create question request triggred')
      //   })
      // }
      // if (questionList.edit.length) {
      //   questionList.edit.forEach((item) => {
      //     //-- edit request
      //     const Quespayload = {
      //       question: item.ques.body,
      //       stage_id: payload.stage.stageName,
      //       lesson_name: null,
      //       material_id: payload.stage.branches,
      //       choices: item.ques.answers.map((x, i) => {
      //         return {
      //           name: x.body,
      //           correct: x.is_correct,
      //           order: i + 1
      //         }
      //       })
      //     }
      //     console.warn(Quespayload, 'Edit question request triggred')
      //   })

      // }
      const updateQuestion = async () => {
        const updatedQuestionList = []
        return new Promise((resolve, reject) => {
          findQuestionToCreate().forEach(async (item, i) => {
            if (item.ques.body === null || item.ques.degreee === null) {
              return reject({ data: 'please fill all required fields' })
            }
            item.ques.answers.forEach((ans) => {
              console.log(ans.body)
              if (ans.body === null) {
                return reject({ data: 'please fill all required fields' })
              }
            })
            const Quespayload = {
              question: item.ques.body,
              stage_id: payload.stage.stageName,
              lesson_name: null,
              material_id: payload.stage.branches,
              choices: item.ques.answers.map((x, i) => {
                return {
                  name: x.body,
                  correct: x.is_correct,
                  order: i + 1
                }
              })
            }
            //-- fire request
            try {
              const { data } = await saveQuestion(Quespayload)
              updatedQuestionList.push(
                {
                  sentence_i: item.id,
                  question_id: data.id,
                  question_mark: data.question_mark
                }
              )
              if (i === findQuestionToCreate().length - 1) {
                return resolve({ data: updatedQuestionList })
              }
            } catch (error) {
              return error
            }
          })
        })
      }


      if (findQuestionToCreate().length !== 0) {
        try {
          const data = await updateQuestion()
          console.log(data)
        } catch (error) {
          notify('error', error.data)
        }
      }


      console.log(findSentenceToPut())
      console.log(findSentenceToCreate())
      const updateSentence = () => {
        findSentenceToCreate().forEach((item) => {
          const sentencePayload = {
            "sentence": item.body,
            "stage_id": payload.stage.stageName,
            "material_id": payload.stage.branches,
            "lesson_name": null,
            "questions": item.questions.map((ques, i) => {
              console.log(ques)
              return {
                question_id: 2019,
                question_mark: 10,
                order: i + 1
              }
            })
          }
          console.log(sentencePayload)
        })
      }


      if (findSentenceToCreate().length !== 0) {
        updateSentence()
      }









      // if sentece body is used fire put reqest for sentence else if added new question create sentence 


      return {
        findQuestionToCreate,
        findSentenceToCreate,
        findSentenceToPut,
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
        handlePutQuestion(question, sentence_i, question_i)
        return
      }

    }
    const handleCreateQuestion = async (question, sentence_i, question_i) => {
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
        question.value.modal = false
        console.log(sentence_i, question_i, data)
      } catch (error) {
        notify('error', error)

      }

      console.log('create request here !', req_payload)

    }
    const handlePutQuestion = (question) => {
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
      console.log('create put here !', req_payload, q_data.id)
    }

    return {
      addSentence_form,
      formValue,
      handleSentence,
      handleValidateSentence,
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
      handleStoreData,


      handleDialog
    }
  }




  const HandleSubmit = () => {
    if (!submit.value) return
    const { handleStoreData } = ADD_QUEST_FORM()
    handleStoreData()
    // handleStoreData().findQuestionToCreate()
    // handleStoreData().findSentenceToCreate()
    // handleStoreData().findSentenceToPut()

    /*
    // fire request here 
    
    axios.post('url', payload)
      .then(() => {
        // do something
      })
      .catch((errors) => {
        alert(errors)
      })
    */
    console.log('request triggered')
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
