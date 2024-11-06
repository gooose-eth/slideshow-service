import { Router } from 'express'
import home from './home.js'

const router = Router()

// public
router.get('/', home) // 슬라이드쇼 목록
// router.get('/slideshow/:id/', null) // 슬라이드쇼 하나 가져오기
// router.post('/auth/login/', null) // 로그인
// router.post('/auth/logout/', null) // 로그아웃

// manager
// router.get('/manager/slideshow/', null) // 목록 가져오기
// router.get('/manager/slideshow/:id/', null) // 하나 가져오기
// router.post('/manager/slideshow/', null) // 만들기
// router.put('/manager/slideshow/:id/', null) // 수정하기
// router.delete('/manager/slideshow/:id/', null) // 삭제하기
// router.put('/manager/slideshow/default/', null) // 기본값 수정
// router.put('/manager/slideshow/language/', null) // 언어값 수정
// router.put('/manager/setting/', null) // 매니저 설정
// router.get('/manager/auth/', null) // 인증 프로바이더 목록
// router.post('/manager/auth/', null) // 인증 프로바이더 추가
// router.put('/manager/auth/:id/', null) // 인증 프로바이더 수정
// router.delete('/manager/auth/:id/', null) // 인증 프로바이더 삭제

export default router
