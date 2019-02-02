# 派工系統 API 說明



== 需求 ==
- [ ] api_1 取得所有人員資料
- [ ] api_2 接收派工單

== DLC == 
- [ ] api_1 只給出「可被調動的」人員資料
- [ ] api_2 統計時數給吸管的後台查詢





人力資源選單取得的陣列會像是下面這樣
需要id 可以是uuid

const items = [
  {  
    name: "組別",
    id: 0,
    children: [{
        name: "姓名",
        id: 10,
      },{
        name: "姓名",
        id: 17,
      },{
        name: "姓名",
        id: 13,
      }]
  },
  {
    name: "整房組",
    id: 1,
    children: [{
        name: "Quartz",
        id: 20,
      },{
        name: "Zircon",
        id: 21,
      },{
        name: "Sapphire",
        id: 22,
      },{
        name: "Topaz",
        id: 23,
      }]
  },{  
    name: "餐廳組",
    id: 2,
    children: [{
        name: "A",
        id: 10,
      },{
        name: "Strawberry",
        id: 17,
      },{
        name: "Pineapple",
        id: 13,
      },{
        name: "Banana",
        id: 14,
      },{
        name: "Watermelon",
        id: 15,
      },{
        name: "Kiwi fruit",
        id: 16,
      }]
  },
  {
    name: "打工度假",
    id: 3,
    children: [{
        name: "Quartz",
        id: 20,
      },{
        name: "Zircon",
        id: 21,
      },{
        name: "Sapphire",
        id: 22,
      },{
        name: "Topaz",
        id: 23,
      }]
  },
]