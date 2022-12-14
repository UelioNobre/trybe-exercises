# Exercícios

## Parte I - Criação de arquivos e diretórios

**Dica:** Para criação de arquivos vazios você pode utilizar o comando `touch nome-do-arquivo.extensao`.

1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado `unix_tests` e navegue até ele.

```sh
$ mkdir unix_tests
```

2. Crie um arquivo de texto com o nome `trybe.txt`.

```sh
$ touch trybe.txt
```

3. Crie uma cópia do arquivo `trybe.txt` com nome `trybe_backup.txt`.

```sh
$ cp trybe.txt trybe_backup.txt
```

4. Renomeie o arquivo `trybe.txt`.

```sh
$ mv trybe.txt trybe_renamed.txt
```

5. Dentro de `unix_tests`, crie um novo diretório chamado `backup`.

```sh
$ mkdir backup
```

6. Mova o arquivo `trybe_backup.txt` para o diretório `backup`.

```sh
$ mv trybe_backup.txt backup
```

7. Dentro de `unix_tests`, crie um novo diretório chamado `backup2`.

```sh
$ mkdir backup2
```

8. Mova o arquivo `trybe_backup.txt` da pasta backup para a pasta backup2.

```sh
$ mv backup/trybe_backup.txt backup2/trybe_backup.txt
```

9. Apague a pasta backup.

```sh
$ rmdir backup
```

10. Renomeie a pasta backup2 para backup.

```sh
$ mv backup2 backup
```

11. Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.

```sh
$ pwd
$ ls -l .
```

12. Apague o diretório backup.

```sh
$ rmdir backup
```

13. Limpe o terminal.

```sh
$ clear
```

**Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado `skills.txt`:**

```
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
```

14. Mostre na tela as 5 primeiras skills do arquivo skills.txt.

```sh
$ head -5 skills.txt
```

15. Mostre na tela as 4 últimas skills do arquivo `skills.txt`.

```sh
$ tail -4 skills.txt
```

16. Apague todos os arquivos que terminem em `.txt`.

```sh
$ rm *.txt
```

---

## Parte II - Manipulação & Busca

1. Na pasta unix_tests, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:

```sh
$ curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
```

2. Mostre todo o conteúdo do arquivo countries.txt na tela.

```sh
$ cat countries.txt.
```

3. Mostre o conteúdo de `countries.txt`, página por página, até encontrar a Zambia.

```sh
$ less countries.txt
```

4. Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia.

```sh
$ less countries.txt
```

Agora digite `/Zambia`

5. Busque por Brazil no countries.txt.

```sh
$ cat countries.txt | grep Brazil
```

6. Busque novamente por `brazil`, mas agora utilizando o _lower case_.

```sh
$ cat countries.txt | grep -i brazil
```

---

> Para os próximos exercícios, crie um novo arquivo chamado `phrases.txt` e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.

---

7. Busque pelas frases que não contenham a palavra `fox`.

```sh
$ cat -n phrases.txt | grep -v fox
```

8. Conte o número de palavras do arquivo `phrases.txt`.

```sh
$ wc -w phrases.txt
```

9. Conte o número de linhas do arquivo `phrases.txt`.

```sh
$ wc -l phrases.txt
```

10. Crie os arquivos empty.tbt e empty.pdf.

```sh
$ touch empty.tbt empty.pdf
```

11. Liste todos os arquivos do diretório `unix_tests`.

```sh
$ ls -l .
```

12. Liste todos os arquivos que terminem com `txt`.

```sh
$ ls -l | grep txt
```

13. Liste todos os arquivos que terminem com `tbt` ou `txt`.

```sh
$ ls -l | grep -E 'txt|tbt'$
```

14. Acesse o manual do comando ls.

```sh
$ man ls
```
