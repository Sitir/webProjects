<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;
use App\Helpers\Settings\Config;
use App\Helpers\JsonStringManger;

class MainController extends Controller {

    public $full_path;
    public $json_obj;
    public $decoded;

    function __construct() {

        $this->full_path = Config::$FILE_NAME . "." . Config::$EXTENSTION;

        if (Config::$EXTENSTION != "json") {
            $this->decoded = $this->csv_FilesReader($this->full_path);
        } else {
            $this->decoded = file_get_contents($this->full_path);

            $this->decoded = json_decode($this->decoded, true);
        }
    }

    /**
     * @Route("/")
     */
    public function index() {
        return $this->render('index.html');
    }

    /**
     * @Route("/api/welcome")
     */
    public function main_welcome() {
        return $this->json("Hello Message");
    }

    /**
     * @Route("/api/users/{login}", name="users")
     */
    public function get_all_users($login = null) {

        return $this->json(JsonStringManger::getAllNames($this->decoded, [], true));
    }

    public function get_all_users_by_login($login = null) {


        return $this->json(JsonStringManger::getAllNames($this->decoded, ['firstname', 'lastname'], false, $login, 'login'));
    }

    public function get_all_users_by_data() {


        $result = json_encode(JsonStringManger::getAllNames($this->decoded, ['firstname', 'lastname'], false));

        return $this->json($result);
    }

    private function csv_FilesReader($file_name) {
        $data_array = array();


        $lines = file($file_name, FILE_IGNORE_NEW_LINES);

        foreach ($lines as $key => $value) {
            $data_array[$key] = str_getcsv($value);
        }


        return $data_array;
    }

}
