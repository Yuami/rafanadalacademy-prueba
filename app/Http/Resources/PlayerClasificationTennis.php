<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PlayerClasificationTennis extends JsonResource
{

    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "player_clasification_id" => $this->player_clasification_id,
            "date" => $this->date,
            "drop_at" => $this->dropAt,
            "value" => $this->value,
            "session" => $this->session,
            "checked" => $this->checked,
        ];
    }
}
