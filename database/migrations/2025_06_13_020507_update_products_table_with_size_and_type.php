<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table) {
    $table->unsignedBigInteger('size_id')->nullable();
    $table->unsignedBigInteger('type_id')->nullable();

    $table->foreign('size_id')->references('id')->on('sizes')->onDelete('set null');
    $table->foreign('type_id')->references('id')->on('types')->onDelete('set null');
});

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
{
    Schema::table('products', function (Blueprint $table) {
        $table->dropForeign(['size_id']);
        $table->dropForeign(['type_id']);
        $table->dropColumn(['size_id', 'type_id']);
    });
}

};
