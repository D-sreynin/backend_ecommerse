<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';

   protected $fillable = [
    'name',
    'description',
    'price',
    'size_id',
    'type_id',
];

    public function size()
    {
        return $this->belongsTo(Size::class);
    }

    public function type()
    {
        return $this->belongsTo(Type::class);
    }

}
