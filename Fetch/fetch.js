fetch('https://api.seatgeek.com/2/events?q=amway-center&client_id=MTI3NjI2NjF8MTUzNDYxMjQ1MS4zNA')
    .then(function(response){
    return response.json();
  }).then(function(response){
      console.log(response);
  })