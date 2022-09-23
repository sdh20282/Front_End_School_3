var num = 1;

var q = {
    1: {'title': '문제 1번', 'type': 'EI', 'A': 'E', 'B': 'I'},
    2: {'title': '문제 2번', 'type': 'EI', 'A': 'E', 'B': 'I'},
    3: {'title': '문제 3번', 'type': 'EI', 'A': 'E', 'B': 'I'},

    4: {'title': '문제 4번', 'type': 'SN', 'A': 'S', 'B': 'N'},
    5: {'title': '문제 5번', 'type': 'SN', 'A': 'S', 'B': 'N'},
    6: {'title': '문제 6번', 'type': 'SN', 'A': 'S', 'B': 'N'},

    7: {'title': '문제 7번', 'type': 'TF', 'A': 'T', 'B': 'F'},
    8: {'title': '문제 8번', 'type': 'TF', 'A': 'T', 'B': 'F'},
    9: {'title': '문제 9번', 'type': 'TF', 'A': 'T', 'B': 'F'},
    
    10: {'title': '문제 10번', 'type': 'JP', 'A': 'J', 'B': 'P'},
    11: {'title': '문제 11번', 'type': 'JP', 'A': 'J', 'B': 'P'},
    12: {'title': '문제 12번', 'type': 'JP', 'A': 'J', 'B': 'P'}
};

var result = {
    'ISTJ': {'animal': "하마", 'explain': "하마 설명", 'img': './images/lion.jpg'},
    'ISFJ': {'animal': "부엉이", 'explain': "부엉이 설명", 'img': './images/lion.jpg'},
    'INFJ': {'animal': "물소", 'explain': "물소 설명", 'img': './images/lion.jpg'},
    'INTJ': {'animal': "치타", 'explain': "치타 설명", 'img': './images/lion.jpg'},

    'ISTP': {'animal': "나무늘보", 'explain': "나무늘보 설명", 'img': './images/lion.jpg'},
    'ISFP': {'animal': "거북이", 'explain': "거북이 설명", 'img': './images/lion.jpg'},
    'INFP': {'animal': "코끼리", 'explain': "코끼리 설명", 'img': './images/lion.jpg'},
    'INTP': {'animal': "침팬지", 'explain': "침팬지 설명", 'img': './images/lion.jpg'},

    'ESTP': {'animal': "악어", 'explain': "악어 설명", 'img': './images/lion.jpg'},
    'ESFP': {'animal': "미어캣", 'explain': "미어캣 설명", 'img': './images/lion.jpg'},
    'ENFP': {'animal': "사자", 'explain': "사자 설명", 'img': './images/lion.jpg'},
    'ENTP': {'animal': "태양새", 'explain': "태양새 설명", 'img': './images/lion.jpg'},

    'ESTJ': {'animal': "기린", 'explain': "기린 설명", 'img': './images/lion.jpg'},
    'ESFJ': {'animal': "고릴라", 'explain': "고릴라 설명", 'img': './images/lion.jpg'},
    'ENFJ': {'animal': "카피바라", 'explain': "카피바라 설명", 'img': './images/lion.jpg'},
    'ENTJ': {'animal': "호랑이", 'explain': "호랑이 설명", 'img': './images/lion.jpg'},
};

function start() {
    $('.start').hide();
    $('.question').show();
    next();
}

$('#A').click(function () {
    var type = $('#type').val();
    var prevalue = $('#'+type).val();
    $('#'+type).val(parseInt(prevalue) + 1)
    next();
});

$('#B').click(function () {
    next();
});

function next() {
    if (num == 13) {
        end();
    }
    else {
        $('.progress-bar').attr('style', 'width: calc(100/12*'+num+'%)')
        $('#title').html(q[num]['title']);
        $('#type').val(q[num]['type']);
        $('#A').html(q[num]['A']);
        $('#B').html(q[num]['B']);
        num++;
    }
}

function end() {
    $('.question').hide();
    $('.result').show();

    var mbti = '';

    $('#EI').val() < 2 ? mbti+='I' : mbti+='E';
    $('#SN').val() < 2 ? mbti+='N' : mbti+='S';
    $('#TF').val() < 2 ? mbti+='F' : mbti+='T';
    $('#JP').val() < 2 ? mbti+='P' : mbti+='J';

    alert(mbti);

    $('#img').attr('src', result[mbti]['img']);
    $('#animal').html(result[mbti]['animal']);
    $('#explain').html(result[mbti]['explain']);
}