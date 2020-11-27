<x-quarantine-layout>
    <script>$('#profile').css('font-weight','500');</script>>
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
                <a class="nav-link active" href="{{route("nutrition")}}">NUTRITION INTAKE</a>
                <span class="navbar-text"> | </span>
                <a class="nav-link not" href="{{route("household")}}">HOUSEHOLD STOCK</a>
            </nav>
            <div class="row justify-content-center" style="margin-top: 20px; margin-bottom: 20px; font-size: 20px;"><h3>NUTRITION INTAKE</h3></div>
        </div>
        <div class="col"></div>
    </div>

    <div class="container">

        <table class="table-datatable table table-bordered">
            <thead>
            <tr>
                <th>NAME</th>
                <th>CALORIES (kcal)</th>
                <th>PROTEIN (g)</th>
                <th>CARB (g)</th>
                <th>FIBER (g)</th>
                <th>SUGAR (g)</th>
                <th>FAT (g)</th>
                <th>WATER (ml)</th>
            </tr>
            </thead>
            <tbody>

            @foreach($foods as $food)
                <tr>
                    <td>{{$food->name}}</td>
                    <td>{{$food->Calory * $food->pivot->weight/100}}</td>
                    <td>{{$food->protein * $food->pivot->weight/100}}</td>
                    <td>{{$food->carb * $food->pivot->weight/100}}</td>
                    <td>{{$food->fiber * $food->pivot->weight/100}}</td>
                    <td>{{$food->sugar * $food->pivot->weight/100}}</td>

                    <td>{{$food->fat * $food->pivot->weight/100}}</td>
                    <td>{{$food->water * $food->pivot->weight/100}}</td>
                </tr>
            @endforeach
            </tbody>
            <tfoot>
            <th>SUM</th>
            <th class="@if($user->calory_sum_today>$user->calory_demand) table-danger @else table-success @endif">{{$user->calory_sum_today}}</th>
            <th class="@if($user->protein_sum_today<$user->protein_demand) table-danger @else table-success @endif">{{$user->protein_sum_today}}</th>

            <th class="@if($user->carb_sum_today>$user->carb_demand) table-danger @else table-success @endif">{{$user->carb_sum_today}}</th>
            <th class="@if($user->fiber_sum_today<$user->fiber_demand) table-danger @else table-success @endif">{{$user->fiber_sum_today}}</th>
            <th class="@if($user->sugar_sum_today>$user->sugar_demand) table-danger @else table-success @endif">{{$user->sugar_sum_today}}</th>

            <th class="@if($user->fat_sum_today>$user->fat_demand) table-danger @else table-success @endif">{{$user->fat_sum_today}}</th>
            <th class="@if($user->water_sum_today<$user->water_demand) table-danger @else table-success @endif">{{$user->water_sum_today}}</th>
            </tr>
            <tr>
                <th>IDEAL</th>
                <th><{{$user->CaloryDemand}}</th>
                <th>>{{$user->ProteinDemand}}</th>
                <th><{{$user->CarbDemand}}</th>
                <th>>{{$user->FiberDemand}}</th>
                <th><{{$user->SugarDemand}}</th>
                <th><{{$user->FatDemand}}</th>
                <th>>{{$user->WaterDemand}}</th>
            </tr>
            </tfoot>
        </table>

        <h3 style="margin-top: 25px; font-size: 20px; margin-bottom: 20px">ADD NEW NUTRITION INTAKE</h3>
<div class="row">

    <div class="col">

        <form action="{{route('nutrition.ingredients.store')}}" method="post">
            @csrf
            <div class="form-group">
                <label class="form-label" style="display: block; text-align: center" for="recipe">INGREDIENT</label>
                <select class="form-control select-food @error("food") is-invalid @enderror()" name="food" id="food">
                    @foreach(App\Models\Food::all() as $food)
                        <option value="{{$food->id}}" class="{{$food->type}}">{{$food->name}}</option>
                    @endforeach
                </select>
                @error("food")
                <div class="alert alert-danger">{{$message}}</div>
                @enderror
            </div>
            <div class="form-group">
                <label class="form-label unit-label" style="display: block; text-align: center" for="weight">AMOUNT</label>
                <input class="form-control @error("weight") is-invalid @enderror()" name="weight" id="weight" type="number" ></input>
                @error("weight")
                <div class="alert alert-danger">{{$message}}</div>
                @enderror
            </div>
            <input class="btn btn-primary" type="submit" value="Save">
        </form>
    </div>
    <div class="col">

        <form action="{{route('nutrition.store')}}" method="post">
            @csrf
            <div class="form-group">
                <label class="form-label" style="display: block; text-align: center" for="recipe">RECIPE</label>
                <select class="form-control @error("recipe") is-invalid @enderror()" name="recipe" id="recipe">
                    @foreach($recipes as $recipe)
                        <option value={{$recipe->id}}>{{$recipe->name}}</option>
                    @endforeach
                </select>
                @error("recipe")
                <div class="alert alert-danger">{{$message}}</div>
                @enderror
            </div>
            <div class="form-group">
                <label class="form-label" style="display: block; text-align: center" for="weight">AMOUNT (g)</label>
                <input class="form-control @error("weight") is-invalid @enderror()" name="weight" id="weight" type="number" ></input>
                @error("weight")
                <div class="alert alert-danger">{{$message}}</div>
                @enderror
            </div>
            <input class="btn btn-primary" type="submit" value="Save">
        </form>
        <div style="height:100px"></div>
    </div>
    </div>
</div>





</x-quarantine-layout>
