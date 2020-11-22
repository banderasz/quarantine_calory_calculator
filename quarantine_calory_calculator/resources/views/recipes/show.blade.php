<x-quarantine-layout>

    <div class="row">
        <div class="col-2 font-bold">NAME:</div>
        <div class="col">{{$recipe->name}}</div>
    </div>

    <div class="row">
        <div class="col-2 font-bold">DESCRIPTION:</div>
        <div class="col">{{$recipe->description}}</div>
    </div>

    <div class="row">
        <div class="col-2 font-bold">TYPE:</div>
        <div class="col">{{$recipe->type}}</div>
    </div>

    <div class="row mt-5">
        <div class="col">
            <table class="table table-bordered table-datatable mt-5">
                <thead>
                <tr>
                    <th>Food</th>
                    <th>Weight</th>
                </tr>
                </thead>
                <tbody>
                @foreach($recipe->foods as $food)
                    <tr>
                        <td>{{$food->name}}</td>
                        <td>{{$food->pivot->weight}}</td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
        <div class="col">
            <form method="post" action="{{route("recipes.food.store")}}">
                @csrf
                <input type="hidden" name="recipe_id" value="{{$recipe->id}}">
                <div class="row">
                    <label class="form-labels col-5" for="">NAME:</label>
                    <label class="form-labels col-4" for="">WEIGHT:</label>
                    <label class="form-labels col-3" for="">ACTION:</label>
                </div>
                <div class="row input-row">
                    <div class="form-group col-5">
                        <select name="food_id[]" class="form-control input-name @error('food_id.*') is-invalid @enderror">
                            @foreach(App\Models\Food::all() as $food)
                                <option value="{{$food->id}}">{{$food->name}}</option>
                            @endforeach
                        </select>
                        @error("food_id.*")
                        <div class="alert alert-danger">{{$message}}</div>
                        @enderror
                    </div>
                    <div class="form-group col-4">
                        <input type="number" name="weight[]" min="0" value="0" class="form-control input-weight @error('weight.*') is-invalid @enderror">
                        @error("weight.*")
                        <div class="alert alert-danger">{{$message}}</div>
                        @enderror
                    </div>
                    <div class="form-group col-3">
                        <input type="button" class="form-control btn btn-danger btn-remove hidden" value="Remove">
                    </div>
                </div>
                <div class="row">
                    <div class="col-9">
                        <input type="submit" class="btn btn-primary col" value="SAVE">
                    </div>
                    <div class="col-3">
                        <input type="button" id="btn-add" class="form-control btn btn-primary" value="NEW FOOD">
                    </div>
                </div>
            </form>
        </div>
    </div>

    <script type="text/javascript">
        $(document).ready( function () {
            $("#btn-add").click(function () {
                $(".input-row:last").clone().insertAfter(".input-row:last");
                $(".input-row:last .input-weight").val("0");
                $(".input-row:last .btn-remove").removeClass("hidden");
                $(".input-row:last .btn-remove").click(function () {
                    $(this).closest('.input-row').remove();
                });
            });
        } );
    </script>

</x-quarantine-layout>
