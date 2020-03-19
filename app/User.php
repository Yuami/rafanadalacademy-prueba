<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $primaryKey = 'user_id';
    protected $hidden = ['user_type'];
    protected $guarded = ['user_id'];
    protected $appends = ["type"];

    public function getTypeAttribute()
    {
        return UserType::where('u_id', $this->user_type)->first()->u_code;
    }
}
