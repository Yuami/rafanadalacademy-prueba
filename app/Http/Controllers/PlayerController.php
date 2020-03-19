<?php

namespace App\Http\Controllers;

use App\Player;
use App\Http\Resources\PlayerClasification as PlayerClasificationResource;
use Illuminate\Http\Request;

class PlayerController extends Controller
{

    private function compareHand()
    {
        return [
            'Right' => Player::handed('R')->count(),
            'Left' => Player::handed('L')->count(),
        ];
    }

    private function compareGender()
    {
        return [
            'Male' => Player::gender('M')->count(),
            'Female' => Player::gender('F')->count(),
        ];
    }

    private function compareAge()
    {
        return [
            '< 15' => Player::agedBetween(5, 14)->count(),
            '15-17' => Player::agedBetween(15, 17)->count(),
            '> 17' => Player::agedBetween(18, 200)->count(),
        ];
    }

    private function compare($type)
    {
        switch ($type) {
            case 'handed':
            case 'hand':
                return $this->compareHand();
                break;
            case 'gender':
                return $this->compareGender();
                break;
            case 'birthdate':
            case 'age':
                return $this->compareAge();
                break;
        }

        return Player::all();
    }

    public function index(Request $request)
    {
        $compare = $request->input('compare');
        if ($compare !== null)
            return $this->compare($compare);

        return Player::all();
    }

    public function show(Player $player)
    {
        return $player;
    }

    public function classification(Player $player)
    {
        return new PlayerClasificationResource($player->clasification);
    }

    public function utr(Player $player)
    {
        return $player->utr;
    }
}
