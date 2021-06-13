//add
var FromFather = 3000;
var FromMother = 1500;
var FromTuition = 12000;

var sum = FromFather + FromMother + FromTuition;

var PocketBalance = sum;
console.log("Pocket Balance :" + PocketBalance);

//subtraction
var ForMySaving = 16490;

var sub = sum - ForMySaving;

var ForDateWithGF = sub;
console.log("Money for date :" + ForDateWithGF);

//if,else condition
 ForDateWithGF = 10;

var RadissonBlu = 5000;
var MamarDokan = 50;

if(ForDateWithGF > RadissonBlu){
    console.log("cholo gure achi");
}
    else if(ForDateWithGF > MamarDokan){
        console.log("Mamar dokane jai");
}
    else{
        console.log("amr pet betha korche bashai chole jabo");
}

//array
var BazarList1 = ['murgi','alu','potol','kochu','shim',];
var BazarList2 = ['roshun','lobon',];

var BazarList = BazarList1.concat(BazarList2);  //concat two array
console.log("Bazar List :"  +  BazarList);

BazarList.push('tel','zira');  //push-item
console.log("Bazar List :" +  BazarList);

BazarList.pop('zira');  //pop-item
console.log("Bazar List :" + BazarList);

BazarList.shift('murgi');  //shift-item
console.log("Bazar List :" + BazarList);

BazarList.unshift('mach'); //unshift-item
console.log("Bazar List :" + BazarList);

var NewBazarList = BazarList.splice(4); //splice-item,array
console.log("Bazar List :" + BazarList);
console.log("New Bazar List :" + NewBazarList);



