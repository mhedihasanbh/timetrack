//jquery
$(document).ready(function(){
  
  //select2
  
   // $('.js-example-basic-multiple').select2();
   
   //lightbox image]
  window.onload = function(){
   //image light box plugin
   $('.popup-gallery').magnificPopup({
     delegate: 'a',
     type: 'image',
     tLoading: 'Loading image #%curr%...',
     mainClass: 'mfp-img-mobile',
     gallery: {
       enabled: true,
       navigateByImgClick: true,
       preload: [0,1] // Will preload 0 - before current, and 1 after the current image
     },
     image: {
       tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
       titleSrc: function(item) {
         return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
       }
     }
   });
  
   
 
 
 //sidebar toggle
 $("#dropDown").click(function(){
   $('.side-dropdown').removeClass("side-dropdown");
 });
 
 $("#toggleSidebar").click(function(){
 $(".left-menu").toggleClass("hide");
 $(".content-wrapper").toggleClass("hide");
 })
 
  }
 });
 
 
  
 
//invite file upload
document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
  const dropZoneElement = inputElement.closest(".drop-zone");

  dropZoneElement.addEventListener("click", (e) => {
    inputElement.click();
  });

  inputElement.addEventListener("change", (e) => {
    if (inputElement.files.length) {
      updateThumbnail(dropZoneElement, inputElement.files[0]);
    }
  });

  dropZoneElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZoneElement.classList.add("drop-zone--over");
  });

  ["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.addEventListener(type, (e) => {
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });

  dropZoneElement.addEventListener("drop", (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length) {
      inputElement.files = e.dataTransfer.files;
      updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
    }

    dropZoneElement.classList.remove("drop-zone--over");
  });
});

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
  let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

  // First time - remove the prompt
  if (dropZoneElement.querySelector(".drop-zone__prompt")) {
    dropZoneElement.querySelector(".drop-zone__prompt").remove();
  }

  // First time - there is no thumbnail element, so lets create it
  if (!thumbnailElement) {
    thumbnailElement = document.createElement("div");
    thumbnailElement.classList.add("drop-zone__thumb");
    dropZoneElement.appendChild(thumbnailElement);
  }

  thumbnailElement.dataset.label = file.name;

  // Show thumbnail for image files
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
    };
  } else {
    thumbnailElement.style.backgroundImage = null;
  }
}


//board
const sortableList = document.querySelector(".sortable-list");
const items = sortableList.querySelectorAll(".item");
items.forEach(item => {
    item.addEventListener("dragstart", () => {
        // Adding dragging class to item after a delay
        setTimeout(() => item.classList.add("dragging"), 0);
    });
    // Removing dragging class from item on dragend event
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
});
const initSortableList = (e) => {
    e.preventDefault();
    const draggingItem = document.querySelector(".dragging");
    // Getting all items except currently dragging and making array of them
    let siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];
    // Finding the sibling after which the dragging item should be placed
    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });
    // Inserting the dragging item before the found sibling
    sortableList.insertBefore(draggingItem, nextSibling);
}
sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", e => e.preventDefault());

 
  //drag and drop

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
sortableList.addEventListener("dragenter", e => e.preventDefault());




//=============JAVASCRIPT===============*/




//===============TOGGLE SIDEBAR==============






 




