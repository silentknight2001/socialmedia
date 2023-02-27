db.users.insertMany([
  {
    _id: ObjectId("63ceca4e16d5d7fb4f3f3455"),
    username: "@pooja",
    password: "pooja1234",
    firstname: "pooja",
    lastname: "das",
    isAdmin: false,
    followers: [],
    following: [ObjectId("63d4051a252ef6c3d50d7f17")],
    createdAt: ISODate("2023-01-23T17:56:30.502Z"),
    updatedAt: ISODate("2023-02-12T14:50:50.710Z"),
    __v: 0,
  },
  {
    _id: ObjectId("63d00e0569aef8ed0e036944"),
    username: "@santu",
    password: "$2a$10$OMBu0mqd0OfGosiv3WpmoesEcb5CZypRcYaet9BhpJJywvDe3OVJm",
    firstname: "santu",
    lastname: "bardhan",
    isAdmin: false,
    followers: [ObjectId("63d01d02c8ac924ebfa399bd")],
    following: [
      ObjectId("63d4051a252ef6c3d50d7f17"),
      ObjectId("63d01d02c8ac924ebfa399bd"),
    ],
    createdAt: ISODate("2023-01-24T16:57:41.949Z"),
    updatedAt: ISODate("2023-02-12T14:47:40.440Z"),
    __v: 0,
  },
  {
    _id: ObjectId("63d01d02c8ac924ebfa399bd"),
    username: "nayan@gmail.com",
    password: "$2a$10$HhX1373g3oXinTzCpZF0RunvQ.65NRMvvK4nDCZZ0Z6QWCV6YiaFC",
    firstname: "Noyon",
    lastname: "Bbiswas",
    isAdmin: false,
    followers: [
      ObjectId("63d00e0569aef8ed0e036944"),
      ObjectId("63d4051a252ef6c3d50d7f17"),
    ],
    following: [
      ObjectId("63d00e0569aef8ed0e036944"),
      ObjectId("63d4051a252ef6c3d50d7f17"),
    ],
    createdAt: ISODate("2023-01-24T18:01:38.374Z"),
    updatedAt: ISODate("2023-02-12T14:49:53.851Z"),
    __v: 0,
  },
  {
    _id: ObjectId("63d4051a252ef6c3d50d7f17"),
    username: "bishal@gmail.com",
    password: "$2a$10$wh6z5gBqv6L2Vs0WKnfvJ.e23p8oXsit.DxgBeYaFU.EoUMgKDRGG",
    firstname: "bishal",
    lastname: "Das",
    isAdmin: false,
    followers: [
      ObjectId("63d00e0569aef8ed0e036944"),
      ObjectId("63d01d02c8ac924ebfa399bd"),
      ObjectId("63ceca4e16d5d7fb4f3f3455"),
    ],
    following: [ObjectId("63d01d02c8ac924ebfa399bd")],
    createdAt: ISODate("2023-01-27T17:08:42.123Z"),
    updatedAt: ISODate("2023-02-12T14:50:50.709Z"),
    __v: 0,
  }
])

 //.......................................... post data..........................

db.posts.insertMany([
  {
    _id: ObjectId("63e43b65a4f9906017287267"),
    userId: ObjectId("63d00e0569aef8ed0e036944"),
    desc: "my first post",
    likes: [],
    createdAt: ISODate("2023-02-09T00:16:37.376Z"),
    updatedAt: ISODate("2023-02-09T00:16:37.376Z"),
    __v: 0,
  },
  {
    _id: ObjectId("63e6de7bd676086e8f23abac"),
    userId: ObjectId("63d4051a252ef6c3d50d7f17"),
    desc: "hello i am bishal from india",
    likes: ["63d01d02c8ac924ebfa399bd"],
    createdAt: ISODate("2023-02-11T00:16:59.748Z"),
    updatedAt: ISODate("2023-02-11T00:41:51.046Z"),
    __v: 0,
  },
  {
    _id: ObjectId("63e6deacd676086e8f23abae"),
    userId: ObjectId("63d01d02c8ac924ebfa399bd"),
    desc: "hello i am nayan from North-east india",
    likes: [],
    createdAt: ISODate("2023-02-11T00:17:48.473Z"),
    updatedAt: ISODate("2023-02-11T00:17:48.473Z"),
    __v: 0,
  }
])
