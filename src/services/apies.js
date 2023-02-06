const getStages = async () => {
  const response = {
    "status": true,
    "data": [
      {
        "id": 1,
        "title": "ابتدائية",
        "price": 100
      },
      {
        "id": 2,
        "title": "اعدادية",
        "price": 200
      },
      {
        "id": 3,
        "title": "ثانوية",
        "price": 1
      },
      {
        "id": 4,
        "title": "الصف الاول الابتدائي",
        "price": 100
      },
      {
        "id": 5,
        "title": "الصف الثاني الاعدادي",
        "price": 255
      },
      {
        "id": 6,
        "title": "ثالث ثانوي111",
        "price": 554
      },
      {
        "id": 7,
        "title": "٣ حضانه",
        "price": 1
      }
    ],
    "message": "Stages retrieved Successfully"
  }
  const data = await fakeReq(response)
  return data
}
const getMaterial = async () => {
  const response = {
    "status": true,
    "data": {
      "current_page": 1,
      "data": [
        {
          "id": 17,
          "name": "قسم فرعي ٣",
          "is_parent": 0,
          "created_at": "2022-11-03T14:47:48.000000Z",
          "updated_at": "2022-11-03T14:47:48.000000Z",
          "is_show": 1
        },
        {
          "id": 16,
          "name": "قسم رئيسي",
          "is_parent": 1,
          "created_at": "2022-11-03T14:42:44.000000Z",
          "updated_at": "2022-11-03T14:42:44.000000Z",
          "is_show": 1
        },
        {
          "id": 15,
          "name": "قسم فرعي ٢",
          "is_parent": 0,
          "created_at": "2022-11-03T14:41:34.000000Z",
          "updated_at": "2022-11-03T14:41:34.000000Z",
          "is_show": 1
        },
        {
          "id": 14,
          "name": "قسم فرعي ١",
          "is_parent": 0,
          "created_at": "2022-11-03T14:41:14.000000Z",
          "updated_at": "2022-11-03T14:41:54.000000Z",
          "is_show": 1
        },
        {
          "id": 13,
          "name": "كورسات القراءة (مراجعة)",
          "is_parent": 0,
          "created_at": "2022-03-28T16:36:42.000000Z",
          "updated_at": "2022-03-28T16:36:42.000000Z",
          "is_show": 1
        },
        {
          "id": 12,
          "name": "ماتريال",
          "is_parent": 0,
          "created_at": "2022-03-28T11:58:25.000000Z",
          "updated_at": "2022-03-28T11:58:25.000000Z",
          "is_show": 1
        },
        {
          "id": 11,
          "name": "شرح للمراجعه",
          "is_parent": 1,
          "created_at": "2022-03-27T07:49:24.000000Z",
          "updated_at": "2022-03-27T07:49:24.000000Z",
          "is_show": 1
        },
        {
          "id": 8,
          "name": "كورسات النصوص",
          "is_parent": 0,
          "created_at": "2022-03-24T01:07:26.000000Z",
          "updated_at": "2022-03-27T10:39:14.000000Z",
          "is_show": 1
        },
        {
          "id": 7,
          "name": "مراجعة",
          "is_parent": 1,
          "created_at": "2022-03-17T17:14:57.000000Z",
          "updated_at": "2022-03-17T17:14:57.000000Z",
          "is_show": 1
        },
        {
          "id": 2,
          "name": "كورسات القراءة (شرح)",
          "is_parent": 0,
          "created_at": "2022-03-17T17:14:56.000000Z",
          "updated_at": "2022-03-28T16:37:05.000000Z",
          "is_show": 1
        },
        {
          "id": 3,
          "name": "كورسات النحو",
          "is_parent": 0,
          "created_at": "2022-03-17T17:14:56.000000Z",
          "updated_at": "2022-03-27T10:28:40.000000Z",
          "is_show": 1
        },
        {
          "id": 4,
          "name": "كورسات البلاغة",
          "is_parent": 0,
          "created_at": "2022-03-17T17:14:56.000000Z",
          "updated_at": "2022-03-27T10:37:41.000000Z",
          "is_show": 1
        },
        {
          "id": 5,
          "name": "كورسات الشعر",
          "is_parent": 0,
          "created_at": "2022-03-17T17:14:56.000000Z",
          "updated_at": "2022-03-28T09:12:09.000000Z",
          "is_show": 1
        },
        {
          "id": 6,
          "name": "تدريبات",
          "is_parent": 1,
          "created_at": "2022-03-17T17:14:56.000000Z",
          "updated_at": "2022-11-03T14:49:48.000000Z",
          "is_show": 1
        },
        {
          "id": 1,
          "name": "شرح المنهج",
          "is_parent": 1,
          "created_at": "2022-03-17T17:14:55.000000Z",
          "updated_at": "2022-03-17T17:14:55.000000Z",
          "is_show": 1
        }
      ],
      "first_page_url": "https://fos7a.codebase-product.com/api/dashboard/materials?page=1",
      "from": 1,
      "last_page": 1,
      "last_page_url": "https://fos7a.codebase-product.com/api/dashboard/materials?page=1",
      "links": [
        {
          "url": null,
          "label": "pagination.previous",
          "active": false
        },
        {
          "url": "https://fos7a.codebase-product.com/api/dashboard/materials?page=1",
          "label": "1",
          "active": true
        },
        {
          "url": null,
          "label": "pagination.next",
          "active": false
        }
      ],
      "next_page_url": null,
      "path": "https://fos7a.codebase-product.com/api/dashboard/materials",
      "per_page": 15,
      "prev_page_url": null,
      "to": 15,
      "total": 15
    },
    "message": "materials retrieved Successfully"
  }
  const data = await fakeReq(response)
  return data
}
//-- question api
const getQuestions = async () => {
  const response = {
    "status": true,
    "data": {
      "current_page": 1,
      "data": [
        {
          "id": 29,
          "question": "سؤال ١ ابدائي",
          "stage_id": 1,
          "created_at": "2022-10-30T15:40:14.000000Z",
          "updated_at": "2022-10-30T15:40:14.000000Z",
          "lesson_id": null,
          "material_id": 1,
          "lesson_name": null,
          "choices": [
            {
              "id": 160,
              "name": "اجابه ١",
              "is_correct": 1,
              "question_id": 29,
              "created_at": "2022-10-30T15:40:14.000000Z",
              "updated_at": "2022-10-30T15:40:14.000000Z",
              "order": "1"
            },
            {
              "id": 161,
              "name": "اجابه ٢",
              "is_correct": 0,
              "question_id": 29,
              "created_at": "2022-10-30T15:40:14.000000Z",
              "updated_at": "2022-10-30T15:40:14.000000Z",
              "order": "2"
            }
          ]
        },
        {
          "id": 28,
          "question": "سؤال ٣ ؟",
          "stage_id": 3,
          "created_at": "2022-10-30T10:21:01.000000Z",
          "updated_at": "2022-10-30T10:21:01.000000Z",
          "lesson_id": null,
          "material_id": 3,
          "lesson_name": null,
          "choices": [
            {
              "id": 157,
              "name": "اجابة ١",
              "is_correct": 0,
              "question_id": 28,
              "created_at": "2022-10-30T10:21:01.000000Z",
              "updated_at": "2022-10-30T10:21:01.000000Z",
              "order": "1"
            },
            {
              "id": 158,
              "name": "اجابة ٢",
              "is_correct": 0,
              "question_id": 28,
              "created_at": "2022-10-30T10:21:01.000000Z",
              "updated_at": "2022-10-30T10:21:01.000000Z",
              "order": "2"
            },
            {
              "id": 159,
              "name": "اجابة ٣",
              "is_correct": 1,
              "question_id": 28,
              "created_at": "2022-10-30T10:21:01.000000Z",
              "updated_at": "2022-10-30T10:21:01.000000Z",
              "order": "3"
            }
          ]
        },
        {
          "id": 27,
          "question": "سؤال ٢ ؟",
          "stage_id": 3,
          "created_at": "2022-10-30T10:19:24.000000Z",
          "updated_at": "2022-10-30T10:19:24.000000Z",
          "lesson_id": null,
          "material_id": 8,
          "lesson_name": null,
          "choices": [
            {
              "id": 154,
              "name": "اجابة ١",
              "is_correct": 0,
              "question_id": 27,
              "created_at": "2022-10-30T10:19:24.000000Z",
              "updated_at": "2022-10-30T10:19:24.000000Z",
              "order": "1"
            },
            {
              "id": 155,
              "name": "اجابة ٢",
              "is_correct": 1,
              "question_id": 27,
              "created_at": "2022-10-30T10:19:24.000000Z",
              "updated_at": "2022-10-30T10:19:24.000000Z",
              "order": "2"
            },
            {
              "id": 156,
              "name": "اجابة ٣",
              "is_correct": 0,
              "question_id": 27,
              "created_at": "2022-10-30T10:19:24.000000Z",
              "updated_at": "2022-10-30T10:19:24.000000Z",
              "order": "3"
            }
          ]
        },
        {
          "id": 26,
          "question": "سؤال ١ ؟",
          "stage_id": 3,
          "created_at": "2022-10-30T10:18:19.000000Z",
          "updated_at": "2022-10-30T10:18:19.000000Z",
          "lesson_id": null,
          "material_id": 1,
          "lesson_name": null,
          "choices": [
            {
              "id": 151,
              "name": "اجابة ١",
              "is_correct": 1,
              "question_id": 26,
              "created_at": "2022-10-30T10:18:19.000000Z",
              "updated_at": "2022-10-30T10:18:19.000000Z",
              "order": "1"
            },
            {
              "id": 152,
              "name": "اجابة ٢",
              "is_correct": 0,
              "question_id": 26,
              "created_at": "2022-10-30T10:18:19.000000Z",
              "updated_at": "2022-10-30T10:18:19.000000Z",
              "order": "2"
            },
            {
              "id": 153,
              "name": "اجابة ٣",
              "is_correct": 0,
              "question_id": 26,
              "created_at": "2022-10-30T10:18:19.000000Z",
              "updated_at": "2022-10-30T10:18:19.000000Z",
              "order": "3"
            }
          ]
        },
        {
          "id": 25,
          "question": "Aliquid quasi et mol",
          "stage_id": 1,
          "created_at": "2022-08-23T14:54:17.000000Z",
          "updated_at": "2022-09-26T16:47:23.000000Z",
          "lesson_id": 4,
          "material_id": 3,
          "lesson_name": "محمد",
          "choices": [
            {
              "id": 126,
              "name": "asdadasdasd",
              "is_correct": 0,
              "question_id": 25,
              "created_at": "2022-09-26T16:47:23.000000Z",
              "updated_at": "2022-09-26T16:47:23.000000Z",
              "order": "1"
            },
            {
              "id": 127,
              "name": "asdasdasdas",
              "is_correct": 0,
              "question_id": 25,
              "created_at": "2022-09-26T16:47:23.000000Z",
              "updated_at": "2022-09-26T16:47:23.000000Z",
              "order": "2"
            },
            {
              "id": 128,
              "name": "sadasdasdas",
              "is_correct": 0,
              "question_id": 25,
              "created_at": "2022-09-26T16:47:23.000000Z",
              "updated_at": "2022-09-26T16:47:23.000000Z",
              "order": "3"
            },
            {
              "id": 129,
              "name": "sadasdasda",
              "is_correct": 1,
              "question_id": 25,
              "created_at": "2022-09-26T16:47:23.000000Z",
              "updated_at": "2022-09-26T16:47:23.000000Z",
              "order": "4"
            }
          ]
        },
        {
          "id": 24,
          "question": "Minim vero voluptate",
          "stage_id": 1,
          "created_at": "2022-08-22T14:13:54.000000Z",
          "updated_at": "2022-09-26T16:47:39.000000Z",
          "lesson_id": 8,
          "material_id": null,
          "lesson_name": null,
          "choices": [
            {
              "id": 130,
              "name": "dasdasdasdasd",
              "is_correct": 0,
              "question_id": 24,
              "created_at": "2022-09-26T16:47:39.000000Z",
              "updated_at": "2022-09-26T16:47:39.000000Z",
              "order": "1"
            },
            {
              "id": 131,
              "name": "sadasdasd",
              "is_correct": 1,
              "question_id": 24,
              "created_at": "2022-09-26T16:47:39.000000Z",
              "updated_at": "2022-09-26T16:47:39.000000Z",
              "order": "2"
            },
            {
              "id": 132,
              "name": "asdasdasdasd",
              "is_correct": 0,
              "question_id": 24,
              "created_at": "2022-09-26T16:47:39.000000Z",
              "updated_at": "2022-09-26T16:47:39.000000Z",
              "order": "3"
            },
            {
              "id": 133,
              "name": "asdasdasdasd",
              "is_correct": 0,
              "question_id": 24,
              "created_at": "2022-09-26T16:47:39.000000Z",
              "updated_at": "2022-09-26T16:47:39.000000Z",
              "order": "4"
            },
            {
              "id": 134,
              "name": "sadasdasd",
              "is_correct": 0,
              "question_id": 24,
              "created_at": "2022-09-26T16:47:39.000000Z",
              "updated_at": "2022-09-26T16:47:39.000000Z",
              "order": "5"
            }
          ]
        },
        {
          "id": 23,
          "question": "xdsadsa",
          "stage_id": 1,
          "created_at": "2022-08-20T14:38:08.000000Z",
          "updated_at": "2022-09-26T16:48:02.000000Z",
          "lesson_id": null,
          "material_id": null,
          "lesson_name": null,
          "choices": [
            {
              "id": 135,
              "name": "asasasas",
              "is_correct": 0,
              "question_id": 23,
              "created_at": "2022-09-26T16:48:02.000000Z",
              "updated_at": "2022-09-26T16:48:02.000000Z",
              "order": "1"
            },
            {
              "id": 136,
              "name": "sasasasas",
              "is_correct": 0,
              "question_id": 23,
              "created_at": "2022-09-26T16:48:02.000000Z",
              "updated_at": "2022-09-26T16:48:02.000000Z",
              "order": "2"
            },
            {
              "id": 137,
              "name": "شسيبلزبنشتسي",
              "is_correct": 0,
              "question_id": 23,
              "created_at": "2022-09-26T16:48:02.000000Z",
              "updated_at": "2022-09-26T16:48:02.000000Z",
              "order": "3"
            },
            {
              "id": 138,
              "name": "شسيشسيشسي",
              "is_correct": 1,
              "question_id": 23,
              "created_at": "2022-09-26T16:48:02.000000Z",
              "updated_at": "2022-09-26T16:48:02.000000Z",
              "order": "4"
            }
          ]
        },
        {
          "id": 22,
          "question": "سؤال داخل النحو درس الفعل المجرد والمزيد ٣١",
          "stage_id": 1,
          "created_at": "2022-07-25T15:27:09.000000Z",
          "updated_at": "2022-07-25T15:29:04.000000Z",
          "lesson_id": 1,
          "material_id": null,
          "lesson_name": null,
          "choices": [
            {
              "id": 118,
              "name": "شسيشسي",
              "is_correct": 0,
              "question_id": 22,
              "created_at": "2022-09-26T16:45:40.000000Z",
              "updated_at": "2022-09-26T16:45:40.000000Z",
              "order": "1"
            },
            {
              "id": 119,
              "name": "سيشسي",
              "is_correct": 0,
              "question_id": 22,
              "created_at": "2022-09-26T16:45:40.000000Z",
              "updated_at": "2022-09-26T16:45:40.000000Z",
              "order": "2"
            },
            {
              "id": 120,
              "name": "ضصثيضسيشيشسي",
              "is_correct": 1,
              "question_id": 22,
              "created_at": "2022-09-26T16:45:40.000000Z",
              "updated_at": "2022-09-26T16:45:40.000000Z",
              "order": "3"
            },
            {
              "id": 121,
              "name": "asdasdasdasdasd",
              "is_correct": 0,
              "question_id": 22,
              "created_at": "2022-09-26T16:45:40.000000Z",
              "updated_at": "2022-09-26T16:45:40.000000Z",
              "order": "4"
            }
          ]
        },
        {
          "id": 21,
          "question": "بماذا تشتهر اللغة العربية",
          "stage_id": 1,
          "created_at": "2022-06-07T12:21:42.000000Z",
          "updated_at": "2022-09-26T16:48:31.000000Z",
          "lesson_id": null,
          "material_id": null,
          "lesson_name": null,
          "choices": [
            {
              "id": 143,
              "name": "لغة الصاد",
              "is_correct": 0,
              "question_id": 21,
              "created_at": "2022-09-26T16:48:31.000000Z",
              "updated_at": "2022-09-26T16:48:31.000000Z",
              "order": "1"
            },
            {
              "id": 144,
              "name": "لغة الضاد",
              "is_correct": 1,
              "question_id": 21,
              "created_at": "2022-09-26T16:48:31.000000Z",
              "updated_at": "2022-09-26T16:48:31.000000Z",
              "order": "2"
            },
            {
              "id": 145,
              "name": "adasdasd",
              "is_correct": 0,
              "question_id": 21,
              "created_at": "2022-09-26T16:48:31.000000Z",
              "updated_at": "2022-09-26T16:48:31.000000Z",
              "order": "3"
            },
            {
              "id": 146,
              "name": "asdasfdvdfg,jkh",
              "is_correct": 0,
              "question_id": 21,
              "created_at": "2022-09-26T16:48:31.000000Z",
              "updated_at": "2022-09-26T16:48:31.000000Z",
              "order": "4"
            }
          ]
        },
        {
          "id": 20,
          "question": "hoooooo",
          "stage_id": 1,
          "created_at": "2022-05-09T13:40:05.000000Z",
          "updated_at": "2022-09-26T16:51:25.000000Z",
          "lesson_id": null,
          "material_id": null,
          "lesson_name": null,
          "choices": [
            {
              "id": 147,
              "name": "lk",
              "is_correct": 1,
              "question_id": 20,
              "created_at": "2022-09-26T16:51:25.000000Z",
              "updated_at": "2022-09-26T16:51:25.000000Z",
              "order": "1"
            },
            {
              "id": 148,
              "name": "asdasdasdasd",
              "is_correct": 0,
              "question_id": 20,
              "created_at": "2022-09-26T16:51:25.000000Z",
              "updated_at": "2022-09-26T16:51:25.000000Z",
              "order": "2"
            },
            {
              "id": 149,
              "name": "asdasdasdasd",
              "is_correct": 0,
              "question_id": 20,
              "created_at": "2022-09-26T16:51:25.000000Z",
              "updated_at": "2022-09-26T16:51:25.000000Z",
              "order": "3"
            },
            {
              "id": 150,
              "name": "asdasdasd",
              "is_correct": 0,
              "question_id": 20,
              "created_at": "2022-09-26T16:51:25.000000Z",
              "updated_at": "2022-09-26T16:51:25.000000Z",
              "order": "4"
            }
          ]
        },
        {
          "id": 18,
          "question": "الوباء يزداد شيئا فشيئا.......كلمة يزداد في محل",
          "stage_id": 5,
          "created_at": "2022-03-31T10:07:12.000000Z",
          "updated_at": "2022-03-31T10:07:12.000000Z",
          "lesson_id": null,
          "material_id": null,
          "lesson_name": null,
          "choices": [
            {
              "id": 71,
              "name": "نصب",
              "is_correct": 0,
              "question_id": 18,
              "created_at": "2022-03-31T10:07:12.000000Z",
              "updated_at": "2022-03-31T10:07:12.000000Z",
              "order": "1"
            },
            {
              "id": 72,
              "name": "رفع",
              "is_correct": 1,
              "question_id": 18,
              "created_at": "2022-03-31T10:07:12.000000Z",
              "updated_at": "2022-03-31T10:07:12.000000Z",
              "order": "1"
            },
            {
              "id": 73,
              "name": "جر",
              "is_correct": 0,
              "question_id": 18,
              "created_at": "2022-03-31T10:07:12.000000Z",
              "updated_at": "2022-03-31T10:07:12.000000Z",
              "order": "1"
            }
          ]
        },
        {
          "id": 17,
          "question": "اتصال نوع الهمزه",
          "stage_id": 5,
          "created_at": "2022-03-31T10:04:08.000000Z",
          "updated_at": "2022-03-31T10:04:08.000000Z",
          "lesson_id": null,
          "material_id": null,
          "lesson_name": null,
          "choices": [
            {
              "id": 66,
              "name": "وصل",
              "is_correct": 1,
              "question_id": 17,
              "created_at": "2022-03-31T10:04:08.000000Z",
              "updated_at": "2022-03-31T10:04:08.000000Z",
              "order": "1"
            },
            {
              "id": 67,
              "name": "قطع",
              "is_correct": 0,
              "question_id": 17,
              "created_at": "2022-03-31T10:04:08.000000Z",
              "updated_at": "2022-03-31T10:04:08.000000Z",
              "order": "1"
            },
            {
              "id": 68,
              "name": "مخفية",
              "is_correct": 0,
              "question_id": 17,
              "created_at": "2022-03-31T10:04:08.000000Z",
              "updated_at": "2022-03-31T10:04:08.000000Z",
              "order": "1"
            },
            {
              "id": 69,
              "name": "ظاهرة",
              "is_correct": 0,
              "question_id": 17,
              "created_at": "2022-03-31T10:04:08.000000Z",
              "updated_at": "2022-03-31T10:04:08.000000Z",
              "order": "1"
            },
            {
              "id": 70,
              "name": "تيست",
              "is_correct": 0,
              "question_id": 17,
              "created_at": "2022-03-31T10:04:08.000000Z",
              "updated_at": "2022-03-31T10:04:08.000000Z",
              "order": "1"
            }
          ]
        },
        {
          "id": 16,
          "question": "(واع) اسم نوعه",
          "stage_id": 5,
          "created_at": "2022-03-31T10:02:33.000000Z",
          "updated_at": "2022-03-31T10:02:33.000000Z",
          "lesson_id": null,
          "material_id": null,
          "lesson_name": null,
          "choices": [
            {
              "id": 60,
              "name": "منقوص",
              "is_correct": 1,
              "question_id": 16,
              "created_at": "2022-03-31T10:02:33.000000Z",
              "updated_at": "2022-03-31T10:02:33.000000Z",
              "order": "1"
            },
            {
              "id": 61,
              "name": "ممدود",
              "is_correct": 0,
              "question_id": 16,
              "created_at": "2022-03-31T10:02:33.000000Z",
              "updated_at": "2022-03-31T10:02:33.000000Z",
              "order": "1"
            },
            {
              "id": 62,
              "name": "مقصور",
              "is_correct": 0,
              "question_id": 16,
              "created_at": "2022-03-31T10:02:33.000000Z",
              "updated_at": "2022-03-31T10:02:33.000000Z",
              "order": "1"
            },
            {
              "id": 63,
              "name": "مرفوع",
              "is_correct": 0,
              "question_id": 16,
              "created_at": "2022-03-31T10:02:33.000000Z",
              "updated_at": "2022-03-31T10:02:33.000000Z",
              "order": "1"
            },
            {
              "id": 64,
              "name": "مجرور",
              "is_correct": 0,
              "question_id": 16,
              "created_at": "2022-03-31T10:02:33.000000Z",
              "updated_at": "2022-03-31T10:02:33.000000Z",
              "order": "1"
            },
            {
              "id": 65,
              "name": "تيست",
              "is_correct": 0,
              "question_id": 16,
              "created_at": "2022-03-31T10:02:33.000000Z",
              "updated_at": "2022-03-31T10:02:33.000000Z",
              "order": "1"
            }
          ]
        },
        {
          "id": 15,
          "question": "معلنا اسم فاعل من الفعل",
          "stage_id": 5,
          "created_at": "2022-03-31T10:00:45.000000Z",
          "updated_at": "2022-03-31T10:00:45.000000Z",
          "lesson_id": null,
          "material_id": null,
          "lesson_name": null,
          "choices": [
            {
              "id": 57,
              "name": "علن",
              "is_correct": 0,
              "question_id": 15,
              "created_at": "2022-03-31T10:00:46.000000Z",
              "updated_at": "2022-03-31T10:00:46.000000Z",
              "order": "1"
            },
            {
              "id": 58,
              "name": "اعلن",
              "is_correct": 1,
              "question_id": 15,
              "created_at": "2022-03-31T10:00:46.000000Z",
              "updated_at": "2022-03-31T10:00:46.000000Z",
              "order": "1"
            },
            {
              "id": 59,
              "name": "عالن",
              "is_correct": 0,
              "question_id": 15,
              "created_at": "2022-03-31T10:00:46.000000Z",
              "updated_at": "2022-03-31T10:00:46.000000Z",
              "order": "1"
            }
          ]
        },
        {
          "id": 14,
          "question": "اقتصاد مصدر نوعه",
          "stage_id": 5,
          "created_at": "2022-03-31T09:57:40.000000Z",
          "updated_at": "2022-03-31T09:57:40.000000Z",
          "lesson_id": null,
          "material_id": null,
          "lesson_name": null,
          "choices": [
            {
              "id": 53,
              "name": "ثلاثي",
              "is_correct": 0,
              "question_id": 14,
              "created_at": "2022-03-31T09:57:40.000000Z",
              "updated_at": "2022-03-31T09:57:40.000000Z",
              "order": "1"
            },
            {
              "id": 54,
              "name": "رباعي",
              "is_correct": 0,
              "question_id": 14,
              "created_at": "2022-03-31T09:57:40.000000Z",
              "updated_at": "2022-03-31T09:57:40.000000Z",
              "order": "1"
            },
            {
              "id": 55,
              "name": "خماسي",
              "is_correct": 1,
              "question_id": 14,
              "created_at": "2022-03-31T09:57:40.000000Z",
              "updated_at": "2022-03-31T09:57:40.000000Z",
              "order": "1"
            },
            {
              "id": 56,
              "name": "سداسي",
              "is_correct": 0,
              "question_id": 14,
              "created_at": "2022-03-31T09:57:40.000000Z",
              "updated_at": "2022-03-31T09:57:40.000000Z",
              "order": "1"
            }
          ]
        }
      ],
      "first_page_url": "http://fusha-v2.codebase-product.com/api/dashboard/questions?page=1",
      "from": 1,
      "last_page": 2,
      "last_page_url": "http://fusha-v2.codebase-product.com/api/dashboard/questions?page=2",
      "links": [
        {
          "url": null,
          "label": "pagination.previous",
          "active": false
        },
        {
          "url": "http://fusha-v2.codebase-product.com/api/dashboard/questions?page=1",
          "label": "1",
          "active": true
        },
        {
          "url": "http://fusha-v2.codebase-product.com/api/dashboard/questions?page=2",
          "label": "2",
          "active": false
        },
        {
          "url": "http://fusha-v2.codebase-product.com/api/dashboard/questions?page=2",
          "label": "pagination.next",
          "active": false
        }
      ],
      "next_page_url": "http://fusha-v2.codebase-product.com/api/dashboard/questions?page=2",
      "path": "http://fusha-v2.codebase-product.com/api/dashboard/questions",
      "per_page": 15,
      "prev_page_url": null,
      "to": 15,
      "total": 28
    },
    "message": "questions retrieved Successfully"
  }
  const data = await fakeReq(response)
  return data
}

