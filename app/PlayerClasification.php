<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PlayerClasification extends Model
{
    protected $table = "player_clasification";
    protected $guarded = ["id"];

    public function player()
    {
        return $this->belongsTo("App\Player");
    }

    public function dropSeason()
    {
        return $this->belongsTo("App\DropSeason", "id", 'season');
    }

    public function tennisGroup()
    {
        return $this->belongsTo("App\TennisGroup");
    }

    public function grade()
    {
        return $this->belongsTo("App\Grade");
    }

    public function coach()
    {
        return $this->belongsTo("App\User", "coach_user_id");
    }

    public function fitness()
    {
        return $this->belongsTo("App\User", "fitness_user_id");
    }

    public function guardian()
    {
        return $this->belongsTo("App\User", "guardian_user_id");
    }

    public function teacher()
    {
        return $this->belongsTo("App\User", "teacher_user_id");
    }

    public function tennis()
    {
        return $this->hasMany("App\Tennis");
    }
}
