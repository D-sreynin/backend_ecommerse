<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
 public function index()
{
    $products = Product::with(['size', 'type'])->get();

    if ($products->count() > 0) {
        return ProductResource::collection($products);
    } else {
        return response()->json(['message' => 'No record available'], 200);
    }
}



    public function store(Request $request)
    {
        $validate = Validator::make($request->all(),[
                'name' => 'required|string|max:255',
                'description' => 'required',
                'price' => 'required|integer',
                'size_id' => 'required|exists:sizes,id',
                'type_id' => 'required|exists:types,id',
        ]);
        if($validate->fails())
        {
            return response()->json([
                'message' => 'All fields are mandetory',
                'error' => $validate->messages(),
            ], 422);
        }

        $product = Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'size_id' => $request->size_id,
            'type_id' => $request->type_id,
        ]);
        return response()->json([
            'message' => 'Product Created Successfully',
            'data' => new ProductResource($product)
        ], 200);

    }
public function show(Product $product)
{
    $product->load(['size', 'type']); // ✅ make sure it's loaded
    return new ProductResource($product);
}


    public function update(Request $request, Product $product)
    {
        $validate = Validator::make($request->all(),[
            'name' => 'required|string|max:255',
            'description' => 'required',
            'price' => 'required|integer',
            'size_id' => 'required|exists:sizes,id',
            'type_id' => 'required|exists:types,id',
    ]);
    if($validate->fails())
    {
        return response()->json([
            'message' => 'All fields are mandetory',
            'error' => $validate->messages(),
        ], 422);
    }

    $product->update([
        'name' => $request->name,
        'description' => $request->description,
        'price' => $request->price,
        'size_id' => $request->size_id,
        'type_id' => $request->type_id,
    ]);
    return response()->json([
        'message' => 'Product Updated Successfully',
        'data' => new ProductResource($product)
    ], 200);
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json([
            'message' => 'Product Deleted Successfully',
        ], 200);
    }
}
