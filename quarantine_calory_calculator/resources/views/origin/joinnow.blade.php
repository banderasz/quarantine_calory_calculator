<x-quarantine-layout>
    @if(\Illuminate\Support\Facades\Session::has('errors'))
        <div class="row">
            {{\Illuminate\Support\Facades\Session::get("errors")}}
        </div>
    @endif
    <div class="row">
        <div class="col"></div>
        <div class="col-md-10 col-sm-12">
            <h2>JOIN NOW</h2>
            <nav class="nav justify-content-center">
                <a class="nav-link active" href="{{route("joinnow")}}">JOIN NOW</a>
                <span class="navbar-text"> | </span>
                <a class="nav-link not" href="{{route("signin")}}">SIGN IN</a>
            </nav>
        </div>
        <div class="col"></div>
    </div>
    <div class="row" style="margin-top: 20px;">
        <div class="col"></div>
        <div class="col-9 col-xl-4 col-lg-5 col-md-7 col-sm-9 ">

            <!--Join/Registration form-->
            <form id="join-now-form"  method="POST" action="{{ route('register') }}">
                @csrf
                <div class="form-group">
                    <label class="form-labels" for="person-name">Name</label>
                    <input type="text" class="form-control @error('name') is-invalid @enderror" id="person-name" placeholder="Name" name="name" required value="{{old('name')}}">
                    @error("name")
                        <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                    <label class="form-labels" for="email-address">Email</label>
                    <input type="email" class="form-control @error('email') is-invalid @enderror" id="email-address" placeholder="example@example.com" name="email"
                           required value="{{old('email')}}">
                    @error("email")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                    <label class="form-labels" for="gender">Gender</label>
                    <select class="form-control custom-select @error('gender') is-invalid @enderror" id="gender" name="gender" required >
                        <option value="" disabled selected hidden>Select your gender</option>
                        <option value="woman">Woman</option>
                        <option value="man">Man</option>
                    </select>
                    @error("gender")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                    <div class="row">
                        <div class="col">
                            <label class="form-labels" for="weight">Weight (kg)</label>
                            <input type="number" class="form-control @error('weight') is-invalid @enderror" id="weight" placeholder="Weight in kg" name="weight" required value="{{old('weight')}}">
                        </div>
                        @error("weight")
                        <div class="alert alert-danger">{{$message}}</div>
                        @enderror
                        <div class="col">
                            <label class="form-labels" for="height">Height (cm)</label>
                            <input type="number" class="form-control @error('height') is-invalid @enderror" id="height" placeholder="Height in cm" name="height" required value="{{old('height')}}">
                        </div>
                        @error("height")
                        <div class="alert alert-danger">{{$message}}</div>
                        @enderror
                    </div>
                    <label class="form-labels" for="activity-level">Activity level</label>
                    <select class="form-control @error('activity') is-invalid @enderror" id="activity-level" name="activity" required>
                        <option value="" disabled selected hidden>Select your activity level</option>
                        <option value="low">Low</option>
                        <option value="moderate">Moderate</option>
                        <option value="high">High</option>
                    </select>
                    @error("activity")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                    <label class="form-labels" for="household-id">Hosehold ID</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text">#</div>
                        </div>
                        <input type="text" class="form-control @error('household') is-invalid @enderror" id="household-id" name="household" placeholder="Example: 12255a" value="{{old('household')}}"
                               style="float:right;" required>
                    </div>
                    @error("household")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="new-household-id">
                        <label class="form-check-label" for="new-household-id">Create a new household</label>
                    </div>
                    <label class="form-labels" for="password1">Password</label>
                    <input type="password" class="form-control @error('password') is-invalid @enderror" id="password" name="password" placeholder="Password" required value="{{old('password')}}">
                    @error("password")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                    <div class="row" style="margin-top: 25px;">
                        <div class="col text-center">
                            <button type='submit' class="btn btn-outline-success" id="join-now-btn">JOIN NOW</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="col"></div>
    </div>
</x-quarantine-layout>
