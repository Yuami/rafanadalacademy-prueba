<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DropSeason extends Model
{
    protected $table = "drop_season";

    public function clasifications()
    {
        return $this->hasMany("App\PlayerClasification", "season", "id");
    }
}
