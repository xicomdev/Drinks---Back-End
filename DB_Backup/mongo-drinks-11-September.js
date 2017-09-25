
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

/** drinked_groups records **/
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59aa9c04a642bed67a3f8384"),
  "group_id": "59aa7d86a642bee0703f8385",
  "owner_user_id": "59aa7ce0a642bec86d3f8384",
  "user_id": "59aa843ba642beca6d3f8385",
  "modified": ISODate("2017-09-02T11:54:44.575Z"),
  "created": ISODate("2017-09-02T11:54:44.575Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59ae3f55a642be6e456152d9"),
  "group_id": "59aa81e7a642becd703f8385",
  "owner_user_id": "59aa7ce0a642bec86d3f8384",
  "user_id": "59ad2aada642be7b7e6152d9",
  "modified": ISODate("2017-09-05T06:08:21.310Z"),
  "created": ISODate("2017-09-05T06:08:21.310Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59ae8574a642beba591f3a8f"),
  "group_id": "59aa8842a642becb6d3f8386",
  "owner_user_id": "59aa843ba642beca6d3f8385",
  "user_id": "59ae853ba642beba591f3a8d",
  "modified": ISODate("2017-09-05T11:07:32.222Z"),
  "created": ISODate("2017-09-05T11:07:32.222Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59aff15fa642be1c5cb4f2d0"),
  "group_id": "59aa8842a642becb6d3f8386",
  "owner_user_id": "59aa843ba642beca6d3f8385",
  "user_id": "59ad2aada642be7b7e6152d9",
  "modified": ISODate("2017-09-06T13:00:15.821Z"),
  "created": ISODate("2017-09-06T13:00:15.821Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59b136a8a642befa2c3ecc98"),
  "group_id": "59aa9a9ba642be836e3f8385",
  "owner_user_id": "59aa843ba642beca6d3f8385",
  "user_id": "59ad2aada642be7b7e6152d9",
  "modified": ISODate("2017-09-07T12:08:08.629Z"),
  "created": ISODate("2017-09-07T12:08:08.630Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59b14010a642be492f3ecc99"),
  "group_id": "59aaea85a642be0a713f8386",
  "owner_user_id": "59aae698a642be0a713f8384",
  "user_id": "59ad2aada642be7b7e6152d9",
  "modified": ISODate("2017-09-07T12:48:16.75Z"),
  "created": ISODate("2017-09-07T12:48:16.75Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59b141a8a642be1f2d3ecc98"),
  "group_id": "59aa88d7a642bedf703f8384",
  "owner_user_id": "59aa843ba642beca6d3f8385",
  "user_id": "59ad2aada642be7b7e6152d9",
  "modified": ISODate("2017-09-07T12:55:04.491Z"),
  "created": ISODate("2017-09-07T12:55:04.491Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59b141f2a642bef42e3ecc98"),
  "group_id": "59aa7d86a642bee0703f8385",
  "owner_user_id": "59aa7ce0a642bec86d3f8384",
  "user_id": "59ad2aada642be7b7e6152d9",
  "modified": ISODate("2017-09-07T12:56:18.49Z"),
  "created": ISODate("2017-09-07T12:56:18.49Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59b26612a642beaf56f17972"),
  "group_id": "59b26579a642bebe55f17972",
  "owner_user_id": "59ad2aada642be7b7e6152d9",
  "user_id": "59aae698a642be0a713f8384",
  "modified": ISODate("2017-09-08T09:42:42.811Z"),
  "created": ISODate("2017-09-08T09:42:42.811Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59b27212a642bebc56f17973"),
  "group_id": "59b26d30a642bebc56f17972",
  "owner_user_id": "59ad2aada642be7b7e6152d9",
  "user_id": "59aae698a642be0a713f8384",
  "modified": ISODate("2017-09-08T10:33:54.861Z"),
  "created": ISODate("2017-09-08T10:33:54.861Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59b2725fa642be9e60f17972"),
  "group_id": "59b26a18a642beae56f17973",
  "owner_user_id": "59ad2aada642be7b7e6152d9",
  "user_id": "59aae698a642be0a713f8384",
  "modified": ISODate("2017-09-08T10:35:11.239Z"),
  "created": ISODate("2017-09-08T10:35:11.239Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59b28f59a642be4666f17972"),
  "group_id": "59b26d30a642bebc56f17972",
  "owner_user_id": "59ad2aada642be7b7e6152d9",
  "user_id": "59aa7ce0a642bec86d3f8384",
  "modified": ISODate("2017-09-08T12:38:49.755Z"),
  "created": ISODate("2017-09-08T12:38:49.755Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59b2f3bfa642be1668f17973"),
  "group_id": "59aa9a9ba642be836e3f8385",
  "owner_user_id": "59aa843ba642beca6d3f8385",
  "user_id": "59aae698a642be0a713f8384",
  "modified": ISODate("2017-09-08T19:47:11.90Z"),
  "created": ISODate("2017-09-08T19:47:11.90Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59b3a972a642befc1bf708a8"),
  "group_id": "59b29d98a642be6d69f17972",
  "owner_user_id": "59ad2aada642be7b7e6152d9",
  "user_id": "59aae698a642be0a713f8384",
  "modified": ISODate("2017-09-09T08:42:26.114Z"),
  "created": ISODate("2017-09-09T08:42:26.114Z")
});
db.getCollection("drinked_groups").insert({
  "_id": ObjectId("59b4ada3a642befd1bf708a8"),
  "group_id": "59b28df2a642be6369f17973",
  "owner_user_id": "59aa7ce0a642bec86d3f8384",
  "user_id": "59aae698a642be0a713f8384",
  "modified": ISODate("2017-09-10T03:12:35.800Z"),
  "created": ISODate("2017-09-10T03:12:35.800Z")
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
  "_id": ObjectId("59aa81e7a642becd703f8385"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711bf\",\n    \"Age\" : 26,\n    \"eng_name\" : \"lawyer\",\n    \"jap_name\" : \"弁護士\"\n  }\n]",
  "group_description": "Wer v 3rg bf erg e er rg",
  "group_latitude": "-33.8634",
  "group_location": "Sydney CBD, Sydney",
  "group_longitude": "151.211",
  "group_tag": "1",
  "relationship": "Open",
  "user_id": "59aa7ce0a642bec86d3f8384",
  "image": "http://128.199.177.140/drinks/uploads/groups/original/User_2017_1504346599.jpeg",
  "modified": ISODate("2017-09-02T10:03:19.237Z"),
  "created": ISODate("2017-09-02T10:03:19.237Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59aa7d86a642bee0703f8385"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c5\",\n    \"Age\" : 21,\n    \"eng_name\" : \"Foreign finance\",\n    \"jap_name\" : \"外資金融\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711ca\",\n    \"Age\" : 27,\n    \"eng_name\" : \"pilot\",\n    \"jap_name\" : \"パイロット\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c5\",\n    \"Age\" : 31,\n    \"eng_name\" : \"Foreign finance\",\n    \"jap_name\" : \"外資金融\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c9\",\n    \"Age\" : 34,\n    \"eng_name\" : \"IT related\",\n    \"jap_name\" : \"IT関連\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711bf\",\n    \"Age\" : 25,\n    \"eng_name\" : \"lawyer\",\n    \"jap_name\" : \"弁護士\"\n  }\n]",
  "group_description": "Sbvc wr f 3 n eth b eh b erg g eh er h 3th h. B th g eth. Created By :- XicomTest12",
  "group_latitude": "22.284681",
  "group_location": "Central, Hong Kong",
  "group_longitude": "114.158177",
  "group_tag": "1",
  "relationship": "Open",
  "user_id": "59aa7ce0a642bec86d3f8384",
  "image": "http://128.199.177.140/drinks/uploads/groups/original/User_2017_1504345479.jpeg",
  "modified": ISODate("2017-09-02T09:44:38.813Z"),
  "created": ISODate("2017-09-02T09:44:38.813Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59aa8842a642becb6d3f8386"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711bc\",\n    \"Age\" : 25,\n    \"eng_name\" : \"Not set\",\n    \"jap_name\" : \"未設定\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c2\",\n    \"Age\" : 23,\n    \"eng_name\" : \"Civil servant\",\n    \"jap_name\" : \"公務員\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711bc\",\n    \"Age\" : 24,\n    \"eng_name\" : \"Not set\",\n    \"jap_name\" : \"未設定\"\n  }\n]",
  "group_description": "Thrgnht n 4j rg 4t j4 6 4ttherthrgbth 4th. Thner dgf hh dh dhf hdhd",
  "group_latitude": "55.755786",
  "group_location": "Kitai-Gorod, Moscow",
  "group_longitude": "37.617633",
  "group_tag": "1",
  "relationship": "Open",
  "user_id": "59aa843ba642beca6d3f8385",
  "image": "http://128.199.177.140/drinks/uploads/groups/original/User_2017_1504348227.jpeg",
  "modified": ISODate("2017-09-02T10:30:26.657Z"),
  "created": ISODate("2017-09-02T10:30:26.657Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59aa88d7a642bedf703f8384"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c1\",\n    \"Age\" : 25,\n    \"eng_name\" : \"Management and officers\",\n    \"jap_name\" : \"経営者・役員\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711ce\",\n    \"Age\" : 25,\n    \"eng_name\" : \"announcer\",\n    \"jap_name\" : \"アナウンサー\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c5\",\n    \"Age\" : 33,\n    \"eng_name\" : \"Foreign finance\",\n    \"jap_name\" : \"外資金融\"\n  }\n]",
  "group_description": "Xfbs fwg f dg gf wrg. Wr wrg f rtf 3h fe 3r r. 3bffbgdsfg wrg wg wr",
  "group_latitude": "21.2827778",
  "group_location": "Waikiki, Honolulu",
  "group_longitude": "-157.8294444",
  "group_tag": "1",
  "relationship": "College Friends",
  "user_id": "59aa843ba642beca6d3f8385",
  "image": "http://128.199.177.140/drinks/uploads/groups/original/User_2017_1504348376.jpeg",
  "modified": ISODate("2017-09-02T10:32:55.645Z"),
  "created": ISODate("2017-09-02T10:32:55.645Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59aa9a9ba642be836e3f8385"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c1\",\n    \"Age\" : 21,\n    \"eng_name\" : \"Management and officers\",\n    \"jap_name\" : \"経営者・役員\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711bc\",\n    \"Age\" : 21,\n    \"eng_name\" : \"Not set\",\n    \"jap_name\" : \"未設定\"\n  }\n]",
  "group_description": "Sdfg v egf fg.",
  "group_latitude": "37.7873589",
  "group_location": "Union Square, San Francisco",
  "group_longitude": "-122.408227",
  "group_tag": "1",
  "relationship": "College Friends",
  "user_id": "59aa843ba642beca6d3f8385",
  "image": "http://128.199.177.140/drinks/uploads/groups/original/User_2017_1504352923.jpeg",
  "modified": ISODate("2017-09-02T11:48:43.260Z"),
  "created": ISODate("2017-09-02T11:48:43.260Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59aaea85a642be0a713f8386"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c9\",\n    \"Age\" : 19,\n    \"eng_name\" : \"IT related\",\n    \"jap_name\" : \"IT関連\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711be\",\n    \"Age\" : 24,\n    \"eng_name\" : \"A doctor\",\n    \"jap_name\" : \"医師\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711bf\",\n    \"Age\" : 26,\n    \"eng_name\" : \"lawyer\",\n    \"jap_name\" : \"弁護士\"\n  }\n]",
  "group_description": "Dada",
  "group_latitude": "35.6725686136965",
  "group_location": "南烏山, 世田谷区",
  "group_longitude": "139.60684100179",
  "group_tag": "1",
  "relationship": "College Friends",
  "user_id": "59aae698a642be0a713f8384",
  "image": "http://128.199.177.140/drinks/uploads/groups/original/User_2017_1504373382.jpeg",
  "modified": ISODate("2017-09-02T17:29:41.854Z"),
  "created": ISODate("2017-09-02T17:29:41.854Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59ab8107a642be7f163f8384"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c9\",\n    \"Age\" : 28,\n    \"eng_name\" : \"IT related\",\n    \"jap_name\" : \"IT関連\"\n  }\n]",
  "group_description": "飲んでます。",
  "group_latitude": "35.6727215415199",
  "group_location": "南烏山, 世田谷区",
  "group_longitude": "139.60699330097",
  "group_tag": "0",
  "relationship": "College Friends",
  "user_id": "59aae698a642be0a713f8384",
  "image": "http://128.199.177.140/drinks/uploads/groups/original/User_2017_1504411911.jpeg",
  "modified": ISODate("2017-09-03T04:11:51.251Z"),
  "created": ISODate("2017-09-03T04:11:51.251Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59b26579a642bebe55f17972"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c1\",\n    \"Age\" : 23,\n    \"eng_name\" : \"Management and officers\",\n    \"jap_name\" : \"経営者・役員\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c2\",\n    \"Age\" : 26,\n    \"eng_name\" : \"Civil servant\",\n    \"jap_name\" : \"公務員\"\n  }\n]",
  "group_description": "testing group by xicom team chandigarh drgb gb erb ernh rbrg ebfddfger r ht nfgh",
  "group_latitude": "55.755786",
  "group_location": "Kitai-Gorod, Moscow",
  "group_longitude": "37.617633",
  "group_tag": "0",
  "relationship": "Open",
  "user_id": "59ad2aada642be7b7e6152d9",
  "image": "http://128.199.177.140/drinks/uploads/groups/original/User_2017_1505105234.jpeg",
  "modified": ISODate("2017-09-08T09:40:09.689Z"),
  "created": ISODate("2017-09-08T09:40:09.689Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59b26a18a642beae56f17973"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711bd\",\n    \"Age\" : 22,\n    \"eng_name\" : \"employee\",\n    \"jap_name\" : \"会社員\"\n  }\n]",
  "group_description": "Dfhdfhdfh",
  "group_latitude": "55.755786",
  "group_location": "Kitai-Gorod, Moscow",
  "group_longitude": "37.617633",
  "group_tag": "1",
  "relationship": "Open",
  "user_id": "59ad2aada642be7b7e6152d9",
  "image": "http://128.199.177.140/drinks/uploads/groups/original/User_2017_1504864793.jpeg",
  "modified": ISODate("2017-09-08T09:59:52.926Z"),
  "created": ISODate("2017-09-08T09:59:52.926Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59b28df2a642be6369f17973"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c8\",\n    \"Age\" : 31,\n    \"eng_name\" : \"Creator\",\n    \"jap_name\" : \"クリエイター\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c9\",\n    \"Age\" : 31,\n    \"eng_name\" : \"IT related\",\n    \"jap_name\" : \"IT関連\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c5\",\n    \"Age\" : 32,\n    \"eng_name\" : \"Foreign finance\",\n    \"jap_name\" : \"外資金融\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c5\",\n    \"Age\" : 18,\n    \"eng_name\" : \"Foreign finance\",\n    \"jap_name\" : \"外資金融\"\n  }\n]",
  "group_description": "Chako",
  "group_latitude": "30.7279295398779",
  "group_location": "Saketri Village, Panchkula",
  "group_longitude": "76.84584704377571",
  "group_tag": "0",
  "relationship": "College Friends",
  "user_id": "59aa7ce0a642bec86d3f8384",
  "image": "http://128.199.177.140/drinks/uploads/groups/original/User_2017_1504873970.jpeg",
  "modified": ISODate("2017-09-08T12:32:50.426Z"),
  "created": ISODate("2017-09-08T12:32:50.426Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59b29d98a642be6d69f17972"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c0\",\n    \"Age\" : 24,\n    \"eng_name\" : \"Certified public accountant\",\n    \"jap_name\" : \"公認会計士\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711c3\",\n    \"Age\" : 36,\n    \"eng_name\" : \"clerk\",\n    \"jap_name\" : \"事務員\"\n  },\n  {\n    \"id\" : \"59a545e241a73f9c5a7711ce\",\n    \"Age\" : 43,\n    \"eng_name\" : \"announcer\",\n    \"jap_name\" : \"アナウンサー\"\n  }\n]",
  "group_description": "Fdghbcv enbf e hf. Etnfg ht",
  "group_latitude": "55.755786",
  "group_location": "Kitai-Gorod, Moscow",
  "group_longitude": "37.617633",
  "group_tag": "0",
  "relationship": "Open",
  "user_id": "59ad2aada642be7b7e6152d9",
  "image": "http://128.199.177.140/drinks/uploads/groups/original/User_2017_1504878013.jpeg",
  "modified": ISODate("2017-09-08T13:39:36.304Z"),
  "created": ISODate("2017-09-08T13:39:36.304Z")
});
db.getCollection("groups").insert({
  "_id": ObjectId("59b4ad9ba642befb1bf708a8"),
  "group_conditions": "[\n  {\n    \"id\" : \"59a545e241a73f9c5a7711bf\",\n    \"Age\" : 20,\n    \"eng_name\" : \"lawyer\",\n    \"jap_name\" : \"弁護士\"\n  }\n]",
  "group_description": "なゆ",
  "group_latitude": "35.6512198644091",
  "group_location": "猿楽町, 渋谷区",
  "group_longitude": "139.703777711969",
  "group_tag": "0",
  "relationship": "School Friends",
  "user_id": "59aae698a642be0a713f8384",
  "image": "http://128.199.177.140/drinks/uploads/groups/original/User_2017_1505013147.jpeg",
  "modified": ISODate("2017-09-10T03:12:27.544Z"),
  "created": ISODate("2017-09-10T03:12:27.544Z")
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
  "_id": ObjectId("59acff5834e9f00de75e4b9e"),
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
  "_id": ObjectId("59b0dd5486d89ef71e8b4568"),
  "datetime": "7/9/2017 10:00 AM",
  "message": "Hello Owner",
  "read_status": "0",
  "receiver_id": "59aa843ba642beca6d3f8385",
  "sender_id": "59ad2aada642be7b7e6152d9",
  "thread_id": "59b0dc4486d89efd1e8b4567"
});
db.getCollection("messages").insert({
  "_id": ObjectId("59b0dd7a86d89e80068b4567"),
  "datetime": "7/9/2017 10:05 AM",
  "message": "Hello User",
  "read_status": "1",
  "receiver_id": "59ad2aada642be7b7e6152d9",
  "sender_id": "59aa843ba642beca6d3f8385",
  "thread_id": "59b0dc4486d89efd1e8b4567",
  "modified": ISODate("2017-09-11T10:37:24.539Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59b67d29a642be6b51b15eb6"),
  "datetime": "11/09/2017 05:40 PM",
  "message": "Cnfngh th n eth eth e",
  "receiver_id": "59aa843ba642beca6d3f8385",
  "thread_id": "59b0dc4486d89efd1e8b4567",
  "sender_id": "59ad2aada642be7b7e6152d9",
  "read_status": "0",
  "modified": ISODate("2017-09-11T12:10:17.336Z"),
  "created": ISODate("2017-09-11T12:10:17.336Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59b67f24a642be9955b15eb6"),
  "datetime": "11/09/2017 05:48 PM",
  "message": "Bhhi i i un ;ok",
  "receiver_id": "59aa843ba642beca6d3f8385",
  "thread_id": "59b0dc4486d89efd1e8b4567",
  "sender_id": "59ad2aada642be7b7e6152d9",
  "read_status": "0",
  "modified": ISODate("2017-09-11T12:18:44.822Z"),
  "created": ISODate("2017-09-11T12:18:44.822Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59b67f6ca642be6e55b15eb6"),
  "datetime": "11/09/2017 05:49 PM",
  "message": "Fgjfghmr,g dfh fjg. Dfg",
  "receiver_id": "59aa843ba642beca6d3f8385",
  "thread_id": "59b0dc4486d89efd1e8b4567",
  "sender_id": "59ad2aada642be7b7e6152d9",
  "read_status": "0",
  "modified": ISODate("2017-09-11T12:19:56.986Z"),
  "created": ISODate("2017-09-11T12:19:56.986Z")
});
db.getCollection("messages").insert({
  "_id": ObjectId("59b68248a642be6e55b15eb7"),
  "datetime": "11/09/2017 06:02 PM",
  "message": "Sdfgsd taezdfg b rh wrnrt rhwrg wr",
  "receiver_id": "59aa843ba642beca6d3f8385",
  "thread_id": "59b0dc4486d89efd1e8b4567",
  "sender_id": "59ad2aada642be7b7e6152d9",
  "read_status": "0",
  "modified": ISODate("2017-09-11T12:32:08.529Z"),
  "created": ISODate("2017-09-11T12:32:08.529Z")
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
db.getCollection("reported_groups").insert({
  "_id": ObjectId("59aff5bea642be395db4f2d0"),
  "date": "2017/09/06",
  "group_id": "59ab8107a642be7f163f8384",
  "reason": "Asfggafv g. Wdg f wg w gwd wrg",
  "user_id": "59ad2aada642be7b7e6152d9",
  "modified": ISODate("2017-09-06T13:18:54.198Z"),
  "created": ISODate("2017-09-06T13:18:54.198Z")
});
db.getCollection("reported_groups").insert({
  "_id": ObjectId("59b138f1a642be492f3ecc98"),
  "date": "2017/09/07",
  "group_id": "59aa81e7a642becd703f8385",
  "reason": "Xsdfb b fb. B ef h. Dfg",
  "user_id": "59ad2aada642be7b7e6152d9",
  "modified": ISODate("2017-09-07T12:17:53.702Z"),
  "created": ISODate("2017-09-07T12:17:53.702Z")
});
db.getCollection("reported_groups").insert({
  "_id": ObjectId("59b1403ba642beee2d3ecc98"),
  "date": "2017/09/07",
  "group_id": "59aaea85a642be0a713f8386",
  "reason": "Vbsdsdhdsf v w. W g we we.",
  "user_id": "59ad2aada642be7b7e6152d9",
  "modified": ISODate("2017-09-07T12:48:59.96Z"),
  "created": ISODate("2017-09-07T12:48:59.96Z")
});
db.getCollection("reported_groups").insert({
  "_id": ObjectId("59b15e6da642bef32e3ecc98"),
  "date": "2017/09/07",
  "group_id": "59aaea85a642be0a713f8386",
  "reason": "Ddrff",
  "user_id": "59aae698a642be0a713f8384",
  "modified": ISODate("2017-09-07T14:57:49.583Z"),
  "created": ISODate("2017-09-07T14:57:49.583Z")
});
db.getCollection("reported_groups").insert({
  "_id": ObjectId("59b2864ca642be0d66f17972"),
  "date": "2017/09/08",
  "group_id": "59b26d30a642bebc56f17972",
  "reason": "Bekar group",
  "user_id": "59aa7ce0a642bec86d3f8384",
  "modified": ISODate("2017-09-08T12:00:12.918Z"),
  "created": ISODate("2017-09-08T12:00:12.918Z")
});
db.getCollection("reported_groups").insert({
  "_id": ObjectId("59b289a2a642be6369f17972"),
  "date": "2017/09/08",
  "group_id": "59b27f87a642bed462f17972",
  "reason": "Ghatiya group. Jd did do is dis did id dodbdid d 5282?:628:'domdlx!:&,&,!:&:@@/!|€|>[%>|*|!~+,+.'dkdowubdo Hsiwijw",
  "user_id": "59aa7ce0a642bec86d3f8384",
  "modified": ISODate("2017-09-08T12:14:26.839Z"),
  "created": ISODate("2017-09-08T12:14:26.839Z")
});
db.getCollection("reported_groups").insert({
  "_id": ObjectId("59b62c75a642bed039b15eb6"),
  "date": "2017/09/11",
  "group_id": "59b4ad9ba642befb1bf708a8",
  "reason": "435ter ertbrt ernyh e n eh",
  "user_id": "59ad2aada642be7b7e6152d9",
  "modified": ISODate("2017-09-11T06:25:57.859Z"),
  "created": ISODate("2017-09-11T06:25:57.859Z")
});

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
  "ns": "drinks.job_lists"
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
  "ns": "drinks.groups"
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
  "ns": "drinks.marriage_types"
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
  "ns": "drinks.salaries"
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
  "ns": "drinks.drinked_groups"
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
  "ns": "drinks.members"
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
  "ns": "drinks.reported_groups"
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
  "ns": "drinks.messages"
});

/** threads records **/
db.getCollection("threads").insert({
  "_id": ObjectId("59b0dc4486d89efd1e8b4567"),
  "group_id": "59aa8842a642becb6d3f8386",
  "sender_id": "59ad2aada642be7b7e6152d9",
  "receiver_id": "59aa843ba642beca6d3f8385"
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
  "_id": ObjectId("59aa7ce0a642bec86d3f8385"),
  "user_id": "59aa7ce0a642bec86d3f8384",
  "balance": NumberLong(97),
  "modified": ISODate("2017-09-08T12:38:49.759Z"),
  "created": ISODate("2017-09-02T09:41:52.358Z")
});
db.getCollection("user_accounts").insert({
  "_id": ObjectId("59aa843ba642beca6d3f8386"),
  "user_id": "59aa843ba642beca6d3f8385",
  "balance": NumberLong(100),
  "modified": ISODate("2017-09-02T11:56:27.410Z"),
  "created": ISODate("2017-09-02T10:13:15.426Z")
});
db.getCollection("user_accounts").insert({
  "_id": ObjectId("59aae698a642be0a713f8385"),
  "user_id": "59aae698a642be0a713f8384",
  "balance": NumberLong(95),
  "modified": ISODate("2017-09-10T03:12:35.802Z"),
  "created": ISODate("2017-09-02T17:12:56.939Z")
});
db.getCollection("user_accounts").insert({
  "_id": ObjectId("59abdf89a642bea02b5f7c86"),
  "user_id": "59abdf89a642bea02b5f7c85",
  "balance": NumberLong(100),
  "modified": ISODate("2017-09-03T10:55:05.327Z"),
  "created": ISODate("2017-09-03T10:55:05.327Z")
});
db.getCollection("user_accounts").insert({
  "_id": ObjectId("59ad222aa642beb8736152da"),
  "user_id": "59ad222aa642beb8736152d9",
  "balance": NumberLong(100),
  "modified": ISODate("2017-09-04T09:51:38.834Z"),
  "created": ISODate("2017-09-04T09:51:38.834Z")
});
db.getCollection("user_accounts").insert({
  "_id": ObjectId("59ad2aada642be7b7e6152da"),
  "user_id": "59ad2aada642be7b7e6152d9",
  "balance": NumberLong(100),
  "modified": ISODate("2017-09-07T12:56:18.520Z"),
  "created": ISODate("2017-09-04T10:27:57.963Z")
});
db.getCollection("user_accounts").insert({
  "_id": ObjectId("59ae3fdca642be89406152da"),
  "user_id": "59ae3fdca642be89406152d9",
  "balance": NumberLong(100),
  "modified": ISODate("2017-09-05T06:10:43.285Z"),
  "created": ISODate("2017-09-05T06:10:36.426Z")
});
db.getCollection("user_accounts").insert({
  "_id": ObjectId("59ae853ba642beba591f3a8e"),
  "user_id": "59ae853ba642beba591f3a8d",
  "balance": NumberLong(100),
  "modified": ISODate("2017-09-05T11:07:31.224Z"),
  "created": ISODate("2017-09-05T11:06:35.388Z")
});

/** users records **/
db.getCollection("users").insert({
  "_id": ObjectId("59aa7ce0a642bec86d3f8384"),
  "annual_income": "$ 8000 - 15000",
  "blood_type": "B+",
  "dob": "1984/07/30",
  "fb_id": "1430418013717131",
  "fb_image": "http://graph.facebook.com/1430418013717131/picture?type=large",
  "full_name": "Marshal Erick",
  "job_id": "59a545e241a73f9c5a7711c1",
  "marriage": "Divorced",
  "school_career": "Master",
  "tabaco": "JKL",
  "last_login": "",
  "modified": ISODate("2017-09-02T09:41:52.355Z"),
  "created": ISODate("2017-09-02T09:41:52.355Z")
});
db.getCollection("users").insert({
  "_id": ObjectId("59aa843ba642beca6d3f8385"),
  "annual_income": "$ 8000 - 15000",
  "blood_type": "O+",
  "dob": "1980/06/02",
  "fb_id": "1437892572967757",
  "fb_image": "http://graph.facebook.com/1437892572967757/picture?type=large",
  "full_name": "Samuels Mat",
  "job_id": "59a545e241a73f9c5a7711ce",
  "marriage": "Married",
  "school_career": "Graduate",
  "tabaco": "GHI",
  "last_login": "",
  "modified": ISODate("2017-09-02T10:13:15.418Z"),
  "created": ISODate("2017-09-02T10:13:15.419Z")
});
db.getCollection("users").insert({
  "_id": ObjectId("59aae698a642be0a713f8384"),
  "annual_income": "$ 8000 - 15000",
  "blood_type": "AB+",
  "dob": "1999/09/03",
  "fb_id": "1288672714577080",
  "fb_image": "http://graph.facebook.com/1288672714577080/picture?type=large",
  "full_name": "Jonghwa Park",
  "job_id": "59a545e241a73f9c5a7711ea",
  "marriage": "UnMarried",
  "school_career": "Ph.d",
  "tabaco": "GHI",
  "last_login": "",
  "modified": ISODate("2017-09-02T17:12:56.936Z"),
  "created": ISODate("2017-09-02T17:12:56.936Z")
});
db.getCollection("users").insert({
  "_id": ObjectId("59abdf89a642bea02b5f7c85"),
  "annual_income": "$ 1000 - 3000",
  "blood_type": "A+",
  "dob": "1999/09/03",
  "fb_id": "1659578594114433",
  "fb_image": "http://graph.facebook.com/1659578594114433/picture?type=large",
  "full_name": "Nao Naka",
  "job_id": "59a545e241a73f9c5a7711bd",
  "marriage": "Single",
  "school_career": "Middle",
  "tabaco": "ABC",
  "last_login": "",
  "modified": ISODate("2017-09-03T10:55:05.317Z"),
  "created": ISODate("2017-09-03T10:55:05.318Z")
});
db.getCollection("users").insert({
  "_id": ObjectId("59ad222aa642beb8736152d9"),
  "annual_income": "Optional(\"$ 3000 - 5000\")",
  "blood_type": "Optional(\"B+\")",
  "dob": "Optional(\"1999/09/04\")",
  "fb_id": "Optional(\"1973983859552356\")",
  "fb_image": "Optional(\"http://graph.facebook.com/1973983859552356/picture?type=large\")",
  "full_name": "Optional(\"Mark Steven\")",
  "job_id": "Optional(\"59a545e241a73f9c5a7711bf\")",
  "marriage": "Optional(\"Single\")",
  "school_career": "Optional(\"Graduate\")",
  "tabaco": "Optional(\"DEF\")",
  "last_login": "",
  "modified": ISODate("2017-09-04T09:51:38.830Z"),
  "created": ISODate("2017-09-04T09:51:38.830Z")
});
db.getCollection("users").insert({
  "_id": ObjectId("59ad2aada642be7b7e6152d9"),
  "annual_income": "$ 8000 - 15000",
  "blood_type": "B+",
  "dob": "1999/09/04",
  "fb_id": "1588167327924629",
  "fb_image": "http://graph.facebook.com/1588167327924629/picture?type=large",
  "full_name": "Maninderjit Singh",
  "job_id": "59a545e241a73f9c5a7711ce",
  "marriage": "Divorced",
  "school_career": "Graduate",
  "tabaco": "JKL",
  "last_login": "",
  "modified": ISODate("2017-09-04T10:27:57.960Z"),
  "created": ISODate("2017-09-04T10:27:57.960Z")
});
db.getCollection("users").insert({
  "_id": ObjectId("59ad3492a642bea27e6152da"),
  "annual_income": "$ 8000 - 15000",
  "blood_type": "AB+",
  "dob": "1999/09/04",
  "fb_id": "1588167327924629",
  "fb_image": "http://graph.facebook.com/1588167327924629/picture?type=large",
  "full_name": "Ashwani Kocher",
  "job_id": "59a545e241a73f9c5a7711ce",
  "marriage": "Divorced",
  "school_career": "Graduate",
  "tabaco": "JKL",
  "last_login": "",
  "modified": ISODate("2017-09-04T10:27:57.960Z"),
  "created": ISODate("2017-09-04T10:27:57.960Z"),
  "image": "http://128.199.177.140/drinks/uploads/users/original/User_2017_1504523500.jpg"
});
db.getCollection("users").insert({
  "_id": ObjectId("59ae3fdca642be89406152d9"),
  "annual_income": "$ 8000 - 15000",
  "blood_type": "B+",
  "dob": "1993/12/28",
  "fb_id": "1973983859552356",
  "fb_image": "http://graph.facebook.com/1973983859552356/picture?type=large",
  "full_name": "Mark Steven",
  "job_id": "59a545e241a73f9c5a7711bd",
  "marriage": "Single",
  "school_career": "Graduate",
  "tabaco": "GHI",
  "last_login": "",
  "modified": ISODate("2017-09-05T06:10:36.423Z"),
  "created": ISODate("2017-09-05T06:10:36.423Z")
});
db.getCollection("users").insert({
  "_id": ObjectId("59ae853ba642beba591f3a8d"),
  "annual_income": "$ 3000 - 5000",
  "blood_type": "A+",
  "dob": "1991/03/02",
  "fb_id": "10156613143719922",
  "fb_image": "http://graph.facebook.com/10156613143719922/picture?type=large",
  "full_name": "Brian Fowler-Adams",
  "job_id": "59a545e241a73f9c5a7711bc",
  "marriage": "Single",
  "school_career": "Master",
  "tabaco": "ABC",
  "last_login": "",
  "modified": ISODate("2017-09-05T11:06:35.385Z"),
  "created": ISODate("2017-09-05T11:06:35.385Z")
});
