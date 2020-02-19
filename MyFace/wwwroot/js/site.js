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
