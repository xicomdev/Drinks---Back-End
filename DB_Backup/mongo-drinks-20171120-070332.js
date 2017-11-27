
/** api_sessions indexes **/
db.getCollection("api_sessions").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** drinked_groups indexes **/
db.getCollection("drinked_groups").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** friends indexes **/
db.getCollection("friends").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** groups indexes **/
db.getCollection("groups").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** job_lists indexes **/
db.getCollection("job_lists").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** members indexes **/
db.getCollection("members").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** messages indexes **/
db.getCollection("messages").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** options indexes **/
db.getCollection("options").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** reported_groups indexes **/
db.getCollection("reported_groups").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** reported_users indexes **/
db.getCollection("reported_users").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** threads indexes **/
db.getCollection("threads").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** transactions indexes **/
db.getCollection("transactions").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** users indexes **/
db.getCollection("users").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** api_sessions records **/
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59c8d3c208cb82180f8b4569"),
  "token": "",
  "login_status": NumberLong(1),
  "session_id": "e2cc4afa1013a1e211fcb265b1e53197b3df4efa",
  "user_id": "59c8d3bf08cb82180f8b4567",
  "device_id": "",
  "modified": ISODate("2017-09-25T10:00:34.114Z"),
  "created": ISODate("2017-09-25T10:00:34.114Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59c8f18408cb8208248b4567"),
  "token": "afaeb8ac1407a5c3e18d23500d3ff4639ce98c66edf209876d8b762d41de4a76",
  "login_status": NumberLong(0),
  "session_id": "",
  "user_id": "59c8d3bf08cb82180f8b4567",
  "device_id": "DE36B080-CBDB-4523-8F2A-BBFA4F9AB99E",
  "modified": ISODate("2017-09-25T12:07:32.710Z"),
  "created": ISODate("2017-09-25T12:07:32.710Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59c9140008cb825f448b4569"),
  "token": "838976901e77570a4315036befbb63039cecc90fa43dc192c4266e6b811b2743",
  "login_status": NumberLong(1),
  "session_id": "532146740cd50dd9241ecd506d06bd49b3cedb84",
  "user_id": "59c913fd08cb825f448b4567",
  "device_id": "BD51B241-C6CB-4731-A65A-51DEF5D22998",
  "modified": ISODate("2017-09-25T14:34:40.790Z"),
  "created": ISODate("2017-09-25T14:34:40.790Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59ca1db308cb825c6c8b4569"),
  "token": "84c9979a7c4791c3c3e45b795b59ef566bca1e2670fd36de61484145ee05114f",
  "login_status": NumberLong(1),
  "session_id": "2a7fa7c64c316bf72884afdc231bdaacdcd79957",
  "user_id": "59ca1db008cb825c6c8b4567",
  "device_id": "5B3798FA-EC76-45F0-9AD3-8233B082864B",
  "modified": ISODate("2017-09-26T09:28:19.330Z"),
  "created": ISODate("2017-09-26T09:28:19.330Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59ca1db308cb825d6c8b4569"),
  "token": "84c9979a7c4791c3c3e45b795b59ef566bca1e2670fd36de61484145ee05114f",
  "login_status": NumberLong(1),
  "session_id": "279b00902536aded0c318034dbe606751657e895",
  "user_id": "59ca1db008cb825c6c8b4567",
  "device_id": "5B3798FA-EC76-45F0-9AD3-8233B082864B",
  "modified": ISODate("2017-09-26T09:28:19.644Z"),
  "created": ISODate("2017-09-26T09:28:19.644Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59ca262d08cb82af718b4569"),
  "token": "",
  "login_status": NumberLong(0),
  "session_id": "",
  "user_id": "59ca262a08cb82af718b4567",
  "device_id": "D5D650F3-EDC5-4F07-B99E-E2B2C428668C",
  "modified": ISODate("2017-09-26T10:04:29.592Z"),
  "created": ISODate("2017-09-26T10:04:29.592Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59ca4b1808cb821d1a8b4569"),
  "token": "06b2e74f2798e4c1d3a6fdf60a3f8740ea8f047b26ab625df2a6b33e0aceafec",
  "login_status": NumberLong(1),
  "session_id": "cea6a40338c64631beba3bf760d6a39c0598fb50",
  "user_id": "59ca4b1208cb821d1a8b4567",
  "device_id": "FEA7F93D-A54B-45B7-84C3-F7D509473D51",
  "modified": ISODate("2017-09-26T12:42:00.358Z"),
  "created": ISODate("2017-09-26T12:42:00.358Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59ce185d08cb82384e8b4568"),
  "token": "",
  "login_status": NumberLong(0),
  "session_id": "",
  "user_id": "59ce185b08cb82384e8b4567",
  "device_id": "D5D650F3-EDC5-4F07-B99E-E2B2C428668C",
  "modified": ISODate("2017-09-29T09:54:37.371Z"),
  "created": ISODate("2017-09-29T09:54:37.371Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59d3732c3b2efdcb7943f304"),
  "token": "57ff13f6d6baf6c3e433812b62aeeb8275486bc16860e0c05815e06891205e0f",
  "login_status": NumberLong(1),
  "session_id": "ed9ddbd34088216af93268f2987a8ce28ff834fg",
  "user_id": "59a545e241a73f9c5a7711c9",
  "device_id": "BD51B241-C6CB-4731-A65A-51DEF5D22998",
  "modified": ISODate("2017-09-25T14:34:40.790Z"),
  "created": ISODate("2017-09-25T14:34:40.790Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59d37a5e08cb82ab1c8b4567"),
  "token": "afaeb8ac1407a5c3e18d23500d3ff4639ce98c66edf209876d8b762d41de4a76",
  "login_status": NumberLong(0),
  "session_id": "",
  "user_id": "59ca262a08cb82af718b4567",
  "device_id": "DE36B080-CBDB-4523-8F2A-BBFA4F9AB99E",
  "modified": ISODate("2017-10-03T11:54:06.508Z"),
  "created": ISODate("2017-10-03T11:54:06.508Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59d3a17108cb82fe3a8b4567"),
  "token": "afaeb8ac1407a5c3e18d23500d3ff4639ce98c66edf209876d8b762d41de4a76",
  "login_status": NumberLong(1),
  "session_id": "d43be07e3268ee971e184ab9f49cfebe578d3856",
  "user_id": "59ce185b08cb82384e8b4567",
  "device_id": "DE36B080-CBDB-4523-8F2A-BBFA4F9AB99E",
  "modified": ISODate("2017-10-03T14:40:49.131Z"),
  "created": ISODate("2017-10-03T14:40:49.131Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59d4caf208cb8274728b4568"),
  "token": "88e8c509ee3f8778faf24e7168f0b3f1d9053c0c5bde99728fe2b37c55e92796",
  "login_status": NumberLong(1),
  "session_id": "2a762db2086af564fcaf93f29314f20c23a21599",
  "user_id": "59d4caf008cb8274728b4567",
  "device_id": "30E7DC4F-686A-471D-977D-A5C9BFDB9C43",
  "modified": ISODate("2017-10-04T11:50:10.485Z"),
  "created": ISODate("2017-10-04T11:50:10.485Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59d5d29a08cb829f0d8b4567"),
  "token": "",
  "login_status": NumberLong(1),
  "session_id": "722ccfeec51a294ad8aeeb532b1ab1cc913e0f5b",
  "user_id": "59c8d3bf08cb82180f8b4567",
  "device_id": "D5D650F3-EDC5-4F07-B99E-E2B2C428668C",
  "modified": ISODate("2017-10-05T06:35:06.838Z"),
  "created": ISODate("2017-10-05T06:35:06.838Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59d6130d08cb8206768b4568"),
  "token": "",
  "login_status": NumberLong(1),
  "session_id": "2682cfa8dcad11e8df013bd8c6be38c4297cdf6b",
  "user_id": "59d6130b08cb8206768b4567",
  "device_id": "D0242F55-D244-45AC-9D15-E6A114E0F5D5",
  "modified": ISODate("2017-10-05T11:10:05.36Z"),
  "created": ISODate("2017-10-05T11:10:05.36Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59d6193208cb82a0078b4567"),
  "token": "",
  "login_status": NumberLong(0),
  "session_id": "",
  "user_id": "59ca262a08cb82af718b4567",
  "device_id": "D0242F55-D244-45AC-9D15-E6A114E0F5D5",
  "modified": ISODate("2017-10-05T11:36:18.816Z"),
  "created": ISODate("2017-10-05T11:36:18.816Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59d6244808cb82da1e8b4567"),
  "token": "",
  "login_status": NumberLong(0),
  "session_id": "",
  "user_id": "59d6130b08cb8206768b4567",
  "device_id": "B826676A-41AE-4E4A-81E9-41214447FC29",
  "modified": ISODate("2017-10-05T12:23:36.754Z"),
  "created": ISODate("2017-10-05T12:23:36.754Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59db2b3508cb8233378b4567"),
  "token": "",
  "login_status": NumberLong(1),
  "session_id": "084ee7af9022b87b251513c3e7dcd443f0e73b35",
  "user_id": "59ca262a08cb82af718b4567",
  "device_id": "A06FEFC6-7961-4AC9-994E-6FE968E51735",
  "modified": ISODate("2017-10-09T07:54:29.625Z"),
  "created": ISODate("2017-10-09T07:54:29.625Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59df0e7f08cb82e5218b4567"),
  "token": "92094c3524a349f321aadc4cbc206f1d13f2d4db238b0d3e3038ffb2b8f9f1ab",
  "login_status": NumberLong(0),
  "session_id": "",
  "user_id": "59d4caf008cb8274728b4567",
  "device_id": "B6DFF40B-6659-438A-B12E-04E6A577D99B",
  "modified": ISODate("2017-10-12T06:41:03.320Z"),
  "created": ISODate("2017-10-12T06:41:03.320Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59df363b08cb82cb3e8b4568"),
  "token": "",
  "login_status": NumberLong(0),
  "session_id": "",
  "user_id": "59df363908cb82cb3e8b4567",
  "device_id": "B826676A-41AE-4E4A-81E9-41214447FC29",
  "modified": ISODate("2017-10-12T09:30:35.562Z"),
  "created": ISODate("2017-10-12T09:30:35.562Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59df410e08cb824c488b4567"),
  "token": "d27377b1006210eae1fc3352cea93b7c3557b0f9f3b24cbe1af3ddcb932a3960",
  "login_status": NumberLong(1),
  "session_id": "5e6bc9c7291b1780692e2ef8fc8581543fc82242",
  "user_id": "59ca262a08cb82af718b4567",
  "device_id": "B6DFF40B-6659-438A-B12E-04E6A577D99B",
  "modified": ISODate("2017-10-12T10:16:46.656Z"),
  "created": ISODate("2017-10-12T10:16:46.656Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59ef0c6908cb82c91e8b4567"),
  "token": "88e8c509ee3f8778faf24e7168f0b3f1d9053c0c5bde99728fe2b37c55e92796",
  "login_status": NumberLong(0),
  "session_id": "",
  "user_id": "59ca262a08cb82af718b4567",
  "device_id": "30E7DC4F-686A-471D-977D-A5C9BFDB9C43",
  "modified": ISODate("2017-10-24T09:48:25.448Z"),
  "created": ISODate("2017-10-24T09:48:25.448Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59f035a308cb82a7338b4567"),
  "token": "c9d92ea758237ea79d31c5a04a3c3b4981d3b11eb7e9f67898822ad1cb6e3a67",
  "login_status": NumberLong(0),
  "session_id": "",
  "user_id": "59d6130b08cb8206768b4567",
  "device_id": "B6DFF40B-6659-438A-B12E-04E6A577D99B",
  "modified": ISODate("2017-10-25T06:56:35.865Z"),
  "created": ISODate("2017-10-25T06:56:35.865Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59f0361808cb8233348b4567"),
  "token": "",
  "login_status": NumberLong(1),
  "session_id": "dae33328184daa1e11f483c98d07b99d37b50764",
  "user_id": "59ca262a08cb82af718b4567",
  "device_id": "B826676A-41AE-4E4A-81E9-41214447FC29",
  "modified": ISODate("2017-10-25T06:58:32.435Z"),
  "created": ISODate("2017-10-25T06:58:32.435Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59f17a8308cb827c3b8b4568"),
  "token": "c9d92ea758237ea79d31c5a04a3c3b4981d3b11eb7e9f67898822ad1cb6e3a67",
  "login_status": NumberLong(0),
  "session_id": "",
  "user_id": "59f17a8108cb827c3b8b4567",
  "device_id": "B6DFF40B-6659-438A-B12E-04E6A577D99B",
  "modified": ISODate("2017-10-26T06:02:43.29Z"),
  "created": ISODate("2017-10-26T06:02:43.29Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59f17bb908cb828d3c8b4568"),
  "token": "c9d92ea758237ea79d31c5a04a3c3b4981d3b11eb7e9f67898822ad1cb6e3a67",
  "login_status": NumberLong(0),
  "session_id": "",
  "user_id": "59f17bb708cb828d3c8b4567",
  "device_id": "B6DFF40B-6659-438A-B12E-04E6A577D99B",
  "modified": ISODate("2017-10-26T06:07:53.510Z"),
  "created": ISODate("2017-10-26T06:07:53.510Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59f1866c08cb8268498b4568"),
  "token": "c9d92ea758237ea79d31c5a04a3c3b4981d3b11eb7e9f67898822ad1cb6e3a67",
  "login_status": NumberLong(0),
  "session_id": "",
  "user_id": "59f1866b08cb8268498b4567",
  "device_id": "B6DFF40B-6659-438A-B12E-04E6A577D99B",
  "modified": ISODate("2017-10-26T06:53:32.784Z"),
  "created": ISODate("2017-10-26T06:53:32.784Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59f9571b08cb82d0278b4567"),
  "token": "",
  "login_status": NumberLong(1),
  "session_id": "af171667b79233a59449308e7f99667d0bf5c886",
  "user_id": "59ca262a08cb82af718b4567",
  "device_id": "0C500ECF-6C7F-47EF-9A10-CBB1BCAD67C1",
  "modified": ISODate("2017-11-01T05:09:47.637Z"),
  "created": ISODate("2017-11-01T05:09:47.637Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("5a0d6e6608cb825c318b4567"),
  "token": "d27377b1006210eae1fc3352cea93b7c3557b0f9f3b24cbe1af3ddcb932a3960",
  "login_status": NumberLong(0),
  "session_id": "",
  "user_id": "59df363908cb82cb3e8b4567",
  "device_id": "B6DFF40B-6659-438A-B12E-04E6A577D99B",
  "modified": ISODate("2017-11-16T10:54:30.226Z"),
  "created": ISODate("2017-11-16T10:54:30.226Z")
});

