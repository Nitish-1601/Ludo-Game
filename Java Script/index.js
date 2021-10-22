<html>
<head>
    <title></title>
    <style>
        #main{
            width:1000px;
            float:left;
        }
        .pawns{
            width:30px;
            height:30px;
            border-radius:20px;
            position:absolute;
        }
        #board{
            background:url(Images/board.gif) no-repeat;
            background-size:cover;
            width:650px;
            height:550px;
            float:left;
            margin-top:8px;
            marign-left: 0px;
        }
        #turntext{
            float:left;
            padding-left:10px;
            padding-right:10px;
        }
        footer{
            font-size:larger;
            color:darkred;

        }
    </style>
    <script src="Nick.js"></script>
</head>
<body>
    <div id="main">
    <div id="board"></div>

    <div id="dice" onclick="randomNum()" style="background-image:url(Images/dice.gif);background-size:contain; width:150px;height:150px; float:left;"></div>
    <!-- red pawns  start top 28 left 318-->
    <!-- red pawns  start top 28 left 318-->

    <div class="pawns" id="redpawn1"    onclick="randomMove('red',1)"       style="background-color:red;top:149px;left:442px;"></div>
    <div class="pawns" id="redpawn2"    onclick="randomMove('red',2)"       style="background-color:red;top:102px;left:395px;"></div>
    <div class="pawns" id="redpawn3"    onclick="randomMove('red',3)"       style="background-color:red;top:55px;left:442px;"></div>
    <div class="pawns" id="redpawn4"    onclick="randomMove('red',4)"       style="background-color:red;top:102px;left:490px;"></div>

    <!-- yellow pawns  start top 523 left 218-->
    <div class="pawns" id="yellowpawn1" onclick="randomMove('yellow',1)"    style="background-color:yellow;top:451px;left:47px;"></div>
    <div class="pawns" id="yellowpawn2" onclick="randomMove('yellow',2)"    style="background-color:yellow;top:451px;left:140px;"></div>
    <div class="pawns" id="yellowpawn3" onclick="randomMove('yellow',3)"    style="background-color:yellow;top:404px;left:93px;"></div>
    <div class="pawns" id="yellowpawn4" onclick="randomMove('yellow',4)"    style="background-color:yellow;top:498px;left:93px;"></div>

    <!-- green pawns  start top 227 left 22-->
    <div class="pawns" id="greenpawn1"  onclick="randomMove('green',1)"     style="background-color:green;top:149px;left:93px;"></div>
    <div class="pawns" id="greenpawn2"  onclick="randomMove('green',2)"     style="background-color:green;top:102px;left:140px;"></div>
    <div class="pawns" id="greenpawn3"  onclick="randomMove('green',3)"     style="background-color:green;top:55px;left:93px;"></div>
    <div class="pawns" id="greenpawn4"  onclick="randomMove('green',4)"     style="background-color:green;top:102px;left:47px;"></div>

    <!-- blue pawns  start top 326 left 515-->
    <div class="pawns" id="bluepawn1"   onclick="randomMove('blue',1)"      style="background-color:blue;top:451px;left:490px;"></div>
    <div class="pawns" id="bluepawn2"   onclick="randomMove('blue',2)"      style="background-color:blue;top:451px;left:395px;"></div>
    <div class="pawns" id="bluepawn3"   onclick="randomMove('blue',3)"      style="background-color:blue;top:404px;left:442px;"></div>
    <div class="pawns" id="bluepawn4"   onclick="randomMove('blue',4)"      style="background-color:blue;top:498px;left:442px;"></div>


    <h4 id="turntext1">It`s </h4><h3 id="player" style="float:left; color:red">red</h3><h4 id="turntext1">s turn</h4>
    <p id="badtext" style="float:left;"></p>
    </div>
    <footer title="Nitish Sharma" id="copyright">FOR ME</footer>
</body>
</html>
