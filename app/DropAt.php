<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DropAt extends Model
{
    protected $table = "drop_at";
    protected $primaryKey = "at_id";

    public function tennis()
    {
        return $this->hasMany("App\Tennis");
    }
}
