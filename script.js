
function add(e) {
  e.preventDefault();

  const id= document.getElementById('id').value;
   const name = document.getElementById('name').value;
   const grade = document.getElementById('grade').value;
   const avg = document.getElementById('avg').value;

   const obj = {
       id,
       name,
       grade,
       avg
   }

  
   axios.post("https://crudcrud.com/api/65c9ca25f1dd437bbaeabe73d56878c7/data"
   , obj).then((response)=>
   {
    console.log(response)
   })
   .catch((error)=> {
    console.log(error)
   })
  }



var survey_options = document.getElementById('survey_options');
var add_more_fields = document.getElementById('add_more_fields');
var remove_fields = document.getElementById('remove_fields');

const i=0;

add_more_fields.onclick = function(){
  var newField = document.createElement('input');
  newField.setAttribute('type','number');
  newField.setAttribute('name','survey_options[]');
  newField.setAttribute('class','survey_options');
  newField.setAttribute('max','100');
  newField.setAttribute('onInput','getvalue()');
  newField.setAttribute('siz',50);
  newField.setAttribute('placeholder','Enter Subject Marks (Max=100)');
  survey_options.appendChild(newField);
  
}

remove_fields.onclick = function(){
  var input_tags = survey_options.getElementsByTagName('input');
  if(input_tags.length > 3) {
    survey_options.removeChild(input_tags[(input_tags.length) - 1]);
  }
}

console.log(grade.value);

sgrade.addEventListener('change', showgrade);
function showgrade() {
  grade.value = sgrade.value;
}

// function avg(e) {

//   e.preventDefault();
//   var sum = 0;
//   var input_tags = survey_options.getElementsByTagName('input');
//   for(var i =3;i<input_tags.length;i++)
//   {
//    sum = sum+parseInt(input_tags[i].value);
//   }
//   var n = parseInt(input_tags.length-3);
//   var avg= sum/n;
//   console.log(avg);
// var avgvalue = document.getElementById('avg').value;

// calc.avg.value = avg;
//   console.log(calc.avg.value);

//  }

 function getvalue() {

  var sum = 0;
  var input_tags = survey_options.getElementsByTagName('input');
  for(var i =3;i<input_tags.length;i++)
  {
   sum = sum+parseInt(input_tags[i].value);
  }
  var n = parseInt(input_tags.length-3);
  var avg= sum/n;
  console.log(avg);
var avgvalue = document.getElementById('avg').value;

calc.avg.value = avg;
   calc.avg.innerText = avg;

 }


 function get() {
fetch('https://crudcrud.com/api/65c9ca25f1dd437bbaeabe73d56878c7/data')
.then(res => {
  return res.json();
})
.then(data=> {
  

   var table = "";
   data.map((user)=>{
    if(user.avg>60)
    table+= ` <tr>
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.grade}</td>
    <td>${user.avg}</td>
    </tr>`;
   })
  document.getElementById('tb').innerHTML=table;
})

 }

