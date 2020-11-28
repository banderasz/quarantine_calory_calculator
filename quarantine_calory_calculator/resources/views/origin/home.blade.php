<x-quarantine-layout>
    <script>$('#home').css('font-weight','500');</script>
    <div class="row">
        <div class="col"></div>
        <div class="col-lg-10 col-md-12">
            <h2 style=" font-size: 25px";>WELCOME TO</h2>
            <h3 style="text-align: center; font-weight: bold; font-size: 25px">QUARANTINE CALORIE CALCULATOR APPLICATION</h3>
        </div>
        <div class="col"></div>
    </div>
    <div class="row" style="margin-top: 20px;">
        <div class="col"></div>
        <div class="col-lg-10 col-md-12">
            <h5 style=" font-size: 20px; margin-bottom: 10px" >ABOUT THE PROJECT</h5>
            <p>We created this website to help people who must stay in quarantine because of the coronavirus. However, it can be used by others also. This web application mainly works as a calorie calculator, it helps people to check their nutrition intake during the days and compare the sums with the ideal amounts. Because of to create it specially for people who are in quarantine it has an extra functionality that the users can log their household stocks and share it with people who live with them.</p>
            <p>To start using this web application firstly register on the <a id="joinnow" href="{{route("joinnow")}}">JOIN NOW</a> site.</p>
            <p>After logged in you can see 3 extra sites: RECIPES, INGREDIENTS and PROFILE. The first and second ones are to create and check recipes and ingredients. While the last one is user specified, where you can check your personal information(PERSONAL subpage), can log your nutrition intake daily(NUTRITION INTAKE subpage.) and can log your household stock(HOUSEHOLD STOCK subpage).</p>

        </div>
        <div class="col"></div>
    </div>

</x-quarantine-layout>

