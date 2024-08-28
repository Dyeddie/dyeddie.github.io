var posts=["20240401/","20240402/","20240601/","20240602/","20240801/","20240802/","20240803/","20240804/","20240805/","20240806/","20240807/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };