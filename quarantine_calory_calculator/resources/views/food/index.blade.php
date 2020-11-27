<x-quarantine-layout>
    <script>$('#food').css('font-weight', '500');
        $('.table-datatable').DataTable({
            responsive: true
        })
    </script>
    <div class="container">
        <table class="table table-datatable  table-bordered display responsive nowrap" style="width: 100%">
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
                <div class="col-lg-3 col-md-4 col-sm-5">
                    <label class="form-label" for="name">NAME</label>
                </div>
                <div class="form-group col-lg-5 col-md-6 col-sm-7">
                    <input class="form-control @error("name") is-invalid @enderror()" type="text" id="name" name="name">
                    @error("name")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-5">
                    <label class="form-label" for="name">TYPE</label>
                </div>
                <div class="form-group col-lg-5 col-md-6 col-sm-7">
                    <select id="food-drink-select" class="form-control @error("type") is-invalid @enderror()"
                            name="type"
                            id="type">
                        <option value="food">Food</option>
                        <option value="drink">Drink</option>
                    </select>
                    @error("type")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-5">
                    <label class="form-label" for="name">PROTEIN (g in 100<span class="g-ml">g</span>)</label>
                </div>

                <div class="form-group col-lg-5 col-md-6 col-sm-7">
                    <input class="form-control @error("protein") is-invalid @enderror()" name="protein" id="protein"
                           type="number"></input>
                    @error("protein")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-5">
                    <label class="form-label" for="name">FAT (g in 100<span class="g-ml">g</span>)</label>
                </div>
                <div class="form-group col-lg-5 col-md-6 col-sm-7">
                    <input class="form-control @error("fat") is-invalid @enderror()" name="fat" id="fat"
                           type="number"></input>
                    @error("fat")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                </div>
            </div>


            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-5">
                    <label class="form-label" for="name">CARB (g in 100<span class="g-ml">g</span>)</label>
                </div>
                <div class="form-group col-lg-5 col-md-6 col-sm-7">
                    <input class="form-control @error("carb") is-invalid @enderror()" name="carb" id="carb"
                           type="number"></input>
                    @error("carb")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                </div>
            </div>


            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-5">
                    <label class="form-label" for="name">FIBER (g in 100<span class="g-ml">g</span>)</label>
                </div>
                <div class="form-group col-lg-5 col-md-6 col-sm-7">
                    <input class="form-control @error("fiber") is-invalid @enderror()" name="fiber" id="fiber"
                           type="number"></input>
                    @error("fiber")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                </div>
            </div>

            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-5">
                    <label class="form-label" for="name">SUGAR (g in 100<span class="g-ml">g</span>)</label>
                </div>
                <div class="form-group col-lg-5 col-md-6 col-sm-7">
                    <input class="form-control @error("sugar") is-invalid @enderror()" name="sugar" id="sugar"
                           type="number"></input>
                    @error("sugar")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                </div>
            </div>

            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-5">
                    <label class="form-label" for="name">WATER (ml in 100<span class="g-ml">g</span>)</label>
                </div>
                <div class="form-group col-lg-5 col-md-6 col-sm-7">
                    <input class="form-control @error("water") is-invalid @enderror()" name="water" id="water"
                           type="number"></input>
                    @error("water")
                    <div class="alert alert-danger">{{$message}}</div>
                    @enderror
                </div>
            </div>

            <script>
                $(document).on('change', '#food-drink-select', function () {
                    let value = $(this).children(':selected').val();
                    $(".g-ml").each(function () {
                        $(this).text(value == "food" ? "g" : "ml");
                    });
                })
            </script>
            <input class="btn btn-primary" type="submit" value="Save">
        </form>
        <div style="height:100px"></div>
    </div>

</x-quarantine-layout>
