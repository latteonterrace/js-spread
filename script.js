
// 배열 복사 
const copyArray = () => { 
    let arr1 = [ 1,2,3];
    // 참조가 아닌 복사 
    let arr2 = [...arr1, 4,5,6];
    console.log(arr2); // [1,2,3,4,5,6]
};
// 문자열 배열로 
const stringToArray = () => { 
    let str1 = 'hello'; 
    let str2 = [...str1];
    console.log(str2);   // ["h","e","l","l","o"]
}

// 배열 병합
const mergeArray = () => {
    let arr1 = [ 1,2,3];
    let arr2 = [4,5,6];
    let arr3 = [...arr1, ...arr2];
    console.log(arr3);  // [1,2,3,4,5,6]
}

// 함수에서의 spread operator
// 함수에서는 rest parameter라고 부른다. 
// 파라미터를 배열로 넣는다. 
const sum = (...rest) => {
    let sum = 0; 
    for(let i of rest) {
        sum += i;
    }
    return sum; 
};

window.addEventListener('load', () => { 
    // 배열 복사 
    document.querySelector("#copy-array").addEventListener('click' , copyArray);
    document.querySelector("#string-to-array").addEventListener('click' , stringToArray);
    document.querySelector("#merge-array").addEventListener('click' , mergeArray);
    document.querySelector("#rest-param").addEventListener('click' , () => {
        console.log(sum(1));    // 1
        console.log(sum(1,2)); // 3
        console.log(sum(1,2,3));  // 6
    });
    document.querySelector("#math-min-old").addEventListener('click' , () => {
        console.log(Math.min(1,2,3));   // 1
    });

    document.querySelector("#math-min-new").addEventListener('click' , () => {
        let arr = [1,2,3];
        console.log(Math.min(...arr));   // 1
    });

    document.querySelector("#math-min-map").addEventListener('click' , () => {
        let arr = [ { userId: "1", age: 10}  ,{ userId: "2", age: 3} , { userId: "3", age: 25}]
        let minVal = Math.min(...arr.map( (item) => item.age));
        console.log(minVal); // 3
    });
    
    document.querySelector("#merge-props").addEventListener('click' , () => {
        const userA = { 
            name : 'Kim'
        }
        const userB = {
            ...userA, 
            age :10 
        }
        const userC = { 
            ...userB, 
            id: 'userC'
        }
        console.log(userC);  //{"name":"Kim","age":10,"id":"userC"}

        
    });
    

});