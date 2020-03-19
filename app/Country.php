<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $table = "country";
    protected $primaryKey = "code";
    protected $keyType = "string";
    protected $appends = ['flags'];

    public function players()
    {
        return $this->hasMany("App\Player");
    }

    public function getFlagsAttribute()
    {
        if ($this->code == "")
            return null;

        $sizes = ["16", "24", "32", "48", "64"];
        $flats = [];
        $shinys = [];;

        foreach ($sizes as $size) {
            $flats[$size] = "https://www.countryflags.io/$this->code/flat/$size.png";
            $shinys[$size] = "https://www.countryflags.io/$this->code/shiny/$size.png";
        }

        return [
            "flat" => $flats,
            "shiny" => $shinys,
            "default" => "https://www.countryflags.io/$this->code/flat/64.png"
        ];
    }

}
