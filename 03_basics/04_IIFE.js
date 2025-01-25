//Immediately Invoked Function Expression
(function dbConnect(){
    //named IIfe
    console.log("DB Connected");
})();
// dbConnect()

( (name) =>{
    console.log(`db connected two ${name}`);
} )('Pratiksha')