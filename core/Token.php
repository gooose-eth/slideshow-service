<?php
namespace Core;
use Exception;
use Firebase\JWT\JWT;
use Firebase\JWT\ExpiredException;

/**
 * Token
 */

class Token {

  /**
   * create token
   *
   * @return object
   * @throws Exception
   */
  public static function create(): object
  {
    $now = time();
    // set token
    $payload = (object)[
      'iss' => $_ENV['PATH_URL'], // 서비스 주소
      'iat' => $now, // 발급시간
      'exp' => $now + (int)$_ENV['TOKEN_EXPIRY_TIME'], // 만료시간
    ];
    // encode token
    $jwt = JWT::encode($payload, $_ENV['TOKEN_KEY']);
    return (object)[
      'jwt' => $jwt,
      'payload' => $payload,
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
    }
    catch (ExpiredException $e)
    {
      // 오류로 보내주기
    }

    return (object)[];
  }

}
