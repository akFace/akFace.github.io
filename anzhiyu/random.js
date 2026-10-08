var posts=["p/54508/","p/44920/","p/63569/","p/54172/","p/43541/","p/31508/","p/16442/","p/64817/","p/37306/","p/49606/","p/36150/","p/38528/","p/22862/","p/1441/","p/42314/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };