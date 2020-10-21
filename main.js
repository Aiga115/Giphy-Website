async function getResponse(){
    let response = await fetch('https://jsonplaceholder.typicode.com/photos');
    let content = await response.json();

    content=content.splice(0,10);
    //console.log(content.splice(0,10));
    //for in
    let list = document.querySelector('.posts')
    

    let key;
    for(key in content){

       list.innerHTML+=`<li class="post">
       <code>id: ${content[key].id}</code><br>
       <code>albumID: ${content[key].albumId}</code><br>
       <img src ="${content[key].url}" width="300"><br>
       <code>title: ${content[key].title}</code><br>
       </li>`

    }
}
getResponse();
