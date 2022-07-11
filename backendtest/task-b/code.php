<?php

        /* 
     *  Function    : generateSentence()
     * 
     *  Description : Generate a sentence listing out all items provided in an array.
     *  
     *  Parameters  : (string)               start         - The start of the sentence
     *                (array[string])        items         - The list of items
     *                (string/array[string]) append        - (optional) item types to be appended to each item
     * 
     *  Return      : string
     * 
     *  Example     : See run.php for input/output examples
     *  
     *  Test        : Execute run.php to test your implementation.
     *                (In console, simply run the command 'php run.php')
     * 
     */

    
    function generateSentence($string, array $arr,$args=null){

        $arr1 = [];
        foreach ($arr as $key => $value) {
            $arr1[] = $value . ' ' . (is_array($args) ? $args[$key] : $args);
        }
        $arrCount = count($arr1);
        $sentence = '';
        if ($arrCount == 1) {
            $sentence = $arr[0] . '.';
        } else {
            if($args == null)
            {
                $partial = array_slice($arr, 0, $arrCount-1);
                $sentence = implode(', ', $partial) . ' and ' . $arr[$arrCount-1]; 

            }
            else
            {
                $partial = array_slice($arr1, 0, $arrCount-1);
                $sentence =   implode(', ', $partial). ' and ' . $arr1[$arrCount-1];
            }         
        }
                    
        return $string.': '.$sentence.'.';
    }





    


