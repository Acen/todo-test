<?php

namespace App\Http\Controllers;

use App\TodoItem;
use Illuminate\Support\Collection;

class HistoryController
{

    /**
     * Returns a list of all TodoItem, including deleted.
     *
     * @return \Illuminate\Support\Collection
     */
    public function get(): Collection
    {
        return TodoItem::withTrashed()->get();
    }
}