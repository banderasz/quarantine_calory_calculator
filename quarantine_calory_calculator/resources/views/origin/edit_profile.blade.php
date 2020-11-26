<x-quarantine-layout>
    <script>$('#profile').css('font-weight', '500');</script>
    <div class="row">
        <div class="col"></div>
        <div class="col-md-10 col-sm-12">
            <h2 style="font-size: 25px">PROFILE</h2>
            <nav class="nav justify-content-center">
                <a class="nav-link active" href="{{route("profile")}}">PERSONAL</a>
                <span class="navbar-text"> | </span>
                <a class="nav-link not" href="{{route("nutrition")}}">NUTRITION INTAKE</a>
                <span class="navbar-text"> | </span>
                <a class="nav-link not" href="{{route("household")}}">HOUSEHOLD STOCK</a>
            </nav>

            <div class="row justify-content-center" style="margin-top: 20px; margin-bottom: 20px; font-size: 20px;"><h3>
                    PERSONAL</h3></div>
            <form id="join-now-form"  method="POST" action="{{ route('profile.store') }}">
                @csrf
            <div class="row personal-row">
                <div class="col text-right"><span class="align-middle font-h6">NAME</span></div>

                <div class="col text-left" id="personal-name-edit">
                    <input type="text" class="form-control @error('name') is-invalid @enderror" id="person-name"
                           value={{$user->name}} name="name" required value="{{old('name')}}">
                    @error("name")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                </div>
            </div>
            <div class="row personal-row">
                <div class="col text-right"><span class="align-middle font-h6">EMAIL</span></div>

                <div class="col text-left" id="personal-email-edit">
                    <label>{{$user->email}}</label>
                </div>
            </div>
            <div class="row personal-row">
                <div class="col text-right"><span class="align-middle font-h6">GENDER</span></div>

                <div class="col text-left" id="personal-gender-edit">
                    <select class="form-control custom-select @error('gender') is-invalid @enderror" id="gender"
                            name="gender" required>
                        @if($user->gender == "woman")
                            <option value="woman" selected>Woman</option>
                            <option value="man">Man</option>
                        @else
                            <option value="woman" selected>Woman</option>
                            <option value="man" selected>Man</option>
                        @endif
                    </select>
                    @error("gender")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                </div>
            </div>
            <div class="row personal-row">
                <div class="col text-right"><span class="align-middle font-h6">WEIGHT (kg)</span></div>

                <div class="col text-left" id="personal-weight-edit">
                    <div class="input-group input-group-sm">
                        <input type="number" class="form-control @error('weight') is-invalid @enderror" id="weight"
                               value={{$user->weight}} name="weight" required value="{{old('weight')}}">
                    </div>
                    @error("weight")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                </div>
            </div>
            <div class="row personal-row">
                <div class="col text-right"><span class="align-middle font-h6">HEIGHT (cm)</span></div>

                <div class="col text-left" id="personal-height-edit">
                    <div class="input-group input-group-sm">
                        <input type="number" class="form-control @error('height') is-invalid @enderror" id="height"
                               value={{$user->height}} name="height" required value="{{old('height')}}">
                    </div>
                    @error("height")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                </div>
            </div>
            <div class="row personal-row">
                <div class="col text-right"><span class="align-middle font-h6">ACTIVITY LEVEL</span></div>

                <div class="col text-left" id="personal-activity-edit">
                    <select class="form-control @error('activity') is-invalid @enderror" id="activity-level"
                            name="activity" required>
                        @if($user->activity == "low")
                            <option value="low" selected>Low</option>
                            <option value="moderate">Moderate</option>
                            <option value="high">High</option>
                        @elseif($user->activity == "moderate")
                            <option value="low">Low</option>
                            <option value="moderate" selected>Moderate</option>
                            <option value="high">High</option>
                        @else
                            <option value="low">Low</option>
                            <option value="moderate">Moderate</option>
                            <option value="high" selected>High</option>
                        @endif
                    </select>
                    @error("activity")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                </div>
            </div>
            <div class="row personal-row">
                <div class="col text-right"><span class="align-middle font-h6">HOUSEHOLD ID</span></div>

                <div class="col text-left" id="personal-household-edit">
                    <div class="input-group input-group-sm">
                        <div class="input-group input-group-sm">
                            <div class="input-group-prepend">
                            </div>
                            <input type="text" class="form-control @error('household') is-invalid @enderror"
                                   id="household-id" name="household"
                                   value={{$user->household}} value="{{old('household')}}"
                                   style="float:right;" required>

                        </div>
                        <script>
                            window.$(document).on('change', '#new-household-id', function () {
                                if (this.checked) {
                                    window.$("#household-id").prop('readonly', true);
                                    window.$("#household-id").val(Math.random().toString(36).substr(2, 9));
                                } else {
                                    window.$("#household-id").prop('readonly', false);
                                    window.$("#household-id").val('');
                                }
                            });
                        </script>
                        @error("household")
                        <div class="alert alert-danger">{{$message}}</div>
                        @enderror
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="new-household-id">
                            <label class="form-check-label" for="new-household-id">Create a new household</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row personal-row">
                <div class="col text-right"><span class="align-middle font-h6">NEW PASSWORD</span></div>

                <div class="col text-left" id="personal-household-edit">
                    <div class="input-group input-group-sm">
                        <div class="input-group input-group-sm">
                            <div class="input-group-prepend">
                            </div>
                            <input type="password" class="form-control @error('password') is-invalid @enderror"
                                   id="password" name="password" placeholder="Password"
                                   value="{{old('password')}}">

                            @error("password")
                            <div class="alert alert-danger">{{$message}}</div>
                            @enderror

                        </div>
                        <label class="alert alert-warning ">If password is changed, you have to sign in again.</label>
                    </div>

                </div>

            </div>
            <div class="row" style="margin-top: 25px;">
                <div class="col text-center">
                    <button type='submit' class="btn btn-primary" id="join-now-btn">SAVE</button>
                </div>
            </div>
            </form>
        </div>

        <div class="col"></div>
    </div>
    <div class="row personal" style="margin-top: 20px;">
        <div class="col"></div>
        <div class="col-md-10 col-sm-12">

        </div>

    </div>
</x-quarantine-layout>
