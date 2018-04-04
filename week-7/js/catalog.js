let a_tree_grows_in_brooklyn = {
    title: 'A Tree Grows in Brooklyn',
    author: 'Betty Smith',
    year: 1943
};

let native_son = {
    title: 'Native Son',
    author: 'Richard Wright',
    year: 1940
};

let the_stranger = {
    title: 'The Stranger',
    author: 'Albert Camus',
    year: 1942
};

let the_third_man = {
    title: 'The Third Man',
    director: 'Carol Reed',
    starring: [
        'Orson Welles',
        'Joseph Cotton'
    ],
    year: 1949
};

let rebecca = {
    title: 'Rebecca',
    director: 'Alfred Hitchcock',
    starring: [
        'Joan Fontaine',
        'Laurence Olivier'
    ],
    year: 1949
};

let the_philadelphia_story = {
    title: 'The Philadelphia Story',
    director: 'George Cukor',
    starring: [
        'Katherine Hepburn',
        'Cary Grant',
        'James Stewart'
    ],
    year: 1940
};

let books = [native_son, a_tree_grows_in_brooklyn, the_stranger];

let films = [the_third_man, rebecca, the_philadelphia_story];

let result_list=document.querySelector(".result-list");

let clear_link = document.querySelector("#clear-link");
clear_link.onclick=clearResults;

let book_button = document.querySelector("#book-button");
book_button.onclick=displayBookResults;

function displayBookResults(){
  clearResults();
  book_button.style.backgroundColor = "#f1f2f4";
  book_button.style.fontWeight="bold";
  books.forEach(displayBook);
}

function displayOneBook(book){
  result_list.innerHTML="<li>"+book.title+"</li>";
}

 function displayBook(book) {
   let styled_title = "<strong>" + book.title + "</strong>";
   let title_line = "<div>" + styled_title + " (" +book.year + ") </div>";
   let author_line = "<div>" + book.author + "</div>";
   let full_entry = "<li>" + title_line + author_line + "</li>";     
   document.querySelector(".result-list").innerHTML += full_entry;
 }

 function clearResults() {
     document.querySelector(".result-list").innerHTML =''; 
 }