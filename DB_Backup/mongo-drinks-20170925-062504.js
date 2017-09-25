
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

/** drinkings indexes **/
db.getCollection("drinkings").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** educations indexes **/
db.getCollection("educations").ensureIndex({
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

/** marriage_types indexes **/
db.getCollection("marriage_types").ensureIndex({
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

/** places indexes **/
db.getCollection("places").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** relationships indexes **/
db.getCollection("relationships").ensureIndex({
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

/** salaries indexes **/
db.getCollection("salaries").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** threads indexes **/
db.getCollection("threads").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** tobaccos indexes **/
db.getCollection("tobaccos").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** user_accounts indexes **/
db.getCollection("user_accounts").ensureIndex({
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
  "_id": ObjectId("59ba50dda642be22743e3b4a"),
  "token": "000000000000000",
  "login_status": NumberLong(1),
  "session_id": "98b074c0fa47c742feeb109387c7af7b6843658c",
  "user_id": "59b8cdaea642befc03d4a8d7",
  "device_id": "D5D650F3-EDC5-4F07-B99E-E2B2C428668C",
  "modified": ISODate("2017-09-14T09:50:21.755Z"),
  "created": ISODate("2017-09-14T09:50:21.755Z"),
  "loginStatus": NumberLong(1)
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59ba5350a642beea6f3e3b4b"),
  "token": "000000000000000",
  "login_status": NumberLong(1),
  "session_id": "bd445b31ace22e3d473398e035533d08374ff874",
  "user_id": "59b8cdaea642befc03d4a8d7",
  "device_id": "DE36B080-CBDB-4523-8F2A-BBFA4F9AB99E",
  "modified": ISODate("2017-09-14T10:00:48.452Z"),
  "created": ISODate("2017-09-14T10:00:48.452Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59bb6cd1a642bea9528b4567"),
  "token": "000000000000000",
  "login_status": NumberLong(1),
  "session_id": "cdfab93e0d89654327bef8a9a525475627b45374",
  "user_id": "59b8d52aa642bee00bb2d545",
  "device_id": "DE36B080-CBDB-4523-8F2A-BBFA4F9AB99E",
  "modified": ISODate("2017-09-15T06:01:53.595Z"),
  "created": ISODate("2017-09-15T06:01:53.595Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59bb8286a642be7a6c72d78c"),
  "token": "",
  "login_status": NumberLong(1),
  "session_id": "89f3131538fbdd7b655f248fab6f0cbbdd816410",
  "user_id": "59b93fa8a642beb32cb2d545",
  "device_id": "",
  "modified": ISODate("2017-09-15T07:34:30.147Z"),
  "created": ISODate("2017-09-15T07:34:30.147Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59bbd088a642be630f72d78d"),
  "token": "000000000000000",
  "login_status": NumberLong(1),
  "session_id": "7c107fd6d16e16b24011ca0617c4551de68e4697",
  "user_id": "59b8d52aa642bee00bb2d545",
  "device_id": "B6DFF40B-6659-438A-B12E-04E6A577D99B",
  "modified": ISODate("2017-09-15T13:07:20.849Z"),
  "created": ISODate("2017-09-15T13:07:20.849Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59bbd14ca642be630f72d78e"),
  "token": "000000000000000",
  "login_status": NumberLong(1),
  "session_id": "9bda4cdf384b1cf892126e0b8b3276877c27bf4f",
  "user_id": "59b8d5c5a642bee00cb2d545",
  "device_id": "B6DFF40B-6659-438A-B12E-04E6A577D99B",
  "modified": ISODate("2017-09-15T13:10:36.485Z"),
  "created": ISODate("2017-09-15T13:10:36.485Z")
});
db.getCollection("api_sessions").insert({
  "_id": ObjectId("59bc03f1a642beef3672d78c"),
  "token": "000000000000000",
  "login_status": NumberLong(1),
  "session_id": "52cf8473364559cf00a2754b922570ce2c66969f",
  "user_id": "59b93fa8a642beb32cb2d545",
  "device_id": "BD51B241-C6CB-4731-A65A-51DEF5D22998",
  "modified": ISODate("2017-09-15T16:46:41.867Z"),
  "created": ISODate("2017-09-15T16:46:41.867Z"),
  "loginStatus": NumberLong(1)
});

/** drinked_groups records **/
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59bec84da642be086429f705"),
  "drinked_status": "waiting",
  "group_id": "59bb82cea642be5e6a72d78c",
  "owner_user_id": "59b8d52aa642bee00bb2d545",
  "user_id": "59b93fa8a642beb32cb2d545",
  "modified": ISODate("2017-09-17T19:09:01.240Z"),
  "created": ISODate("2017-09-17T19:09:01.240Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59bf549fa642be026429f705"),
  "drinked_status": "confirmed",
  "group_id": "59bc0416a642be913872d78d",
  "owner_user_id": "59b93fa8a642beb32cb2d545",
  "user_id": "59b8d5c5a642bee00cb2d545",
  "modified": ISODate("2017-09-18T05:07:43.509Z"),
  "created": ISODate("2017-09-18T05:07:43.509Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59bf5bdaa642be6f2d29f705"),
  "drinked_status": "confirmed",
  "group_id": "59bb82d2a642bef26a72d78c",
  "owner_user_id": "59b8cdaea642befc03d4a8d7",
  "user_id": "59b93fa8a642beb32cb2d545",
  "modified": ISODate("2017-09-18T05:38:34.389Z"),
  "created": ISODate("2017-09-18T05:38:34.389Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59bf6a87a642be8238dd9e75"),
  "drinked_status": "waiting",
  "group_id": "59bb82cea642be5e6a72d78c",
  "owner_user_id": "59b8d52aa642bee00bb2d545",
  "user_id": "59b8cdaea642befc03d4a8d7",
  "modified": ISODate("2017-09-18T06:41:11.121Z"),
  "created": ISODate("2017-09-18T06:41:11.121Z")
});

/** drinkings records **/
db.getCollection("drinkings").insert({
  "_id": ObjectId("59a64c4941a73f9c5a7711ee"),
  "jap_name": "飲む",
  "eng_name": "drink"
});
db.getCollection("drinkings").insert({
  "_id": ObjectId("59a64c4941a73f9c5a7711ef"),
  "jap_name": "たまに飲む",
  "eng_name": "Occasionally"
});
db.getCollection("drinkings").insert({
  "_id": ObjectId("59a64c4941a73f9c5a7711f0"),
  "jap_name": "飲まない",
  "eng_name": "do not drink"
});

/** educations records **/
db.getCollection("educations").insert({
  "_id": ObjectId("59a64c6c41a73f9c5a7711f1"),
  "jap_name": "未設定",
  "eng_name": "Not set"
});
db.getCollection("educations").insert({
  "_id": ObjectId("59a64c6c41a73f9c5a7711f2"),
  "jap_name": "短大/専門学校卒",
  "eng_name": "Junior College / Vocational College"
});
db.getCollection("educations").insert({
  "_id": ObjectId("59a64c6c41a73f9c5a7711f3"),
  "jap_name": "高校卒",
  "eng_name": "High school graduates"
});
db.getCollection("educations").insert({
  "_id": ObjectId("59a64c6c41a73f9c5a7711f4"),
  "jap_name": "大学卒",
  "eng_name": "University degree"
});
db.getCollection("educations").insert({
  "_id": ObjectId("59a64c6c41a73f9c5a7711f5"),
  "jap_name": "大学院卒",
  "eng_name": "Masters degree"
});
db.getCollection("educations").insert({
  "_id": ObjectId("59a64c6c41a73f9c5a7711f6"),
  "jap_name": "それ以外",
  "eng_name": "other than that"
});

/** groups records **/
db.getCollection("groups").insert({
  "_id": ObjectId("59bb82cea642be5e6a72d78c"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c0\",\n    \"Age\" : 26,\n    \"eng_name\" : \"Certified public accountant\",\n    \"jap_name\" : \"公認会計士\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711bf\",\n    \"Age\" : 21,\n    \"eng_name\" : \"lawyer\",\n    \"jap_name\" : \"弁護士\"\n  }\n]",
  "group_description": "cgguhffg hgff",
  "group_latitude": "30.728091094232",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.8449543556133",
  "group_tag": "1",
  "relationship": "Open",
  "user_id": "59b8d52aa642bee00bb2d545",
  "image": "http://128.199.177.140/drinks/uploads/groups/original/User_2017_1505460942.jpeg",
  "modified": ISODate("2017-09-15T07:35:42.391Z"),
  "created": ISODate("2017-09-15T07:35:42.391Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59bb82d2a642bef26a72d78c"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711ca\",\n    \"Age\" : 24,\n    \"eng_name\" : \"pilot\",\n    \"jap_name\" : \"パイロット\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c8\",\n    \"Age\" : 27,\n    \"eng_name\" : \"Creator\",\n    \"jap_name\" : \"クリエイター\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711ce\",\n    \"Age\" : 25,\n    \"eng_name\" : \"announcer\",\n    \"jap_name\" : \"アナウンサー\"\n  }\n]",
  "group_description": "Dtn ry ry n ry n ry n mvbn nb. Ffghjghj fgj ghj fgj f fgj fhg jfhg j fghj fgh j",
  "group_latitude": "-26.2041028",
  "group_location": "Johannesburg, Johannesburg",
  "group_longitude": "28.0473051",
  "group_tag": "1",
  "relationship": "School Friends",
  "user_id": "59b8cdaea642befc03d4a8d7",
  "image": "http://128.199.177.140/drinks/uploads/groups/original/User_2017_1505460947.jpeg",
  "modified": ISODate("2017-09-15T07:35:46.793Z"),
  "created": ISODate("2017-09-15T07:35:46.793Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59bbd171a642be8e1c72d78c"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c6\",\n    \"Age\" : 26,\n    \"eng_name\" : \"Major companies\",\n    \"jap_name\" : \"大手企業\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c8\",\n    \"Age\" : 33,\n    \"eng_name\" : \"Creator\",\n    \"jap_name\" : \"クリエイター\"\n  }\n]",
  "group_description": "Did did di did d",
  "group_latitude": "30.7278960670851",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.84585424658481",
  "group_tag": "1",
  "relationship": "School Friends",
  "user_id": "59b8d5c5a642bee00cb2d545",
  "image": "http://128.199.177.140/drinks/uploads/groups/original/User_2017_1505481073.jpeg",
  "modified": ISODate("2017-09-15T13:11:13.298Z"),
  "created": ISODate("2017-09-15T13:11:13.298Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59bc0416a642be913872d78d"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711bf\",\n    \"Age\" : 20,\n    \"eng_name\" : \"lawyer\",\n    \"jap_name\" : \"弁護士\"\n  }\n]",
  "group_description": "Ga",
  "group_latitude": "35.6726310588752",
  "group_location": "南烏山, 世田谷区",
  "group_longitude": "139.606898753102",
  "group_tag": "1",
  "relationship": "College Friends",
  "user_id": "59b93fa8a642beb32cb2d545",
  "image": "http://128.199.177.140/drinks/uploads/groups/original/User_2017_1505494039.jpeg",
  "modified": ISODate("2017-09-15T16:47:18.665Z"),
  "created": ISODate("2017-09-15T16:47:18.665Z")
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

/** marriage_types records **/
db.getCollection("marriage_types").insert({
  "_id": ObjectId("59a64c8841a73f9c5a7711f7"),
  "jap_name": "未婚",
  "eng_name": "unmarried"
});
db.getCollection("marriage_types").insert({
  "_id": ObjectId("59a64c8841a73f9c5a7711f8"),
  "jap_name": "既婚",
  "eng_name": "married"
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
db.getCollection("messages").insert({
  "_id": ObjectId("59bf5beba642bebf2f29f705"),
  "datetime": "18/09/2017 14:38",
  "message": "Hi",
  "receiver_id": "59b8d5c5a642bee00cb2d545",
  "thread_id": "59bf5be5a642be722d29f706",
  "sender_id": "59b93fa8a642beb32cb2d545",
  "read_status": "0",
  "modified": ISODate("2017-09-18T05:38:51.667Z"),
  "created": ISODate("2017-09-18T05:38:51.667Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59bf5c04a642be6d6f29f705"),
  "datetime": "18/09/2017 14:39",
  "message": "Hi",
  "receiver_id": "59b8cdaea642befc03d4a8d7",
  "thread_id": "59bf5bf8a642bebf2f29f706",
  "sender_id": "59b93fa8a642beb32cb2d545",
  "read_status": "1",
  "modified": ISODate("2017-09-18T05:39:16.869Z"),
  "created": ISODate("2017-09-18T05:39:16.869Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59bf5c0da642beb23129f705"),
  "datetime": "18/09/2017 11:09 AM",
  "message": "hi",
  "receiver_id": "59b93fa8a642beb32cb2d545",
  "thread_id": "59bf5bf8a642bebf2f29f706",
  "sender_id": "59b8cdaea642befc03d4a8d7",
  "read_status": "1",
  "modified": ISODate("2017-09-18T05:39:25.231Z"),
  "created": ISODate("2017-09-18T05:39:25.231Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59bf5c2ca642bebf2f29f707"),
  "datetime": "18/09/2017 14:39",
  "message": "Hi",
  "receiver_id": "59b8d5c5a642bee00cb2d545",
  "thread_id": "59bf5be5a642be722d29f706",
  "sender_id": "59b93fa8a642beb32cb2d545",
  "read_status": "0",
  "modified": ISODate("2017-09-18T05:39:56.333Z"),
  "created": ISODate("2017-09-18T05:39:56.333Z")
});

/** places records **/
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a7711f9"),
  "jap_name": "北海道",
  "eng_name": "Hokkaido",
  "latitude": 43.220327,
  "longitude": 142.863474
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a7711fa"),
  "jap_name": "青森",
  "eng_name": "Aomori",
  "latitude": 40.822072,
  "longitude": 140.747365
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a7711fb"),
  "jap_name": "岩手",
  "eng_name": "Iwate",
  "latitude": 39.703619,
  "longitude": 141.152684
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a7711fc"),
  "jap_name": "宮城",
  "eng_name": "Miyagi",
  "latitude": 38.268837,
  "longitude": 140.8721
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a7711fd"),
  "jap_name": "秋田",
  "eng_name": "Akita",
  "latitude": 39.719922,
  "longitude": 140.10357
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a7711fe"),
  "jap_name": "山形",
  "eng_name": "Yamagata",
  "latitude": 38.240435,
  "longitude": 140.363633
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a7711ff"),
  "jap_name": "福島",
  "eng_name": "Fukushima",
  "latitude": 37.760834,
  "longitude": 140.474728
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771200"),
  "jap_name": "茨木",
  "eng_name": "Ibaraki",
  "latitude": 36.341811,
  "longitude": 140.446794
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771201"),
  "jap_name": "栃木",
  "eng_name": "Tochigi",
  "latitude": 36.565725,
  "longitude": 139.883565
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771202"),
  "jap_name": "群馬",
  "eng_name": "Gunma",
  "latitude": 36.390667,
  "longitude": 139.060406
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771203"),
  "jap_name": "埼玉",
  "eng_name": "Saitama",
  "latitude": 35.861729,
  "longitude": 139.645482
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771204"),
  "jap_name": "千葉",
  "eng_name": "Chiba",
  "latitude": 35.605057,
  "longitude": 140.123306
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771205"),
  "jap_name": "東京",
  "eng_name": "Tokyo",
  "latitude": 35.689487,
  "longitude": 139.691706
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771206"),
  "jap_name": "神奈川",
  "eng_name": "Kanagawa",
  "latitude": 35.447507,
  "longitude": 139.642345
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771207"),
  "jap_name": "新潟",
  "eng_name": "Niigata",
  "latitude": 37.916192,
  "longitude": 139.036413
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771208"),
  "jap_name": "富山",
  "eng_name": "Toyama",
  "latitude": 36.695952,
  "longitude": 137.213677
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771209"),
  "jap_name": "石川",
  "eng_name": "Ishikawa",
  "latitude": 36.594682,
  "longitude": 136.625573
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77120a"),
  "jap_name": "福井",
  "eng_name": "Fukui",
  "latitude": 36.065178,
  "longitude": 136.221527
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77120b"),
  "jap_name": "山梨",
  "eng_name": "Yamanashi",
  "latitude": 35.664158,
  "longitude": 138.568449
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77120c"),
  "jap_name": "長野",
  "eng_name": "Nagano",
  "latitude": 36.648583,
  "longitude": 138.194771
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77120d"),
  "jap_name": "岐阜",
  "eng_name": "Gifu",
  "latitude": 35.423298,
  "longitude": 136.760654
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77120e"),
  "jap_name": "静岡",
  "eng_name": "Shizuoka",
  "latitude": 34.975562,
  "longitude": 138.38276
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77120f"),
  "jap_name": "愛知",
  "eng_name": "Aichi",
  "latitude": 35.180188,
  "longitude": 136.906565
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771210"),
  "jap_name": "三重",
  "eng_name": "Triple",
  "latitude": 47.60873,
  "longitude": -122.337462
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771211"),
  "jap_name": "滋賀",
  "eng_name": "Shiga",
  "latitude": 35.004531,
  "longitude": 135.86859
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771212"),
  "jap_name": "京都",
  "eng_name": "Kyoto",
  "latitude": 35.011636,
  "longitude": 135.768029
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771213"),
  "jap_name": "大阪",
  "eng_name": "Osaka",
  "latitude": 34.693738,
  "longitude": 135.502165
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771214"),
  "jap_name": "兵庫",
  "eng_name": "Hyōgo",
  "latitude": 34.691269,
  "longitude": 135.183071
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771215"),
  "jap_name": "奈良",
  "eng_name": "Nara",
  "latitude": 34.685087,
  "longitude": 135.805
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771216"),
  "jap_name": "和歌山",
  "eng_name": "Wakayama",
  "latitude": 34.225987,
  "longitude": 135.167509
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771217"),
  "jap_name": "鳥取",
  "eng_name": "Tottori",
  "latitude": 35.501133,
  "longitude": 134.235091
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771218"),
  "jap_name": "島根",
  "eng_name": "Shimane",
  "latitude": 35.472295,
  "longitude": 133.0505
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771219"),
  "jap_name": "岡山",
  "eng_name": "Okayama",
  "latitude": 34.655146,
  "longitude": 133.919502
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77121a"),
  "jap_name": "広島",
  "eng_name": "Hiroshima",
  "latitude": 34.385203,
  "longitude": 132.455293
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77121b"),
  "jap_name": "山口",
  "eng_name": "Yamaguchi",
  "latitude": 34.178496,
  "longitude": 131.473727
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77121c"),
  "jap_name": "徳島",
  "eng_name": "Tokushima",
  "latitude": 34.07027,
  "longitude": 134.554844
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77121d"),
  "jap_name": "香川",
  "eng_name": "Kagawa",
  "latitude": 34.340149,
  "longitude": 134.043444
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77121e"),
  "jap_name": "愛媛",
  "eng_name": "Ehime",
  "latitude": 33.841624,
  "longitude": 132.765681
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a77121f"),
  "jap_name": "高知",
  "eng_name": "Kochi",
  "latitude": 9.931233,
  "longitude": 76.267304
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771220"),
  "jap_name": "福岡",
  "eng_name": "Fukuoka",
  "latitude": 33.590355,
  "longitude": 130.401716
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771221"),
  "jap_name": "佐賀",
  "eng_name": "Saga",
  "latitude": 33.263482,
  "longitude": 130.300858
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771222"),
  "jap_name": "長崎",
  "eng_name": "Nagasaki",
  "latitude": 32.750286,
  "longitude": 129.877667
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771223"),
  "jap_name": "熊本",
  "eng_name": "Kumamoto",
  "latitude": 32.8031,
  "longitude": 130.707891
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771224"),
  "jap_name": "大分",
  "eng_name": "Oita",
  "latitude": 33.238172,
  "longitude": 131.612619
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771225"),
  "jap_name": "宮城",
  "eng_name": "Miyagi",
  "latitude": 38.268837,
  "longitude": 140.8721
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771226"),
  "jap_name": "鹿児島",
  "eng_name": "Kagoshima",
  "latitude": 31.596553,
  "longitude": 130.557116
});
db.getCollection("places").insert({
  "_id": ObjectId("59a64c9f41a73f9c5a771227"),
  "jap_name": "沖縄",
  "eng_name": "Okinawa",
  "latitude": 26.501301,
  "longitude": 127.945404
});

/** relationships records **/
db.getCollection("relationships").insert({
  "_id": ObjectId("59a64cc041a73f9c5a771228"),
  "jap_name": "同僚",
  "eng_name": "Colleague"
});
db.getCollection("relationships").insert({
  "_id": ObjectId("59a64cc041a73f9c5a771229"),
  "jap_name": "同級生",
  "eng_name": "Classmates"
});
db.getCollection("relationships").insert({
  "_id": ObjectId("59a64cc041a73f9c5a77122a"),
  "jap_name": "先輩・後輩",
  "eng_name": "Seniors & juniors"
});
db.getCollection("relationships").insert({
  "_id": ObjectId("59a64cc041a73f9c5a77122b"),
  "jap_name": "...要アップデート",
  "eng_name": "Update Required"
});

/** reported_groups records **/

/** reported_users records **/

/** salaries records **/
db.getCollection("salaries").insert({
  "_id": ObjectId("59a64cda41a73f9c5a77122c"),
  "jap_name": "未設定",
  "eng_name": "Not set"
});
db.getCollection("salaries").insert({
  "_id": ObjectId("59a64cda41a73f9c5a77122d"),
  "jap_name": "表示しない",
  "eng_name": "Do not show"
});
db.getCollection("salaries").insert({
  "_id": ObjectId("59a64cda41a73f9c5a77122e"),
  "jap_name": "200万未満",
  "eng_name": "Less than 2 million"
});
db.getCollection("salaries").insert({
  "_id": ObjectId("59a64cda41a73f9c5a77122f"),
  "jap_name": "200万円〜400万円未満",
  "eng_name": "From 2 million yen to less than 4 million yen"
});
db.getCollection("salaries").insert({
  "_id": ObjectId("59a64cda41a73f9c5a771230"),
  "jap_name": "400万円〜600万円未満",
  "eng_name": "Less than 4 million yen ~ 6 million yen"
});
db.getCollection("salaries").insert({
  "_id": ObjectId("59a64cda41a73f9c5a771231"),
  "jap_name": "600万円〜800万円未満",
  "eng_name": "From 6 million yen to less than 8 million yen"
});
db.getCollection("salaries").insert({
  "_id": ObjectId("59a64cda41a73f9c5a771232"),
  "jap_name": "800万円〜1000万円未満",
  "eng_name": "Less than 8 million yen ~ 10 million yen"
});
db.getCollection("salaries").insert({
  "_id": ObjectId("59a64cda41a73f9c5a771233"),
  "jap_name": "それ以上",
  "eng_name": "Any further"
});

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
  "ns": "drinks.drinkings"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "drinks.educations"
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
  "ns": "drinks.marriage_types"
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
  "ns": "drinks.places"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "drinks.relationships"
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
  "ns": "drinks.salaries"
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
  "ns": "drinks.tobaccos"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "drinks.user_accounts"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "drinks.users"
});

/** threads records **/
db.getCollection("threads").insert({
  "_id": ObjectId("59bf5be5a642be722d29f706"),
  "group_id": "59bc0416a642be913872d78d",
  "sender_id": "59b8d5c5a642bee00cb2d545",
  "receiver_id": "59b93fa8a642beb32cb2d545",
  "modified": ISODate("2017-09-18T05:38:45.670Z"),
  "created": ISODate("2017-09-18T05:38:45.670Z")
});
db.getCollection("threads").insert({
  "_id": ObjectId("59bf5bf8a642bebf2f29f706"),
  "group_id": "59bb82d2a642bef26a72d78c",
  "sender_id": "59b93fa8a642beb32cb2d545",
  "receiver_id": "59b8cdaea642befc03d4a8d7",
  "modified": ISODate("2017-09-18T05:39:04.914Z"),
  "created": ISODate("2017-09-18T05:39:04.914Z")
});

/** tobaccos records **/
db.getCollection("tobaccos").insert({
  "_id": ObjectId("59a64cf241a73f9c5a771234"),
  "jap_name": "吸う",
  "eng_name": "suck"
});
db.getCollection("tobaccos").insert({
  "_id": ObjectId("59a64cf241a73f9c5a771235"),
  "jap_name": "たまに吸う",
  "eng_name": "Occasionally suck"
});
db.getCollection("tobaccos").insert({
  "_id": ObjectId("59a64cf241a73f9c5a771236"),
  "jap_name": "吸わない",
  "eng_name": "Do not smoke"
});

/** user_accounts records **/
db.getCollection("user_accounts").insert({
  "_id": ObjectId("59b8cdaea642befc03d4a8d8"),
  "user_id": "59b8cdaea642befc03d4a8d7",
  "balance": NumberLong(80),
  "modified": ISODate("2017-09-18T06:41:11.123Z"),
  "created": ISODate("2017-09-13T06:18:22.200Z")
});
db.getCollection("user_accounts").insert({
  "_id": ObjectId("59b8d0b9a642bed20bb2d546"),
  "user_id": "59b8d0b9a642bed20bb2d545",
  "balance": NumberLong(100),
  "modified": ISODate("2017-09-13T06:31:21.109Z"),
  "created": ISODate("2017-09-13T06:31:21.109Z")
});
db.getCollection("user_accounts").insert({
  "_id": ObjectId("59b8d52aa642bee00bb2d546"),
  "user_id": "59b8d52aa642bee00bb2d545",
  "balance": NumberLong(77),
  "modified": ISODate("2017-09-15T14:05:38.946Z"),
  "created": ISODate("2017-09-13T06:50:18.731Z")
});
db.getCollection("user_accounts").insert({
  "_id": ObjectId("59b8d5c5a642bee00cb2d546"),
  "user_id": "59b8d5c5a642bee00cb2d545",
  "balance": NumberLong(96),
  "modified": ISODate("2017-09-18T05:07:43.512Z"),
  "created": ISODate("2017-09-13T06:52:53.804Z")
});
db.getCollection("user_accounts").insert({
  "_id": ObjectId("59b93fa8a642beb32cb2d546"),
  "user_id": "59b93fa8a642beb32cb2d545",
  "balance": NumberLong(93),
  "modified": ISODate("2017-09-18T05:38:34.391Z"),
  "created": ISODate("2017-09-13T14:24:40.270Z")
});
db.getCollection("user_accounts").insert({
  "_id": ObjectId("59ba1b7aa642bea82cb2d546"),
  "user_id": "59ba1b7aa642bea82cb2d545",
  "balance": NumberLong(98),
  "modified": ISODate("2017-09-14T06:05:51.871Z"),
  "created": ISODate("2017-09-14T06:02:34.301Z")
});

/** users records **/
db.getCollection("users").insert({
  "_id": ObjectId("59b8cdaea642befc03d4a8d7"),
  "annual_income": "$ 5000 - 8000",
  "blood_type": "B+",
  "dob": "1999/09/13",
  "fb_id": "1588167327924629",
  "fb_image": "http://graph.facebook.com/1588167327924629/picture?type=large",
  "full_name": "Maninderjit Singh",
  "job_id": "59a545e241a73f9c5a7711bf",
  "marriage": "UnMarried",
  "school_career": "Graduate",
  "tabaco": "DEF",
  "last_login": "",
  "modified": ISODate("2017-09-13T06:18:22.198Z"),
  "created": ISODate("2017-09-13T06:18:22.198Z")
});
db.getCollection("users").insert({
  "_id": ObjectId("59b8d0b9a642bed20bb2d545"),
  "annual_income": "$ 3000 - 5000",
  "blood_type": "AB+",
  "dob": "1999/09/13",
  "fb_id": "1437892572967757",
  "fb_image": "http://graph.facebook.com/1437892572967757/picture?type=large",
  "full_name": "Samuels Mat",
  "job_id": "59a545e241a73f9c5a7711c1",
  "marriage": "UnMarried",
  "school_career": "Graduate",
  "tabaco": "JKL",
  "last_login": "",
  "modified": ISODate("2017-09-13T06:31:21.106Z"),
  "created": ISODate("2017-09-13T06:31:21.106Z")
});
db.getCollection("users").insert({
  "_id": ObjectId("59b8d52aa642bee00bb2d545"),
  "annual_income": "$ 15000 +",
  "blood_type": "O+",
  "dob": "1999/09/13",
  "fb_id": "336090616837724",
  "fb_image": "http://graph.facebook.com/336090616837724/picture?type=large",
  "full_name": "Jagan Singh",
  "job_id": "59a545e241a73f9c5a7711bf",
  "marriage": "UnMarried",
  "school_career": "Ph.d",
  "tabaco": "JKL",
  "last_login": "",
  "modified": ISODate("2017-09-13T06:50:18.728Z"),
  "created": ISODate("2017-09-13T06:50:18.728Z")
});
db.getCollection("users").insert({
  "_id": ObjectId("59b8d5c5a642bee00cb2d545"),
  "annual_income": "$ 5000 - 8000",
  "blood_type": "A+",
  "dob": "1999/09/13",
  "fb_id": "348484712243600",
  "fb_image": "http://graph.facebook.com/348484712243600/picture?type=large",
  "full_name": "Jagan Xicom",
  "job_id": "59a545e241a73f9c5a7711c2",
  "marriage": "UnMarried",
  "school_career": "Graduate",
  "tabaco": "DEF",
  "last_login": "",
  "modified": ISODate("2017-09-13T06:52:53.801Z"),
  "created": ISODate("2017-09-13T06:52:53.801Z")
});
db.getCollection("users").insert({
  "_id": ObjectId("59b93fa8a642beb32cb2d545"),
  "annual_income": "$ 5000 - 8000",
  "blood_type": "O+",
  "dob": "1999/09/13",
  "fb_id": "1288672714577080",
  "fb_image": "http://graph.facebook.com/1288672714577080/picture?type=large",
  "full_name": "Jonghwa Park",
  "job_id": "59a545e241a73f9c5a7711c0",
  "marriage": "UnMarried",
  "school_career": "Graduate",
  "tabaco": "JKL",
  "last_login": "",
  "modified": ISODate("2017-09-13T14:24:40.267Z"),
  "created": ISODate("2017-09-13T14:24:40.267Z")
});
db.getCollection("users").insert({
  "_id": ObjectId("59ba1b7aa642bea82cb2d545"),
  "annual_income": "$ 5000 - 8000",
  "blood_type": "B+",
  "dob": "1999/09/14",
  "fb_id": "1659578594114433",
  "fb_image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "full_name": "Nao Naka",
  "job_id": "59a545e241a73f9c5a7711be",
  "marriage": "Single",
  "school_career": "Graduate",
  "tabaco": "ABC",
  "last_login": "",
  "modified": ISODate("2017-09-14T06:02:34.296Z"),
  "created": ISODate("2017-09-14T06:02:34.296Z")
});
