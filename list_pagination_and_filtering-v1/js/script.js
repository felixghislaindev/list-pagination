/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
    // global variables 
    const page = document.querySelector('.page');
    const ul  = page.lastElementChild;
    const lis = ul.children;
    const itemsPerPage = 10;
    
    
    
    
    /*** 
       Create the `showPage` function to hide all of the items in the 
       list except for the ten you want to show.
       
    
       Pro Tips: 
         - Keep in mind that with a list of 54 students, the last page 
           will only display four.
         - Remember that the first student has an index of 0.
         - Remember that a function `parameter` goes in the parens when 
           you initially define the function, and it acts as a variable 
           or a placeholder to represent the actual function `argument` 
           that will be passed into the parens later when you call or 
           "invoke" the function 
    ***/
    
    
    
    // show paage function accepts a list and a page number
    function showPage (list, page) {
    const begin = (page * itemsPerPage) - itemsPerPage;
    const end = itemsPerPage * page;
    
    
      for(let i = 0 ; i < list.length; i++){
        const li = list[i];
        if((i >= begin && i < end)){
            li.style.display = '';
        } else {
          li.style.display = 'none';
        }
      }
    }
    
    
    
    
    
    
    
    /*** 
       Create the `appendPageLinks function` to generate, append, and add 
       functionality to the pagination buttons.
    ***/
    
    // will generate the nav link for the student pages
    function pageLinks() {
    // will calculate the max number of pages for the amount of students in the list
    const maxNumberPages = Math.ceil(lis.length / itemsPerPage);
    
    // create a new div to hold the navigation links 
    const paginationDiv = document.createElement('div');
    const pagginationUl = document.createElement('ul');
    
    
    // will append max number links needed for the amount of students given
    for(let i = 0; i < maxNumberPages; i++){
    
      const li = document.createElement('li');
      const a = document.createElement('a');
      let pageNumber = i+ 1
      a.innerHTML = pageNumber;
      a.href = '#'
      li.appendChild(a); 
      
      pagginationUl.appendChild(li)
    }
    // invoking the shopw page funtion when a button on the link list is clicked
    pagginationUl.addEventListener('click', (e)=>{
      const page = e.target.innerHTML;
      showPage(lis,page)
    })
    
    // inserting the navigation div the main page
    paginationDiv.appendChild(pagginationUl);
    paginationDiv.classList = 'pagination'
    page.insertBefore(paginationDiv, ul.nextSibling);
    
    }
    
    // invoking nave link function
    pageLinks();
    // will automatically load the first student will the page is loaded
    window.onload = showPage(lis,1);
    
    //working on searching feature
    
    // creation of form search form
    
    const pageHeader = document.querySelector('.cf');
    const form = document.createElement('form');
    const input = document.createElement('input');
    const button = document.createElement('button');
    const errMsg = document.createElement('p')
    button.innerHTML = 'Search';
    
    // appendding search from to the page
    form.appendChild(input);
    form.insertBefore(button, input.nextSibling);
    form.insertBefore(errMsg,button.nextSibling);
    form.className = 'student-search'
    errMsg.className = 'msg'
    pageHeader.appendChild(form);
    
    // reloading feature 
    const reloadbtn =  document.createElement('button');
    reloadbtn.innerHTML = 'Previous';
    reloadbtn.className = 'reload-btn'
    
    
    form.addEventListener('submit', (e)=>{
      e.preventDefault()
      let searchBox = e.target.firstChild;
      const navlink = document.querySelector('.pagination')
    
      for(let i = 0; i < lis.length; i++){

        const studentName = lis[i].firstElementChild.querySelector('h3').innerHTML;
        console.log(studentName)
        if (searchBox.value === ''){
          errMsg.innerHTML = 'Please enter a student name';
      
        }
        else if(searchBox.value === studentName) {

          // will hide the error msg
          const msg = document.querySelector('.msg');
          msg.style.display = 'none'

      // appends the reload button to page after a search is done
      ul.appendChild(reloadbtn);
      // invokes reload function when the reload button is clicked
      const reload  = ul.lastChild;
          lis[i].style.display = '';
          
          reload.addEventListener('click', (e) =>{
        if(reload.innerHTML === 'Previous') {
          reloaPage();
        }
      })
          
        } else {
          lis[i].style.display = 'none'
          navlink.style.display = 'none'
    
        }
        
       
      }
      searchBox.value = '';
     
     
    
     
     
    })
    
    // will reload the page when invoked
    function reloaPage(){
      window.location.reload(true);
    }
   
    
    
    
    
    
    
    
    // Remember to delete the comments that came with this file, and replace them with your own code comments.