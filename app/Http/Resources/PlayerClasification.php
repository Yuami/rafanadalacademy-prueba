<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PlayerClasification extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "player" => $this->player,
            "tennis_group" => $this->tennisGroup,
            "grade" => $this->grade,
            "coach" => $this->coach,
            "teacher" => $this->teacher,
            "fitness" => $this->fitness,
            "guardian" => $this->guardian,
        ];
    }
}
