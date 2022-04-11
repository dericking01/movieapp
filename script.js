     //first page
 let profileIcons = document.querySelector("#profile_icons")
 let netflixHeadImage = document.querySelector(".netflix_headimg")
 let netflixLoader = document.querySelector(".load_img")
 function hideShow(){
     setTimeout(()=>{
        netflixLoader.style.display="none"
         setTimeout(()=>{
        netflixHeadImage.style.display="block"
        setTimeout(()=>{
        profileIcons.style.opacity="1" 
     }, 1000)
     }, 1000)
     }, 5000)
 }
 hideShow();
 let mainPage = document.querySelector("main")
 let hideprofile =()=>{
     setTimeout(()=>{
      profileIcons.style.display="none"
      netflixHeadImage.style.display="none"
      setTimeout(()=>{
           mainPage.style.display="block"
      },1000)
     },1600)
 }
 profileIcons.addEventListener("click", hideprofile)
 
 
  //my container for movie pic names and language
     
     // function for picture display
    
     const initiate = async()=>{
       let url = await axios.get(" https://api.tvmaze.com/shows")
       // looping for images.
            for(let urls of url.data){
             let items = Object.entries(urls)
             let images = items[19]
             let genres = items[5]
             //console.log(all images)
             let allmyimages = images[1].medium
             let allgenres = genres[1]
             
            //my filter all drama 
 
         let ans =    allgenres.filter((data)=>{
                let result =   data[0]=== "H"
                return result
             })
             // console.log(ans)
         //creating subcontainer for appending all images names,language,photos, movie Title , genres
         let mainBox = document.querySelector("#contents")
         let innerbox = document.createElement("div")
         mainBox.append(innerbox)
      //=========================================
 
      //my container for my image element
        let imgBox = document.createElement("img")
        imgBox.src = allmyimages;
        innerbox.append(imgBox)
        imgBox.classList.add("General_pics")  
     }
   }
   // function to call onload
 initiate();
 
 //function change background image
 let text = document.querySelector("#header_imageText")
 let imgBox = document.querySelector(".header_image")
 let today = new Date();
 let hours = today.getHours();
 if (hours > 12){
   hours = hours - 12;
 }
 if (hours === 1){
   imgBox.style.background= "url('https://static.tvmaze.com/uploads/images/medium_portrait/45/113952.jpg')"
   imgBox.style.backgroundRepeat="no-repeat"
   imgBox.style.backgroundSize="cover"
 }else if (hours === 2){
   imgBox.style.background= "url('https://static.tvmaze.com/uploads/images/medium_portrait/268/671010.jpg')"
   imgBox.style.backgroundRepeat="no-repeat"
   imgBox.style.backgroundSize="cover"
   text.innerHTML="The Good Lord Bird"
   text.style.textTransform="uppercase"
   text.style.letterSpacing="4px"
 }else if (hours === 3){
   imgBox.style.background= "url('https://static.tvmaze.com/uploads/images/medium_portrait/396/990803.jpg')"
   imgBox.style.backgroundRepeat="no-repeat"
   imgBox.style.backgroundSize="cover"
   text.innerHTML="The Walking Dead"
   text.style.textTransform="uppercase"
   text.style.letterSpacing="4px"
 }else if (hours === 4){
   imgBox.style.background= "url('https://static.tvmaze.com/uploads/images/medium_portrait/397/994954.jpg')"
   imgBox.style.backgroundRepeat="no-repeat"
   imgBox.style.backgroundSize="cover"
 }else if(hours === 5){
   imgBox.style.background= "url('https://static.tvmaze.com/uploads/images/medium_portrait/168/420194.jpg')"
   imgBox.style.backgroundRepeat="no-repeat"
   imgBox.style.backgroundSize="cover"
   text.innerHTML="Boss Baby"
   text.style.marginTop="280px"
 }else if(hours === 6){
   imgBox.style.background= "url('https://static.tvmaze.com/uploads/images/medium_portrait/55/139159.jpg')"
   imgBox.style.backgroundRepeat="no-repeat"
   imgBox.style.backgroundSize="cover"
   text.innerHTML="Merlin"
   text.style.textTransform="uppercase"
   text.style.letterSpacing="4px"
 }else if(hours === 7){
   imgBox.style.background= "url('https://static.tvmaze.com/uploads/images/medium_portrait/186/465817.jpg')"
   imgBox.style.backgroundRepeat="no-repeat"
   imgBox.style.backgroundSize="cover"
   text.innerHTML="Into The Badlands"
   text.style.marginTop="280px"
   text.style.color="maroon"
 }else if(hours === 8){
   imgBox.style.background= "url('https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg')"
   imgBox.style.backgroundRepeat="no-repeat"
   imgBox.style.backgroundSize="cover"
 }else if(hours === 9){
   imgBox.style.background= "url('https://static.tvmaze.com/uploads/images/medium_portrait/170/426759.jpg')"
   imgBox.style.backgroundRepeat="no-repeat"
   imgBox.style.backgroundSize="cover"
 }else if(hours === 10){
   imgBox.style.background= "url('https://static.tvmaze.com/uploads/images/medium_portrait/357/894754.jpg')"
   imgBox.style.backgroundRepeat="no-repeat"
   imgBox.style.backgroundSize="cover"
 }else if(hours === 11){
   imgBox.style.background= "url('https://static.tvmaze.com/uploads/images/medium_portrait/23/58440.jpg')"
   imgBox.style.backgroundRepeat="no-repeat"
   imgBox.style.backgroundSize="cover"
 }else if(hours === 12){
   imgBox.style.background= "url('https://static.tvmaze.com/uploads/images/medium_portrait/28/70308.jpg')"
   imgBox.style.backgroundRepeat="no-repeat"
   imgBox.style.backgroundSize="cover"
   text.innerHTML="Amazing Spider Man"
   text.style.color="yellow"
 }else if(hours === 0){
   imgBox.style.background= "url('https://static.tvmaze.com/uploads/images/medium_portrait/3/9024.jpg')"
   imgBox.style.backgroundRepeat="no-repeat"
   imgBox.style.backgroundSize="cover"
   text.innerHTML="Sinbad"
 }
 
 //remove main page
 let filmDiscovery = document.querySelector("#find_film")
 let searches = document.querySelector(".topSearch")
 let form = document.querySelector("#second_searchBox")
 let bdy =document.querySelector("main")
 let search = document.querySelector("#search_icon") 
 function runIcon(){
   setTimeout(()=>{
     bdy.style.opacity= 0.3;
     setTimeout(()=>{
       bdy.style.display="none"
       setTimeout(()=>{
           searches.style.opacity="1"
           form.style.opacity="1"
            setTimeout(()=>{
           form.style.display="block"
         searches.style.display="block"
         },1000)
       }, 1000)
     }, 1000)
   },1000)  
 }
 search.addEventListener("click", runIcon)
 
     function backArrow(){
            setTimeout(()=>{
             searches.style.opacity="0.3"
             form.style.opacity="0.3"
             filmDiscovery.style.opacity="0.3"
             setTimeout(()=>{
               searches.style.display="none"
             form.style.display="none"
            filmDiscovery.style.display="none"
             setTimeout(()=>{
              bdy.style.opacity="1"
              bdy.style.display="block"
             },1000)
             },1000)
         },1000)
     }
 
 let general = document.querySelector("#second_searchBox")
 general.addEventListener("click",  async(e)=>{
   e.preventDefault();
   let inp = document.querySelector("#input_one").value;
   let userSearch = inp
   let url = await axios.get(`https://api.tvmaze.com/search/shows?q=${userSearch}`)
   userSearch = general.elements.input_one.value=""
   // looping for images.
       for (let i=0; i < url.data.length; i++){
         let films = url.data[i].show.image.medium
          let names = url.data[i].show.name
         let genres = url.data[i].show.genres
         let languages = url.data[i].show.language
     
          //creating subcontainer
          let mainBox = document.querySelector("#find_film")
          let innerbox = document.createElement("div")
          mainBox.style.display="flex"
          mainBox.append(innerbox)
       
         let imgBox = document.createElement("img")
         imgBox.src = films;
         imgBox.style.padding="10px"
         imgBox.style.borderRadius="20px"
         imgBox.style.width="190px"
         innerbox.append(imgBox)
         
        let namesBox = document.createElement("p")
         namesBox.innerHTML = `Movie Title  =  ${names}`;
         innerbox.append(namesBox)
  
        let genresBox = document.createElement("p")
        genresBox.innerHTML = ` Genres: = ${genres}`;
        innerbox.append(genresBox)
       
        if(genres.length === 0){
          genresBox.innerHTML = " Genres: =  Not found."
        }else{
          //ignored...
        }
        let languageBox = document.createElement("p")
        languageBox.innerHTML = languages;
        languageBox.style.color= "white"
        innerbox.append(`language = ${languages}`)
  
        if(languages.length === 0){
          languageBox.innerHTML = " Language: =  Not found."
        }else{
          //ignored...
        }
        }
     })