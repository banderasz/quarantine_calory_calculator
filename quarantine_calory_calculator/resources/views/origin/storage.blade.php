<x-quarantine-layout>

    <div class="container">

        <table class="table-datatable table table-bordered">
            <thead>
            <tr>
                <th>NAME</th>
                <th>Quantity</th>
            </tr>
            </thead>
            <tbody>

            @foreach($foods as $food)
                <tr>
                    <td>{{$food->name}}</td>
                    <td>{{$food->pivot->weight}}</td>
                </tr>
            @endforeach
            </tbody>
        </table>

        <div>
            {{$summafoodcalory}}
            {{$summausercalory}}
        </div>

        <form action="{{route('storage.store')}}" method="post">
            @csrf
            <div class="form-group">
                <label class="form-label" for="recipe">Food: </label>
                <select class="form-control @error("food") is-invalid @enderror()" name="food" id="food">
                    @foreach($all_foods as $curr_food)
                        <option value={{$curr_food->id}}>{{$curr_food->name}}</option>
                    @endforeach
                </select>
                @error("food")
                <div class="alert alert-danger">{{$message}}</div>
                @enderror
            </div>
            <div class="form-group">
                <label class="form-label" for="weight">WEIGHT (g/ml):</label>
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
