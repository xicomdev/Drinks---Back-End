
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
  "token": "57ff13f6d6baf6c3e433812b62aeeb8275486bc16860e0c05815e06891205e0f",
  "login_status": NumberLong(1),
  "session_id": "8c3ec120537af5c3b44d6dec6cbc1341fcae4caf",
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
  "token": "90092a5efc2d81463ce41dcae9dd62f7acbaed3f238628612d98a8751ad32414",
  "login_status": NumberLong(1),
  "session_id": "972ffd7b21409d66de2f79ce09c9da7bfde70404",
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
  "session_id": "dc86a7934c3d7d90e6b46e485534a161e3a3a981",
  "user_id": "59d6130b08cb8206768b4567",
  "device_id": "B826676A-41AE-4E4A-81E9-41214447FC29",
  "modified": ISODate("2017-10-05T12:23:36.754Z"),
  "created": ISODate("2017-10-05T12:23:36.754Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59db2b3508cb8233378b4567"),
  "token": "",
  "login_status": NumberLong(1),
  "session_id": "564c52290e4039c185d0aefecfdfa14731958f79",
  "user_id": "59ca262a08cb82af718b4567",
  "device_id": "A06FEFC6-7961-4AC9-994E-6FE968E51735",
  "modified": ISODate("2017-10-09T07:54:29.625Z"),
  "created": ISODate("2017-10-09T07:54:29.625Z")
});

/** drinked_groups records **/
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59dc912208cb825d188b4567"),
  "drinked_status": "drinked",
  "group_id": "59dc5a3908cb826e788b4567",
  "owner_user_id": "59d6130b08cb8206768b4567",
  "user_id": "59ca262a08cb82af718b4567",
  "is_deleted": false,
  "modified": ISODate("2017-10-10T09:21:38.479Z"),
  "created": ISODate("2017-10-10T09:21:38.479Z")
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
  "is_deleted": false,
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
  "is_deleted": false,
  "modified": ISODate("2017-10-10T09:19:11.740Z"),
  "created": ISODate("2017-10-10T09:19:11.740Z")
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
  "_id": ObjectId("59acfe762e7c99203c7db986"),
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

