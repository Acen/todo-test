<?php

namespace App\Http\Controllers;

use App\TodoItem;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TodoController extends Controller
{

    /**
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function create(Request $request): Response
    {
        $this->validate($request, [
            'content' => 'required|string|between:3,1000'
        ]);

        $item = TodoItem::create([
            'content' => $request->input('content')
        ]);

        return response($item, 200);
    }


    /**
     * @param \Illuminate\Http\Request $request
     * @param \App\TodoItem $item
     *
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function edit(Request $request, TodoItem $item): Response
    {
        $this->validate($request, [
            'content' => 'required|string|between:3,1000'
        ]);

        $item->update([
            'content' => $request->input('content')
        ]);

        return response($item, 200);
    }


    /**
     * @param \Illuminate\Http\Request $request
     * @param \App\TodoItem $item
     *
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function delete(Request $request, TodoItem $item): Response
    {
        $item->delete();
        $responseText = $item->id . ' deleted successfully.';

        return response($responseText, 200);
    }


    /**
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function clear(Request $request): Response
    {
        TodoItem::all()->each(function ($item) {
            $item->delete();
        });

        return response('All items successfully deleted.', 200);
    }


    /**
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function get(Request $request): Response
    {
        $items = TodoItem::all();

        return response($items, 200);
    }
}