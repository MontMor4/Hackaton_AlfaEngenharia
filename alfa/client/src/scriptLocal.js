function success(pos){
    console.log(pos);
}

navigator.geolocation.getCurrentPosition(success);