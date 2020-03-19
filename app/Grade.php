<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
    protected $table = "grade";

    public function clasifications()
    {
        return $this->hasMany("App\PlayerClasification");
    }
}
