import $ from 'jquery'
import './app1.css'

const $button1 = $('.add')
const $button2 = $('.minus')
const $button3 = $('.multiply')
const $button4 = $('.divide')
const $number = $('.number')
const n = localStorage.getItem('n')
$number.text(n || 100)

$button1.on('click', () => {
    let num = parseInt($number.text())
    num += 1;
    localStorage.setItem('n', num)
    $number.text(num)
})
$button2.on('click', () => {
    let num = parseInt($number.text())
    num -= 1;
    localStorage.setItem('n', num)
    $number.text(num)
})
$button3.on('click', () => {
    let num = parseInt($number.text())
    num *= 2;
    localStorage.setItem('n', num)
    $number.text(num)
})
$button4.on('click', () => {
    let num = parseInt($number.text())
    num /= 2;
    localStorage.setItem('n', num)
    $number.text(num)
})