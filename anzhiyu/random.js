var posts=["20240401/","20240402/","20240601/","20240602/","20240801/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };