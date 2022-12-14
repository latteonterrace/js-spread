# Spread Operator

스프레드 연산자(Spread Operator)를 사용하면 배열, 문자열, 객체 등 반복 가능한 객체 (Iterable Object)를 개별 요소로 분리할 수 있습니다. 

## 배열 복사 
간단히 배열을 복사하는 방법을 살펴봅니다.  

```jsx
// 배열 복사 
const copyArray = () => { 
    let arr1 = [ 1,2,3];
    // 참조가 아닌 복사 
    let arr2 = [...arr1, 4,5,6];
    console.log(arr2); // [1,2,3,4,5,6]
};
```


## map 사용 
map을 사용하여 Math.min()을 호출할 수 있습니다. 
```jsx

    document.querySelector("#math-min-map").addEventListener('click' , () => {
        let arr = [ { userId: "1", age: 10}  ,{ userId: "2", age: 3} , { userId: "3", age: 25}]
        let minVal = Math.min(...arr.map( (item) => item.age));
        console.log(minVal); // 3
    });
```    


## 문자열을 배열로 
문자열을 배열로 변환하는 방법을 살펴 보겠습니다. 
```jsx
// 문자열 배열로 
const stringToArray = () => { 
    let str1 = 'hello'; 
    let str2 = [...str1];
    console.log(str2);   // ["h","e","l","l","o"]
}
```

## 배열 병합 

```jsx
// 배열 병합
const mergeArray = () => {
    let arr1 = [ 1,2,3];
    let arr2 = [4,5,6];
    let arr3 = [...arr1, ...arr2];
    console.log(arr3);  // [1,2,3,4,5,6]
}
```

## rest parameter 
함수를 호출할 때 함수의 매개변수(parameter)를 spread operator로 작성한 형태를 Rest parameter라고 합니다. 파라미터를 배열로 넣습니다.  

다음과 같이  sum() 함수를 작성합니다. 
```jsx
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
```
이렇게 호출 할 수 있습니다. 
```jsx
    document.querySelector("#rest-param").addEventListener('click' , () => {
        console.log(sum(1));    // 1
        console.log(sum(1,2)); // 3
        console.log(sum(1,2,3));  // 6
    });
```
## 함수 호출 인자로 사용 
함수를 호출할 때 sprad operator를 사용할 수 있습니다.  

아래는 예전 방식입니다. 

```jsx
    document.querySelector("#math-min-old").addEventListener('click' , () => {
        console.log(Math.min(1,2,3));   // 1
    });
```    

## map 사용

이것을 spread opeator를 사용하여 할 수 있습니다. 
```jsx
    document.querySelector("#math-min-new").addEventListener('click' , () => {
        let arr = [1,2,3];
        console.log(Math.min(...arr));   // 1
    });
```


## 객체 속성 병합 
두 개의 객체를 합하는 것을 spread oprator를 사용하여 간단히 할 수 있습니다. 
```jsx
 
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
```    



