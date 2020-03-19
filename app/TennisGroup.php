<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TennisGroup extends Model
{

    public function clasifications()
    {
        return $this->hasMany("App\PlayerClasification");
    }
}
