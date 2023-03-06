db.users.find()
[
  {
    _id: ObjectId("6405707fa43fe74ff43fffee"),
    username: 'tejas@gmail.com',
    password: '$2a$10$3lLktQrIxOildhUReVJZTuMxNUP7KgqU1BeSdkjsNREonbVDYqFR.',
    firstname: 'Tejas',
    lastname: 'Kambel',
    isAdmin: false,
    followers: [
      ObjectId("640570a3a43fe74ff43ffff0"),
      ObjectId("640570bea43fe74ff43ffff2"),
      ObjectId("640570e4a43fe74ff43ffff4")
    ],
    following: [
      ObjectId("640570a3a43fe74ff43ffff0"),
      ObjectId("640570bea43fe74ff43ffff2"),
      ObjectId("640570e4a43fe74ff43ffff4")
    ],
    createdAt: ISODate("2023-03-06T04:47:59.270Z"),
    updatedAt: ISODate("2023-03-06T05:20:08.162Z"),
    __v: 0
  },
  {
    _id: ObjectId("640570a3a43fe74ff43ffff0"),
    username: 'nayan@gmail.com',
    password: '$2a$10$45XZAU42QNnzs3DOb04n3edeL9BAIwX8jkH4Zv4DBvDHvdrFQ9tta',
    firstname: 'Nayan',
    lastname: 'Biswas',
    isAdmin: false,
    followers: [
      ObjectId("6405707fa43fe74ff43fffee"),
      ObjectId("640570bea43fe74ff43ffff2"),
      ObjectId("640570e4a43fe74ff43ffff4")
    ],
    following: [
      ObjectId("6405707fa43fe74ff43fffee"),
      ObjectId("640570bea43fe74ff43ffff2"),
      ObjectId("640570e4a43fe74ff43ffff4")
    ],
    createdAt: ISODate("2023-03-06T04:48:35.879Z"),
    updatedAt: ISODate("2023-03-06T05:11:50.607Z"),
    __v: 0
  },
  {
    _id: ObjectId("640570bea43fe74ff43ffff2"),
    username: 'pooja@gmail.com',
    password: '$2a$10$9Ol1soLmCnJbqrznPQ.hlOP0lRTVlPWWtSzzT.I6ugQ7noyS5NZKm',
    firstname: 'Pooja',
    lastname: 'ladha',
    isAdmin: false,
    followers: [
      ObjectId("6405707fa43fe74ff43fffee"),
      ObjectId("640570a3a43fe74ff43ffff0"),
      ObjectId("640570e4a43fe74ff43ffff4")
    ],
    following: [
      ObjectId("640570e4a43fe74ff43ffff4"),
      ObjectId("640570a3a43fe74ff43ffff0"),
      ObjectId("6405707fa43fe74ff43fffee")
    ],
    createdAt: ISODate("2023-03-06T04:49:02.788Z"),
    updatedAt: ISODate("2023-03-06T05:11:37.282Z"),
    __v: 0
  },
  {
    _id: ObjectId("640570e4a43fe74ff43ffff4"),
    username: 'bishal@gmail.com',
    password: '$2a$10$KJbu43Z1fbpOvh.GTTWKW.5512nY.9zvGZfqdpOJ4.cRFALwGJ9wG',
    firstname: 'Bishal',
    lastname: 'Das',
    isAdmin: false,
    followers: [
      ObjectId("6405707fa43fe74ff43fffee"),
      ObjectId("640570a3a43fe74ff43ffff0"),
      ObjectId("640570bea43fe74ff43ffff2")
    ],
    following: [
      ObjectId("640570bea43fe74ff43ffff2"),
      ObjectId("640570a3a43fe74ff43ffff0"),
      ObjectId("6405707fa43fe74ff43fffee")
    ],
    createdAt: ISODate("2023-03-06T04:49:40.433Z"),
    updatedAt: ISODate("2023-03-06T05:20:08.166Z"),
    __v: 0
  }
]

 //.......................................... post data..........................

 db.posts.find()
[
  {
    _id: ObjectId("64058bf8493c6df5ce417b24"),
    userId: ObjectId("6405707fa43fe74ff43fffee"),
    desc: 'Hello this is Tejas from Mumbai',
    likes: [],
    createdAt: ISODate("2023-03-06T06:45:12.475Z"),
    updatedAt: ISODate("2023-03-06T06:45:12.475Z"),
    __v: 0
  },
  {
    _id: ObjectId("64058c26493c6df5ce417b26"),
    userId: ObjectId("640570a3a43fe74ff43ffff0"),
    desc: 'Hello this is Nayan from Assam',
    likes: [],
    createdAt: ISODate("2023-03-06T06:45:58.555Z"),
    updatedAt: ISODate("2023-03-06T06:45:58.555Z"),
    __v: 0
  },
  {
    _id: ObjectId("64058c4a493c6df5ce417b28"),
    userId: ObjectId("640570bea43fe74ff43ffff2"),
    desc: 'Hello this is Pooja from Rajasthan',
    likes: [],
    createdAt: ISODate("2023-03-06T06:46:34.924Z"),
    updatedAt: ISODate("2023-03-06T06:46:34.924Z"),
    __v: 0
  },
  {
    _id: ObjectId("64058c83493c6df5ce417b2a"),
    userId: ObjectId("640570e4a43fe74ff43ffff4"),
    desc: 'Hello this is Bishal from Assam Lumding',
    likes: [ '640570e4a43fe74ff43ffff4' ],
    createdAt: ISODate("2023-03-06T06:47:31.232Z"),
    updatedAt: ISODate("2023-03-06T06:50:52.048Z"),
    __v: 0
  }
]
