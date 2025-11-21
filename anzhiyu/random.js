var posts=["2025/11/21/writeup/2025-11-21-CISCN_2021_初赛_silverwolf/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };