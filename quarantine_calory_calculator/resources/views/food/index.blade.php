<x-quarantine-layout>
    <script>$('#food').css('font-weight','500');</script>
    <script>

        $(document).on('change', '.select-type', function (){

            let selected = $(this).find('option').filter(':selected').attr("value")
            console.log(selected)
            $(this).parent().parent().parent().find('.unit-label-protein').text(selected == "food"? "PROTEIN (g in 100g)" : "PROTEIN (g in 100ml)");
            $(this).parent().parent().parent().find('.unit-label-fat').text(selected == "food"? "FAT (g in 100g)" : "FAT (g in 100ml)");
            $(this).parent().parent().parent().find('.unit-label-carb').text(selected == "food"? "CARB (g in 100g)" : "CARB (g in 100ml)");
            $(this).parent().parent().parent().find('.unit-label-fiber').text(selected == "food"? "FIBER (g in 100g)" : "FIBER (g in 100ml)");
            $(this).parent().parent().parent().find('.unit-label-sugar').text(selected == "food"? "SUGAR (g in 100g)" : "SUGAR (g in 100ml)");
            $(this).parent().parent().parent().find('.unit-label-water').text(selected == "food"? "WATER (g in 100g)" : "WATER (g in 100ml)");
        });</script>
    <div class="container">
        <table class="table-datatable table table-bordered">
            <thead>
            <tr>
                <th>NAME</th>
                <th>TYPE</th>
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
                <label class="form-label unit-label-protein col" for="name">PROTEIN (g in 100g):</label>
                <label class="form-label unit-label-fat col" for="name">FAT (g in 100g):</label>
                <label class="form-label unit-label-carb col" for="name">CARB (g in 100g):</label>
                <label class="form-label unit-label-fiber col" for="name">FIBER (g in 100g):</label>
                <label class="form-label unit-label-sugar col" for="name">SUGAR (g in 100g):</label>
                <label class="form-label unit-label-water col" for="name">WATER (ml in 100g):</label>
            </div>
            <div class="row">


                <div class="form-group col">
                    <input class="form-control @error("name") is-invalid @enderror()" type="text" id="name" name="name">
                    @error("name")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                </div>
                <div class="form-group col">
                    <select class="form-control select-type @error("type") is-invalid @enderror()" name="type" id="type">
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
