/*
[함수 예고]
코드를 정리하는 방법 중 하나라고 감 잡기

head에 script태그를 써서 함수를 선언하는 예제를 따라했다.
이런 방식으로 함수를 쓰면, 유지보수 용이성이 극단적으로 향상된다.
    그런데, 사실 꼭 <head>에만 붙여넣어야 하는 것은 아니란다.
*/


/*
[함수]
함수를 이론적으로 정리
나중에 객체 배우고 나서는 함수를 method라고 부르기도 한다.

반복되는 것에 대해 반복문을 쓸 수 없는 경우가 있다.
연속적이지 않게 반복되는 경우.
이럴 때 함수를 사용해서 반복되게 한다.

((기본 문법 내용은 ex9_function.html 파일 참고!))
*/


/*
[함수: 매개변수와 인자]
함수는 입출력으로 이루어져있다.
입력: parameter 매개변수 & argument 인자
출력: return

입력값에 따라 함수가 다른 결과를 출력하게 만들기 위해 사용!

 function sum(left, right){
    document.write(left+right+'<br>');
} //함수 선언 중, sum 옆 ()속에 써있는 값이 매개변수.parameter이다.
sum(2,3); //함수 실행 시 ()속에 있는 값은 인자. argument
sum(4,6);
*/


/*
[함수(리턴)]
*표현식 expression이란 무엇인가?
    1+1은 2에 대한 표현식.
    2-1도 1에 대한 표현식.
    1===1은 true 값에 대한 표현식.

매개변수 값을 return을 통해 출력함으로써 다양한 용도로 함수 활용할 수 있게 된다.
===매우매우 중요한 개념!
*/


/*
[함수의 응용]
(함수로 코드 바꾸기!)
*복습*
    동작하는 내용은 똑같은데 코드를 효율적으로 바꾸는 것 === 리팩토링 refactoring
리팩토링의 중요한 대상, 수단 중 하나가 함수이다.

handler는 관습적으로 쓰인다. (아 그래서 노마드JS에서도 handler를 쓴거구나.)
*/


/*
[객체예고]
Object.
매우 중요하지만 굉장히 어렵다.

프로그래밍의 큰 산 두 가지, 함수와 객체.
객체는 함수라는 기반 위에 존재하는 개념이다.

객체 역시 정리정돈의 수단이다.
함수도 변수도 많아지면, too복잡해진다.

"이런 한계 상황에서 연관된 함수와 연관 변수를 같은 이름으로 그룹화 하여 정리정돈하는 도구."
위의 문장, 이고잉님의 '단 하나의 객체 설명'을 이해하고 고고!
    객체에 대한 다른 내용들은 앞으로 쭉 학습해나가면서 보면 됨!
    일단 하나를 제대로 이해!
    '함수, 연관변수 등등을 담는 폴더 내지는 디렉토리같은 것'이라고 우선 이해하고 고고!
객체 잘 다루는 개발자 되기!!!

set은 설정하다 라는 의미로 프로그래밍에서 많이 쓰인다.

한 줄이라고 해도 의미가 불명확하거나, 시간 지나면 의미 파악이 어려울 경우, 함수에 의해 로직을 부여하는 것이 좋은 전략이다.
    eg) body 일반적 텍스트 색 지정문제

함수명이 중복되면, 뒤에 나오는 놈에 의해 앞에놈이 덮어지면서 앞 함수가 삭제되는 결과가 초래된다!!!
주의!!!
    아 이래서 작명의 고통에 시달린다고 하는구나ㅋㅋㅋㅋㅋㅋ

document도 객체이다!
    document.querySelector()
        여기에서 querySelector는 document에 속해있는 함수.
        객체에 속한 함수는 함수라고 X, method 메소드라고 한다.

*/