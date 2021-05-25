console.log('Vercel Test')

const xhr = new XMLHttpRequest()
// xhr.open('GET', 'http://localhost:3000/api')
xhr.open('GET', '/api')
console.log(xhr)
xhr.onreadystatechange = function(){
  if(xhr.readyState == 4 && xhr.status == 200){
    alert(xhr.responseText);
  }
};
xhr.send(null);
