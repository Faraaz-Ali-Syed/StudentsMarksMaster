
var display = document.getElementById('display');
var add_more_fields = document.getElementById('add_more_fields');
var remove_fields = document.getElementById('remove_fields');

add_more_fields.onclick = function(){
    var input = display.getElementsByTagName('th');
    var subid = input.length -3;

    var newcold = document.createElement('th');
    var newup = document.createTextNode("Subject " +subid);
   
    newcold.appendChild(newup);
    display.appendChild(newcold);

   
        var newcol = document.createElement('td');
        var newField = document.createElement('input');
        newField.setAttribute('type','number');
        newField.setAttribute('name','details[]');
        newField.setAttribute('class','details');
        newField.setAttribute('max','100');
        newField.setAttribute('onInput','getvalue()');
        newField.setAttribute('siz',10);
        newField.setAttribute('placeholder','Enter Marks(Max=100)');
        newcol.appendChild(newField);
        details.appendChild(newcol);
        
        
      console.log(input.length)
    
  }

  remove_fields.onclick = function(){
   
    var input = display.getElementsByTagName('th');
    var input2 = details.getElementsByTagName('td')
    if(input.length > 4) {
        display.removeChild(input[(input.length) - 1]);
        details.removeChild(input2[(input2.length) - 1]);
    }
  }

  function getvalue() {

    var sum = 0;
    var tags = details.getElementsByTagName('input');
    for(var i =4;i<tags.length;i++)
    {
     sum = sum+parseInt(tags[i].value);
    }
    var n = parseInt(tags.length-4);
    var avg= sum/n;
    console.log(tags[3].value)
    var val=0;
    val=tags[3].value;
    tags[3].value = avg;
    
}

function postdata() {
  

  const id= document.getElementById('id').value;
   const name = document.getElementById('name').value;
   const grade = document.getElementById('grade').value;
   const avg = document.getElementById('avg').value;
 console.log(avg)
   const obj = {
       id,
       name,
       grade,
       avg
   }

   axios.post("https://crudcrud.com/api/38a9b0d045b54020b90552dc5ae48727/data"
   , obj).then((response)=>
   {
    console.log(response)
   })
   .catch((error)=> {
    console.log(error)
   })
  }

  getdata.onclick = function() {
    fetch('https://crudcrud.com/api/38a9b0d045b54020b90552dc5ae48727/data')
    .then(res => {
      return res.json();
    })
    .then(data=> {
      
    
       var table = "";
       data.map((user)=>{
        if(user.avg>60)
        table+= `
        
        <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.grade}</td>
        <td>${user.avg}</td>
        </tr>`;
       })
      document.getElementById('tb').innerHTML=table;
    })
    
     }

  
   