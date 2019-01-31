document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  console.log("i'm going to save");
  form.addEventListener('submit', handleSubmit);

  // const title = document.querySelector('#title');
  // title.addEventListener('input',handleTitle);


});



const handleSubmit = function(event) {
  console.log("i've been saved");
  event.preventDefault();
  const newBook = document.querySelector('#reading-list');
  //newBook.textContext= "Book:";

//create Div in reading list to append book details to
  const newBookItem = document.createElement('div');
  newBookItem.classList.add('book');
  console.log("Div created")

//create new  h2 to push heading to div
  const newHeadingItem = document.createElement('h2');
  newHeadingItem.classList.add('heading');
  newHeadingItem.textContent=`Title: ${this.title.value}`; //change to dynamically accept title
  console.log("h2 created")

  //create new  h4 to push author to div
    const newAuthorItem = document.createElement('h4');
    newAuthorItem.classList.add('heading-author');
    newAuthorItem.textContent=`Author: ${this.author.value}`; //change to dynamically accept author
    console.log("h4 created")

    //create new  p to push category to div
      const newCategoryItem = document.createElement('p');
      newCategoryItem.classList.add('category');
      newCategoryItem.textContent=`Category: ${this.category.value}`; //change to dynamically accept author
      console.log("category")


  newBookItem.appendChild(newHeadingItem);
  newBookItem.appendChild(newAuthorItem);
  newBookItem.appendChild(newCategoryItem);
  newBook.appendChild(newBookItem);
}

// const handleTitle = function(event) {
//   const newTitle = document.querySelector('#reading-list');
//   newTitle.textContext = `Title: ${event.target.value}`;
//
// }
