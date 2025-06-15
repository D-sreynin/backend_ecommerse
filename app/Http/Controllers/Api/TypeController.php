<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TypeResource;
use App\Models\Type;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TypeController extends Controller
{
    public function index()
    {
        $types = Type::get();
        if($types->count() > 0)
        {
            return TypeResource::collection($types);
        }
        else
        {
            return response()->json(['message' => 'No record available'], 200);
        }
    }

    public function store(Request $request)
    {
        $validate = Validator::make($request->all(),[
                'name' => 'required|string|max:255',
                'description' => 'required',
        ]);
        if($validate->fails())
        {
            return response()->json([
                'message' => 'All fields are mandetory',
                'error' => $validate->messages(),
            ], 422);
        }

        $type = Type::create([
            'name' => $request->name,
            'description' => $request->description,
        ]);
        return response()->json([
            'message' => 'Types Created Successfully',
            'data' => new TypeResource($type)
        ], 200);

    }

    public function show(Type $type)
    {
        return new TypeResource($type);
    }

    public function update(Request $request, Type $type)
    {
        $validate = Validator::make($request->all(),[
            'name' => 'required|string|max:255',
            'description' => 'required',
    ]);
    if($validate->fails())
    {
        return response()->json([
            'message' => 'All fields are mandetory',
            'error' => $validate->messages(),
        ], 422);
    }

    $type->update([
        'name' => $request->name,
        'description' => $request->description,
    ]);
    return response()->json([
        'message' => 'Types Updated Successfully',
        'data' => new TypeResource($type)
    ], 200);
    }

    public function destroy(Type $type)
    {
        $type->delete();
        return response()->json([
            'message' => 'Types Deleted Successfully',
        ], 200);
    }
}
