const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "人生就像过山车（DJ版）",
        artist: '艾丽娅琪琪格',
        url: 'http://www.ytmp3.cn/down/56741.mp3',
        cover: 'http://img.ytmp3.cn/image/79.jpg',
      },
      {
        name: '给我一个理由忘记(现场版)',
        artist: 'A-Lin-',
        url: 'http://www.ytmp3.cn/down/31366.mp3',
        cover: 'http://img.ytmp3.cn/image/81.jpg',
      },
      {
        name: '我用所有报答爱(现场版)',
        artist: '张靓颖',
        url: 'http://www.ytmp3.cn/down/31369.mp3',
        cover: 'http://img.ytmp3.cn/image/28.jpg',
      },
	  {
        name: '飞得更高',
        artist: '汪峰',
        url: 'http://www.ytmp3.cn/down/56738.mp3',
        cover: 'http://img.ytmp3.cn/image/9.jpg',
      },
	  {
        name: '很任性 (吉特巴版)',
        artist: '千百顺',
        url: 'http://www.ytmp3.cn/down/56730.mp3',
        cover: 'http://img.ytmp3.cn/image/89.jpg',
      }
    ]
});
