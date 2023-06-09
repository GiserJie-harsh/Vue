var vue = new Vue({
  el: '#app',
  data: {
    message: '',
    selected: true,
    course: 'Javascript',
    checkboxStatus: true,
    checkBoxMult: ['Java','C'],
    selectUse: '邪剑仙',
    selectUseAll: ["雪见","白豆腐"],
    radioValue: "666",
    radioSelect: true,
    checkBoxBindValue: false,
    value1: 'a',
    value2: 'b',
    value3: 'c',
    value4: 'd',
    value5: 'e',
    value6: 'f',
    selectBindValue: [],
    inputText: '',
    trimMessage: ''

  },
  methods: {
    handleInput: function (e) {
      this.message = e.target.value;
    }
  }
})
