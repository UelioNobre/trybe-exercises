#!/bin/bash

# Exercicio 1
echo "1 - Acessa a pasta unix_tests"
cd unix_tests

# Exercicio 2
echo "2 - Roda o comando ls para ver permissões dos arquivos"
echo "$(ls -la)"

# Exercicio 3
echo "3 - Mude a permissão do arquivo bunch_of_things.txt para leitura e escrita para todos os usuario e confere"
chmod 666 bunch_of_things.txt
echo "$(ls -l)"