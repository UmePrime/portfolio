/*--------------ハンバーガーメニュー-------------*/

function closeDrawer() {
  //チェックボックス要素の取得
  var drawerCheckbox = document.getElementById("drawer_input");
  
  //チェックボックスをオフにしてメニューを閉じる
  if (drawerCheckbox.checked) {
      drawerCheckbox.checked = false;
  }
}

/*--------------------------------------------------*/


/*----------------動画のポップアップ表示--------------------*/

document.addEventListener("DOMContentLoaded", function () {
  const videoModal = document.getElementById("video-modal");
  const videoPlayer = document.getElementById("video-player");
  const thumbnails = document.querySelectorAll(".thumbnail2");
  
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      const videoSrc = this.getAttribute("data-video");
      videoPlayer.src = videoSrc;
      videoPlayer.play();
      videoModal.style.display = "block";
      setTimeout(function (){
        videoModal.style.opacity = 1;  //モーダルをふわっと表示させる
      }, 50);
    });
  });
  
  const closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", function () {
    videoPlayer.pause();
    videoModal.style.opacity = 0;  //モーダルをふわっと表示させる
    setTimeout(function (){
      videoModal.style.display = "none";
    }, 300);  //300ミリ秒後にモーダルを非表示にする(トランジション時間に合わせる)
  });

  videoModal.addEventListener("click", function (event) {
    if (event.target === videoModal) {
      videoPlayer.pause();
      videoModal.style.opacity = 0;  //モーダルをふわっと非表示にする
      setTimeout(function (){
        videoModal.style.display = "none";
      }, 300);  //300ミリ秒後にモーダルを非表示にする(トランジション時間に合わせる)
     }
  });
});

/*----------------*/

document.addEventListener("DOMContentLoaded", function () {
  const videoModal = document.getElementById("video-modal2");
  const videoPlayer = document.getElementById("video-player2");
  const thumbnails = document.querySelectorAll(".thumbnail");
  
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      const videoSrc = this.getAttribute("data-video");
      videoPlayer.src = videoSrc;
      videoPlayer.play();
      videoModal.style.display = "block";
      setTimeout(function (){
        videoModal.style.opacity = 1;  //モーダルをふわっと表示させる
      }, 50);
    });
  });
  
  const closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", function () {
    videoPlayer.pause();
    videoModal.style.opacity = 0;  //モーダルをふわっと表示させる
    setTimeout(function (){
      videoModal.style.display = "none";
    }, 300);  //300ミリ秒後にモーダルを非表示にする(トランジション時間に合わせる)
  });

  videoModal.addEventListener("click", function (event) {
    if (event.target === videoModal) {
      videoPlayer.pause();
      videoModal.style.opacity = 0;  //モーダルをふわっと非表示にする
      setTimeout(function (){
        videoModal.style.display = "none";
      }, 300);  //300ミリ秒後にモーダルを非表示にする(トランジション時間に合わせる)
     }
  });
});
