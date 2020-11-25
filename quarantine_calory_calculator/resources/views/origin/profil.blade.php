<x-quarantine-layout>
    <script>$('#profile').css('font-weight', '500');</script>
    <div class="row">
        <div class="col"></div>
        <div class="col-md-10 col-sm-12">
            <h2 style="font-size: 25px">PROFILE</h2>
            <nav class="nav justify-content-center">
                <a class="nav-link active" href="{{route("profile")}}">PERSONAL</a>
                <span class="navbar-text"> | </span>
                <a class="nav-link not" href="{{route("nutrition")}}">NUTRITIONS</a>
                <span class="navbar-text"> | </span>
                <a class="nav-link not" href="{{route("household")}}">HOUSEHOLD</a>
            </nav>

            <div class="row justify-content-center" style="margin-top: 20px; margin-bottom: 20px; font-size: 20px;"><h3>
                    PERSONAL</h3></div>
            <div class="row personal-row">
                <div class="col text-right"><span class="align-middle font-h6">NAME</span></div>

                <div class="col text-left" id="personal-name-edit">
                    <label>{{$user->name}}</label>
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
                    <label>{{$user->gender}}</label>
                </div>
            </div>
            <div class="row personal-row">
                <div class="col text-right"><span class="align-middle font-h6">WEIGHT</span></div>

                <div class="col text-left" id="personal-weight-edit">
                    <div class="input-group input-group-sm">
                        <label>{{$user->weight}} kg</label>
                    </div>
                </div>
            </div>
            <div class="row personal-row">
                <div class="col text-right"><span class="align-middle font-h6">HEIGHT</span></div>

                <div class="col text-left" id="personal-height-edit">
                    <div class="input-group input-group-sm">
                        <label>{{$user->height}} cm</label>
                    </div>
                </div>
            </div>
            <div class="row personal-row">
                <div class="col text-right"><span class="align-middle font-h6">ACTIVITY LEVEL</span></div>

                <div class="col text-left" id="personal-activity-edit">
                    <label>{{$user->activity}}</label>
                </div>
            </div>
            <div class="row personal-row">
                <div class="col text-right"><span class="align-middle font-h6">HOUSEHOLD ID</span></div>

                <div class="col text-left" id="personal-household-edit">
                    <div class="input-group input-group-sm">
                        <div class="input-group input-group-sm">
                            <div class="input-group-prepend">
                            </div>
                            <label>{{$user->household}}</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center" style="margin-top: 20px; margin-bottom: 20px; font-size: 20px;"> <a class="nav-link btn btn-primary" id="profile.edit" href="{{route("profile.edit")}}">EDIT</a></div>



        </div>


        <div class="col"></div>
    </div>
    <div class="row personal" style="margin-top: 20px;">
        <div class="col"></div>

        <div class="col-md-10 col-sm-12">

        </div>

    </div>

</x-quarantine-layout>
