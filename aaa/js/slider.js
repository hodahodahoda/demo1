let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');
const totalImages = images.length;
const slider = document.querySelector('.slider');

function updateSlider() {
  const containerWidth = document.querySelector('.slider-container').clientWidth; // スライダーコンテナの幅を取得
  const imageWidth = images[0].clientWidth; // 各画像の幅を取得

  // アクティブ画像を中央に配置するための計算
  const translateXValue = -(currentIndex * imageWidth) + (containerWidth / 2 - imageWidth / 2); // 中央揃え
  
  slider.style.transform = `translateX(${translateXValue}px)`;

  // クラスの管理
  images.forEach((img, index) => {
    img.classList.remove('prev', 'active', 'next');

    if (index === currentIndex) {
      img.classList.add('active');
    } else if (index === (currentIndex - 1 + totalImages) % totalImages) {
      img.classList.add('prev');
    } else if (index === (currentIndex + 1) % totalImages) {
      img.classList.add('next');
    }
  });
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % totalImages;  // 次の画像に移動。最後の画像の次は最初に戻る
  updateSlider();
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;  // 前の画像に移動。最初の前は最後の画像に戻る
  updateSlider();
}

// 初期化処理で最初にスライダーを中央に設定
window.addEventListener('load', () => {
  updateSlider();  // 初回ロード時にスライダーを正しい位置に設定
});

// 5秒ごとに画像を切り替え
setInterval(showNextImage, 5000);