db.users.find()
[
  {
    _id: ObjectId("6400d907e0997f2e29f58abd"),
    username: 'Tejas@gmail.com',
    password: '$2a$10$2R8k2etRIJAlimCwK5FwQuZhkgGQqGIu0fHVbQXnos5qOn5eck4Be',
    firstname: 'Tejas',
    lastname: 'teja',
    isAdmin: false,
    followers: [
      ObjectId("6400d96de0997f2e29f58ac1"),
      ObjectId("6400d935e0997f2e29f58abf")
    ],
    following: [
      ObjectId("6400d935e0997f2e29f58abf"),
      ObjectId("6400d96de0997f2e29f58ac1"),
      ObjectId("64022f1a092d4ce5a14485ae")
    ],
    createdAt: ISODate("2023-03-02T17:12:39.739Z"),
    updatedAt: ISODate("2023-03-05T01:04:48.215Z"),
    __v: 0
  },
  {
    _id: ObjectId("6400d935e0997f2e29f58abf"),
    username: 'nayan@gmail.com',
    password: '$2a$10$qLdlU6iMajLXifRG8HKUE.2F6eNdVrWwQmXIuWAerm1ukMFhMxd7.',
    firstname: 'Nayan',
    lastname: 'Biswas',
    isAdmin: false,
    followers: [
      ObjectId("64022f1a092d4ce5a14485ae"),
      ObjectId("6400d907e0997f2e29f58abd"),
      ObjectId("6400d96de0997f2e29f58ac1")
    ],
    following: [
      ObjectId("6400d907e0997f2e29f58abd"),
      ObjectId("6400d96de0997f2e29f58ac1"),
      ObjectId("64022f1a092d4ce5a14485ae")
    ],
    createdAt: ISODate("2023-03-02T17:13:25.820Z"),
    updatedAt: ISODate("2023-03-05T00:56:46.011Z"),
    __v: 0
  },
  {
    _id: ObjectId("6400d96de0997f2e29f58ac1"),
    username: 'pooja@gmail.com',
    password: '$2a$10$R6MAQAVJ4tSdX2ozrcalleALnQ0kES5fJeiYQtbM5pOhJFZHqMia.',
    firstname: 'Pooja',
    lastname: 'Ladha',
    isAdmin: false,
    followers: [
      '64022f1a092d4ce5a14485ae',
      ObjectId("6400d907e0997f2e29f58abd"),
      ObjectId("6400d935e0997f2e29f58abf")
    ],
    following: [
      ObjectId("64022f1a092d4ce5a14485ae"),
      ObjectId("6400d935e0997f2e29f58abf"),
      ObjectId("6400d907e0997f2e29f58abd")
    ],
    createdAt: ISODate("2023-03-02T17:14:21.738Z"),
    updatedAt: ISODate("2023-03-05T01:02:41.875Z"),
    __v: 0
  },
  {
    _id: ObjectId("64022f1a092d4ce5a14485ae"),
    username: 'biki@gmail.com',
    password: '$2a$10$QAJUxDrvsv2ee.SPDtONOuolE40RlcaKHCZ1567Ka.ZqAJGj3DIma',
    firstname: 'biki',
    lastname: 'dey',
    isAdmin: false,
    followers: [
      ObjectId("6400d907e0997f2e29f58abd"),
      ObjectId("6400d96de0997f2e29f58ac1"),
      ObjectId("6400d935e0997f2e29f58abf")
    ],
    following: [
      '6400d96de0997f2e29f58ac1',
      ObjectId("6400d935e0997f2e29f58abf")
    ],
    createdAt: ISODate("2023-03-03T17:32:10.326Z"),
    updatedAt: ISODate("2023-03-05T01:04:48.215Z"),
    __v: 0
  }
]

 //.......................................... post data..........................

 db.posts.find()
 [
   {
     _id: ObjectId("6403eae7c2262fa5e511a29b"),
     userId: ObjectId("64022f1a092d4ce5a14485ae"),
     desc: "Hey I'm Biki from lumding assam",
     likes: [],
     createdAt: ISODate("2023-03-05T01:05:43.133Z"),
     updatedAt: ISODate("2023-03-05T17:14:36.634Z"),
     __v: 0
   },
   {
     _id: ObjectId("6404acaf6f1d6596737774ed"),
     userId: ObjectId("6400d96de0997f2e29f58ac1"),
     desc: 'greeting i m pooja i am from lumding assam',
     likes: [ '6400d96de0997f2e29f58ac1', '6400d935e0997f2e29f58abf' ],
     createdAt: ISODate("2023-03-05T14:52:31.498Z"),
     updatedAt: ISODate("2023-03-05T17:18:23.046Z"),
     __v: 0
   },
   {
     _id: ObjectId("6404acf96f1d6596737774ef"),
     userId: ObjectId("6400d96de0997f2e29f58ac1"),
     desc: "Hello this is  Tejas and I'm from Mumbai",
     likes: [],
     createdAt: ISODate("2023-03-05T14:53:45.247Z"),
     updatedAt: ISODate("2023-03-05T14:53:45.247Z"),
     __v: 0
   },
   {
     _id: ObjectId("6404ad286f1d6596737774f1"),
     userId: ObjectId("6400d935e0997f2e29f58abf"),
     desc: "Hello this is  Nayan and I'm from Assam",
     likes: [],
     createdAt: ISODate("2023-03-05T14:54:32.758Z"),
     updatedAt: ISODate("2023-03-05T14:54:32.758Z"),
     __v: 0
   }
 ]
 
