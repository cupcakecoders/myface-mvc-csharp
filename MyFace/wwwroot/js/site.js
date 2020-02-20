window.addEventListener("load", function() {
    let postList = document.getElementsByClassName("post-container");
    for (let i = 0; i < postList.length; i++) {
        postList[i].addEventListener("click", removePostContainer)
    }
});

function removePostContainer(event) {
    const target = event.target;
    const listItem = target.closest(".post-container");
    listItem.remove();
}

let newPostModalBtn = document.getElementById("new-post-modal-btn");

let newPostModalOverlay = document.getElementById("new-post-modal-overlay");
let newPostModalCloseBtn = document.getElementById("new-post-modal-close-btn");


newPostModalBtn.onclick = function(event) {
    event.preventDefault();
    newPostModalOverlay.style.display = "block";
};

newPostModalCloseBtn.onclick = function(event){
    newPostModalOverlay.style.display = "none";
};
