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
   * check token
   *
   * @param string $token
   * @throws Exception
   */
  public static function check($token)
  {
    try
    {
      if (!$token) throw new Exception('No token');
      $jwt = JWT::decode($token, $_ENV['TOKEN_KEY'], ['HS256']);
      if ($_ENV['PATH_URL'] !== $jwt->iss)
      {
        throw new Exception('The domain does not match.');
      }
    }
    catch (ExpiredException $e)
    {
      throw new Exception('Expired token');
    }
  }

}
