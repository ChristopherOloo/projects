var NewItemCounter = 1;

var ourList = document.getElementById('our-list');

var ourButton = document.getElementById('our-button');

var ourHeadline = document.getElementById('our-headline');

var listItems = document.getElementById("our-list").getElementsByTagName('li');

ourList.addEventListener("click",activateItem);

function activateItem(e) {
  if(e.target.nodeName == "LI") {
    ourHeadline.innerHTML = e.target.innerHTML;
    for (let i = 0; i < e.target.parentNode.children.length; i++) {
      e.target.parentNode.children[i].classList.remove("active");
    
  }
//for background color
    e.target.classList.add("active"); 
  }
  
}

ourButton.addEventListener("click", createNewItem);

function createNewItem() {
  ourList.innerHTML += "<li>New " + NewItemCounter + "</li>";
  NewItemCounter++;
}

