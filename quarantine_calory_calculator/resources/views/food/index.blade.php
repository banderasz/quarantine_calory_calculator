<x-quarantine-layout>

    <div class="container">
        <table class="table-datatable table table-bordered">
            <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Protein</th>
                <th>Fat</th>
                <th>Carb</th>
                <th>Fiber</th>
                <th>Sugar</th>
                <th>Water</th>
            </tr>
            </thead>
            <tbody>
            @foreach($foods as $food)
            <tr>
                <td>{{$food->name}}</td>
                <td>{{$food->type}}</td>
                <td>{{$food->protein}}</td>
                <td>{{$food->fat}}</td>
                <td>{{$food->carb}}</td>
                <td>{{$food->fiber}}</td>
                <td>{{$food->sugar}}</td>
                <td>{{$food->water}}</td>
            </tr>
            @endforeach
            </tbody>
        </table>

        <form action="{{route('food.store')}}" method="post">
            @csrf
            <div class="form-group">
                <label class="form-label" for="name">NAME:</label>
                <input class="form-control @error("name") is-invalid @enderror()" type="text" id="name" name="name">
                @error("name")
                <div class="alert alert-danger">{{$message}}</div>
                @enderror
            </div>
            <div class="form-group">
                <label class="form-label" for="type">TYPE: </label>
                <select class="form-control @error("type") is-invalid @enderror()" name="type" id="type">
                <option value="food">Food</option>
                <option value="drink">Drink</option>
                </select>
                @error("type")
                <div class="alert alert-danger">{{$message}}</div>
                @enderror
            </div>
            <div class="form-group">
                <label class="form-label" for="protein">PROTEIN (g in 100g/100ml):</label>
                <input class="form-control @error("protein") is-invalid @enderror()" name="protein" id="protein" type="number" ></input>
                @error("protein")
                <div class="alert alert-danger">{{$message}}</div>
                @enderror
            </div>
            <div class="form-group">
                <label class="form-label" for="protein">FAT (g in 100g/100ml):</label>
                <input class="form-control @error("fat") is-invalid @enderror()" name="fat" id="fat" type="number" ></input>
                @error("fat")
                <div class="alert alert-danger">{{$message}}</div>
                @enderror
            </div>
            <div class="form-group">
                <label class="form-label" for="protein">CARB (g in 100g/100ml):</label>
                <input class="form-control @error("carb") is-invalid @enderror()" name="carb" id="carb" type="number" ></input>
                @error("carb")
                <div class="alert alert-danger">{{$message}}</div>
                @enderror
            </div>
            <div class="form-group">
                <label class="form-label" for="protein">FIBER (g in 100g/100ml):</label>
                <input class="form-control @error("fiber") is-invalid @enderror()" name="fiber" id="fiber" type="number" ></input>
                @error("fiber")
                <div class="alert alert-danger">{{$message}}</div>
                @enderror
            </div>
            <div class="form-group">
                <label class="form-label" for="protein">SUGAR (g in 100g/100ml):</label>
                <input class="form-control @error("sugar") is-invalid @enderror()" name="sugar" id="sugar" type="number" ></input>
                @error("sugar")
                <div class="alert alert-danger">{{$message}}</div>
                @enderror
            </div>
            <div class="form-group">
                <label class="form-label" for="protein">WATER (milliliter in 100g/100ml):</label>
                <input class="form-control @error("water") is-invalid @enderror()" name="water" id="water" type="number" ></input>
                @error("water")
                <div class="alert alert-danger">{{$message}}</div>
                @enderror
            </div>
            <input class="btn btn-primary" type="submit" value="Save">
        </form>
        <div style="height:100px"></div>
    </div>

</x-quarantine-layout>
