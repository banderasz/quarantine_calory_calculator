<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HOME</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="{{asset("css/app.css")}}">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossorigin="anonymous"></script>
    <script src="{{asset("js/app.js")}}"></script>
</head>

<body>
<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="navbar-style">
    <a class="navbar-brand mb-0 h1" href="{{route("home")}}">QUARANTINE CALORIE CALCULATOR</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <a class="nav-link" href="{{route("home")}}">HOME</a>
            </li>
            <span class="navbar-text hide">|</span>
            <li class="nav-item">
                <a class="nav-link" href="./recipes.html">RECIPES</a>
            </li>
            <span class="navbar-text hide">|</span>
            <li class="nav-item">
                <a class="nav-link" href="./aboutus.html">ABOUT US</a>
            </li>
            <span class="navbar-text hide logged-out">|</span>
            <li class="nav-item logged-out">
                <a class="nav-link" href="{{route("joinnow")}}">JOIN NOW</a>
            </li>
            <span class="navbar-text hide logged-out">|</span>
            <li class="nav-item logged-out">
                <a class="nav-link" href="{{route("signin")}}">SIGN IN</a>
            </li>
        </ul>
    </div>
</nav>

<div>
    <div class="container" style="padding-top: 80px;">
        {{$slot}}
    </div>
</div>

</body>
</html>