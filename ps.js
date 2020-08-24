function solution(n) {
    var times = parseInt(n/2);
    var remains = n % 2;
    var answer = '';
    var watermelon = '수박';
    var waterm = '수'
    for (var i = 0; i < times; i++){
        answer.concat(watermelon);
        console.log(answer)
    }
    if (remains == 1) {
        answer.concat(waterm);
    }
    return answer;
}
solution(4);