/** drinked_groups records **/
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59defe653b2efdf5788ba724"),
  "drinked_status": "confirmed",
  "group_id": "59dc5a3908cb826e788b4567",
  "owner_user_id": "59d6130b08cb8206768b4567",
  "user_id": "59ca262a08cb82af718b4567",
  "is_deleted": true,
  "modified": ISODate("2017-10-10T09:21:38.479Z"),
  "created": ISODate("2017-10-10T09:21:38.479Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59deffdb08cb82d9168b4567"),
  "drinked_status": "confirmed",
  "group_id": "59def66f08cb827a0b8b4567",
  "owner_user_id": "59ca262a08cb82af718b4567",
  "user_id": "59d6130b08cb8206768b4567",
  "is_deleted": true,
  "modified": ISODate("2017-10-12T05:38:35.601Z"),
  "created": ISODate("2017-10-12T05:38:35.601Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59df3e0808cb8216458b4567"),
  "drinked_status": "confirmed",
  "group_id": "59def66f08cb827a0b8b4567",
  "owner_user_id": "59ca262a08cb82af718b4567",
  "user_id": "59d4caf008cb8274728b4567",
  "is_deleted": true,
  "modified": ISODate("2017-10-12T10:03:52.163Z"),
  "created": ISODate("2017-10-12T10:03:52.163Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59ef0e5f08cb8285218b4567"),
  "drinked_status": "confirmed",
  "group_id": "59ef0d7808cb826a208b4567",
  "owner_user_id": "59d4caf008cb8274728b4567",
  "user_id": "59ca262a08cb82af718b4567",
  "is_deleted": true,
  "modified": ISODate("2017-10-24T09:56:47.8Z"),
  "created": ISODate("2017-10-24T09:56:47.8Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59f034bb08cb828b328b4567"),
  "drinked_status": "confirmed",
  "group_id": "59f0338708cb8288318b4567",
  "owner_user_id": "59ca262a08cb82af718b4567",
  "user_id": "59d6130b08cb8206768b4567",
  "is_deleted": true,
  "modified": ISODate("2017-10-25T06:52:43.87Z"),
  "created": ISODate("2017-10-25T06:52:43.87Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59f06a6508cb8274718b4567"),
  "drinked_status": "drinked",
  "group_id": "59f069b808cb82b2708b4567",
  "owner_user_id": "59d6130b08cb8206768b4567",
  "user_id": "59ca262a08cb82af718b4567",
  "is_deleted": true,
  "modified": ISODate("2017-10-25T10:41:41.24Z"),
  "created": ISODate("2017-10-25T10:41:41.24Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59f07a0808cb82d8038b4567"),
  "drinked_status": "drinked",
  "group_id": "59f0719a3b2efdfe50230ea3",
  "owner_user_id": "59d6130b08cb8206768b4567",
  "user_id": "59c913fd08cb825f448b4567",
  "is_deleted": true,
  "modified": ISODate("2017-10-25T11:48:24.731Z"),
  "created": ISODate("2017-10-25T11:48:24.731Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59f07b7e08cb82b0068b4567"),
  "drinked_status": "drinked",
  "group_id": "59f071b13b2efd0951230ea3",
  "owner_user_id": "59ce185b08cb82384e8b4567",
  "user_id": "59c913fd08cb825f448b4567",
  "is_deleted": true,
  "modified": ISODate("2017-10-25T11:54:38.376Z"),
  "created": ISODate("2017-10-25T11:54:38.376Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59f17cf808cb82da3d8b4567"),
  "drinked_status": "drinked",
  "group_id": "59f1799608cb82223a8b4567",
  "owner_user_id": "59ca262a08cb82af718b4567",
  "user_id": "59f17bb708cb828d3c8b4567",
  "is_deleted": true,
  "modified": ISODate("2017-10-26T06:13:12.726Z"),
  "created": ISODate("2017-10-26T06:13:12.726Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59f190ce08cb82f9568b4567"),
  "drinked_status": "drinked",
  "group_id": "59f17c2208cb82e73c8b4567",
  "owner_user_id": "59f17bb708cb828d3c8b4567",
  "user_id": "59c913fd08cb825f448b4567",
  "is_deleted": true,
  "modified": ISODate("2017-10-26T07:37:50.392Z"),
  "created": ISODate("2017-10-26T07:37:50.392Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59f190f008cb820a578b4567"),
  "drinked_status": "confirmed",
  "group_id": "59f1767308cb8205378b4567",
  "owner_user_id": "59d4caf008cb8274728b4567",
  "user_id": "59c913fd08cb825f448b4567",
  "is_deleted": true,
  "modified": ISODate("2017-10-26T07:38:24.361Z"),
  "created": ISODate("2017-10-26T07:38:24.361Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59f25a0e08cb8254028b4567"),
  "drinked_status": "drinked",
  "group_id": "59f17b3108cb82ea3b8b4567",
  "owner_user_id": "59f17a8108cb827c3b8b4567",
  "user_id": "59c913fd08cb825f448b4567",
  "is_deleted": true,
  "modified": ISODate("2017-10-26T21:56:30.36Z"),
  "created": ISODate("2017-10-26T21:56:30.36Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("5a004d4308cb826b2a8b4567"),
  "drinked_status": "drinked",
  "group_id": "5a004bcf08cb822e278b4567",
  "owner_user_id": "59d6130b08cb8206768b4567",
  "user_id": "59ca262a08cb82af718b4567",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T11:53:39.599Z"),
  "created": ISODate("2017-11-06T11:53:39.599Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("5a004da508cb82c22a8b4567"),
  "drinked_status": "confirmed",
  "group_id": "5a004c8b08cb82a2278b4567",
  "owner_user_id": "59ca262a08cb82af718b4567",
  "user_id": "59d4caf008cb8274728b4567",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T11:55:17.593Z"),
  "created": ISODate("2017-11-06T11:55:17.593Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("5a00e4f608cb82ea0e8b4567"),
  "drinked_status": "drinked",
  "group_id": "5a00532208cb824f308b4568",
  "owner_user_id": "59ca1db608cb82676c8b4567",
  "user_id": "59c913fd08cb825f448b4567",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T22:40:54.252Z"),
  "created": ISODate("2017-11-06T22:40:54.252Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("5a019c7808cb82c87e8b4567"),
  "drinked_status": "drinked",
  "group_id": "5a019c0608cb82b47d8b4573",
  "owner_user_id": "59ca4b1208cb821d1a8b4567",
  "user_id": "59c913fd08cb825f448b4567",
  "is_deleted": true,
  "modified": ISODate("2017-11-07T11:43:52.699Z"),
  "created": ISODate("2017-11-07T11:43:52.699Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("5a019ca808cb825b7f8b4567"),
  "drinked_status": "drinked",
  "group_id": "5a019c0808cb82b47d8b4574",
  "owner_user_id": "59ca4b1808cb821e1a8b4567",
  "user_id": "59c913fd08cb825f448b4567",
  "is_deleted": true,
  "modified": ISODate("2017-11-07T11:44:40.645Z"),
  "created": ISODate("2017-11-07T11:44:40.645Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("5a031aba08cb82105c8b4567"),
  "drinked_status": "drinked",
  "group_id": "5a02f42508cb822d288b4571",
  "owner_user_id": "59ca1db608cb82676c8b4567",
  "user_id": "59c913fd08cb825f448b4567",
  "is_deleted": true,
  "modified": ISODate("2017-11-08T14:54:50.17Z"),
  "created": ISODate("2017-11-08T14:54:50.17Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("5a09a4bd08cb821d118b4567"),
  "drinked_status": "drinked",
  "group_id": "5a095b8408cb821d358b456b",
  "owner_user_id": "59d4caf008cb8274728b4567",
  "user_id": "59c913fd08cb825f448b4567",
  "is_deleted": true,
  "modified": ISODate("2017-11-13T13:57:17.657Z"),
  "created": ISODate("2017-11-13T13:57:17.657Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("5a0d6ae408cb82822e8b4567"),
  "drinked_status": "drinked",
  "group_id": "5a0d3db608cb82c0068b456f",
  "owner_user_id": "59ca1db008cb825c6c8b4567",
  "user_id": "59d6130b08cb8206768b4567",
  "is_deleted": true,
  "modified": ISODate("2017-11-16T10:39:32.220Z"),
  "created": ISODate("2017-11-16T10:39:32.220Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("5a0d791308cb82af3d8b4567"),
  "drinked_status": "confirmed",
  "group_id": "5a0d6f6408cb824b328b4567",
  "owner_user_id": "59df363908cb82cb3e8b4567",
  "user_id": "59ca262a08cb82af718b4567",
  "is_deleted": true,
  "modified": ISODate("2017-11-16T11:40:03.266Z"),
  "created": ISODate("2017-11-16T11:40:03.266Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("5a0da2a908cb8213688b4567"),
  "drinked_status": "drinked",
  "group_id": "5a0d3db408cb82c0068b456e",
  "owner_user_id": "59c9140108cb8260448b4567",
  "user_id": "59c913fd08cb825f448b4567",
  "is_deleted": true,
  "modified": ISODate("2017-11-16T14:37:29.87Z"),
  "created": ISODate("2017-11-16T14:37:29.87Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("5a0da2d408cb8272688b4567"),
  "drinked_status": "drinked",
  "group_id": "5a0d3dbc08cb82c0068b4571",
  "owner_user_id": "59ca1db508cb82666c8b4567",
  "user_id": "59c913fd08cb825f448b4567",
  "is_deleted": true,
  "modified": ISODate("2017-11-16T14:38:12.578Z"),
  "created": ISODate("2017-11-16T14:38:12.578Z")
});

/** friends records **/

/** groups records **/
db.getCollection("groups").insert({
  "_id": ObjectId("59dc5a3908cb826e788b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711bf\",\n    \"Age\" : 21,\n    \"eng_name\" : \"lawyer\",\n    \"jap_name\" : \"弁護士\"\n  }\n]",
  "group_description": "TEstttt",
  "group_latitude": "30.7294",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.8446",
  "group_tag": "1",
  "relationship": "Family",
  "user_id": "59d6130b08cb8206768b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1507613241.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-10T05:27:21.147Z"),
  "created": ISODate("2017-10-10T05:27:21.147Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59dc908f08cb8229188b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711be\",\n    \"Age\" : 25,\n    \"eng_name\" : \"A doctor\",\n    \"jap_name\" : \"医師\"\n  }\n]",
  "group_description": "Enter description here",
  "group_latitude": "30.7294",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.8446",
  "group_tag": "1",
  "relationship": "School Friends",
  "user_id": "59ca262a08cb82af718b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1507627152.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-10T09:19:11.740Z"),
  "created": ISODate("2017-10-10T09:19:11.740Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59def66f08cb827a0b8b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711be\",\n    \"Age\" : 21,\n    \"eng_name\" : \"A doctor\",\n    \"jap_name\" : \"医師\"\n  }\n]",
  "group_description": "Aaa",
  "group_latitude": "30.7294",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.8446",
  "group_tag": "1",
  "relationship": "College Friends",
  "user_id": "59ca262a08cb82af718b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1507784304.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-12T04:58:23.650Z"),
  "created": ISODate("2017-10-12T04:58:23.650Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59def93508cb82a10f8b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c0\",\n    \"Age\" : 22,\n    \"eng_name\" : \"Certified public accountant\",\n    \"jap_name\" : \"公認会計士\"\n  }\n]",
  "group_description": "Enter description here",
  "group_latitude": "30.7294",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.8446",
  "group_tag": "1",
  "relationship": "School Friends",
  "user_id": "59d6130b08cb8206768b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1507785013.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-12T05:10:13.139Z"),
  "created": ISODate("2017-10-12T05:10:13.139Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59df1dca08cb822a2d8b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c5\",\n    \"Age\" : 25,\n    \"eng_name\" : \"Foreign finance\",\n    \"jap_name\" : \"外資金融\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c9\",\n    \"Age\" : 26,\n    \"eng_name\" : \"IT related\",\n    \"jap_name\" : \"IT関連\"\n  }\n]",
  "group_description": "Hello whats up?",
  "group_latitude": "30.7279071565144",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.8458341274613",
  "group_tag": "1",
  "relationship": "Family",
  "user_id": "59d4caf008cb8274728b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1507794378.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-12T07:46:18.446Z"),
  "created": ISODate("2017-10-12T07:46:18.446Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59e0aefa08cb8216658b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711be\",\n    \"Age\" : 26,\n    \"eng_name\" : \"A doctor\",\n    \"jap_name\" : \"医師\"\n  }\n]",
  "group_description": "Adele",
  "group_latitude": "30.7294",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.8446",
  "group_tag": "1",
  "relationship": "College Friends",
  "user_id": "59df363908cb82cb3e8b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1507897083.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-13T12:18:02.763Z"),
  "created": ISODate("2017-10-13T12:18:02.763Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59e47d0e08cb82c35a8b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711bf\",\n    \"Age\" : 20,\n    \"eng_name\" : \"lawyer\",\n    \"jap_name\" : \"弁護士\"\n  }\n]",
  "group_description": "Hbsbsjsjs",
  "group_latitude": "35.6726231798862",
  "group_location": "南烏山, 世田谷区",
  "group_longitude": "139.606965892147",
  "group_tag": "1",
  "relationship": "Family",
  "user_id": "59c913fd08cb825f448b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1508146491.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-16T09:34:06.148Z"),
  "created": ISODate("2017-10-16T09:34:06.148Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59f9783408cb82c0528b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"\",\n    \"Age\" : 0,\n    \"eng_name\" : \"\",\n    \"jap_name\" : \"\"\n  }\n]",
  "group_description": "",
  "group_latitude": "30.7294",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.8446",
  "group_tag": "",
  "relationship": "",
  "user_id": "59d6130b08cb8206768b4567",
  "image": "",
  "is_deleted": true,
  "modified": ISODate("2017-11-01T07:31:00.962Z"),
  "created": ISODate("2017-11-01T07:31:00.962Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59ec135408cb82b94e8b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711bf\",\n    \"Age\" : 19,\n    \"eng_name\" : \"lawyer\",\n    \"jap_name\" : \"弁護士\"\n  }\n]",
  "group_description": "にまやはさな",
  "group_latitude": "35.6726356689219",
  "group_location": "南烏山, 世田谷区",
  "group_longitude": "139.606877882164",
  "group_tag": "1",
  "relationship": "Family",
  "user_id": "59c913fd08cb825f448b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1508644008.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-22T03:41:08.895Z"),
  "created": ISODate("2017-10-22T03:41:08.895Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59ec78cd08cb82f5408b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c3\",\n    \"Age\" : 32,\n    \"eng_name\" : \"clerk\",\n    \"jap_name\" : \"事務員\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711be\",\n    \"Age\" : 20,\n    \"eng_name\" : \"A doctor\",\n    \"jap_name\" : \"医師\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711be\",\n    \"Age\" : 20,\n    \"eng_name\" : \"A doctor\",\n    \"jap_name\" : \"医師\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711bf\",\n    \"Age\" : 40,\n    \"eng_name\" : \"lawyer\",\n    \"jap_name\" : \"弁護士\"\n  }\n]",
  "group_description": "Enter description here",
  "group_latitude": "35.6727235531767",
  "group_location": "",
  "group_longitude": "139.606973603498",
  "group_tag": "1",
  "relationship": "Collegues",
  "user_id": "59c913fd08cb825f448b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1508669646.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-22T10:54:05.844Z"),
  "created": ISODate("2017-10-22T10:54:05.844Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59ef0d7808cb826a208b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c0\",\n    \"Age\" : 23,\n    \"eng_name\" : \"Certified public accountant\",\n    \"jap_name\" : \"公認会計士\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711ca\",\n    \"Age\" : 30,\n    \"eng_name\" : \"pilot\",\n    \"jap_name\" : \"パイロット\"\n  }\n]",
  "group_description": "Aajo bi mitron",
  "group_latitude": "30.7279290858332",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.845869831054",
  "group_tag": "1",
  "relationship": "College Friends",
  "user_id": "59d4caf008cb8274728b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1508838776.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-24T09:52:56.397Z"),
  "created": ISODate("2017-10-24T09:52:56.397Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59ef0e5008cb826c218b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c5\",\n    \"Age\" : 31,\n    \"eng_name\" : \"Foreign finance\",\n    \"jap_name\" : \"外資金融\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711ca\",\n    \"Age\" : 32,\n    \"eng_name\" : \"pilot\",\n    \"jap_name\" : \"パイロット\"\n  }\n]",
  "group_description": "Hello friends",
  "group_latitude": "30.7279436031182",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.8458261709213",
  "group_tag": "1",
  "relationship": "Open",
  "user_id": "59ca262a08cb82af718b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1508838992.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-24T09:56:32.114Z"),
  "created": ISODate("2017-10-24T09:56:32.114Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59f0338708cb8288318b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711bf\",\n    \"Age\" : 20,\n    \"eng_name\" : \"lawyer\",\n    \"jap_name\" : \"弁護士\"\n  }\n]",
  "group_description": "Enter description here",
  "group_latitude": "30.7294",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.8446",
  "group_tag": "1",
  "relationship": "Family",
  "user_id": "59ca262a08cb82af718b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1508914056.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-25T06:47:35.832Z"),
  "created": ISODate("2017-10-25T06:47:35.832Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59f034ac08cb8270328b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c0\",\n    \"Age\" : 21,\n    \"eng_name\" : \"Certified public accountant\",\n    \"jap_name\" : \"公認会計士\"\n  }\n]",
  "group_description": "Enter description here",
  "group_latitude": "35.693840",
  "group_location": "tokyo shinjuku",
  "group_longitude": "139.703549",
  "group_tag": "1",
  "relationship": "School Friends",
  "user_id": "59d6130b08cb8206768b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1508914348.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-25T06:52:28.525Z"),
  "created": ISODate("2017-10-25T06:52:28.525Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59f069b808cb82b2708b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711d1\",\n    \"Age\" : 36,\n    \"eng_name\" : \"A secretary\",\n    \"jap_name\" : \"秘書\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c4\",\n    \"Age\" : 21,\n    \"eng_name\" : \"Major trading company\",\n    \"jap_name\" : \"大手商社\"\n  }\n]",
  "group_description": "Aajo aajo mitro",
  "group_latitude": "35.693840",
  "group_location": "tokyo shinjuku",
  "group_longitude": "139.703549",
  "group_tag": "0",
  "relationship": "Open",
  "user_id": "59d6130b08cb8206768b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1508927929.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-25T10:38:48.811Z"),
  "created": ISODate("2017-10-25T10:38:48.811Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59f06a1d08cb8218718b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c7\",\n    \"Age\" : 30,\n    \"eng_name\" : \"Major foreign capital\",\n    \"jap_name\" : \"大手外資\"\n  }\n]",
  "group_description": "Hello friends",
  "group_latitude": "35.693840",
  "group_location": "tokyo shinjuku",
  "group_longitude": "139.703549",
  "group_tag": "1",
  "relationship": "Family",
  "user_id": "59ca262a08cb82af718b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1508928030.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-25T10:40:29.636Z"),
  "created": ISODate("2017-10-25T10:40:29.636Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59f0719a3b2efdfe50230ea3"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c7\",\n    \"Age\" : 30,\n    \"eng_name\" : \"Major foreign capital\",\n    \"jap_name\" : \"大手外資\"\n  }\n]",
  "group_description": "Hello mitro",
  "group_latitude": "35.693840",
  "group_location": "tokyo shinjuku",
  "group_longitude": "139.703549",
  "group_tag": "1",
  "relationship": "Family",
  "user_id": "59d6130b08cb8206768b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1508928030.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-25T10:40:29.636Z"),
  "created": ISODate("2017-10-25T10:40:29.636Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59f071b13b2efd0951230ea3"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c7\",\n    \"Age\" : 30,\n    \"eng_name\" : \"Major foreign capital\",\n    \"jap_name\" : \"大手外資\"\n  }\n]",
  "group_description": "Hello friends",
  "group_latitude": "35.693840",
  "group_location": "INDIA",
  "group_longitude": "139.703549",
  "group_tag": "1",
  "relationship": "Family",
  "user_id": "59ce185b08cb82384e8b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1508928030.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-25T10:40:29.636Z"),
  "created": ISODate("2017-10-25T10:40:29.636Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59f071c03b2efd2652230ea3"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711d1\",\n    \"Age\" : 36,\n    \"eng_name\" : \"A secretary\",\n    \"jap_name\" : \"秘書\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c4\",\n    \"Age\" : 21,\n    \"eng_name\" : \"Major trading company\",\n    \"jap_name\" : \"大手商社\"\n  }\n]",
  "group_description": "Aajo aajo mitro",
  "group_latitude": "35.693840",
  "group_location": "tokyo shinjuku",
  "group_longitude": "139.703549",
  "group_tag": "0",
  "relationship": "Open",
  "user_id": "59ca1db608cb82676c8b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1508927929.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-25T10:38:48.811Z"),
  "created": ISODate("2017-10-25T10:38:48.811Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59f071d33b2efd6351230ea3"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711d1\",\n    \"Age\" : 36,\n    \"eng_name\" : \"A secretary\",\n    \"jap_name\" : \"秘書\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c4\",\n    \"Age\" : 21,\n    \"eng_name\" : \"Major trading company\",\n    \"jap_name\" : \"大手商社\"\n  }\n]",
  "group_description": "Tokyo test",
  "group_latitude": "35.693840",
  "group_location": "tokyo shinjuku",
  "group_longitude": "139.703549",
  "group_tag": "0",
  "relationship": "Open",
  "user_id": "59ca1db008cb825d6c8b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1508927929.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-25T10:38:48.811Z"),
  "created": ISODate("2017-10-25T10:38:48.811Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59f0726f3b2efd6351230ea4"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c7\",\n    \"Age\" : 30,\n    \"eng_name\" : \"Major foreign capital\",\n    \"jap_name\" : \"大手外資\"\n  }\n]",
  "group_description": "Hello friends",
  "group_latitude": "35.693840",
  "group_location": "tokyo shinjuku",
  "group_longitude": "139.703549",
  "group_tag": "1",
  "relationship": "Family",
  "user_id": "59d4caf008cb8274728b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1508928030.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-25T10:40:29.636Z"),
  "created": ISODate("2017-10-25T10:40:29.636Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59f072733b2efd6351230ea5"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c7\",\n    \"Age\" : 30,\n    \"eng_name\" : \"Major foreign capital\",\n    \"jap_name\" : \"大手外資\"\n  }\n]",
  "group_description": "Tokyo",
  "group_latitude": "35.693840",
  "group_location": "tokyo shinjuku",
  "group_longitude": "139.703549",
  "group_tag": "1",
  "relationship": "Family",
  "user_id": "59d4caf008cb8274728b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1508928030.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-25T10:40:29.636Z"),
  "created": ISODate("2017-10-25T10:40:29.636Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59f0792708cb82d9028b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711bf\",\n    \"Age\" : 20,\n    \"eng_name\" : \"lawyer\",\n    \"jap_name\" : \"弁護士\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711bd\",\n    \"Age\" : 27,\n    \"eng_name\" : \"employee\",\n    \"jap_name\" : \"会社員\"\n  }\n]",
  "group_description": "なまはま",
  "group_latitude": "35.6726875948121",
  "group_location": "南烏山, 世田谷区",
  "group_longitude": "139.606932280715",
  "group_tag": "1",
  "relationship": "College Friends",
  "user_id": "59c913fd08cb825f448b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1508931880.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-25T11:44:39.546Z"),
  "created": ISODate("2017-10-25T11:44:39.546Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59f1763808cb82ca368b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c1\",\n    \"Age\" : 26,\n    \"eng_name\" : \"Management and officers\",\n    \"jap_name\" : \"経営者・役員\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711bd\",\n    \"Age\" : 20,\n    \"eng_name\" : \"employee\",\n    \"jap_name\" : \"会社員\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711bf\",\n    \"Age\" : 55,\n    \"eng_name\" : \"lawyer\",\n    \"jap_name\" : \"弁護士\"\n  }\n]",
  "group_description": "Sdsfcrrffffffgy",
  "group_latitude": "35.672596190158",
  "group_location": "南烏山, 世田谷区",
  "group_longitude": "139.606979387011",
  "group_tag": "1",
  "relationship": "Open",
  "user_id": "59c913fd08cb825f448b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1508996665.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-26T05:44:24.769Z"),
  "created": ISODate("2017-10-26T05:44:24.769Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59f1767308cb8205378b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711bf\",\n    \"Age\" : 28,\n    \"eng_name\" : \"lawyer\",\n    \"jap_name\" : \"弁護士\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c0\",\n    \"Age\" : 21,\n    \"eng_name\" : \"Certified public accountant\",\n    \"jap_name\" : \"公認会計士\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711bf\",\n    \"Age\" : 22,\n    \"eng_name\" : \"lawyer\",\n    \"jap_name\" : \"弁護士\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c1\",\n    \"Age\" : 24,\n    \"eng_name\" : \"Management and officers\",\n    \"jap_name\" : \"経営者・役員\"\n  }\n]",
  "group_description": "Hello please come and join our group.",
  "group_latitude": "35.693840",
  "group_location": "tokyo shinjuku",
  "group_longitude": "139.703549",
  "group_tag": "1",
  "relationship": "College Friends",
  "user_id": "59d4caf008cb8274728b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1508996724.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-26T05:45:23.680Z"),
  "created": ISODate("2017-10-26T05:45:23.680Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59f1799608cb82223a8b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711bf\",\n    \"Age\" : 22,\n    \"eng_name\" : \"lawyer\",\n    \"jap_name\" : \"弁護士\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711be\",\n    \"Age\" : 20,\n    \"eng_name\" : \"A doctor\",\n    \"jap_name\" : \"医師\"\n  }\n]",
  "group_description": "Open for new people",
  "group_latitude": "35.693840",
  "group_location": "tokyo shinjuku",
  "group_longitude": "139.703549",
  "group_tag": "0",
  "relationship": "Family",
  "user_id": "59ca262a08cb82af718b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1508997526.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-26T05:58:46.337Z"),
  "created": ISODate("2017-10-26T05:58:46.337Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59f17b3108cb82ea3b8b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c1\",\n    \"Age\" : 22,\n    \"eng_name\" : \"Management and officers\",\n    \"jap_name\" : \"経営者・役員\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711cd\",\n    \"Age\" : 22,\n    \"eng_name\" : \"Apparel \\/ Shop\",\n    \"jap_name\" : \"アパレル・ショップ\"\n  }\n]",
  "group_description": "We all are college friends will like to make some new friends",
  "group_latitude": "35.693840",
  "group_location": "tokyo shinjuku",
  "group_longitude": "139.703549",
  "group_tag": "0",
  "relationship": "College Friends",
  "user_id": "59f17a8108cb827c3b8b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1508997938.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-26T06:05:37.671Z"),
  "created": ISODate("2017-10-26T06:05:37.671Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59f17c2208cb82e73c8b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711be\",\n    \"Age\" : 21,\n    \"eng_name\" : \"A doctor\",\n    \"jap_name\" : \"医師\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711bf\",\n    \"Age\" : 21,\n    \"eng_name\" : \"lawyer\",\n    \"jap_name\" : \"弁護士\"\n  }\n]",
  "group_description": "We invite some new friends to meet us on drink",
  "group_latitude": "35.693840",
  "group_location": "tokyo shinjuku",
  "group_longitude": "139.703549",
  "group_tag": "1",
  "relationship": "Family",
  "user_id": "59f17bb708cb828d3c8b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1508998179.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-10-26T06:09:38.902Z"),
  "created": ISODate("2017-10-26T06:09:38.902Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59f9591c08cb82ac2b8b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711be\",\n    \"Age\" : 20,\n    \"eng_name\" : \"A doctor\",\n    \"jap_name\" : \"医師\"\n  }\n]",
  "group_description": "Enter description here",
  "group_latitude": "30.7294",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.8446",
  "group_tag": "1",
  "relationship": "Collegues",
  "user_id": "59ca262a08cb82af718b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1509513500.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-11-01T05:18:20.383Z"),
  "created": ISODate("2017-11-01T05:18:20.383Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59f9a83308cb82617f8b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"\",\n    \"Age\" : 0,\n    \"eng_name\" : \"\",\n    \"jap_name\" : \"\"\n  }\n]",
  "group_description": "",
  "group_latitude": "30.7294",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.8446",
  "group_tag": "",
  "relationship": "",
  "user_id": "59d6130b08cb8206768b4567",
  "image": "",
  "is_deleted": true,
  "modified": ISODate("2017-11-01T10:55:47.776Z"),
  "created": ISODate("2017-11-01T10:55:47.776Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59f9aaeb08cb82f2028b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"\",\n    \"Age\" : 0,\n    \"eng_name\" : \"\",\n    \"jap_name\" : \"\"\n  }\n]",
  "group_description": "",
  "group_latitude": "30.7294",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.8446",
  "group_tag": "",
  "relationship": "",
  "user_id": "59d6130b08cb8206768b4567",
  "image": "",
  "is_deleted": true,
  "modified": ISODate("2017-11-01T11:07:23.111Z"),
  "created": ISODate("2017-11-01T11:07:23.111Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59fc0b3f08cb82ca348b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"\",\n    \"Age\" : 18,\n    \"eng_name\" : \"\",\n    \"jap_name\" : \"\"\n  }\n]",
  "group_description": "",
  "group_latitude": "30.7294",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.8446",
  "group_tag": "1",
  "relationship": "Collegues",
  "user_id": "59d6130b08cb8206768b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1509690175.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-11-03T06:22:55.425Z"),
  "created": ISODate("2017-11-03T06:22:55.425Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a00350808cb82cd068b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"\",\n    \"Age\" : 0,\n    \"eng_name\" : \"\",\n    \"jap_name\" : \"\"\n  }\n]",
  "group_description": "",
  "group_latitude": "30.72792013150928",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.84585148534143",
  "group_tag": "",
  "relationship": "",
  "user_id": "59ca262a08cb82af718b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1509963016.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T10:10:16.380Z"),
  "created": ISODate("2017-11-06T10:10:16.380Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a00363708cb821c088b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c0\",\n    \"Age\" : 22,\n    \"eng_name\" : \"Certified public accountant\",\n    \"jap_name\" : \"公認会計士\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c2\",\n    \"Age\" : 24,\n    \"eng_name\" : \"Civil servant\",\n    \"jap_name\" : \"公務員\"\n  }\n]",
  "group_description": "Hello guys",
  "group_latitude": "30.72794919817429",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.84582981193549",
  "group_tag": "1",
  "relationship": "Family",
  "user_id": "59ca262a08cb82af718b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1509963319.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T10:15:19.493Z"),
  "created": ISODate("2017-11-06T10:15:19.493Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0036fc08cb820f098b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"\",\n    \"Age\" : 0,\n    \"eng_name\" : \"\",\n    \"jap_name\" : \"\"\n  }\n]",
  "group_description": "",
  "group_latitude": "30.72794327969475",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.84590513065534",
  "group_tag": "",
  "relationship": "",
  "user_id": "59ca262a08cb82af718b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1509963517.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T10:18:36.822Z"),
  "created": ISODate("2017-11-06T10:18:36.822Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a00393d08cb821a0c8b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"\",\n    \"Age\" : 0,\n    \"eng_name\" : \"\",\n    \"jap_name\" : \"\"\n  }\n]",
  "group_description": "",
  "group_latitude": "30.72793492721343",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.84581710630948",
  "group_tag": "",
  "relationship": "",
  "user_id": "59ca262a08cb82af718b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1509964093.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T10:28:13.51Z"),
  "created": ISODate("2017-11-06T10:28:13.51Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a003b5b08cb82780e8b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"\",\n    \"Age\" : 0,\n    \"eng_name\" : \"\",\n    \"jap_name\" : \"\"\n  }\n]",
  "group_description": "",
  "group_latitude": "30.7294",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.8446",
  "group_tag": "",
  "relationship": "",
  "user_id": "59d6130b08cb8206768b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1509964636.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T10:37:15.740Z"),
  "created": ISODate("2017-11-06T10:37:15.740Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a003c1f08cb82a20f8b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"\",\n    \"Age\" : 0,\n    \"eng_name\" : \"\",\n    \"jap_name\" : \"\"\n  }\n]",
  "group_description": "",
  "group_latitude": "30.72793457891922",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.84588546047219",
  "group_tag": "",
  "relationship": "",
  "user_id": "59ca262a08cb82af718b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1509964832.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T10:40:31.784Z"),
  "created": ISODate("2017-11-06T10:40:31.784Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0041a308cb8282148b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711be\",\n    \"Age\" : 18,\n    \"eng_name\" : \"A doctor\",\n    \"jap_name\" : \"医師\"\n  }\n]",
  "group_description": "Hello hello",
  "group_latitude": "30.72796296028095",
  "group_location": "",
  "group_longitude": "76.84590005133836",
  "group_tag": "1",
  "relationship": "Family",
  "user_id": "59d4caf008cb8274728b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1509966307.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T11:04:03.266Z"),
  "created": ISODate("2017-11-06T11:04:03.266Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a00420d08cb82b9148b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"\",\n    \"Age\" : 0,\n    \"eng_name\" : \"\",\n    \"jap_name\" : \"\"\n  }\n]",
  "group_description": "",
  "group_latitude": "30.7294",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.8446",
  "group_tag": "0",
  "relationship": "Open",
  "user_id": "59d6130b08cb8206768b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1509968479.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T11:05:49.960Z"),
  "created": ISODate("2017-11-06T11:05:49.960Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a00424908cb8223158b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"\",\n    \"Age\" : 0,\n    \"eng_name\" : \"\",\n    \"jap_name\" : \"\"\n  }\n]",
  "group_description": "",
  "group_latitude": "30.72794284133035",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.84582015637895",
  "group_tag": "",
  "relationship": "",
  "user_id": "59d4caf008cb8274728b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1509966410.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T11:06:49.915Z"),
  "created": ISODate("2017-11-06T11:06:49.915Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0042bb08cb824b158b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"\",\n    \"Age\" : 0,\n    \"eng_name\" : \"\",\n    \"jap_name\" : \"\"\n  }\n]",
  "group_description": "",
  "group_latitude": "30.72793178908115",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.84586432000771",
  "group_tag": "",
  "relationship": "",
  "user_id": "59d4caf008cb8274728b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1509966523.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T11:08:43.427Z"),
  "created": ISODate("2017-11-06T11:08:43.427Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a004bcf08cb822e278b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"\",\n    \"Age\" : 0,\n    \"eng_name\" : \"\",\n    \"jap_name\" : \"\"\n  }\n]",
  "group_description": "Aaaa",
  "group_latitude": "30.7294",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.8446",
  "group_tag": "0",
  "relationship": "College Friends",
  "user_id": "59d6130b08cb8206768b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1509969201.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T11:47:27.203Z"),
  "created": ISODate("2017-11-06T11:47:27.204Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a004c8b08cb82a2278b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711bf\",\n    \"Age\" : 21,\n    \"eng_name\" : \"lawyer\",\n    \"jap_name\" : \"弁護士\"\n  }\n]",
  "group_description": "Checkp",
  "group_latitude": "30.72790506630055",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.84589872916352",
  "group_tag": "",
  "relationship": "Family",
  "user_id": "59ca262a08cb82af718b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1509969036.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T11:50:35.800Z"),
  "created": ISODate("2017-11-06T11:50:35.800Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a004d7008cb827e2a8b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c0\",\n    \"Age\" : 22,\n    \"eng_name\" : \"Certified public accountant\",\n    \"jap_name\" : \"公認会計士\"\n  }\n]",
  "group_description": "Sfjafjaf",
  "group_latitude": "30.72792227461159",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.84582866341769",
  "group_tag": "1",
  "relationship": "Open",
  "user_id": "59d4caf008cb8274728b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1509969264.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T11:54:24.362Z"),
  "created": ISODate("2017-11-06T11:54:24.362Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a00505608cb82632d8b4567"),
  "user_id": "59c8d3bf08cb82180f8b4567",
  "image": "http://graph.facebook.com/1588167327924629/picture?type=large",
  "group_conditions": "",
  "group_description": "group test description 3715",
  "group_latitude": null,
  "group_longitude": null,
  "group_location": null,
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T12:06:46.183Z"),
  "created": ISODate("2017-11-06T12:06:46.183Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a00505808cb82632d8b4568"),
  "user_id": "59c913fd08cb825f448b4567",
  "image": "http://graph.facebook.com/1288672714577080/picture?type=large",
  "group_conditions": "",
  "group_description": "group test description 7268",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T12:06:48.119Z"),
  "created": ISODate("2017-11-06T12:06:48.119Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a00505b08cb82632d8b4569"),
  "user_id": "59ce185b08cb82384e8b4567",
  "image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "group_conditions": "",
  "group_description": "group test description 9842",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T12:06:51.33Z"),
  "created": ISODate("2017-11-06T12:06:51.33Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a00505e08cb82632d8b456a"),
  "user_id": "59c8d3c108cb82190f8b4567",
  "image": "http://graph.facebook.com/1588167327924629/picture?type=large",
  "group_conditions": "",
  "group_description": "group test description 1095",
  "group_latitude": null,
  "group_longitude": null,
  "group_location": null,
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T12:06:54.82Z"),
  "created": ISODate("2017-11-06T12:06:54.82Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a00506008cb82632d8b456b"),
  "user_id": "59c9140108cb8260448b4567",
  "image": "http://graph.facebook.com/1288672714577080/picture?type=large",
  "group_conditions": "",
  "group_description": "group test description 6489",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T12:06:56.296Z"),
  "created": ISODate("2017-11-06T12:06:56.296Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a00506208cb82632d8b456c"),
  "user_id": "59ca1db008cb825c6c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "",
  "group_description": "group test description 1389",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T12:06:58.553Z"),
  "created": ISODate("2017-11-06T12:06:58.553Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a00506408cb82632d8b456d"),
  "user_id": "59ca1db008cb825d6c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "",
  "group_description": "group test description 8818",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T12:07:00.768Z"),
  "created": ISODate("2017-11-06T12:07:00.768Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a00532008cb824f308b4567"),
  "user_id": "59ca1db508cb82666c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "",
  "group_description": "group test description 9238",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T12:18:40.328Z"),
  "created": ISODate("2017-11-06T12:18:40.328Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a00532208cb824f308b4568"),
  "user_id": "59ca1db608cb82676c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "",
  "group_description": "group test description 7875",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T12:18:42.621Z"),
  "created": ISODate("2017-11-06T12:18:42.621Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a00532408cb824f308b4569"),
  "user_id": "59ca4b1208cb821d1a8b4567",
  "image": "http://graph.facebook.com/1541427585913395/picture?type=large",
  "group_conditions": "",
  "group_description": "group test description 788",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T12:18:44.797Z"),
  "created": ISODate("2017-11-06T12:18:44.797Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a00532708cb824f308b456a"),
  "user_id": "59ca4b1808cb821e1a8b4567",
  "image": "http://graph.facebook.com/1541427585913395/picture?type=large",
  "group_conditions": "",
  "group_description": "group test description 462",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T12:18:47.212Z"),
  "created": ISODate("2017-11-06T12:18:47.212Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a00532908cb824f308b456b"),
  "user_id": "59ef01a508cb821f168b4567",
  "image": "http://graph.facebook.com/348484712243600/picture?type=large",
  "group_conditions": "",
  "group_description": "group test description 1258",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T12:18:49.593Z"),
  "created": ISODate("2017-11-06T12:18:49.593Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a00532b08cb824f308b456c"),
  "user_id": "59f17a8108cb827c3b8b4567",
  "image": "http://graph.facebook.com/1437892572967757/picture?type=large",
  "group_conditions": "",
  "group_description": "group test description 8534",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T12:18:51.768Z"),
  "created": ISODate("2017-11-06T12:18:51.768Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a00532e08cb824f308b456d"),
  "user_id": "59f17bb708cb828d3c8b4567",
  "image": "http://graph.facebook.com/1430418013717131/picture?type=large",
  "group_conditions": "",
  "group_description": "group test description 1802",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T12:18:54.95Z"),
  "created": ISODate("2017-11-06T12:18:54.95Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a00533008cb824f308b456e"),
  "user_id": "59f1866b08cb8268498b4567",
  "image": "http://graph.facebook.com/1462018123905766/picture?type=large",
  "group_conditions": "",
  "group_description": "group test description 9696",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T12:18:56.786Z"),
  "created": ISODate("2017-11-06T12:18:56.786Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a00565d08cb827f348b4567"),
  "user_id": "59c8d3bf08cb82180f8b4567",
  "image": "http://graph.facebook.com/1588167327924629/picture?type=large",
  "group_conditions": "[\\n [\\n \\\"id\\\" : \\\"\\\",\\n \\\"Age\\\" : 0,\\n \\\"eng_name\\\" : \\\"\\\",\\n \\\"jap_name\\\" : \\\"\\\"\\n ]\\n]",
  "group_description": "group test description 9355",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T12:32:29.810Z"),
  "created": ISODate("2017-11-06T12:32:29.810Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a00566308cb827f348b4568"),
  "user_id": "59c8d3c108cb82190f8b4567",
  "image": "http://graph.facebook.com/1588167327924629/picture?type=large",
  "group_conditions": "[\\n [\\n \\\"id\\\" : \\\"59a545e241a73f9c5a7711be\\\",\\n \\\"Age\\\" : 20,\\n \\\"eng_name\\\" : \\\"A doctor\\\",\\n \\\"jap_name\\\" : \\\"医師\\\"\\n ]\\n]",
  "group_description": "group test description 210",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T12:32:35.323Z"),
  "created": ISODate("2017-11-06T12:32:35.323Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a005be808cb829d388b4567"),
  "user_id": "59c8d3bf08cb82180f8b4567",
  "image": "http://graph.facebook.com/1588167327924629/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 4347",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T12:56:08.91Z"),
  "created": ISODate("2017-11-06T12:56:08.91Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a005bed08cb829d388b4568"),
  "user_id": "59c8d3c108cb82190f8b4567",
  "image": "http://graph.facebook.com/1588167327924629/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"\",  \"Age\" : 0,  \"eng_name\" : \"\",  \"jap_name\" : \"\"  ] ]",
  "group_description": "group test description 2603",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T12:56:13.988Z"),
  "created": ISODate("2017-11-06T12:56:13.988Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a005dfd08cb827a3a8b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"\",\n    \"Age\" : 0,\n    \"eng_name\" : \"\",\n    \"jap_name\" : \"\"\n  }\n]",
  "group_description": "",
  "group_latitude": "30.7294",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.8446",
  "group_tag": "",
  "relationship": "Open",
  "user_id": "59d6130b08cb8206768b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1509973502.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T13:05:01.823Z"),
  "created": ISODate("2017-11-06T13:05:01.823Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a019bec08cb82b47d8b4567"),
  "user_id": "59c8d3bf08cb82180f8b4567",
  "image": "http://graph.facebook.com/1588167327924629/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 4859",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-07T11:41:32.764Z"),
  "created": ISODate("2017-11-07T11:41:32.764Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a019bee08cb82b47d8b4568"),
  "user_id": "59c913fd08cb825f448b4567",
  "image": "http://graph.facebook.com/1288672714577080/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 6675",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-07T11:41:34.818Z"),
  "created": ISODate("2017-11-07T11:41:34.818Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a019bf108cb82b47d8b4569"),
  "user_id": "59ca262a08cb82af718b4567",
  "image": "http://132.148.135.156/~drinks/uploads/users/original/User_2017_1508756963.jpeg",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 7759",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-07T11:41:37.202Z"),
  "created": ISODate("2017-11-07T11:41:37.202Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a019bf308cb82b47d8b456a"),
  "user_id": "59ce185b08cb82384e8b4567",
  "image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 6284",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-07T11:41:39.198Z"),
  "created": ISODate("2017-11-07T11:41:39.198Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a019bf508cb82b47d8b456b"),
  "user_id": "59d4caf008cb8274728b4567",
  "image": "http://graph.facebook.com/348484712243600/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 1374",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-07T11:41:41.191Z"),
  "created": ISODate("2017-11-07T11:41:41.191Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a019bf708cb82b47d8b456c"),
  "user_id": "59d6130b08cb8206768b4567",
  "image": "http://132.148.135.156/~drinks/uploads/users/original/User_2017_1508755842.jpeg",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 5610",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-07T11:41:43.478Z"),
  "created": ISODate("2017-11-07T11:41:43.478Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a019bf908cb82b47d8b456d"),
  "user_id": "59c8d3c108cb82190f8b4567",
  "image": "http://graph.facebook.com/1588167327924629/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 645",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-07T11:41:45.758Z"),
  "created": ISODate("2017-11-07T11:41:45.758Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a019bfc08cb82b47d8b456e"),
  "user_id": "59c9140108cb8260448b4567",
  "image": "http://graph.facebook.com/1288672714577080/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 6389",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-07T11:41:48.34Z"),
  "created": ISODate("2017-11-07T11:41:48.34Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a019bfe08cb82b47d8b456f"),
  "user_id": "59ca1db008cb825c6c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 4194",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-07T11:41:50.37Z"),
  "created": ISODate("2017-11-07T11:41:50.37Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a019c0008cb82b47d8b4570"),
  "user_id": "59ca1db008cb825d6c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 3807",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-07T11:41:52.313Z"),
  "created": ISODate("2017-11-07T11:41:52.313Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a019c0208cb82b47d8b4571"),
  "user_id": "59ca1db508cb82666c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 649",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-07T11:41:54.307Z"),
  "created": ISODate("2017-11-07T11:41:54.307Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a019c0408cb82b47d8b4572"),
  "user_id": "59ca1db608cb82676c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 901",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-07T11:41:56.599Z"),
  "created": ISODate("2017-11-07T11:41:56.599Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a019c0608cb82b47d8b4573"),
  "user_id": "59ca4b1208cb821d1a8b4567",
  "image": "http://graph.facebook.com/1541427585913395/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 6191",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-07T11:41:58.602Z"),
  "created": ISODate("2017-11-07T11:41:58.602Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a019c0808cb82b47d8b4574"),
  "user_id": "59ca4b1808cb821e1a8b4567",
  "image": "http://graph.facebook.com/1541427585913395/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 5234",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-07T11:42:00.947Z"),
  "created": ISODate("2017-11-07T11:42:00.947Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a019c0b08cb82b47d8b4575"),
  "user_id": "59ef01a508cb821f168b4567",
  "image": "http://graph.facebook.com/348484712243600/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 4981",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-07T11:42:03.235Z"),
  "created": ISODate("2017-11-07T11:42:03.235Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a019c0d08cb82b47d8b4576"),
  "user_id": "59f17a8108cb827c3b8b4567",
  "image": "http://graph.facebook.com/1437892572967757/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 4159",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-07T11:42:05.289Z"),
  "created": ISODate("2017-11-07T11:42:05.289Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a019c0f08cb82b47d8b4577"),
  "user_id": "59f17bb708cb828d3c8b4567",
  "image": "http://graph.facebook.com/1430418013717131/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 6506",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-07T11:42:07.621Z"),
  "created": ISODate("2017-11-07T11:42:07.621Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a019c1108cb82b47d8b4578"),
  "user_id": "59f1866b08cb8268498b4567",
  "image": "http://graph.facebook.com/1462018123905766/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 5382",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-07T11:42:09.664Z"),
  "created": ISODate("2017-11-07T11:42:09.664Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a02cf0f08cb82177a8b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"\",\n    \"Age\" : 0,\n    \"eng_name\" : \"\",\n    \"jap_name\" : \"\"\n  }\n]",
  "group_description": "",
  "group_latitude": "35.67270247269019",
  "group_location": "南烏山, 世田谷区",
  "group_longitude": "139.6069045366157",
  "group_tag": "",
  "relationship": "Open",
  "user_id": "59c913fd08cb825f448b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1510133520.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-11-08T09:31:59.953Z"),
  "created": ISODate("2017-11-08T09:31:59.953Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a02f40d08cb822d288b4567"),
  "user_id": "59c8d3bf08cb82180f8b4567",
  "image": "http://graph.facebook.com/1588167327924629/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 1721",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-08T12:09:49.996Z"),
  "created": ISODate("2017-11-08T12:09:49.996Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a02f41008cb822d288b4568"),
  "user_id": "59ca262a08cb82af718b4567",
  "image": "http://132.148.135.156/~drinks/uploads/users/original/User_2017_1508756963.jpeg",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 8012",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-08T12:09:52.619Z"),
  "created": ISODate("2017-11-08T12:09:52.619Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a02f41208cb822d288b4569"),
  "user_id": "59ce185b08cb82384e8b4567",
  "image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 9078",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-08T12:09:54.898Z"),
  "created": ISODate("2017-11-08T12:09:54.898Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a02f41408cb822d288b456a"),
  "user_id": "59d4caf008cb8274728b4567",
  "image": "http://graph.facebook.com/348484712243600/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 1856",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-08T12:09:56.953Z"),
  "created": ISODate("2017-11-08T12:09:56.953Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a02f41708cb822d288b456b"),
  "user_id": "59d6130b08cb8206768b4567",
  "image": "http://132.148.135.156/~drinks/uploads/users/original/User_2017_1508755842.jpeg",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 2336",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-08T12:09:59.381Z"),
  "created": ISODate("2017-11-08T12:09:59.381Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a02f41908cb822d288b456c"),
  "user_id": "59c8d3c108cb82190f8b4567",
  "image": "http://graph.facebook.com/1588167327924629/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 7715",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-08T12:10:01.438Z"),
  "created": ISODate("2017-11-08T12:10:01.438Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a02f41c08cb822d288b456d"),
  "user_id": "59c9140108cb8260448b4567",
  "image": "http://graph.facebook.com/1288672714577080/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 530",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-08T12:10:04.79Z"),
  "created": ISODate("2017-11-08T12:10:04.79Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a02f41e08cb822d288b456e"),
  "user_id": "59ca1db008cb825c6c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 4562",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-08T12:10:06.445Z"),
  "created": ISODate("2017-11-08T12:10:06.445Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a02f42108cb822d288b456f"),
  "user_id": "59ca1db008cb825d6c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 5189",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-08T12:10:09.7Z"),
  "created": ISODate("2017-11-08T12:10:09.7Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a02f42308cb822d288b4570"),
  "user_id": "59ca1db508cb82666c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 3945",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-08T12:10:11.315Z"),
  "created": ISODate("2017-11-08T12:10:11.315Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a02f42508cb822d288b4571"),
  "user_id": "59ca1db608cb82676c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 7067",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-08T12:10:13.822Z"),
  "created": ISODate("2017-11-08T12:10:13.822Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a02f42808cb822d288b4572"),
  "user_id": "59ca4b1208cb821d1a8b4567",
  "image": "http://graph.facebook.com/1541427585913395/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 3741",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-08T12:10:16.67Z"),
  "created": ISODate("2017-11-08T12:10:16.67Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a02f42b08cb822d288b4573"),
  "user_id": "59ca4b1808cb821e1a8b4567",
  "image": "http://graph.facebook.com/1541427585913395/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 1230",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-08T12:10:19.546Z"),
  "created": ISODate("2017-11-08T12:10:19.546Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a02f42d08cb822d288b4574"),
  "user_id": "59ef01a508cb821f168b4567",
  "image": "http://graph.facebook.com/348484712243600/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 9982",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-08T12:10:21.825Z"),
  "created": ISODate("2017-11-08T12:10:21.825Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a02f43008cb822d288b4575"),
  "user_id": "59f17a8108cb827c3b8b4567",
  "image": "http://graph.facebook.com/1437892572967757/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 7607",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-08T12:10:24.352Z"),
  "created": ISODate("2017-11-08T12:10:24.352Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a02f43208cb822d288b4576"),
  "user_id": "59f17bb708cb828d3c8b4567",
  "image": "http://graph.facebook.com/1430418013717131/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 706",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-08T12:10:26.815Z"),
  "created": ISODate("2017-11-08T12:10:26.815Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a02f43508cb822d288b4577"),
  "user_id": "59f1866b08cb8268498b4567",
  "image": "http://graph.facebook.com/1462018123905766/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 2297",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-08T12:10:29.884Z"),
  "created": ISODate("2017-11-08T12:10:29.884Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a06ddaf08cb82375d8b4567"),
  "user_id": "59c8d3bf08cb82180f8b4567",
  "image": "http://graph.facebook.com/1588167327924629/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 9384",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-11T11:23:27.137Z"),
  "created": ISODate("2017-11-11T11:23:27.137Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a06ddb108cb82375d8b4568"),
  "user_id": "59c913fd08cb825f448b4567",
  "image": "http://graph.facebook.com/1288672714577080/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 6103",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-11T11:23:29.171Z"),
  "created": ISODate("2017-11-11T11:23:29.171Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a06ddb308cb82375d8b4569"),
  "user_id": "59ca262a08cb82af718b4567",
  "image": "http://132.148.135.156/~drinks/uploads/users/original/User_2017_1508756963.jpeg",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 868",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-11T11:23:31.406Z"),
  "created": ISODate("2017-11-11T11:23:31.406Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a095b7908cb821d358b4567"),
  "user_id": "59c8d3bf08cb82180f8b4567",
  "image": "http://graph.facebook.com/1588167327924629/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 2987",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-13T08:44:41.886Z"),
  "created": ISODate("2017-11-13T08:44:41.886Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a095b7c08cb821d358b4568"),
  "user_id": "59c913fd08cb825f448b4567",
  "image": "http://graph.facebook.com/1288672714577080/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 8103",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-13T08:44:44.866Z"),
  "created": ISODate("2017-11-13T08:44:44.866Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a095b7f08cb821d358b4569"),
  "user_id": "59ca262a08cb82af718b4567",
  "image": "http://132.148.135.156/~drinks/uploads/users/original/User_2017_1508756963.jpeg",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 762",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-13T08:44:47.336Z"),
  "created": ISODate("2017-11-13T08:44:47.336Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a095b8208cb821d358b456a"),
  "user_id": "59ce185b08cb82384e8b4567",
  "image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 4124",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-13T08:44:50.349Z"),
  "created": ISODate("2017-11-13T08:44:50.349Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a095b8408cb821d358b456b"),
  "user_id": "59d4caf008cb8274728b4567",
  "image": "http://graph.facebook.com/348484712243600/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 7045",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-13T08:44:52.981Z"),
  "created": ISODate("2017-11-13T08:44:52.981Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a095b8808cb821d358b456c"),
  "user_id": "59d6130b08cb8206768b4567",
  "image": "http://132.148.135.156/~drinks/uploads/users/original/User_2017_1508755842.jpeg",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 7432",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-13T08:44:56.391Z"),
  "created": ISODate("2017-11-13T08:44:56.391Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a095b8b08cb821d358b456d"),
  "user_id": "59c8d3c108cb82190f8b4567",
  "image": "http://graph.facebook.com/1588167327924629/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 213",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-13T08:44:59.68Z"),
  "created": ISODate("2017-11-13T08:44:59.68Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a095b8e08cb821d358b456e"),
  "user_id": "59c9140108cb8260448b4567",
  "image": "http://graph.facebook.com/1288672714577080/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 5670",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-13T08:45:02.130Z"),
  "created": ISODate("2017-11-13T08:45:02.130Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a095b9108cb821d358b456f"),
  "user_id": "59ca1db008cb825c6c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 4703",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-13T08:45:05.143Z"),
  "created": ISODate("2017-11-13T08:45:05.143Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a095b9308cb821d358b4570"),
  "user_id": "59ca1db008cb825d6c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 9100",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-13T08:45:07.810Z"),
  "created": ISODate("2017-11-13T08:45:07.810Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a095b9708cb821d358b4571"),
  "user_id": "59ca1db508cb82666c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 1901",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-13T08:45:11.221Z"),
  "created": ISODate("2017-11-13T08:45:11.221Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a095b9908cb821d358b4572"),
  "user_id": "59ca1db608cb82676c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 4990",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-13T08:45:13.858Z"),
  "created": ISODate("2017-11-13T08:45:13.858Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a095b9c08cb821d358b4573"),
  "user_id": "59ca4b1208cb821d1a8b4567",
  "image": "http://graph.facebook.com/1541427585913395/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 255",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-13T08:45:16.925Z"),
  "created": ISODate("2017-11-13T08:45:16.925Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a095b9f08cb821d358b4574"),
  "user_id": "59ca4b1808cb821e1a8b4567",
  "image": "http://graph.facebook.com/1541427585913395/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 8021",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-13T08:45:19.966Z"),
  "created": ISODate("2017-11-13T08:45:19.966Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a095ba208cb821d358b4575"),
  "user_id": "59ef01a508cb821f168b4567",
  "image": "http://graph.facebook.com/348484712243600/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 3998",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-13T08:45:22.660Z"),
  "created": ISODate("2017-11-13T08:45:22.660Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a095ba608cb821d358b4576"),
  "user_id": "59f17a8108cb827c3b8b4567",
  "image": "http://graph.facebook.com/1437892572967757/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 3951",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-13T08:45:26.85Z"),
  "created": ISODate("2017-11-13T08:45:26.85Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a095ba808cb821d358b4577"),
  "user_id": "59f17bb708cb828d3c8b4567",
  "image": "http://graph.facebook.com/1430418013717131/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 6543",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-13T08:45:28.715Z"),
  "created": ISODate("2017-11-13T08:45:28.715Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a095bab08cb821d358b4578"),
  "user_id": "59f1866b08cb8268498b4567",
  "image": "http://graph.facebook.com/1462018123905766/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 7117",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-13T08:45:31.733Z"),
  "created": ISODate("2017-11-13T08:45:31.733Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0bd6ec08cb82027a8b4567"),
  "user_id": "59c8d3bf08cb82180f8b4567",
  "image": "http://graph.facebook.com/1588167327924629/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 4383",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-15T05:55:56.421Z"),
  "created": ISODate("2017-11-15T05:55:56.421Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0bd6ee08cb82027a8b4568"),
  "user_id": "59c913fd08cb825f448b4567",
  "image": "http://graph.facebook.com/1288672714577080/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 2157",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-15T05:55:58.415Z"),
  "created": ISODate("2017-11-15T05:55:58.415Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0bd6f008cb82027a8b4569"),
  "user_id": "59ca262a08cb82af718b4567",
  "image": "http://132.148.135.156/~drinks/uploads/users/original/User_2017_1508756963.jpeg",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 3425",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-15T05:56:00.671Z"),
  "created": ISODate("2017-11-15T05:56:00.671Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0bd6f208cb82027a8b456a"),
  "user_id": "59ce185b08cb82384e8b4567",
  "image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 5493",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-15T05:56:02.659Z"),
  "created": ISODate("2017-11-15T05:56:02.659Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0bd6f408cb82027a8b456b"),
  "user_id": "59d4caf008cb8274728b4567",
  "image": "http://graph.facebook.com/348484712243600/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 3242",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-15T05:56:04.886Z"),
  "created": ISODate("2017-11-15T05:56:04.886Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0bd6f708cb82027a8b456c"),
  "user_id": "59d6130b08cb8206768b4567",
  "image": "http://132.148.135.156/~drinks/uploads/users/original/User_2017_1508755842.jpeg",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 3840",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-15T05:56:07.27Z"),
  "created": ISODate("2017-11-15T05:56:07.27Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0bd6fa08cb82027a8b456d"),
  "user_id": "59c8d3c108cb82190f8b4567",
  "image": "http://graph.facebook.com/1588167327924629/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 1834",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-15T05:56:10.17Z"),
  "created": ISODate("2017-11-15T05:56:10.17Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0bd6fb08cb82027a8b456e"),
  "user_id": "59c9140108cb8260448b4567",
  "image": "http://graph.facebook.com/1288672714577080/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 7284",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-15T05:56:11.944Z"),
  "created": ISODate("2017-11-15T05:56:11.944Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0bd6fd08cb82027a8b456f"),
  "user_id": "59ca1db008cb825c6c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 9371",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-15T05:56:13.948Z"),
  "created": ISODate("2017-11-15T05:56:13.948Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0bd70008cb82027a8b4570"),
  "user_id": "59ca1db008cb825d6c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 916",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-15T05:56:16.158Z"),
  "created": ISODate("2017-11-15T05:56:16.158Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0bd70208cb82027a8b4571"),
  "user_id": "59ca1db508cb82666c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 1115",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-15T05:56:18.272Z"),
  "created": ISODate("2017-11-15T05:56:18.273Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0bd70408cb82027a8b4572"),
  "user_id": "59ca1db608cb82676c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 2964",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-15T05:56:20.491Z"),
  "created": ISODate("2017-11-15T05:56:20.491Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0bd70608cb82027a8b4573"),
  "user_id": "59ca4b1208cb821d1a8b4567",
  "image": "http://graph.facebook.com/1541427585913395/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 6275",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-15T05:56:22.455Z"),
  "created": ISODate("2017-11-15T05:56:22.455Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0bd70808cb82027a8b4574"),
  "user_id": "59ca4b1808cb821e1a8b4567",
  "image": "http://graph.facebook.com/1541427585913395/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 4196",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-15T05:56:24.937Z"),
  "created": ISODate("2017-11-15T05:56:24.937Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0bd70a08cb82027a8b4575"),
  "user_id": "59ef01a508cb821f168b4567",
  "image": "http://graph.facebook.com/348484712243600/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 5518",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-15T05:56:26.882Z"),
  "created": ISODate("2017-11-15T05:56:26.882Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0bd70d08cb82027a8b4576"),
  "user_id": "59f17a8108cb827c3b8b4567",
  "image": "http://graph.facebook.com/1437892572967757/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 4948",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-15T05:56:29.8Z"),
  "created": ISODate("2017-11-15T05:56:29.8Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0bd70f08cb82027a8b4577"),
  "user_id": "59f17bb708cb828d3c8b4567",
  "image": "http://graph.facebook.com/1430418013717131/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 1890",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-15T05:56:31.252Z"),
  "created": ISODate("2017-11-15T05:56:31.252Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0bd71108cb82027a8b4578"),
  "user_id": "59f1866b08cb8268498b4567",
  "image": "http://graph.facebook.com/1462018123905766/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 1113",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-15T05:56:33.180Z"),
  "created": ISODate("2017-11-15T05:56:33.180Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0c651008cb821e3b8b4567"),
  "user_id": "59c913fd08cb825f448b4567",
  "image": "http://graph.facebook.com/1288672714577080/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 6309",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-15T16:02:24.489Z"),
  "created": ISODate("2017-11-15T16:02:24.489Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0d3da108cb82c0068b4567"),
  "user_id": "59c8d3bf08cb82180f8b4567",
  "image": "http://graph.facebook.com/1588167327924629/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 6497",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-16T07:26:25.579Z"),
  "created": ISODate("2017-11-16T07:26:25.579Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0d3da308cb82c0068b4568"),
  "user_id": "59c913fd08cb825f448b4567",
  "image": "http://graph.facebook.com/1288672714577080/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 244",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-16T07:26:27.906Z"),
  "created": ISODate("2017-11-16T07:26:27.906Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0d3da608cb82c0068b4569"),
  "user_id": "59ca262a08cb82af718b4567",
  "image": "http://132.148.135.156/~drinks/uploads/users/original/User_2017_1508756963.jpeg",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 3737",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-16T07:26:30.261Z"),
  "created": ISODate("2017-11-16T07:26:30.261Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0d3da808cb82c0068b456a"),
  "user_id": "59ce185b08cb82384e8b4567",
  "image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 9522",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-16T07:26:32.284Z"),
  "created": ISODate("2017-11-16T07:26:32.284Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0d3daa08cb82c0068b456b"),
  "user_id": "59d4caf008cb8274728b4567",
  "image": "http://graph.facebook.com/348484712243600/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 4082",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-16T07:26:34.925Z"),
  "created": ISODate("2017-11-16T07:26:34.925Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0d3dad08cb82c0068b456c"),
  "user_id": "59d6130b08cb8206768b4567",
  "image": "http://132.148.135.156/~drinks/uploads/users/original/User_2017_1508755842.jpeg",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 9051",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-16T07:26:37.794Z"),
  "created": ISODate("2017-11-16T07:26:37.794Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0d3db008cb82c0068b456d"),
  "user_id": "59c8d3c108cb82190f8b4567",
  "image": "http://graph.facebook.com/1588167327924629/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 1670",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-16T07:26:40.389Z"),
  "created": ISODate("2017-11-16T07:26:40.389Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0d3db408cb82c0068b456e"),
  "user_id": "59c9140108cb8260448b4567",
  "image": "http://graph.facebook.com/1288672714577080/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 2609",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-16T07:26:44.264Z"),
  "created": ISODate("2017-11-16T07:26:44.264Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0d3db608cb82c0068b456f"),
  "user_id": "59ca1db008cb825c6c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 47",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-16T07:26:46.522Z"),
  "created": ISODate("2017-11-16T07:26:46.522Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0d3db908cb82c0068b4570"),
  "user_id": "59ca1db008cb825d6c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 7520",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-16T07:26:49.36Z"),
  "created": ISODate("2017-11-16T07:26:49.36Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0d3dbc08cb82c0068b4571"),
  "user_id": "59ca1db508cb82666c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 5721",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-16T07:26:52.91Z"),
  "created": ISODate("2017-11-16T07:26:52.91Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0d3dbe08cb82c0068b4572"),
  "user_id": "59ca1db608cb82676c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 7334",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-16T07:26:54.941Z"),
  "created": ISODate("2017-11-16T07:26:54.941Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0d3dc108cb82c0068b4573"),
  "user_id": "59ca4b1208cb821d1a8b4567",
  "image": "http://graph.facebook.com/1541427585913395/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 6655",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-16T07:26:57.105Z"),
  "created": ISODate("2017-11-16T07:26:57.105Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0d3dc308cb82c0068b4574"),
  "user_id": "59ca4b1808cb821e1a8b4567",
  "image": "http://graph.facebook.com/1541427585913395/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 9785",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-16T07:26:59.920Z"),
  "created": ISODate("2017-11-16T07:26:59.920Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0d3dc608cb82c0068b4575"),
  "user_id": "59ef01a508cb821f168b4567",
  "image": "http://graph.facebook.com/348484712243600/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 7606",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-16T07:27:02.328Z"),
  "created": ISODate("2017-11-16T07:27:02.328Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0d3dc808cb82c0068b4576"),
  "user_id": "59f17a8108cb827c3b8b4567",
  "image": "http://graph.facebook.com/1437892572967757/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 5259",
  "group_latitude": "35.6726231798862",
  "group_longitude": "139.606965892147",
  "group_location": "南烏山, 世田谷区",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-16T07:27:04.895Z"),
  "created": ISODate("2017-11-16T07:27:04.895Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0d3dcb08cb82c0068b4577"),
  "user_id": "59f17bb708cb828d3c8b4567",
  "image": "http://graph.facebook.com/1430418013717131/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 8371",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-16T07:27:07.726Z"),
  "created": ISODate("2017-11-16T07:27:07.726Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0d3dce08cb82c0068b4578"),
  "user_id": "59f1866b08cb8268498b4567",
  "image": "http://graph.facebook.com/1462018123905766/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 8423",
  "group_latitude": "35.693840",
  "group_longitude": "139.703549",
  "group_location": "tokyo shinjuku",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-16T07:27:10.401Z"),
  "created": ISODate("2017-11-16T07:27:10.401Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0d6f6408cb824b328b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"\",\n    \"Age\" : 0,\n    \"eng_name\" : \"\",\n    \"jap_name\" : \"\"\n  }\n]",
  "group_description": "",
  "group_latitude": "30.72765622429073",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.84595810720516",
  "group_tag": "1",
  "relationship": "",
  "user_id": "59df363908cb82cb3e8b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1510829925.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-11-16T10:58:44.870Z"),
  "created": ISODate("2017-11-16T10:58:44.870Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0ebdbc08cb82554a8b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c0\",\n    \"Age\" : 20,\n    \"eng_name\" : \"Certified public accountant\",\n    \"jap_name\" : \"公認会計士\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c5\",\n    \"Age\" : 26,\n    \"eng_name\" : \"Foreign finance\",\n    \"jap_name\" : \"外資金融\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711bf\",\n    \"Age\" : 21,\n    \"eng_name\" : \"lawyer\",\n    \"jap_name\" : \"弁護士\"\n  }\n]",
  "group_description": "This os the do dod dodndo dod dodndo",
  "group_latitude": "30.72796828491237",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.84591964071041",
  "group_tag": "1",
  "relationship": "Open",
  "user_id": "59ca262a08cb82af718b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1510915517.jpeg",
  "is_deleted": true,
  "modified": ISODate("2017-11-17T10:45:16.942Z"),
  "created": ISODate("2017-11-17T10:45:16.942Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0ec36208cb827c508b4567"),
  "user_id": "59c8d3bf08cb82180f8b4567",
  "image": "http://graph.facebook.com/1588167327924629/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 8203",
  "group_latitude": "30.339781",
  "group_longitude": "76.386880",
  "group_location": "patiala",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-17T11:09:22.366Z"),
  "created": ISODate("2017-11-17T11:09:22.366Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0ec36408cb827c508b4568"),
  "user_id": "59c913fd08cb825f448b4567",
  "image": "http://graph.facebook.com/1288672714577080/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 9257",
  "group_latitude": "30.704649",
  "group_longitude": "76.717873",
  "group_location": "mohali punjab",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-17T11:09:24.372Z"),
  "created": ISODate("2017-11-17T11:09:24.372Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0ec36708cb827c508b4569"),
  "user_id": "59ce185b08cb82384e8b4567",
  "image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 86",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-17T11:09:27.349Z"),
  "created": ISODate("2017-11-17T11:09:27.349Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0ec36908cb827c508b456a"),
  "user_id": "59d4caf008cb8274728b4567",
  "image": "http://graph.facebook.com/348484712243600/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 4559",
  "group_latitude": "30.339781",
  "group_longitude": "76.386880",
  "group_location": "patiala",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-17T11:09:29.476Z"),
  "created": ISODate("2017-11-17T11:09:29.476Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0ec36b08cb827c508b456b"),
  "user_id": "59d6130b08cb8206768b4567",
  "image": "http://132.148.135.156/~drinks/uploads/users/original/User_2017_1508755842.jpeg",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 3153",
  "group_latitude": "30.704649",
  "group_longitude": "76.717873",
  "group_location": "mohali punjab",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-17T11:09:31.768Z"),
  "created": ISODate("2017-11-17T11:09:31.768Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0ec36d08cb827c508b456c"),
  "user_id": "59c8d3c108cb82190f8b4567",
  "image": "http://graph.facebook.com/1588167327924629/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 4903",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-17T11:09:33.775Z"),
  "created": ISODate("2017-11-17T11:09:33.775Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0ec37008cb827c508b456d"),
  "user_id": "59c9140108cb8260448b4567",
  "image": "http://graph.facebook.com/1288672714577080/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 6308",
  "group_latitude": "30.704649",
  "group_longitude": "76.717873",
  "group_location": "mohali punjab",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-17T11:09:36.370Z"),
  "created": ISODate("2017-11-17T11:09:36.370Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0ec37208cb827c508b456e"),
  "user_id": "59ca1db008cb825c6c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 4442",
  "group_latitude": "30.339781",
  "group_longitude": "76.386880",
  "group_location": "patiala",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-17T11:09:38.376Z"),
  "created": ISODate("2017-11-17T11:09:38.376Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0ec37408cb827c508b456f"),
  "user_id": "59ca1db008cb825d6c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 9591",
  "group_latitude": "30.704649",
  "group_longitude": "76.717873",
  "group_location": "mohali punjab",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-17T11:09:40.668Z"),
  "created": ISODate("2017-11-17T11:09:40.669Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0ec37608cb827c508b4570"),
  "user_id": "59ca1db508cb82666c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 9116",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-17T11:09:42.675Z"),
  "created": ISODate("2017-11-17T11:09:42.675Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0ec37808cb827c508b4571"),
  "user_id": "59ca1db608cb82676c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 7186",
  "group_latitude": "30.704649",
  "group_longitude": "76.717873",
  "group_location": "mohali punjab",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-17T11:09:44.681Z"),
  "created": ISODate("2017-11-17T11:09:44.681Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0ec37b08cb827c508b4572"),
  "user_id": "59ca4b1208cb821d1a8b4567",
  "image": "http://graph.facebook.com/1541427585913395/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 8112",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-17T11:09:47.9Z"),
  "created": ISODate("2017-11-17T11:09:47.9Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0ec37d08cb827c508b4573"),
  "user_id": "59ca4b1808cb821e1a8b4567",
  "image": "http://graph.facebook.com/1541427585913395/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 261",
  "group_latitude": "30.704649",
  "group_longitude": "76.717873",
  "group_location": "mohali punjab",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-17T11:09:49.43Z"),
  "created": ISODate("2017-11-17T11:09:49.43Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0ec37f08cb827c508b4574"),
  "user_id": "59ef01a508cb821f168b4567",
  "image": "http://graph.facebook.com/348484712243600/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 1215",
  "group_latitude": "30.704649",
  "group_longitude": "76.717873",
  "group_location": "mohali punjab",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-17T11:09:51.923Z"),
  "created": ISODate("2017-11-17T11:09:51.923Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0ec38208cb827c508b4575"),
  "user_id": "59f17a8108cb827c3b8b4567",
  "image": "http://graph.facebook.com/1437892572967757/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 1699",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-17T11:09:54.41Z"),
  "created": ISODate("2017-11-17T11:09:54.41Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0ec38408cb827c508b4576"),
  "user_id": "59f17bb708cb828d3c8b4567",
  "image": "http://graph.facebook.com/1430418013717131/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 9447",
  "group_latitude": "30.704649",
  "group_longitude": "76.717873",
  "group_location": "mohali punjab",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-17T11:09:56.402Z"),
  "created": ISODate("2017-11-17T11:09:56.402Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a0ec38608cb827c508b4577"),
  "user_id": "59f1866b08cb8268498b4567",
  "image": "http://graph.facebook.com/1462018123905766/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 2217",
  "group_latitude": "30.339781",
  "group_longitude": "76.386880",
  "group_location": "patiala",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": true,
  "modified": ISODate("2017-11-17T11:09:58.405Z"),
  "created": ISODate("2017-11-17T11:09:58.405Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a126d8c08cb82131b8b4567"),
  "user_id": "59c8d3bf08cb82180f8b4567",
  "image": "http://graph.facebook.com/1588167327924629/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 6459",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T05:52:12.872Z"),
  "created": ISODate("2017-11-20T05:52:12.872Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a126d8f08cb82131b8b4568"),
  "user_id": "59c913fd08cb825f448b4567",
  "image": "http://graph.facebook.com/1288672714577080/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 4580",
  "group_latitude": "30.704649",
  "group_longitude": "76.717873",
  "group_location": "mohali punjab",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": true,
  "modified": ISODate("2017-11-20T05:52:15.45Z"),
  "created": ISODate("2017-11-20T05:52:15.45Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a126d9108cb82131b8b4569"),
  "user_id": "59ca262a08cb82af718b4567",
  "image": "http://132.148.135.156/~drinks/uploads/users/original/User_2017_1508756963.jpeg",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 4743",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T05:52:17.315Z"),
  "created": ISODate("2017-11-20T05:52:17.315Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a126d9308cb82131b8b456a"),
  "user_id": "59ce185b08cb82384e8b4567",
  "image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 9847",
  "group_latitude": "30.339781",
  "group_longitude": "76.386880",
  "group_location": "patiala",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T05:52:19.710Z"),
  "created": ISODate("2017-11-20T05:52:19.710Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a126d9608cb82131b8b456b"),
  "user_id": "59d4caf008cb8274728b4567",
  "image": "http://graph.facebook.com/348484712243600/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 7939",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T05:52:22.191Z"),
  "created": ISODate("2017-11-20T05:52:22.191Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a126d9808cb82131b8b456c"),
  "user_id": "59d6130b08cb8206768b4567",
  "image": "http://132.148.135.156/~drinks/uploads/users/original/User_2017_1508755842.jpeg",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 4618",
  "group_latitude": "30.704649",
  "group_longitude": "76.717873",
  "group_location": "mohali punjab",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T05:52:24.252Z"),
  "created": ISODate("2017-11-20T05:52:24.252Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a126d9b08cb82131b8b456d"),
  "user_id": "59c8d3c108cb82190f8b4567",
  "image": "http://graph.facebook.com/1588167327924629/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 1580",
  "group_latitude": "30.339781",
  "group_longitude": "76.386880",
  "group_location": "patiala",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T05:52:27.364Z"),
  "created": ISODate("2017-11-20T05:52:27.364Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a126d9d08cb82131b8b456e"),
  "user_id": "59c9140108cb8260448b4567",
  "image": "http://graph.facebook.com/1288672714577080/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 633",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T05:52:29.519Z"),
  "created": ISODate("2017-11-20T05:52:29.519Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a126d9f08cb82131b8b456f"),
  "user_id": "59ca1db008cb825c6c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 9127",
  "group_latitude": "30.339781",
  "group_longitude": "76.386880",
  "group_location": "patiala",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T05:52:31.649Z"),
  "created": ISODate("2017-11-20T05:52:31.649Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a126da108cb82131b8b4570"),
  "user_id": "59ca1db008cb825d6c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 6354",
  "group_latitude": "30.704649",
  "group_longitude": "76.717873",
  "group_location": "mohali punjab",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T05:52:33.686Z"),
  "created": ISODate("2017-11-20T05:52:33.686Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a126da308cb82131b8b4571"),
  "user_id": "59ca1db508cb82666c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 3315",
  "group_latitude": "30.704649",
  "group_longitude": "76.717873",
  "group_location": "mohali punjab",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T05:52:35.845Z"),
  "created": ISODate("2017-11-20T05:52:35.845Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a126da608cb82131b8b4572"),
  "user_id": "59ca1db608cb82676c8b4567",
  "image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 5727",
  "group_latitude": "30.339781",
  "group_longitude": "76.386880",
  "group_location": "patiala",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T05:52:38.238Z"),
  "created": ISODate("2017-11-20T05:52:38.238Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a126da808cb82131b8b4573"),
  "user_id": "59ca4b1208cb821d1a8b4567",
  "image": "http://graph.facebook.com/1541427585913395/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 2069",
  "group_latitude": "30.704649",
  "group_longitude": "76.717873",
  "group_location": "mohali punjab",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T05:52:40.732Z"),
  "created": ISODate("2017-11-20T05:52:40.732Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a126dab08cb82131b8b4574"),
  "user_id": "59ca4b1808cb821e1a8b4567",
  "image": "http://graph.facebook.com/1541427585913395/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 8645",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T05:52:43.383Z"),
  "created": ISODate("2017-11-20T05:52:43.383Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a126dad08cb82131b8b4575"),
  "user_id": "59ef01a508cb821f168b4567",
  "image": "http://graph.facebook.com/348484712243600/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 1161",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T05:52:45.710Z"),
  "created": ISODate("2017-11-20T05:52:45.710Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a126db008cb82131b8b4576"),
  "user_id": "59f17a8108cb827c3b8b4567",
  "image": "http://graph.facebook.com/1437892572967757/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 9547",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T05:52:48.384Z"),
  "created": ISODate("2017-11-20T05:52:48.384Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a126db308cb82131b8b4577"),
  "user_id": "59f17bb708cb828d3c8b4567",
  "image": "http://graph.facebook.com/1430418013717131/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 9418",
  "group_latitude": "30.339781",
  "group_longitude": "76.386880",
  "group_location": "patiala",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T05:52:51.153Z"),
  "created": ISODate("2017-11-20T05:52:51.153Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a126db508cb82131b8b4578"),
  "user_id": "59f1866b08cb8268498b4567",
  "image": "http://graph.facebook.com/1462018123905766/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 5141",
  "group_latitude": "30.704649",
  "group_longitude": "76.717873",
  "group_location": "mohali punjab",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T05:52:53.647Z"),
  "created": ISODate("2017-11-20T05:52:53.647Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a126e9b08cb82e61b8b4567"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711be\",\n    \"Age\" : 19,\n    \"eng_name\" : \"A doctor\",\n    \"jap_name\" : \"医師\"\n  }\n]",
  "group_description": "なみら",
  "group_latitude": "35.67269157621607",
  "group_location": "南烏山, 世田谷区",
  "group_longitude": "139.6069390700567",
  "group_tag": "1",
  "relationship": "College Friends",
  "user_id": "59c913fd08cb825f448b4567",
  "image": "http://132.148.135.156/~drinks/uploads/groups/original/User_2017_1511157403.jpeg",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T05:56:43.447Z"),
  "created": ISODate("2017-11-20T05:56:43.447Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a127bcf08cb8234288b4567"),
  "user_id": "5a1279633b2efdc8614f7832",
  "image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 2151",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T06:53:03.293Z"),
  "created": ISODate("2017-11-20T06:53:03.293Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a127bd108cb8234288b4568"),
  "user_id": "5a1279753b2efd09624f7832",
  "image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 1664",
  "group_latitude": "30.339781",
  "group_longitude": "76.386880",
  "group_location": "patiala",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T06:53:05.236Z"),
  "created": ISODate("2017-11-20T06:53:05.236Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a127bd308cb8234288b4569"),
  "user_id": "5a12798f3b2efdf7614f7832",
  "image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 966",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T06:53:07.656Z"),
  "created": ISODate("2017-11-20T06:53:07.656Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a127bd508cb8234288b456a"),
  "user_id": "5a1279ad3b2efdf7614f7833",
  "image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 9177",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T06:53:09.540Z"),
  "created": ISODate("2017-11-20T06:53:09.540Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a127bd708cb8234288b456b"),
  "user_id": "5a1279b83b2efd85614f7832",
  "image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 20,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 5694",
  "group_latitude": "30.704649",
  "group_longitude": "76.717873",
  "group_location": "mohali punjab",
  "group_tag": "",
  "relationship": "Family",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T06:53:11.688Z"),
  "created": ISODate("2017-11-20T06:53:11.688Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a127bd908cb8234288b456c"),
  "user_id": "5a1279c83b2efd24624f7832",
  "image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 6407",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T06:53:13.564Z"),
  "created": ISODate("2017-11-20T06:53:13.564Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a127bdb08cb8234288b456d"),
  "user_id": "5a1279d83b2efd27624f7832",
  "image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 7237",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T06:53:15.442Z"),
  "created": ISODate("2017-11-20T06:53:15.442Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a127bdd08cb8234288b456e"),
  "user_id": "5a1279ec3b2efd24624f7833",
  "image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "group_conditions": "[   {     \"id\" : \"59a545e241a73f9c5a7711be\",     \"Age\" : 21,     \"eng_name\" : \"A doctor\",     \"jap_name\" : \"医師\"   },   {     \"id\" : \"59a545e241a73f9c5a7711bf\",     \"Age\" : 21,     \"eng_name\" : \"lawyer\",     \"jap_name\" : \"弁護士\"   } ]",
  "group_description": "group test description 1046",
  "group_latitude": "30.339781",
  "group_longitude": "76.386880",
  "group_location": "patiala",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T06:53:17.640Z"),
  "created": ISODate("2017-11-20T06:53:17.640Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("5a127bdf08cb8234288b456f"),
  "user_id": "5a127a083b2efd40624f7832",
  "image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "group_conditions": "[  [  \"id\" : \"59a545e241a73f9c5a7711be\",  \"Age\" : 22,  \"eng_name\" : \"A doctor\",  \"jap_name\" : \"医師\"  ] ]",
  "group_description": "group test description 6202",
  "group_latitude": "30.72793178908115",
  "group_longitude": "76.84586432000771",
  "group_location": "Saketri Village, Panchkula",
  "group_tag": "",
  "relationship": "Open",
  "is_deleted": false,
  "modified": ISODate("2017-11-20T06:53:19.563Z"),
  "created": ISODate("2017-11-20T06:53:19.563Z")
});

/** job_lists records **/
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711bc"),
  "jap_name": "未設定",
  "eng_name": "Not set"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711bd"),
  "jap_name": "会社員",
  "eng_name": "employee"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711be"),
  "jap_name": "医師",
  "eng_name": "A doctor"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711bf"),
  "jap_name": "弁護士",
  "eng_name": "lawyer"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711c0"),
  "jap_name": "公認会計士",
  "eng_name": "Certified public accountant"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711c1"),
  "jap_name": "経営者・役員",
  "eng_name": "Management and officers"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711c2"),
  "jap_name": "公務員",
  "eng_name": "Civil servant"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711c3"),
  "jap_name": "事務員",
  "eng_name": "clerk"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711c4"),
  "jap_name": "大手商社",
  "eng_name": "Major trading company"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711c5"),
  "jap_name": "外資金融",
  "eng_name": "Foreign finance"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711c6"),
  "jap_name": "大手企業",
  "eng_name": "Major companies"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711c7"),
  "jap_name": "大手外資",
  "eng_name": "Major foreign capital"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711c8"),
  "jap_name": "クリエイター",
  "eng_name": "Creator"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711c9"),
  "jap_name": "IT関連",
  "eng_name": "IT related"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711ca"),
  "jap_name": "パイロット",
  "eng_name": "pilot"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711cb"),
  "jap_name": "客室乗務員",
  "eng_name": "Flight attendant"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711cc"),
  "jap_name": "芸能・モデル",
  "eng_name": "Entertainment model"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711cd"),
  "jap_name": "アパレル・ショップ",
  "eng_name": "Apparel / Shop"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711ce"),
  "jap_name": "アナウンサー",
  "eng_name": "announcer"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711cf"),
  "jap_name": "イベントコンパニオン",
  "eng_name": "Event Companion"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711d0"),
  "jap_name": "受付",
  "eng_name": "Receptionist"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711d1"),
  "jap_name": "秘書",
  "eng_name": "A secretary"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711d2"),
  "jap_name": "看護師",
  "eng_name": "nurse"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711d3"),
  "jap_name": "保育士",
  "eng_name": "Childminder"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711d4"),
  "jap_name": "自由業",
  "eng_name": "free Lance"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711d5"),
  "jap_name": "学生",
  "eng_name": "A student"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711d6"),
  "jap_name": "その他",
  "eng_name": "Other"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711d7"),
  "jap_name": "上場企業",
  "eng_name": "Listed company"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711d8"),
  "jap_name": "金融",
  "eng_name": "Finance"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711d9"),
  "jap_name": "コンサル",
  "eng_name": "Consulting"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711da"),
  "jap_name": "調理師・栄養士",
  "eng_name": "Cooks and dietician"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711db"),
  "jap_name": "教育関連",
  "eng_name": "Education"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711dc"),
  "jap_name": "食品関連",
  "eng_name": "Food related"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711dd"),
  "jap_name": "製薬",
  "eng_name": "Pharmaceutical"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711de"),
  "jap_name": "保険",
  "eng_name": "insurance"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711df"),
  "jap_name": "不動産",
  "eng_name": "real estate"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711e0"),
  "jap_name": "建築関連",
  "eng_name": "Building related"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711e1"),
  "jap_name": "通信",
  "eng_name": "communication"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711e2"),
  "jap_name": "流通",
  "eng_name": "distribution"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711e3"),
  "jap_name": "WEB業界",
  "eng_name": "WEB industry"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711e4"),
  "jap_name": "接客業",
  "eng_name": "service trade"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711e5"),
  "jap_name": "美容関連",
  "eng_name": "Beauty related"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711e6"),
  "jap_name": "エンターテイメント",
  "eng_name": "entertainment"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711e7"),
  "jap_name": "旅行関連",
  "eng_name": "Travel related"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711e8"),
  "jap_name": "ブライダル",
  "eng_name": "bridal"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711e9"),
  "jap_name": "福祉・介護",
  "eng_name": "Welfare / nursing care"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711ea"),
  "jap_name": "広告",
  "eng_name": "Ad"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711eb"),
  "jap_name": "マスコミ",
  "eng_name": "The media"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711ec"),
  "jap_name": "薬剤師",
  "eng_name": "pharmacist"
});
db.getCollection("job_lists").insert({
  "_id": ObjectId("59a545e241a73f9c5a7711ed"),
  "jap_name": "スポーツ選手",
  "eng_name": "athlete"
});

/** members records **/
db.getCollection("members").insert({
  "_id": ObjectId("59ddc9233b2efd795728c6e8"),
  "id": 1,
  "name": "Admin",
  "user_name": "admin",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "email": "admin@mailinator.com",
  "status": "active",
  "created": "2017-04-19 00:00:00",
  "modified": "0000-00-00 00:00:00"
});

/** messages records **/
db.getCollection("messages").insert({
  "_id": ObjectId("59ddb3fa08cb825e3b8b4567"),
  "message": "Nbnbn",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59dda94f08cb827b348b4567",
  "sender_id": "59d6130b08cb8206768b4567",
  "read_status": "1",
  "notification_status": NumberLong(0),
  "modified": ISODate("2017-10-11T06:02:34.974Z"),
  "created": ISODate("2017-10-11T06:02:34.974Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59ddb40c08cb82923b8b4567"),
  "message": "Hiii",
  "receiver_id": "59d6130b08cb8206768b4567",
  "thread_id": "59dda94f08cb827b348b4567",
  "sender_id": "59ca262a08cb82af718b4567",
  "read_status": "1",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-11T06:02:52.838Z"),
  "created": ISODate("2017-10-11T06:02:52.838Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59df419008cb829e488b4567"),
  "message": "Hello",
  "receiver_id": "59d4caf008cb8274728b4567",
  "thread_id": "59df414808cb8283488b4567",
  "sender_id": "59ca262a08cb82af718b4567",
  "read_status": "1",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-12T10:18:56.811Z"),
  "created": ISODate("2017-10-12T10:18:56.811Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59df419308cb82aa488b4567"),
  "message": "Kidan",
  "receiver_id": "59d4caf008cb8274728b4567",
  "thread_id": "59df414808cb8283488b4567",
  "sender_id": "59ca262a08cb82af718b4567",
  "read_status": "1",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-12T10:18:59.12Z"),
  "created": ISODate("2017-10-12T10:18:59.12Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59df419608cb82b5488b4567"),
  "message": "Aaya mesaage tenu",
  "receiver_id": "59d4caf008cb8274728b4567",
  "thread_id": "59df414808cb8283488b4567",
  "sender_id": "59ca262a08cb82af718b4567",
  "read_status": "1",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-12T10:19:02.338Z"),
  "created": ISODate("2017-10-12T10:19:02.338Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59df419908cb82ba488b4567"),
  "message": "Ta das baai",
  "receiver_id": "59d4caf008cb8274728b4567",
  "thread_id": "59df414808cb8283488b4567",
  "sender_id": "59ca262a08cb82af718b4567",
  "read_status": "1",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-12T10:19:05.128Z"),
  "created": ISODate("2017-10-12T10:19:05.128Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59df419e08cb82bf488b4567"),
  "message": "Nahi aunda ta vi dasde",
  "receiver_id": "59d4caf008cb8274728b4567",
  "thread_id": "59df414808cb8283488b4567",
  "sender_id": "59ca262a08cb82af718b4567",
  "read_status": "1",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-12T10:19:10.111Z"),
  "created": ISODate("2017-10-12T10:19:10.111Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59df41a308cb82ce488b4567"),
  "message": "Eda kuch ni",
  "receiver_id": "59d4caf008cb8274728b4567",
  "thread_id": "59df414808cb8283488b4567",
  "sender_id": "59ca262a08cb82af718b4567",
  "read_status": "1",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-12T10:19:15.72Z"),
  "created": ISODate("2017-10-12T10:19:15.72Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59df41a508cb82d1488b4567"),
  "message": "Ash kar",
  "receiver_id": "59d4caf008cb8274728b4567",
  "thread_id": "59df414808cb8283488b4567",
  "sender_id": "59ca262a08cb82af718b4567",
  "read_status": "1",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-12T10:19:17.181Z"),
  "created": ISODate("2017-10-12T10:19:17.181Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59df426908cb82b6498b4567"),
  "message": "Hello",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59df414808cb8283488b4567",
  "sender_id": "59d4caf008cb8274728b4567",
  "read_status": "1",
  "notification_status": NumberLong(0),
  "modified": ISODate("2017-10-12T10:22:33.761Z"),
  "created": ISODate("2017-10-12T10:22:33.761Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59e6ea0f08cb8288058b4567"),
  "message": "Hjkhk",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59dda94f08cb827b348b4567",
  "sender_id": "59d6130b08cb8206768b4567",
  "read_status": "1",
  "notification_status": NumberLong(0),
  "modified": ISODate("2017-10-18T05:43:43.698Z"),
  "created": ISODate("2017-10-18T05:43:43.698Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59ef106808cb821d258b4567"),
  "message": "Hiii",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59ef104308cb82dd248b4567",
  "sender_id": "59d4caf008cb8274728b4567",
  "read_status": "1",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-24T10:05:28.134Z"),
  "created": ISODate("2017-10-24T10:05:28.134Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59ef106d08cb8227258b4567"),
  "message": "Hello",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59ef104308cb82dd248b4567",
  "sender_id": "59d4caf008cb8274728b4567",
  "read_status": "1",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-24T10:05:33.390Z"),
  "created": ISODate("2017-10-24T10:05:33.390Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59ef107008cb8232258b4567"),
  "message": "Kidan 22",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59ef104308cb82dd248b4567",
  "sender_id": "59d4caf008cb8274728b4567",
  "read_status": "1",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-24T10:05:36.140Z"),
  "created": ISODate("2017-10-24T10:05:36.140Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59ef239008cb82cc3f8b4567"),
  "message": "Lkl",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59dda94f08cb827b348b4567",
  "sender_id": "59d6130b08cb8206768b4567",
  "read_status": "1",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-24T11:27:12.463Z"),
  "created": ISODate("2017-10-24T11:27:12.463Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59ef23e508cb8259408b4567"),
  "message": "Kkkkk",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59dda94f08cb827b348b4567",
  "sender_id": "59d6130b08cb8206768b4567",
  "read_status": "1",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-24T11:28:37.990Z"),
  "created": ISODate("2017-10-24T11:28:37.990Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59ef244408cb8253418b4567"),
  "message": "Gff",
  "receiver_id": "59d6130b08cb8206768b4567",
  "thread_id": "59dda94f08cb827b348b4567",
  "sender_id": "59ca262a08cb82af718b4567",
  "read_status": "1",
  "notification_status": NumberLong(0),
  "modified": ISODate("2017-10-24T11:30:12.366Z"),
  "created": ISODate("2017-10-24T11:30:12.366Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f0248808cb8235178b4567"),
  "message": "A",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59dda94f08cb827b348b4567",
  "sender_id": "59d6130b08cb8206768b4567",
  "read_status": "0",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-25T05:43:36.1Z"),
  "created": ISODate("2017-10-25T05:43:36.1Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f0249808cb8245178b4567"),
  "message": "A",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59dda94f08cb827b348b4567",
  "sender_id": "59d6130b08cb8206768b4567",
  "read_status": "0",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-25T05:43:52.699Z"),
  "created": ISODate("2017-10-25T05:43:52.699Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f02a5808cb8263228b4567"),
  "message": "A",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59dda94f08cb827b348b4567",
  "sender_id": "59d6130b08cb8206768b4567",
  "read_status": "0",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-25T06:08:24.961Z"),
  "created": ISODate("2017-10-25T06:08:24.961Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f02aac08cb8211238b4567"),
  "message": "K",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59dda94f08cb827b348b4567",
  "sender_id": "59d6130b08cb8206768b4567",
  "read_status": "0",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-25T06:09:48.156Z"),
  "created": ISODate("2017-10-25T06:09:48.156Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f02abe08cb8241238b4567"),
  "message": "K",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59dda94f08cb827b348b4567",
  "sender_id": "59d6130b08cb8206768b4567",
  "read_status": "0",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-25T06:10:06.299Z"),
  "created": ISODate("2017-10-25T06:10:06.299Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f02bca08cb82ff248b4567"),
  "message": "A",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59dda94f08cb827b348b4567",
  "sender_id": "59d6130b08cb8206768b4567",
  "read_status": "0",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-25T06:14:34.767Z"),
  "created": ISODate("2017-10-25T06:14:34.767Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f02bdd08cb8216258b4567"),
  "message": "A",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59dda94f08cb827b348b4567",
  "sender_id": "59d6130b08cb8206768b4567",
  "read_status": "0",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-25T06:14:53.693Z"),
  "created": ISODate("2017-10-25T06:14:53.693Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f02c6108cb82d7258b4567"),
  "message": "A",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59dda94f08cb827b348b4567",
  "sender_id": "59d6130b08cb8206768b4567",
  "read_status": "0",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-25T06:17:05.328Z"),
  "created": ISODate("2017-10-25T06:17:05.328Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f02cd308cb829f268b4567"),
  "message": "L",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59dda94f08cb827b348b4567",
  "sender_id": "59d6130b08cb8206768b4567",
  "read_status": "0",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-25T06:18:59.504Z"),
  "created": ISODate("2017-10-25T06:18:59.504Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f02cea08cb82d9268b4567"),
  "message": "L",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59dda94f08cb827b348b4567",
  "sender_id": "59d6130b08cb8206768b4567",
  "read_status": "0",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-25T06:19:22.996Z"),
  "created": ISODate("2017-10-25T06:19:22.996Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f0304408cb82852c8b4567"),
  "message": "H",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59dda94f08cb827b348b4567",
  "sender_id": "59d6130b08cb8206768b4567",
  "read_status": "0",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-25T06:33:40.243Z"),
  "created": ISODate("2017-10-25T06:33:40.243Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f0306d08cb82b82c8b4567"),
  "message": "K",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59dda94f08cb827b348b4567",
  "sender_id": "59d6130b08cb8206768b4567",
  "read_status": "0",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-25T06:34:21.272Z"),
  "created": ISODate("2017-10-25T06:34:21.272Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f031b308cb82c92e8b4567"),
  "message": "A",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59dda94f08cb827b348b4567",
  "sender_id": "59d6130b08cb8206768b4567",
  "read_status": "0",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-25T06:39:47.236Z"),
  "created": ISODate("2017-10-25T06:39:47.236Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f0322308cb82742f8b4567"),
  "message": "S",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59dda94f08cb827b348b4567",
  "sender_id": "59d6130b08cb8206768b4567",
  "read_status": "0",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-25T06:41:39.185Z"),
  "created": ISODate("2017-10-25T06:41:39.185Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f0323508cb828b2f8b4567"),
  "message": "A",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59dda94f08cb827b348b4567",
  "sender_id": "59d6130b08cb8206768b4567",
  "read_status": "0",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-25T06:41:57.811Z"),
  "created": ISODate("2017-10-25T06:41:57.811Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f032f208cb828f308b4567"),
  "message": "A",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59dda94f08cb827b348b4567",
  "sender_id": "59d6130b08cb8206768b4567",
  "read_status": "0",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-25T06:45:06.722Z"),
  "created": ISODate("2017-10-25T06:45:06.722Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f0330508cb82ae308b4567"),
  "message": "K",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59dda94f08cb827b348b4567",
  "sender_id": "59d6130b08cb8206768b4567",
  "read_status": "0",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-25T06:45:25.844Z"),
  "created": ISODate("2017-10-25T06:45:25.844Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f03d0a08cb82dc3c8b4567"),
  "message": "T",
  "receiver_id": "59d6130b08cb8206768b4567",
  "thread_id": "59f0362b08cb823a348b4567",
  "sender_id": "59ca262a08cb82af718b4567",
  "read_status": "1",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-25T07:28:10.678Z"),
  "created": ISODate("2017-10-25T07:28:10.678Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f065df08cb82b16b8b4567"),
  "message": "Hello",
  "receiver_id": "59d6130b08cb8206768b4567",
  "thread_id": "59f0362b08cb823a348b4567",
  "sender_id": "59ca262a08cb82af718b4567",
  "read_status": "1",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-25T10:22:23.739Z"),
  "created": ISODate("2017-10-25T10:22:23.739Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f065fa08cb82d46b8b4567"),
  "message": "Kida",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59f0362b08cb823a348b4567",
  "sender_id": "59d6130b08cb8206768b4567",
  "read_status": "1",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-25T10:22:50.536Z"),
  "created": ISODate("2017-10-25T10:22:50.536Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f1931b08cb82cc598b4567"),
  "message": "Hello",
  "receiver_id": "59c913fd08cb825f448b4567",
  "thread_id": "59f192ff08cb82b1598b4567",
  "sender_id": "59d4caf008cb8274728b4567",
  "read_status": "1",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-26T07:47:39.708Z"),
  "created": ISODate("2017-10-26T07:47:39.708Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f1937508cb82d45a8b4567"),
  "message": "Shs",
  "receiver_id": "59d4caf008cb8274728b4567",
  "thread_id": "59f192ff08cb82b1598b4567",
  "sender_id": "59c913fd08cb825f448b4567",
  "read_status": "1",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-26T07:49:09.854Z"),
  "created": ISODate("2017-10-26T07:49:09.854Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f1937b08cb82e25a8b4567"),
  "message": "Gzb",
  "receiver_id": "59d4caf008cb8274728b4567",
  "thread_id": "59f192ff08cb82b1598b4567",
  "sender_id": "59c913fd08cb825f448b4567",
  "read_status": "1",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-26T07:49:15.68Z"),
  "created": ISODate("2017-10-26T07:49:15.68Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f193a908cb82215b8b4567"),
  "message": "Recd",
  "receiver_id": "59c913fd08cb825f448b4567",
  "thread_id": "59f192ff08cb82b1598b4567",
  "sender_id": "59d4caf008cb8274728b4567",
  "read_status": "1",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-26T07:50:01.245Z"),
  "created": ISODate("2017-10-26T07:50:01.245Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f25a7608cb8295028b4567"),
  "message": "たは",
  "receiver_id": "59d4caf008cb8274728b4567",
  "thread_id": "59f192ff08cb82b1598b4567",
  "sender_id": "59c913fd08cb825f448b4567",
  "read_status": "0",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-26T21:58:14.483Z"),
  "created": ISODate("2017-10-26T21:58:14.483Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f82a6b08cb82ff4f8b4567"),
  "message": "Kkkk",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59dda94f08cb827b348b4567",
  "sender_id": "59d6130b08cb8206768b4567",
  "read_status": "0",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-31T07:46:51.557Z"),
  "created": ISODate("2017-10-31T07:46:51.557Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59f82ac208cb8275508b4567"),
  "message": "Yuu",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "59dda94f08cb827b348b4567",
  "sender_id": "59d6130b08cb8206768b4567",
  "read_status": "0",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-10-31T07:48:18.910Z"),
  "created": ISODate("2017-10-31T07:48:18.910Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("5a00550608cb8225338b4567"),
  "message": "Hello",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "5a004e7108cb82d02b8b4567",
  "sender_id": "59d4caf008cb8274728b4567",
  "read_status": "0",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-11-06T12:26:46.800Z"),
  "created": ISODate("2017-11-06T12:26:46.800Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("5a00550f08cb823b338b4567"),
  "message": "Okay",
  "receiver_id": "59ca262a08cb82af718b4567",
  "thread_id": "5a004e7108cb82d02b8b4567",
  "sender_id": "59d4caf008cb8274728b4567",
  "read_status": "0",
  "notification_status": NumberLong(1),
  "modified": ISODate("2017-11-06T12:26:55.73Z"),
  "created": ISODate("2017-11-06T12:26:55.73Z")
});

/** options records **/
db.getCollection("options").insert({
  "_id": ObjectId("59cb4dab3b2efdc35a4f4110"),
  "jap_name": "10 ポイント",
  "eng_name": "10 points",
  "point": "10",
  "amount": "100",
  "type": "ticket",
  "order": NumberLong(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb4dc93b2efdc05a4f4110"),
  "jap_name": "30 ポイント",
  "eng_name": "30 points",
  "point": "30",
  "amount": "200",
  "type": "ticket",
  "order": NumberLong(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb4ddb3b2efd315a4f410f"),
  "jap_name": "50 ポイント",
  "eng_name": "50 points",
  "point": "50",
  "amount": "300",
  "type": "ticket",
  "order": NumberLong(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb4df43b2efd68574f4110"),
  "jap_name": "100 ポイント",
  "eng_name": "100 points",
  "point": "100",
  "amount": "500",
  "type": "ticket",
  "order": NumberLong(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb4aeb3b2efdc05a4f410f"),
  "jap_name": "1 月",
  "eng_name": "1 month",
  "type": "membership_plan",
  "duration": "1",
  "amount": "1000",
  "order": NumberLong(1),
  "discount": "200",
  "description": "#trending",
  "modified": ISODate("2017-10-17T04:59:22.750Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb4b043b2efd68574f410f"),
  "jap_name": "3 月",
  "eng_name": "3 months",
  "type": "membership_plan",
  "duration": "3",
  "amount": 2000.01,
  "order": NumberInt(1),
  "discount": 200.01,
  "description": "#trending1"
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb4b143b2efd835a4f410f"),
  "jap_name": "6 月",
  "eng_name": "6 month",
  "type": "membership_plan",
  "duration": "6",
  "amount": 3000.01,
  "order": NumberInt(1),
  "discount": 200.01,
  "description": "#trending1"
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb701f3b2efd835a4f4110"),
  "type": "salary",
  "jap_name": "200万円〜400万円未満",
  "eng_name": "From 2 million yen to less than 4 million yen",
  "order": NumberLong(0),
  "modified": ISODate("2017-10-11T11:53:21.589Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb702e3b2efdc05a4f4111"),
  "type": "salary",
  "jap_name": "400万円〜600万円未満",
  "eng_name": "Less than 4 million yen ~ 6 million yen",
  "order": NumberLong(1),
  "modified": ISODate("2017-10-11T11:53:24.374Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb704c3b2efd315a4f4111"),
  "type": "salary",
  "jap_name": "600万円〜800万円未満",
  "eng_name": "From 6 million yen to less than 8 million yen",
  "order": NumberLong(2),
  "modified": ISODate("2017-10-11T11:53:25.573Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb70563b2efd1b644f4110"),
  "type": "salary",
  "jap_name": "800万円〜1000万円未満",
  "eng_name": "Less than 8 million yen ~ 10 million yen",
  "order": NumberLong(3),
  "modified": ISODate("2017-10-11T11:53:26.927Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb74033b2efd56694f410f"),
  "jap_name": "短大/専門学校卒",
  "eng_name": "Junior College / Vocational College",
  "type": "education",
  "order": NumberLong(0),
  "modified": ISODate("2017-10-11T11:52:56.874Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64cc041a73f9c5a771228"),
  "jap_name": "同僚",
  "eng_name": "Colleague",
  "type": "relationship",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64cc041a73f9c5a771229"),
  "jap_name": "同級生",
  "eng_name": "Classmates",
  "type": "relationship",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64cc041a73f9c5a77122b"),
  "jap_name": "...要アップデート",
  "eng_name": "Update Required",
  "type": "relationship",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a7711f9"),
  "jap_name": "北海道",
  "eng_name": "Hokkaido",
  "latitude": 43.220327,
  "longitude": 142.863474,
  "type": "place",
  "order": NumberLong(3),
  "modified": ISODate("2017-10-11T13:23:38.997Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a7711fa"),
  "jap_name": "青森",
  "eng_name": "Aomori",
  "latitude": 40.822072,
  "longitude": 140.747365,
  "type": "place",
  "order": NumberLong(0),
  "modified": ISODate("2017-10-11T13:23:40.131Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a7711fb"),
  "jap_name": "岩手",
  "eng_name": "Iwate",
  "latitude": 39.703619,
  "longitude": 141.152684,
  "type": "place",
  "order": NumberLong(2),
  "modified": ISODate("2017-10-11T13:23:41.335Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a7711fc"),
  "jap_name": "宮城",
  "eng_name": "Miyagi",
  "latitude": 38.268837,
  "longitude": 140.8721,
  "type": "place",
  "order": NumberLong(6),
  "modified": ISODate("2017-10-11T13:23:42.485Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a7711fd"),
  "jap_name": "秋田",
  "eng_name": "Akita",
  "latitude": 39.719922,
  "longitude": 140.10357,
  "type": "place",
  "order": NumberLong(1),
  "modified": ISODate("2017-10-11T13:23:43.904Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a7711fe"),
  "jap_name": "山形",
  "eng_name": "Yamagata",
  "latitude": 38.240435,
  "longitude": 140.363633,
  "type": "place",
  "order": NumberLong(4),
  "modified": ISODate("2017-10-11T13:23:45.88Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a7711ff"),
  "jap_name": "福島",
  "eng_name": "Fukushima",
  "latitude": 37.760834,
  "longitude": 140.474728,
  "type": "place",
  "order": NumberLong(5),
  "modified": ISODate("2017-10-11T13:23:46.219Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771200"),
  "jap_name": "茨木",
  "eng_name": "Ibaraki",
  "latitude": 36.341811,
  "longitude": 140.446794,
  "type": "place",
  "order": NumberLong(7),
  "modified": ISODate("2017-10-11T13:23:47.348Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771201"),
  "jap_name": "栃木",
  "eng_name": "Tochigi",
  "latitude": 36.565725,
  "longitude": 139.883565,
  "type": "place",
  "order": NumberLong(8),
  "modified": ISODate("2017-10-11T13:23:48.770Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771202"),
  "jap_name": "群馬",
  "eng_name": "Gunma",
  "latitude": 36.390667,
  "longitude": 139.060406,
  "type": "place",
  "order": NumberLong(9),
  "modified": ISODate("2017-10-11T13:23:49.902Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771203"),
  "jap_name": "埼玉",
  "eng_name": "Saitama",
  "latitude": 35.861729,
  "longitude": 139.645482,
  "type": "place",
  "order": NumberLong(10),
  "modified": ISODate("2017-10-11T13:23:51.68Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771204"),
  "jap_name": "千葉",
  "eng_name": "Chiba",
  "latitude": 35.605057,
  "longitude": 140.123306,
  "type": "place",
  "order": NumberLong(11),
  "modified": ISODate("2017-10-11T13:23:52.199Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771205"),
  "jap_name": "東京",
  "eng_name": "Tokyo",
  "latitude": 35.689487,
  "longitude": 139.691706,
  "type": "place",
  "order": NumberLong(12),
  "modified": ISODate("2017-10-11T13:23:53.896Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771206"),
  "jap_name": "神奈川",
  "eng_name": "Kanagawa",
  "latitude": 35.447507,
  "longitude": 139.642345,
  "type": "place",
  "order": NumberLong(13),
  "modified": ISODate("2017-10-11T13:23:55.27Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771207"),
  "jap_name": "新潟",
  "eng_name": "Niigata",
  "latitude": 37.916192,
  "longitude": 139.036413,
  "type": "place",
  "order": NumberLong(14),
  "modified": ISODate("2017-10-11T13:23:56.162Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771208"),
  "jap_name": "富山",
  "eng_name": "Toyama",
  "latitude": 36.695952,
  "longitude": 137.213677,
  "type": "place",
  "order": NumberLong(15),
  "modified": ISODate("2017-10-11T13:23:57.290Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771209"),
  "jap_name": "石川",
  "eng_name": "Ishikawa",
  "latitude": 36.594682,
  "longitude": 136.625573,
  "type": "place",
  "order": NumberLong(16),
  "modified": ISODate("2017-10-11T13:23:58.705Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77120a"),
  "jap_name": "福井",
  "eng_name": "Fukui",
  "latitude": 36.065178,
  "longitude": 136.221527,
  "type": "place",
  "order": NumberLong(17),
  "modified": ISODate("2017-10-11T13:23:59.835Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77120b"),
  "jap_name": "山梨",
  "eng_name": "Yamanashi",
  "latitude": 35.664158,
  "longitude": 138.568449,
  "type": "place",
  "order": NumberLong(18),
  "modified": ISODate("2017-10-11T13:24:00.965Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77120c"),
  "jap_name": "長野",
  "eng_name": "Nagano",
  "latitude": 36.648583,
  "longitude": 138.194771,
  "type": "place",
  "order": NumberLong(19),
  "modified": ISODate("2017-10-11T13:24:02.97Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77120d"),
  "jap_name": "岐阜",
  "eng_name": "Gifu",
  "latitude": 35.423298,
  "longitude": 136.760654,
  "type": "place",
  "order": NumberLong(20),
  "modified": ISODate("2017-10-11T13:24:03.231Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77120e"),
  "jap_name": "静岡",
  "eng_name": "Shizuoka",
  "latitude": 34.975562,
  "longitude": 138.38276,
  "type": "place",
  "order": NumberLong(21),
  "modified": ISODate("2017-10-11T13:24:04.644Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77120f"),
  "jap_name": "愛知",
  "eng_name": "Aichi",
  "latitude": 35.180188,
  "longitude": 136.906565,
  "type": "place",
  "order": NumberLong(22),
  "modified": ISODate("2017-10-11T13:24:05.772Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771210"),
  "jap_name": "三重",
  "eng_name": "Triple",
  "latitude": 47.60873,
  "longitude": -122.337462,
  "type": "place",
  "order": NumberLong(23),
  "modified": ISODate("2017-10-11T13:24:06.943Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771211"),
  "jap_name": "滋賀",
  "eng_name": "Shiga",
  "latitude": 35.004531,
  "longitude": 135.86859,
  "type": "place",
  "order": NumberLong(24),
  "modified": ISODate("2017-10-11T13:24:08.639Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771212"),
  "jap_name": "京都",
  "eng_name": "Kyoto",
  "latitude": 35.011636,
  "longitude": 135.768029,
  "type": "place",
  "order": NumberLong(25),
  "modified": ISODate("2017-10-11T13:24:09.768Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771213"),
  "jap_name": "大阪",
  "eng_name": "Osaka",
  "latitude": 34.693738,
  "longitude": 135.502165,
  "type": "place",
  "order": NumberLong(26),
  "modified": ISODate("2017-10-11T13:24:10.927Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771214"),
  "jap_name": "兵庫",
  "eng_name": "Hyōgo",
  "latitude": 34.691269,
  "longitude": 135.183071,
  "type": "place",
  "order": NumberLong(27),
  "modified": ISODate("2017-10-11T13:24:12.59Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771215"),
  "jap_name": "奈良",
  "eng_name": "Nara",
  "latitude": 34.685087,
  "longitude": 135.805,
  "type": "place",
  "order": NumberLong(28),
  "modified": ISODate("2017-10-11T13:24:13.191Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771216"),
  "jap_name": "和歌山",
  "eng_name": "Wakayama",
  "latitude": 34.225987,
  "longitude": 135.167509,
  "type": "place",
  "order": NumberLong(29),
  "modified": ISODate("2017-10-11T13:24:14.610Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771217"),
  "jap_name": "鳥取",
  "eng_name": "Tottori",
  "latitude": 35.501133,
  "longitude": 134.235091,
  "type": "place",
  "order": NumberLong(30),
  "modified": ISODate("2017-10-11T13:24:15.739Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771218"),
  "jap_name": "島根",
  "eng_name": "Shimane",
  "latitude": 35.472295,
  "longitude": 133.0505,
  "type": "place",
  "order": NumberLong(31),
  "modified": ISODate("2017-10-11T13:24:16.872Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771219"),
  "jap_name": "岡山",
  "eng_name": "Okayama",
  "latitude": 34.655146,
  "longitude": 133.919502,
  "type": "place",
  "order": NumberLong(32),
  "modified": ISODate("2017-10-11T13:24:18.20Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77121a"),
  "jap_name": "広島",
  "eng_name": "Hiroshima",
  "latitude": 34.385203,
  "longitude": 132.455293,
  "type": "place",
  "order": NumberLong(33),
  "modified": ISODate("2017-10-11T13:24:19.456Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77121b"),
  "jap_name": "山口",
  "eng_name": "Yamaguchi",
  "latitude": 34.178496,
  "longitude": 131.473727,
  "type": "place",
  "order": NumberLong(34),
  "modified": ISODate("2017-10-11T13:24:20.590Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77121c"),
  "jap_name": "徳島",
  "eng_name": "Tokushima",
  "latitude": 34.07027,
  "longitude": 134.554844,
  "type": "place",
  "order": NumberLong(35),
  "modified": ISODate("2017-10-11T13:24:21.719Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77121d"),
  "jap_name": "香川",
  "eng_name": "Kagawa",
  "latitude": 34.340149,
  "longitude": 134.043444,
  "type": "place",
  "order": NumberLong(36),
  "modified": ISODate("2017-10-11T13:24:23.129Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77121e"),
  "jap_name": "愛媛",
  "eng_name": "Ehime",
  "latitude": 33.841624,
  "longitude": 132.765681,
  "type": "place",
  "order": NumberLong(37),
  "modified": ISODate("2017-10-11T13:24:24.545Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77121f"),
  "jap_name": "高知",
  "eng_name": "Kochi",
  "latitude": 9.931233,
  "longitude": 76.267304,
  "type": "place",
  "order": NumberLong(38),
  "modified": ISODate("2017-10-11T13:24:25.675Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771220"),
  "jap_name": "福岡",
  "eng_name": "Fukuoka",
  "latitude": 33.590355,
  "longitude": 130.401716,
  "type": "place",
  "order": NumberLong(39),
  "modified": ISODate("2017-10-11T13:24:26.809Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771221"),
  "jap_name": "佐賀",
  "eng_name": "Saga",
  "latitude": 33.263482,
  "longitude": 130.300858,
  "type": "place",
  "order": NumberLong(40),
  "modified": ISODate("2017-10-11T13:24:27.943Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771222"),
  "jap_name": "長崎",
  "eng_name": "Nagasaki",
  "latitude": 32.750286,
  "longitude": 129.877667,
  "type": "place",
  "order": NumberLong(41),
  "modified": ISODate("2017-10-11T13:24:29.353Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771223"),
  "jap_name": "熊本",
  "eng_name": "Kumamoto",
  "latitude": 32.8031,
  "longitude": 130.707891,
  "type": "place",
  "order": NumberLong(42),
  "modified": ISODate("2017-10-11T13:24:30.482Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771224"),
  "jap_name": "大分",
  "eng_name": "Oita",
  "latitude": 33.238172,
  "longitude": 131.612619,
  "type": "place",
  "order": NumberLong(43),
  "modified": ISODate("2017-10-11T13:24:31.614Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771225"),
  "jap_name": "宮城",
  "eng_name": "Miyagi",
  "latitude": 38.268837,
  "longitude": 140.8721,
  "type": "place",
  "order": NumberLong(44),
  "modified": ISODate("2017-10-11T13:24:34.181Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771226"),
  "jap_name": "鹿児島",
  "eng_name": "Kagoshima",
  "latitude": 31.596553,
  "longitude": 130.557116,
  "type": "place",
  "order": NumberLong(45),
  "modified": ISODate("2017-10-11T13:24:32.743Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771227"),
  "jap_name": "沖縄",
  "eng_name": "Okinawa",
  "latitude": 26.501301,
  "longitude": 127.945404,
  "type": "place",
  "order": NumberLong(46),
  "modified": ISODate("2017-10-11T13:24:35.313Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb4b283b2efdc35a4f410f"),
  "jap_name": "12 月",
  "eng_name": "12 months",
  "type": "membership_plan",
  "duration": "12",
  "amount": 5000.01,
  "order": NumberInt(1),
  "discount": 200.01,
  "description": "#trending1"
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb74103b2efdc05a4f4112"),
  "jap_name": "高校卒",
  "eng_name": "High school graduates",
  "type": "education",
  "order": NumberLong(5),
  "modified": ISODate("2017-10-11T11:53:02.947Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64cf241a73f9c5a771235"),
  "jap_name": "たまに吸う",
  "eng_name": "Occasionally suck",
  "type": "tobacco",
  "order": NumberLong(2),
  "modified": ISODate("2017-10-18T05:38:03.845Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64cc041a73f9c5a77122a"),
  "jap_name": "先輩・後輩",
  "eng_name": "Seniors & juniors",
  "type": "relationship",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb73f13b2efd835a4f4111"),
  "jap_name": "未設定",
  "eng_name": "Not set",
  "type": "education",
  "order": NumberLong(2),
  "modified": ISODate("2017-10-11T11:52:58.180Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb74353b2efd835a4f4112"),
  "jap_name": "大学卒",
  "eng_name": "University degree",
  "type": "education",
  "order": NumberLong(1),
  "modified": ISODate("2017-10-11T11:52:59.297Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb74463b2efd56694f4110"),
  "jap_name": "大学院卒",
  "eng_name": "Masters degree",
  "type": "education",
  "order": NumberLong(3),
  "modified": ISODate("2017-10-11T11:53:00.688Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb744e3b2efd56694f4111"),
  "jap_name": "それ以外",
  "eng_name": "other than that",
  "type": "education",
  "order": NumberLong(4),
  "modified": ISODate("2017-10-11T11:53:01.842Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb6fea3b2efd315a4f4110"),
  "jap_name": "未設定",
  "eng_name": "Not set",
  "type": "salary",
  "order": NumberLong(4),
  "modified": ISODate("2017-10-11T11:53:19.251Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb70003b2efd1b644f410f"),
  "type": "salary",
  "jap_name": "表示しない",
  "eng_name": "Do not show",
  "order": NumberLong(6),
  "modified": ISODate("2017-10-11T11:53:20.395Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb70133b2efd68574f4111"),
  "type": "salary",
  "jap_name": "200万未満",
  "eng_name": "Less than 2 million",
  "order": NumberLong(5),
  "modified": ISODate("2017-10-11T11:53:22.917Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb705c3b2efd1b644f4111"),
  "type": "salary",
  "jap_name": "それ以上",
  "eng_name": "Any further",
  "order": NumberLong(7),
  "modified": ISODate("2017-10-11T11:53:28.102Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c4941a73f9c5a7711ef"),
  "jap_name": "たまに飲む",
  "eng_name": "Occasionally",
  "type": "drinking",
  "order": NumberLong(0),
  "modified": ISODate("2017-10-11T12:24:28.945Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c4941a73f9c5a7711ee"),
  "jap_name": "飲む",
  "eng_name": "drink",
  "type": "drinking",
  "order": NumberLong(1),
  "modified": ISODate("2017-10-11T12:24:30.172Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c4941a73f9c5a7711f0"),
  "jap_name": "飲まない",
  "eng_name": "do not drink",
  "type": "drinking",
  "order": NumberLong(2),
  "modified": ISODate("2017-10-11T12:24:31.413Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59e5836108cb82757e8b4567"),
  "eng_name": "200 points",
  "jap_name": "200 ポイント ",
  "type": "ticket",
  "point": "200",
  "amount": "700",
  "order": NumberLong(1),
  "modified": ISODate("2017-10-17T04:13:21.63Z"),
  "created": ISODate("2017-10-17T04:13:21.63Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb49243b2efdda7e4f410f"),
  "jap_name": "既婚",
  "eng_name": "married",
  "type": "marriage_type",
  "order": NumberLong(0),
  "modified": ISODate("2017-10-18T05:37:52.179Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb49173b2efd72574f410f"),
  "jap_name": "未婚",
  "eng_name": "unmarried",
  "type": "marriage_type",
  "order": NumberLong(1),
  "modified": ISODate("2017-10-18T05:37:53.357Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64cf241a73f9c5a771236"),
  "jap_name": "吸わない",
  "eng_name": "Do not smoke",
  "type": "tobacco",
  "order": NumberLong(0),
  "modified": ISODate("2017-10-18T05:38:01.531Z")
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64cf241a73f9c5a771234"),
  "jap_name": "吸う",
  "eng_name": "suck",
  "type": "tobacco",
  "order": NumberLong(1),
  "modified": ISODate("2017-10-18T05:38:02.682Z")
});

/** reported_groups records **/

/** reported_users records **/

/** system.indexes records **/
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "drinks.api_sessions"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "drinks.drinked_groups"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "drinks.groups"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "drinks.job_lists"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "drinks.members"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "drinks.messages"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "drinks.reported_groups"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "drinks.reported_users"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "drinks.threads"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "drinks.users"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "drinks.options"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "drinks.friends"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "drinks.transactions"
});

/** threads records **/
db.getCollection("threads").insert({
  "_id": ObjectId("59dda94f08cb827b348b4567"),
  "group_id": "59dc5a3908cb826e788b4567",
  "sender_id": "59ca262a08cb82af718b4567",
  "receiver_id": "59d6130b08cb8206768b4567",
  "modified": ISODate("2017-10-11T05:17:03.769Z"),
  "created": ISODate("2017-10-11T05:17:03.769Z"),
  "is_deleted": true
});
db.getCollection("threads").insert({
  "_id": ObjectId("59df005008cb8257178b4567"),
  "group_id": "59def66f08cb827a0b8b4567",
  "sender_id": "59d6130b08cb8206768b4567",
  "receiver_id": "59ca262a08cb82af718b4567",
  "is_deleted": true,
  "modified": ISODate("2017-10-12T05:40:32.105Z"),
  "created": ISODate("2017-10-12T05:40:32.105Z")
});
db.getCollection("threads").insert({
  "_id": ObjectId("59df414808cb8283488b4567"),
  "group_id": "59def66f08cb827a0b8b4567",
  "sender_id": "59d4caf008cb8274728b4567",
  "receiver_id": "59ca262a08cb82af718b4567",
  "is_deleted": true,
  "modified": ISODate("2017-10-12T10:17:44.426Z"),
  "created": ISODate("2017-10-12T10:17:44.426Z")
});
db.getCollection("threads").insert({
  "_id": ObjectId("59ef104308cb82dd248b4567"),
  "group_id": "59ef0d7808cb826a208b4567",
  "sender_id": "59ca262a08cb82af718b4567",
  "receiver_id": "59d4caf008cb8274728b4567",
  "is_deleted": true,
  "modified": ISODate("2017-10-24T10:04:51.473Z"),
  "created": ISODate("2017-10-24T10:04:51.473Z")
});
db.getCollection("threads").insert({
  "_id": ObjectId("59f0362b08cb823a348b4567"),
  "group_id": "59f0338708cb8288318b4567",
  "sender_id": "59d6130b08cb8206768b4567",
  "receiver_id": "59ca262a08cb82af718b4567",
  "is_deleted": true,
  "modified": ISODate("2017-10-25T06:58:51.715Z"),
  "created": ISODate("2017-10-25T06:58:51.715Z")
});
db.getCollection("threads").insert({
  "_id": ObjectId("59f192ff08cb82b1598b4567"),
  "group_id": "59f1767308cb8205378b4567",
  "sender_id": "59c913fd08cb825f448b4567",
  "receiver_id": "59d4caf008cb8274728b4567",
  "is_deleted": true,
  "modified": ISODate("2017-10-26T07:47:11.535Z"),
  "created": ISODate("2017-10-26T07:47:11.535Z")
});
db.getCollection("threads").insert({
  "_id": ObjectId("59f95c3408cb82e82e8b4567"),
  "group_id": "59f959ce08cb82852c8b4567",
  "sender_id": "59ca262a08cb82af718b4567",
  "receiver_id": "59d6130b08cb8206768b4567",
  "is_deleted": true,
  "modified": ISODate("2017-11-01T05:31:32.791Z"),
  "created": ISODate("2017-11-01T05:31:32.791Z")
});
db.getCollection("threads").insert({
  "_id": ObjectId("5a004e7108cb82d02b8b4567"),
  "group_id": "5a004c8b08cb82a2278b4567",
  "sender_id": "59d4caf008cb8274728b4567",
  "receiver_id": "59ca262a08cb82af718b4567",
  "is_deleted": true,
  "modified": ISODate("2017-11-06T11:58:41.31Z"),
  "created": ISODate("2017-11-06T11:58:41.31Z")
});
db.getCollection("threads").insert({
  "_id": ObjectId("5a0d796808cb82623e8b4567"),
  "group_id": "5a0d6f6408cb824b328b4567",
  "sender_id": "59ca262a08cb82af718b4567",
  "receiver_id": "59df363908cb82cb3e8b4567",
  "is_deleted": true,
  "modified": ISODate("2017-11-16T11:41:28.433Z"),
  "created": ISODate("2017-11-16T11:41:28.433Z")
});

/** transactions records **/
db.getCollection("transactions").insert({
  "_id": ObjectId("59e49fd908cb82e27b8b4567"),
  "user_id": "59ce185b08cb82384e8b4567",
  "stripe_id": "ch_1BDXIiHzWFyFYZlHyni5LpZI",
  "relation_id": "59cb4b043b2efd68574f410f",
  "amount": 1800,
  "type": "membership_plan",
  "is_deleted": false,
  "modified": ISODate("2017-10-16T12:02:33.180Z"),
  "created": ISODate("2017-10-16T12:02:33.180Z"),
  "payment_type": "stripe",
  "coupon_code": "",
  "tickets": NumberInt(0)
});
db.getCollection("transactions").insert({
  "_id": ObjectId("59e4a0cd08cb82ac7c8b4567"),
  "user_id": "59d6130b08cb8206768b4567",
  "stripe_id": "ch_1BDXMeHzWFyFYZlH7xRrzgXe",
  "relation_id": "59cb4b043b2efd68574f410f",
  "amount": 1800,
  "type": "membership_plan",
  "is_deleted": false,
  "modified": ISODate("2017-10-16T12:06:37.91Z"),
  "created": ISODate("2017-10-16T12:06:37.91Z"),
  "payment_type": "stripe",
  "coupon_code": "",
  "tickets": NumberInt(0)
});
db.getCollection("transactions").insert({
  "_id": ObjectId("59e4a0f708cb82dd7c8b4567"),
  "user_id": "59d6130b08cb8206768b4567",
  "stripe_id": "ch_1BDXNKHzWFyFYZlH8at0x3Xx",
  "relation_id": "59cb4aeb3b2efdc05a4f410f",
  "amount": 800,
  "type": "membership_plan",
  "is_deleted": false,
  "modified": ISODate("2017-10-16T12:07:19.935Z"),
  "created": ISODate("2017-10-16T12:07:19.935Z"),
  "payment_type": "stripe",
  "coupon_code": "",
  "tickets": NumberInt(0)
});
db.getCollection("transactions").insert({
  "_id": ObjectId("59e4a12f08cb82177d8b4567"),
  "user_id": "59d6130b08cb8206768b4567",
  "stripe_id": "ch_1BDXOEHzWFyFYZlHfuDaixJu",
  "relation_id": "59cb4aeb3b2efdc05a4f410f",
  "amount": 800,
  "type": "membership_plan",
  "is_deleted": false,
  "modified": ISODate("2017-10-16T12:08:15.729Z"),
  "created": ISODate("2017-10-16T12:08:15.729Z"),
  "payment_type": "stripe",
  "coupon_code": "",
  "tickets": NumberInt(0)
});
db.getCollection("transactions").insert({
  "_id": ObjectId("59e4a13708cb821f7d8b4567"),
  "user_id": "59ce185b08cb82384e8b4567",
  "stripe_id": "ch_1BDXOLHzWFyFYZlHO4MzzYcX",
  "relation_id": "59cb4b043b2efd68574f410f",
  "amount": 1800,
  "type": "membership_plan",
  "is_deleted": false,
  "modified": ISODate("2017-10-16T12:08:23.8Z"),
  "created": ISODate("2017-10-16T12:08:23.8Z"),
  "payment_type": "stripe",
  "coupon_code": "",
  "tickets": NumberInt(0)
});
db.getCollection("transactions").insert({
  "_id": ObjectId("59e4a1c408cb826f7d8b4567"),
  "user_id": "59d6130b08cb8206768b4567",
  "stripe_id": "ch_1BDXQcHzWFyFYZlH1nYhJyQC",
  "relation_id": "59cb4aeb3b2efdc05a4f410f",
  "amount": 800,
  "type": "membership_plan",
  "is_deleted": false,
  "modified": ISODate("2017-10-16T12:10:44.17Z"),
  "created": ISODate("2017-10-16T12:10:44.17Z"),
  "payment_type": "stripe",
  "coupon_code": "",
  "tickets": NumberInt(0)
});
db.getCollection("transactions").insert({
  "_id": ObjectId("59e5aaec08cb820a2a8b4567"),
  "user_id": "59ca262a08cb82af718b4567",
  "stripe_id": "",
  "relation_id": "",
  "amount": null,
  "type": "coupon",
  "coupon_code": "11asdfasdf",
  "payment_type": "manually",
  "is_deleted": false,
  "modified": ISODate("2017-10-17T07:02:04.992Z"),
  "created": ISODate("2017-10-17T07:02:04.992Z"),
  "tickets": NumberInt(0)
});
db.getCollection("transactions").insert({
  "_id": ObjectId("59e5b42108cb82b9328b4567"),
  "user_id": "59ca262a08cb82af718b4567",
  "stripe_id": "",
  "relation_id": "",
  "amount": "",
  "type": "coupon",
  "tickets": NumberLong(10),
  "coupon_code": "11asdfasdf",
  "payment_type": "manually",
  "is_deleted": false,
  "modified": ISODate("2017-10-17T07:41:21.383Z"),
  "created": ISODate("2017-10-17T07:41:21.383Z")
});
db.getCollection("transactions").insert({
  "_id": ObjectId("59e5b42b08cb82c1328b4567"),
  "user_id": "59ca262a08cb82af718b4567",
  "stripe_id": "",
  "relation_id": "",
  "amount": "",
  "type": "coupon",
  "tickets": NumberLong(10),
  "coupon_code": "11asdfasdf",
  "payment_type": "manually",
  "is_deleted": false,
  "modified": ISODate("2017-10-17T07:41:31.362Z"),
  "created": ISODate("2017-10-17T07:41:31.362Z")
});
db.getCollection("transactions").insert({
  "_id": ObjectId("59e5b43608cb82c6328b4567"),
  "user_id": "59ca262a08cb82af718b4567",
  "stripe_id": "",
  "relation_id": "",
  "amount": "",
  "type": "coupon",
  "tickets": NumberLong(10),
  "coupon_code": "11asdfasdf",
  "payment_type": "manually",
  "is_deleted": false,
  "modified": ISODate("2017-10-17T07:41:42.907Z"),
  "created": ISODate("2017-10-17T07:41:42.907Z")
});
db.getCollection("transactions").insert({
  "_id": ObjectId("59e5eff108cb8293638b4567"),
  "user_id": "59d6130b08cb8206768b4567",
  "stripe_id": "ch_1BDtgSHzWFyFYZlHNJ1RPmGE",
  "relation_id": "59cb4aeb3b2efdc05a4f410f",
  "amount": NumberLong(800),
  "coupon_code": "",
  "type": "membership_plan",
  "payment_type": "stripe",
  "is_deleted": false,
  "modified": ISODate("2017-10-17T11:56:33.865Z"),
  "created": ISODate("2017-10-17T11:56:33.866Z")
});
db.getCollection("transactions").insert({
  "_id": ObjectId("59e7082808cb8219278b4567"),
  "user_id": "59d4caf008cb8274728b4567",
  "stripe_id": "",
  "relation_id": "",
  "amount": "",
  "type": "coupon",
  "tickets": NumberLong(10),
  "coupon_code": "41QCK48L6M",
  "payment_type": "manually",
  "is_deleted": false,
  "modified": ISODate("2017-10-18T07:52:08.72Z"),
  "created": ISODate("2017-10-18T07:52:08.72Z")
});
db.getCollection("transactions").insert({
  "_id": ObjectId("59edca4008cb82b22b8b4567"),
  "user_id": "59d6130b08cb8206768b4567",
  "stripe_id": "ch_1BG3Z5HzWFyFYZlHJ1pGjBak",
  "relation_id": "59cb4dab3b2efdc35a4f4110",
  "amount": "100",
  "coupon_code": "",
  "type": "ticket",
  "payment_type": "stripe",
  "is_deleted": false,
  "modified": ISODate("2017-10-23T10:53:52.348Z"),
  "created": ISODate("2017-10-23T10:53:52.348Z")
});
db.getCollection("transactions").insert({
  "_id": ObjectId("59edd55008cb8230378b4567"),
  "user_id": "59d6130b08cb8206768b4567",
  "stripe_id": "ch_1BG4IlHzWFyFYZlHTERaRuRk",
  "relation_id": "59cb4dc93b2efdc05a4f4110",
  "amount": "200",
  "coupon_code": "",
  "type": "ticket",
  "payment_type": "stripe",
  "is_deleted": false,
  "modified": ISODate("2017-10-23T11:41:04.941Z"),
  "created": ISODate("2017-10-23T11:41:04.941Z")
});
db.getCollection("transactions").insert({
  "_id": ObjectId("59ef0ca908cb82411f8b4567"),
  "user_id": "59d4caf008cb8274728b4567",
  "stripe_id": "",
  "relation_id": "",
  "amount": "",
  "type": "coupon",
  "tickets": NumberLong(10),
  "coupon_code": "CSYVZPMO5V",
  "payment_type": "manually",
  "is_deleted": false,
  "modified": ISODate("2017-10-24T09:49:29.893Z"),
  "created": ISODate("2017-10-24T09:49:29.893Z")
});
db.getCollection("transactions").insert({
  "_id": ObjectId("59ef0cba08cb827c1f8b4567"),
  "user_id": "59d4caf008cb8274728b4567",
  "stripe_id": "",
  "relation_id": "",
  "amount": "",
  "type": "coupon",
  "tickets": NumberLong(10),
  "coupon_code": "CSYVZPMO5V",
  "payment_type": "manually",
  "is_deleted": false,
  "modified": ISODate("2017-10-24T09:49:46.949Z"),
  "created": ISODate("2017-10-24T09:49:46.949Z")
});
db.getCollection("transactions").insert({
  "_id": ObjectId("59f0115208cb823f7d8b4567"),
  "user_id": "59ca262a08cb82af718b4567",
  "stripe_id": "",
  "relation_id": "",
  "amount": "",
  "type": "coupon",
  "tickets": NumberLong(10),
  "coupon_code": "CSYVZPMO5V",
  "payment_type": "manually",
  "is_deleted": false,
  "modified": ISODate("2017-10-25T04:21:38.771Z"),
  "created": ISODate("2017-10-25T04:21:38.771Z")
});
db.getCollection("transactions").insert({
  "_id": ObjectId("59f0116208cb82437d8b4567"),
  "user_id": "59ca262a08cb82af718b4567",
  "stripe_id": "",
  "relation_id": "",
  "amount": "",
  "type": "coupon",
  "tickets": NumberLong(10),
  "coupon_code": "CSYVZPMO5V",
  "payment_type": "manually",
  "is_deleted": false,
  "modified": ISODate("2017-10-25T04:21:54.718Z"),
  "created": ISODate("2017-10-25T04:21:54.718Z")
});
db.getCollection("transactions").insert({
  "_id": ObjectId("59f0116b08cb82457d8b4567"),
  "user_id": "59ca262a08cb82af718b4567",
  "stripe_id": "",
  "relation_id": "",
  "amount": "",
  "type": "coupon",
  "tickets": NumberLong(10),
  "coupon_code": "CSYVZPMO5V",
  "payment_type": "manually",
  "is_deleted": false,
  "modified": ISODate("2017-10-25T04:22:03.287Z"),
  "created": ISODate("2017-10-25T04:22:03.287Z")
});
db.getCollection("transactions").insert({
  "_id": ObjectId("59f03c8c08cb82e23b8b4567"),
  "user_id": "59d6130b08cb8206768b4567",
  "stripe_id": "",
  "relation_id": "",
  "amount": "",
  "type": "coupon",
  "tickets": NumberLong(10),
  "coupon_code": "CSYVZPMO5V",
  "payment_type": "manually",
  "is_deleted": false,
  "modified": ISODate("2017-10-25T07:26:04.4Z"),
  "created": ISODate("2017-10-25T07:26:04.4Z")
});
db.getCollection("transactions").insert({
  "_id": ObjectId("59ffeefe08cb82f9398b4567"),
  "user_id": "59d6130b08cb8206768b4567",
  "stripe_id": "ch_1BL2tNHzWFyFYZlHU2fobPi5",
  "relation_id": "59cb4aeb3b2efdc05a4f410f",
  "amount": NumberLong(800),
  "coupon_code": "",
  "type": "membership_plan",
  "payment_type": "stripe",
  "is_deleted": false,
  "modified": ISODate("2017-11-06T05:11:26.252Z"),
  "created": ISODate("2017-11-06T05:11:26.252Z")
});
db.getCollection("transactions").insert({
  "_id": ObjectId("5a057fe208cb82ab4a8b4567"),
  "user_id": "59d6130b08cb8206768b4567",
  "stripe_id": "ch_1BMZmnHzWFyFYZlHZkJfTuz1",
  "relation_id": "59cb4dab3b2efdc35a4f4110",
  "amount": "100",
  "coupon_code": "",
  "type": "ticket",
  "payment_type": "stripe",
  "is_deleted": false,
  "modified": ISODate("2017-11-10T10:30:58.389Z"),
  "created": ISODate("2017-11-10T10:30:58.389Z")
});
db.getCollection("transactions").insert({
  "_id": ObjectId("5a092a5f08cb8204028b4567"),
  "user_id": "59d6130b08cb8206768b4567",
  "stripe_id": "ch_1BNaHpHzWFyFYZlHN1V27z4M",
  "relation_id": "59cb4dab3b2efdc35a4f4110",
  "amount": "100",
  "coupon_code": "",
  "type": "ticket",
  "payment_type": "stripe",
  "is_deleted": false,
  "modified": ISODate("2017-11-13T05:15:11.102Z"),
  "created": ISODate("2017-11-13T05:15:11.102Z")
});
db.getCollection("transactions").insert({
  "_id": ObjectId("5a0d855208cb82664d8b4567"),
  "user_id": "59ca262a08cb82af718b4567",
  "stripe_id": "ch_1BOmXVHzWFyFYZlHTccIVtSy",
  "relation_id": "59cb4aeb3b2efdc05a4f410f",
  "amount": NumberLong(800),
  "coupon_code": "",
  "type": "membership_plan",
  "payment_type": "stripe",
  "is_deleted": false,
  "modified": ISODate("2017-11-16T12:32:18.829Z"),
  "created": ISODate("2017-11-16T12:32:18.830Z")
});
db.getCollection("transactions").insert({
  "_id": ObjectId("5a0d873608cb82564f8b4567"),
  "user_id": "59ca262a08cb82af718b4567",
  "stripe_id": "ch_1BOmfIHzWFyFYZlHjs98YcM3",
  "relation_id": "59cb4dab3b2efdc35a4f4110",
  "amount": "100",
  "coupon_code": "",
  "type": "ticket",
  "payment_type": "stripe",
  "is_deleted": false,
  "modified": ISODate("2017-11-16T12:40:22.291Z"),
  "created": ISODate("2017-11-16T12:40:22.291Z")
});

/** users records **/
db.getCollection("users").insert({
  "_id": ObjectId("59c8d3bf08cb82180f8b4567"),
  "annual_income": "$ 5000 - 8000",
  "blood_type": "B+",
  "dob": "1999/09/25",
  "fb_id": "1588167327924629",
  "fb_image": "http://graph.facebook.com/1588167327924629/picture?type=large",
  "full_name": "Maninderjit Singh",
  "job_id": "59a545e241a73f9c5a7711be",
  "marriage": "UnMarried",
  "school_career": "Master",
  "tabaco": "DEF",
  "last_login": "2017-10-05 06:35:07",
  "modified": ISODate("2017-10-04T05:48:11.830Z"),
  "created": ISODate("2017-09-25T10:00:31.594Z"),
  "balance": NumberLong(99),
  "gender": "male",
  "premium_plan_last_date": "2017-11-12",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "status": true,
  "coupon_code": "5F4XT42COR",
  "is_deleted": false,
  "image": "",
  "consume_date": "2017-10-23",
  "consume_total": NumberLong(0),
  "is_age_verified": "pending",
  "age_document": ""
});
db.getCollection("users").insert({
  "_id": ObjectId("59c913fd08cb825f448b4567"),
  "annual_income": "$ 5000 - 8000",
  "blood_type": "AB+",
  "dob": "1992/09/25",
  "fb_id": "1288672714577080",
  "fb_image": "http://graph.facebook.com/1288672714577080/picture?type=large",
  "full_name": "Jonghwa Park",
  "job_id": "59a545e241a73f9c5a7711c0",
  "marriage": "Married",
  "school_career": "Graduate",
  "tabaco": "GHI",
  "last_login": "2017-11-16 14:05:19",
  "modified": ISODate("2017-11-16T14:38:13.986Z"),
  "created": ISODate("2017-09-25T14:34:37.975Z"),
  "balance": NumberLong(87),
  "gender": "Male",
  "premium_plan_last_date": "2017-11-12",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "status": true,
  "coupon_code": "FCJXNHPT7S",
  "is_deleted": false,
  "image": "",
  "consume_date": "2017-11-16",
  "consume_total": NumberLong(2),
  "is_age_verified": "approve",
  "age_document": "http://132.148.135.156/~drinks/uploads/users/age_document/original/age_document_2017_1510133567.jpeg"
});
db.getCollection("users").insert({
  "_id": ObjectId("59ca262a08cb82af718b4567"),
  "annual_income": "$ 15000 +",
  "blood_type": "B+",
  "dob": "1999/09/26",
  "fb_id": "336090616837724",
  "fb_image": "http://graph.facebook.com/336090616837724/picture?type=large",
  "full_name": "Jagan Singh",
  "job_id": "59a545e241a73f9c5a7711bd",
  "marriage": "Single",
  "school_career": "Ph.d",
  "tabaco": "GHI",
  "last_login": "2017-11-17 12:30:20",
  "modified": ISODate("2017-11-16T11:40:04.839Z"),
  "created": ISODate("2017-09-26T10:04:26.779Z"),
  "gender": "female",
  "balance": NumberLong(134),
  "premium_plan_last_date": "2017-12-12",
  "notification_receive_offer": false,
  "notification_when_matching": true,
  "notification_message": false,
  "notification_notice": true,
  "status": true,
  "coupon_code": "CSYVZPMO5V",
  "is_deleted": false,
  "image": "http://132.148.135.156/~drinks/uploads/users/original/User_2017_1508756963.jpeg",
  "consume_date": "2017-11-16",
  "consume_total": NumberLong(1),
  "is_age_verified": "pending",
  "age_document": "http://132.148.135.156/~drinks/uploads/users/age_document/original/age_document_2017_1509530528.jpg"
});
db.getCollection("users").insert({
  "_id": ObjectId("59ce185b08cb82384e8b4567"),
  "annual_income": "$ 5000 - 8000",
  "blood_type": "AB+",
  "dob": "1999/09/29",
  "fb_id": "1633787546633587",
  "fb_image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "full_name": "Maninder Manna",
  "job_id": "59a545e241a73f9c5a7711bf",
  "marriage": "UnMarried",
  "school_career": "Ph.d",
  "tabaco": "JKL",
  "last_login": "2017-10-05 11:44:55",
  "modified": ISODate("2017-10-03T14:42:27.888Z"),
  "created": ISODate("2017-09-29T09:54:35.533Z"),
  "balance": NumberLong(99),
  "gender": "male",
  "premium_plan_last_date": "2018-02-12",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "status": true,
  "coupon_code": "V19O170PWS",
  "is_deleted": false,
  "image": "",
  "consume_date": "2017-10-23",
  "consume_total": NumberLong(0),
  "is_age_verified": "pending",
  "age_document": ""
});
db.getCollection("users").insert({
  "_id": ObjectId("59d4caf008cb8274728b4567"),
  "annual_income": "$ 3000 - 5000",
  "blood_type": "B+",
  "dob": "1999/10/04",
  "fb_id": "348484712243600",
  "fb_image": "http://graph.facebook.com/348484712243600/picture?type=large",
  "full_name": "Jagan Xicom",
  "gender": "Female",
  "job_id": "59a545e241a73f9c5a7711c2",
  "marriage": "Married",
  "school_career": "Graduate",
  "tabaco": "DEF",
  "last_login": "2017-11-17 10:49:54",
  "modified": ISODate("2017-11-06T11:55:19.330Z"),
  "created": ISODate("2017-10-04T11:50:08.693Z"),
  "balance": NumberLong(128),
  "premium_plan_last_date": "2017-11-12",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "status": true,
  "coupon_code": "41QCK48L6M",
  "is_deleted": false,
  "image": "",
  "consume_date": "2017-11-06",
  "consume_total": NumberLong(1),
  "is_age_verified": "pending",
  "age_document": "http://132.148.135.156/~drinks/uploads/users/age_document/original/age_document_2017_1509966821.jpeg"
});
db.getCollection("users").insert({
  "_id": ObjectId("59d6130b08cb8206768b4567"),
  "annual_income": "$ 8000 - 15000",
  "blood_type": "O+",
  "dob": "1999/10/23",
  "fb_id": "1973983859552356",
  "fb_image": "http://graph.facebook.com/1973983859552356/picture?type=large",
  "full_name": "Mark Stevenhghgh",
  "gender": "Male",
  "job_id": "59a545e241a73f9c5a7711bd",
  "marriage": "Divorced",
  "school_career": "Master",
  "tabaco": "JKL",
  "last_login": "2017-11-13 12:28:44",
  "modified": ISODate("2017-11-16T10:39:33.657Z"),
  "created": ISODate("2017-10-05T11:10:03.288Z"),
  "balance": NumberLong(167),
  "premium_plan_last_date": "2018-03-12",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "status": true,
  "coupon_code": "DU3874C7EG",
  "is_deleted": false,
  "image": "http://132.148.135.156/~drinks/uploads/users/original/User_2017_1508755842.jpeg",
  "consume_date": "2017-11-16",
  "consume_total": NumberLong(1),
  "is_age_verified": "pending",
  "age_document": "http://132.148.135.156/~drinks/uploads/users/age_document/original/age_document_2017_1510812257.jpeg"
});
db.getCollection("users").insert({
  "_id": ObjectId("59c8d3c108cb82190f8b4567"),
  "annual_income": "$ 5000 - 8000",
  "blood_type": "B+",
  "dob": "1999/09/25",
  "fb_id": "1588167327924629",
  "fb_image": "http://graph.facebook.com/1588167327924629/picture?type=large",
  "full_name": "Maninderjit Singh",
  "job_id": "59a545e241a73f9c5a7711be",
  "marriage": "UnMarried",
  "school_career": "Master",
  "tabaco": "DEF",
  "last_login": "",
  "modified": ISODate("2017-09-25T10:00:33.440Z"),
  "created": ISODate("2017-09-25T10:00:33.440Z"),
  "gender": "male",
  "premium_plan_last_date": "2017-11-12",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "status": true,
  "coupon_code": "2IT0I6NI6K",
  "is_deleted": false,
  "image": "",
  "balance": NumberLong(10),
  "consume_date": "2017-10-23",
  "consume_total": NumberLong(0),
  "is_age_verified": "pending",
  "age_document": ""
});
db.getCollection("users").insert({
  "_id": ObjectId("59c9140108cb8260448b4567"),
  "annual_income": "$ 5000 - 8000",
  "blood_type": "AB+",
  "dob": "1992/09/25",
  "fb_id": "1288672714577080",
  "fb_image": "http://graph.facebook.com/1288672714577080/picture?type=large",
  "full_name": "Jonghwa Park",
  "job_id": "59a545e241a73f9c5a7711c0",
  "marriage": "Divorced",
  "school_career": "Graduate",
  "tabaco": "GHI",
  "last_login": "",
  "modified": ISODate("2017-09-25T14:34:41.138Z"),
  "created": ISODate("2017-09-25T14:34:41.138Z"),
  "gender": "male",
  "premium_plan_last_date": "2017-11-12",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "status": true,
  "coupon_code": "QSIJ6KMP0R",
  "is_deleted": false,
  "image": "",
  "balance": NumberLong(10),
  "consume_date": "2017-10-23",
  "consume_total": NumberLong(0),
  "is_age_verified": "pending",
  "age_document": ""
});
db.getCollection("users").insert({
  "_id": ObjectId("59ca1db008cb825c6c8b4567"),
  "annual_income": "$ 5000 - 8000",
  "blood_type": "A+",
  "dob": "1999/09/26",
  "fb_id": "1659578594114433",
  "fb_image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "full_name": "Nao Naka",
  "job_id": "59a545e241a73f9c5a7711bd",
  "marriage": "Married",
  "school_career": "Middle",
  "tabaco": "DEF",
  "last_login": "",
  "modified": ISODate("2017-09-26T09:28:16.230Z"),
  "created": ISODate("2017-09-26T09:28:16.230Z"),
  "gender": "female",
  "premium_plan_last_date": "2017-11-12",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "status": true,
  "coupon_code": "SBYMDQAYP9",
  "is_deleted": false,
  "image": "",
  "balance": NumberLong(10),
  "consume_date": "2017-10-23",
  "consume_total": NumberLong(0),
  "is_age_verified": "pending",
  "age_document": ""
});
db.getCollection("users").insert({
  "_id": ObjectId("59ca1db008cb825d6c8b4567"),
  "annual_income": "$ 5000 - 8000",
  "blood_type": "A+",
  "dob": "1999/09/26",
  "fb_id": "1659578594114433",
  "fb_image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "full_name": "Nao Naka",
  "job_id": "59a545e241a73f9c5a7711bd",
  "marriage": "Married",
  "school_career": "Middle",
  "tabaco": "DEF",
  "last_login": "",
  "modified": ISODate("2017-09-26T09:28:16.702Z"),
  "created": ISODate("2017-09-26T09:28:16.702Z"),
  "gender": "male",
  "premium_plan_last_date": "2017-11-12",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "status": true,
  "coupon_code": "ZOQULJ2TR8",
  "is_deleted": false,
  "image": "",
  "balance": NumberLong(10),
  "consume_date": "2017-10-23",
  "consume_total": NumberLong(0),
  "is_age_verified": "pending",
  "age_document": ""
});
db.getCollection("users").insert({
  "_id": ObjectId("59ca1db508cb82666c8b4567"),
  "annual_income": "$ 5000 - 8000",
  "blood_type": "A+",
  "dob": "1999/09/26",
  "fb_id": "1659578594114433",
  "fb_image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "full_name": "Nao Naka",
  "job_id": "59a545e241a73f9c5a7711bd",
  "marriage": "Married",
  "school_career": "Middle",
  "tabaco": "DEF",
  "last_login": "",
  "modified": ISODate("2017-09-26T09:28:21.209Z"),
  "created": ISODate("2017-09-26T09:28:21.209Z"),
  "gender": "male",
  "premium_plan_last_date": "2017-11-12",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "status": true,
  "coupon_code": "U4GLAYCCXX",
  "is_deleted": false,
  "image": "",
  "balance": NumberLong(10),
  "consume_date": "2017-10-23",
  "consume_total": NumberLong(0),
  "is_age_verified": "pending",
  "age_document": ""
});
db.getCollection("users").insert({
  "_id": ObjectId("59ca1db608cb82676c8b4567"),
  "annual_income": "$ 5000 - 8000",
  "blood_type": "A+",
  "dob": "1999/09/26",
  "fb_id": "1659578594114433",
  "fb_image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "full_name": "Nao Naka",
  "job_id": "59a545e241a73f9c5a7711bd",
  "marriage": "Married",
  "school_career": "Middle",
  "tabaco": "DEF",
  "last_login": "",
  "modified": ISODate("2017-09-26T09:28:22.154Z"),
  "created": ISODate("2017-09-26T09:28:22.154Z"),
  "gender": "female",
  "premium_plan_last_date": "2017-11-12",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "status": true,
  "coupon_code": "UDXB94SXNQ",
  "is_deleted": false,
  "image": "",
  "balance": NumberLong(10),
  "consume_date": "2017-10-23",
  "consume_total": NumberLong(0),
  "is_age_verified": "pending",
  "age_document": ""
});
db.getCollection("users").insert({
  "_id": ObjectId("59ca4b1208cb821d1a8b4567"),
  "annual_income": "$ 8000 - 15000",
  "blood_type": "A+",
  "dob": "1987/08/17",
  "fb_id": "1541427585913395",
  "fb_image": "http://graph.facebook.com/1541427585913395/picture?type=large",
  "full_name": "Narumitsu Hanafusa",
  "job_id": "59a545e241a73f9c5a7711c9",
  "marriage": "Single",
  "school_career": "Master",
  "tabaco": "ABC",
  "last_login": "",
  "modified": ISODate("2017-09-26T12:41:54.902Z"),
  "created": ISODate("2017-09-26T12:41:54.902Z"),
  "gender": "female",
  "premium_plan_last_date": "2017-11-12",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "status": true,
  "coupon_code": "7ZFCCJX0TY",
  "is_deleted": false,
  "image": "",
  "balance": NumberLong(10),
  "consume_date": "2017-10-23",
  "consume_total": NumberLong(0),
  "is_age_verified": "pending",
  "age_document": ""
});
db.getCollection("users").insert({
  "_id": ObjectId("59ca4b1808cb821e1a8b4567"),
  "annual_income": "$ 8000 - 15000",
  "blood_type": "A+",
  "dob": "1987/08/17",
  "fb_id": "1541427585913395",
  "fb_image": "http://graph.facebook.com/1541427585913395/picture?type=large",
  "full_name": "Narumitsu Hanafusa",
  "job_id": "59a545e241a73f9c5a7711c9",
  "marriage": "Single",
  "school_career": "Master",
  "tabaco": "ABC",
  "last_login": "",
  "modified": ISODate("2017-09-26T12:42:00.714Z"),
  "created": ISODate("2017-09-26T12:42:00.714Z"),
  "gender": "male",
  "premium_plan_last_date": "2017-11-12",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "status": true,
  "coupon_code": "JOTEA05RAI",
  "is_deleted": false,
  "image": "",
  "balance": NumberLong(10),
  "consume_date": "2017-10-23",
  "consume_total": NumberLong(0),
  "is_age_verified": "pending",
  "age_document": ""
});
db.getCollection("users").insert({
  "_id": ObjectId("59df363908cb82cb3e8b4567"),
  "annual_income": "$ 15000 +",
  "blood_type": "B+",
  "dob": "1999/10/12",
  "fb_id": "509099109453723",
  "fb_image": "http://graph.facebook.com/509099109453723/picture?type=large",
  "full_name": "Julia Sam",
  "gender": "Female",
  "job_id": "59a545e241a73f9c5a7711be",
  "marriage": "Divorced",
  "school_career": "Master",
  "tabaco": "GHI",
  "last_login": "2017-11-17 12:28:21",
  "modified": ISODate("2017-10-12T09:30:33.851Z"),
  "created": ISODate("2017-10-12T09:30:33.851Z"),
  "premium_plan_last_date": "2017-11-12",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "status": true,
  "coupon_code": "R7RFOYHLTZ",
  "is_deleted": true,
  "image": "",
  "balance": NumberLong(10),
  "consume_date": "2017-10-23",
  "consume_total": NumberLong(0),
  "is_age_verified": "pending",
  "age_document": ""
});
db.getCollection("users").insert({
  "_id": ObjectId("59e6ecee3b2efdbb6cf08a4c"),
  "annual_income": "$ 15000 +",
  "blood_type": "B+",
  "dob": "1999/10/12",
  "fb_id": "5090991094s537s23",
  "fb_image": "http://graph.facebook.com/5090991094s53723/picture?type=large",
  "full_name": "test Sam",
  "gender": "Female",
  "job_id": "59a545e241a73f9c5a7711be",
  "marriage": "Divorced",
  "school_career": "Master",
  "tabaco": "GHI",
  "last_login": "2017-10-13 10:24:49",
  "modified": ISODate("2017-10-18T07:29:56.649Z"),
  "created": ISODate("2017-10-12T09:30:33.851Z"),
  "premium_plan_last_date": "2017-11-12",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "status": true,
  "coupon_code": "LXV9BLWHQB",
  "is_deleted": true,
  "image": "",
  "balance": NumberLong(10),
  "consume_date": "2017-10-23",
  "consume_total": NumberLong(0),
  "is_age_verified": "pending",
  "age_document": ""
});
db.getCollection("users").insert({
  "_id": ObjectId("59ef01a508cb821f168b4567"),
  "annual_income": "$ 5000 - 8000",
  "blood_type": "B+",
  "dob": "1999/10/24",
  "fb_id": "348484712243600",
  "fb_image": "http://graph.facebook.com/348484712243600/picture?type=large",
  "full_name": "Jagan Xicom",
  "gender": "Male",
  "job_id": "59a545e241a73f9c5a7711bf",
  "marriage": "UnMarried",
  "school_career": "Graduate",
  "tabaco": "GHI",
  "last_login": "2017-10-24 09:02:28",
  "balance": NumberLong(10),
  "image": "",
  "premium_plan_last_date": "2017-10-23",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "coupon_code": "4ARXLXVEBM",
  "is_deleted": false,
  "status": true,
  "consume_date": "2017-10-24",
  "consume_total": NumberLong(0),
  "modified": ISODate("2017-10-24T09:02:29.249Z"),
  "created": ISODate("2017-10-24T09:02:29.249Z"),
  "is_age_verified": "pending",
  "age_document": ""
});
db.getCollection("users").insert({
  "_id": ObjectId("59f17a8108cb827c3b8b4567"),
  "annual_income": "$ 1000 - 3000",
  "blood_type": "A+",
  "dob": "1999/10/26",
  "fb_id": "1437892572967757",
  "fb_image": "http://graph.facebook.com/1437892572967757/picture?type=large",
  "full_name": "Samuels Mat",
  "gender": "Male",
  "job_id": "59a545e241a73f9c5a7711c1",
  "marriage": "Single",
  "school_career": "Middle",
  "tabaco": "ABC",
  "last_login": "2017-10-26 06:03:21",
  "balance": NumberLong(10),
  "image": "",
  "premium_plan_last_date": "2017-10-25",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "coupon_code": "NFIQVZU2ZH",
  "is_deleted": false,
  "status": true,
  "consume_date": "2017-10-26",
  "consume_total": NumberLong(0),
  "modified": ISODate("2017-10-26T06:02:41.77Z"),
  "created": ISODate("2017-10-26T06:02:41.77Z"),
  "is_age_verified": "reject",
  "age_document": ""
});
db.getCollection("users").insert({
  "_id": ObjectId("59f17bb708cb828d3c8b4567"),
  "annual_income": "$ 5000 - 8000",
  "blood_type": "B+",
  "dob": "1999/10/26",
  "fb_id": "1430418013717131",
  "fb_image": "http://graph.facebook.com/1430418013717131/picture?type=large",
  "full_name": "Marshal Erick",
  "gender": "Male",
  "job_id": "59a545e241a73f9c5a7711c1",
  "marriage": "Married",
  "school_career": "Master",
  "tabaco": "GHI",
  "last_login": "2017-10-26 06:08:08",
  "balance": NumberLong(9),
  "image": "",
  "premium_plan_last_date": "2017-10-25",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "coupon_code": "LY82TD9EUB",
  "is_deleted": false,
  "status": true,
  "consume_date": "2017-10-26",
  "consume_total": NumberLong(1),
  "modified": ISODate("2017-10-26T06:13:14.144Z"),
  "created": ISODate("2017-10-26T06:07:51.835Z"),
  "is_age_verified": "pending",
  "age_document": ""
});
db.getCollection("users").insert({
  "_id": ObjectId("59f1866b08cb8268498b4567"),
  "is_age_verified": "pending",
  "age_document": "",
  "annual_income": "$ 1000 - 3000",
  "blood_type": "AB+",
  "dob": "1999/10/26",
  "fb_id": "1462018123905766",
  "fb_image": "http://graph.facebook.com/1462018123905766/picture?type=large",
  "full_name": "Sudhanshu Srivastava",
  "gender": "Male",
  "job_id": "59a545e241a73f9c5a7711be",
  "marriage": "UnMarried",
  "school_career": "Ph.d",
  "tabaco": "JKL",
  "last_login": "2017-10-26 06:53:30",
  "balance": NumberLong(10),
  "image": "",
  "premium_plan_last_date": "2017-10-25",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "coupon_code": "ZXMEXRL4XO",
  "is_deleted": false,
  "status": true,
  "consume_date": "2017-10-26",
  "consume_total": NumberLong(0),
  "modified": ISODate("2017-10-26T06:53:31.550Z"),
  "created": ISODate("2017-10-26T06:53:31.550Z"),
  "is_age_ver": true
});
db.getCollection("users").insert({
  "_id": ObjectId("5a1279633b2efdc8614f7832"),
  "annual_income": "$ 5000 - 8000",
  "blood_type": "AB+",
  "dob": "1999/09/29",
  "fb_id": "1633787546633587",
  "fb_image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "full_name": "user singh",
  "job_id": "59a545e241a73f9c5a7711bf",
  "marriage": "UnMarried",
  "school_career": "Ph.d",
  "tabaco": "JKL",
  "last_login": "2017-10-05 11:44:55",
  "modified": ISODate("2017-10-03T14:42:27.888Z"),
  "created": ISODate("2017-09-29T09:54:35.533Z"),
  "balance": NumberLong(99),
  "gender": "female",
  "premium_plan_last_date": "2018-02-12",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "status": true,
  "coupon_code": "V19O170PWS",
  "is_deleted": false,
  "image": "",
  "consume_date": "2017-10-23",
  "consume_total": NumberLong(0),
  "is_age_verified": "pending",
  "age_document": ""
});
db.getCollection("users").insert({
  "_id": ObjectId("5a1279753b2efd09624f7832"),
  "annual_income": "$ 5000 - 8000",
  "blood_type": "AB+",
  "dob": "1999/09/29",
  "fb_id": "1633787546633587",
  "fb_image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "full_name": "test singh",
  "job_id": "59a545e241a73f9c5a7711bf",
  "marriage": "UnMarried",
  "school_career": "Ph.d",
  "tabaco": "JKL",
  "last_login": "2017-10-05 11:44:55",
  "modified": ISODate("2017-10-03T14:42:27.888Z"),
  "created": ISODate("2017-09-29T09:54:35.533Z"),
  "balance": NumberLong(99),
  "gender": "female",
  "premium_plan_last_date": "2018-02-12",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "status": true,
  "coupon_code": "V19O170PWS",
  "is_deleted": false,
  "image": "",
  "consume_date": "2017-10-23",
  "consume_total": NumberLong(0),
  "is_age_verified": "pending",
  "age_document": ""
});
db.getCollection("users").insert({
  "_id": ObjectId("5a12798f3b2efdf7614f7832"),
  "annual_income": "$ 5000 - 8000",
  "blood_type": "AB+",
  "dob": "1999/09/29",
  "fb_id": "1633787546633587",
  "fb_image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "full_name": "hello singh",
  "job_id": "59a545e241a73f9c5a7711bf",
  "marriage": "UnMarried",
  "school_career": "Ph.d",
  "tabaco": "JKL",
  "last_login": "2017-10-05 11:44:55",
  "modified": ISODate("2017-10-03T14:42:27.888Z"),
  "created": ISODate("2017-09-29T09:54:35.533Z"),
  "balance": NumberLong(99),
  "gender": "female",
  "premium_plan_last_date": "2018-02-12",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "status": true,
  "coupon_code": "V19O170PWS",
  "is_deleted": false,
  "image": "",
  "consume_date": "2017-10-23",
  "consume_total": NumberLong(0),
  "is_age_verified": "pending",
  "age_document": ""
});
db.getCollection("users").insert({
  "_id": ObjectId("5a1279ad3b2efdf7614f7833"),
  "annual_income": "$ 5000 - 8000",
  "blood_type": "AB+",
  "dob": "1999/09/29",
  "fb_id": "1633787546633587",
  "fb_image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "full_name": "Rinku",
  "job_id": "59a545e241a73f9c5a7711bf",
  "marriage": "UnMarried",
  "school_career": "Ph.d",
  "tabaco": "JKL",
  "last_login": "2017-10-05 11:44:55",
  "modified": ISODate("2017-10-03T14:42:27.888Z"),
  "created": ISODate("2017-09-29T09:54:35.533Z"),
  "balance": NumberLong(99),
  "gender": "female",
  "premium_plan_last_date": "2018-02-12",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "status": true,
  "coupon_code": "V19O170PWS",
  "is_deleted": false,
  "image": "",
  "consume_date": "2017-10-23",
  "consume_total": NumberLong(0),
  "is_age_verified": "pending",
  "age_document": ""
});
db.getCollection("users").insert({
  "_id": ObjectId("5a1279b83b2efd85614f7832"),
  "annual_income": "$ 5000 - 8000",
  "blood_type": "AB+",
  "dob": "1999/09/29",
  "fb_id": "1633787546633587",
  "fb_image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "full_name": "Katrina",
  "job_id": "59a545e241a73f9c5a7711bf",
  "marriage": "UnMarried",
  "school_career": "Ph.d",
  "tabaco": "JKL",
  "last_login": "2017-10-05 11:44:55",
  "modified": ISODate("2017-10-03T14:42:27.888Z"),
  "created": ISODate("2017-09-29T09:54:35.533Z"),
  "balance": NumberLong(99),
  "gender": "female",
  "premium_plan_last_date": "2018-02-12",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "status": true,
  "coupon_code": "V19O170PWS",
  "is_deleted": false,
  "image": "",
  "consume_date": "2017-10-23",
  "consume_total": NumberLong(0),
  "is_age_verified": "pending",
  "age_document": ""
});
db.getCollection("users").insert({
  "_id": ObjectId("5a1279c83b2efd24624f7832"),
  "annual_income": "$ 5000 - 8000",
  "blood_type": "AB+",
  "dob": "1999/09/29",
  "fb_id": "1633787546633587",
  "fb_image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "full_name": "Soniya gandhi",
  "job_id": "59a545e241a73f9c5a7711bf",
  "marriage": "UnMarried",
  "school_career": "Ph.d",
  "tabaco": "JKL",
  "last_login": "2017-10-05 11:44:55",
  "modified": ISODate("2017-10-03T14:42:27.888Z"),
  "created": ISODate("2017-09-29T09:54:35.533Z"),
  "balance": NumberLong(99),
  "gender": "female",
  "premium_plan_last_date": "2018-02-12",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "status": true,
  "coupon_code": "V19O170PWS",
  "is_deleted": false,
  "image": "",
  "consume_date": "2017-10-23",
  "consume_total": NumberLong(0),
  "is_age_verified": "pending",
  "age_document": ""
});
db.getCollection("users").insert({
  "_id": ObjectId("5a1279d83b2efd27624f7832"),
  "annual_income": "$ 5000 - 8000",
  "blood_type": "AB+",
  "dob": "1999/09/29",
  "fb_id": "1633787546633587",
  "fb_image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "full_name": "Mamtabanarji",
  "job_id": "59a545e241a73f9c5a7711bf",
  "marriage": "UnMarried",
  "school_career": "Ph.d",
  "tabaco": "JKL",
  "last_login": "2017-10-05 11:44:55",
  "modified": ISODate("2017-10-03T14:42:27.888Z"),
  "created": ISODate("2017-09-29T09:54:35.533Z"),
  "balance": NumberLong(99),
  "gender": "female",
  "premium_plan_last_date": "2018-02-12",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "status": true,
  "coupon_code": "V19O170PWS",
  "is_deleted": false,
  "image": "",
  "consume_date": "2017-10-23",
  "consume_total": NumberLong(0),
  "is_age_verified": "pending",
  "age_document": ""
});
db.getCollection("users").insert({
  "_id": ObjectId("5a1279ec3b2efd24624f7833"),
  "annual_income": "$ 5000 - 8000",
  "blood_type": "AB+",
  "dob": "1999/09/29",
  "fb_id": "1633787546633587",
  "fb_image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "full_name": "Kareena kapoor",
  "job_id": "59a545e241a73f9c5a7711bf",
  "marriage": "UnMarried",
  "school_career": "Ph.d",
  "tabaco": "JKL",
  "last_login": "2017-10-05 11:44:55",
  "modified": ISODate("2017-10-03T14:42:27.888Z"),
  "created": ISODate("2017-09-29T09:54:35.533Z"),
  "balance": NumberLong(99),
  "gender": "female",
  "premium_plan_last_date": "2018-02-12",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "status": true,
  "coupon_code": "V19O170PWS",
  "is_deleted": false,
  "image": "",
  "consume_date": "2017-10-23",
  "consume_total": NumberLong(0),
  "is_age_verified": "pending",
  "age_document": ""
});
db.getCollection("users").insert({
  "_id": ObjectId("5a127a083b2efd40624f7832"),
  "annual_income": "$ 5000 - 8000",
  "blood_type": "AB+",
  "dob": "1999/09/29",
  "fb_id": "1633787546633587",
  "fb_image": "http://graph.facebook.com/1633787546633587/picture?type=large",
  "full_name": "Deepika",
  "job_id": "59a545e241a73f9c5a7711bf",
  "marriage": "UnMarried",
  "school_career": "Ph.d",
  "tabaco": "JKL",
  "last_login": "2017-10-05 11:44:55",
  "modified": ISODate("2017-10-03T14:42:27.888Z"),
  "created": ISODate("2017-09-29T09:54:35.533Z"),
  "balance": NumberLong(99),
  "gender": "female",
  "premium_plan_last_date": "2018-02-12",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "status": true,
  "coupon_code": "V19O170PWS",
  "is_deleted": false,
  "image": "",
  "consume_date": "2017-10-23",
  "consume_total": NumberLong(0),
  "is_age_verified": "pending",
  "age_document": ""
});
