<?php
$page = !$_GET['path'] ? 'index' : strtolower($_GET['path']);
$path = './pages/'. $page. '.aka.html';
 ?>
<!DOCTYPE html>
<html lang="ko" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Aka</title>

    <!-- Metadata -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Seia-Soto">
    <meta name="description" content="Aka, Seia Soto. 아카- 세야!">

    <!-- Aka -->
    <link rel="icon" type="image/x-icon" href="/assets/images/favicon.ico" />
    <link rel="stylesheet" type="text/css" href="/assets/styles/aka.css">
    <script src="/assets/scripts/aka.js" charset="utf-8"></script>
    <!-- Semantic-UI -->
    <link rel="stylesheet" type="text/css" href="/assets/ui/semantic.min.css">
    <script
      src="https://code.jquery.com/jquery-3.1.1.min.js"
      integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
      crossorigin="anonymous"></script>
    <script src="/assets/ui/semantic.min.js" charset="utf-8"></script>
  </head>
  <body class="aka">
    <div id="aka_links" class="ui right sidebar inverted vertical menu">
      <a class="item" href="https://b2.seia.io" target="_blank">
        블로그
        <i class="wordpress icon"></i>
      </a>
      <a class="item" href="https://twitter.com/Seia_Soto" target="_blank">
        Twitter
        <i class="twitter icon"></i>
      </a>
      <a class="item" href="https://github.com/Seia-Soto" target="_blank">
        GitHub
        <i class="github icon"></i>
      </a>
      <a class="item" href="https://discordapp.com/invite/RpDUKtu" target="_blank">
        Discord
        <i class="discord icon"></i>
      </a>
      <a class="item" href="https://instagram.com/seia_soto" target="_blank">
        Instagram
        <i class="instagram icon"></i>
      </a>
    </div>
    <div id="aka_pages" class="ui sidebar inverted vertical menu">
      <a class="item">
        <div class="ui inverted transparent icon input">
          <input id="search" type="text" placeholder="블로그에서 검색" onkeypress="if (event.keyCode == 13) { window.open('https://soto.gq/?s=' + document.getElementById('search').value) }">
          <i class="search icon"></i>
        </div>
      </a>
      <a class="item" href="/literary/terms">
        약관
        <i class="clipboard outline icon"></i>
      </a>
      <a class="item" href="/literary/commission">
        커미션
        <i class="bookmark outline icon"></i>
      </a>
    </div>
    <div class="pusher">
      <header>
        <div class="aka navigating">
          <div class="ui inverted container">
            <nav class="aka navigation">
              <div class="ui inverted secondary menu">
                <a class="ui active item" onclick="location.href='/'">
                  <i class="paper plane icon"></i>
                  Aka
                </a>
                <a class="ui item" onclick="toggleSidebar('#aka_pages')">
                  <i class="bars icon"></i>
                  메뉴
                </a>
                <a class="right item" onclick="toggleSidebar('#aka_links')">
                  <i class="tags icon"></i>
                  소셜
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <?php
      if (!file_exists($path)) {
        ?>
        <div class="aka page">
          <div class="ui container">
            <img class="ui avatar image" src="/assets/images/seia.gif"><span>Seia Soto</span>
            <h1 class="ui header">Seia예요!</h1>
            <p>
              Soto(せいあそと{セイアソト}) is student who is developing with small base as well.<br>
              Known as learner, writer, translator, developer and illustrator.
            </p>
            <div class="ui divider">
              <!-- End of section -->
            </div>
          </div>
        </div>
        <div class="aka short distance page">
          <div class="ui container">
            <h2 class="ui header">페이지를 찾을 수 없습니다!</h2>
            <p>
              <strong><?php echo $page; ?></strong>에 있는 Aka 페이지를 찾을 수 없습니다, 입력하신 주소가 올바른지 다시 확인해주세요.
            </p>
          </div>
        </div>
        <?php
      } else {
        readfile($path);
      }
       ?>
      <footer>
        <div class="aka short distance footering page">
          <div class="ui container">
            <h4 class="ui inverted header">
              <i class="paper plane icon"></i>
              Aka
            </h4>
            <p class="aka white colored">Copyright 2019 Seia-Soto. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  </body>
</html>
