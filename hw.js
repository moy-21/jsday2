// Question1 
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"

let dog_names = ["Max","HAS","PuRple","dog"]


const dogNames = (strn , li) => {

    strn = strn.split(' ')
    for(let word of strn){
        if(word.slice(-1) == ','){
            word.slice(-1)
            word  = word.replace(',', '');
            console.log(word);
        }else{return console.log(word)}
    }
    // let names = strn.forEach((name_)=>nams.push(name_))
    
}
console.log(dogNames(dog_string, dog_names))

// Question2 
let arr1 = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
const newArr = arr => {
    let newList = arr.map(
        (na)=>{
            if (arr.indexOf(na) % 2 == 0) {
                return 'even number index';
            }else{
                return na;
            };
        }
    );
    return newList.toString();
}

console.log(newArr(arr1))