const getSentences = async () => {

  const response = {
    "status": true,
    "data": {
      "current_page": 1,
      "data": [
        {
          "id": 12,
          "sentence": "عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي عباره للثانوي&nbsp;",
          "created_at": "2022-10-30T10:23:09.000000Z",
          "updated_at": "2022-10-30T10:23:09.000000Z",
          "stage_id": 3,
          "lesson_id": null,
          "material_id": 1,
          "lesson_name": null,
          "questions": [
            {
              "id": 26,
              "question": "سؤال ١ ؟",
              "stage_id": 3,
              "created_at": "2022-10-30T10:18:19.000000Z",
              "updated_at": "2022-10-30T10:18:19.000000Z",
              "lesson_id": null,
              "material_id": 1,
              "lesson_name": null,
              "pivot": {
                "sentence_id": 12,
                "question_id": 26,
                "question_mark": 30,
                "order": "1"
              },
              "choices": [
                {
                  "id": 151,
                  "name": "اجابة ١",
                  "is_correct": 1,
                  "question_id": 26,
                  "created_at": "2022-10-30T10:18:19.000000Z",
                  "updated_at": "2022-10-30T10:18:19.000000Z",
                  "order": "1"
                },
                {
                  "id": 152,
                  "name": "اجابة ٢",
                  "is_correct": 0,
                  "question_id": 26,
                  "created_at": "2022-10-30T10:18:19.000000Z",
                  "updated_at": "2022-10-30T10:18:19.000000Z",
                  "order": "2"
                },
                {
                  "id": 153,
                  "name": "اجابة ٣",
                  "is_correct": 0,
                  "question_id": 26,
                  "created_at": "2022-10-30T10:18:19.000000Z",
                  "updated_at": "2022-10-30T10:18:19.000000Z",
                  "order": "3"
                }
              ]
            }
          ]
        },
        {
          "id": 11,
          "sentence": "<p>fdfsdfsdfs</p>",
          "created_at": "2022-10-11T14:14:32.000000Z",
          "updated_at": "2022-10-11T14:14:32.000000Z",
          "stage_id": 1,
          "lesson_id": null,
          "material_id": null,
          "lesson_name": null,
          "questions": [
            {
              "id": 21,
              "question": "بماذا تشتهر اللغة العربية",
              "stage_id": 1,
              "created_at": "2022-06-07T12:21:42.000000Z",
              "updated_at": "2022-09-26T16:48:31.000000Z",
              "lesson_id": null,
              "material_id": null,
              "lesson_name": null,
              "pivot": {
                "sentence_id": 11,
                "question_id": 21,
                "question_mark": 1,
                "order": "1"
              },
              "choices": [
                {
                  "id": 143,
                  "name": "لغة الصاد",
                  "is_correct": 0,
                  "question_id": 21,
                  "created_at": "2022-09-26T16:48:31.000000Z",
                  "updated_at": "2022-09-26T16:48:31.000000Z",
                  "order": "1"
                },
                {
                  "id": 144,
                  "name": "لغة الضاد",
                  "is_correct": 1,
                  "question_id": 21,
                  "created_at": "2022-09-26T16:48:31.000000Z",
                  "updated_at": "2022-09-26T16:48:31.000000Z",
                  "order": "2"
                },
                {
                  "id": 145,
                  "name": "adasdasd",
                  "is_correct": 0,
                  "question_id": 21,
                  "created_at": "2022-09-26T16:48:31.000000Z",
                  "updated_at": "2022-09-26T16:48:31.000000Z",
                  "order": "3"
                },
                {
                  "id": 146,
                  "name": "asdasfdvdfg,jkh",
                  "is_correct": 0,
                  "question_id": 21,
                  "created_at": "2022-09-26T16:48:31.000000Z",
                  "updated_at": "2022-09-26T16:48:31.000000Z",
                  "order": "4"
                }
              ]
            },
            {
              "id": 2,
              "question": "ما هي عاصمة السعودية ؟",
              "stage_id": 1,
              "created_at": "2022-03-17T17:14:55.000000Z",
              "updated_at": "2022-09-26T16:47:13.000000Z",
              "lesson_id": null,
              "material_id": null,
              "lesson_name": null,
              "pivot": {
                "sentence_id": 11,
                "question_id": 2,
                "question_mark": 1,
                "order": "1"
              },
              "choices": [
                {
                  "id": 122,
                  "name": "اختيار اول اختيار اول اختيار اول اختيار اول اختيار اول اختيار اول اختيار اول اختيار اول اختيار اول اختيار اول اختيار اول اختيار اول اختيار اول اختيار اول اختيار اول اختيار اول اختيار اول",
                  "is_correct": 1,
                  "question_id": 2,
                  "created_at": "2022-09-26T16:47:13.000000Z",
                  "updated_at": "2022-09-26T16:47:13.000000Z",
                  "order": "1"
                },
                {
                  "id": 123,
                  "name": "اختيار ثاني",
                  "is_correct": 0,
                  "question_id": 2,
                  "created_at": "2022-09-26T16:47:13.000000Z",
                  "updated_at": "2022-09-26T16:47:13.000000Z",
                  "order": "1"
                },
                {
                  "id": 124,
                  "name": "اختيار ثالث",
                  "is_correct": 0,
                  "question_id": 2,
                  "created_at": "2022-09-26T16:47:13.000000Z",
                  "updated_at": "2022-09-26T16:47:13.000000Z",
                  "order": "1"
                },
                {
                  "id": 125,
                  "name": "اختيار رابع",
                  "is_correct": 0,
                  "question_id": 2,
                  "created_at": "2022-09-26T16:47:13.000000Z",
                  "updated_at": "2022-09-26T16:47:13.000000Z",
                  "order": "1"
                }
              ]
            },
            {
              "id": 4,
              "question": "ما هي عاصمة مصر ؟",
              "stage_id": 1,
              "created_at": "2022-03-17T17:14:55.000000Z",
              "updated_at": "2022-03-17T17:14:55.000000Z",
              "lesson_id": null,
              "material_id": null,
              "lesson_name": null,
              "pivot": {
                "sentence_id": 11,
                "question_id": 4,
                "question_mark": 1,
                "order": "1"
              },
              "choices": [
                {
                  "id": 114,
                  "name": "اختيار اول",
                  "is_correct": 0,
                  "question_id": 4,
                  "created_at": "2022-09-26T16:44:42.000000Z",
                  "updated_at": "2022-09-26T16:44:42.000000Z",
                  "order": "1"
                },
                {
                  "id": 115,
                  "name": "اختيار ثاني",
                  "is_correct": 1,
                  "question_id": 4,
                  "created_at": "2022-09-26T16:44:42.000000Z",
                  "updated_at": "2022-09-26T16:44:42.000000Z",
                  "order": "1"
                },
                {
                  "id": 116,
                  "name": "اختيار ثالث",
                  "is_correct": 0,
                  "question_id": 4,
                  "created_at": "2022-09-26T16:44:42.000000Z",
                  "updated_at": "2022-09-26T16:44:42.000000Z",
                  "order": "1"
                },
                {
                  "id": 117,
                  "name": "اختيار رابع",
                  "is_correct": 0,
                  "question_id": 4,
                  "created_at": "2022-09-26T16:44:42.000000Z",
                  "updated_at": "2022-09-26T16:44:42.000000Z",
                  "order": "1"
                }
              ]
            }
          ]
        },
        {
          "id": 10,
          "sentence": "<p>عبارة تجريبية</p>",
          "created_at": "2022-08-30T17:51:49.000000Z",
          "updated_at": "2022-10-11T11:42:31.000000Z",
          "stage_id": 7,
          "lesson_id": null,
          "material_id": 1,
          "lesson_name": "test",
          "questions": [
            {
              "id": 21,
              "question": "بماذا تشتهر اللغة العربية",
              "stage_id": 1,
              "created_at": "2022-06-07T12:21:42.000000Z",
              "updated_at": "2022-09-26T16:48:31.000000Z",
              "lesson_id": null,
              "material_id": null,
              "lesson_name": null,
              "pivot": {
                "sentence_id": 10,
                "question_id": 21,
                "question_mark": 1,
                "order": "1"
              },
              "choices": [
                {
                  "id": 143,
                  "name": "لغة الصاد",
                  "is_correct": 0,
                  "question_id": 21,
                  "created_at": "2022-09-26T16:48:31.000000Z",
                  "updated_at": "2022-09-26T16:48:31.000000Z",
                  "order": "1"
                },
                {
                  "id": 144,
                  "name": "لغة الضاد",
                  "is_correct": 1,
                  "question_id": 21,
                  "created_at": "2022-09-26T16:48:31.000000Z",
                  "updated_at": "2022-09-26T16:48:31.000000Z",
                  "order": "2"
                },
                {
                  "id": 145,
                  "name": "adasdasd",
                  "is_correct": 0,
                  "question_id": 21,
                  "created_at": "2022-09-26T16:48:31.000000Z",
                  "updated_at": "2022-09-26T16:48:31.000000Z",
                  "order": "3"
                },
                {
                  "id": 146,
                  "name": "asdasfdvdfg,jkh",
                  "is_correct": 0,
                  "question_id": 21,
                  "created_at": "2022-09-26T16:48:31.000000Z",
                  "updated_at": "2022-09-26T16:48:31.000000Z",
                  "order": "4"
                }
              ]
            },
            {
              "id": 2,
              "question": "ما هي عاصمة السعودية ؟",
              "stage_id": 1,
              "created_at": "2022-03-17T17:14:55.000000Z",
              "updated_at": "2022-09-26T16:47:13.000000Z",
              "lesson_id": null,
              "material_id": null,
              "lesson_name": null,
              "pivot": {
                "sentence_id": 10,
                "question_id": 2,
                "question_mark": 1,
                "order": "3"
              },
              "choices": [
                {
                  "id": 122,
                  "name": "اختيار اول اختيار اول اختيار اول اختيار اول اختيار اول اختيار اول اختيار اول اختيار اول اختيار اول اختيار اول اختيار اول اختيار اول اختيار اول اختيار اول اختيار اول اختيار اول اختيار اول",
                  "is_correct": 1,
                  "question_id": 2,
                  "created_at": "2022-09-26T16:47:13.000000Z",
                  "updated_at": "2022-09-26T16:47:13.000000Z",
                  "order": "1"
                },
                {
                  "id": 123,
                  "name": "اختيار ثاني",
                  "is_correct": 0,
                  "question_id": 2,
                  "created_at": "2022-09-26T16:47:13.000000Z",
                  "updated_at": "2022-09-26T16:47:13.000000Z",
                  "order": "1"
                },
                {
                  "id": 124,
                  "name": "اختيار ثالث",
                  "is_correct": 0,
                  "question_id": 2,
                  "created_at": "2022-09-26T16:47:13.000000Z",
                  "updated_at": "2022-09-26T16:47:13.000000Z",
                  "order": "1"
                },
                {
                  "id": 125,
                  "name": "اختيار رابع",
                  "is_correct": 0,
                  "question_id": 2,
                  "created_at": "2022-09-26T16:47:13.000000Z",
                  "updated_at": "2022-09-26T16:47:13.000000Z",
                  "order": "1"
                }
              ]
            },
            {
              "id": 20,
              "question": "hoooooo",
              "stage_id": 1,
              "created_at": "2022-05-09T13:40:05.000000Z",
              "updated_at": "2022-09-26T16:51:25.000000Z",
              "lesson_id": null,
              "material_id": null,
              "lesson_name": null,
              "pivot": {
                "sentence_id": 10,
                "question_id": 20,
                "question_mark": 1,
                "order": "2"
              },
              "choices": [
                {
                  "id": 147,
                  "name": "lk",
                  "is_correct": 1,
                  "question_id": 20,
                  "created_at": "2022-09-26T16:51:25.000000Z",
                  "updated_at": "2022-09-26T16:51:25.000000Z",
                  "order": "1"
                },
                {
                  "id": 148,
                  "name": "asdasdasdasd",
                  "is_correct": 0,
                  "question_id": 20,
                  "created_at": "2022-09-26T16:51:25.000000Z",
                  "updated_at": "2022-09-26T16:51:25.000000Z",
                  "order": "2"
                },
                {
                  "id": 149,
                  "name": "asdasdasdasd",
                  "is_correct": 0,
                  "question_id": 20,
                  "created_at": "2022-09-26T16:51:25.000000Z",
                  "updated_at": "2022-09-26T16:51:25.000000Z",
                  "order": "3"
                },
                {
                  "id": 150,
                  "name": "asdasdasd",
                  "is_correct": 0,
                  "question_id": 20,
                  "created_at": "2022-09-26T16:51:25.000000Z",
                  "updated_at": "2022-09-26T16:51:25.000000Z",
                  "order": "4"
                }
              ]
            }
          ]
        },
        {
          "id": 9,
          "sentence": "تيسست",
          "created_at": "2022-07-24T11:55:10.000000Z",
          "updated_at": "2022-09-26T16:40:34.000000Z",
          "stage_id": 1,
          "lesson_id": null,
          "material_id": null,
          "lesson_name": "محمد",
          "questions": [
            {
              "id": 4,
              "question": "ما هي عاصمة مصر ؟",
              "stage_id": 1,
              "created_at": "2022-03-17T17:14:55.000000Z",
              "updated_at": "2022-03-17T17:14:55.000000Z",
              "lesson_id": null,
              "material_id": null,
              "lesson_name": null,
              "pivot": {
                "sentence_id": 9,
                "question_id": 4,
                "question_mark": 1,
                "order": "3"
              },
              "choices": [
                {
                  "id": 114,
                  "name": "اختيار اول",
                  "is_correct": 0,
                  "question_id": 4,
                  "created_at": "2022-09-26T16:44:42.000000Z",
                  "updated_at": "2022-09-26T16:44:42.000000Z",
                  "order": "1"
                },
                {
                  "id": 115,
                  "name": "اختيار ثاني",
                  "is_correct": 1,
                  "question_id": 4,
                  "created_at": "2022-09-26T16:44:42.000000Z",
                  "updated_at": "2022-09-26T16:44:42.000000Z",
                  "order": "1"
                },
                {
                  "id": 116,
                  "name": "اختيار ثالث",
                  "is_correct": 0,
                  "question_id": 4,
                  "created_at": "2022-09-26T16:44:42.000000Z",
                  "updated_at": "2022-09-26T16:44:42.000000Z",
                  "order": "1"
                },
                {
                  "id": 117,
                  "name": "اختيار رابع",
                  "is_correct": 0,
                  "question_id": 4,
                  "created_at": "2022-09-26T16:44:42.000000Z",
                  "updated_at": "2022-09-26T16:44:42.000000Z",
                  "order": "1"
                }
              ]
            },
            {
              "id": 22,
              "question": "سؤال داخل النحو درس الفعل المجرد والمزيد ٣١",
              "stage_id": 1,
              "created_at": "2022-07-25T15:27:09.000000Z",
              "updated_at": "2022-07-25T15:29:04.000000Z",
              "lesson_id": 1,
              "material_id": null,
              "lesson_name": null,
              "pivot": {
                "sentence_id": 9,
                "question_id": 22,
                "question_mark": 1,
                "order": "2"
              },
              "choices": [
                {
                  "id": 118,
                  "name": "شسيشسي",
                  "is_correct": 0,
                  "question_id": 22,
                  "created_at": "2022-09-26T16:45:40.000000Z",
                  "updated_at": "2022-09-26T16:45:40.000000Z",
                  "order": "1"
                },
                {
                  "id": 119,
                  "name": "سيشسي",
                  "is_correct": 0,
                  "question_id": 22,
                  "created_at": "2022-09-26T16:45:40.000000Z",
                  "updated_at": "2022-09-26T16:45:40.000000Z",
                  "order": "2"
                },
                {
                  "id": 120,
                  "name": "ضصثيضسيشيشسي",
                  "is_correct": 1,
                  "question_id": 22,
                  "created_at": "2022-09-26T16:45:40.000000Z",
                  "updated_at": "2022-09-26T16:45:40.000000Z",
                  "order": "3"
                },
                {
                  "id": 121,
                  "name": "asdasdasdasdasd",
                  "is_correct": 0,
                  "question_id": 22,
                  "created_at": "2022-09-26T16:45:40.000000Z",
                  "updated_at": "2022-09-26T16:45:40.000000Z",
                  "order": "4"
                }
              ]
            },
            {
              "id": 3,
              "question": "ما هي عاصمة مصر ٢ ؟",
              "stage_id": 1,
              "created_at": "2022-03-17T17:14:55.000000Z",
              "updated_at": "2022-03-17T17:14:55.000000Z",
              "lesson_id": null,
              "material_id": null,
              "lesson_name": null,
              "pivot": {
                "sentence_id": 9,
                "question_id": 3,
                "question_mark": 1,
                "order": "1"
              },
              "choices": [
                {
                  "id": 9,
                  "name": "اختيار اول",
                  "is_correct": 1,
                  "question_id": 3,
                  "created_at": "2022-03-17T17:14:55.000000Z",
                  "updated_at": "2022-03-17T17:14:55.000000Z",
                  "order": "1"
                },
                {
                  "id": 10,
                  "name": "اختيار ثاني",
                  "is_correct": 0,
                  "question_id": 3,
                  "created_at": "2022-03-17T17:14:55.000000Z",
                  "updated_at": "2022-03-17T17:14:55.000000Z",
                  "order": "1"
                },
                {
                  "id": 11,
                  "name": "اختيار ثالث",
                  "is_correct": 0,
                  "question_id": 3,
                  "created_at": "2022-03-17T17:14:55.000000Z",
                  "updated_at": "2022-03-17T17:14:55.000000Z",
                  "order": "1"
                },
                {
                  "id": 12,
                  "name": "اختيار رابع",
                  "is_correct": 0,
                  "question_id": 3,
                  "created_at": "2022-03-17T17:14:55.000000Z",
                  "updated_at": "2022-03-17T17:14:55.000000Z",
                  "order": "1"
                }
              ]
            }
          ]
        },
        {
          "id": 8,
          "sentence": "<p>تيست</p>",
          "created_at": "2022-07-24T11:53:36.000000Z",
          "updated_at": "2022-09-26T16:41:00.000000Z",
          "stage_id": 1,
          "lesson_id": null,
          "material_id": null,
          "lesson_name": null,
          "questions": [
            {
              "id": 25,
              "question": "Aliquid quasi et mol",
              "stage_id": 1,
              "created_at": "2022-08-23T14:54:17.000000Z",
              "updated_at": "2022-09-26T16:47:23.000000Z",
              "lesson_id": 4,
              "material_id": 3,
              "lesson_name": "محمد",
              "pivot": {
                "sentence_id": 8,
                "question_id": 25,
                "question_mark": 1,
                "order": "1"
              },
              "choices": [
                {
                  "id": 126,
                  "name": "asdadasdasd",
                  "is_correct": 0,
                  "question_id": 25,
                  "created_at": "2022-09-26T16:47:23.000000Z",
                  "updated_at": "2022-09-26T16:47:23.000000Z",
                  "order": "1"
                },
                {
                  "id": 127,
                  "name": "asdasdasdas",
                  "is_correct": 0,
                  "question_id": 25,
                  "created_at": "2022-09-26T16:47:23.000000Z",
                  "updated_at": "2022-09-26T16:47:23.000000Z",
                  "order": "2"
                },
                {
                  "id": 128,
                  "name": "sadasdasdas",
                  "is_correct": 0,
                  "question_id": 25,
                  "created_at": "2022-09-26T16:47:23.000000Z",
                  "updated_at": "2022-09-26T16:47:23.000000Z",
                  "order": "3"
                },
                {
                  "id": 129,
                  "name": "sadasdasda",
                  "is_correct": 1,
                  "question_id": 25,
                  "created_at": "2022-09-26T16:47:23.000000Z",
                  "updated_at": "2022-09-26T16:47:23.000000Z",
                  "order": "4"
                }
              ]
            },
            {
              "id": 23,
              "question": "xdsadsa",
              "stage_id": 1,
              "created_at": "2022-08-20T14:38:08.000000Z",
              "updated_at": "2022-09-26T16:48:02.000000Z",
              "lesson_id": null,
              "material_id": null,
              "lesson_name": null,
              "pivot": {
                "sentence_id": 8,
                "question_id": 23,
                "question_mark": 1,
                "order": "2"
              },
              "choices": [
                {
                  "id": 135,
                  "name": "asasasas",
                  "is_correct": 0,
                  "question_id": 23,
                  "created_at": "2022-09-26T16:48:02.000000Z",
                  "updated_at": "2022-09-26T16:48:02.000000Z",
                  "order": "1"
                },
                {
                  "id": 136,
                  "name": "sasasasas",
                  "is_correct": 0,
                  "question_id": 23,
                  "created_at": "2022-09-26T16:48:02.000000Z",
                  "updated_at": "2022-09-26T16:48:02.000000Z",
                  "order": "2"
                },
                {
                  "id": 137,
                  "name": "شسيبلزبنشتسي",
                  "is_correct": 0,
                  "question_id": 23,
                  "created_at": "2022-09-26T16:48:02.000000Z",
                  "updated_at": "2022-09-26T16:48:02.000000Z",
                  "order": "3"
                },
                {
                  "id": 138,
                  "name": "شسيشسيشسي",
                  "is_correct": 1,
                  "question_id": 23,
                  "created_at": "2022-09-26T16:48:02.000000Z",
                  "updated_at": "2022-09-26T16:48:02.000000Z",
                  "order": "4"
                }
              ]
            },
            {
              "id": 24,
              "question": "Minim vero voluptate",
              "stage_id": 1,
              "created_at": "2022-08-22T14:13:54.000000Z",
              "updated_at": "2022-09-26T16:47:39.000000Z",
              "lesson_id": 8,
              "material_id": null,
              "lesson_name": null,
              "pivot": {
                "sentence_id": 8,
                "question_id": 24,
                "question_mark": 1,
                "order": "3"
              },
              "choices": [
                {
                  "id": 130,
                  "name": "dasdasdasdasd",
                  "is_correct": 0,
                  "question_id": 24,
                  "created_at": "2022-09-26T16:47:39.000000Z",
                  "updated_at": "2022-09-26T16:47:39.000000Z",
                  "order": "1"
                },
                {
                  "id": 131,
                  "name": "sadasdasd",
                  "is_correct": 1,
                  "question_id": 24,
                  "created_at": "2022-09-26T16:47:39.000000Z",
                  "updated_at": "2022-09-26T16:47:39.000000Z",
                  "order": "2"
                },
                {
                  "id": 132,
                  "name": "asdasdasdasd",
                  "is_correct": 0,
                  "question_id": 24,
                  "created_at": "2022-09-26T16:47:39.000000Z",
                  "updated_at": "2022-09-26T16:47:39.000000Z",
                  "order": "3"
                },
                {
                  "id": 133,
                  "name": "asdasdasdasd",
                  "is_correct": 0,
                  "question_id": 24,
                  "created_at": "2022-09-26T16:47:39.000000Z",
                  "updated_at": "2022-09-26T16:47:39.000000Z",
                  "order": "4"
                },
                {
                  "id": 134,
                  "name": "sadasdasd",
                  "is_correct": 0,
                  "question_id": 24,
                  "created_at": "2022-09-26T16:47:39.000000Z",
                  "updated_at": "2022-09-26T16:47:39.000000Z",
                  "order": "5"
                }
              ]
            }
          ]
        },
        {
          "id": 7,
          "sentence": "تيست",
          "created_at": "2022-07-24T11:50:44.000000Z",
          "updated_at": "2022-07-24T11:50:44.000000Z",
          "stage_id": null,
          "lesson_id": null,
          "material_id": null,
          "lesson_name": null,
          "questions": []
        },
        {
          "id": 6,
          "sentence": "<p><b><font style=\"background-color: rgb(255, 255, 0);\" color=\"#000000\"><span style=\"font-family: Arial; font-size: 15.2px;\">للُّغَة العَرَبِيّة</span><span style=\"font-family: Arial; font-size: 15.2px;\"> هي أكثر اللغات </span><a href=\"https://ar.wikipedia.org/wiki/%D9%84%D8%BA%D8%A7%D8%AA_%D8%B3%D8%A7%D9%85%D9%8A%D8%A9\" title=\"لغات سامية\" style=\"background-image: none; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; font-family: Arial; font-size: 15.2px;\">السامية</a><span style=\"font-family: Arial; font-size: 15.2px;\"> تحدثًا، وإحدى أكثر اللغات انتشاراً في العالم، يتحدثها أكثر من 467 مليون نسمة،</span><sup id=\"cite_ref-4\" class=\"reference\" style=\"line-height: 1.3em; unicode-bidi: isolate; white-space: nowrap; font-size: 11px; direction: rtl; font-family: Arial; user-select: none !important;\"><a href=\"https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%84%D8%BA%D8%A9_%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9#cite_note-4\" style=\"background-image: none; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;\">[4]</a></sup><sup id=\"fn_1_back\" style=\"line-height: 1.3em; font-family: Arial;\"><small>(<a href=\"https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%84%D8%BA%D8%A9_%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9#fn_1\" style=\"background-image: none; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;\">1</a>)</small></sup><span style=\"font-family: Arial; font-size: 15.2px;\"> ويتوزع متحدثوها في </span><a href=\"https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%88%D8%B7%D9%86_%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A\" title=\"الوطن العربي\" style=\"background-image: none; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; font-family: Arial; font-size: 15.2px;\">الوطن العربي</a><span style=\"font-family: Arial; font-size: 15.2px;\">، بالإضافة إلى العديد من المناطق الأخرى المجاورة </span><a href=\"https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%A3%D9%87%D9%88%D8%A7%D8%B2\" title=\"الأهواز\" style=\"background-image: none; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; font-family: Arial; font-size: 15.2px;\">كالأحواز</a><span style=\"font-family: Arial; font-size: 15.2px;\"> </span><a href=\"https://ar.wikipedia.org/wiki/%D8%AA%D8%B1%D9%83%D9%8A%D8%A7\" title=\"تركيا\" style=\"background-image: none; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; font-family: Arial; font-size: 15.2px;\">وتركيا</a><span style=\"font-family: Arial; font-size: 15.2px;\"> </span><a href=\"https://ar.wikipedia.org/wiki/%D8%AA%D8%B4%D8%A7%D8%AF\" title=\"تشاد\" style=\"background-image: none; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; font-family: Arial; font-size: 15.2px;\">وتشاد</a><span style=\"font-family: Arial; font-size: 15.2px;\"> </span><a href=\"https://ar.wikipedia.org/wiki/%D9%85%D8%A7%D9%84%D9%8A\" title=\"مالي\" style=\"background-image: none; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; font-family: Arial; font-size: 15.2px;\">ومالي</a><span style=\"font-family: Arial; font-size: 15.2px;\"> </span><a href=\"https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B3%D9%86%D8%BA%D8%A7%D9%84\" title=\"السنغال\" style=\"background-image: none; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; font-family: Arial; font-size: 15.2px;\">والسنغال</a><span style=\"font-family: Arial; font-size: 15.2px;\"> </span><a href=\"https://ar.wikipedia.org/wiki/%D8%A5%D8%B1%D9%8A%D8%AA%D8%B1%D9%8A%D8%A7\" title=\"إريتريا\" style=\"background-image: none; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; font-family: Arial; font-size: 15.2px;\">وإرتيريا</a><span style=\"font-family: Arial; font-size: 15.2px;\"> </span><a href=\"https://ar.wikipedia.org/wiki/%D8%A5%D8%AB%D9%8A%D9%88%D8%A8%D9%8A%D8%A7\" title=\"إثيوبيا\" style=\"background-image: none; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; font-family: Arial; font-size: 15.2px;\">وإثيوبيا</a><span style=\"font-family: Arial; font-size: 15.2px;\"> </span><a href=\"https://ar.wikipedia.org/wiki/%D8%AC%D9%86%D9%88%D8%A8_%D8%A7%D9%84%D8%B3%D9%88%D8%AF%D8%A7%D9%86\" title=\"جنوب السودان\" style=\"background-image: none; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; font-family: Arial; font-size: 15.2px;\">وجنوب السودان</a><span style=\"font-family: Arial; font-size: 15.2px;\"> </span><a href=\"https://ar.wikipedia.org/wiki/%D8%A5%D9%8A%D8%B1%D8%A7%D9%86\" title=\"إيران\" style=\"background-image: none; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; font-family: Arial; font-size: 15.2px;\">وإيران</a><span style=\"font-family: Arial; font-size: 15.2px;\">. وبذلك فهي تحتل المركز الرابع أو الخامس من حيث اللغات الأكثر انتشارًا في العالم،</span><sup id=\"cite_ref-5\" class=\"reference\" style=\"line-height: 1.3em; unicode-bidi: isolate; white-space: nowrap; font-size: 11px; direction: rtl; font-family: Arial; user-select: none !important;\"><a href=\"https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%84%D8%BA%D8%A9_%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9#cite_note-5\" style=\"background-image: none; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;\">[5]</a></sup><sup id=\"cite_ref-6\" class=\"reference\" style=\"line-height: 1.3em; unicode-bidi: isolate; white-space: nowrap; font-size: 11px; direction: rtl; font-family: Arial; user-select: none !important;\"><a href=\"https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%84%D8%BA%D8%A9_%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9#cite_note-6\" style=\"background-image: none; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;\">[6]</a></sup><sup id=\"cite_ref-7\" class=\"reference\" style=\"line-height: 1.3em; unicode-bidi: isolate; white-space: nowrap; font-size: 11px; direction: rtl; font-family: Arial; user-select: none !important;\"><a href=\"https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%84%D8%BA%D8%A9_%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9#cite_note-7\" style=\"background-image: none; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;\">[7]</a></sup><span style=\"font-family: Arial; font-size: 15.2px;\"> وهي تحتل المركز الثالث تبعًا لعدد الدول التي تعترف بها كلغة رسمية؛ إذ تعترف بها 27 دولة كلغة رسمية</span></font></b><br></p>",
          "created_at": "2022-06-07T12:22:04.000000Z",
          "updated_at": "2022-08-20T16:59:50.000000Z",
          "stage_id": 5,
          "lesson_id": null,
          "material_id": 1,
          "lesson_name": null,
          "questions": [
            {
              "id": 11,
              "question": "كم يبلغ عدد أحرف اللغة العربية؟",
              "stage_id": 5,
              "created_at": "2022-03-31T09:45:26.000000Z",
              "updated_at": "2022-03-31T09:45:26.000000Z",
              "lesson_id": null,
              "material_id": null,
              "lesson_name": null,
              "pivot": {
                "sentence_id": 6,
                "question_id": 11,
                "question_mark": 60,
                "order": "2"
              },
              "choices": [
                {
                  "id": 40,
                  "name": "26 حرف",
                  "is_correct": 0,
                  "question_id": 11,
                  "created_at": "2022-03-31T09:45:26.000000Z",
                  "updated_at": "2022-03-31T09:45:26.000000Z",
                  "order": "1"
                },
                {
                  "id": 41,
                  "name": "29 حرف",
                  "is_correct": 1,
                  "question_id": 11,
                  "created_at": "2022-03-31T09:45:26.000000Z",
                  "updated_at": "2022-03-31T09:45:26.000000Z",
                  "order": "1"
                },
                {
                  "id": 42,
                  "name": "23 حرف",
                  "is_correct": 0,
                  "question_id": 11,
                  "created_at": "2022-03-31T09:45:26.000000Z",
                  "updated_at": "2022-03-31T09:45:26.000000Z",
                  "order": "1"
                },
                {
                  "id": 43,
                  "name": "20 حرف",
                  "is_correct": 0,
                  "question_id": 11,
                  "created_at": "2022-03-31T09:45:26.000000Z",
                  "updated_at": "2022-03-31T09:45:26.000000Z",
                  "order": "1"
                }
              ]
            },
            {
              "id": 21,
              "question": "بماذا تشتهر اللغة العربية",
              "stage_id": 1,
              "created_at": "2022-06-07T12:21:42.000000Z",
              "updated_at": "2022-09-26T16:48:31.000000Z",
              "lesson_id": null,
              "material_id": null,
              "lesson_name": null,
              "pivot": {
                "sentence_id": 6,
                "question_id": 21,
                "question_mark": 60,
                "order": "1"
              },
              "choices": [
                {
                  "id": 143,
                  "name": "لغة الصاد",
                  "is_correct": 0,
                  "question_id": 21,
                  "created_at": "2022-09-26T16:48:31.000000Z",
                  "updated_at": "2022-09-26T16:48:31.000000Z",
                  "order": "1"
                },
                {
                  "id": 144,
                  "name": "لغة الضاد",
                  "is_correct": 1,
                  "question_id": 21,
                  "created_at": "2022-09-26T16:48:31.000000Z",
                  "updated_at": "2022-09-26T16:48:31.000000Z",
                  "order": "2"
                },
                {
                  "id": 145,
                  "name": "adasdasd",
                  "is_correct": 0,
                  "question_id": 21,
                  "created_at": "2022-09-26T16:48:31.000000Z",
                  "updated_at": "2022-09-26T16:48:31.000000Z",
                  "order": "3"
                },
                {
                  "id": 146,
                  "name": "asdasfdvdfg,jkh",
                  "is_correct": 0,
                  "question_id": 21,
                  "created_at": "2022-09-26T16:48:31.000000Z",
                  "updated_at": "2022-09-26T16:48:31.000000Z",
                  "order": "4"
                }
              ]
            }
          ]
        },
        {
          "id": 4,
          "sentence": "<p><span style=\"color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; text-align: justify;\">خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد، مما يجعله أكثر من 2000 عام في القدم. قام البروفيسور \"ريتشارد ماك لينتوك\" (Richard McClintock) وهو بروفيسور اللغة اللاتينية في جامعة هامبدن-سيدني في فيرجينيا بالبحث عن أصول كلمة لاتينية غامضة في نص لوريم إيبسوم وهي \"consectetur\"، وخلال تتبعه لهذه الكلمة في الأدب اللاتيني اكتشف المصدر الغير قابل للشك. فلقد اتضح أن كلمات نص لوريم إيبسوم</span><br></p>",
          "created_at": "2022-03-31T10:24:26.000000Z",
          "updated_at": "2022-03-31T10:24:26.000000Z",
          "stage_id": null,
          "lesson_id": null,
          "material_id": null,
          "lesson_name": null,
          "questions": [
            {
              "id": 10,
              "question": "ما هي أقصر كلمة موجودة باللغة العربية؟",
              "stage_id": 5,
              "created_at": "2022-03-31T09:42:56.000000Z",
              "updated_at": "2022-03-31T09:42:56.000000Z",
              "lesson_id": null,
              "material_id": null,
              "lesson_name": null,
              "pivot": {
                "sentence_id": 4,
                "question_id": 10,
                "question_mark": 10,
                "order": "1"
              },
              "choices": [
                {
                  "id": 36,
                  "name": "ق",
                  "is_correct": 1,
                  "question_id": 10,
                  "created_at": "2022-03-31T09:42:56.000000Z",
                  "updated_at": "2022-03-31T09:42:56.000000Z",
                  "order": "1"
                },
                {
                  "id": 37,
                  "name": "ع",
                  "is_correct": 0,
                  "question_id": 10,
                  "created_at": "2022-03-31T09:42:56.000000Z",
                  "updated_at": "2022-03-31T09:42:56.000000Z",
                  "order": "1"
                },
                {
                  "id": 38,
                  "name": "في",
                  "is_correct": 0,
                  "question_id": 10,
                  "created_at": "2022-03-31T09:42:56.000000Z",
                  "updated_at": "2022-03-31T09:42:56.000000Z",
                  "order": "1"
                },
                {
                  "id": 39,
                  "name": "لا",
                  "is_correct": 0,
                  "question_id": 10,
                  "created_at": "2022-03-31T09:42:56.000000Z",
                  "updated_at": "2022-03-31T09:42:56.000000Z",
                  "order": "1"
                }
              ]
            },
            {
              "id": 11,
              "question": "كم يبلغ عدد أحرف اللغة العربية؟",
              "stage_id": 5,
              "created_at": "2022-03-31T09:45:26.000000Z",
              "updated_at": "2022-03-31T09:45:26.000000Z",
              "lesson_id": null,
              "material_id": null,
              "lesson_name": null,
              "pivot": {
                "sentence_id": 4,
                "question_id": 11,
                "question_mark": 8,
                "order": "1"
              },
              "choices": [
                {
                  "id": 40,
                  "name": "26 حرف",
                  "is_correct": 0,
                  "question_id": 11,
                  "created_at": "2022-03-31T09:45:26.000000Z",
                  "updated_at": "2022-03-31T09:45:26.000000Z",
                  "order": "1"
                },
                {
                  "id": 41,
                  "name": "29 حرف",
                  "is_correct": 1,
                  "question_id": 11,
                  "created_at": "2022-03-31T09:45:26.000000Z",
                  "updated_at": "2022-03-31T09:45:26.000000Z",
                  "order": "1"
                },
                {
                  "id": 42,
                  "name": "23 حرف",
                  "is_correct": 0,
                  "question_id": 11,
                  "created_at": "2022-03-31T09:45:26.000000Z",
                  "updated_at": "2022-03-31T09:45:26.000000Z",
                  "order": "1"
                },
                {
                  "id": 43,
                  "name": "20 حرف",
                  "is_correct": 0,
                  "question_id": 11,
                  "created_at": "2022-03-31T09:45:26.000000Z",
                  "updated_at": "2022-03-31T09:45:26.000000Z",
                  "order": "1"
                }
              ]
            }
          ]
        },
        {
          "id": 3,
          "sentence": "<p><span style=\"color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; text-align: justify;\">هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.</span><br></p>",
          "created_at": "2022-03-31T10:23:21.000000Z",
          "updated_at": "2022-03-31T10:23:21.000000Z",
          "stage_id": null,
          "lesson_id": null,
          "material_id": null,
          "lesson_name": null,
          "questions": [
            {
              "id": 8,
              "question": "ما هو معنى كلمة القاموس باللغة؟",
              "stage_id": 5,
              "created_at": "2022-03-31T09:36:41.000000Z",
              "updated_at": "2022-03-31T09:36:41.000000Z",
              "lesson_id": null,
              "material_id": null,
              "lesson_name": null,
              "pivot": {
                "sentence_id": 3,
                "question_id": 8,
                "question_mark": 5,
                "order": "1"
              },
              "choices": [
                {
                  "id": 29,
                  "name": "السماء الصافية",
                  "is_correct": 0,
                  "question_id": 8,
                  "created_at": "2022-03-31T09:36:41.000000Z",
                  "updated_at": "2022-03-31T09:36:41.000000Z",
                  "order": "1"
                },
                {
                  "id": 30,
                  "name": "المرجع",
                  "is_correct": 0,
                  "question_id": 8,
                  "created_at": "2022-03-31T09:36:41.000000Z",
                  "updated_at": "2022-03-31T09:36:41.000000Z",
                  "order": "1"
                },
                {
                  "id": 31,
                  "name": "البحر الواسع",
                  "is_correct": 1,
                  "question_id": 8,
                  "created_at": "2022-03-31T09:36:41.000000Z",
                  "updated_at": "2022-03-31T09:36:41.000000Z",
                  "order": "1"
                }
              ]
            },
            {
              "id": 9,
              "question": "ما هو معنى كلمة فرعون؟",
              "stage_id": 5,
              "created_at": "2022-03-31T09:41:06.000000Z",
              "updated_at": "2022-03-31T09:41:06.000000Z",
              "lesson_id": null,
              "material_id": null,
              "lesson_name": null,
              "pivot": {
                "sentence_id": 3,
                "question_id": 9,
                "question_mark": 3,
                "order": "1"
              },
              "choices": [
                {
                  "id": 32,
                  "name": "الاله",
                  "is_correct": 0,
                  "question_id": 9,
                  "created_at": "2022-03-31T09:41:06.000000Z",
                  "updated_at": "2022-03-31T09:41:06.000000Z",
                  "order": "1"
                },
                {
                  "id": 33,
                  "name": "الحاكم",
                  "is_correct": 0,
                  "question_id": 9,
                  "created_at": "2022-03-31T09:41:06.000000Z",
                  "updated_at": "2022-03-31T09:41:06.000000Z",
                  "order": "1"
                },
                {
                  "id": 34,
                  "name": "البيت الكبير",
                  "is_correct": 1,
                  "question_id": 9,
                  "created_at": "2022-03-31T09:41:06.000000Z",
                  "updated_at": "2022-03-31T09:41:06.000000Z",
                  "order": "1"
                },
                {
                  "id": 35,
                  "name": "الجندي",
                  "is_correct": 0,
                  "question_id": 9,
                  "created_at": "2022-03-31T09:41:06.000000Z",
                  "updated_at": "2022-03-31T09:41:06.000000Z",
                  "order": "1"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "sentence": "<p>جملة جديدة</p>",
          "created_at": "2022-03-20T14:43:40.000000Z",
          "updated_at": "2022-03-20T14:43:40.000000Z",
          "stage_id": null,
          "lesson_id": null,
          "material_id": null,
          "lesson_name": null,
          "questions": [
            {
              "id": 5,
              "question": "ما هي عاصمة مصر ٢ ؟",
              "stage_id": 2,
              "created_at": "2022-03-17T17:14:55.000000Z",
              "updated_at": "2022-03-17T17:14:55.000000Z",
              "lesson_id": null,
              "material_id": null,
              "lesson_name": null,
              "pivot": {
                "sentence_id": 2,
                "question_id": 5,
                "question_mark": 2,
                "order": "1"
              },
              "choices": [
                {
                  "id": 17,
                  "name": "اختيار اول",
                  "is_correct": 1,
                  "question_id": 5,
                  "created_at": "2022-03-17T17:14:55.000000Z",
                  "updated_at": "2022-03-17T17:14:55.000000Z",
                  "order": "1"
                },
                {
                  "id": 18,
                  "name": "اختيار ثاني",
                  "is_correct": 0,
                  "question_id": 5,
                  "created_at": "2022-03-17T17:14:55.000000Z",
                  "updated_at": "2022-03-17T17:14:55.000000Z",
                  "order": "1"
                },
                {
                  "id": 19,
                  "name": "اختيار ثالث",
                  "is_correct": 0,
                  "question_id": 5,
                  "created_at": "2022-03-17T17:14:55.000000Z",
                  "updated_at": "2022-03-17T17:14:55.000000Z",
                  "order": "1"
                },
                {
                  "id": 20,
                  "name": "اختيار رابع",
                  "is_correct": 0,
                  "question_id": 5,
                  "created_at": "2022-03-17T17:14:55.000000Z",
                  "updated_at": "2022-03-17T17:14:55.000000Z",
                  "order": "1"
                }
              ]
            }
          ]
        },
        {
          "id": 1,
          "sentence": "<p>تجربة</p>",
          "created_at": "2022-03-20T14:43:24.000000Z",
          "updated_at": "2022-03-20T14:43:24.000000Z",
          "stage_id": null,
          "lesson_id": null,
          "material_id": null,
          "lesson_name": null,
          "questions": [
            {
              "id": 1,
              "question": "ما هي عاصمة مصر ؟",
              "stage_id": 2,
              "created_at": "2022-03-17T17:14:55.000000Z",
              "updated_at": "2022-03-17T17:14:55.000000Z",
              "lesson_id": null,
              "material_id": null,
              "lesson_name": null,
              "pivot": {
                "sentence_id": 1,
                "question_id": 1,
                "question_mark": 12,
                "order": "1"
              },
              "choices": [
                {
                  "id": 1,
                  "name": "اختيار اول",
                  "is_correct": 1,
                  "question_id": 1,
                  "created_at": "2022-03-17T17:14:55.000000Z",
                  "updated_at": "2022-03-17T17:14:55.000000Z",
                  "order": "1"
                },
                {
                  "id": 2,
                  "name": "اختيار ثاني",
                  "is_correct": 0,
                  "question_id": 1,
                  "created_at": "2022-03-17T17:14:55.000000Z",
                  "updated_at": "2022-03-17T17:14:55.000000Z",
                  "order": "1"
                },
                {
                  "id": 3,
                  "name": "اختيار ثالث",
                  "is_correct": 0,
                  "question_id": 1,
                  "created_at": "2022-03-17T17:14:55.000000Z",
                  "updated_at": "2022-03-17T17:14:55.000000Z",
                  "order": "1"
                },
                {
                  "id": 4,
                  "name": "اختيار رابع",
                  "is_correct": 0,
                  "question_id": 1,
                  "created_at": "2022-03-17T17:14:55.000000Z",
                  "updated_at": "2022-03-17T17:14:55.000000Z",
                  "order": "1"
                }
              ]
            },
            {
              "id": 3,
              "question": "ما هي عاصمة مصر ٢ ؟",
              "stage_id": 1,
              "created_at": "2022-03-17T17:14:55.000000Z",
              "updated_at": "2022-03-17T17:14:55.000000Z",
              "lesson_id": null,
              "material_id": null,
              "lesson_name": null,
              "pivot": {
                "sentence_id": 1,
                "question_id": 3,
                "question_mark": 12,
                "order": "1"
              },
              "choices": [
                {
                  "id": 9,
                  "name": "اختيار اول",
                  "is_correct": 1,
                  "question_id": 3,
                  "created_at": "2022-03-17T17:14:55.000000Z",
                  "updated_at": "2022-03-17T17:14:55.000000Z",
                  "order": "1"
                },
                {
                  "id": 10,
                  "name": "اختيار ثاني",
                  "is_correct": 0,
                  "question_id": 3,
                  "created_at": "2022-03-17T17:14:55.000000Z",
                  "updated_at": "2022-03-17T17:14:55.000000Z",
                  "order": "1"
                },
                {
                  "id": 11,
                  "name": "اختيار ثالث",
                  "is_correct": 0,
                  "question_id": 3,
                  "created_at": "2022-03-17T17:14:55.000000Z",
                  "updated_at": "2022-03-17T17:14:55.000000Z",
                  "order": "1"
                },
                {
                  "id": 12,
                  "name": "اختيار رابع",
                  "is_correct": 0,
                  "question_id": 3,
                  "created_at": "2022-03-17T17:14:55.000000Z",
                  "updated_at": "2022-03-17T17:14:55.000000Z",
                  "order": "1"
                }
              ]
            }
          ]
        }
      ],
      "first_page_url": "http://fusha-v2.codebase-product.com/api/dashboard/sentences?page=1",
      "from": 1,
      "last_page": 1,
      "last_page_url": "http://fusha-v2.codebase-product.com/api/dashboard/sentences?page=1",
      "links": [
        {
          "url": null,
          "label": "pagination.previous",
          "active": false
        },
        {
          "url": "http://fusha-v2.codebase-product.com/api/dashboard/sentences?page=1",
          "label": "1",
          "active": true
        },
        {
          "url": null,
          "label": "pagination.next",
          "active": false
        }
      ],
      "next_page_url": null,
      "path": "http://fusha-v2.codebase-product.com/api/dashboard/sentences",
      "per_page": 15,
      "prev_page_url": null,
      "to": 11,
      "total": 11
    },
    "message": "Sentences retrieved Successfully"
  }

  const data = await fakeReq(response)
  return data
}
//-- save apies
const saveQuestion = async (payload) => {
  console.log(payload)

  const response = {
    status: true,
    message: "question saved succesfully",
    data: {
      id: 2,
      question_mark: 20,
    }
  }
  const data = await fakeReq(response)
  return data
}
const putQuestion = async (payload, index) => {
  console.log(payload)
  const response = {
    status: true,
    message: `question edited succesfully ${index}`,
  }
  const data = await fakeReq(response)
  return data

}
const saveSentence = async (payload) => {
  console.log('create sentences', payload)
  const response = {
    status: true,
    message: "sentence saved succesfully",
    data: {
      id: 2,
    }
  }
  const data = await fakeReq(response)
  return data
}
const putSentence = async (payload) => {
  console.group(' edit sentences', payload)
  const response = {
    status: true,
    message: "sentence saved succesfully"
  }
  const data = await fakeReq(response)
  return data
}

const fakeReq = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 1000);
  })
}

export {
  getStages,
  getMaterial,
  getQuestions,
  getSentences,
  //-- save apies
  saveQuestion,
  saveSentence,
  putQuestion,
  putSentence
}