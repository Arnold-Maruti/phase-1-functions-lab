// Code your solution in this file!
function distanceFromHqInBlocks(street){
    return Math.abs(42-street) ;
}
function distanceFromHqInFeet(feet){
     return distanceFromHqInBlocks(feet)*264;
      
}
function distanceTravelledInFeet(start,destination){
    return Math.abs(destination-start)*264;
}
function  calculatesFarePrice(start,destination){
    let distance= distanceTravelledInFeet(start,destination);
    if (distance<=400){
        return distance*0
    } else if(distance<=2000){
        return 2.56;
    }  else if (distance<=2500){
        return 25;
    } else if(distance>2500){
        return `cannot travel that far`
    }
}