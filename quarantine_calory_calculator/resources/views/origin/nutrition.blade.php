<x-quarantine-layout>
    <div class="row">
        <div class="col"></div>
        <div class="col-md-10 col-sm-12">
            <h2>NUTRITIONS</h2>
            <nav class="nav justify-content-center">
                <a class="nav-link active" href="{{route("profile")}}">PROFIL</a>
                <span class="navbar-text"> | </span>
                <a class="nav-link active" href="{{route("nutrition")}}">NUTRITIONS</a>
                <span class="navbar-text"> | </span>
                <a class="nav-link not" href="{{route("household")}}">HOUSEHOLD</a>
            </nav>
        </div>
        <div class="col"></div>
    </div>

    <div class="container">

        <table class="table-datatable table table-bordered">
            <thead>
            <tr>
                <th>NAME</th>
                <th>Calories (kcal)</th>
                <th>Protein (g)</th>
                <th>Carbs (g)</th>
                <th>Sugar (g)</th>
                <th>Fiber (g)</th>
                <th>Fat (g)</th>
                <th>Water (ml)</th>
            </tr>
            </thead>
            <tbody>

            @foreach($foods as $food)
                <tr>
                    <td>{{$food->name}}</td>
                    <td>{{$food->Calory * $food->pivot->weight/100}}</td>
                    <td>{{$food->protein * $food->pivot->weight/100}}</td>
                    <td>{{$food->carb * $food->pivot->weight/100}}</td>
                    <td>{{$food->sugar * $food->pivot->weight/100}}</td>
                    <td>{{$food->fiber * $food->pivot->weight/100}}</td>
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
            <th class="@if($user->sugar_sum_today>$user->sugar_demand) table-danger @else table-success @endif">{{$user->sugar_sum_today}}</th>
            <th class="@if($user->fiber_sum_today<$user->fiber_demand) table-danger @else table-success @endif">{{$user->fiber_sum_today}}</th>
            <th class="@if($user->fat_sum_today>$user->fat_demand) table-danger @else table-success @endif">{{$user->fat_sum_today}}</th>
            <th class="@if($user->water_sum_today<$user->water_demand) table-danger @else table-success @endif">{{$user->water_sum_today}}</th>
            </tr>
            <tr>

                <th>IDEAL</th>
                <th>{{$user->CaloryDemand}}</th>
                <th>{{$user->ProteinDemand}}</th>
                <th>{{$user->CarbDemand}}</th>
                <th>{{$user->SugarDemand}}</th>
                <th>{{$user->FiberDemand}}</th>
                <th>{{$user->FatDemand}}</th>
                <th>{{$user->WaterDemand}}</th>
            </tr>
            </tfoot>
        </table>

        <form action="{{route('nutrition.store')}}" method="post">
            @csrf
            <div class="form-group">
                <label class="form-label" for="recipe">Recipe: </label>
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
                <label class="form-label" for="weight">WEIGHT (g):</label>
                <input class="form-control @error("weight") is-invalid @enderror()" name="weight" id="weight" type="number" ></input>
                @error("weight")
                <div class="alert alert-danger">{{$message}}</div>
                @enderror
            </div>
            <input class="btn btn-primary" type="submit" value="Save">
        </form>
        <div style="height:100px"></div>
    </div>

</x-quarantine-layout>
