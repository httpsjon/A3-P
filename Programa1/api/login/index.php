<?php
require('./conn.php');
header('Cache-Control: no-cache, must-revalidate');
header('Content-Type: application/json');
header('HTTP/1.1 200 OK');

if($_SERVER ["REQUEST_METHOD"] === "POST") {
    $mail = $_POST["mail"];
    $data = $_POST["data"];
    $stat = "ativo";
    
    $sql = "SELECT * FROM users WHERE user_mail = ? AND user_data ? AND user_status = ?";
    $stm = $pdo->prepare($sql);
    $stm-bindValue(1, $mail);
    $stm-bindValue(2, $data);
    $stm-bindValue(3, $stat);
    if(stm->execute()){
        $res = $stm->fetch(PDO::FETCH_ASSOC);
        $rlogd = "logado";
        $rusid = $res['user_id'];
        $rusnm = $res['user_name'];
        $rmail = $res['user_mail'];
        $rmsgn = "Usuário Logado com Sucesso";
    }
    else{
        $rlogd = "nologed";
        $rusid = null;
        $rusnm = "notname";
        $rmail = "notmail";
        $rmsgn = "Não foi possível completar a operação";
    }
    $data = array(
        'logd' => $rlogd,
        'usid' => $rusid,
        'usnm' => $rusnm,
        'mail' => $rmail,
        'msgn' => $rmsgn
    );

    $json = json_encode($data);
    echo $json;

}