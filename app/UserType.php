<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserType extends Model
{
    protected $table = 'user_type';
    protected $primaryKey = 'u_id';

    public function users()
    {
        return $this->belongsToMany('App\User');
    }
}
