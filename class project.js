document.getElementById('demo2').addEventListener('click',function() {
    var month = document.getElementById('demo').value;
    var year = document.getElementById('demo1').value;
    debugger

    //   var month=5;
    //  var year=2020;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c40f88eed9msh4bcae0c39e832dfp12ac3bjsn1928a168ce26',
		'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        }
    };
    let url = 'https://hapi-books.p.rapidapi.com/month/'+year+'/'+month;

    fetch(url, options);

        //.then(response => {
        //     response.json();
        //     console.log(response);
        //     debugger
        // })
        // .then(response => )
        // .catch(err => console.error(err));


 });
