<x-quarantine-layout>
    <script>$('#profile').css('font-weight','500');</script>
    <script>
        $(document).on('change', '.select-food', function (){
            let selected = $(this).find('option').filter(':selected').attr("class")

            $(this).parent().parent().find('.unit-label').text(selected == "food"? "AMOUNT (g)" : "AMOUNT (ml)");
        });</script>
    <div class="row">
        <div class="col"></div>
        <div class="col-md-10 col-sm-12">
            <h2 style="font-size: 25px">PROFILE</h2>
            <nav class="nav justify-content-center">
                <a class="nav-link not" href="{{route("profile")}}">PERSONAL</a>
                <span class="navbar-text"> | </span>
                <a class="nav-link not" href="{{route("nutrition")}}">NUTRITION INTAKE</a>
                <span class="navbar-text"> | </span>
                <a class="nav-link active" href="{{route("household")}}">HOUSEHOLD STOCK</a>
            </nav>
            <div class="row justify-content-center" style="margin-top: 20px; margin-bottom: 20px; font-size: 20px;"><h3>HOUSEHOLD STOCK</h3></div>

        </div>
        <div class="col"></div>
    </div>
    <div class="container">

        <table class="table-datatable table table-bordered"  style="width: 100%">
            <thead>
            <tr>
                <th>NAME</th>
                <th>AMOUNT</th>
            </tr>
            </thead>
            <tbody>

            @foreach($foods as $food)
                <tr>
                    <td>{{$food->name}}</td>
                    <td>{{$food->pivot->weight}} @if($food->type == "food") g @else ml @endif</td>
                </tr>
            @endforeach
            </tbody>
        </table>

        <div>
            <label class="@if($days<7) alert alert-danger @else alert alert-success @endif">You have enough food for {{$days}} days.</label>

        </div>

        <div class="row">
            <div class="col-6">
                <form action="{{route('storage.store')}}" method="post">
                    @csrf
                    <div class="form-group">
                        <label class="form-label" for="recipe">INGREDIENT</label>
                        <select class="select-food form-control @error("food") is-invalid @enderror()" name="food" id="food">
                            @foreach($all_foods as $curr_food)
                                <option value={{$curr_food->id}} class="{{$curr_food->type}}">{{$curr_food->name}}</option>
                            @endforeach
                        </select>
                        @error("food")
                        <div class="alert alert-danger">{{$message}}</div>
                        @enderror
                    </div>
                    <div class="form-group">
                        @if(\App\Models\Food::first()->type == "food")

                            <label class="form-label unit-label" for="weight">AMOUNT (g)</label>
                        @else
                            <label class="form-label unit-label" for="weight">AMOUNT (ml)</label>
                        @endif

                        <input class="form-control @error("weight") is-invalid @enderror()" name="weight" id="weight" type="number" ></input>
                        @error("weight")
                        <div class="alert alert-danger">{{$message}}</div>
                        @enderror
                    </div>
                    <input class="btn btn-primary" type="submit" value="Save">
                </form>
            </div>
        </div>
        <div style="height:100px"></div>
    </div>

</x-quarantine-layout>
