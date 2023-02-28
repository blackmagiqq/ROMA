<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categorys;
use App\Models\Items;
use App\Repositories\Admin\PackRepo;
use App\Http\Requests\PackRequest;

class PackController extends Controller
{
    public function get(Request $request){
        return Categorys::get($request);
    }

    public function adminAll(PackRepo $service){
        return $service->all();
    }
    public function adminCreate(PackRepo $service, PackRequest $request){
        return $service->create($request);
    }
    public function adminUpdate(PackRepo $service, PackRequest $request){
        return $service->update($request);
    }
    public function adminDelete(PackRepo $service, PackRequest $request){
        return $service->delete($request);
    }
}
