<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorys extends Model
{
    use HasFactory;
    protected $fillable = ['category', 'char', 'aboutItem', 'pack', 'method'];

    public static function get($data){
        return self::select('category', 'char', 'aboutItem', 'pack', 'method')
        ->where('category', 'LIKE', '%' . $data['item'] . '%')
        ->distinct()
        ->get();
    }
}
    