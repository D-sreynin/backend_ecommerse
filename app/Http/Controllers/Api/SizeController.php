<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\SizeResource;
use App\Models\Size;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SizeController extends Controller
{
    public function index()
    {
        $sizes = Size::get();
        if($sizes->count() > 0)
        {
            return SizeResource::collection($sizes);
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

        $size = Size::create([
            'name' => $request->name,
            'description' => $request->description,
        ]);
        return response()->json([
            'message' => 'Sizes Created Successfully',
            'data' => new SizeResource($size)
        ], 200);

    }

    public function show(Size $size)
    {
        return new SizeResource($size);
    }

    public function update(Request $request, Size $size)
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

    $size->update([
        'name' => $request->name,
        'description' => $request->description,
    ]);
    return response()->json([
        'message' => 'Sizes Updated Successfully',
        'data' => new SizeResource($size)
    ], 200);
    }

    public function destroy(Size $size)
    {
        $size->delete();
        return response()->json([
            'message' => 'Sizes Deleted Successfully',
        ], 200);
    }
}
