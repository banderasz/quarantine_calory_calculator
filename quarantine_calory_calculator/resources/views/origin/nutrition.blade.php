<x-quarantine-layout>

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
                    <td>{{$food->Calory}}</td>
                    <td>{{$food->protein}}</td>
                    <td>{{$food->carb}}</td>
                    <td>{{$food->sugar}}</td>
                    <td>{{$food->fiber}}</td>
                    <td>{{$food->fat}}</td>
                    <td>{{$food->water}}</td>
                </tr>
            @endforeach
            <tr>
                <td>IDEAL</td>
                <td>{{$user->CaloryDemand}}</td>
                <td>{{$user->ProteinDemand}}</td>
                <td>{{$user->CarbDemand}}</td>
                <td>{{$user->SugarDemand}}</td>
                <td>{{$user->FiberDemand}}</td>
                <td>{{$user->FatDemand}}</td>
                <td>{{$user->WaterDemand}}</td>
            </tr>
            </tbody>
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
