

$(document).ready(function(){
    let dropdown = []
    dropdown.push({name:"Home",content:"index.html"})
    dropdown.push({
        name:"Calculator",
        content:[
            {
                href:"akhr.html",
                name:"Recruitment",
            },{
                href:"aklevel.html",
                name:"Leveling"
            },{
                href:"akevolve.html",
                name:"Material"
            }]
    })
    dropdown.push({
        name:"Information",
        content:[
        {
            href:"akhrchars.html",
            name:"Operator"
        },{
            href:"akenemy.html",
            name:"Enemy"
        },{
            href:"akriic.html",
            name:"Infrastructure Skill"
        },{
            href:"akhrcompare2.html",
            name:"Comparing"
        }]
    })
    dropdown.push({name:"Elite Materials",content:"akhrelite.html"})
    dropdown.push({name:"Guide",content:"akguide.html"})
    dropdown.push({name:"Mission Story",content:"akstory.html"})
    dropdown.push({
        name:"Extra",
        content:[
        {
            href:"aklinker.html",
            name:"bilibili Linker"
        },
        {
            href:"akgallery.html",
            name:"CG Gallery"
        }]
    })
    // console.log(window.location.href.split("/")[window.location.href.split("/").length-1])
    let currentHtml= window.location.href.split("/")[window.location.href.split("/").length-1];
    let navDropdown = []
    dropdown.forEach(drop => {

        let isCurrent = undefined
        let isGroup = undefined
        
        // console.log(typeof drop.content)
        if(typeof drop.content == "string"){
            if(currentHtml.includes(drop.content)) {
                isGroup = true;
            }
            navDropdown.push(`
            <li class="nav-item ${isGroup?"active":""}">
                <a class="nav-link " href="${drop.content}">${drop.name}</a>
            </li> 
            `)
        }else{
            drop.content.forEach(dropelement => {
                if(currentHtml.includes(dropelement.href)) {
                    isCurrent=dropelement.name;
                    isGroup = true;
                }
                
            })
            isCurrent = isCurrent?isCurrent:"Menu"
            navDropdown.push(`
            <li class="nav-item dropdown ${isCurrent!="menu"&&isGroup?"active":""}">
            <a class="nav-link dropdown-toggle" style="display:inline-flex;padding-left:25px;"href="#" id="regionDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" >
                    <div class="ak-subtitle ak-disable">${drop.name}</div>
            `)
            
            
            // console.log(isCurrent)
            navDropdown.push(`
                    <div class="ak-disable ">${isCurrent}</div>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            `)
            // console.log(navDropdown)
            drop.content.forEach(dropelement => {
                navDropdown.push(`
                <a class="dropdown-item" href="${dropelement.href}" >${dropelement.name}</a>
                `)
            });
            navDropdown.push(`</div>`)
        }
    })
    var reg;
    var lang, langText;

    // console.log(localStorage.gameRegion)

    if(typeof localStorage.gameRegion === "undefined" || localStorage.gameRegion == ""|| localStorage.webLang == ""){
        localStorage.setItem("gameRegion", 'cn');
        localStorage.setItem("webLang", 'en');
        reg = "cn";
        lang = "en";
    } else {
        reg = localStorage.gameRegion;
        lang = localStorage.webLang;
    }
    switch (lang) {
        case "en":langText = 'English';break;
        case "cn":langText = 'Chinese';break;
        case "jp":langText = 'Japanese';break;
        case "kr":langText = 'Korean';break;
    }
    // console.log(reg)
    let html = `
    <img src="./img/factions/logo_rhodes.png" width="40" height="40" style="transform:scale(1.2,1.2)translate(-8px,1px)"class="d-inline-block align-top" alt="">
        <a class="navbar-brand" href="index.html" translate-id="topbar-1">Arknights Toolbox</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="展开">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul class="navbar-nav">
                    ${navDropdown.join("")}
                    
                    
                </ul>
            <ul class="navbar-nav ml-auto">
                <li>
                    <a href='https://ko-fi.com/T6T41D433' target='_blank'><img height='36' style='border:0px;height:33px;margin-top:10px; margin-right: 10px;' src='https://az743702.vo.msecnd.net/cdn/kofi2.png?v=2' border='0' alt='Support Us on Ko-fi.com' /></a>
                </li>

                <li class="nav-item dropdown" id="navitemRegion">
                        <a class="nav-link dropdown-toggle" style="display:inline-flex;padding-left:25px;"href="#" id="regionDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" >
                                <div class="ak-subtitle ak-disable" translate-id="language-1">Server</div>
                                <div class="ak-disable" id="display-reg">${reg.toUpperCase()}</div>
                        </a>
                        
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item reg unselectable" onclick="regDropdown($(this))" value="cn">Chinese</a>
                            <a class="dropdown-item reg unselectable" onclick="regDropdown($(this))" value="en">English</a>
                            <a class="dropdown-item reg unselectable" onclick="regDropdown($(this))" value="jp">Japanese</a>
                            <a class="dropdown-item reg unselectable" onclick="regDropdown($(this))" value="kr">Korean</a>
                        </div>
                    </li>
                <li class="nav-item dropdown" id="navitemLanguage">
                    <a class="nav-link dropdown-toggle" style="display:inline-flex;padding-left:25px"href="#" id="languageDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <div class="ak-subtitle ak-disable" translate-id="language-2">Language</div>
                            <div class="ak-disable" id="display-lang">`+langText+`</div>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item lang unselectable" onclick="langDropdown($(this))" value="en">English</a>
                        <a class="dropdown-item lang unselectable" onclick="langDropdown($(this))" value="cn">Chinese</a>
                        <a class="dropdown-item lang unselectable" onclick="langDropdown($(this))" value="jp">Japanese</a>
                        <a class="dropdown-item lang unselectable" onclick="langDropdown($(this))" value="kr">Korean</a>
                    </div>
                </li>
            </ul>
        </div>
    `
    $('#aknav').html(html)
});
