SELECT --seleção sobre o resultado do union
       COUNT("colunas") AS "vezes",
       "colunas" AS "numero"
FROM ( SELECT "bola1" AS "colunas"
       FROM "lotofacil"
       UNION ALL
       SELECT "bola2" AS "colunas"
       FROM "lotofacil"
       UNION ALL
       SELECT "bola3" AS "colunas"
       FROM "lotofacil"
       UNION ALL
       SELECT "bola4" AS "colunas"
       FROM "lotofacil"
       UNION ALL
       SELECT "bola5" AS "colunas"
       FROM "lotofacil"
       UNION ALL
       SELECT "bola6" AS "colunas"
       FROM "lotofacil"
       UNION ALL
       SELECT "bola7" AS "colunas"
       FROM "lotofacil"
       UNION ALL
       SELECT "bola8" AS "colunas"
       FROM "lotofacil"
       UNION ALL
       SELECT "bola9" AS "colunas"
       FROM "lotofacil"
       UNION ALL
       SELECT "bola10" AS "colunas"
       FROM "lotofacil"
       UNION ALL
       SELECT "bola11" AS "colunas"
       FROM "lotofacil"
       UNION ALL
       SELECT "bola12" AS "colunas"
       FROM "lotofacil"
       UNION ALL
       SELECT "bola13" AS "colunas"
       FROM "lotofacil"
       UNION ALL
       SELECT "bola14" AS "colunas"
       FROM "lotofacil"
       UNION ALL
       SELECT "bola15" AS "colunas"
       FROM "lotofacil" ) "a" --necessário nomear o union para funcinonar
GROUP BY "colunas"
ORDER BY "vezes" DESC
