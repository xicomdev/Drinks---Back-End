
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
  "token": "ed9444708c140b7ec549e07a86c7c3dd4f069f37e444b449888dbc12cdead919",
  "login_status": NumberLong(1),
  "session_id": "ba88f32bfa269a302c087eed71f8b1c441c5afad",
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
  "token": "13d59b87e73b5356b00e67a323b1a9e51cb6172f4156fe7387fa6a6bafa970ad",
  "login_status": NumberLong(1),
  "session_id": "f2fdab1ea6d72866df10aff14ca6f3d2ceb8b3b3",
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
  "login_status": NumberLong(1),
  "session_id": "9c42d49043356bfe82fe8aeca755369c384ac2df",
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
  "token": "c9d92ea758237ea79d31c5a04a3c3b4981d3b11eb7e9f67898822ad1cb6e3a67",
  "login_status": NumberLong(1),
  "session_id": "becc29fe3aac338dcf6a1a6ba11684b3fc917529",
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
  "token": "c9d92ea758237ea79d31c5a04a3c3b4981d3b11eb7e9f67898822ad1cb6e3a67",
  "login_status": NumberLong(0),
  "session_id": "",
  "user_id": "59ca262a08cb82af718b4567",
  "device_id": "B6DFF40B-6659-438A-B12E-04E6A577D99B",
  "modified": ISODate("2017-10-12T10:16:46.656Z"),
  "created": ISODate("2017-10-12T10:16:46.656Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59ef0c6908cb82c91e8b4567"),
  "token": "7f047346e7f5323480cfaacdc92bcaa2b3382ddee4a768e1645e23d5fb68b0ec",
  "login_status": NumberLong(1),
  "session_id": "424d507dbc12154439816fef3d170c708ce161e2",
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
  "session_id": "d56ea379f9b6549e48fe4965ac0855a9b23d3a3e",
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
  "consume_total": NumberInt(0),
  "is_age_verified": false,
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
  "last_login": "2017-10-28 06:18:54",
  "modified": ISODate("2017-10-26T21:56:31.425Z"),
  "created": ISODate("2017-09-25T14:34:37.975Z"),
  "balance": NumberLong(94),
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
  "consume_date": "2017-10-26",
  "consume_total": NumberLong(3),
  "is_age_verified": false,
  "age_document": ""
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
  "last_login": "2017-11-01 05:09:48",
  "modified": ISODate("2017-11-01T05:22:28.420Z"),
  "created": ISODate("2017-09-26T10:04:26.779Z"),
  "gender": "female",
  "balance": NumberLong(126),
  "premium_plan_last_date": "2017-11-12",
  "notification_receive_offer": false,
  "notification_when_matching": true,
  "notification_message": false,
  "notification_notice": true,
  "status": true,
  "coupon_code": "CSYVZPMO5V",
  "is_deleted": false,
  "image": "http://132.148.135.156/~drinks/uploads/users/original/User_2017_1508756963.jpeg",
  "consume_date": "2017-11-01",
  "consume_total": NumberLong(1),
  "is_age_verified": false,
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
  "consume_total": NumberInt(0),
  "is_age_verified": false,
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
  "last_login": "2017-10-26 07:46:48",
  "modified": ISODate("2017-10-12T10:03:53.574Z"),
  "created": ISODate("2017-10-04T11:50:08.693Z"),
  "balance": NumberLong(129),
  "premium_plan_last_date": "2017-11-12",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "status": true,
  "coupon_code": "41QCK48L6M",
  "is_deleted": false,
  "image": "",
  "consume_date": "2017-10-23",
  "consume_total": NumberLong(0),
  "is_age_verified": false,
  "age_document": ""
});
db.getCollection("users").insert({
  "_id": ObjectId("59d6130b08cb8206768b4567"),
  "annual_income": "$ 8000 - 15000",
  "blood_type": "O+",
  "dob": "1999/10/23",
  "fb_id": "1973983859552356",
  "fb_image": "http://graph.facebook.com/1973983859552356/picture?type=large",
  "full_name": "Mark Steven",
  "gender": "Male",
  "job_id": "59a545e241a73f9c5a7711bd",
  "marriage": "Divorced",
  "school_career": "Master",
  "tabaco": "JKL",
  "last_login": "2017-10-25 11:56:57",
  "modified": ISODate("2017-10-25T06:52:44.567Z"),
  "created": ISODate("2017-10-05T11:10:03.288Z"),
  "balance": NumberLong(148),
  "premium_plan_last_date": "2018-02-12",
  "notification_receive_offer": true,
  "notification_when_matching": true,
  "notification_message": true,
  "notification_notice": true,
  "status": true,
  "coupon_code": "DU3874C7EG",
  "is_deleted": false,
  "image": "http://132.148.135.156/~drinks/uploads/users/original/User_2017_1508755842.jpeg",
  "consume_date": "2017-10-25",
  "consume_total": NumberLong(1),
  "is_age_verified": false,
  "age_document": "http://132.148.135.156/~drinks/uploads/users/age_document/original/age_document_2017_1509530408.jpeg"
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
  "balance": NumberInt(10),
  "consume_date": "2017-10-23",
  "consume_total": NumberInt(0),
  "is_age_verified": false,
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
  "balance": NumberInt(10),
  "consume_date": "2017-10-23",
  "consume_total": NumberInt(0),
  "is_age_verified": false,
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
  "balance": NumberInt(10),
  "consume_date": "2017-10-23",
  "consume_total": NumberInt(0),
  "is_age_verified": false,
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
  "consume_total": NumberInt(0),
  "is_age_verified": false,
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
  "balance": NumberInt(10),
  "consume_date": "2017-10-23",
  "consume_total": NumberInt(0),
  "is_age_verified": false,
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
  "balance": NumberInt(10),
  "consume_date": "2017-10-23",
  "consume_total": NumberInt(0),
  "is_age_verified": false,
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
  "balance": NumberInt(10),
  "consume_date": "2017-10-23",
  "consume_total": NumberInt(0),
  "is_age_verified": false,
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
  "consume_total": NumberInt(0),
  "is_age_verified": false,
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
  "last_login": "2017-10-13 10:24:49",
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
  "consume_total": NumberInt(0),
  "is_age_verified": false,
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
  "balance": NumberInt(10),
  "consume_date": "2017-10-23",
  "consume_total": NumberInt(0),
  "is_age_verified": false,
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
  "is_age_verified": false,
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
  "is_age_verified": false,
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
  "is_age_verified": false,
  "age_document": ""
});
db.getCollection("users").insert({
  "_id": ObjectId("59f1866b08cb8268498b4567"),
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
  "modified": ISODate("2017-10-26T06:53:31.55Z"),
  "created": ISODate("2017-10-26T06:53:31.55Z"),
  "is_age_verified": false,
  "age_document": "",
  "is_age_ver": true
});
