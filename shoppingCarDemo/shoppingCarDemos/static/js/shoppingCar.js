var shoppingCar = new Vue({
  el: '#aVue',
  data: {
    items: [
      [
        {id: 1, name: 'iPhone7', price: 6188, count: 0, type: "电子产品"},
        {id: 2, name: 'Ipad Pro', price: 5888, count: 0, type: "电子产品"}
      ],
      [
        {id: 3, name: '苹果', price: 10, count: 0, type: "水果"},
        {id: 4, name: '西瓜', price: 8, count: 0, type: "水果"},
        {id: 5, name: '山竹', price: 2, count: 0, type: "水果"},
        {id: 6, name: '圣女果', price: 11, count: 0, type: "水果"},
        {id: 7, name: '香梨', price: 13, count: 0, type: "水果"},
        {id: 8, name: '火龙果', price: 25, count: 0, type: "水果"},
        {id: 9, name: '枇杷', price: 32, count: 0, type: "水果"},
        {id: 10, name: '蓝莓', price: 15, count: 0, type: "水果"}
      ]
    ],
    count: 10,
    selectAllCheckbox: false,
    selectedBox: [],<!--这是这多维数组，后面根据商品的种类进行多维数组的动态构建-->
  },
  computed: {
    sumPrice: function () {//计算属性，计算的价格是选中的商品的总价格，所以selectBox中存着被选中的商品
      var sum = 0;
      for (let i = 0; i < this.selectedBox.length; i++) {
        for (let j = 0; j < this.selectedBox[i].length; j++) {
          if (this.selectedBox[i][j] === true) {
            let item = this.items[i][j];
            sum += item.price * item.count;
          }
        }
      }
      return sum;
    }
  },
  created() {
    this.dealForB();//在vue实例初始化后动态创建多维数组
  },
  methods: {
    dealForB: function () {//动态创建selectedBox多维数组
      for (let i = 0; i < this.items.length; i++) {
        this.selectedBox.push([]);
      }
    },
    selectAll: function () {//商品全选
      if (this.selectAllCheckbox) {//如果已经全选，则取消所有商品的选中状态
        this.selectedBox = [];
        this.dealForB();//记得再动态创建一次多维数组，防止下次全选时报错
      } else {//如果没有全选，就更新selectedBox数组，把所有商品全部选中
        this.selectedBox = this.items.map((row) => {
          return row.map((item) => item.id)
        });
      }
    },
    sumTrue: function (item) {
      var count = 0;
      for (let i = 0; i < item.length; ++i) {
        for (let j = 0; j < item[i].length; j++) {
          if (item[i][j] === true) {
            count++;
          }
        }
      }
      return count;
    },
    checkAll: function () {
      this.selectAllCheckbox = this.sumTrue(this.selectedBox) === this.sumLength(this.items);//每一行的选中状态改变都会触发这个函数，如果有10条记录，用户手动选中了这10条记录，则需要自动选中全选按钮
    },
    addCount: function (item) {
      item.count++;//增加数量
    },
    sumLength: function (item) {//计算多维数组的元素个数
      var count = 0;
      for (let i = 0; i < item.length; i++) {
        for (let j = 0; j < item[i].length; j++) {
          count++;
        }
      }
      return count;
    },
    subCount: function (item) {//商品数量个数限制
      if (item.count === 0) {
        alert("数量不能小于0")
      } else {
        item.count--;
      }
    },
    deleteItem: function (index, index1) {//删除某一个商品
      if (confirm("确定要删除吗？？？")) {
        var item = this.items[index];
        item.splice(index1, 1);
        this.selectedBox[index].splice(index1, 1);//记得也需要删除selectedBox中的数据
      }
    }
  },
});
