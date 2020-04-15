export default {
  basicComponents: [{
    type: "phone",
    name: "手机号",
    placeholder: "请输入手机号",
    showLabel: false,
    label: {
      labelTitle: "手机号",
      labelPosition: "left",
      labelwidth: 50,
      labelWidth: "50px"
    },
    value: "",
    apiKey: "phone",
    codeValue: "",
    codeKey: "verifyCode",
    showCode: true,
    style: {
      margin: "0px 0px 0px 0px",
      btnStyle: {
        backgroundColor: "#409EFF",
        color: "#fff",
        borderColor: "#409EFF",
        borderRadius: '5px',
        borderradius: 5,
      }
    }
  },
  {
    "type": "input",
    "name": "输入框",
    "placeholder": "请输入姓名",
    "showLabel": false,
    "label": {
      "labelTitle": "姓名",
      "labelPosition": "left",
      "labelwidth": 50,
      "labelWidth": "50px"
    },
    "value": "",
    "apiKey": "name",
    "fieldTypes": "inputTypes",
    "style": {
      "margin": "0px 0px 0px 0px"
    }
  },
  {
    "type": "checkbox",
    "name": "选择框",
    "value": [],
    "apiKey": "shootPlace",
    "isRadio": false,
    "label": {
      "labelTitle": "旅拍城市",
      "labelwidth": 66,
      "labelWidth": "66px",
      "labelPosition": "left"
    },
    "fieldTypes": "checkboxTypes",
    "options": [
      "北京",
      "三亚",
      "丽江",
      "巴厘岛",
      "马尔代夫",
      "威尼斯",
      "其他"
    ],
    "style": {
      "margin": "0px 0px 0px 0px"
    }
  },
  {
    "type": "date",
    "name": "日期选择器",
    "label": {
      "labelTitle": "生日",
      "labelwidth": 50,
      "labelWidth": "50px",
      "labelPosition": "left"
    },
    "apiKey": "birthday",
    "value": "",
    "fieldTypes": "dateTypes",
    "style": {
      "margin": "0px 0px 0px 0px"
    }
  },
  {
    "type": "select",
    "name": "下拉选择框",
    "value": "",
    "apiKey": "educationLevel",
    "placeholder": "请选择教育程度",
    "showLabel": true,
    "label": {
      "labelTitle": "教育程度",
      "labelPosition": "left",
      "labelwidth": 66,
      "labelWidth": "66px"
    },
    "fieldTypes": "selectTypes",
    "options": [
      "硕士及以上",
      "本科",
      "大专",
      "中专/高中及以下"
    ],
    "style": {
      "margin": "0px 0px 0px 0px"
    }
  },
  {
    "type": "switch",
    "name": "开关",
    "value": false,
    "label": {
      "labelTitle": "是否有信用卡",
      "labelPosition": "left",
      "labelwidth": 100,
      "labelWidth": "100px"
    },
    "fieldTypes": "switchTypes",
    "apiKey": "creditCard",
    "style": {
      "margin": "0px 0px 0px 0px"
    }
  },
  {
    "type": "h-picker",
    "name": "横向滑动单选",
    "value": "20",
    "options": [
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "label": {
      "labelTitle": "年龄",
      "labelPosition": "left",
      "labelwidth": 50,
      "labelWidth": "50px"
    },
    "fieldTypes": "hPickerTypes",
    "apiKey": "age",
    "itemWidth": 50,
    "showNumber": 5,
    "pickerStyle": {
      "color": "#409eff",
      "fontsize": 18,
      "fontSize": "18px"
    },
    "style": {
      "margin": "0px 0px 0px 0px"
    }
  },
  {
    type: "button",
    name: "按钮",
    btnText: "提交",
    btnType: "submit",
    apiKey: "",
    fixedBottom: false,
    scrollHeight: 0,
    btnTypes: [{
      value: "submit",
      label: "提交"
    }],
    style: {
      margin: "10px 10px 10px 10px",
      padding: "0px 0px 0px 0px",
      isImgBtn: false,
      value: "",
      btnStyle: {
        borderRadius: '20px',
        borderradius: 20,
        backgroundColor: "#409EFF",
        color: "#fff"
      }
    }
  }, {
    type: "wechat",
    name: "微信关注",
    value: "微信账号",
    wechatName: "",
    btnText: "+  关注",
    logo: "",
    showName: true,
    showLogo: true,
    backgroundColor: "",
    fixedBottom: false,
    scrollHeight: 0,
    style: {
      isImgBtn: false,
      value: "",
      margin: "0px 0px 0px 0px",
      color: "#333",
      fontsize: 14,
      fontSize: "14px",
      btnStyle: {
        borderRadius: '20px',
        borderradius: 20,
        backgroundColor: "#01cd0d",
        color: "#fff",
        fontsize: 14,
        fontSize: "14px"
      }
    }
  }
  ],
  "displayComponents": [{
    "type": "imgSlide",
    "name": "图片轮播",
    "value": [{
      "url": "https://www.baidu.com",
      "image": "static/img/theme1.jpg"
    },
    {
      "url": "https://qq.com",
      "image": "static/img/theme2.jpg"
    },
    {
      "url": "https://jd.com",
      "image": "static/img/theme3.jpg"
    }
    ],
    "interval": 3000,
    "style": {
      "margin": "0px 0px 0px 0px",
      "height": 250
    }
  },
  {
    type: "imgShow",
    name: "图片展示",
    fixedBottom: false,
    scrollHeight: 0,
    styleType: "col1",
    styleTypes: [{
      value: "col1",
      label: "单列"
    }, {
      value: "col2",
      label: "双列"
    }],
    imglist: [{
      img: "",
      link: ""
    }],
    style: {
      margin: "0px 0px 0px 0px"
    }
  },
  {
    type: "marquee",
    name: "跑马灯",
    fixedBottom: false,
    scrollHeight: 0,
    direction: "up", //滚动方向 向左=left  向上=up
    durationTime: 6, //滚动时长 单位秒
    isImgBtn: false,
    imgUrl: "",
    textList: [
      '李小姐34秒前已报名',
      '张先生1分钟前 已报名',
      '周先生 3分钟前 已报名',
      '梁小姐  5分钟前  已报名'
    ],
    style: {
      backgroundColor: "",
      Height: 50,
      height: '50px',
      overflow: 'hidden',
      color: "#333",
      fontsize: 14,
      fontSize: "14px",
      lineheight: 28,
      lineHeight: "28px",
      margin: "0px 0px 0px 0px"
    }
  }
  ],
  "assistComponents": [{
    "type": "staticText",
    "name": "文本描述",
    "value": "文本描述",
    "link": "",
    backgroundImage: "",
    backgroundColor: "",
    style: {
      margin: "0px 0px 0px 0px"
    }
  },
  {
    type: "agreement",
    name: "用户协议",
    apiKey: "agreement",
    value: false,
    isRequired: true,
    tipText: "我已阅读并同意",
    titleTexts: [{
      title: "《隐私权协议》",
      text: ""
    }, {
      title: "《用户协议》",
      text: ""
    }],
    style: {
      fontsize: 12,
      fontSize: "12px",
      color: "#333333",
      margin: "10px 0px 10px 0px"
    },
    agreementColor: '#3b9cfd'
  },
  {
    "type": "splitLine",
    "name": "分割线",
    "value": "solid",
    "style": {
      "borderColor": "#d3d3d3",
      "borderStyle": "solid",
      "borderTopWidth": "1px",
      "margin": "20px 0px 20px 0px"
    }
  }
  ],
  "advancedComponents": [{
    type: "formList",
    name: "表单内容区",
    list: [],
    wgClassName: "wg-formlist",
    style: {
      margin: "0px 20px 0px 20px",
      borderradius: 10,
      borderRadius: '10px',
      borderColor: "#409eff",
      borderwidth: 3,
      borderWidth: '3px',
      borderStyle: "solid"
    }
  }]
}