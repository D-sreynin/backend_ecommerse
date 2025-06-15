<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            'id' => $this -> id,
            'name' => $this -> name,
            // 'size' => $this->size ? $this->size->name : null,
            // 'type' => $this->type ? $this->type->name : null,
           'size' => new SizeResource($this->whenLoaded('size')),
'type' => new TypeResource($this->whenLoaded('type')),
            'description' => $this -> description,
            'price' => $this -> price,
            'created_at' => $this -> created_at,
        ];
    }
}
