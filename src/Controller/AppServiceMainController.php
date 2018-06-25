<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class AppServiceMainController extends Controller
{
    /**
     * @Route("/app/service/main", name="app_service_main")
     */
    public function index()
    {
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/AppServiceMainController.php',
        ]);
    }
}
