<x-quarantine-layout>

    <div class="container">

        <table class="table-datatable table table-bordered">
            <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Type</th>
            </tr>
            </thead>
            <tbody>
            @foreach($recipes as $recipe)
                <tr>
                    <td>{{$recipe->name}}</td>
                    <td>{{$recipe->description}}</td>
                    <td>{{$recipe->type}}</td>
                </tr>
            @endforeach
            </tbody>
        </table>

        <form action="{{route('recipes.store')}}" method="post">
            @csrf
            <div class="form-group">
                <label class="form-label" for="name">NAME:</label>
                <input class="form-control @error("name") is-invalid @enderror()" type="text" id="name" name="name">
                @error("name")
                <div class="alert alert-danger">{{$message}}</div>
                @enderror
            </div>
            <div class="form-group">
                <label class="form-label" for="description">DESCRIPTION:</label>
                <textarea class="form-control @error("description") is-invalid @enderror()" name="description" id="description" cols="30" rows="10"></textarea>
                @error("description")
                <div class="alert alert-danger">{{$message}}</div>
                @enderror
            </div>
            <div class="form-group">
                <label class="form-label" for="type">TYPE: </label>
                <select class="form-control @error("type") is-invalid @enderror()" name="type" id="type">
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="snack">Snack</option>
                </select>
                @error("type")
                <div class="alert alert-danger">{{$message}}</div>
                @enderror
            </div>
            <input class="btn btn-primary" type="submit" value="Save">
        </form>
        <div style="height:100px"></div>
    </div>

</x-quarantine-layout>