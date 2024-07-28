const images = ['0.jpeg', '1.jpeg', '2.jpeg'];
const chosenImage = images[Math.floor(Math.random() * images.length)];

// body 요소에 배경 이미지 스타일 추가
document.body.style.backgroundImage = `url(${chosenImage})`;
document.body.style.backgroundSize = 'cover'; // 배경 이미지가 전체 화면을 덮도록 설정
document.body.style.backgroundPosition = 'center'; // 배경 이미지의 위치를 중앙으로 설정
document.body.style.backgroundRepeat = 'no-repeat'; // 배경 이미지 반복 방지
