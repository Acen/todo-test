<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TodoItem extends Model
{
    use SoftDeletes;

    protected $table = 'todo_items';

    protected $fillable = [
        'content',
    ];
}
