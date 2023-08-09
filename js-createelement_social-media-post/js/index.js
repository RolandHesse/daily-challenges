console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

//Create all elements
const newArticle = document.createElement("article");
const newParagraph = document.createElement("p");
const newFooter = document.createElement("footer");
const newSpan = document.createElement("span");
const newButton = document.createElement("button");

//All classes to all elements
newArticle.classList.add("post");
newParagraph.classList.add("post__content");
newFooter.classList.add("post__footer");
newSpan.classList.add("post__username");
newButton.classList.add("post__button");

//Set textContent where necessary
newParagraph.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
newSpan.textContent = "@username";
newButton.textContent = "♥ Like";

//Add functionality and set type for button
newButton.addEventListener("click", handleLikeButtonClick);
newButton.type = "button";
newButton.dataJS = "like-button";

//Append all elements
document.body.append(newArticle);

newArticle.append(newParagraph);
newArticle.append(newFooter);

newFooter.append(newSpan);
newFooter.append(newButton);

console.log(newButton);
