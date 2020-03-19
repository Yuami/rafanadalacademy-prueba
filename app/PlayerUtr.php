<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PlayerUtr extends Model
{
    protected $table = "player_utr";

    public function player()
    {
        return $this->belongsTo("App\Player");
    }
}
