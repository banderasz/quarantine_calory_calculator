<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HOME</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossorigin="anonymous"></script>
{{--    <script src="{{asset("js/app.js")}}"></script>--}}
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs4/dt-1.10.22/datatables.min.css"/>

    <script type="text/javascript" src="https://cdn.datatables.net/v/bs4/dt-1.10.22/datatables.min.js"></script>

    <script>
        $(document).ready( function () {
            $('.table-datatable').DataTable();
        } );
    </script>
    <link rel="stylesheet" href="{{asset("css/app.css")}}">

</head>


<body>
<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="navbar-style">
    <a class="navbar-brand mb-0 h1" href="{{route("home")}}">QUARANTINE CALORIE CALCULATOR</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" id="home" href="{{route("home")}}">HOME</a>
            </li>
            <span class="navbar-text hide">|</span>
            <li class="nav-item">
                <a class="nav-link" id="aboutus" href="{{route("aboutus")}}">ABOUT US</a>
            </li>
            <span class="navbar-text hide logged-out">|</span>
            @guest
                <li class="nav-item logged-out">
                    <a class="nav-link" id="joinnow" href="{{route("joinnow")}}">JOIN NOW</a>
                </li>
                <span class="navbar-text hide logged-out">|</span>
                <li class="nav-item logged-out">
                    <a class="nav-link" id="signin" href="{{route("signin")}}">SIGN IN</a>
                </li>
            @else

                <li class="nav-item">
                    <a class="nav-link" id="recipes" href="{{route("recipes")}}">RECIPES</a>
                </li>
                <span class="navbar-text hide">|</span>
                <li class="nav-item">
                    <a class="nav-link" id="food" href="{{route("food")}}">INGREDIENTS</a>
                </li>
                <span class="navbar-text hide">|</span>
                <li class="nav-item logged-in">
                    <a class="nav-link" id="profile" href="{{route("profile")}}">PROFILE</a>
                </li>
                <span class="navbar-text hide logged-out">|</span>
                <li class="nav-item logged-in">

                    <form method="post" action="/logout">
                        @csrf
                        <button type="submit" class="btn btn-link nav-link">LOG OUT</button>
                    </form>
                </li>
            @endguest
        </ul>
    </div>
</nav>
<script>
    let lastWidth = $(window).width();
    let navText = document.getElementsByClassName("navbar-text hide");
    $(window).ready(function(){
        if (lastWidth < 992) {
            for (let i = 0; i < navText.length; i++) {
                navText.item(i).style.display = "none";
            }
        }
        else {
            for (let i = 0; i < navText.length; i++) {
                navText.item(i).style.display = "inline";
            }
        }
    })
    $(window).resize(function () {
        if ($(window).width() != lastWidth) {
            lastWidth = $(window).width();
            if (lastWidth < 992) {
                for (let i = 0; i < navText.length; i++) {
                    navText.item(i).style.display = "none";
                }
            }
            else {
                for (let i = 0; i < navText.length; i++) {
                    navText.item(i).style.display = "inline";
                }
            }
        }
    })
</script>

<div>
    <div class="container" style="padding-top: 80px;">
{{--        @if(\Illuminate\Support\Facades\Session::has('errors'))--}}
{{--            <div class="alert alert-danger text-center">--}}
{{--                @foreach(\Illuminate\Support\Facades\Session::get('errors') as $error)--}}
{{--                    <div>--}}
{{--                        {{$error}}--}}
{{--                    </div>--}}
{{--                @endforeach--}}
{{--            </div>--}}
{{--        @endif--}}
        @if(\Illuminate\Support\Facades\Session::has('warnings'))
            <div class="alert alert-warning text-center">
                @foreach(\Illuminate\Support\Facades\Session::get('warnings') as $warning)
                    <div>
                        {{$warning}}
                    </div>
                @endforeach
            </div>
        @endif
        @if(\Illuminate\Support\Facades\Session::has('messages'))
            <div class="alert alert-success text-center">
                @foreach(\Illuminate\Support\Facades\Session::get('messages') as $message)
                    <div>
                        {{$message}}
                    </div>
                @endforeach
            </div>
        @endif
    </div>
</div>

<div>
    <div class="container">
        {{$slot}}
    </div>
</div>

</body>
</html>
