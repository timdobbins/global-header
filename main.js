document.addEventListener('DOMContentLoaded', function() {


    const searchInput = document.getElementById('search');
    const menu = document.getElementById('menu');
    const menuItemArray = menu.querySelectorAll('.menu-item');
    const myArray = Array.from(menuItemArray)
    const searchComponent = document.getElementById('search-component');
    const clearBtn = document.getElementById('clear');
    var pos = 0;
    //var content = myArray[pos];
    



    // monitor focus in and out of search component
    searchComponent.addEventListener('focusout', function() {
        setTimeout(function() {
            if (searchComponent.contains(document.activeElement) === false) {
                menu.style.display = 'none';
            }
        }, 10);
    });

    searchComponent.addEventListener('focusin', function() {
        menu.style.display = 'block';
    });


    //detect keyboard navigation within menu

    menu.addEventListener('keydown', function(e) {
        detectKeydown(e);

    });
    searchInput.addEventListener('keyup', function(e) {
        detectKeydown(e);
        console.log(searchInput.value.length);
        if(searchInput.value.length > 0) {
            clearBtn.style.display = 'inline-block';
        } else {
            clearBtn.style.display = 'none';
        }
      });
    


    function detectKeydown(e) {
      console.log(e.keyCode);

        // "down" key navigation
        if(e.keyCode === 40) {

            if(document.activeElement === searchInput) {
            //console.log('is active')
            myArray[0].children[0].focus();
        //    searchInput.value = content;
            
            } else if(pos === myArray.length-1) {
            console.log('reset');
            pos = 0;
            myArray[pos].children[0].focus();
        //    searchInput.value = content;
        
            } else {
            pos++
            myArray[pos].children[0].focus();
        //    searchInput.value = content;
            }  
        }
        
        // "up" key navigation
        if(e.keyCode === 38) {

            if(pos === 0) {
            pos = myArray.length-1;
            myArray[pos].children[0].focus();
        //    searchInput.value = content;
            
            
            } else {
            pos--
            myArray[pos].children[0].focus();
        //    searchInput.value = content;
            }  
        }
        
        // "left" and "right" key navigation
        if(e.keyCode === 39 && document.activeElement !== searchInput) {

            myArray[pos].children[1].focus();

        } 

        if(e.keyCode === 37 && document.activeElement !== searchInput) {

            myArray[pos].children[0].focus();
        }
    }
    





});
