<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    protected $table = "player";
    protected $guarded = [];
    protected $appends = ["age"];

    public function clasification()
    {
        return $this->hasOne("App\PlayerClasification");
    }

    public function utr()
    {
        return $this->hasOne("App\PlayerUtr");
    }

    public function country()
    {
        return $this->belongsTo("App\Country", "doc_country");
    }

    public function getAgeAttribute()
    {
        return Carbon::parse($this->attributes['birthdate'])->age;
    }

    public function scopeHanded($query, $hand)
    {
        return $query->where('handed', $hand);
    }

    public function scopeGender($query, $gender)
    {
        return $query->where('gender', $gender);
    }

    public function scopeAgedBetween($query, $start, $end = null)
    {
        if (is_null($end)) {
            $end = $start;
        }

        $start = Carbon::now()->subYears($start)->addYear()->format('Y-m-d');
        $end = Carbon::now()->subYears($end)->format('Y-m-d');

        return $query->where('birthdate', '<=', $start)->where('birthdate', '>=', $end);
    }
}
