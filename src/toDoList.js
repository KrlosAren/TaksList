
let inputTasks = document.getElementById('inputAdd')
const divTaks = document.getElementById('medium__main--tasks')
const main = document.getElementById('main')

console.log(inputTasks.textContent)


function addTasks() {
     let elementLi = document.createElement('LI')
     let list = document.getElementById('list')
     let txtInput = document.createTextNode(inputTasks.value)
     elementLi.appendChild(txtInput)
          if(inputTasks.value === ''){
               alert('Debes escribir una Tarea')
          }else{
               list.appendChild(elementLi)
          }
          inputTasks.value = ''

          let span = document.createElement('SPAN')
          let txt = document.createTextNode('\u00D7')
          span.appendChild(txt)
          elementLi.appendChild(span)
          span.className = 'close'

          for(i = 0; i < close.length; i++) {
               close[i].onclick = function() {
                    let div = this.parentElement
                    div.style.display = 'none'
               }
          }
}

     const listNode = document.getElementsByTagName('LI')
     let i 
          for(i = 0; i < listNode.length; i++) {
               let span = document.createElement('SPAN')
               let txt = document.createTextNode('\u00D7')
               span.className = 'close'
               span.appendChild(txt)
               listNode[i].appendChild(span)
          }


     let listTaks = document.querySelector('ul')
          listTaks.addEventListener('click',function(ev) {
               if (ev.target.tagName === 'LI') {
                    ev.target.classList.toggle('ready')
               }
          }, false)   

     let close = document.getElementsByClassName('close')
     let k
          for (let k = 0; k < close.length; k++) {
               close[k].onclick = function () {
                    let div = this.parentElement
                    div.style.display = 'none'
               }
          }


function toogle() {
     listTaks.tagName
}

