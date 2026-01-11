var posts=["p/42314/","p/54508/","p/44920/","p/54172/","p/43541/","p/64817/","p/49606/","p/36150/","p/1441/","p/16442/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };