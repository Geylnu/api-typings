import { expectType, expectAssignable } from 'tsd-lite';

Component({
  mixins: [], // mixins 方便复用代码
  data: { x: 1 }, // 组件内部数据
  props: { y: 1 }, // 可给外部传入的属性添加默认值
  didMount() {
    expectType<number>(this.data.x);
    expectAssignable<Function>(this.setData);
    expectAssignable<Function>(this.handleTap);
    expectAssignable<Function>(this.$spliceData);
    expectAssignable<Function>(this.getTabBar);
  }, // 生命周期函数
  didUpdate() {},
  didUnmount() {},
  methods: {
    // 自定义方法
    handleTap() {
      this.setData({ x: this.data.x + 1 }); // 可使用 setData 改变内部属性
    },
  },
});
