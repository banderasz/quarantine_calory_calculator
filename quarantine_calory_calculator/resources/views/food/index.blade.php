<x-quarantine-layout>
    <script>$('#food').css('font-weight','500');</script>
    <div class="container">
        <table class="table-datatable table table-bordered">
            <thead>
            <tr>
                <th>NAME</th>
                <th>TYPE</th>
                <th>PROTEIN</th>
                <th>CARB</th>
                <th>FIBER</th>
                <th>SUGAR</th>
                <th>FAT</th>
                <th>WATER</th>
            </tr>
            </thead>
            <tbody>
            @foreach($foods as $food)
                <tr>
                    <td>{{$food->name}}</td>
                    <td>{{$food->type}}</td>
                    <td>{{$food->protein}}</td>
                    <td>{{$food->carb}}</td>
                    <td>{{$food->fiber}}</td>
                    <td>{{$food->sugar}}</td>
                    <td>{{$food->fat}}</td>
                    <td>{{$food->water}}</td>
                </tr>
            @endforeach
            </tbody>
        </table>



        <form style="margin-top: 40px" action="{{route('food.store')}}" method="post">
            @csrf
            <div class="row">
                <label class="form-label col" for="name">NAME:</label>
                <label class="form-label col" for="name">TYPE:</label>
                <label class="form-label col" for="name">PROTEIN (g in 100g/100ml):</label>
                <label class="form-label col" for="name">FAT (g in 100g/100ml):</label>
                <label class="form-label col" for="name">CARB (g in 100g/100ml):</label>
                <label class="form-label col" for="name">FIBER (g in 100g/100ml):</label>
                <label class="form-label col" for="name">SUGAR (g in 100g/100ml):</label>
                <label class="form-label col" for="name">WATER (ml in 100g/100ml):</label>
            </div>
            <div class="row">


                <div class="form-group col">
                    <input class="form-control @error("name") is-invalid @enderror()" type="text" id="name" name="name">
                    @error("name")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                </div>
                <div class="form-group col">
                    <select class="form-control @error("type") is-invalid @enderror()" name="type" id="type">
                        <option value="food">Food</option>
                        <option value="drink">Drink</option>
                    </select>
                    @error("type")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                </div>
                <div class="form-group col">
                    <input class="form-control @error("protein") is-invalid @enderror()" name="protein" id="protein"
                           type="number"></input>
                    @error("protein")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                </div>
                <div class="form-group col">
                    <input class="form-control @error("fat") is-invalid @enderror()" name="fat" id="fat"
                           type="number"></input>
                    @error("fat")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                </div>
                <div class="form-group col">
                    <input class="form-control @error("carb") is-invalid @enderror()" name="carb" id="carb"
                           type="number"></input>
                    @error("carb")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                </div>
                <div class="form-group col">
                    <input class="form-control @error("fiber") is-invalid @enderror()" name="fiber" id="fiber"
                           type="number"></input>
                    @error("fiber")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                </div>
                <div class="form-group col">
                    <input class="form-control @error("sugar") is-invalid @enderror()" name="sugar" id="sugar"
                           type="number"></input>
                    @error("sugar")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                </div>
                <div class="form-group col">
                    <input class="form-control @error("water") is-invalid @enderror()" name="water" id="water"
                           type="number"></input>
                    @error("water")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                </div>
            </div>
            <input class="btn btn-primary" type="submit" value="Save">
        </form>
        <div style="height:100px"></div>
    </div>

</x-quarantine-layout>
