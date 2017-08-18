// JavaScript Document
var apiurl2='http://10.0.0.254:555/'
var apiurl = 'http://api.enjoykeys.com/';
$(function () {
  jQuery.support.cors = true;
  $(document).on('mouseover mouseout', '.header-nav .morehouse', function (event) {
    event.preventDefault();
    if (event.type == 'mouseover') {
      $('.header-nav .hint').stop().slideDown();
    } else if (event.type == 'mouseout') {
      $('.header-nav .hint').stop().slideUp();
    }
  });
  $(document).on('mouseover mouseout', '.header-nav .cleaning', function (event) {
    if (event.type == 'mouseover') {
      $('.header-nav .baojie').stop().slideDown();
    } else if (event.type == 'mouseout') {
      $('.header-nav .baojie').stop().slideUp();
    }
    // $('.header-nav .cleaning').hover(function () {
    //   $('.header-nav .baojie').stop().slideDown();
    // }, function () {
    //   $('.header-nav .baojie').stop().slideUp();
    // });
  });




  navLoad();
  bottomLoad();


  // 底部微信二维码显示
  $(document).on('mouseover mouseout', '#bottom .weixin', function (event) {
    if (event.type == 'mouseover') {
      $('#bottom .weixin_code').show();
      $('#bottom .triangle-down').show();
    } else if (event.type == 'mouseout') {
      $('#bottom .weixin_code').hide();
      $('#bottom .triangle-down').hide();
    }
  });




  // 控制创业差旅4个大图效果
  $('#travel .banner div').css('opacity', 0.5);
  $('#travel .banner').hover(function () {
    var el = $(this);
    // 先淡出阴影，后淡入文字
    el.find('div').stop().animate({ width: 720, height: 600 }, 'slow', function () {
      el.find('.companyInfo').fadeIn('fast');
    });
  }, function () {
    var el = $(this);
    // 隐藏文字
    el.find('.companyInfo').stop(true, true).hide();
    // 去掉遮罩
    el.find('div').stop().animate({ width: 60, height: 60 }, 'fast');

  }).click(function () {

    // 点击图片时打开链接
    window.open($(this).find('a').attr('href'));

  });
  if ($('.cancellatiobtn').length > 0) {
    $('.cancellatiobtn').on('click', function (e) {
      if ($(".cancellationorder").is(":hidden")) {
        $(".cancellationorder").show();
      } else {
        $(".cancellationorder").hide();
      }
      $(document).one("click", function () {
        $(".cancellationorder").hide();
      });
      $('.close').one("click", function () {
        $(".cancellationorder").hide();
      });
      $('.fh').one("click", function () {
        $(".cancellationorder").hide();
      });
      e.stopPropagation();
    });
    $(".cancellationorder").on("click", function (e) {
      e.stopPropagation();
    });
  };

})
$(window).resize(function () {
  var winwidth = $(window).width();
  var indeximgbox = (winwidth - 18) / 4 + 'px';
  $('#index .imgbox ul li').css('width', indeximgbox);
});



function topclose() {
  $('#closetop').hide();
}

function travelbtn() {
  var ok = true;
  $('.travel_name').each(function () {
    var val = this.value;
    var value = $.trim(val);
    var len = value.length;
    if (len == 0) {
      ok = false;
      this.focus();
    }
    $(this).parent().next().html(len == 0 ? '联系人不能为空！' : '').addClass('newpwdprompt');
  });
  $('.travel_phone').each(function () {
    var val = this.value;
    var value = $.trim(val);
    var len = value.length;
    if (len == 0) {
      ok = false;
      this.focus();
    } else if (!(/^1[34578]\d{9}$/.test(this.value))) {
      ok = false;
      this.focus();
    }
    $(this).parent().next().html(len == 0 || !(/^1[34578]\d{9}$/.test(this.value)) ? '请输入正确的手机号码！' : '').addClass('newpwdprompt');
  });
  $('.travel_company').each(function () {
    var val = this.value;
    var value = $.trim(val);
    var len = value.length;
    if (len == 0) {
      ok = false;
      this.focus();
    }
    $(this).parent().next().html(len == 0 ? '公司名称不能为空！' : '').addClass('newpwdprompt');
  });
  if (!ok) {
    return false;
  } else {
    alert(1);
  }
}

function cleaninglin(cl) {
  cl.each(function () {
    var len = $(this).text().length;
    if (len > 19) {
      $(this).css('line-height', '20px');
    } else {
      $(this).css('line-height', '45px');
    }
  })

}

