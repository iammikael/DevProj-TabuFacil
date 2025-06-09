/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `usuario_email_key` ON `usuario`(`email`);

-- AddForeignKey
ALTER TABLE `aluno_turma` ADD CONSTRAINT `aluno_turma_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `aluno_turma` ADD CONSTRAINT `aluno_turma_id_turma_fkey` FOREIGN KEY (`id_turma`) REFERENCES `turma`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `turma` ADD CONSTRAINT `turma_id_professor_fkey` FOREIGN KEY (`id_professor`) REFERENCES `usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
