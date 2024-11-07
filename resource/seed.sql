-- Assets data
CREATE TABLE `slideshow` (
    `id` INTEGER NOT NULL UNIQUE,
    `code` TEXT NOT NULL UNIQUE, -- 유니크한 코드
    `title` TEXT NULL, -- 제목
    `description` TEXT NULL, -- 설명
    `slides` TEXT NOT NULL DEFAULT '[]', -- 슬라이드 목록
    `preference` TEXT NOT NULL DEFAULT '{}', -- 슬라이드쇼 환경설정
    `json` TEXT NOT NULL DEFAULT '{}', -- 그 외의 값들
    `status` TEXT NOT NULL, -- 상태
    `regdate` TEXT NOT NULL,
    `updated_at` TEXT NOT NULL,
    PRIMARY KEY (`id` AUTOINCREMENT)
);

-- File data
CREATE TABLE `file` (
    `id` INTEGER NOT NULL UNIQUE,
    `id_slideshow` INTEGER NOT NULL, -- 슬라이드쇼 아이디
    `path` TEXT NOT NULL, -- 파일이 저장되어있는 경로
    `name` TEXT NOT NULL, -- 파일이름
    `type` TEXT NOT NULL, -- 파일 타입
    `size` INTEGER NOT NULL, -- 파일 용량
    `json` TEXT NOT NULL DEFAULT '{}', -- 파일의 정보 (날짜,이미지사이즈)
    `mode` TEXT NOT NULL, -- 모드
    `regdate` TEXT NOT NULL,
    `updated_at` TEXT NOT NULL,
    PRIMARY KEY (`id` AUTOINCREMENT),
    FOREIGN KEY (`id_slideshow`) REFERENCES `slideshow` (`id`)
);

-- Provider data
CREATE TABLE `provider` (
    `id` INTEGER NOT NULL UNIQUE,
    `name` TEXT NOT NULL UNIQUE, -- 서비스 이름
    `code` TEXT NOT NULL UNIQUE, -- 서비스 고유코드
    `user_id` TEXT NOT NULL, -- 유저 아이디
    `user_name` TEXT NULL, -- 유저 이름
    `user_avatar` TEXT NULL, -- 유저 아바타
    `user_email` TEXT NULL, -- 유저 이메일
    `regdate` TEXT NOT NULL,
    PRIMARY KEY (`id` AUTOINCREMENT)
);

-- Provider data
CREATE TABLE `tokens` (
    `id` INTEGER NOT NULL UNIQUE,
    `id_provider` INTEGER NOT NULL UNIQUE, -- 프로바이더 아이디
    `access` TEXT NOT NULL, -- 엑세스 코드
    `refresh` TEXT NOT NULL, -- 리프레시 코드
    `expired` TEXT NOT NULL, -- 만료시간
    `regdate` TEXT NOT NULL,
    PRIMARY KEY (`id` AUTOINCREMENT),
    FOREIGN KEY (`id_provider`) REFERENCES `provider` (`id`)
);
