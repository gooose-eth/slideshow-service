<?php
namespace Core;
use Exception;
use Firebase\JWT\JWT;
use Firebase\JWT\ExpiredException;

/**
 * Token
 */

class Token {

//  const baseTime = 60 * 60; // (s * m)

  /**
   * create token
   *
   * @param object $op
   * @return object
   * @throws Exception
   */
  public static function create($op = null): object
  {
    if (!$op) throw new Exception('no option');

    $now = time();
    $uniqueId = substr(md5(time()), 0, 8);

    // set token
    $payload = (object)[
      'iss' => $_ENV['PATH_URL'], // 서비스 주소
      'jti' => $uniqueId, // 랜덤문자
      'iat' => $now, // 발급시간
      'exp' => $now + (int)$_ENV['TOKEN_EXPIRY_TIME'], // 만료시간
      'data' => $op->data ?? (object)[],
    ];

    // encode token
    $jwt = JWT::encode($payload, $_ENV['TOKEN_KEY']);

    return (object)[
      'token' => $jwt,
      'payload' => $payload,
      'uniqueId' => $uniqueId,
    ];
  }

  /**
   * get token
   *
   * @param string $token
   * @param string $uniqueId
   * @return object
   * @throws Exception
   */
  public static function get($token, $uniqueId): object
  {
    $output = (object)[];
    $decoded = null;
    $key = $_ENV['TOKEN_KEY'];

    try
    {
      if (!$token) throw new Exception('No token');
      $decoded = JWT::decode($token, $key, ['HS256']);
      //
    }
    catch (ExpiredException $e)
    {
      //
      JWT::$leeway = (int)$_ENV['TOKEN_EXPIRY_TIME'];
      $decoded = JWT::decode($token, $key, ['HS256']);
    }

    return (object)[];
  }

}
