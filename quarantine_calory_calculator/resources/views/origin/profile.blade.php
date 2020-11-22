<x-quarantine-layout>
    <!--Navigation in the site-->
    <div>
        <div class="container" style="padding-top: 80px;">
            <div class="row">
                <div class="col"></div>
                <div class="col-md-10 col-sm-12">
                    <div class="row alert-row-nutin justify-content-center">
                        <div class="alert alert-danger text-center"> You ate more calorie then the ideal.</div>
                    </div>
                    <div class="row alert-row-nutin-water justify-content-center">
                        <div class="alert alert-danger text-center"> You didn't drink the ideal amount.</div>
                    </div>
                    <div class="row alert-row-house justify-content-center">
                        <div class="alert alert-danger text-center"> Your household doesn't have enough calorie for a
                            week.
                        </div>
                    </div>
                    <div class="row alert-row-sport justify-content-center">
                        <div class="alert alert-danger text-center"> You haven't done any sport today.</div>
                    </div>
                    <h2>PROFILE</h2>
                    <nav class="nav justify-content-center">
                        <a class="nav-link" id="nutin-nav" href="#">Nutritien intake</a>
                        <span class="navbar-text"> | </span>
                        <a class="nav-link" id="house-nav" href="#">Household stock</a>
                        <span class="navbar-text"> | </span>
                        <a class="nav-link" id="sport-nav" href="#">Sport</a>
                        <span class="navbar-text"> | </span>
                        <a class="nav-link" id="personal-nav" href="#">Personal</a>
                    </nav>
                </div>
                <div class="col"></div>
            </div>

            <!--Nutritien intake site-->
            <div class="row nutritien-intake" style="margin-top: 20px;">
                <div class="col"></div>
                <div class="col-md-10 col-sm-12">
                    <h3>NUTRITIEN INTAKE</h3>
                    <table class="table table-responsive-lg">
                        <thead>
                        <tr>
                            <th scope="col">NAME</th>
                            <th scope="col" class="td-center">CALORIES <span class="unit-of-measure">(kcal)</span></th>
                            <th scope="col" class="td-center">PROTEIN <span class="unit-of-measure">(g)</span></th>
                            <th scope="col" class="td-center">CARBS <span class="unit-of-measure">(g)</span></th>
                            <th scope="col" class="td-center">SUGAR <span class="unit-of-measure">(g)</span></th>
                            <th scope="col" class="td-center">FIBER <span class="unit-of-measure">(g)</span></th>
                            <th scope="col" class="td-center">FAT <span class="unit-of-measure">(g)</span></th>
                            <th scope="col" class="td-center">WATER <span class="unit-of-measure">(ml)</span></th>
                        </tr>
                        </thead>
                        <tbody id="nutritien-intake-tbody">
                        </tbody>
                        <thead>
                        <tr>
                            <th colspan="8" class="td-center th-add-new-nutin">
                                <div class="btn-group">
                                    <a class="th-add-new-recipe-nutin btn btn-outline-secondary" href="{{route("recipes.index")}}">Add new
                                        recipe
                                    </a>
                                    <button class="th-add-new-food-nutin btn btn-outline-secondary">Add new
                                        food
                                    </button>
                                    <button class="th-add-new-drink-nutin btn btn-outline-secondary">Add new
                                        drink
                                    </button>
                                </div>
                            </th>
                            <th colspan="4" class="td-center th-save-cancel-nutin">
                                <div class="btn-group">
                                    <button class="th-save-nutin btn btn-outline-secondary">Save</button>
                                    <button
                                        class="th-cancel-nutin btn btn-outline-secondary">Cancel
                                    </button>
                                </div>
                            </th>
                            <th colspan="4" class="th-save-cancel-nutin"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr id="total-row-nutin">
                            <th>TOTAL</th>
                            <td class="td-center" id="total-cal-nutin"></td>
                            <td class="td-center" id="total-protein-nutin"></td>
                            <td class="td-center" id="total-carbs-nutin"></td>
                            <td class="td-center" id="total-sugar-nutin"></td>
                            <td class="td-center" id="total-fiber-nutin"></td>
                            <td class="td-center" id="total-fat-nutin"></td>
                            <td class="td-center" id="total-water-nutin"></td>
                        </tr>
                        <tr id="ideal-row-nutin">
                            <th>IDEAL</th>
                            <td class="td-center" id="ideal-cal-nutin"></td>
                            <td colspan="5"></td>
                            <td class="td-center" id="ideal-water-nutin"></td>
                        </tr>
                        </tbody>
                    </table>
                    <h3>HISTORY</h3>
                    <table class="table table table-responsive-lg">
                        <thead>
                        <th>DAY(S) BEFORE</th>
                        <th class="td-center">1</th>
                        <th class="td-center">2</th>
                        <th class="td-center">3</th>
                        <th class="td-center">4</th>
                        <th class="td-center">5</th>
                        <th class="td-center">6</th>
                        <th class="td-center">7</th>
                        </thead>
                        <tbody>
                        <th>CALORIES <span class="unit-of-measure">(kcal)</span></th>
                        <td id="td-history-cal-1-nutin" class="td-center">2000</td>
                        <td id="td-history-cal-2-nutin" class="td-center">2050</td>
                        <td id="td-history-cal-3-nutin" class="td-center">2020</td>
                        <td id="td-history-cal-4-nutin" class="td-center">1890</td>
                        <td id="td-history-cal-5-nutin" class="td-center">1970</td>
                        <td id="td-history-cal-6-nutin" class="td-center">1990</td>
                        <td id="td-history-cal-7-nutin" class="td-center">2000</td>
                        </tbody>
                    </table>
                </div>
                <div class="col"></div>
            </div>

            <!--Household stock site-->
            <div class="row household-stock" style="margin-top: 20px;">
                <div class="col"></div>
                <div class="col-md-10 col-sm-12">
                    <h3>HOUSEHOLD STOCK</h3>
                    <table class="table table-responsive-lg">
                        <thead>
                        <tr>
                            <th scope="col">NAME</th>
                            <th scope="col" class="td-center">CALORIES <span class="unit-of-measure">(kcal)</span></th>
                            <th scope="col" class="td-center">PROTEIN <span class="unit-of-measure">(g)</span></th>
                            <th scope="col" class="td-center">CARBS <span class="unit-of-measure">(g)</span></th>
                            <th scope="col" class="td-center">SUGAR <span class="unit-of-measure">(g)</span></th>
                            <th scope="col" class="td-center">FIBER <span class="unit-of-measure">(g)</span></th>
                            <th scope="col" class="td-center">FAT <span class="unit-of-measure">(g)</span></th>
                            <th scope="col" class="td-right">AMOUNT</th>
                            <th scope="col" class="td-left">UNIT</th>
                        </tr>
                        </thead>
                        <tbody id="household-stock-tbody">
                        </tbody>
                        <thead>
                        <tr>
                            <th colspan="9" class="td-center th-add-new-house">
                                <div class="btn-group">
                                    <button class="th-add-new-food-house btn btn-outline-secondary">Add new
                                        food
                                    </button>
                                    <button class="th-add-new-drink-house btn btn-outline-secondary">Add new
                                        drink
                                    </button>
                                </div>
                            </th>
                            <th colspan="4" class="td-center th-save-cancel-house">
                                <div class="btn-group">
                                    <button class="th-save-house btn btn-outline-secondary">Save</button>
                                    <button
                                        class="th-cancel-house btn btn-outline-secondary">Cancel
                                    </button>
                                </div>
                            </th>
                            <th colspan="5" class="th-save-cancel-house"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr id="total-row-house">
                            <th>TOTAL</th>
                            <td class="td-center" id="total-cal-house"></td>
                            <td class="td-center" id="total-protein-house"></td>
                            <td class="td-center" id="total-carbs-house"></td>
                            <td class="td-center" id="total-sugar-house"></td>
                            <td class="td-center" id="total-fiber-house"></td>
                            <td class="td-center" id="total-fat-house"></td>
                            <td colspan="2"></td>
                        </tr>
                        <tr id="minimum-row-house">
                            <th><span class="d-inline-block" tabindex="0" data-toggle="tooltip"
                                      title="Minimum stock for a week for the whole household">MINIMUM</span></th>
                            <td class="td-center" id="minimum-cal-house">2000</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col"></div>
            </div>

            <!--Sport site-->
            <div class="row sport" style="margin-top: 20px;">
                <div class="col"></div>
                <div class="col-md-10 col-sm-12">
                    <h3>SPORT</h3>
                    <table class="table table-responsive-lg">
                        <thead>
                        <tr>
                            <th scope="col">NAME</th>
                            <th scope="col" class="td-center">CALORIES <span class="unit-of-measure">(kcal)</span></th>
                            <th scope="col" class="td-center">DURATION <span class="unit-of-measure">(mins)</span></th>
                        </tr>
                        </thead>
                        <tbody id="sport-tbody">
                        </tbody>
                        <thead>
                        <tr>
                            <th colspan="3" class="td-center th-add-new-sport">
                                <button class="th-add-new-sport-btn btn btn-outline-secondary">Add new sport</button>
                            </th>
                            <th colspan="3" class="td-center th-save-cancel-sport">
                                <div class="btn-group">
                                    <button class="th-save-sport btn btn-outline-secondary">Save</button>
                                    <button
                                        class="th-cancel-sport btn btn-outline-secondary">Cancel
                                    </button>
                                </div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr id="total-row-sport">
                            <th>TOTAL</th>
                            <td class="td-center" id="total-cal-sport"></td>
                            <td class="td-center" id="total-duration-sport"></td>
                        </tr>
                        <tr id="ideal-row-sport">
                            <th>IDEAL</th>
                            <td class="td-center" id="ideal-cal-sport"></td>
                            <td class="td-center" id="ideal-duration-sport"></td>
                        </tr>
                        </tbody>
                    </table>
                    <h3>HISTORY</h3>
                    <table class="table table table-responsive-lg">
                        <thead>
                        <th>DAY(S) BEFORE</th>
                        <th class="td-center">1</th>
                        <th class="td-center">2</th>
                        <th class="td-center">3</th>
                        <th class="td-center">4</th>
                        <th class="td-center">5</th>
                        <th class="td-center">6</th>
                        <th class="td-center">7</th>
                        </thead>
                        <tbody>
                        <th>BURNED CALORIES <span class="unit-of-measure">(kcal)</span></th>
                        <td id="td-history-cal-1-sport" class="td-center"></td>
                        <td id="td-history-cal-2-sport" class="td-center"></td>
                        <td id="td-history-cal-3-sport" class="td-center"></td>
                        <td id="td-history-cal-4-sport" class="td-center"></td>
                        <td id="td-history-cal-5-sport" class="td-center"></td>
                        <td id="td-history-cal-6-sport" class="td-center"></td>
                        <td id="td-history-cal-7-sport" class="td-center"></td>
                        </tbody>
                    </table>
                </div>
                <div class="col"></div>
            </div>

            <!--Personal site-->
            <div class="row personal" style="margin-top: 20px;">
                <div class="col"></div>
                <div class="col-md-10 col-sm-12">
                    <h3>PERSONAL</h3>
                    <div class="row personal-row">
                        <div class="col text-right"><span class="align-middle font-h6">NAME</span></div>
                        <div class="col text-left" id="personal-name"><span class="align-middle"
                                                                            id="personal-name-span"></span>
                        </div>
                        <div class="col text-left" id="personal-name-edit">
                            <input type="text" class="form-control-sm form-control text-capitalize"
                                   id="personal-name-edit-input" value="{{$user->name}}">
                        </div>
                    </div>
                    <div class="row personal-row">
                        <div class="col text-right"><span class="align-middle font-h6">EMAIL</span></div>
                        <div class="col text-left" id="personal-email"><span class="align-middle"
                                                                             id="personal-email-span"></span>
                        </div>
                        <div class="col text-left" id="personal-email-edit">
                            <input type="text" class="form-control form-control-sm" id="personal-email-edit-input"
                                   disabled value="{{$user->email}}">
                        </div>
                    </div>
                    <div class="row personal-row">
                        <div class="col text-right"><span class="align-middle font-h6">GENDER</span></div>
                        <div class="col text-left" id="personal-gender"><span class="align-middle"
                                                                              id="personal-gender-span"></span>
                        </div>
                        <div class="col text-left" id="personal-gender-edit">
                            <select class="form-control form-control-sm" id="gender">
                                <option value="Woman" @if($user->gender == "woman") selected @endif>Woman</option>
                                <option value="Man" @if($user->gender == "man") selected @endif>Man</option>
                            </select>
                        </div>
                    </div>
                    <div class="row personal-row">
                        <div class="col text-right"><span class="align-middle font-h6">WEIGHT</span></div>
                        <div class="col text-left" id="personal-weight"><span class="align-middle"
                                                                              id="personal-weight-span"></span>
                        </div>
                        <div class="col text-left" id="personal-weight-edit">
                            <div class="input-group input-group-sm">
                                <input type="number" class="form-control" id="personal-weight-edit-input">
                                <div class="input-group-append">
                                    <span class="input-group-text">kg</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row personal-row">
                        <div class="col text-right"><span class="align-middle font-h6">HEIGHT</span></div>
                        <div class="col text-left" id="personal-height"><span class="align-middle"
                                                                              id="personal-height-span"></span>
                        </div>
                        <div class="col text-left" id="personal-height-edit">
                            <div class="input-group input-group-sm">
                                <input type="number" class="form-control" id="personal-height-edit-input">
                                <div class="input-group-append">
                                    <span class="input-group-text">cm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row personal-row">
                        <div class="col text-right"><span class="align-middle font-h6">ACTIVITY LEVEL</span></div>
                        <div class="col text-left" id="personal-activity"><span class="align-middle"
                                                                                id="personal-activity-span"></span>
                        </div>
                        <div class="col text-left" id="personal-activity-edit">
                            <select class="form-control form-control-sm" id="activity-level">
                                <option value="Low">Low</option>
                                <option value="Moderate">Moderate</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                    </div>
                    <div class="row personal-row">
                        <div class="col text-right"><span class="align-middle font-h6">HOUSEHOLD ID</span></div>
                        <div class="col text-left" id="personal-household"><span class="align-middle"
                                                                                 id="personal-household-span"></span>
                        </div>
                        <div class="col text-left" id="personal-household-edit">
                            <div class="input-group input-group-sm">
                                <div class="input-group input-group-sm">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">#</div>
                                    </div>
                                    <input type="text" class="form-control" id="personal-household-edit-input"
                                           placeholder="Example: 12255a" style="float:right;">
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="personal-new-household-id">
                                    <label class="form-check-label" for="personal-new-household-id">Create a new
                                        household</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row password-row">
                        <div class="col text-right"><span class="align-middle font-h6">CURRENT PASSWORD</span></div>
                        <div class="col text-left" id="current-password">
                            <input type="password" class="form-control-sm form-control text-capitalize"
                                   id="current-password-input">
                        </div>
                    </div>
                    <div class="row password-row">
                        <div class="col text-right"><span class="align-middle font-h6">NEW PASSWORD</span></div>
                        <div class="col text-left" id="new-password">
                            <input type="password" class="form-control-sm form-control text-capitalize"
                                   id="new-password-input">
                        </div>
                    </div>
                    <div class="row password-row">
                        <div class="col text-right"><span class="align-middle font-h6">NEW PASSWORD AGAIN</span></div>
                        <div class="col text-left" id="new-password-again">
                            <input type="password" class="form-control-sm form-control text-capitalize"
                                   id="new-password-again-input">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col text-center button-margin" id="personal-edit">
                            <div class="btn-group">
                                <button class="btn btn-outline-secondary" id="personal-edit-btn">EDIT
                                    DATA
                                </button>
                                <button class="btn btn-outline-secondary" id="personal-edit-password-btn">EDIT
                                    PASSWORD
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col text-center button-margin" id="personal-save-cancel">
                            <div class="btn-group">
                                <button class="btn btn-outline-secondary" id="personal-save-btn">Save</button>
                                <button class="btn btn-outline-secondary" id="personal-cancel-btn">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col"></div>
            </div>
        </div>
    </div>

    <!--Modal to create new sport-->
    <div class="modal" id="new-sport-modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Add new sport</h4>
                    <button type="button" class="close add-new-sport-close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h5>New sport name</h5>
                    <input type="text" class="form-control form-control-sm" id="new-sport-name"
                           placeholder="New sport name">
                    <br>
                    <h5>Burned calories in 60mins</h5>
                    <input type="number" class="form-control form-control-sm" id="new-sport-cals"
                           placeholder="Calories in kcal">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary add-new-sport-close" data-dismiss="modal">Cancel
                    </button>
                    <button type="button" class="btn btn-primary" id="add-new-sport-save">Save</button>
                </div>
            </div>
        </div>
    </div>

    <!--Modal to create new food-->
    <div class="modal" id="new-food-modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Add new food</h4>
                    <button type="button" class="close add-new-sport-close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <h5>New food name</h5>
                        <input type="text" class="form-control form-control-sm" id="new-food-name" required
                               placeholder="New food name">
                        <br>
                        <h5>Protein in 100g</h5>
                        <div class="input-group input-group-sm">
                            <input type="number" class="form-control form-control-sm" id="new-food-protein" required
                                   placeholder="Protein in g">
                            <div class="input-group-append">
                                <span class="input-group-text">g</span>
                            </div>
                        </div>
                        <br>
                        <h5>Carbohydrates in 100g</h5>
                        <div class="input-group input-group-sm">
                            <input type="number" class="form-control form-control-sm" id="new-food-carbs" required
                                   placeholder="Carbs in g">
                            <div class="input-group-append">
                                <span class="input-group-text">g</span>
                            </div>
                        </div>
                        <br>
                        <h5>Sugar in 100g</h5>
                        <div class="input-group input-group-sm">
                            <input type="number" class="form-control form-control-sm" id="new-food-sugar" required
                                   placeholder="Sugar in g">
                            <div class="input-group-append">
                                <span class="input-group-text">g</span>
                            </div>
                        </div>
                        <br>
                        <h5>Fiber in 100g</h5>
                        <div class="input-group input-group-sm">
                            <input type="number" class="form-control form-control-sm" id="new-food-fiber" required
                                   placeholder="Fiber in g">
                            <div class="input-group-append">
                                <span class="input-group-text">g</span>
                            </div>
                        </div>
                        <br>
                        <h5>Fat in 100g</h5>
                        <div class="input-group input-group-sm">
                            <input type="number" class="form-control form-control-sm" id="new-food-fat" required
                                   placeholder="Fat in g">
                            <div class="input-group-append">
                                <span class="input-group-text">g</span>
                            </div>
                        </div>
                        <br>
                        <h5>Water in 100g</h5>
                        <div class="input-group input-group-sm">
                            <input type="number" class="form-control form-control-sm" id="new-food-water" required
                                   placeholder="Water in ml">
                            <div class="input-group-append">
                                <span class="input-group-text">ml</span>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary add-new-food-close" data-dismiss="modal">Cancel
                    </button>
                    <button type="button" class="btn btn-primary" id="add-new-food-save">Save</button>
                </div>
            </div>
        </div>
    </div>

    <!--Modal to create new drink-->
    <div class="modal" id="new-drink-modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Add new drink</h4>
                    <button type="button" class="close add-new-sport-close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <h5>New drink name</h5>
                        <input type="text" class="form-control form-control-sm" id="new-drink-name" required
                               placeholder="New drink name">
                        <br>
                        <h5>Protein in 100ml</h5>
                        <div class="input-group input-group-sm">
                            <input type="number" class="form-control form-control-sm" id="new-drink-protein" required
                                   placeholder="Protein in g">
                            <div class="input-group-append">
                                <span class="input-group-text">g</span>
                            </div>
                        </div>
                        <br>
                        <h5>Carbohydrates in 100ml</h5>
                        <div class="input-group input-group-sm">
                            <input type="number" class="form-control form-control-sm" id="new-drink-carbs" required
                                   placeholder="Carbs in g">
                            <div class="input-group-append">
                                <span class="input-group-text">g</span>
                            </div>
                        </div>
                        <br>
                        <h5>Sugar in 100ml</h5>
                        <div class="input-group input-group-sm">
                            <input type="number" class="form-control form-control-sm" id="new-drink-sugar" required
                                   placeholder="Sugar in g">
                            <div class="input-group-append">
                                <span class="input-group-text">g</span>
                            </div>
                        </div>
                        <br>
                        <h5>Fiber in 100ml</h5>
                        <div class="input-group input-group-sm">
                            <input type="number" class="form-control form-control-sm" id="new-drink-fiber" required
                                   placeholder="Fiber in g">
                            <div class="input-group-append">
                                <span class="input-group-text">g</span>
                            </div>
                        </div>
                        <br>
                        <h5>Fat in 100ml</h5>
                        <div class="input-group input-group-sm">
                            <input type="number" class="form-control form-control-sm" id="new-drink-fat" required
                                   placeholder="Fat in g">
                            <div class="input-group-append">
                                <span class="input-group-text">g</span>
                            </div>
                        </div>
                        <br>
                        <h5>Water in 100ml</h5>
                        <div class="input-group input-group-sm">
                            <input type="number" class="form-control form-control-sm" id="new-drink-water" required
                                   placeholder="Water in ml">
                            <div class="input-group-append">
                                <span class="input-group-text">ml</span>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary add-new-drink-close" data-dismiss="modal">Cancel
                    </button>
                    <button type="button" class="btn btn-primary" id="add-new-drink-save">Save</button>
                </div>
            </div>
        </div>
    </div>

    <!--Modal to create new recipe-->
    <div class="modal" id="new-recipe-modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Recipe</h4>
                    <button type="button" class="close add-new-recipe-close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-4">
                            <h5>Recipe name</h5>
                        </div>
                        <div class="col-8"><input type="text" class="form-control form-control-sm" id="new-recipe-name"
                                                  placeholder="New recipe name"></div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <h5>Recipe type</h5>
                        </div>
                        <div class="col-8"><select id="recipe-type-select" class="form-control form-control-sm">
                                <option value="" disabled selected hidden>Select the type of the recipe</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option>
                                <option value="Snack">Snack</option>
                            </select></div>
                    </div>
                    <br>
                    <h5>Ingredients</h5>
                    <table class="table" id="ingredient-table">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Amount</th>
                        </tr>
                        </thead>
                        <tbody id="ingredient-table-tbody">
                        </tbody>
                    </table>
                    <div class="row">
                        <div class="col text-center">
                            <div class="btn-group">
                                <button class="th-add-new-food-recipe btn btn-outline-secondary">Add new
                                    food
                                </button>
                                <button class="th-add-new-drink-recipe btn btn-outline-secondary">Add new
                                    drink
                                </button>
                            </div>
                        </div>
                    </div>
                    <br>
                    <h5>Description</h5>
                    <ol id="steps-list">
                    </ol>
                    <div class="row">
                        <div class="col text-center">
                            <button class="btn btn-outline-secondary btn-sm" id="add-step-btn">Add new step</button>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary add-new-recipe-close" data-dismiss="modal">Cancel
                    </button>
                    <button type="button" class="btn btn-primary add-new-recipe-save">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</x-quarantine-layout>
