const url = `https://api.thecatapi.com/v1/breeds`;
// Here put your API key
const api_key = "";

// api_key
function  getBreeds(callback){
  fetch(url, {
    headers: {
      "x-api-key": api_key
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    let breeds = document.querySelector("#breed_selector");
    let cards = document.querySelector(".cards-carousel");
    cards.innerHTML = "";
    breeds.innerHTML = "";
    let counter=0;
    let option = document.createElement("option");
    option.value = "all";
    option.text = "All breeds";
    breeds.appendChild(option);

    data.forEach(breed => {
       
        let url = breed?.image?.url;
        if (!url){
            url="../assets/images/No_Image_Available.jpg";
        }   
        
        
      let card=`
      <li class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                        <img src="${url}"
                             alt="profile" 
                            class="cat-image">
                        <div class="card-content">
                            <p>
                            <h3 class="cat-title">${breed.name}</h3>
                            <p>
                            <h3 class="cat-temperament">${breed.temperament}</h3>
                            
                        </div>
                </div>
                <div class="flip-card-back">
                    <h1>${breed.name}</h1>
                    <p>${breed.description}</p>
                <div>
            </div>
      </li>
      `;
      cards.innerHTML += card;
      counter++;
      
      let option = document.createElement("option");
      option.value = breed.id;
      option.text = breed.name;
      breeds.appendChild(option);
       if (typeof(callback) === "function"){
          callback();
        }
      //console.log(breed);
      //breed.id
      //breed.name
    });
    


  }).catch(error => {
    console.error(error);
  });
};





let breeds = document.querySelector("#breed_selector");

breeds.addEventListener("change", function(){
  let breed_id = breeds.value;
  
  
 if (breed_id === "all"){
    getBreeds();
    return;
  }

  let url = `https://api.thecatapi.com/v1/images/search?limit=25&breed_ids=${breed_id}`;
  fetch(url, {
    headers: {
      "x-api-key": api_key
    }
  }).then(response => {
    return response.json();
  }).then(data => {
   
    let cards = document.querySelector(".cards-carousel");
    cards.innerHTML = "";
    let counter=0;
    
    data.forEach(catimage => { 
    
      let url = catimage?.url;
        if (!url){
            url="../assets/images/No_Image_Available.jpg";
        }   
            let breedName = catimage.breeds[0].name;
           let card=`
            <li class="flip-card">
                  <div class="flip-card-inner">
                      <div class="flip-card-front">
                              <img src="${url}"
                                  alt="profile" 
                                  class="cat-imageLarge">
                              <div class="card-content">
                                  
                              </div>
                      </div>
                      <div class="flip-card-back">
                            <h1>${breedName}</h1>
                            <p>${catimage.breeds[0].description}</p>
                            <h3> ${ catimage.breeds[0].temperament} </h3>
                            <p> Origin: ${ catimage.breeds[0].origin} </p>
                            <p> Life Span: ${ catimage.breeds[0].life_span} years </p>
                            <p> Adaptability: ${ catimage.breeds[0].adaptability} 
                             Affection Level: ${ catimage.breeds[0].affection_level} </p> 
                            <p> Child Friendly: ${ catimage.breeds[0].child_friendly} 
                             Dog Friendly: ${ catimage.breeds[0].dog_friendly} </p>
                            <p> Energy Level: ${ catimage.breeds[0].energy_level} </p>
                            <p> Wikipedia url : <a target="_blank" href="${catimage.breeds[0].wikipedia_url}">${breedName} </a> </p>
                          
                      <div>
                  </div>
            </li>
            `;
            cards.innerHTML += card;
            counter++;
       
    }
    );
    
  }).catch(error => {
    console.log(error);
  }); 
});


getBreeds(()=>{
    const carousel= document.querySelector(".cards-carousel");
    const left = document.querySelector("#left");
    const right = document.querySelector("#right");
    
    const firstCardWidth = carousel.querySelector(".flip-card").offsetWidth;
    
    left.addEventListener("click", function(){
      
      carousel.scrollLeft -= firstCardWidth;
      //alert("left");
    });
    
    right.addEventListener("click", function(){
        carousel.scrollLeft += firstCardWidth;
        //alert("right");
    });
    
});








