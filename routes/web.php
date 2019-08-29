<?php

Route::get('todo', 'TodoController@get')->name('todo.get');
Route::post('todo', 'TodoController@create')->name('todo.create');
Route::patch('todo/{item}', 'TodoController@edit')->name('todo.edit');
Route::delete('todo/{item}', 'TodoController@delete')->name('todo.delete');
Route::delete('todo', 'TodoController@clear')->name('todo.clear');
Route::post('todo/{item}', 'TodoController@complete')->name('todo.complete');

Route::get('allhistory', 'HistoryController@get')->name('history.get');

Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');