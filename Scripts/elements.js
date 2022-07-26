const displaySearchBar = () => {

    let searchBar = `
    <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4 mt-2">
    <div class="input-group">
        <button id="button-addon1" onclick="alertComingSoon()" type="submit" class="btn btn-link text-primary"><i
                class="fa-solid fa-magnifying-glass"></i></button >
        <input id="searchInput" type="search" placeholder="What're you searching for?"
            aria-describedby="button-addon1" class="form-control border-0 bg-light">
        <div class="input-group-append" onclick="alertComingSoon()">
            <i class="fa-solid fa-microphone"></i>
        </div>
    </div>
</div>
`

return searchBar
}

const displaylastVisitedTools = () => {

    let lastVisitedTools = `

    <div class="lastseen-txt"> Last Visited</div>
    <div class="gallery horizontal-gallery shadow p-3">

        <div class="work-modals">
            <div class="card last-seen" >

                <img class="card-img-top" onclick="showToolPage(${newTool[7].id})"
                    src="${newTool[7].icon}" />

                <div class="card-body">
                    <p class="card-text last-seen_name">${newTool[7].language}</p>
                </div>
            </div>
        </div>

        <div class="work-modals">
            <div class="card last-seen">

            <img class="card-img-top" onclick="showToolPage(${newTool[5].id})"
            src="${newTool[5].icon}" />

                <div class="card-body">
                <p class="card-text last-seen_name">${newTool[5].language}</p>
                </div>
            </div>
        </div>

        <div class="work-modals">
            <div class="card last-seen">

            <img class="card-img-top" onclick="showToolPage(${newTool[0].id})"
                    src="${newTool[0].icon}" />

                <div class="card-body">
                    <p class="card-text last-seen_name">${newTool[0].language}</p>
                </div>
            </div>
        </div>
    </div>
</div>
`

    return lastVisitedTools
}

const displayMoreTools = () => {

    let moreTools = `
    <div class="row mb-3">
    <div class="c-5 mt-3">
        <div class="moreTools" onclick="showMoreTools()">
            <div class="card-horizontal">
                <div class="card-body">
                    <img src="https://cdn-icons-png.flaticon.com/512/32/32339.png" 
                    width="20px" class="img-fluid " alt="Card image cap"> 
                    <div class="moreToolText">More development tools</div>
                </div>
            </div>

        </div>
    </div>
`

return moreTools
}