/** options records **/
db.getCollection("options").insert({
  "_id": ObjectId("59cb49173b2efd72574f410f"),
  "jap_name": "未婚",
  "eng_name": "unmarried",
  "type": "marriage_type",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb49243b2efdda7e4f410f"),
  "jap_name": "既婚",
  "eng_name": "married",
  "type": "marriage_type",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb4dab3b2efdc35a4f4110"),
  "jap_name": "10 ポイント",
  "eng_name": "10 points",
  "point": "10",
  "amount": "100",
  "type": "point",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb4dc93b2efdc05a4f4110"),
  "jap_name": "30 ポイント",
  "eng_name": "30 points",
  "point": "30",
  "amount": "200",
  "type": "point",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb4ddb3b2efd315a4f410f"),
  "jap_name": "50 ポイント",
  "eng_name": "50 points",
  "point": "50",
  "amount": "300",
  "type": "point",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb4df43b2efd68574f4110"),
  "jap_name": "100 ポイント",
  "eng_name": "100 points",
  "point": "100",
  "amount": "500",
  "type": "point",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb4aeb3b2efdc05a4f410f"),
  "jap_name": "1 月",
  "eng_name": "1 month",
  "type": "membership_plan",
  "duration": "1",
  "amount": 1000.01,
  "order": NumberInt(1),
  "discount": 200.01,
  "description": "#trending1"
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
  "_id": ObjectId("59cb6fea3b2efd315a4f4110"),
  "jap_name": "未設定",
  "eng_name": "Not set",
  "type": "salary",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb70003b2efd1b644f410f"),
  "type": "salary",
  "jap_name": "表示しない",
  "eng_name": "Do not show",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb70133b2efd68574f4111"),
  "type": "salary",
  "jap_name": "200万未満",
  "eng_name": "Less than 2 million",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb701f3b2efd835a4f4110"),
  "type": "salary",
  "jap_name": "200万円〜400万円未満",
  "eng_name": "From 2 million yen to less than 4 million yen",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb702e3b2efdc05a4f4111"),
  "type": "salary",
  "jap_name": "400万円〜600万円未満",
  "eng_name": "Less than 4 million yen ~ 6 million yen",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb704c3b2efd315a4f4111"),
  "type": "salary",
  "jap_name": "600万円〜800万円未満",
  "eng_name": "From 6 million yen to less than 8 million yen",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb70563b2efd1b644f4110"),
  "type": "salary",
  "jap_name": "800万円〜1000万円未満",
  "eng_name": "Less than 8 million yen ~ 10 million yen",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb705c3b2efd1b644f4111"),
  "type": "salary",
  "jap_name": "それ以上",
  "eng_name": "Any further",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb73f13b2efd835a4f4111"),
  "jap_name": "未設定",
  "eng_name": "Not set",
  "type": "education",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb74033b2efd56694f410f"),
  "jap_name": "短大/専門学校卒",
  "eng_name": "Junior College / Vocational College",
  "type": "education",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb74353b2efd835a4f4112"),
  "jap_name": "大学卒",
  "eng_name": "University degree",
  "type": "education",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb74463b2efd56694f4110"),
  "jap_name": "大学院卒",
  "eng_name": "Masters degree",
  "type": "education",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59cb744e3b2efd56694f4111"),
  "jap_name": "それ以外",
  "eng_name": "other than that",
  "type": "education",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64cf241a73f9c5a771234"),
  "jap_name": "吸う",
  "eng_name": "suck",
  "type": "tobacco",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64cf241a73f9c5a771236"),
  "jap_name": "吸わない",
  "eng_name": "Do not smoke",
  "type": "tobacco",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c4941a73f9c5a7711ee"),
  "jap_name": "飲む",
  "eng_name": "drink",
  "type": "drinking",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c4941a73f9c5a7711ef"),
  "jap_name": "たまに飲む",
  "eng_name": "Occasionally",
  "type": "drinking",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c4941a73f9c5a7711f0"),
  "jap_name": "飲まない",
  "eng_name": "do not drink",
  "type": "drinking",
  "order": NumberInt(1)
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
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a7711fa"),
  "jap_name": "青森",
  "eng_name": "Aomori",
  "latitude": 40.822072,
  "longitude": 140.747365,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a7711fb"),
  "jap_name": "岩手",
  "eng_name": "Iwate",
  "latitude": 39.703619,
  "longitude": 141.152684,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a7711fc"),
  "jap_name": "宮城",
  "eng_name": "Miyagi",
  "latitude": 38.268837,
  "longitude": 140.8721,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a7711fd"),
  "jap_name": "秋田",
  "eng_name": "Akita",
  "latitude": 39.719922,
  "longitude": 140.10357,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a7711fe"),
  "jap_name": "山形",
  "eng_name": "Yamagata",
  "latitude": 38.240435,
  "longitude": 140.363633,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a7711ff"),
  "jap_name": "福島",
  "eng_name": "Fukushima",
  "latitude": 37.760834,
  "longitude": 140.474728,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771200"),
  "jap_name": "茨木",
  "eng_name": "Ibaraki",
  "latitude": 36.341811,
  "longitude": 140.446794,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771201"),
  "jap_name": "栃木",
  "eng_name": "Tochigi",
  "latitude": 36.565725,
  "longitude": 139.883565,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771202"),
  "jap_name": "群馬",
  "eng_name": "Gunma",
  "latitude": 36.390667,
  "longitude": 139.060406,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771203"),
  "jap_name": "埼玉",
  "eng_name": "Saitama",
  "latitude": 35.861729,
  "longitude": 139.645482,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771204"),
  "jap_name": "千葉",
  "eng_name": "Chiba",
  "latitude": 35.605057,
  "longitude": 140.123306,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771205"),
  "jap_name": "東京",
  "eng_name": "Tokyo",
  "latitude": 35.689487,
  "longitude": 139.691706,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771206"),
  "jap_name": "神奈川",
  "eng_name": "Kanagawa",
  "latitude": 35.447507,
  "longitude": 139.642345,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771207"),
  "jap_name": "新潟",
  "eng_name": "Niigata",
  "latitude": 37.916192,
  "longitude": 139.036413,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771208"),
  "jap_name": "富山",
  "eng_name": "Toyama",
  "latitude": 36.695952,
  "longitude": 137.213677,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771209"),
  "jap_name": "石川",
  "eng_name": "Ishikawa",
  "latitude": 36.594682,
  "longitude": 136.625573,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77120a"),
  "jap_name": "福井",
  "eng_name": "Fukui",
  "latitude": 36.065178,
  "longitude": 136.221527,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77120b"),
  "jap_name": "山梨",
  "eng_name": "Yamanashi",
  "latitude": 35.664158,
  "longitude": 138.568449,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77120c"),
  "jap_name": "長野",
  "eng_name": "Nagano",
  "latitude": 36.648583,
  "longitude": 138.194771,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77120d"),
  "jap_name": "岐阜",
  "eng_name": "Gifu",
  "latitude": 35.423298,
  "longitude": 136.760654,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77120e"),
  "jap_name": "静岡",
  "eng_name": "Shizuoka",
  "latitude": 34.975562,
  "longitude": 138.38276,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77120f"),
  "jap_name": "愛知",
  "eng_name": "Aichi",
  "latitude": 35.180188,
  "longitude": 136.906565,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771210"),
  "jap_name": "三重",
  "eng_name": "Triple",
  "latitude": 47.60873,
  "longitude": -122.337462,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771211"),
  "jap_name": "滋賀",
  "eng_name": "Shiga",
  "latitude": 35.004531,
  "longitude": 135.86859,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771212"),
  "jap_name": "京都",
  "eng_name": "Kyoto",
  "latitude": 35.011636,
  "longitude": 135.768029,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771213"),
  "jap_name": "大阪",
  "eng_name": "Osaka",
  "latitude": 34.693738,
  "longitude": 135.502165,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771214"),
  "jap_name": "兵庫",
  "eng_name": "Hyōgo",
  "latitude": 34.691269,
  "longitude": 135.183071,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771215"),
  "jap_name": "奈良",
  "eng_name": "Nara",
  "latitude": 34.685087,
  "longitude": 135.805,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771216"),
  "jap_name": "和歌山",
  "eng_name": "Wakayama",
  "latitude": 34.225987,
  "longitude": 135.167509,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771217"),
  "jap_name": "鳥取",
  "eng_name": "Tottori",
  "latitude": 35.501133,
  "longitude": 134.235091,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771218"),
  "jap_name": "島根",
  "eng_name": "Shimane",
  "latitude": 35.472295,
  "longitude": 133.0505,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771219"),
  "jap_name": "岡山",
  "eng_name": "Okayama",
  "latitude": 34.655146,
  "longitude": 133.919502,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77121a"),
  "jap_name": "広島",
  "eng_name": "Hiroshima",
  "latitude": 34.385203,
  "longitude": 132.455293,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77121b"),
  "jap_name": "山口",
  "eng_name": "Yamaguchi",
  "latitude": 34.178496,
  "longitude": 131.473727,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77121c"),
  "jap_name": "徳島",
  "eng_name": "Tokushima",
  "latitude": 34.07027,
  "longitude": 134.554844,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77121d"),
  "jap_name": "香川",
  "eng_name": "Kagawa",
  "latitude": 34.340149,
  "longitude": 134.043444,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77121e"),
  "jap_name": "愛媛",
  "eng_name": "Ehime",
  "latitude": 33.841624,
  "longitude": 132.765681,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77121f"),
  "jap_name": "高知",
  "eng_name": "Kochi",
  "latitude": 9.931233,
  "longitude": 76.267304,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771220"),
  "jap_name": "福岡",
  "eng_name": "Fukuoka",
  "latitude": 33.590355,
  "longitude": 130.401716,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771221"),
  "jap_name": "佐賀",
  "eng_name": "Saga",
  "latitude": 33.263482,
  "longitude": 130.300858,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771222"),
  "jap_name": "長崎",
  "eng_name": "Nagasaki",
  "latitude": 32.750286,
  "longitude": 129.877667,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771223"),
  "jap_name": "熊本",
  "eng_name": "Kumamoto",
  "latitude": 32.8031,
  "longitude": 130.707891,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771224"),
  "jap_name": "大分",
  "eng_name": "Oita",
  "latitude": 33.238172,
  "longitude": 131.612619,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771225"),
  "jap_name": "宮城",
  "eng_name": "Miyagi",
  "latitude": 38.268837,
  "longitude": 140.8721,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771226"),
  "jap_name": "鹿児島",
  "eng_name": "Kagoshima",
  "latitude": 31.596553,
  "longitude": 130.557116,
  "type": "place",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771227"),
  "jap_name": "沖縄",
  "eng_name": "Okinawa",
  "latitude": 26.501301,
  "longitude": 127.945404,
  "type": "place",
  "order": NumberInt(1)
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
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64cf241a73f9c5a771235"),
  "jap_name": "たまに吸う",
  "eng_name": "Occasionally suck",
  "type": "tobacco",
  "order": NumberInt(1)
});
db.getCollection("options").insert({
  "_id": ObjectId("59a64cc041a73f9c5a77122a"),
  "jap_name": "先輩・後輩",
  "eng_name": "Seniors & juniors",
  "type": "relationship",
  "order": NumberInt(1)
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

/** threads records **/
db.getCollection("threads").insert({
  "_id": ObjectId("59dc912308cb825d188b4568"),
  "group_id": "59dc5a3908cb826e788b4567",
  "sender_id": "59ca262a08cb82af718b4567",
  "receiver_id": "59d6130b08cb8206768b4567",
  "modified": ISODate("2017-10-10T09:21:39.669Z"),
  "created": ISODate("2017-10-10T09:21:39.669Z")
});
db.getCollection("threads").insert({
  "_id": ObjectId("59dc91c308cb82d6188b4567"),
  "group_id": "59dc5a3908cb826e788b4567",
  "sender_id": "59ca262a08cb82af718b4567",
  "receiver_id": "59d6130b08cb8206768b4567",
  "modified": ISODate("2017-10-10T09:24:19.21Z"),
  "created": ISODate("2017-10-10T09:24:19.21Z")
});
db.getCollection("threads").insert({
  "_id": ObjectId("59dc940308cb82721d8b4567"),
  "group_id": "59dc5a3908cb826e788b4567",
  "sender_id": "59ca262a08cb82af718b4567",
  "receiver_id": "59d6130b08cb8206768b4567",
  "modified": ISODate("2017-10-10T09:33:55.86Z"),
  "created": ISODate("2017-10-10T09:33:55.86Z")
});
db.getCollection("threads").insert({
  "_id": ObjectId("59dc954b08cb829b1f8b4567"),
  "group_id": "59dc5a3908cb826e788b4567",
  "sender_id": "59ca262a08cb82af718b4567",
  "receiver_id": "59d6130b08cb8206768b4567",
  "modified": ISODate("2017-10-10T09:39:23.759Z"),
  "created": ISODate("2017-10-10T09:39:23.759Z")
});
db.getCollection("threads").insert({
  "_id": ObjectId("59dc961a08cb8249208b4567"),
  "group_id": "59dc5a3908cb826e788b4567",
  "sender_id": "59ca262a08cb82af718b4567",
  "receiver_id": "59d6130b08cb8206768b4567",
  "modified": ISODate("2017-10-10T09:42:50.427Z"),
  "created": ISODate("2017-10-10T09:42:50.427Z")
});
db.getCollection("threads").insert({
  "_id": ObjectId("59dc99cf08cb8245228b4567"),
  "group_id": "59dc5a3908cb826e788b4567",
  "sender_id": "59ca262a08cb82af718b4567",
  "receiver_id": "59d6130b08cb8206768b4567",
  "modified": ISODate("2017-10-10T09:58:39.765Z"),
  "created": ISODate("2017-10-10T09:58:39.765Z")
});
db.getCollection("threads").insert({
  "_id": ObjectId("59dc9a2608cb82a3228b4567"),
  "group_id": "59dc5a3908cb826e788b4567",
  "sender_id": "59ca262a08cb82af718b4567",
  "receiver_id": "59d6130b08cb8206768b4567",
  "modified": ISODate("2017-10-10T10:00:06.735Z"),
  "created": ISODate("2017-10-10T10:00:06.735Z")
});
db.getCollection("threads").insert({
  "_id": ObjectId("59dc9aab08cb827c238b4567"),
  "group_id": "59dc5a3908cb826e788b4567",
  "sender_id": "59ca262a08cb82af718b4567",
  "receiver_id": "59d6130b08cb8206768b4567",
  "modified": ISODate("2017-10-10T10:02:19.272Z"),
  "created": ISODate("2017-10-10T10:02:19.272Z")
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
  "modified": ISODate("2017-10-04T05:48:11.83Z"),
  "created": ISODate("2017-09-25T10:00:31.594Z"),
  "account": "100",
  "balance": NumberLong(99),
  "gender": "male"
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
  "account": "100",
  "gender": "male"
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
  "marriage": "Divorced",
  "school_career": "Graduate",
  "tabaco": "GHI",
  "last_login": "2017-10-09 03:49:17",
  "modified": ISODate("2017-10-02T03:58:40.161Z"),
  "created": ISODate("2017-09-25T14:34:37.975Z"),
  "account": "100",
  "balance": NumberLong(99),
  "gender": "female"
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
  "account": "100",
  "gender": "male"
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
  "account": "100",
  "gender": "female"
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
  "account": "100",
  "gender": "male"
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
  "account": "100",
  "gender": "male"
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
  "account": "100",
  "gender": "female"
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
  "last_login": "2017-10-09 07:54:30",
  "modified": ISODate("2017-10-10T09:21:41.39Z"),
  "created": ISODate("2017-09-26T10:04:26.779Z"),
  "account": "100",
  "gender": "female",
  "balance": NumberLong(99)
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
  "account": "100",
  "gender": "female"
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
  "account": "100",
  "gender": "male"
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
  "account": NumberLong(100),
  "modified": ISODate("2017-10-03T14:42:27.888Z"),
  "created": ISODate("2017-09-29T09:54:35.533Z"),
  "balance": NumberLong(99),
  "gender": "male"
});
db.getCollection("users").insert({
  "_id": ObjectId("59d4caf008cb8274728b4567"),
  "annual_income": "$ 8000 - 15000",
  "blood_type": "AB+",
  "dob": "1999/10/04",
  "fb_id": "348484712243600",
  "fb_image": "http://graph.facebook.com/348484712243600/picture?type=large",
  "full_name": "Jagan Xicom",
  "gender": "Male",
  "job_id": "59a545e241a73f9c5a7711c2",
  "marriage": "UnMarried",
  "school_career": "Master",
  "tabaco": "GHI",
  "last_login": "2017-10-04 13:33:27",
  "account": NumberLong(100),
  "modified": ISODate("2017-10-04T13:18:01.457Z"),
  "created": ISODate("2017-10-04T11:50:08.693Z"),
  "balance": NumberLong(99)
});
db.getCollection("users").insert({
  "_id": ObjectId("59d6130b08cb8206768b4567"),
  "annual_income": "$ 15000 +",
  "blood_type": "B+",
  "dob": "1999/10/05",
  "fb_id": "1973983859552356",
  "fb_image": "http://graph.facebook.com/1973983859552356/picture?type=large",
  "full_name": "Mark Steven",
  "gender": "Male",
  "job_id": "59a545e241a73f9c5a7711bd",
  "marriage": "UnMarried",
  "school_career": "Master",
  "tabaco": "JKL",
  "last_login": "2017-10-05 12:23:37",
  "account": NumberLong(100),
  "modified": ISODate("2017-10-09T06:44:09.444Z"),
  "created": ISODate("2017-10-05T11:10:03.288Z"),
  "balance": NumberLong(99)
});
