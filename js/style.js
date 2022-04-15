$('.slider').slick({
  arrows:false,//左右の矢印はなし
  autoplay: true,//自動的に動き出すか
  autoplaySpeed: 0,//自動的に動き出す待ち時間
  speed: 6900,//スライドのスピード
  infinite: true,//スライドをループさせるか
  pauseOnHover: true,//オンマウスでスライドを一時停止させるか
  pauseOnFocus: false,//フォーカスした際にスライドを停止させるか
  cssEase: 'linear',//動き方
  slidesToShow: 2,//スライドを画面に４枚見せる
  slidesToScroll: 1,//１回のスライドで動かす要素数
  responsive: [
    {
     breakpoint:769,//モニターの横幅が769px以下の見せ方
     settings:{
       slidesToShow:2,//スライドを画面に２枚見せる
     }
    },
    {
      breakpoint:426,//モニターの横幅が426px以下の見せ方
      setting:{
        slidesToShow:1.5,//スライドを画面に1.5枚見せる
      }
    }
  ]
});


particlesJS("particles-js",{
  "particles":{
    "number":{
      "value":500,//この数値を変更すると星の数が増減
      "density":{
        "enable":true,
        "value_area":800
      }
    },
    "color":{
      "value":"#ffffff"
    },
    "shape":{
      "type":"circle",//形上はcircleを指定
      "stroke":{
        "width":0
      },
    },
    "opacity":{
      "value":1,//シェイプの透明度
      "random":true,//シェイプの透明度をランダムにする
      "anime":{
        "enable":true,//シェイプの透明度をアニメーション
        "speed":3,//アニメーションのスピード
        "opacity_min":0,//透明度の最小値０
        "sync":false//全てを同時にアニメーションさせる
      }
    },
    "size":{
      "value":2,
      "random":true,
      "anim":{
        "enable":false,
        "speed":4,
        "size_min":0.3,
        "sync":false
      }
    },
    "line_linked":{
      "enable":false,
    },
    "move":{
      "enable":true,
      "speed":120,//この数値を小さくするとゆっくりになる
      "direcrtion":"none",//方向指定なし
      "random":true,//動きをとどめる
      "straight":true,//動きをとどめる
      "out_mode":"out",
      "bounce":false,
      "attract":{
        "enable":false,
        "rotateX":600,
        "rotateY":600
      }
    }
  },
  "interactivity":{
    "detect_on":"canvas",
    "events":{
      "onhover":{
        "enable":false,
      },
      "resize":true
    }
  },
  "retina_detect":true
});
  

  

