// var hello = 'Hello World';

// alert(hello);

// var int1 = 1;

// 

// 

// 

// var str1 = 'Hello';
// var str2 = 'World!!';

// alert(str1 + str2);

// var orange = 100
// var apple = 100


// if(orange < apple){
//   alert('みかんの値段がりんごより安い');
// } else if (orange == apple){
//   alert('みかんとりんごの値段が同じ');
// } else{
//   alert('みかんの値段がりんごより高い');
// }

// var max = 100;
// var num = 1;
// var count = 0;

// while(num < max){
//   num = num * 3;
//   count = count + 1;
// }

// alert('1に3を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// var i;
// var num = 0;

// for(i = 1; i < 11; i++){
//   num = num + i;
// }

// alert('1から10までを足し算した結果は' + num + 'です。');

// var alertString;
// alertString = addString("WebCamp");

// alert(alertString);

// function addString(strA){
//   var addStr = "Hello" + strA;
//   return addStr;
// }

// var promptStr = prompt('何か好きな文字を入力してください。');

// alert(promptStr);




// 自分の手を入力
var user_hand = prompt('じゃんけんの手をグー、チョキ、パー、から選んでください。');
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力してください。');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}

// 光の手を決める関数を呼び出すAAAAAAAA
js_hand = getJShand();

// 勝敗を決める関数を呼び出すVVVVVVVVV
var judge = winLose(user_hand, js_hand);

// 結果発表
if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\n光の選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else{
  alert("また、チャレンジしてね。")
}


// 光の手を決める関数を呼び出すAAAAAAAA
function getJShand(){
  var js_hand_num = Math.floor( Math.random() * 3 );

  if(js_hand_num == 0){
    js_hand = "グー";
  } else if(js_hand_num == 1){
    js_hand = "チョキ";
  } else if(js_hand_num == 2){
    js_hand = "パー";
  }

  return js_hand;
}

// 勝敗を決める関数VVVVVVVVVVVV
function winLose(user, js){
  var winLose;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}