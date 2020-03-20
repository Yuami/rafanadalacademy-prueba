<?php

namespace App\Http\Controllers;

use App\Http\Resources\PlayerClasificationTennis;
use App\Player;
use Illuminate\Http\Request;

class PlayerClasificationController extends Controller
{
    public function tennis(Player $player)
    {
        return PlayerClasificationTennis::collection($player->clasification->tennis);
    }
}
