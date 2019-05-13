// 生日2017/12/20（要改成农历..）
import { birthday } from '../config.js'
const [y1, m1, d1] = birthday.split('/')
export function compute () {
  let date = new Date()
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  let d = date.getDate()
  if (+m === +m1 && +d === +d1) {
    return y - y1
  }
  return false
}