const showToolPage = (id) => {
    window.scrollTo(0,0);

    //changes css
    document.getElementById('stylesheet').href='././Styles/toolPageStyle.css';

    let tool = newTool[id]

           displayArea.innerHTML = `
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
            
                        <div class="col col-lg-9 col-xl-7">
                            <div class="card">
                                <div class="rounded-top d-flex flex-row"
                                    style="background-color: rgb(255, 255, 255); height:200px;">
                                    <div class="returnButton" onclick="display()"> <img
                                            src="https://icons.veryicon.com/png/o/miscellaneous/arrows/go-back-2.png"
                                            width="20px" alt=""> Return</div>
                                    <div class="ms-4 mt-5 d-flex flex-column" style="width: 150px;">
                                        <img src="${tool.icon}"
                                            alt="Generic placeholder image" class="img-fluid img-thumbnail mt-4 mb-2"
                                            style="width: 150px; z-index: 1">
                                    </div>
            
                                    <div class="ms-3" style="margin-top: 100px;">
                                        <h1>${tool.language}</h1>
                                        <img src="https://cdn-icons-png.flaticon.com/512/159/159617.png"  class="star" />
                                        <img src="https://cdn-icons-png.flaticon.com/512/159/159617.png"  class="star"/>
                                        <img src="https://cdn-icons-png.flaticon.com/512/159/159617.png"  class="star"/>
                                        <img src="https://cdn-icons-png.flaticon.com/512/159/159617.png"  class="star"/>
                                        <img src="https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/star-512.png" class="star" />
                                    </div>
                                </div>
            
                                <div class="p-4 text-black" style="background-color: #f8f9fa;">
                                    <div class="d-flex justify-content-end text-center py-1">
                                    </div>
                                </div>
            
                                <div class="card-body p-4 text-black">
                                    <div class="mb-5">
                                        <p class="lead fw-normal mb-1">About</p>
                                        <div class="p-4" style="background-color: #f8f9fa;">
                                            <p class="font-italic mb-1">${tool.longDesc}</p>
                                        </div>
                                    </div>
            
                                    <p class="lead fw-normal mb-1">Links to resources and guides</p>
                                    <div class="p-4" style="background-color: #f8f9fa;">
                                        <p class="font-italic mb-1"> <a href="${tool.link1}" target="_blank">${tool.resource1}</a></p>
                                        <p class="font-italic mb-1"> <a href="${tool.link2}" target="_blank">${tool.resource2}</a></p>
                                        <p class="font-italic mb-1"> <a href="${tool.link3}" target="_blank">${tool.resource3}</a></p>
                                    </div>
            
                                    <div class="d-flex justify-content-between align-items-center mb-4">
                                        <p class="lead fw-normal mb-0">People who use HTML also use...</p>
                                    </div>
                                    <div class="row g-2">
                                        <!-- suggestion -->
                                        <section id="work" class="container content-section text-center">
                                        <div class="container">
                                            <div class="row">
                                                <div class="gallery horizontal-gallery shadow p-3">
                                                  
                                                    <div class="work-modals">
                                                        <div class="card sugestions" onclick="showToolPage(7)">
                                                            <img class="card-img-top" src="${newTool[7].icon}" />
                                                            <div class="card-body">
                                                                <p class="card-text">${newTool[7].language}</p>
                                                            </div>
                                                        </div>
                                                    </div>
            
                                                    <div class="work-modals">
                                                        <div class="card sugestions" onclick="showToolPage(2)">
                                                            <img class="card-img-top" src="${newTool[2].icon}" />
                                                            <div class="card-body">
                                                                <p class="card-text">${newTool[2].language}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="work-modals">
                                                        <div class="card sugestions" onclick="showToolPage(1)">
                                                            <img class="card-img-top" src="${newTool[1].icon}" />
                                                            <div class="card-body">
                                                                <p class="card-text">${newTool[1].language}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
}

const displayLoginField = () => {

    basicDisplayArea()

    let loginField = `
    <div class="login-wrap p-4 p-md-5">
        <img src="./Public/Assets/open-book.png" height="78" alt="CC">
        <div class="loginTitle">The Coding Compendium</div>
    <div class="d-flex">
        <div class="w-100">
            <h3> Sign In</h3>
        </div>

    </div>
    <form action="#" class="signin-form">
        <div class="form-group mt-3">
            <label class="form-control-placeholder" for="username">Username</label> 
            <input type="text" class="form-control mb-2" required="" dcvalue="">
        </div>

        <div class="form-group">
            <label class="form-control-placeholder" for="password">Password</label>
            <input id="password-field" type="password" class="form-control" required="" dcvalue="">
        </div>

        <div class="form-group">
            <button type="submit" class="form-control btn btn-primary rounded submit px-3 mt-4 mb-4" onclick="display()" >Sign In</button>
        </div>

        <div class="form-group d-md-flex">
            <div class="w-50 text-left">
                <label class="checkbox-wrap checkbox-primary mb-0">Remember Me
                    <input type="checkbox" checked="" dcvalue="">
                    <span class="checkmark"></span>
                </label>
            </div>
            <div class="w-50 text-md-right">
                <a href="#">Forgot Password</a>
            </div>
        </div>

    </form>
    <p class="text-center mt-3">Not a member? <a onclick="displayRegisterField()" data-toggle="tab" href="#signup">Sign Up</a></p>
    <p class="text-center" onclick="display()"><a data-toggle="tab" href="#signup">Sign In as a guest</a></p>

</div>

    `
    work.innerHTML = loginField
}

const displayRegisterField = () => {

    basicDisplayArea()

    let registerField = `
    <div class="login-wrap p-4 p-md-5">
        <img src="./Public/Assets/open-book.png" height="78" alt="CC">
        <div class="loginTitle">The Coding Compendium</div>
    <div class="d-flex">
        <div class="w-100">
            <h3> Sign Up</h3>
        </div>

    </div>
    <form action="#" class="signin-form">

        <div class="form-group mt-3">
            <label class="form-control-placeholder" for="username">Username</label> 
            <input type="text" class="form-control mb-2" required="" dcvalue="">
        </div>

        <div class="form-group">
            <label class="form-control-placeholder" for="password">Password</label>
            <input id="password-field" type="password" class="form-control" required="" dcvalue="">
        </div>

        <div class="form-group">
            <label class="form-control-placeholder" for="password">Repeat Password</label>
            <input id="password-field" type="password" class="form-control" required="" dcvalue="">
        </div>

        <div class="form-group mt-3">
            <label class="form-control-placeholder" for="username">E-Mail</label> 
            <input type="email" class="form-control mb-2" required="" dcvalue="">
        </div>

        <div class="form-group">
            <button type="submit" class="form-control btn btn-primary rounded submit px-3 mt-4 mb-4" onclick="display()" >Sign Up</button>
        </div>

       
    <p class="text-center" onclick="display()"><a data-toggle="tab" href="#signup">Sign In as a guest</a></p>

</div>

    `
    work.innerHTML = registerField

}