function listdown() {
  $('#fenlei-xs').slideToggle();
}
function closetopxs() {
  $('#closetop-xs').hide();

}
function setCookie(name, value, iDay) {
  var oDate = new Date();
  oDate.setDate(oDate.getDate() + iDay);
  document.cookie = name + '=' + value + ';expires=' + oDate + ";path=/";
}
function setCookieTimedown(name, value, iDay) {
  var oDate = new Date();
  oDate.setDate(oDate.getDate() + iDay);
  document.cookie = name + '=' + value + ';expires=' + oDate;
}
function getCookie(name) {
  var arr = document.cookie.split('; ');
  var i = 0;
  for (i = 0; i < arr.length; i++) {
    var arr2 = arr[i].split('=');
    if (arr2[0] == name) {
      return arr2[1];
    }
  }
  return '';
}
function removeCookie(name) {
  setCookie(name, '1', -1);
}
function exitlogin() {
  $.ajax({
    url: "http://www.enjoykeys.com/h5_api/user_logout.json",
    type: "POST",
    dataType: "json",
    success: function (data) {
      navLoad();
    }
  })
}
function indexappdownclose() {
  $('#downapp').hide();
}
function getRequestParams(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return decodeURIComponent(r[2]);
  }
  return null;
}
function searchTenant() {

  if ($('#search_box .tenant_num .dorpdown').is(":hidden")) {
    $('#search_box .tenant_num .dorpdown').slideDown();
    $('#search_box .tenant_num_text span img').attr('src', 'http://www.enjoykeys.com/images/searchdown.png');
  } else {
    $('#search_box .tenant_num .dorpdown').slideUp();
    $('#search_box .tenant_num_text span img').attr('src', 'http://www.enjoykeys.com/images/searchup.png');
  }

}
function navLoad() {
  var cookisname = getCookie('user_mobile');
  $.ajax({
    url: 'headandbottom.html',
    type: 'get',
    complete: function (response) {
      if (response.status == 200) {
        if (cookisname) {
          $('.header-nav').load('headandbottom.html .loginstatus_nav');
          $('.loginstatus .username').text(cookisname);
          var logintime = setInterval(function () {
            $('.loginstatus .username').text(cookisname);
            if ($('.loginstatus .username').length > 0) {
              clearInterval(logintime);
            }
          }, 100);
        } else {
          $('.header-nav').load('headandbottom.html .nologin_nav');
        }
      } else {
        if (cookisname) {
          $('.header-nav').load('../headandbottom.html .loginstatus_nav');
          var logintime = setInterval(function () {
            $('.loginstatus .username').text(cookisname);
            if ($('.loginstatus .username').length > 0) {
              clearInterval(logintime);
            }
          }, 100);
        } else {
          $('.header-nav').load('../headandbottom.html .nologin_nav');
        }
      }
    }
  })

}
function bottomLoad() {

  $.ajax({
    url: 'headandbottom.html',
    type: 'get',
    complete: function (response) {
      if (response.status == 200) {
        $('#bottom').load('headandbottom.html #bottom .container');
      } else {
        $('#bottom').load('../headandbottom.html #bottom .container');
      }
    }
  })
}
var aesKey = ")O[NB]6,YF}+efcaj{+oESb9d8>Z'e9M";
var newAesKey = null;
var iv = "L+\~f4,Ir)b$=pkf";
var aesEncrypt = function (data, keyStr, ivStr) {
  var sendData = CryptoJS.enc.Utf8.parse(data);
  var key = CryptoJS.enc.Utf8.parse(keyStr);
  var iv = CryptoJS.enc.Utf8.parse(ivStr);
  var encrypted = CryptoJS.AES.encrypt(sendData, key, { iv: iv, mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
  //return CryptoJS.enc.Base64.stringify(encrypted.toString(CryptoJS.enc.Utf8));
  return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
};
var aesDecrypt = function (data, keyStr, ivStr) {
  var key = CryptoJS.enc.Utf8.parse(keyStr);
  var iv = CryptoJS.enc.Utf8.parse(ivStr);
  //解密的是基于BASE64的数据，此处data是BASE64数据
  var decrypted = CryptoJS.AES.decrypt(data, key, { iv: iv, mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
  return decrypted.toString(CryptoJS.enc.Utf8);
};
function getDefaultDate(dom1, dom2) {
  var timestamp = Date.parse(new Date());
  var newtime = 86400000;
  var newdays = timestamp + newtime;
  var date = new Date(newdays);
  var RY = date.getFullYear() + '-';
  var RM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var RD = date.getDate();
  var tomorrow = RY + RM + RD;
  var todaydate = new Date(timestamp);
  var Y = todaydate.getFullYear() + '-';
  var M = (todaydate.getMonth() + 1 < 10 ? '0' + (todaydate.getMonth() + 1) : todaydate.getMonth() + 1) + '-';
  var D = todaydate.getDate();
  var today = Y + M + D;
  $('#search .input-group .checkin_times').val(today);
  $('#search .input-group .checkout_times').val(tomorrow);
  $(dom1).val(today);
  $(dom2).val(tomorrow);
}
function toService(){
  if(getCookie('user_mobile')){
    window.location.href='http://service.enjoykeys.com?user_mobile='+getCookie('user_mobile');
  }else{
    window.location.href='http://service.enjoykeys.com';
  }
}
function toServiceOrder(){
  if(getCookie('user_mobile')){
    window.location.href='http://service.enjoykeys.com/serverorderlist.html?user_mobile='+getCookie('user_mobile');
  }else{
    window.location.href='http://service.enjoykeys.com/serverorderlist.html';
  }
}
function subdomainExitLogin(){
  removeCookie('user_mobile');
  window.location.href='http://www.enjoykeys.com/subdomainexitlogin.html';
}
function toList(){
  if(getCookie('user_mobile')){
    window.location.href='http://list.enjoykeys.com?user_mobile='+getCookie('user_mobile');
  }else{
    window.location.href='http://list.enjoykeys.com/';
  }
}