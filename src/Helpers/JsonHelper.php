<?php

namespace App\Helpers;

class JsonStringManger 
{

    public static function getAllNames($string_json, array $searchby, $all_info = false, string $data = null, $field_search = null) {


        if ($all_info) {
            return $string_json;
        } else {


            if ($field_search != null && $data != null) {
                return JsonStringManger::loopThrewArray($string_json, $searchby, true, $field_search, $data);
            } else {
                return JsonStringManger::loopThrewArray($string_json, $searchby, false);
            }
        }
    }

    private static function loopThrewArray($string_json, array $searchby, $special_field, $field = null, $data = null) {
        $json_elements_object = array();
        if ($special_field) {
            foreach ($string_json as $string) {
                if ($field && $string[$field] === $data) {
                    $json_elements_object[] = [$searchby[0] => $string[$searchby[0]], $searchby[1] => $string[$searchby[1]]];
                }
            }
            return $json_elements_object;
        } else {
            foreach ($string_json as $string) {

                $json_elements_object[] = [$searchby[0] => $string[$searchby[0]], $searchby[1] => $string[$searchby[1]]];
            }
            return $json_elements_object;
        }
    }

}
