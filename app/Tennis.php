<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tennis extends Model
{
    protected $table = "tennis";

    public function players()
    {
        return $this->belongsTo("App\PlayerClasification");
    }

    public function dropAt()
    {
        return $this->belongsTo("App\DropAt", "at_value");
    }
}
