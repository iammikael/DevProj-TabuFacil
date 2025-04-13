-- CreateTable
CREATE TABLE `aluno_turma` (
    `id_usuario` INTEGER NOT NULL,
    `id_turma` INTEGER NOT NULL,

    PRIMARY KEY (`id_usuario`, `id_turma`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `avisos` (
    `id_aviso` INTEGER NOT NULL,
    `data_hora` DATETIME(0) NULL,
    `titulo` VARCHAR(45) NULL,
    `conteudo` BLOB NULL,
    `id_turma` INTEGER NOT NULL,

    PRIMARY KEY (`id_aviso`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comentario` (
    `id` INTEGER NOT NULL,
    `data_hora` DATETIME(0) NULL,
    `comentario_aluno` BLOB NULL,
    `comentario_professor` VARCHAR(45) NULL,
    `id_treinamento` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `treinamento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data_hora` DATETIME(0) NULL,
    `media_acertos` FLOAT NULL,
    `avaliacao_prof` SMALLINT NULL,
    `id_aluno` INTEGER NOT NULL,
    `id_turma` INTEGER NOT NULL,
    `id_professor` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `treinamento_tabuada` (
    `id` INTEGER NOT NULL,
    `primeiro_numero` INTEGER NULL,
    `segundo_numero` INTEGER NULL,
    `resultado` INTEGER NULL,
    `resposta_aluno` INTEGER NULL,
    `id_treinamento` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `turma` (
    `id` INTEGER NOT NULL,
    `nome` VARCHAR(45) NULL,
    `media_turma` FLOAT NULL,
    `id_professor` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(45) NULL,
    `email` VARCHAR(45) NULL,
    `senha` VARCHAR(45) NULL,
    `tipo_usuario` ENUM('Aluno', 'Professor', 'Administrador') NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
