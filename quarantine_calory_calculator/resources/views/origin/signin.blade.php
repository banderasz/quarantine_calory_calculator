<x-quarantine-layout>
    <script>$('#signin').css('font-weight','500');</script>
    <div class="row">
        <div class="col"></div>
        <div class="col-md-10 col-sm-12">
            <h2 style="font-size: 25px">SIGN IN</h2>
            <nav class="nav justify-content-center">
                <a class="nav-link not" href="{{route("joinnow")}}">JOIN NOW</a>
                <span class="navbar-text"> | </span>
                <a class="nav-link active" href="{{route("signin")}}">SIGN IN</a>
            </nav>
        </div>
        <div class="col"></div>
    </div>
    <div class="row" style="margin-top: 20px;">
        <div class="col"></div>
        <div class="col-9 col-xl-4 col-lg-5 col-md-7 col-sm-9 ">
            <form method="POST" action="{{ route('login') }}">
                @csrf
                <div class="form-group">
                    <label class="form-labels" for="email-address">EMAIL</label>
                    <input type="email" class="form-control" id="email-address" name="email" placeholder="example@example.com">
                    <label class="form-labels" for="password1">PASSWORD</label>
                    <input type="password" class="form-control" id="password1" name="password" placeholder="Password">
                    <div class="row" style="margin-top: 25px;">
                        <div class="col text-center">
                            <button type='submit' class="btn btn-primary">SIGN IN</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="col"></div>
    </div>
</x-quarantine-layout>
