<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFoodHouseholdsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('food_households', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("household_id");
            $table->unsignedBigInteger("food_id");
            $table->float("weight");
            $table->timestamps();

            $table->foreign('food_id')->references('id')->on('food')->onDelete('cascade');
            $table->foreign('household_id')->references('id')->on('households')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('food_households');
    }
}
