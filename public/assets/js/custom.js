//invite file upload

    
      
      
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
        
        var found = false;
        for(var i = 0; i < ev.target.classList.length; i++) {
            if (ev.target.classList[i] == 'sortable-list') {
              console.log(ev.target.classList[i])
                found = true;
                break;
            }
        }
        if(found){
          ev.target.appendChild(document.getElementById(data));
          //  fire custom event for data to bord to arg vuejs 

        }
        
      }
      sortableList.addEventListener("dragenter", e => e.preventDefault());
      

