<?php

namespace Tests\Unit;

use App\Http\Controllers\TodoController;
use App\TodoItem;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TodoControllerTest extends TestCase
{

    /**
     * Test basic creation.
     */
    public function testCreate()
    {
        $request = Request::create('todo', 'POST', [
            'content' => 'blah'
        ]);
        $controller = new TodoController();
        $response = $controller->create($request);

        $this->assertEquals(200, $response->getStatusCode());
        $this->assertNotNull(TodoItem::where('content', 'blah')->first());
    }


    /**
     * Ensures that our basic validation works.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function testCreateFailsValidation()
    {
        $this->expectException(ValidationException::class);

        $request = Request::create('todo', 'POST', [
            'content' => 'f'
        ]);

        $controller = new TodoController();
        $controller->create($request);
    }
}
