function countSheeps(list) {
    const sheepCount = list.filter(sheep => sheep === true).length;
    if (sheepCount > 0) {
        console.log(`There are ${sheepCount} sheep in total`);
    } else {
        console.log("OOPS!!! Wolves have eaten all the sheep");
    }
}


const sheepList1 = [ true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ]
countSheeps(sheepList1);
const sheepList2 = [ false, false, false ]
countSheeps(sheepList2);
