// 

// function myFunction() {
//   var name = document.getElementById('food').value.toUpperCase();
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'c40f88eed9msh4bcae0c39e832dfp12ac3bjsn1928a168ce26',
//       'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
//     }
//   };

//   if(name != ""){
//     fetch(`https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${name}`, options)
// .then(response => response.json())
//       .then(response => {
        

//         console.log(response);
//         document.getElementById('Demo').innerHTML= response.items[0].calories;
        
      
//       })
//       .catch(err => console.error(err));
//     }
        
//       else{
//         alert("Please Fill up the Data");
//       }
























    // function myFunction() {
    //   var name = document.getElementById('food').value.toUpperCase();
    //   const options = {
    //     method: 'GET',
    //     headers: {
    //       'X-RapidAPI-Key': 'c40f88eed9msh4bcae0c39e832dfp12ac3bjsn1928a168ce26',
    //       'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
    //     }
    //   };
    
    //   if(name != ""){
    //     fetch(`https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${name}`, options)
    // .then(response => response.json())
    //       .then(response => {
            
    
    //         console.log(response);
    //         document.getElementById('Demo').innerHTML= response.items[0].calories;
            
          
    //       })
    //       .catch(err => console.error(err));
    //     }
            
    //       else{
    //         alert("GALAT");
    //       }
    
    //     }
    
    
    
    
    
    
    
    
    
    
    


    function myFunction() {
      var name = document.getElementById('food').value.toUpperCase();
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'c40f88eed9msh4bcae0c39e832dfp12ac3bjsn1928a168ce26',
          'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
        }
      };
    
      if(name != ""){
        fetch(`https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${name}`, options)
    .then(response => response.json())
          .then(response => {
            
    
            // console.log(response);
            // console.log(response.items[0].carbohydrates_total_g);
            /* var carbs = response.items[0].carbohydrates_total_g; */
            document.getElementById('Sugar').innerHTML= response.items[0].sugar_g;
            document.getElementById('fiber_g').innerHTML= response.items[0].fiber_g;
            document.getElementById('serving_size_g').innerHTML= response.items[0].serving_size_g;
            document.getElementById('sodium_mg').innerHTML= response.items[0].sodium_mg;
            document.getElementById('name').innerHTML= response.items[0].name;
            document.getElementById('potassium_mg').innerHTML= response.items[0].potassium_mg;
            document.getElementById('fat_saturated_g').innerHTML= response.items[0].fat_saturated_g;
            document.getElementById('fat_total_g').innerHTML= response.items[0].fat_total_g;
            document.getElementById('cal').innerHTML= response.items[0].calories;
            document.getElementById('cholesterol_mg').innerHTML= response.items[0].cholesterol_mg;
            document.getElementById('protein_g').innerHTML= response.items[0].protein_g;
            document.getElementById('carbohydrates_total_g').innerHTML= response.items[0].carbohydrates_total_g;

    
          
          })
          .catch(err => console.error(err));
        }
            
          else{
            alert("Please Fill up the Data");
          }
    
        }
      