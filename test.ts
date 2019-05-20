// alert ("Привет!");
// let zapros=prompt("ВВедите число!");
// console.log(zapros);


// function aaa(a:number, b:string):number{
//     let result: number=0;
//     switch(b) {
//         case '':
//             result -= a;
//             break;
//         default:
//             result -= a;
//     }
// }

// Определение классов в TS напомминftn Классический ООП

class SomeClass {
    a: number;
    b: string;
    c: boolean;
    constructor(inputValue:boolean){
        this.c=inputValue;
    }

    setA(value: number){
        this.a = value? value :0;
    }
    getA():number{
        return this.a;
    }
}


let aba = new SomeClass(true);

aba.setA(3);
aba.b="2";
aba.c=false;

class SomeOtherClass extends SomeClass{
    d:number[];
    
}
// class SomeOtherClass {
//     a: number;
//     b: string;
//     c: boolean;
//     constructor(inputValue:boolean){
//         this.c=inputValue;
//     }

//     setA(value: number){
//         this.a = value? value :0;
//     }
//     getA():number{
//         return this.a;
//     }
// }


// let abb = new SomeClass(true);

// aba.setA(3);
// aba.b="2";
// aba.c=false;

interface SomeInterface{
    a:string;
    b:string;
    trickyContact(left:string,right:string):boolean;
      
    }

    class new implements SomeInterface{
        
    }