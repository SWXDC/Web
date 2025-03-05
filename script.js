// 打字機效果：將簡介文字內容逐字顯示
var text = "歡迎來到《第五莊園》Discord 群組！";  // 要顯示的完整文字
var i = 0;
var speed = 100;  // 每個字出現的速度（毫秒）
var introElement = document.getElementById("introText");

function typeWriter() {
  if (i < text.length) {
    introElement.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    // 當文字全部出現後，顯示 Discord 按鈕
    document.getElementById("discordButton").style.opacity = 1;
  }
}

// 啟動打字效果
typeWriter();
