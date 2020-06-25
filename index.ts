class B {
  // 不22
}
// 工厂类
class Zc {
  static create() {
    return new B()
  }
}

// 不直接返回实例，右工厂类返回
class NewB {
  static create() {
    return Zc.create()
  }
}
NewB.create()

function zc() {
  setInterval(() => {

  })
}
function ab() {
  return zc()
}
ab()