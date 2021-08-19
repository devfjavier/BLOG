"use strict";

addEventListener("DOMContentLoaded", () => {
    // para el boton y el panel que contiene al menu desplegable de filtro
    const filterButton = document.getElementById("FILTER-BUTTON")
    const filterPanel = document.getElementById("FILTER-MENU-DROPDOWN")

    // para boton del menu estatico, y pueda activar al menu
    const selectFilter = document.getElementById("select-filter-option")
    const filterMenuStatic = document.getElementById("filter-option-menu")
    const currentFilter = document.getElementById("current-filter")

    // para cada opcion de filtro de los menus de filtro
    const filterOption = Array.from(document.querySelectorAll(".FILTER-MENU .filter-option"))
    const allPosts = document.querySelectorAll(".container article")
    const   gameFilterState = "game",
    webDevolopmentFilterState = "web-devolopment",
    mobileDevolopmentFilterState = "mobile-devolopment"
    
    let filterState = "all"

    // si se hace click en algun elemento
    // que no son los botones que activan el menu, desactiva los menus
    document.addEventListener("click", () => {
        filterMenuStatic.classList.remove("is-active")
        filterPanel.classList.remove("is-active")
    })
    
    selectFilter.addEventListener("click", event => {
        event.stopPropagation()
        filterMenuStatic.classList.toggle("is-active")
    })
    
    filterButton.addEventListener("click", event => {
        event.stopPropagation()
        filterPanel.classList.toggle("is-active")
    })

            
    // un click en una opcion de filtro mostrara elementos que cumplan con el filtro
    // y los que no cumplan se ocultaran(aunque seguiran existiendo)
    filterOption.forEach(option => {
        option.addEventListener("click", event => {
        const filterOptionClicked = event.target.classList.value
        switch (filterOptionClicked) {
            case "all filter-option":
                activateFilter("all", event.target.textContent)
                break;
                
            case `${gameFilterState} filter-option`:
                activateFilter(gameFilterState, event.target.textContent)
                break;

            case `${webDevolopmentFilterState} filter-option`:
                activateFilter(webDevolopmentFilterState, event.target.textContent)
                break;          
            
            case `${mobileDevolopmentFilterState} filter-option`:
                activateFilter(mobileDevolopmentFilterState, event.target.textContent)
                break;
            }
        })

        function activateFilter(newState, targetTextContent) {
            if (filterState !== newState) {
                filterState = newState
                currentFilter.textContent = targetTextContent
                allPosts.forEach(post => {
                    if (post.classList.value === newState || newState === "all") {
                        post.style.display = "block"
                    }
                    else {
                        post.style.display = "none"
                    }
                })
            }
        }

    })

})