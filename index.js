var rect = require('./rectangle');

function solveRect(l,b){
    console.log("Solving for Rectangle with l = " + l + "and b = " + b);

    if(l<=0 || b<= 0)
    {
        console.log("Rectangle dimension should be grater than zero");
        
    } else {
        console.log("The area is " + rect.area(l,b));
        console.log("The perimeter is " + rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(0,5);
solveRect(-3,0);