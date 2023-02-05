function expensesave(event)
{
  event.preventDefault()
  var myamount=event.target.Amount.value
  var mydesc=event.target.Description.value
  var mycatogery=event.target.Category.value

var object={
  myamount,
  mydesc,
  mycatogery,
}
localStorage.setItem(object.mydesc,JSON.stringify(object))
onscreen(object)
}


function onscreen(object)
{

var  parentele=document.getElementById('listofusers')
var childele=document.createElement('li')
childele.textContent=(object.myamount+"--"+object.mydesc+'--'+object.mycatogery+'--')
parentele.appendChild(childele)


const delbutton =document.createElement('input')
delbutton.style.backgroundColor="red"
delbutton.type='button'
delbutton.value='Delete'
delbutton.className='deletebutton'

delbutton.onclick = ()=>{
  localStorage.removeItem(object.mydesc)
  parentele.removeChild(childele)
 
 
}
childele.appendChild(delbutton)

const editbutton =document.createElement('input')
editbutton.style.backgroundColor='skyblue'
editbutton.type='button'
editbutton.value='Edit'
editbutton.className='editbutton'

editbutton.onclick = ()=>{
  localStorage.removeItem(object.mydesc)
  parentele.removeChild(childele)
  document.getElementById('ExpenseAmount').value=object.myamount
  document.getElementById('exdescript').value=object.mydesc
  document.getElementById('Categories').value=object.mycatogery

}
childele.appendChild(editbutton)
}
