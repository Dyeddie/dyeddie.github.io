var posts=["20240401/","20240402/","20240601/","20240602/","20240603/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };