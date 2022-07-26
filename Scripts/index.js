const basicDisplayArea = () => {
    displayArea.innerHTML = `
    <div class="container py-3 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-lg-9 col-xl-7">
            <div class="card">
                <div class="p-4 card text-black" id="cardDisplayArea"s tyle="background-color: #f8f9fa;">

                    <!-- SEARCH BAR -->
                    <form id="searchBar" action="">
                    </form>

                    <!-- Last Seen -->
                    <section id="work" class="container content-section text-center">
                        <div class="container">
                            <div class="row" id="lastSeen">
                            </div>
                            <!-- Popular Tools -->
                            <div class="lastseen-txt mt-4 h5">Most Popular tools</div>

                            <div id="listOfTool">
                                <div class="container-fluid PopularTools">
                                    <!-- js goes here -->
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `
}

const display = () =>{
    document.getElementById('stylesheet').href='././Styles/style.css';

    basicDisplayArea();

    //searchbar
    let SearchBar = displaySearchBar()
    searchBar.innerHTML = SearchBar

    //visited tools
    let lastVisitedTools = displaylastVisitedTools()
    lastSeen.innerHTML = lastVisitedTools

    //popular tools
    for (let index = 0; index < 8; index++) {
        
    let newTools =
       `
       <div class="row">
       <div class="c-5 mt-3">
           <div class="cardPopular" >
               <div class="card-horizontal">
                   <div class="card-body" onclick="showToolPage(${newTool[index].id})">
                       <img src="${newTool[index].icon}" class="img-fluid popularListIMG" alt="Card image cap"> 
                       <div class="popularToolName">${newTool[index].language}</div>
                   </div>
               </div>
               <div class="card-footer">
                   <p>${newTool[index].desc}</p>
               </div>
           </div>
       </div>
   </div>
       ` 
       $(".PopularTools").append(newTools)       
    }

    //more tools
    let moreTools = displayMoreTools()
    $("#listOfTool").append(moreTools)    
}

const alertComingSoon = () =>{
    alert("Feature coming soon!")
}

const showMoreTools = () =>{

    //changes css
    document.getElementById('stylesheet').href='././Styles/moreTools.css';
    
        //html for more tools
        displayArea.innerHTML = `
        <div class="container py-3 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-9 col-xl-7">
                <div class="card">
    
                    <div class="p-4 card text-black" style="background-color: #f8f9fa;">
                    <div class="returnButton" onclick="display()"> <img
                    src="https://icons.veryicon.com/png/o/miscellaneous/arrows/go-back-2.png"
                    width="20px" alt=""> Return</div>
                                    
                        <!-- Popular Tools -->
                        <div class="lastseen-txt mt-4 h5">Design and Developer tools</div>
    
                        <div id="listOfTool">
                            <div class="container-fluid PopularTools">
                                <!-- js goes here -->
                            </div>
                        </div>
    
    
                    </div>
                </div>
            </div>
        </div>
    
    
    `
    
    for (let index = 0; index < newTool.length; index++) {
            
        let newTools =
           `
           <div class="row">
           <div class="c-5 mt-3">
               <div class="cardPopular" >
                   <div class="card-horizontal">
                       <div class="card-body" onclick="showToolPage(${newTool[index].id})">
                           <img src="${newTool[index].icon}" class="img-fluid popularListIMG" alt="Card image cap"> 
                           <div class="popularToolName">${newTool[index].language}</div>
                       </div>
                   </div>
                   <div class="card-footer">
                       <p>${newTool[index].desc}</p>
                   </div>
               </div>
           </div>
       </div>
           ` 
           $(".PopularTools").append(newTools)       
        }
    
    } 



displayLoginField()