
/* =====================================================
   INICIALIZAÇÃO DO SISTEMA DE QUESTÕES
===================================================== */
window.questions = [];
let id = 1;

function addQuestion(area, difficulty, question, code, options, answer, explanation, trap){
    questions.push({
        id: id++,
        area,
        difficulty,
        question,
        code,
        options,
        answer,
        explanation,
        trap
    });
}

/* =====================================================
   BLOCO 1: LÓGICA DE PROGRAMAÇÃO (40 QUESTÕES)
===================================================== */

// --- Questões Originais Ajustadas ---
addQuestion(
    "Lógica de Programação", "Fácil",
    "Considere o algoritmo abaixo. Qual será o valor final de x?",
    "x = 6\ny = 3\n\nif(x > y){\n    x = x - y;\n}else{\n    x = x + y;\n}\n\nx = x * 2;",
    ["A) 6", "B) 18", "C) 3", "D) 6"],
    "A",
    "Inicialmente x=6 e y=3. Como x é maior que y, ocorre x=x-y, resultando em 3. Depois x é multiplicado por 2, chegando em 6.",
    "Acompanhe cada linha do algoritmo; a banca costuma explorar atribuições sequenciais."
);

addQuestion(
    "Lógica de Programação", "Média",
    "Considere o algoritmo abaixo. Qual será o valor final de x?",
    "x = 7\ny = 4\n\nif(x > y){\n    x = x - y;\n}else{\n    x = x + y;\n}\n\nx = x * 2;",
    ["A) 6", "B) 22", "C) 3", "D) 7"],
    "A",
    "Inicialmente x=7 e y=4. Como x é maior que y, ocorre x=x-y, resultando em 3. Depois x é multiplicado por 2, chegando em 6.",
    "Acompanhe cada linha do algoritmo; a banca costuma explorar atribuições sequenciais."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Considere o algoritmo abaixo. Qual será o valor final de x?",
    "x = 8\ny = 2\n\nif(x > y){\n    x = x - y;\n}else{\n    x = x + y;\n}\n\nx = x * 2;",
    ["A) 12", "B) 20", "C) 6", "D) 8"],
    "A",
    "Inicialmente x=8 e y=2. Como x é maior que y, ocorre x=x-y, resultando em 6. Depois x é multiplicado por 2, chegando em 12.",
    "Acompanhe cada linha do algoritmo; a banca costuma explorar atribuições sequenciais."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual será o valor final impresso para a variável 'res' ao término do algoritmo abaixo?",
    "int res = 1;\nfor(int i = 1; i <= 5; i++){\n    if(i % 2 == 0){\n        res += i;\n    } else {\n        res -= 1;\n    }\n}\nSystem.out.println(res);",
    ["A) 4", "B) 7", "C) 6", "D) 5"],
    "C",
    "Passo a passo:\n- i=1 (ímpar): res = 1 - 1 = 0\n- i=2 (par): res = 0 + 2 = 2\n- i=3 (ímpar): res = 2 - 1 = 1\n- i=4 (par): res = 1 + 4 = 5\n- i=5 (ímpar): res = 5 - 1 = 4.",
    "Rastreie com atenção os operadores de atribuição acumulativa (+= e -=)."
);

addQuestion(
    "Lógica de Programação", "Média",
    "Qual é o comportamento do algoritmo abaixo ao receber n = 5?",
    "int calc(int n){\n    if(n == 0) return 1;\n    return n * calc(n - 1);\n}",
    ["A) Retorna 5", "B) Retorna 120", "C) Retorna 25", "D) Entra em loop infinito"],
    "B",
    "O algoritmo calcula o fatorial de n. Para n=5, o resultado é 5 * 4 * 3 * 2 * 1 = 120.",
    "Caso base (n=0 retorna 1) interrompe a recursão com segurança."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "Em lógica booleana, qual é o resultado da expressão abaixo?",
    "boolean v = (true && false) || (true && true);",
    ["A) true", "B) false", "C) null", "D) undefined"],
    "A",
    "(true && false) resulta em false. (true && true) resulta em true. Logo, false || true resulta em true.",
    "Avalie primeiro os parênteses internos antes do operador OR (||)."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual será o valor impresso após a execução do trecho de código com matrizes?",
    "int[][] m = {{1, 2}, {3, 4}};\nint s = 0;\nfor(int i=0; i<2; i++){\n    s += m[i][i];\n}\nSystem.out.println(s);",
    ["A) 4", "B) 5", "C) 10", "D) 3"],
    "B",
    "O código soma os elementos da diagonal principal da matriz (m[0][0] + m[1][1]), ou seja, 1 + 4 = 5.",
    "m[i][i] acessa exatamente a diagonal principal em matrizes quadradas."
);

addQuestion(
    "Lógica de Programação", "Média",
    "O que faz um algoritmo de ordenação do tipo Bubble Sort ao varrer um vetor?",
    "// Conceito teórico de Bubble Sort",
    ["A) Divide o vetor recursivamente ao meio", "B) Compara elementos adjacentes e os troca de posição se estiverem na ordem errada", "C) Cria uma tabela hash temporária", "D) Seleciona sempre o menor elemento restante"],
    "B",
    "O Bubble Sort flutua os maiores elementos para o final do vetor através de sucessivas trocas de elementos vizinhos.",
    "Eficiência O(n²) no pior caso."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "Qual estrutura de controle condicional é mais recomendada para tratar múltiplas ramificações discretas de uma mesma variável inteira ou caractere?",
    "// Seleção múltipla por valor",
    ["A) if-else encadeado profundo", "B) switch-case", "C) do-while", "D) recursão terminal"],
    "B",
    "O comando switch-case melhora a legibilidade e a performance em testes de igualdade múltiplos para uma única variável.",
    "Evita a poluição visual de muitos ifs aninhados."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual será o valor de x ao final da execução do código abaixo?",
    "int x = 10;\nif(x > 5) x *= 2;\nif(x > 15) x -= 5;\nelse x += 5;",
    ["A) 20", "B) 15", "C) 25", "D) 10"],
    "B",
    "x inicia em 10. 10 > 5 é verdadeiro, logo x vira 20. Na segunda condição, 20 > 15 é verdadeiro, logo executa x -= 5, resultando em 15. O bloco else é ignorado.",
    "Cuidado: o segundo 'if' é independente do primeiro, mas o 'else' pertence estritamente ao segundo 'if'."
);

addQuestion(
    "Lógica de Programação", "Média",
    "O que avalia uma estrutura de repetição do tipo 'do-while' em relação ao 'while' tradicional?",
    "do { ... } while(condicao);",
    ["A) O bloco de código é executado ao menos uma vez, pois a condição é avaliada no final", "B) A condição é testada antes de qualquer execução", "C) Ela substitui obrigatoriamente recursões complexas", "D) Ela não aceita contadores numéricos"],
    "A",
    "No do-while, o corpo executa primeiro e a condição de parada é checada no fim.",
    "Garante pelo menos uma execução do bloco interno."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "Qual operador lógico representa a negação (inversão do valor booleano) na maioria das linguagens de programação?",
    "// Operador unário de inversão",
    ["A) &&", "B) ||", "C) !", "D) =="],
    "C",
    "O ponto de exclamação (!) inverte o valor booleano (true vira false, e vice-versa).",
    "Operador unário de negação lógica."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual será o resultado da operação de módulo (resto da divisão) para a expressão abaixo em Java/C?",
    "int r = -7 % 3;",
    ["A) -1", "B) 1", "C) -2", "D) 2"],
    "A",
    "Em Java e C, o operador de módulo preserva o sinal do dividendo (o primeiro operando). Portanto, -7 % 3 resulta em -1.",
    "Fique atento às especificidades matemáticas versus a implementação de linguagens de programação."
);

// --- Novas Questões Adicionadas para Completar 40 ---

addQuestion(
    "Lógica de Programação", "Fácil",
    "O que representa um fluxograma em algoritmos?",
    "// Representação gráfica",
    ["A) A compilação binária de um programa", "B) A representação gráfica da lógica de um algoritmo através de símbolos padronizados", "C) Um banco de dados relacional em nuvem", "D) Uma ferramenta de estilização de páginas web"],
    "B",
    "O fluxograma utiliza formas geométricas para ilustrar o fluxo de execução e tomadas de decisão de um processo ou algoritmo.",
    "Símbolos comuns incluem retângulos para processamento e losangos para decisões."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "Qual é o tipo de dado adequado para armazenar valores lógicos que assumem apenas verdadeiro ou falso?",
    "// Tipagem básica",
    ["A) String", "B) int", "C) boolean", "D) double"],
    "C",
    "O tipo boolean armazena exclusivamente os estados verdadeiro (true) ou falso (false).",
    "Essencial para testes condicionais."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "Em uma atribuição matemática em programação como 'x = x + 1', qual é a operação realizada comumente conhecida?",
    "x = x + 1;",
    ["A) Decremento", "B) Incremento", "C) Divisão inteira", "D) Potenciação"],
    "B",
    "A adição de uma unidade a uma variável é chamada de incremento, frequentemente abreviada como x++.",
    "Muito utilizada em contadores de laços."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "Qual comando de saída é amplamente utilizado na linguagem Java para exibir mensagens no console?",
    "System.out.println(\"Teste\");",
    ["A) console.print()", "B) printfs()", "C) System.out.println()", "D) echo()"],
    "C",
    "System.out.println imprime o argumento fornecido seguido de uma quebra de linha no console padrão.",
    "Essencial para testes rápidos de depuração."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "O que é uma variável em programação?",
    "// Conceito fundamental",
    ["A) Um valor fixo que nunca pode ser alterado durante a execução", "B) Um espaço reservado na memória RAM para armazenar dados temporários que podem mudar", "C) Um erro de compilação crítico", "D) Uma biblioteca externa de funções matemáticas"],
    "B",
    "Variáveis guardam dados que variam e são manipulados ao longo da execução do programa.",
    "Possuem nome, tipo e valor armazenado."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "Qual operador relacional representa a comparação de igualdade entre dois valores em linguagens como Java e C?",
    "if (a == b)",
    ["A) =", "B) ==", "C) ===", "D) !="],
    "B",
    "O operador '==' compara se dois valores são iguais. Um único '=' é reservado para atribuição.",
    "Confundir '=' com '==' é um dos erros mais comuns de iniciantes."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "Qual estrutura de repetição é controlada por uma contagem numérica explícita (inicialização, condição e incremento)?",
    "for(int i=0; i<10; i++)",
    ["A) while", "B) do-while", "C) for", "D) switch"],
    "C",
    "O laço 'for' agrupa a inicialização, a condição de continuidade e a atualização do contador em uma única linha estruturada.",
    "Ideal para repetições com número de vezes conhecido."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "O que significa a sigla IDE no contexto de desenvolvimento de software?",
    "// Ferramentas",
    ["A) Interface Dinâmica de Execução", "B) Integrated Development Environment", "C) Internal Data Engine", "D) Internet Domain Extension"],
    "B",
    "IDE significa Ambiente de Desenvolvimento Integrado, reunindo editores, compiladores e depuradores.",
    "Exemplos: IntelliJ, Eclipse, VS Code."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "Qual operador representa a disjunção lógica (OU) em Java?",
    "if (a || b)",
    ["A) &&", "B) ||", "C) !", "D) ^"],
    "B",
    "O operador '||' retorna verdadeiro se pelo menos uma das condições envolvidas for verdadeira.",
    "Diferente do '&&' (E), que exige que todas sejam verdadeiras."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "O que é um vetor (array unidimensional)?",
    "int[] v = new int[5];",
    ["A) Uma matriz tridimensional sem limites", "B) Uma estrutura de dados homogênea que armazena múltiplos elementos de um mesmo tipo sob um único identificador", "C) Um ponteiro de memória volátil estático", "D) Uma função matemática de raiz"],
    "B",
    "Arrays armazenam coleções indexadas de dados do mesmo tipo em posições contíguas de memória.",
    "O primeiro índice de um array em Java é sempre 0."
);

addQuestion(
    "Lógica de Programação", "Média",
    "Qual será o valor impresso pelo trecho abaixo?\n\nint a = 5;\nint b = 2;\nSystem.out.println(a / b);",
    "int a = 5;\nint b = 2;\nSystem.out.println(a / b);",
    ["A) 2.5", "B) 2", "C) 3", "D) 2.0"],
    "B",
    "Como 'a' e 'b' são inteiros, a divisão inteira descarta a parte fracionária. 5 / 2 resulta em 2.",
    "Para obter 2.5, pelo menos um dos operandos deveria ser do tipo ponto flutuante (double/float)."
);

addQuestion(
    "Lógica de Programação", "Média",
    "Analise o laço abaixo:\n\nint c = 0;\nfor(int i = 0; i < 4; i++){\n    c += i;\n}\nSystem.out.println(c);",
    "int c = 0;\nfor(int i = 0; i < 4; i++){\n    c += i;\n}\nSystem.out.println(c);",
    ["A) 10", "B) 6", "C) 4", "D) 0"],
    "B",
    "O laço acumula os valores de i de 0 a 3: 0 + 0 + 1 + 2 + 3 = 6.",
    "Atenção ao limite superior: i vai até estritamente menor que 4."
);

addQuestion(
    "Lógica de Programação", "Média",
    "O que caracteriza uma busca binária em relação à busca linear?",
    "// Algoritmos de busca",
    ["A) A busca binária exige que o vetor esteja ordenado e possui complexidade logarítmica O(log n)", "B) A busca binária é mais lenta que a linear em grandes volumes de dados", "C) A busca linear divide o vetor recursivamente ao meio", "D) Não há diferença prática de desempenho"],
    "A",
    "A busca binária divide o espaço de busca pela metade a cada passo, exigindo ordenação prévia, o que a torna muito eficiente.",
    "Complexidade O(log n) contra O(n) da busca linear."
);

addQuestion(
    "Lógica de Programação", "Média",
    "Qual é a saída do código abaixo?\n\nString s = \"Java\";\nSystem.out.println(s.length());",
    "String s = \"Java\";\nSystem.out.println(s.length());",
    ["A) 3", "B) 4", "C) 5", "D) Erro de compilação"],
    "B",
    "O método length() retorna a quantidade de caracteres da string. 'J-a-v-a' possui 4 caracteres.",
    "Diferente de arrays, onde length é um atributo, em strings Java length() é um método."
);

addQuestion(
    "Lógica de Programação", "Média",
    "O que acontece se um vetor em Java for declarado com tamanho 5 e tentarmos acessar o índice 5 (ex: v[5])?",
    "int[] v = new int[5];\nint x = v[5];",
    ["A) Retorna o valor 0 por padrão", "B) Lança uma exceção do tipo ArrayIndexOutOfBoundsException em tempo de execução", "C) Expande o vetor automaticamente", "D) Retorna null"],
    "B",
    "Os índices válidos para um vetor de tamanho 5 vão de 0 a 4. Acessar o índice 5 viola os limites e gera exceção.",
    "Cuidado com erros de off-by-one em laços de repetição."
);

addQuestion(
    "Lógica de Programação", "Média",
    "Qual é o resultado da expressão lógica se a=true, b=false e c=true:\n`!(a && b) || c`?",
    "boolean res = !(a && b) || c;",
    ["A) false", "B) true", "C) null", "D) Indefinido"],
    "B",
    "(a && b) é false. Negação !(false) é true. Como temos true || c (true || true), o resultado geral é true.",
    "Resolva os parênteses e operações de negação de dentro para fora."
);

addQuestion(
    "Lógica de Programação", "Média",
    "Qual é o objetivo principal de modularizar um programa utilizando funções ou métodos?",
    "// Boas práticas",
    ["A) Aumentar o consumo de memória RAM", "B) Promover a reutilização de código, legibilidade e facilidade de manutenção", "C) Impedir o uso de variáveis globais", "D) Forçar o uso obrigatório de orientação a objetos"],
    "B",
    "A modularização divide um problema complexo em partes menores, isoladas e fáceis de testar e reutilizar.",
    "Conceito fundamental de engenharia de software."
);

addQuestion(
    "Lógica de Programação", "Média",
    "Analise o trecho:\n\nint x = 3;\nswitch(x) {\n    case 1: x++; break;\n    case 3: x += 2;\n    case 5: x--; break;\n    default: x = 0;\n}\nSystem.out.println(x);",
    "int x = 3;\nswitch(x) {\n    case 1: x++; break;\n    case 3: x += 2;\n    case 5: x--; break;\n    default: x = 0;\n}\nSystem.out.println(x);",
    ["A) 5", "B) 4", "C) 0", "D) 3"],
    "B",
    "x inicia em 3. Entra no 'case 3', executando x += 2 (x vira 5). Como NÃO HÁ comando 'break' no case 3, o fluxo executa o 'case 5' em seguida: x-- (x vira 4), onde encontra o break.",
    "Atenção ao efeito 'fall-through' do switch-case quando o break é omitido."
);

addQuestion(
    "Lógica de Programação", "Média",
    "Qual método de ordenação compara elementos distantes entre si e vai reduzindo o intervalo (gap) a cada passo?",
    "// Algoritmos avançados",
    ["A) Shell Sort", "B) Bubble Sort", "C) Selection Sort", "D) Linear Sort"],
    "A",
    "O Shell Sort é uma evolução do Insertion Sort que permite a troca de elementos distantes, melhorando a velocidade.",
    "Reduz o intervalo progressivamente até 1."
);

addQuestion(
    "Lógica de Programação", "Média",
    "O que significa a complexidade assintótica de um algoritmo expressa pela notação Big O?",
    "// Complexidade",
    ["A) O tempo exato em segundos que o código demora para rodar no computador", "B) O comportamento de crescimento do tempo de execução ou uso de espaço conforme o tamanho da entrada aumenta", "C) A quantidade de linhas de código escritas", "D) O consumo de bateria do dispositivo"],
    "B",
    "Big O mede a escalabilidade do algoritmo, abstraindo detalhes de hardware e focando no comportamento com entradas grandes.",
    "Exemplos: O(1), O(n), O(n²)."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual será o valor impresso ao final da execução do algoritmo abaixo?\n\nint total = 0;\nfor(int i = 1; i <= 3; i++){\n    for(int j = 1; j <= 2; j++){\n        total += (i * j);\n    }\n}\nSystem.out.println(total);",
    "int total = 0;\nfor(int i = 1; i <= 3; i++){\n    for(int j = 1; j <= 2; j++){\n        total += (i * j);\n    }\n}\nSystem.out.println(total);",
    ["A) 12", "B) 18", "C) 36", "D) 24"],
    "B",
    "Cálculo por iteração:\n- i=1: j=1 (1*1=1), j=2 (1*2=2) -> soma=3\n- i=2: j=1 (2*1=2), j=2 (2*2=4) -> soma=6\n- i=3: j=1 (3*1=3), j=2 (3*2=6) -> soma=9\nTotal = 3 + 6 + 9 = 18.",
    "Rastreie laços aninhados multiplicando e somando passo a passo."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual é a complexidade de tempo no pior caso para o algoritmo de ordenação Quick Sort?",
    "// Análise de Algoritmos",
    ["A) O(n log n)", "B) O(n)", "C) O(n²)", "D) O(log n)"],
    "C",
    "Embora no caso médio o Quick Sort seja O(n log n), no pior caso (quando a escolha do pivô é inadequada, como escolher sempre o menor/maior elemento), sua complexidade degrada para O(n²).",
    "O caso médio é excelente, mas o pior caso exige cuidado na escolha do pivô."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Analise o método recursivo abaixo:\n\npublic int m(int n) {\n    if (n <= 1) return n;\n    return m(n - 1) + m(n - 2);\n}\n\nO que esse método calcula e qual o valor de m(4)?",
    "public int m(int n) {\n    if (n <= 1) return n;\n    return m(n - 1) + m(n - 2);\n}",
    ["A) Sequência de Fibonacci; resultado 3", "B) Fatorial; resultado 24", "C) Soma progressiva; resultado 10", "D) Potenciação; resultado 16"],
    "A",
    "O método implementa a série de Fibonacci. Para m(4): m(3)+m(2) -> (m(2)+m(1)) + (m(1)+m(0)) -> ((1+1)+1) + (1+0) = 3.",
    "A sequência de Fibonacci soma os dois termos anteriores."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual é o comportamento da passagem de parâmetros por valor em tipos primitivos ao modificar a variável dentro de um método em Java?",
    "// Passagem de parâmetros",
    ["A) O valor original na função chamadora é alterado permanentemente", "B) Apenas uma cópia do valor é passada, logo a variável original permanece inalterada fora do escopo do método", "C) Ocorre um erro de compilação automático", "D) A variável passa a ser tratada como constante"],
    "B",
    "Em Java, os tipos primitivos são passados estritamente por valor, significando que o método manipula uma cópia local.",
    "Alterações internas no parâmetro não afetam a variável externa."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual será a saída do código abaixo ao processar operadores bitwise:\n\nint x = 5;\nint y = 3;\nSystem.out.println(x & y);",
    "int x = 5;\nint y = 3;\nSystem.out.println(x & y);",
    ["A) 7", "B) 1", "C) 5", "D) 0"],
    "B",
    "Em binário: 5 é '101' e 3 é '011'. A operação AND bitwise (&) compara bit a bit: 101 & 011 resulta em 001, que vale 1 em decimal.",
    "Operadores bitwise operam diretamente sobre a representação binária dos números."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "O que caracteriza uma estrutura de dados do tipo Pilha (Stack) em relação à política de acesso aos elementos?",
    "// Estruturas de Dados Lineares",
    ["A) FIFO (First In, First Out)", "B) LIFO (Last In, First Out)", "C) Acesso randômico por índice O(1)", "D) Ordenação automática alfabética"],
    "B",
    "A pilha segue o princípio LIFO (último a entrar, primeiro a sair), onde inserções e remoções ocorrem no mesmo topo.",
    "Exemplo clássico: pilha de pratos ou o controle de chamadas (stack trace) de métodos."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual é a principal vantagem de uma Lista Encadeada (Linked List) sobre um Vetor tradicional estático?",
    "// Estruturas Dinâmicas",
    ["A) Acesso direto a qualquer elemento em tempo O(1) usando índices", "B) Inserções e remoções eficientes sem a necessidade de realocar ou deslocar blocos inteiros de memória contígua", "C) Menor consumo de memória RAM por elemento", "D) Suporte nativo a matrizes multidimensionais"],
    "B",
    "Enquanto vetores exigem realocação e deslocamento custoso para inserções no meio, listas encadeadas apenas ajustam referências de ponteiros.",
    "Em contrapartida, perdem o acesso indexado direto O(1)."
);
/* =====================================================
   BLOCO 2: ESTRUTURAS DE DADOS (40 QUESTÕES)
===================================================== */

// --- Questões Originais Ajustadas ---
addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual elemento será removido?",
    "Stack<Integer> pilha = new Stack<>();\n\npilha.push(10);\npilha.push(20);\npilha.push(30);\n\npilha.pop();",
    ["A) 10", "B) 20", "C) 30", "D) Nenhum"],
    "C",
    "A pilha segue LIFO. O último elemento inserido é removido primeiro.",
    "LIFO = Last In First Out."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual elemento será atendido primeiro?",
    "Queue<Integer> fila = new LinkedList<>();\n\nfila.add(10);\nfila.add(20);\nfila.add(30);\n\nfila.poll();",
    ["A) 10", "B) 20", "C) 30", "D) Erro"],
    "A",
    "A fila segue FIFO. O primeiro inserido sai primeiro.",
    "FIFO = First In First Out."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual estrutura representa melhor uma hierarquia?",
    "        Diretor\n        /       \\\n   Gerente A     Gerente B",
    ["A) Fila", "B) Pilha", "C) Árvore", "D) Vetor"],
    "C",
    "Estruturas hierárquicas são representadas por árvores.",
    "Árvore possui raiz e nós."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "Qual é a principal propriedade de uma estrutura de dados do tipo Pilha (Stack)?",
    "Operações push e pop",
    ["A) FIFO (First In, First Out)", "B) LIFO (Last In, First Out)", "C) Acesso direto por índice O(1)", "D) Ordenação automática alfabética"],
    "B",
    "A pilha opera no modelo LIFO, onde o último elemento inserido é obrigatoriamente o primeiro a ser retirado.",
    "Pilha = pratos empilhados (último a entrar sai primeiro)."
);

addQuestion(
    "Estruturas de Dados", "Difícil",
    "Em uma Lista Simplesmente Encadeada, qual é a complexidade de tempo para inserir um novo elemento diretamente no início da lista (cabeça)?",
    "Head -> [Nó 1] -> [Nó 2]",
    ["A) O(1)", "B) O(n)", "C) O(log n)", "D) O(n log n)"],
    "A",
    "Como mantemos a referência direta para a cabeça (head), a inserção no início requer apenas atualizar os ponteiros, custando tempo constante O(1).",
    "Inserir no final sem ponteiro de cauda exigiria varrer toda a lista O(n)."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual estrutura de dados não linear organiza elementos em uma relação hierárquica de pai e filhos, contendo uma raiz única?",
    "Nós conectados por arestas hierárquicas",
    ["A) Fila", "B) Pilha", "C) Árvore", "D) Vetor estático"],
    "C",
    "Árvores modelam hierarquias corporativas, sistemas de arquivos e sintaxes de compiladores.",
    "Possuem nós raiz, ramos e folhas."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "O que caracteriza uma Árvore Binária de Busca (BST)?",
    "Filho esquerdo menor / Filho direito maior",
    ["A) Cada nó pode ter no máximo 4 filhos", "B) Os nós à esquerda são menores que a raiz, e os à direita são maiores", "C) Os dados são armazenados estritamente de forma linear", "D) Não existem chaves duplicadas em hipótese alguma"],
    "B",
    "A propriedade fundamental da BST garante buscas eficientes comparando valores recursivamente.",
    "Busca em árvore balanceada custa O(log n)."
);

addQuestion(
    "Estruturas de Dados", "Difícil",
    "Qual método de resolução de colisões em Tabelas Hash armazena múltiplos elementos que caíram no mesmo índice em uma lista encadeada interna?",
    "Índice Hash -> [Elemento A -> Elemento B]",
    ["A) Endereçamento aberto por sondagem linear", "B) Encadeamento separado (Chaining)", "C) Redimensionamento estático", "D) Dupla Hifenação"],
    "B",
    "No encadeamento separado, cada posição da tabela aponta para uma lista ligada que abriga as colisões.",
    "Evita perda de dados e estouro de índice."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "Qual é a complexidade de tempo no pior caso para buscar um elemento em um Vetor Desordenado de tamanho n?",
    "Busca linear em array comum",
    ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n²)"],
    "C",
    "Como o vetor não está ordenado, pode ser necessário inspecionar cada um dos n elementos (busca linear).",
    "Busca binária só se aplica a vetores previamente ordenados."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual estrutura linear é ideal para implementar algoritmos de percurso em largura (BFS) em grafos?",
    "Estrutura FIFO para controle de visita",
    ["A) Pilha", "B) Fila", "C) Tabela Hash", "D) Matriz esparsa"],
    "B",
    "A Fila (Queue) gerencia a ordem de exploração dos nós vizinhos no algoritmo BFS.",
    "Busca em profundidade (DFS) utiliza Pilha (ou recursão)."
);

addQuestion(
    "Estruturas de Dados", "Difícil",
    "O que é um Grafo Direcionado (Dígrafo)?",
    "Arestas com setas direcionais unidirecionais",
    ["A) Um grafo cujas arestas possuem direção específica de um vértice para outro", "B) Um grafo que não permite ciclos", "C) Uma árvore com múltiplos nós raízes", "D) Uma lista encadeada bidirecional"],
    "A",
    "No dígrafo, a aresta (u, v) indica um caminho de u para v, mas não necessariamente o inverso.",
    "Exemplo clássico: seguidores no Twitter ou rotas de mão única."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "Qual é a principal vantagem de uma Lista Duplamente Encadeada sobre a Lista Simplesmente Encadeada?",
    "Ponteiros next e prev",
    ["A) Ocupa menos memória RAM", "B) Permite percorrer a lista tanto para frente quanto para trás de forma eficiente", "C) Dispensa o uso de ponteiros", "D) Ordena os elementos automaticamente"],
    "B",
    "Cada nó possui um ponteiro para o próximo e para o anterior, facilitando operações de remoção e navegação reversa.",
    "O custo é um leve acréscimo no consumo de memória para o segundo ponteiro."
);

addQuestion(
    "Estruturas de Dados", "Difícil",
    "Em uma Heap Binária Mínima (Min-Heap), onde se encontra sempre o menor elemento da estrutura?",
    "Árvore parcialmente ordenada",
    ["A) Na raiz da árvore", "B) Em uma das folhas da última camada", "C) No último nó inserido", "D) Distribuído aleatoriamente"],
    "A",
    "Na Min-Heap, o elemento pai é sempre menor ou igual aos seus filhos, garantindo que a raiz guarde o menor valor global.",
    "Na Max-Heap, a raiz guarda o maior valor."
);

// --- Novas Questões Adicionadas para Completar 40 ---

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual operação é utilizada para inserir um elemento em uma Pilha?",
    "// Operações básicas de Pilha",
    ["A) enqueue", "B) push", "C) addLast", "D) insert"],
    "B",
    "O método push empilha um novo elemento no topo da estrutura.",
    "O oposto é o pop."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual operação é utilizada para inserir um elemento em uma Fila tradicional?",
    "// Operações básicas de Fila",
    ["A) push", "B) enqueue (ou add)", "C) pop", "D) peek"],
    "B",
    "Elementos entram no final da fila através de operações como enqueue ou add.",
    "O atendimento ocorre pelo início (dequeue/poll)."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Como é chamado o nó de uma árvore que não possui nenhum filho (ou seja, está no final dos ramos)?",
    "// Terminologia de Árvores",
    ["A) Raiz", "B) Folha (Leaf)", "C) Sub-árvore", "D) Aresta"],
    "B",
    "Nós terminais sem descendentes são denominados nós folha.",
    "Nós intermediários são nós internos."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual estrutura de dados permite armazenar pares de chave-valor permitindo buscas extremamente rápidas?",
    "// Mapeamento direto",
    ["A) Fila", "B) Tabela Hash (HashMap)", "C) Lista Encadeada Simples", "D) Vetor desordenado"],
    "B",
    "A Tabela Hash utiliza funções de espalhamento para mapear chaves diretamente a índices de armazenamento.",
    "Complexidade média O(1) para inserção e busca."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "O que mede a altura de uma árvore binária?",
    "// Propriedades dimensionais",
    ["A) A quantidade total de folhas", "B) O comprimento do maior caminho da raiz até uma folha", "C) O número total de nós multiplicado por dois", "D) A largura do nível mais preenchido"],
    "B",
    "A altura representa o número de arestas no caminho mais longo da raiz até um nó folha.",
    "Árvores balanceadas mantêm a altura logarítmica."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual é a principal característica de uma estrutura de dados estática, como um vetor tradicional?",
    "// Alocação de memória",
    ["A) Seu tamanho pode crescer dinamicamente em tempo de execução conforme a demanda", "B) Seu tamanho é fixo e definido no momento da sua criação", "C) Ela descarta automaticamente elementos duplicados", "D) Ela não precisa de tipo definido"],
    "B",
    "Estruturas estáticas alocam um bloco fixo de memória que não pode ser redimensionado após a inicialização.",
    "Para tamanhos variáveis, utilizam-se estruturas dinâmicas."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Em um grafo, como são chamados os pontos ou entidades que armazenam os dados?",
    "// Elementos de Grafos",
    ["A) Arestas", "B) Vértices (ou Nós)", "C) Ponteiros", "D) Registros"],
    "B",
    "Vértices representam os objetos ou entidades, enquanto arestas representam as conexões entre eles.",
    "Conceito base da Teoria dos Grafos."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual método permite consultar o elemento que está no topo de uma Pilha sem removê-lo?",
    "// Consulta de Pilha",
    ["A) pop", "B) peek", "C) poll", "D) clear"],
    "B",
    "O método peek (ou top) inspeciona o elemento atual do topo sem alterar a estrutura da pilha.",
    "Diferente do pop, que remove o item."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "O que significa dizer que uma estrutura de dados é linear?",
    "// Classificação estrutural",
    ["A) Os elementos formam uma sequência onde cada elemento possui um único predecessor e um único sucessor (exceto pontas)", "B) Os dados são dispostos em matrizes bidimensionais complexas", "C) Os nós possuem múltiplos pais simultâneos", "D) Os dados não possuem ordem sequencial"],
    "A",
    "Estruturas lineares (como listas, pilhas e filas) organizam os dados de forma sequencial.",
    "Oposição às estruturas não lineares (árvores e grafos)."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual é o tipo de percurso em árvores binárias que visita primeiro a raiz, depois a sub-árvore esquerda e por fim a sub-árvore direita?",
    "// Percursos",
    ["A) Em-ordem (Inorder)", "B) Pré-ordem (Preorder)", "C) Pós-ordem (Postorder)", "D) Por nível (Level order)"],
    "B",
    "O percurso em pré-ordem processa a raiz (Root-Left-Right), sendo útil para clonar árvores.",
    "Existem três percursos recursivos principais baseados em profundidade."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "Qual é a complexidade de tempo para inserir ou remover um elemento no início de uma Lista Encadeada versus um Vetor?",
    "// Comparativo de desempenho",
    ["A) Lista Encadeada: O(1); Vetor: O(n)", "B) Lista Encadeada: O(n); Vetor: O(1)", "C) Ambas possuem complexidade O(n)", "D) Ambas possuem complexidade O(1)"],
    "A",
    "Na lista encadeada, basta ajustar o ponteiro da cabeça O(1). No vetor, inserir no início exige deslocar todos os demais elementos uma posição à frente O(n).",
    "Vantagem clássica das listas para inserções frequentes."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "O que ocorre com uma Árvore Binária de Busca (BST) se inserirmos elementos já ordenados de forma crescente?",
    "// Degradação de Árvores",
    ["A) Ela se torna perfeitamente balanceada", "B) Ela degenera para uma estrutura semelhante a uma lista encadeada linear com complexidade O(n)", "C) Ocorre um erro de estouro de pilha imediato", "D) Os elementos são duplicados automaticamente"],
    "B",
    "Inserções ordenadas criam uma árvore desbalanceada (degenerada), perdendo a eficiência logarítmica e virando O(n).",
    "Árvores AVL e Rubro-Negras resolvem isso com auto-balanceamento."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "Qual é a principal função de uma função de dispersão (Hash Function) eficiente?",
    "// Tabelas Hash",
    ["A) Ordenar alfabeticamente os elementos inseridos", "B) Converter chaves de entrada em índices inteiros válidos dentro do tamanho da tabela, minimizando colisões", "C) Criptografar dados sensíveis de senhas", "D) Compactar o tamanho dos dados armazenados"],
    "B",
    "Uma boa função hash distribui uniformemente as chaves pelos slots disponíveis na tabela, reduzindo colisões.",
    "Essencial para manter o acesso em O(1)."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "Qual algoritmo de percurso em grafos utiliza uma Fila para explorar os vértices camada por camada a partir de uma origem?",
    "// Algoritmos em Grafos",
    ["A) Busca em Profundidade (DFS)", "B) Busca em Largura (BFS)", "C) Algoritmo de Dijkstra", "D) Ordenação Topológica"],
    "B",
    "O BFS (Breadth-First Search) expande os nós vizinhos mais próximos antes de avançar para os mais distantes usando uma Fila.",
    "O DFS utiliza Pilha."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "O que caracteriza uma Árvore AVL em relação às Árvores Binárias de Busca comuns?",
    "// Árvores Balanceadas",
    ["A) Ela é uma árvore binária de busca auto-balanceada que mantém a diferença de altura entre sub-árvores menor ou igual a 1", "B) Ela aceita apenas dados numéricos inteiros", "C) Ela possui quatro filhos por nó", "D) Ela não permite remoção de nós"],
    "A",
    "A AVL aplica rotações automáticas (simples e duplas) para garantir altura O(log n) e evitar degradação.",
    "Nomeada em homenagem aos seus criadores Adelson-Velsky e Landis."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "Qual é o comportamento da operação de redimensionamento (rehash) em uma Tabela Hash quando ela atinge seu fator de carga limite?",
    "// Redimensionamento",
    ["A) A tabela é apagada inteira", "B) A tabela dobra de tamanho aproximadamente e todos os elementos existentes são recalculados e reinseridos", "C) Novos elementos são rejeitados permanentemente", "D) Os elementos excedentes vão para uma pilha auxiliar"],
    "B",
    "O rehash expande o array subjacente para acomodar mais dados sem degradar a performance por excesso de colisões.",
    "Mantém a eficiência O(1) amortizada."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "Em um Grafo Ponderado, o que representam os pesos associados às arestas?",
    "// Grafos Ponderados",
    ["A) A cor visual do nó", "B) Custos, distâncias, capacidades ou tempos associados ao trajeto entre dois vértices", "C) A quantidade de filhos que o vértice possui", "D) O nível hierárquico do nó"],
    "B",
    "Grafos ponderados atribuem valores numéricos às arestas, fundamentais para resolver problemas de menor caminho.",
    "Exemplos: mapas rodoviários (quilômetros) ou redes de computadores (latência)."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "Qual é a complexidade de tempo para acessar um elemento pelo seu índice em um Array (Vetor estático)?",
    "// Acesso a Vetores",
    ["A) O(1)", "B) O(n)", "C) O(log n)", "D) O(n²)"],
    "A",
    "Como o array ocupa posições contíguas de memória e o índice indica o deslocamento exato a partir da base, o acesso é direto e instantâneo O(1).",
    "Grande vantagem dos vetores."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "O que é um Deque (Double-Ended Queue)?",
    "// Deque",
    ["A) Uma fila especial que permite inserções e remoções tanto no início quanto no final", "B) Uma pilha que aceita apenas dois elementos", "C) Uma árvore com dois troncos", "D) Uma lista encadeada sem ponteiros"],
    "A",
    "O Deque flexibiliza as pontas, combinando comportamentos de pilha e fila de forma unificada.",
    "Utilizado em algoritmos de janela deslizante."
);

addQuestion(
    "Estruturas de Dados", "Difícil",
    "Qual é a complexidade de tempo no pior caso para realizar operações de busca em uma Árvore AVL perfeitamente balanceada com n nós?",
    "// Desempenho AVL",
    ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n log n)"],
    "B",
    "Como a AVL garante fator de balanceamento estrito, sua altura máxima é rigorosamente limitada a O(log n), garantindo buscas rápidas.",
    "Evita o pior caso O(n) da BST comum."
);

addQuestion(
    "Estruturas de Dados", "Difícil",
    "Qual algoritmo clássico encontra a árvore geradora mínima (MST) em um grafo conexo e ponderado adicionando sempre a aresta de menor peso disponível que não forme ciclos?",
    "// Algoritmos de Grafos",
    ["A) Algoritmo de Dijkstra", "B) Algoritmo de Kruskal", "C) Algoritmo de Floyd-Warshall", "D) Busca em Largura"],
    "B",
    "Kruskal ordena todas as arestas por peso e usa estruturas de conjunto disjunto (Union-Find) para montar a árvore geradora mínima.",
    "O algoritmo de Prim constrói a árvore a partir de um vértice inicial."
);

addQuestion(
    "Estruturas de Dados", "Difícil",
    "Em uma Max-Heap representada por um vetor, se um nó está localizado no índice i, quais são as fórmulas matemáticas para encontrar os índices de seus filhos esquerdo e direito?",
    "// Heap em Vetor",
    ["A) Esquerdo: 2*i + 1, Direito: 2*i + 2", "B) Esquerdo: i - 1, Direito: i + 1", "C) Esquerdo: i / 2, Direito: i * 2", "D) Esquerdo: i + 2, Direito: i + 4"],
    "A",
    "A indexação baseada em zero para heap em vetor utiliza 2*i + 1 para o filho esquerdo e 2*i + 2 para o direito.",
    "O pai de um nó em i é dado por (i - 1) / 2."
);

addQuestion(
    "Estruturas de Dados", "Difícil",
    "Qual algoritmo é utilizado para encontrar o caminho mais curto de um único vértice de origem para todos os demais vértices em um grafo com arestas de pesos não negativos?",
    "// Caminho mais curto",
    ["A) Algoritmo de Dijkstra", "B) Algoritmo de Kruskal", "C) Busca em Profundidade", "D) Ordenação Topológica"],
    "A",
    "O algoritmo de Dijkstra utiliza uma fila de prioridades gananciosa para determinar as menores distâncias a partir de uma fonte.",
    "Não funciona corretamente se houver pesos negativos nas arestas (onde se usa Bellman-Ford)."
);

addQuestion(
    "Estruturas de Dados", "Difícil",
    "O que caracteriza uma Árvore Rubro-Negra (Red-Black Tree)?",
    "// Árvores Avançadas",
    ["A) Uma árvore binária de busca auto-balanceada onde cada nó possui um atributo de cor (vermelho ou preto) e regras restritas de coloração para manter o balanceamento aproximado", "B) Uma árvore que possui estritamente nós coloridos em vermelho", "C) Uma árvore que aceita apenas nós com chaves numéricas pares", "D) Uma árvore onde os nós vermelhos ficam apenas na raiz"],
    "A",
    "A Rubro-Negra relaxa ligeiramente o balanceamento em comparação com a AVL, resultando em menor custo de rotações em inserções e remoções frequentes.",
    "Utilizada internamente no TreeMap e TreeSet do Java."
);

addQuestion(
    "Estruturas de Dados", "Difícil",
    "Qual é a complexidade temporal para remover um elemento de uma Heap Binária (por exemplo, extrair o elemento máximo/mínimo da raiz) em uma estrutura com n elementos?",
    "// Complexidade de Heaps",
    ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n log n)"],
    "B",
    "A remoção da raiz substitui o topo pelo último elemento e executa a operação de reorganização (heapify) descendo pela árvore, proporcional à altura O(log n).",
    "A consulta ao topo (peek) custa O(1)."
);

addQuestion(
    "Estruturas de Dados", "Difícil",
    "O que é uma Ordenação Topológica aplicada a um Grafo Direcionado Acíclico (DAG)?",
    "// Ordenação Topológica",
    ["A) Uma listagem linear de todos os vértices tal que, para toda aresta direcionada u -> v, u aparece antes de v na ordem", "B) Ordenar alfabeticamente os nomes dos vértices do grafo", "C) Organizar os vértices em ordem decrescente de grau de saída", "D) Um algoritmo para apagar ciclos do grafo"],
    "A",
    "A ordenação topológica lineariza dependências (como pré-requisitos de matérias ou compilação de tarefas), exigindo ausência de ciclos (DAG).",
    "Pode ser implementada via DFS ou algoritmo de Kahn."
);

/* =====================================================
   BLOCO 3: PROGRAMAÇÃO ORIENTADA A OBJETOS (40 QUESTÕES)
===================================================== */

// --- Questões Originais Ajustadas ---
addQuestion(
    "POO", "Fácil",
    "Observe o código Java. Qual conceito está representado pela criação do objeto?",
    "class Servidor{\n   String nome;\n}\n\nServidor s = new Servidor();",
    ["A) Herança", "B) Instanciação", "C) Encapsulamento", "D) Polimorfismo"],
    "B",
    "A classe Servidor é utilizada para criar um objeto chamado s.",
    "Classe é o molde; objeto é a instância criada."
);

addQuestion(
    "POO", "Média",
    "Qual princípio da orientação a objetos é demonstrado?",
    "class Conta{\n   private double saldo;\n}",
    ["A) Herança", "B) Recursividade", "C) Encapsulamento", "D) Sobrecarga"],
    "C",
    "O modificador private restringe o acesso direto ao atributo saldo.",
    "Private está fortemente associado ao encapsulamento."
);

addQuestion(
    "POO", "Difícil",
    "Qual será a saída?",
    "class Animal{\n   void som(){\n      System.out.println(\"Animal\");\n   }\n}\n\nclass Cachorro extends Animal{\n   @Override\n   void som(){\n      System.out.println(\"Cachorro\");\n   }\n}\n\nAnimal a = new Cachorro();\na.som();",
    ["A) Animal", "B) Cachorro", "C) Erro", "D) Nenhuma saída"],
    "B",
    "O objeto criado é Cachorro. O método sobrescrito é executado por polimorfismo.",
    "Observe sempre o tipo real do objeto."
);

addQuestion(
    "POO", "Fácil",
    "Qual palavra-chave representa herança em Java?",
    "class Analista ______ Funcionario{\n}",
    ["A) implements", "B) extends", "C) inherit", "D) super"],
    "B",
    "Classes utilizam extends para herdar outra classe.",
    "implements é utilizado para interfaces."
);

addQuestion(
    "POO", "Fácil",
    "Qual pilar da POO permite criar novas classes baseadas em classes existentes, reaproveitando código e estabelecendo hierarquias?",
    "class Carro extends Veiculo",
    ["A) Encapsulamento", "B) Herança", "C) Polimorfismo", "D) Abstração"],
    "B",
    "A herança promove o reaproveitamento de atributos e métodos comuns na superclasse.",
    "Relação conceitual de especialização ('é-um')."
);

addQuestion(
    "POO", "Média",
    "Qual princípio do SOLID determina que uma classe deve ter apenas um, e apenas um, motivo para mudar?",
    "Single Responsibility Principle",
    ["A) Princípio da Responsabilidade Única (SRP)", "B) Princípio Aberto-Fechado (OCP)", "C) Inversão de Dependência (DIP)", "D) Segregação de Interfaces (ISP)"],
    "A",
    "O SRP evita classes monolíticas com múltiplas responsabilidades desconexas.",
    "Alta coesão está diretamente ligada ao cumprimento do SRP."
);

addQuestion(
    "POO", "Difícil",
    "O que estabelece o Princípio Aberto-Fechado (OCP) do SOLID?",
    "Módulos abertos para extensão, fechados para modificação",
    ["A) Classes devem ser abertas para alterações diretas no código-fonte original sempre que houver bug", "B) Entidades de software devem ser abertas para extensão, mas fechadas para modificação", "C) Interfaces não podem possuir métodos default", "D) Atributos privados devem ser tornados públicos para facilitar testes"],
    "B",
    "O OCP permite adicionar novos comportamentos estendendo o código (via herança ou polimorfismo) sem precisar alterar o código já testado e funcional.",
    "Base fundamental para design patterns flexíveis."
);

addQuestion(
    "POO", "Fácil",
    "O que representa uma Classe Abstrata em linguagens orientadas a objetos?",
    "public abstract class Conta",
    ["A) Um modelo que pode ser instanciado diretamente com o operador new", "B) Uma classe genérica que serve primariamente como base e não pode ser instanciada diretamente", "C) Uma interface que obrigatoriamente possui atributos estáticos", "D) Um erro de sintaxe de compilação"],
    "B",
    "Classes abstratas definem contratos parciais e comportamentos comuns para suas subclasses.",
    "Tentativa de dar 'new ClasseAbstrata()' gera erro de compilação."
);

addQuestion(
    "POO", "Média",
    "Qual é a principal diferença conceitual entre uma Interface e uma Classe Abstrata em Java moderno?",
    "Contratos puros vs Herança estrutural",
    ["A) Interfaces não podem declarar métodos", "B) Classes abstratas permitem herança múltipla irrestrita", "C) Interfaces definem contratos de comportamento sem estado de instância, enquanto classes abstratas podem conter estado e métodos concretos", "D) Não há nenhuma diferença prática"],
    "C",
    "Interfaces focam no 'o quê' o objeto faz (comportamento puro), enquanto classes abstratas compartilham código estrutural e estado.",
    "Java permite implementar múltiplas interfaces, mas herdar de apenas uma classe."
);

addQuestion(
    "POO", "Difícil",
    "O que caracteriza o acoplamento em um sistema orientado a objetos?",
    "Nível de dependência entre classes/módulos",
    ["A) A quantidade de linhas de código em um método", "B) O grau de interdependência entre os módulos; deseja-se sempre mantê-lo baixo", "C) A velocidade de execução da máquina virtual", "D) A duplicação de variáveis locais"],
    "B",
    "Alto acoplamento engessa o sistema, tornando manutenções e testes custosos. O ideal arquitetural é baixo acoplamento.",
    "Acoplamento baixo + Alta coesão = Código de alta qualidade."
);

addQuestion(
    "POO", "Fácil",
    "Qual modificador de acesso restringe a visibilidade de membros de uma classe apenas ao próprio pacote e às subclasses (mesmo em pacotes diferentes)?",
    "protected int idade;",
    ["A) private", "B) public", "C) protected", "D) static"],
    "C",
    "O modificador protected abre o escopo de visibilidade para herança e para o pacote local.",
    "private é estrito à classe; default restringe ao pacote."
);

addQuestion(
    "POO", "Média",
    "O que é polimorfismo de sobrecarga (Overloading)?",
    "Métodos com mesmo nome e assinaturas diferentes",
    ["A) Reescrita de métodos herdados na subclasse", "B) Declaração de múltiplos métodos com o mesmo nome na mesma classe, diferenciando-se pelos parâmetros", "C) Criação de objetos estáticos", "D) Ocultação de atributos privados"],
    "B",
    "A sobrecarga ocorre na mesma classe com assinaturas de parâmetros distintas (quantidade ou tipos).",
    "Diferente de sobrescrita (Overriding), que ocorre em herança."
);

addQuestion(
    "POO", "Difícil",
    "O que estabelece o Princípio da Inversão de Dependência (DIP) do SOLID?",
    "Depender de abstrações, não de implementações",
    ["A) Módulos de alto nível não devem depender de módulos de baixo nível; ambos devem depender de abstrações", "B) O banco de dados deve ser injetado diretamente no Controller", "C) Classes concretas nunca devem ser instanciadas", "D) Injeção de dependência é proibida em arquiteturas limpas"],
    "A",
    "O DIP desacopla componentes através de interfaces ou classes abstratas, facilitando testes unitários e trocas de tecnologia.",
    "Base conceitual para frameworks como Spring."
);

addQuestion(
    "POO", "Média",
    "O que significa encapsulamento em POO?",
    "Ocultamento de detalhes internos de implementação",
    ["A) Compactação de arquivos binários", "B) Ocultação do estado interno de um objeto, expondo apenas uma interface controlada de acesso", "C) Criação de cópias idênticas de objetos na memória RAM", "D) Herança múltipla de comportamentos"],
    "B",
    "O encapsulamento protege os dados contra alterações inválidas diretas, utilizando métodos de acesso controlados.",
    "Atributos private + métodos getters/setters públicos."
);

// --- Novas Questões Adicionadas para Completar 40 ---

addQuestion(
    "POO", "Fácil",
    "O que é uma classe em Programação Orientada a Objetos?",
    "// Conceito básico",
    ["A) Um objeto instanciado na memória RAM", "B) Um molde ou projeto que define os atributos e métodos comuns a um grupo de objetos", "C) Uma função isolada sem relação com dados", "D) Um banco de dados relacional"],
    "B",
    "A classe funciona como a planta baixa (blueprint) para a criação posterior de instâncias (objetos).",
    "Define o tipo estrutural dos objetos gerados."
);

addQuestion(
    "POO", "Fácil",
    "Qual é o operador utilizado em Java para instanciar novos objetos a partir de uma classe?",
    "// Instanciação",
    ["A) allocate", "B) new", "C) create", "D) instance"],
    "B",
    "O operador 'new' aloca memória dinamicamente para o novo objeto e chama o construtor correspondente.",
    "Exemplo: `Pessoa p = new Pessoa();`"
);

addQuestion(
    "POO", "Fácil",
    "Como são chamadas as variáveis declaradas dentro de uma classe que representam as características dos objetos?",
    "// Atributos",
    ["A) Métodos", "B) Atributos (ou Variáveis de Instância)", "C) Pacotes", "D) Construtores"],
    "B",
    "Atributos definem o estado de um objeto em POO.",
    "Exemplo: nome, idade, cor."
);

addQuestion(
    "POO", "Fácil",
    "Qual é a função de um construtor em uma classe?",
    "// Construtores",
    ["A) Apagar o objeto da memória ao final da execução", "B) Inicializar o estado do objeto no momento de sua criação", "C) Sobrescrever métodos herdados", "D) Conectar o sistema a um banco de dados externo"],
    "B",
    "O construtor possui o mesmo nome da classe e é executado automaticamente no uso do operador new.",
    "Pode receber parâmetros para configurar valores iniciais."
);

addQuestion(
    "POO", "Fácil",
    "Qual palavra-chave em Java é utilizada para referenciar o objeto atual dentro de seus próprios métodos ou construtores?",
    "// Referência interna",
    ["A) super", "B) this", "C) base", "D) self"],
    "B",
    "A palavra-chave 'this' aponta para a instância corrente da classe, útil para resolver ambiguidades de nomes de parâmetros.",
    "Diferente de 'super', que referencia a superclasse."
);

addQuestion(
    "POO", "Fácil",
    "Qual modificador de acesso torna um atributo ou método visível para qualquer outra classe do projeto sem restrições?",
    "// Modificadores",
    ["A) private", "B) protected", "C) public", "D) default"],
    "C",
    "O modificador 'public' abre a visibilidade globalmente.",
    "O oposto mais restritivo é o 'private'."
);

addQuestion(
    "POO", "Fácil",
    "O que significa a sigla SOLID no contexto de design de software orientado a objetos?",
    "// Princípios SOLID",
    ["A) Cinco princípios fundamentais de design e arquitetura limpa em POO", "B) Uma biblioteca padrão de banco de dados em Java", "C) Um conjunto de regras estritas de formatação de código CSS", "D) Um padrão de arquitetura de redes"],
    "A",
    "SOLID agrupa 5 princípios de orientação a objetos criados para facilitar manutenção e testabilidade.",
    "Inclui SRP, OCP, LSP, ISP e DIP."
);

addQuestion(
    "POO", "Fácil",
    "Qual é o principal objetivo da Abstração em POO?",
    "// Pilares da POO",
    ["A) Esconder detalhes complexos de implementação e expor apenas os aspectos essenciais de um objeto", "B) Criar cópias idênticas de classes", "C) Impedir a herança de métodos", "D) Aumentar o consumo de processamento"],
    "A",
    "A abstração simplifica o modelo do mundo real focando no que é relevante para o sistema atual.",
    "Um dos quatro pilares fundamentais."
);

addQuestion(
    "POO", "Fácil",
    "O que ocorre quando uma classe implementa uma Interface em Java?",
    "// Interfaces",
    ["A) Ela herda obrigatoriamente os atributos estáticos da interface", "B) Ela se compromete a fornecer uma implementação concreta para todos os métodos abstratos declarados na interface", "C) Ela perde o direito de usar construtores", "D) Ela se torna automaticamente uma classe abstrata"],
    "B",
    "Implementar uma interface exige cumprir o contrato definindo os corpos de seus métodos.",
    "Garante padronização de comportamento."
);

addQuestion(
    "POO", "Média",
    "Qual é a diferença fundamental entre Sobrescrita (Override) e Sobrecarga (Overload)?",
    "// Polimorfismo",
    ["A) Override ocorre na mesma classe com parâmetros iguais; Overload ocorre na subclasse", "B) Override substitui o comportamento de um método herdado na subclasse mantendo a assinatura; Overload cria múltiplos métodos com mesmo nome mas assinaturas diferentes na mesma classe", "C) Não há diferença conceitual", "D) Override é exclusivo de variáveis estáticas"],
    "B",
    "Override exige herança e mesma assinatura; Overload ocorre na mesma classe alterando os parâmetros.",
    "Pilares centrais do polimorfismo."
);

addQuestion(
    "POO", "Média",
    "O que estabelece o Princípio da Substituição de Liskov (LSP) do SOLID?",
    "// Princípio LSP",
    ["A) Objetos de uma superclasse devem poder ser substituídos por objetos de suas subclasses sem quebrar a corretude do programa", "B) Subclasses nunca podem sobrescrever métodos herdados", "C) Classes abstratas não podem ter subclasses concretas", "D) Herança deve ser evitada em favor de switch-cases"],
    "A",
    "O LSP garante que a herança seja utilizada corretamente, preservando contratos e comportamentos esperados.",
    "O 'L' do acrônimo SOLID."
);

addQuestion(
    "POO", "Média",
    "O que define o Princípio da Segregação de Interfaces (ISP) do SOLID?",
    "// Princípio ISP",
    ["A) Uma classe deve implementar uma única interface gigante com todos os métodos do sistema", "B) É melhor ter várias interfaces específicas para clientes específicos do que uma interface única e genérica", "C) Interfaces não podem estender outras interfaces", "D) Métodos em interfaces devem ser sempre privados"],
    "B",
    "O ISP evita que classes sejam forçadas a implementar métodos vazios ou desnecessários que não utilizam.",
    "Promove interfaces coesas e enxutas."
);

addQuestion(
    "POO", "Média",
    "O que é coesão em um sistema orientado a objetos?",
    "// Coesão vs Acoplamento",
    ["A) O grau em que os elementos de um módulo ou classe pertencem juntos e trabalham para um único propósito bem definido", "B) A dependência direta entre duas classes distintas", "C) O número de classes instanciadas na memória", "D) A herança múltipla de atributos"],
    "A",
    "Deseja-se alta coesão nas classes, significando que cada classe possui responsabilidades focadas e claras.",
    "O oposto de classes 'faz-tudo'."
);

addQuestion(
    "POO", "Média",
    "Qual é a utilidade do modificador 'static' aplicado a um atributo em uma classe Java?",
    "// Membros estáticos",
    ["A) Torna o atributo constante e imutável", "B) Faz com que o atributo pertença à classe como um todo, sendo compartilhado por todas as instâncias, e não exclusivo de cada objeto", "C) Oculta o atributo de subclasses", "D) Permite acesso apenas via reflexão"],
    "B",
    "Membros estáticos são associados à classe em vez de objetos individuais.",
    "Acessados diretamente via NomeDaClasse.atributo."
);

addQuestion(
    "POO", "Média",
    "O que é uma classe concreta em POO?",
    "// Classes Concretas",
    ["A) Uma classe que possui métodos abstratos e não pode ser instanciada", "B) Uma classe completa que possui todas as implementações de seus métodos e pode ser instanciada diretamente com new", "C) Uma interface sem métodos", "D) Uma classe usada apenas para testes unitários"],
    "B",
    "Classes concretas implementam todos os contratos necessários e geram objetos reais.",
    "Oposição direta às classes abstratas."
);

addQuestion(
    "POO", "Média",
    "Qual é o comportamento do operador 'instanceof' em Java?",
    "// Operador instanceof",
    ["A) Cria uma nova instância de um objeto na memória", "B) Testa se um objeto é uma instância de uma classe específica ou implementa uma dada interface, retornando um valor booleano", "C) Compara os valores internos de dois objetos", "D) Destrói um objeto alocado"],
    "B",
    "Utilizado em checagens de tipo em tempo de execução antes de realizar casts seguros.",
    "Retorna true ou false."
);

addQuestion(
    "POO", "Média",
    "O que caracteriza o polimorfismo em tempo de execução (dinâmico)?",
    "// Polimorfismo Dinâmico",
    ["A) A resolução de qual método sobrescrito executar é feita em tempo de execução com base no tipo real do objeto instanciado", "B) A escolha do método ocorre estaticamente pelo compilador", "C) Ocorre exclusivamente em métodos privados", "D) Não existe em linguagens como Java"],
    "A",
    "Através de referências da superclasse apontando para subclasses, o método correto é despachado dinamicamente.",
    "Base da flexibilidade orientada a objetos."
);

addQuestion(
    "POO", "Média",
    "O que é uma exceção (Exception) em Java e como a POO lida com erros?",
    "// Tratamento de Exceções",
    ["A) Um erro de hardware irrecuperável", "B) Um objeto que representa uma condição anormal de execução, o qual pode ser lançado (throw) e tratado (try-catch)", "C) Um tipo especial de interface gráfica", "D) Uma variável global estática"],
    "B",
    "Em Java, exceções são classes que herdam de Throwable, permitindo tratamento robusto de falhas.",
    "Promove confiabilidade no sistema."
);

addQuestion(
    "POO", "Difícil",
    "Qual é a restrição principal em relação à herança de classes em Java?",
    "// Restrições de Herança",
    ["A) Uma classe pode herdar diretamente de múltiplas classes (herança múltipla de implementação)", "B) Java não suporta herança múltipla de classes, permitindo apenas herança simples de classe (extends único)", "C) Classes filhas não podem acessar métodos públicos da mãe", "D) Subclasses devem obrigatoriamente ser abstratas"],
    "B",
    "Para evitar o 'problema do diamante' e complexidades estruturais, Java restringe extends a uma única classe por vez.",
    "A múltipla herança de comportamento é simulada via interfaces."
);

addQuestion(
    "POO", "Difícil",
    "O que caracteriza uma classe marcada com a palavra-chave 'final' em Java?",
    "// Modificador final",
    ["A) Ela se torna abstrata e ganha métodos automáticos", "B) Ela não pode ser estendida (não aceita subclasses), prevenindo herança", "C) Seus atributos passam a ser salvos em banco de dados", "D) Ela não pode ser instanciada"],
    "B",
    "Classes final (como String) fecham a hierarquia, impedindo criação de subclasses por razões de segurança ou design.",
    "Métodos final não podem ser sobrescritos."
);

addQuestion(
    "POO", "Difícil",
    "Em um cenário de design orientado a objetos, qual é a principal motivação para aplicar o princípio da Injeção de Dependência (DI)?",
    "// Injeção de Dependência",
    ["A) Acoplar firmemente os componentes concretos dentro das classes de negócio", "B) Desacoplar a criação de dependências da classe que as utiliza, facilitando a substituição de implementações e testes unitários", "C) Aumentar o consumo de memória RAM", "D) Impedir o uso de interfaces"],
    "B",
    "A DI transfere a responsabilidade de instanciar dependências para containers ou classes externas, promovendo flexibilidade.",
    "Pilar essencial para arquiteturas desacopladas."
);

addQuestion(
    "POO", "Difícil",
    "Qual é o comportamento do método `equals()` e do operador `==` quando comparamos dois objetos distintos em Java que possuem o mesmo conteúdo nos atributos?",
    "// Comparação de Objetos",
    ["A) Ambos retornam true", "B) O operador '==' compara referências de memória (retornando false), enquanto o 'equals()', se não sobrescrito, também compara referências, mas costuma ser implementado para comparar o conteúdo lógico dos atributos", "C) O operador '==' compara o conteúdo e equals compara referências", "D) Ambos geram erro de compilação"],
    "B",
    "Comparar objetos com '==` checa se apontam para o mesmo endereço na heap; equals() avalia a igualdade lógica quando implementado corretamente.",
    "Cuidado clássico em provas de programação."
);

addQuestion(
    "POO", "Difícil",
    "O que é uma Interface Funcional em Java (introduzida no Java 8) e qual anotação opcional a caracteriza?",
    "// Interfaces Funcionais",
    ["A) Uma interface que possui múltiplos métodos abstratos e usa a anotação @Multi", "B) Uma interface que possui exatamente um único método abstrato, permitindo o uso de expressões Lambda, caracterizada pela anotação @FunctionalInterface", "C) Uma interface que executa apenas funções matemáticas", "D) Uma classe abstrata sem métodos"],
    "B",
    "Interfaces funcionais servem como base para expressões lambda e programação funcional em Java.",
    "Exemplos nativos: Runnable, Comparator."
);

addQuestion(
    "POO", "Difícil",
    "O que significa o conceito de Imutabilidade (Immutable Objects) em POO e quais são suas vantagens?",
    "// Objetos Imutáveis",
    ["A) Objetos cujos estados internos não podem ser alterados após a sua criação, garantindo segurança em ambientes concorrentes (threads-safe) e previsibilidade", "B) Objetos que mudam de valor aleatoriamente", "C) Objetos que não podem ser instanciados com new", "D) Classes que não possuem métodos getters"],
    "A",
    "Objetos imutáveis (como String e LocalDate) eliminam efeitos colaterais indesejados e problemas de concorrência em multithreading.",
    "Atributos tipicamente marcados como private final."
);

addQuestion(
    "POO", "Difícil",
    "Como o conceito de Encapsulamento se relaciona com o princípio de Ocultamento de Informação (Information Hiding) de David Parnas?",
    "// Encapsulamento Avançado",
    ["A) São conceitos opostos; encapsulamento expõe tudo e ocultamento esconde tudo", "B) O encapsulamento fornece os mecanismos sintáticos (como modificadores private) para aplicar o ocultamento de informações, protegendo o design interno contra mudanças externas", "C) Ocultamento de informação refere-se apenas a arquivos em disco", "D) Não há relação conceitual"],
    "B",
    "Ocultar detalhes internos reduz o impacto de mudanças, permitindo alterar a implementação sem quebrar o código cliente.",
    "Fundamento de projetos de software modulares."
);

addQuestion(
    "POO", "Difícil",
    "Em padrões de projeto (Design Patterns), o que caracteriza o padrão Criacional Singleton?",
    "// Padrões de Projeto",
    ["A) Permite criar qualquer quantidade ilimitada de objetos concorrentes", "B) Garante que uma classe tenha apenas uma única instância em toda a aplicação e fornece um ponto global de acesso a ela", "C) Subdivide objetos complexos em partes menores", "D) Converte interfaces incompatíveis"],
    "B",
    "O Singleton restringe a instanciação a um único objeto, controlando o acesso centralizado (ex: conexões de banco de dados ou loggers).",
    "Construtor privado + método estático getInstance()."
);

/* =====================================================
   BLOCO 4: JAVA (40 QUESTÕES)
===================================================== */

addQuestion(
    "Java", "Fácil",
    "Qual método é o ponto de entrada principal (main entry point) de uma aplicação Java executável?",
    "public static void main(String[] args)",
    ["A) public void start(String[] args)", "B) public static void main(String[] args)", "C) private static void run(String args)", "D) public int main()"],
    "B",
    "A Java Virtual Machine (JVM) procura exatamente pela assinatura public static void main(String[] args) para iniciar a execução de um programa.",
    "Sem esse método exato, a classe não pode ser executada diretamente como um aplicativo standalone."
);

addQuestion(
    "Java", "Fácil",
    "Qual dos seguintes tipos de dados em Java é considerado um tipo primitivo?",
    "int idade = 25;",
    ["A) String", "B) Integer", "C) double", "D) BigDecimal"],
    "C",
    "O tipo double é primitivo e armazena números de ponto flutuante diretamente na pilha (stack). String, Integer e BigDecimal são classes (referências).",
    "Tipos primitivos em Java começam com letra minúscula (int, char, boolean, double, etc.)."
);

addQuestion(
    "Java", "Média",
    "Qual é a principal diferença entre as classes String, StringBuilder e StringBuffer em relação à mutabilidade?",
    "Manipulação de texto eficiente",
    ["A) Todas são imutáveis após a sua criação", "B) String é imutável, enquanto StringBuilder e StringBuffer são mutáveis", "C) StringBuilder é sincronizada para ambientes multi-thread, ao contrário de StringBuffer", "D) StringBuffer consome menos memória que String em qualquer cenário"],
    "B",
    "Objetos do tipo String não podem ser alterados após criados (qualquer modificação gera um novo objeto). StringBuilder e StringBuffer permitem alteração direta no buffer de caracteres.",
    "StringBuffer é thread-safe (sincronizada), enquanto StringBuilder não é, sendo mais rápida em ambientes de uma única thread."
);

addQuestion(
    "Java", "Difícil",
    "O que acontece no código abaixo durante a execução?",
    "String s1 = \"Java\";\nString s2 = new String(\"Java\");\nSystem.out.println(s1 == s2);",
    ["A) Imprime true porque o conteúdo de ambas é idêntico", "B) Imprime false porque o operador == compara referências de memória, e s2 foi instanciada com new", "C) Gera um erro de compilação por tipos incompatíveis", "D) Gera uma exceção NullPointerException em tempo de execução"],
    "B",
    "O operador == em objetos compara o endereço de memória. A string literal \"Java\" vem do String Pool, enquanto new String(...) cria um novo objeto no heap.",
    "Para comparar o conteúdo de textos em Java, deve-se usar o método .equals()."
);

addQuestion(
    "Java", "Média",
    "Qual estrutura de controle de fluxo foi introduzida no Java 12 (tornada permanente no Java 14) como uma forma mais concisa e limpa de substituir múltiplos blocos if-else ou switch tradicionais?",
    "Expressões Switch (Switch Expressions)",
    ["A) O comando goto estruturado", "B) Switch Expressions com uso da seta (->)", "C) O comando try-with-resources avançado", "D) Laço for-each assíncrono"],
    "B",
    "As expressões switch modernas usam o operador -> para retornar valores diretamente sem a necessidade incômoda da instrução break em cada case.",
    "Evita o problema comum de fall-through acidental do switch clássico."
);

addQuestion(
    "Java", "Fácil",
    "Qual modificador de acesso em Java restringe a visibilidade de um atributo ou método apenas às classes do mesmo pacote?",
    "Modificador padrão (Package-Private)",
    ["A) private", "B) public", "C) protected", "D) Nenhum modificador explícito (package-private)"],
    "D",
    "Quando nenhum modificador de acesso é declarado, o membro assume o escopo de pacote (package-private), ficando visível apenas dentro do mesmo diretório/pacote.",
    "Diferente de protected, que também permite acesso por subclasses em pacotes externos."
);

addQuestion(
    "Java", "Média",
    "O que caracteriza uma Interface Funcional em Java (introduzida a partir do Java 8)?",
    "Uso intensivo de expressões lambda",
    ["A) Uma interface que possui obrigatoriamente 10 métodos abstratos", "B) Uma interface que possui exatamente um único método abstrato", "C) Uma interface que não pode conter métodos default", "D) Uma classe abstrata sem construtor"],
    "B",
    "Interfaces funcionais servem como base para expressões lambda e referências de métodos. Elas podem conter métodos default ou estáticos, mas devem ter apenas um método abstrato.",
    "Anotadas frequentemente com @FunctionalInterface."
);

addQuestion(
    "Java", "Difícil",
    "Qual é a principal finalidade da classe Optional<T> introduzida no Java 8?",
    "Eliminar o tratamento manual repetitivo de valores nulos",
    ["A) Substituir completamente o uso de bancos de dados relacionais", "B) Container para representar a presença ou ausência de um valor, evitando NullPointerException", "C) Gerenciar a concorrência em threads de forma automática", "D) Criptografar dados sensíveis na memória"],
    "B",
    "Optional força o desenvolvedor a lidar explicitamente com a possibilidade de um valor ser ausente (null), tornando o código mais seguro e legível.",
    "Evita o famigerado NullPointerException se utilizado corretamente em retornos de métodos."
);

addQuestion(
    "Java", "Fácil",
    "Qual coleção do Java Collections Framework armazena elementos de forma ordenada e não permite elementos duplicados?",
    "Set e suas implementações como HashSet ou TreeSet",
    ["A) ArrayList", "B) HashMap", "C) TreeSet / HashSet", "D) LinkedList"],
    "C",
    "A interface Set modela conjuntos matemáticos, rejeitando inserções duplicadas. O TreeSet ainda mantém os elementos ordenados por sua ordem natural ou comparator.",
    "ArrayList permite duplicatas e mantém ordem de inserção."
);

addQuestion(
    "Java", "Média",
    "O que a API Stream (java.util.stream), introduzida no Java 8, permite realizar de forma declarativa?",
    "Processamento funcional de coleções de dados",
    ["A) Conexão direta com servidores web via protocolo HTTP", "B) Operações de filtro, mapeamento e redução em coleções de dados com suporte a paralelismo", "C) Manipulação direta de ponteiros de memória em baixo nível", "D) Criação automática de interfaces gráficas em Swing"],
    "B",
    "A Stream API permite processar sequências de elementos de maneira declarativa e funcional (usando métodos como filter, map, collect).",
    "Facilita o processamento paralelo sem escrever código manual complexo de threads."
);

addQuestion(
    "Java", "Difícil",
    "No contexto de tratamento de exceções em Java, qual é a principal diferença entre Checked Exceptions e Unchecked Exceptions?",
    "Obrigatoriedade de tratamento em tempo de compilação",
    ["A) Checked exceptions herdam de RuntimeException, enquanto unchecked herdam de Exception", "B) O compilador obriga o desenvolvedor a tratar ou declarar checked exceptions (como IOException), enquanto unchecked (como NullPointerException) não são verificadas em compilação", "C) Exceções checked nunca podem ser capturadas por blocos catch", "D) Unchecked exceptions encerram o sistema operacional obrigatoriamente"],
    "B",
    "Exceções checadas (Exception direta) forçam o uso de try-catch ou throws na assinatura. Exceções não checadas (RuntimeException) indicam falhas de lógica que podem ocorrer em tempo de execução.",
    "Exemplos de unchecked: NullPointerException, ArrayIndexOutOfBoundsException."
);

addQuestion(
    "Java", "Fácil",
    "Qual palavra-chave é utilizada em Java para impedir que uma classe seja herdada ou que um método seja sobrescrito?",
    "final class Servidor",
    ["A) static", "B) private", "C) final", "D) abstract"],
    "C",
    "O modificador final aplicado a uma classe proíbe herança. Aplicado a um método, proíbe sobrescrita (override). Aplicado a uma variável, torna-a uma constante.",
    "Garante imutabilidade estrutural ou de valor."
);

addQuestion(
    "Java", "Média",
    "O que faz o bloco finally em uma estrutura try-catch-finally?",
    "Execução garantida de código de limpeza",
    ["A) É executado apenas se ocorrer uma exceção grave no bloco try", "B) É executado independentemente de ter ocorrido uma exceção ou não", "C) Substitui o bloco catch em qualquer situação", "D) Serve apenas para fechar conexões de rede em modo assíncrono"],
    "B",
    "O bloco finally garante que instruções cruciais (como fechamento de arquivos, conexões de banco de dados ou sockets) sejam executadas antes de sair do bloco.",
    "Mesmo que haja um return no try ou catch, o finally executa (com raras exceções como System.exit())."
);

addQuestion(
    "Java", "Difícil",
    "O que são os Records introduzidos formalmente no Java 14/16?",
    "Classes portadoras de dados imutáveis (Transparent Data Carriers)",
    ["A) Arquivos de configuração binários usados pelo compilador javac", "B) Uma forma concisa de declarar classes cuja única finalidade é armazenar dados imutáveis, gerando automaticamente construtores, equals, hashCode e getters", "C) Uma substituição para tabelas de banco de dados NoSQL", "D) Uma estrutura de dados para gerenciar logs do sistema"],
    "B",
    "Records reduzem drasticamente o código boilerplate (código repetitivo) necessário para criar classes de transporte de dados (DTOs) ou entidades simples.",
    "Declarados com a palavra-chave public record Aluno(String nome, int idade) {}."
);

addQuestion(
    "Java", "Média",
    "Qual é a utilidade da palavra-chave super dentro de uma subclasse em Java?",
    "Referência à superclasse imediata",
    ["A) Chamar o construtor ou métodos da classe pai (superclasse)", "B) Criar uma nova instância estática da classe atual", "C) Converter tipos primitivos em objetos empacotados", "D) Definir uma variável global compartilhada"],
    "A",
    "super() permite invocar o construtor da classe pai, enquanto super.metodo() invoca um método sobrescrito na superclasse.",
    "Deve ser a primeira instrução em um construtor de subclasse se usada para chamar o construtor pai."
);

addQuestion(
    "Java", "Fácil",
    "Como se declara corretamente um vetor (array) de 10 inteiros em Java?",
    "int[] numeros = new int[10];",
    ["A) int numeros[10];", "B) int[] numeros = new int[10];", "C) array numeros = new array(10);", "D) vector numeros = new vector();"],
    "B",
    "Em Java, a declaração de arrays utiliza colchetes e o operador new especificando o tamanho fixo da estrutura na memória.",
    "Os índices dos elementos vão de 0 até 9."
);

addQuestion(
    "Java", "Difícil",
    "O que significa dizer que o coletor de lixo (Garbage Collector) do Java opera de forma automática?",
    "Gerenciamento automático de memória no heap",
    ["A) O programador deve liberar explicitamente cada objeto usando o comando delete", "B) A JVM identifica e remove da memória os objetos que não possuem mais nenhuma referência ativa", "C) O sistema operacional apaga arquivos temporários do disco rígido", "D) As variáveis locais da pilha são limpas por threads de sistema"],
    "B",
    "O Garbage Collector monitora o heap do Java, reciclando dinamicamente a memória ocupada por objetos inalcançáveis para evitar vazamentos de memória (memory leaks).",
    "Elimina a necessidade de desalocação manual de ponteiros como em C ou C++."
);

addQuestion(
    "Java", "Média",
    "Qual interface do Java Collections Framework representa uma estrutura baseada em chave-valor?",
    "Map (como HashMap, TreeMap)",
    ["A) List", "B) Set", "C) Map", "D) Queue"],
    "C",
    "A interface Map não herda de Collection, mapeando chaves exclusivas para valores correspondentes.",
    "Exemplo clássico: Map<String, String> configs = new HashMap<>();."
);

addQuestion(
    "Java", "Fácil",
    "Qual modificador indica que um atributo ou método pertence à classe em si, e não a uma instância específica criada com new?",
    "static",
    ["A) final", "B) static", "C) transient", "D) volatile"],
    "B",
    "Membros static são compartilhados por todas as instâncias da classe e podem ser acessados diretamente sem criar um objeto.",
    "Exemplo: Math.sqrt() ou o método main."
);

addQuestion(
    "Java", "Média",
    "O que é o conceito de Autoboxing e Unboxing em Java?",
    "Conversão automática entre tipos primitivos e suas classes wrapper",
    ["A) A conversão automática de arquivos Java para bytecode", "B) A conversão automática realizada pelo compilador entre tipos primitivos (ex: int) e seus wrappers correspondentes (ex: Integer)", "C) A serialização automática de objetos para transmissão em rede", "D) O empacotamento de dependências usando Maven ou Gradle"],
    "B",
    "Autoboxing converte primitivo para objeto (ex: int para Integer), e unboxing faz o inverso de forma transparente.",
    "Facilita o uso de tipos primitivos em coleções como ArrayList<Integer>."
);

addQuestion(
    "Java", "Difícil",
    "O que é uma Classe Anônima (Anonymous Inner Class) em Java?",
    "Declaração e instanciação simultânea de uma classe sem nome",
    ["A) Uma classe que não possui métodos declarados", "B) Uma classe sem nome declarada e instanciada em uma única expressão, útil para implementações rápidas de interfaces ou classes abstratas", "C) Uma classe de segurança que oculta o código-fonte compilado", "D) Um erro de sintaxe gerado pelo compilador moderno"],
    "B",
    "Classes anônimas permitiam criar implementações pontuais de interfaces (como listeners antigos de eventos), sendo hoje em dia grandemente substituídas por expressões lambda.",
    "Sintaxe típica: Runnable r = new Runnable() { @Override public void run() { ... } };."
);

addQuestion(
    "Java", "Fácil",
    "Qual operador em Java é utilizado para verificar se um objeto é uma instância de uma determinada classe ou interface?",
    "instanceof",
    ["A) isInstance", "B) instanceof", "C) checkClass", "D) typeOf"],
    "B",
    "O operador instanceof retorna um valor booleano indicando se o objeto à esquerda é compatível com o tipo especificado à direita.",
    "Muito útil antes de realizar downcasting de referências."
);

addQuestion(
    "Java", "Média",
    "O que são métodos default em interfaces (recurso introduzido no Java 8)?",
    "Métodos com implementação padrão em interfaces",
    ["A) Métodos que obrigatoriamente devem ser reescritos por todas as classes", "B) Métodos declarados com a palavra-chave default que possuem corpo/implementação dentro da interface, permitindo evolução sem quebrar classes legadas", "C) Métodos privados utilitários", "D) Construtores padrão gerados automaticamente"],
    "B",
    "Permitem adicionar novos métodos com comportamento padrão a interfaces existentes sem exigir que todas as classes implementadoras modifiquem seu código imediatamente.",
    "Evita quebrar contratos em bibliotecas legadas."
);

addQuestion(
    "Java", "Difícil",
    "No contexto de concorrência em Java, qual é a utilidade da palavra-chave synchronized?",
    "Controle de concorrência e exclusão mútua",
    ["A) Garantir que variáveis estáticas nunca mudem de valor", "B) Garantir que um bloco de código ou método seja acessado por apenas uma thread por vez, evitando condições de corrida", "C) Sincronizar o relógio do sistema operacional com servidores externos", "D) Executar tarefas de forma assíncrona em segundo plano"],
    "B",
    "synchronized provê exclusão mútua em blocos críticos de código multi-thread, prevenindo corrupção de dados compartilhados.",
    "Garante visibilidade de memória e atomicidade em seções críticas."
);

addQuestion(
    "Java", "Fácil",
    "Qual pacote padrão do Java é importado implicitamente em todos os arquivos de código-fonte Java sem necessidade de declaração explícita?",
    "java.lang",
    ["A) java.util", "B) java.io", "C) java.lang", "D) java.net"],
    "C",
    "O pacote java.lang contém classes fundamentais como String, System, Math, Integer, Exception e Object, sendo importado automaticamente.",
    "Outros pacotes exigem o comando import."
);

addQuestion(
    "Java", "Média",
    "O que significa a serialização de objetos em Java?",
    "Transformação de objeto em fluxo de bytes",
    ["A) Converter código Java em código executável de máquina nativa", "B) O processo de converter o estado de um objeto em uma sequência de bytes para armazenamento em arquivo ou transmissão em rede", "C) Organizar métodos em ordem alfabética estrita", "D) Ordenar coleções de dados numéricos"],
    "B",
    "Para serializar um objeto, a classe deve implementar a interface marcadora Serializable.",
    "O oposto (reconstruir o objeto a partir de bytes) chama-se desserialização."
);

addQuestion(
    "Java", "Difícil",
    "O que estabelece a especificação do Java Memory Model (JMM) em relação à palavra-chave volatile?",
    "Garantia de visibilidade imediata de variáveis entre threads",
    ["A) Torna a variável imutável como uma constante", "B) Garante que leituras e escritas nessa variável sejam feitas diretamente na memória principal (RAM), garantindo visibilidade imediata entre diferentes threads", "C) Acelera o cálculo matemático usando processamento de GPU", "D) Impede que a variável seja coletada pelo Garbage Collector"],
    "B",
    "Em arquiteturas modernas de CPU, threads usam caches locais. O modificador volatile evita que uma thread use valores desatualizados em cache de variáveis compartilhadas.",
    "Não garante atomicidade para operações compostas como incremento (++)."
);

addQuestion(
    "Java", "Fácil",
    "Qual método da classe Object (presente em todas as classes Java) é utilizado para obter a representação textual de um objeto?",
    "toString()",
    ["A) printObject()", "B) toString()", "C) stringValue()", "D) display()"],
    "B",
    "O método toString() retorna uma string que descreve o objeto. É altamente recomendável sobrescrevê-lo nas suas classes para depuração legível.",
    "Por padrão, retorna o nome da classe seguido por @ e o hash code em hexadecimal."
);

addQuestion(
    "Java", "Média",
    "Qual é a finalidade principal do comando try-with-resources introduzido no Java 7?",
    "Gerenciamento automático de recursos que implementam AutoCloseable",
    ["A) Capturar múltiplos erros de sintaxe em tempo de compilação", "B) Fechar automaticamente recursos abertos (como arquivos e conexões JDBC) ao término do bloco try", "C) Substituir blocos try-catch tradicionais em códigos assíncronos", "D) Otimizar o consumo de memória RAM do Garbage Collector"],
    "B",
    "O try-with-resources fecha de forma segura e automática qualquer recurso que implemente a interface AutoCloseable ou Closeable, mesmo se exceções forem lançadas.",
    "Evita vazamentos de conexões e arquivos abertos."
);

addQuestion(
    "Java", "Difícil",
    "O que é a reflexão (Reflection API) em Java (java.lang.reflect)?",
    "Inspeção e manipulação dinâmica de classes em tempo de execução",
    ["A) Um mecanismo de renderização gráfica 3D", "B) Uma API que permite a um programa examinar e modificar sua própria estrutura, inspecionando classes, métodos, atributos e construtores em tempo de execução", "C) Um padrão de projeto para clonar objetos profundos", "D) Um compilador just-in-time otimizado"],
    "B",
    "Reflection é amplamente utilizada por frameworks como Spring e Hibernate para mapear entidades, injetar dependências e processar anotações dinamicamente.",
    "Pode impactar a performance se usada excessivamente e burlar verificações de encapsulamento."
);

addQuestion(
    "Java", "Fácil",
    "Qual palavra-chave é utilizada para criar uma nova instância (objeto) de uma classe em Java?",
    "new",
    ["A) create", "B) instantiate", "C) new", "D) malloc"],
    "C",
    "O operador new aloca memória no heap para o novo objeto e invoca o construtor correspondente.",
    "Exemplo: Carro meuCarro = new Carro();."
);

addQuestion(
    "Java", "Média",
    "O que é uma Enum (Enumeração) em Java?",
    "Tipo de dado especial que representa um conjunto fixo de constantes",
    ["A) Uma classe abstrata sem atributos", "B) Um tipo de dado especial que restringe uma variável a assumir apenas um conjunto predefinido de valores constantes nomeados", "C) Uma interface para manipulação de arquivos binários", "D) Uma estrutura de repetição equivalente ao for clássico"],
    "B",
    "Enums melhoram a segurança de tipos e legibilidade do código comparado ao uso de constantes inteiras ou strings soltas.",
    "Exemplo: dias da semana, status de pedidos, direções cardinais."
);

addQuestion(
    "Java", "Difícil",
    "Qual é a diferença conceitual e de comportamento entre StringBuilder e StringBuffer?",
    "Sincronização de threads",
    ["A) StringBuilder é mais lento que StringBuffer em qualquer ambiente", "B) StringBuilder não é sincronizada (não thread-safe), o que a torna mais rápida para uso em uma única thread; StringBuffer é sincronizada (thread-safe)", "C) StringBuffer foi descontinuada no Java moderno", "D) Não há nenhuma diferença de performance ou comportamento"],
    "B",
    "A sincronização interna do StringBuffer adiciona overhead de desempenho. Se o código roda em uma única thread, StringBuilder é sempre a melhor escolha.",
    "Ambas compartilham exatamente os mesmos métodos públicos de manipulação de texto."
);

addQuestion(
    "Java", "Fácil",
    "Como se faz um comentário de múltiplas linhas em código Java?",
    "/* Comentário */",
    ["A) // Comentário", "B) /* Comentário */", "C) # Comentário", "D) <!-- Comentário -->"],
    "B",
    "Comentários de múltiplas linhas em Java usam /* ... */. Para documentação JavaDoc, usa-se /** ... */ e para linha única //.",
    "O compilador ignora completamente qualquer comentário."
);

addQuestion(
    "Java", "Média",
    "O que significa a assinatura de método public static final int MAX = 100; dentro de uma interface?",
    "Definição de constante pública estática",
    ["A) A variável pode ser alterada livremente por classes implementadoras", "B) Todos os atributos declarados em interfaces são implicitamente public, static e final, funcionando como constantes globais", "C) O código gerará um erro de compilação por redundância de modificadores", "D) O atributo é privado e visível apenas internamente"],
    "B",
    "Em interfaces Java, qualquer campo declarado é automaticamente tratado como constante pública, estática e final.",
    "Não é necessário repetir os modificadores, embora seja comum."
);

addQuestion(
    "Java", "Difícil",
    "O que são métodos estáticos private permitidos em interfaces a partir do Java 9?",
    "Métodos auxiliares privados para reutilização interna na interface",
    ["A) Métodos acessíveis diretamente por qualquer classe externa ao pacote", "B) Métodos auxiliares que permitem compartilhar código comum entre métodos default ou estáticos dentro da própria interface sem expô-los publicamente", "C) Construtores privados para impedir instanciação de classes", "D) Métodos obsoletos substituídos por lambdas"],
    "B",
    "O Java 9 permitiu que interfaces encapsulassem lógica repetitiva em métodos privados, melhorando a organização do código sem violar o contrato público.",
    "Reduz duplicação de código entre métodos default."
);

addQuestion(
    "Java", "Fácil",
    "Qual operador aritmético em Java é utilizado para calcular o resto de uma divisão inteira?",
    "%",
    ["A) /", "B) %%", "C) %", "D) mod"],
    "C",
    "O operador módulo % retorna o resto da divisão entre dois números inteiros (ou de ponto flutuante).",
    "Exemplo: 5 % 2 resulta em 1."
);

addQuestion(
    "Java", "Média",
    "O que ocorre se tentarmos compilar e executar uma classe Java que não possui nenhum construtor explícito escrito pelo programador?",
    "Inclusão automática do construtor padrão (default constructor)",
    ["A) O compilador emite um erro fatal de compilação", "B) O compilador insere automaticamente um construtor padrão público sem parâmetros", "C) O programa roda, mas gera NullPointerException imediata", "D) A JVM utiliza um construtor genérico externo"],
    "B",
    "Se nenhum construtor é definido na classe, o compilador gera um construtor padrão sem argumentos (ClassName() {}) por baixo dos panos.",
    "Caso você crie um construtor com parâmetros, o construtor padrão deixa de ser gerado automaticamente."
);

addQuestion(
    "Java", "Difícil",
    "Qual é a finalidade da anotação @Override em Java?",
    "Verificação em tempo de compilação de sobrescrita de método",
    ["A) Marcar o método como obsoleto (deprecated)", "B) Solicitar que o compilador verifique se o método realmente está sobrescrevendo um método da superclasse ou interface, prevenindo erros de digitação na assinatura", "C) Forçar a execução síncrona do método em múltiplas threads", "D) Otimizar a velocidade de execução via JIT compiler"],
    "B",
    "@Override é uma boa prática de segurança de código. Se você errar o nome ou os parâmetros do método herdado, o compilador avisa imediatamente.",
    "Não afeta o comportamento em tempo de execução, servindo para checagem estática."
);

/* =====================================================
   BLOCO 5: DART E FLUTTER (40 QUESTÕES)
===================================================== */

addQuestion(
    "Dart/Flutter", "Fácil",
    "No ecossistema Dart e Flutter, qual é a principal diferença entre os tipos de widgets 'StatelessWidget' e 'StatefulWidget'?",
    "Stateless vs StatefulWidget",
    [
        "A) O StatelessWidget mantém estado interno mutável, enquanto o StatefulWidget é imutável após renderizado.",
        "B) O StatelessWidget é imutável e não mantém estado interno mutável ao longo do ciclo de vida, enquanto o StatefulWidget pode gerenciar e alterar estado interno.",
        "C) O StatefulWidget executa exclusivamente em servidores web, enquanto o StatelessWidget é exclusivo para aplicativos móveis nativos.",
        "D) Não há diferença arquitetural; ambos utilizam o mesmo gerenciador de estado nativo do Dart."
    ],
    "B",
    "Widgets sem estado (Stateless) dependem apenas de suas configurações iniciais, enquanto widgets com estado (Stateful) possuem um objeto State associado que pode sofrer alterações e redesenhar a tela (setState).",
    "Sempre dê preferência a StatelessWidget quando o componente for estático para otimizar a performance."
);

addQuestion(
    "Dart/Flutter", "Média",
    "Qual modificador de palavra-chave na linguagem Dart é utilizado para declarar variáveis que podem ser calculadas em tempo de execução, mas cujo valor é atribuído uma única vez e permanece imutável após a inicialização?",
    "final vs const",
    [
        "A) var",
        "B) dynamic",
        "C) final",
        "D) static"
    ],
    "C",
    "A palavra-chave `final` define uma variável que só pode ser configurada uma vez. Já o `const` define uma constante estática avaliada obrigatoriamente em tempo de compilação.",
    "Cuidado para não confundir: `const` é mais restrito que `final` por exigir valor conhecido antes mesmo de rodar o aplicativo."
);

addQuestion(
    "Dart/Flutter", "Difícil",
    "No Flutter, qual é o papel fundamental do motor gráfico de renderização (como o Impeller ou o antigo Skia) na arquitetura do framework?",
    "Motor gráfico e renderização",
    [
        "A) Traduzir diretamente o código Dart para componentes nativos específicos de UI (como botões nativos do Android e iOS).",
        "B) Desenhar os pixels diretamente na tela utilizando gráficos acelerados por hardware, ignorando a árvore de widgets nativa do sistema operacional.",
        "C) Gerenciar exclusivamente as requisições de rede HTTP e a persistência local via SQLite.",
        "D) Executar a máquina virtual Dart em segundo plano em um thread separado de I/O."
    ],
    "B",
    "O Flutter utiliza uma abordagem de renderização própria (cross-platform non-native components), desenhando os elementos usando seu próprio motor gráfico, o que garante alta performance e consistência visual entre diferentes plataformas.",
    "Isso explica por que um botão no Flutter se parece exatamente igual no iOS e no Android por padrão."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "Qual método é obrigatório em qualquer classe que herda de StatelessWidget ou StatefulWidget em Flutter?",
    "Método build",
    [
        "A) initState()",
        "B) render()",
        "C) build()",
        "D) create()"
    ],
    "C",
    "O método build(BuildContext context) é obrigatório e descreve a parte da interface do usuário representada por este widget.",
    "O método build é chamado sempre que o widget precisa ser renderizado novamente."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "O que o operador de segurança contra nulos (null-safety) '??' faz em Dart?",
    "Operador de coalescência nula",
    [
        "A) Lança uma exceção se a variável for nula.",
        "B) Retorna o operando à esquerda se ele não for nulo; caso contrário, retorna o operando à direita.",
        "C) Força o compilador a ignorar erros de nulidade.",
        "D) Converte um tipo inteiro para string de forma segura."
    ],
    "B",
    "O operador de coalescência nula (??) retorna a expressão à esquerda se ela não for nula; se for, avalia e retorna a expressão à direita.",
    "É ideal para definir valores padrão de forma concisa."
);

addQuestion(
    "Dart/Flutter", "Média",
    "Qual componente do Flutter é mais indicado para criar uma lista longa e dinâmica de itens de forma eficiente, carregando apenas os elementos visíveis na tela sob demanda?",
    "ListView.builder",
    [
        "A) Column",
        "B) ListView",
        "C) ListView.builder",
        "D) Stack"
    ],
    "C",
    "O ListView.builder constrói os itens sob demanda, conforme eles entram na área visível da tela, otimizando o uso de memória em listas extensas.",
    "Nunca utilize Column para listas grandes com muitos elementos para evitar problemas de desempenho."
);

addQuestion(
    "Dart/Flutter", "Difícil",
    "O que são Isolate em Dart?",
    "Concorrência e Isolates",
    [
        "A) Componentes visuais isolados que não afetam o layout principal.",
        "B) Threads independentes que possuem sua própria memória heap, permitindo processamento concorrente sem bloquear a thread principal (UI thread).",
        "C) Funções assíncronas baseadas em Future e async/await.",
        "D) Bibliotecas de terceiros para gerenciar requisições HTTP seguras."
    ],
    "B",
    "Em Dart, o código roda na thread principal (event loop). Para tarefas pesadas de CPU, usam-se Isolates, que rodam em paralelo com memórias separadas.",
    "Isolates ajudam a manter a interface fluida mesmo durante cálculos complexos."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "Como é chamada a linguagem de programação principal utilizada para desenvolver aplicativos em Flutter?",
    "Linguagem Dart",
    [
        "A) JavaScript",
        "B) TypeScript",
        "C) Kotlin",
        "D) Dart"
    ],
    "D",
    "Flutter utiliza a linguagem Dart, desenvolvida pelo Google, que suporta compilação JIT (Just-In-Time) para desenvolvimento rápido e AOT (Ahead-Of-Time) para produção.",
    "Dart possui tipagem forte e suporta orientação a objetos."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "Qual é a utilidade do arquivo pubspec.yaml em um projeto Flutter?",
    "Arquivo pubspec.yaml",
    [
        "A) Configurar as regras de estilização CSS do aplicativo.",
        "B) Gerenciar dependências do projeto, fontes, ativos (imagens) e metadados gerais.",
        "C) Compilar o código nativo para iOS e Android simultaneamente.",
        "D) Executar os testes unitários automatizados."
    ],
    "B",
    "O arquivo pubspec.yaml é o manifesto do projeto, onde declaramos pacotes externos, fontes locais e assets de imagens.",
    "Qualquer alteração de dependência exige a execução do comando pub get."
);

addQuestion(
    "Dart/Flutter", "Média",
    "No contexto de programação assíncrona em Dart, qual é a diferença essencial entre um Future e um Stream?",
    "Future vs Stream",
    [
        "A) Future lida com um único valor assíncrono futuro, enquanto Stream lida com uma sequência de eventos ou múltiplos valores ao longo do tempo.",
        "B) Future roda em uma thread separada, enquanto Stream roda na thread principal.",
        "C) Stream é síncrono e Future é assíncrono.",
        "D) Não há diferença prática; ambos são sinônimos para Promises."
    ],
    "A",
    "Um Future representa a computação de um único valor que estará disponível no futuro. Um Stream é como uma tubulação de dados que pode emitir múltiplos eventos ao longo do tempo.",
    "Streams são amplamente utilizados para manipulação de dados em tempo real."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "Qual é a função do operador de acesso condicional '?.', também conhecido como safe navigation operator, em Dart?",
    "Navegação segura contra nulos",
    [
        "A) Força a conversão de um objeto para nulo.",
        "B) Evita o lançamento de NullPointerException caso o objeto à esquerda seja nulo, retornando nulo em vez de quebrar a execução.",
        "C) Compara se duas variáveis apontam para o mesmo endereço de memória.",
        "D) Cria uma nova instância estática da classe."
    ],
    "B",
    "O operador `?.` verifica se o objeto é nulo antes de tentar acessar uma propriedade ou método, evitando falhas em tempo de execução.",
    "Recurso essencial introduzido com o sound null-safety."
);

addQuestion(
    "Dart/Flutter", "Média",
    "O que significa dizer que o Dart possui suporte a tipagem opcional (ou inferência de tipos avançada) através de palavras-chave como var?",
    "Tipagem e inferência em Dart",
    [
        "A) Que o Dart é inteiramente fracamente tipado como JavaScript.",
        "B) Que o compilador infere automaticamente o tipo da variável no momento da atribuição inicial, mantendo a segurança estática de tipos.",
        "C) Que os tipos de dados mudam dinamicamente durante a execução do programa.",
        "D) Que variáveis declaradas com var não podem receber novos valores."
    ],
    "B",
    "Embora o Dart seja fortemente tipado, ele possui inferência de tipos robusta, permitindo usar var sem perder a checagem estática de tipos realizada pelo compilador.",
    "Uma vez inferido o tipo, você não pode atribuir um valor de outro tipo àquela variável."
);

addQuestion(
    "Dart/Flutter", "Difícil",
    "O que é o 'BuildContext' em Flutter e qual é a sua principal responsabilidade na árvore de widgets?",
    "BuildContext",
    [
        "A) Um gerenciador de banco de dados local SQLite otimizado para mobile.",
        "B) Um objeto que representa o local de um widget na árvore de widgets, permitindo localizar outros widgets ancestrais ou acessar temas e mídias.",
        "C) O motor gráfico responsável por compilar o código nativo.",
        "D) Uma função assíncrona para requisições de rede."
    ],
    "B",
    "O BuildContext é o manipulador da posição do widget na árvore de componentes. É indispensável para operações como Navigator.of(context) ou Theme.of(context).",
    "Erros comuns de contexto ocorrem quando se tenta usá-lo após assincronia sem checar se o widget ainda está montado."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "Qual comando executado no terminal é utilizado para criar um novo projeto padrão em Flutter?",
    "Comando flutter create",
    [
        "A) flutter init meu_app",
        "B) flutter new project",
        "C) flutter create meu_app",
        "D) dart build app"
    ],
    "C",
    "O comando `flutter create <nome_do_projeto>` estrutura toda a árvore de diretórios padrão exigida para um aplicativo Flutter multiplataforma.",
    "Gera pastas como lib, android, ios, test, entre outras."
);

addQuestion(
    "Dart/Flutter", "Média",
    "No ciclo de vida de um StatefulWidget, qual método é executado apenas uma única vez quando o objeto State é inserido pela primeira vez na árvore de widgets?",
    "Método initState",
    [
        "A) build()",
        "B) initState()",
        "C) dispose()",
        "D) didUpdateWidget()"
    ],
    "B",
    "O método initState() é o ponto ideal para inicializar variáveis de estado, assinar streams ou carregar dados iniciais.",
    "É obrigatório chamar `super.initState()` no início da implementação."
);

addQuestion(
    "Dart/Flutter", "Difícil",
    "O que acontece no ciclo de vida de um StatefulWidget quando ele é permanentemente removido da árvore de widgets?",
    "Método dispose",
    [
        "A) O método initState é chamado novamente para limpeza.",
        "B) O método dispose() é acionado, permitindo liberar recursos como controllers, animações e listeners para evitar vazamentos de memória.",
        "C) A máquina virtual Dart encerra o aplicativo imediatamente.",
        "D) O garbage collector remove a tela sem avisar o widget."
    ],
    "B",
    "O método dispose() serve estritamente para limpeza de recursos pesados. Sempre chame `super.dispose()` ao final.",
    "Esquecer de dar dispose em TextEditingController ou StreamSubscription causa memory leaks."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "Qual estrutura de controle condicional em Dart permite lidar de forma elegante e concisa com múltiplos padrões e tipos (Pattern Matching), introduzida nas versões recentes da linguagem?",
    "Pattern Matching moderno",
    [
        "A) O comando switch-case tradicional aprimorado com padrões e expressões",
        "B) Apenas if-else aninhados",
        "C) O operador ternário triplo",
        "D) A instrução goto"
    ],
    "A",
    "O Dart moderno introduziu suporte completo a patterns e destructuring em switches, permitindo desestruturar objetos e listas diretamente nas condições.",
    "Torna o código muito mais expressivo e limpo."
);

addQuestion(
    "Dart/Flutter", "Média",
    "Qual é a utilidade do operador 'as' em Dart?",
    "Cast de tipos com 'as'",
    [
        "A) Atribuir um valor padrão caso a variável seja nula.",
        "B) Realizar a coerção (cast) de tipo de um objeto para uma classe específica da hierarquia.",
        "C) Declarar uma variável assíncrona.",
        "D) Importar um pacote externo com um prefixo."
    ],
    "B",
    "O operador `as` faz um cast explícito de tipo. Se o objeto não for do tipo especificado, uma exceção do tipo TypeError é lançada.",
    "Prefira usar o operador `is` para checagens seguras antes de realizar o cast."
);

addQuestion(
    "Dart/Flutter", "Difícil",
    "No gerenciamento de estado assíncrono em telas do Flutter, qual widget escuta um Stream ou Future e reconstrói automaticamente a interface com base no estado mais recente da operação?",
    "FutureBuilder e StreamBuilder",
    [
        "A) StateObserver",
        "B) FutureBuilder / StreamBuilder",
        "C) ValueNotifierWidget",
        "D) AsyncRenderer"
    ],
    "B",
    "Os widgets FutureBuilder e StreamBuilder gerenciam conexões assíncronas declarativamente, facilitando exibir indicadores de progresso (loading) ou dados retornados.",
    "Eliminam a necessidade de escrever lógica manual de setState para requisições simples."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "Qual widget do Flutter é utilizado para alinhar seu filho e dimensioná-lo de acordo com uma proporção (aspect ratio) específica?",
    "Aspectadio",
    [
        "A) SizedBox",
        "B) AspectRatio",
        "C) Expanded",
        "D) Padding"
    ],
    "B",
    "O AspectRatio tenta ajustar o widget filho para uma proporção largura/altura predeterminada.",
    "Muito útil em players de vídeo ou exibição de imagens padronizadas."
);

addQuestion(
    "Dart/Flutter", "Média",
    "Qual é a diferença de comportamento entre Expanded e Flexible dentro de um widget flexível como Row ou Column?",
    "Expanded vs Flexible",
    [
        "A) Expanded força o filho a preencher todo o espaço disponível restante no eixo principal; Flexible permite que o filho ocupe até o espaço máximo, mas pode ser menor.",
        "B) Expanded só funciona em Column, enquanto Flexible só funciona em Row.",
        "C) Flexible é obsoleto e foi substituído inteiramente por Expanded.",
        "D) Não há diferença técnica de layout."
    ],
    "A",
    "O Expanded impõe flexFittight (obrigando o filho a ocupar o espaço), enquanto o Flexible usa flexFitloose (permitindo que o filho decida seu tamanho desde que caiba no limite).",
    "Conhecer essa sutis diferença evita erros de layout flex overflow."
);

addQuestion(
    "Dart/Flutter", "Difícil",
    "O que são extension methods (métodos de extensão) em Dart?",
    "Extension methods",
    [
        "A) Uma forma de herdar classes fechadas sem usar o modificador extends.",
        "B) Um recurso que permite adicionar novas funcionalidades (métodos ou getters) a bibliotecas ou classes existentes sem modificar seu código-fonte original.",
        "C) Plugins nativos para comunicação via canal de plataforma (MethodChannel).",
        "D) Atalhos de compilação para arquivos YAML."
    ],
    "B",
    "Extension methods permitem estender classes de terceiros ou do próprio Dart (como adicionar métodos a String ou int) de forma limpa e segura.",
    "Declarados com a palavra-chave `extension Nome on Tipo { ... }`."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "Como se define uma função anônima (closure / lambda) em Dart que recebe um parâmetro inteiro x e retorna o seu dobro?",
    "Funções anônimas em Dart",
    [
        "A) function(int x) { return x * 2; }",
        "B) (int x) => x * 2;",
        "C) lambda x: x * 2",
        "D) def calc(x) -> x * 2"
    ],
    "B",
    "Dart suporta arrow syntax (`=>`) para funções de expressão única, sendo amplamente usada em lambdas e callbacks.",
    "Equivalente a uma closure tradicional com corpo `{ return ... }`."
);

addQuestion(
    "Dart/Flutter", "Média",
    "Qual é a utilidade do construtor nomeado `Named Constructors` em classes Dart?",
    "Construtores nomeados",
    [
        "A) Permitir criar múltiplos construtores com propósitos distintos em uma mesma classe, identificados por um nome específico.",
        "B) Impedir que a classe seja instanciada fora do pacote.",
        "C) Substituir obrigatoriamente o construtor padrão.",
        "D) Criar métodos estáticos de acesso global."
    ],
    "A",
    "Dart não suporta sobrecarga de construtores por assinatura tradicional, por isso utiliza construtores nomeados como `Classe.nome()`.",
    "Exemplo clássico no Flutter: `DateTime.utc()` ou `Container.from BoxDecoration()`."
);

addQuestion(
    "Dart/Flutter", "Difícil",
    "O que são os Mixins em Dart e qual palavra-chave é utilizada para aplicá-los em uma classe?",
    "Mixins em Dart",
    [
        "A) Mecanismo de herança múltipla de classes tradicionais (extends múltiplo).",
        "B) Uma forma de reutilizar código de uma classe em múltiplas hierarquias de classes diferentes sem usar herança linear, utilizando a palavra-chave `with`.",
        "C) Interfaces puras focadas em requisições de rede.",
        "D) Funções assíncronas executadas em background."
    ],
    "B",
    "Mixins permitem injetar comportamentos em classes de forma modular. São declarados com a palavra `mixin` e aplicados com `with`.",
    "Evitam os problemas clássicos associados à herança múltipla estrita."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "Qual comando do Flutter CLI é utilizado para verificar o ambiente de desenvolvimento e identificar dependências ausentes ou problemas de configuração?",
    "Comando flutter doctor",
    [
        "A) flutter check",
        "B) flutter verify",
        "C) flutter doctor",
        "D) dart analyze"
    ],
    "C",
    "O `flutter doctor` faz um diagnóstico completo da máquina, checando SDKs, Android Studio, Xcode, dispositivos conectados e licenças.",
    "Sempre o primeiro comando a rodar quando há falhas de build."
);

addQuestion(
    "Dart/Flutter", "Média",
    "O que é o pub.dev no ecossistema Flutter e Dart?",
    "Repositório pub.dev",
    [
        "A) Um ambiente oficial de testes em nuvem para aplicativos iOS.",
        "B) O repositório oficial de pacotes e bibliotecas de terceiros para Dart e Flutter.",
        "C) O compilador oficial executado na web.",
        "D) Uma ferramenta de design gráfico de interfaces."
    ],
    "B",
    "O pub.dev abriga milhares de pacotes open-source reutilizáveis que facilitam desde requisições HTTP até gerenciamento de estado.",
    "Gerenciado diretamente através do arquivo pubspec.yaml."
);

addQuestion(
    "Dart/Flutter", "Difícil",
    "O que é o conceito de 'Tree Shaking' aplicado pelo compilador do Flutter durante a geração do build final de produção?",
    "Tree Shaking",
    [
        "A) Otimização visual que reorganiza a árvore de widgets em ordem alfabética.",
        "B) Remoção automática de código não utilizado (dead code) e classes/funções órfãs do pacote final para reduzir drasticamente o tamanho do binário.",
        "C) Processo de criptografia de arquivos assets.",
        "D) Compactação de imagens PNG para WebP."
    ],
    "B",
    "O tree shaking analisa estaticamente o código e elimina tudo o que não é chamado ou referenciado na aplicação compilada.",
    "Garante builds de produção altamente otimizados e leves."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "Qual widget em Flutter é essencial para posicionar outros widgets de forma livre na tela, permitindo sobreposição (camadas z-index)?",
    "Widget Stack",
    [
        "A) Column",
        "B) Row",
        "C) Stack",
        "D) ListView"
    ],
    "C",
    "O Stack permite sobrepor filhos uns sobre os outros, geralmente combinado com o widget Positioned para controle exato de coordenadas.",
    "Ideal para criar efeitos como badges de notificação sobre ícones ou telas de splash."
);

addQuestion(
    "Dart/Flutter", "Média",
    "Qual é a utilidade do operador de coerção restrita contra nulos '!' (postfix error operator / bang operator) em Dart?",
    "Operador bang (!)",
    [
        "A) Nega um valor booleano (inversão lógica).",
        "B) Afirma ao compilador que uma expressão anulável (nullable) não é nula naquele ponto exato, lançando uma exceção caso seja.",
        "C) Converte uma string para inteiro.",
        "D) Interrompe a execução de um loop."
    ],
    "B",
    "O operador `!` diz ao compilador de null-safety para confiar em você. Se a variável for nula em tempo de execução, um NullThrownError é lançado.",
    "Deve ser usado com cautela extrema para evitar crashes inesperados."
);

addQuestion(
    "Dart/Flutter", "Difícil",
    "Como o Flutter lida com a comunicação nativa (interoperabilidade) com códigos específicos de plataforma (como Kotlin/Java no Android e Swift/Objective-C no iOS)?",
    "Platform Channels",
    [
        "A) Através de compilação cruzada direta via WebAssembly.",
        "B) Utilizando Platform Channels (MethodChannel), que enviam mensagens assíncronas serializadas entre a thread Dart e o código nativo.",
        "C) O Flutter não permite acessar APIs nativas do sistema operacional.",
        "D) Através de arquivos de configuração em formato XML."
    ],
    "B",
    "Os MethodChannels permitem invocar métodos nativos do sistema operacional a partir do Dart e vice-versa usando mensagens estruturadas.",
    "Fundamental para acessar sensores de hardware específicos não cobertos pelo framework."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "Qual é o comportamento padrão do widget Scaffold em aplicativos Flutter?",
    "Estrutura básica Scaffold",
    [
        "A) Fornece uma estrutura visual padrão de design (Material Design) que inclui suporte para AppBar, Drawer, BottomNavigationBar e FloatingActionButton.",
        "B) Serve estritamente para gerenciar requisições de banco de dados local.",
        "C) É um componente puramente lógico sem representação gráfica.",
        "D) Gerencia rotas de navegação avançadas."
    ],
    "A",
    "O Scaffold é o esqueleto visual básico recomendado para estruturar telas seguindo as diretrizes do Material Design.",
    "Facilita enormemente a montagem de layouts comuns em aplicativos móveis."
);

addQuestion(
    "Dart/Flutter", "Média",
    "O que significa a compilação AOT (Ahead-Of-Time) utilizada pelo Dart para builds de produção em dispositivos móveis?",
    "Compilação AOT",
    [
        "A) O código é traduzido para código de máquina nativo antes da execução, garantindo inicialização rápida e alta performance.",
        "B) O código é interpretado linha por linha em tempo de execução.",
        "C) O código roda exclusivamente dentro de uma máquina virtual baseada em navegador.",
        "D) A compilação ocorre apenas quando o usuário abre o aplicativo pela primeira vez no celular."
    ],
    "A",
    "A compilação AOT traduz o código Dart diretamente para instruções de máquina nativas antes da distribuição, otimizando performance.",
    "Diferente do modo JIT, usado no modo Debug para permitir Hot Reload."
);

addQuestion(
    "Dart/Flutter", "Difícil",
    "O que é o Hot Reload no Flutter e por que ele é diferente do Hot Restart?",
    "Hot Reload vs Hot Restart",
    [
        "A) Hot Reload reinicia o aplicativo inteiro do zero; Hot Restart apenas limpa o cache.",
        "B) Hot Reload injeta arquivos de código Dart atualizados na máquina virtual em execução sem perder o estado atual da tela; Hot Restart reinicia o estado do app do zero.",
        "C) Hot Reload é exclusivo para plataformas web; Hot Restart é exclusivo para dispositivos físicos.",
        "D) Não há diferença técnica entre ambos."
    ],
    "B",
    "O Hot Reload preserva o estado da aplicação enquanto atualiza a árvore de widgets, permitindo ajustes rápidos de UI em segundos.",
    "O Hot Restart reinicia todo o estado global da aplicação."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "Qual classe do Flutter gerencia a pilha de navegação (Navigator), permitindo empurrar (push) e desempurrar (pop) telas?",
    "Navegação com Navigator",
    [
        "A) RouterManager",
        "B) Navigator",
        "C) ScreenController",
        "D) RouteHandler"
    ],
    "B",
    "O Navigator gerencia rotas como uma pilha de páginas (stack of pages), onde `Navigator.push` adiciona uma tela e `Navigator.pop` a remove.",
    "Abordagem clássica de navegação imperativa em Flutter."
);

addQuestion(
    "Dart/Flutter", "Média",
    "O que são 'Generics' em Dart e qual é a principal vantagem de utilizá-los?",
    "Generics em Dart",
    [
        "A) Funções matemáticas avançadas para tratamento de números decimais.",
        "B) Um mecanismo de reutilização de código que permite criar classes, interfaces e métodos parametrizados por tipo, garantindo segurança estática sem perder flexibilidade.",
        "C) Atalhos para gerar código boilerplate automaticamente.",
        "D) Um sistema de controle de versão integrado."
    ],
    "B",
    "Generics (como `List<T>`) evitam casts explícitos e garantem checagem de tipos em tempo de compilação, prevenindo erros de tipo em coleções.",
    "Símbolos como `<T>` indicam parâmetros de tipo genérico."
);

addQuestion(
    "Dart/Flutter", "Difícil",
    "No contexto de gerenciamento de estado reativo avançado, o que caracteriza bibliotecas como Provider, Bloc/Cubit ou Riverpod?",
    "Gerenciamento de estado",
    [
        "A) Substituem inteiramente a necessidade de escrever código em linguagem Dart.",
        "B) Fornecem arquiteturas padronizadas para separar a lógica de negócios da interface do usuário e notificar widgets afetados para reconstrução seletiva.",
        "C) Conectam o aplicativo diretamente a servidores de hospedagem web.",
        "D) Compilam o aplicativo para código nativo de desktop."
    ],
    "B",
    "Essas ferramentas ajudam a organizar a aplicação desacoplando o estado dos widgets visuais, facilitando testes e manutenção em projetos grandes.",
    "A escolha da ferramenta depende da complexidade e preferência da equipe."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "Qual widget de espaçamento simples é comumente utilizado em Rows ou Columns para adicionar um espaço fixo entre os elementos?",
    "Widget SizedBox",
    [
        "A) Spacer",
        "B) SizedBox",
        "C) EmptyBox",
        "D) PaddingBlock"
    ],
    "B",
    "Um `SizedBox(width: 10)` ou `SizedBox(height: 10)` é a forma mais leve e idiomática de impor dimensões fixas ou espaçamentos em layouts lineares.",
    "Muito mais performático que aninhar múltiplos Padding desnecessários."
);

addQuestion(
    "Dart/Flutter", "Média",
    "O que significa a palavra-chave async e await em funções assíncronas escritas em Dart?",
    "Async e Await",
    [
        "A) Executam o código de forma síncrona bloqueando a thread principal.",
        "B) Tornam a manipulação de operações assíncronas (como requisições de rede) legível e linear, pausando a execução da função até que o Future seja resolvido sem travar a UI.",
        "C) Criam um novo processo isolado de hardware (Isolate).",
        "D) Forçam o garbage collector a limpar a memória imediatamente."
    ],
    "B",
    "O uso de `async/await` açúcar sintático (syntactic sugar) sobre Futures, permitindo escrever código assíncrono com aparência síncrona e limpa.",
    "Toda função `async` retorna obrigatoriamente um Future."
);

addQuestion(
    "Dart/Flutter", "Difícil",
    "Qual é o comportamento da palavra-chave 'rethrow' quando utilizada dentro de um bloco catch no tratamento de exceções em Dart?",
    "Comando rethrow",
    [
        "A) Interrompe a execução do aplicativo e fecha a janela.",
        "B) Relança exatamente a mesma exceção capturada, preservando o stack trace original para que possa ser tratada em níveis superiores da aplicação.",
        "C) Substitui a exceção atual por um erro genérico.",
        "D) Converte a exceção em uma string legível."
    ],
    "B",
    "O `rethrow` propaga a exceção original adiante sem perder a pilha de rastreamento (stack trace), ao contrário de fazer `throw e`, que reiniciaria o stack trace.",
    "Essencial em camadas de repositório ou tratamento centralizado de erros."
);

/* =====================================================
   BLOCO 6 (CORRIGIDO): BANCO DE DADOS (CONCEITOS, NOSQL, ARQUITETURA) - 40 QUESTÕES
===================================================== */

addQuestion(
    "Banco de Dados", "Média",
    "O que preconiza o Teorema de CAP em sistemas distribuídos de bancos de dados?",
    "Teorema de CAP",
    [
        "A) Um sistema distribuído pode garantir simultaneamente e sem restrições a Consistência (Consistency), a Disponibilidade (Availability) e a Tolerância a Particionamento de Rede (Partition Tolerance).",
        "B) Em caso de uma falha de rede (particionamento), um sistema distribuído pode escolher garantir Consistência ou Disponibilidade, mas nunca ambas simultaneamente.",
        "C) Garante criptografia absoluta para dados em repouso e em trânsito.",
        "D) Define o limite máximo de conexões simultâneas que um banco NoSQL suporta."
    ],
    "B",
    "O Teorema de CAP (Brewer) estabelece que redes distribuídas estão sujeitas a falhas de comunicação (partições). Portanto, a escolha em cenários de falha resume-se a CP (consistência ou parada) ou AP (disponibilidade com dados eventualmente consistentes).",
    "Bancos relacionais tradicionais tendem a priorizar CP, enquanto muitos NoSQL focam em AP."
);

addQuestion(
    "Banco de Dados", "Média",
    "Qual é a principal diferença conceitual entre bancos de dados relacionais (SQL) e não relacionais (NoSQL)?",
    "Relacional vs NoSQL",
    [
        "A) Bancos NoSQL não utilizam nenhum tipo de estrutura de dados e armazenam tudo em arquivos comprimidos.",
        "B) Bancos relacionais estruturam dados em tabelas rígidas com esquemas fixos e fortes garantias ACID; bancos NoSQL oferecem alta escalabilidade horizontal e esquemas flexíveis (documentos, chave-valor, colunas ou grafos), priorizando performance e flexibilidade.",
        "C) Bancos NoSQL são totalmente incompatíveis com arquiteturas de microsserviços.",
        "D) Bancos relacionais rodam apenas em servidores Linux e NoSQL apenas em Windows."
    ],
    "B",
    "O NoSQL surgiu para resolver problemas de grande volume e alta velocidade de dados (Big Data) onde a escalabilidade horizontal é mais crítica do que as junções relacionais complexas.",
    "A escolha depende diretamente do domínio do problema e dos requisitos de consistência dos dados."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que caracteriza o modelo de Consistência Eventual (Eventual Consistency) comumente adotado em bancos NoSQL?",
    "Consistência Eventual",
    [
        "A) Os dados nunca são salvos permanentemente no disco rígido.",
        "B) Se nenhuma nova atualização for feita em um dado item, todas as réplicas eventualmente retornarão o mesmo valor após um curto período de propagação na rede.",
        "C) As transações exigem bloqueio síncrono absoluto em todas as máquinas do cluster.",
        "D) O banco de dados apaga registros antigos automaticamente a cada meia-noite."
    ],
    "B",
    "A consistência eventual prioriza a alta disponibilidade e performance de gravação (modelo AP do CAP), aceitando que leituras imediatas após uma escrita possam retornar dados desatualizados por instantes.",
    "Comum em sistemas de redes sociais, carrinhos de compras e contadores de visualizações."
);

addQuestion(
    "Banco de Dados", "Média",
    "Para que serve o processo de Normalização de Bancos de Dados (até a 3ª Forma Normal)?",
    "Normalização",
    [
        "A) Para duplicar dados intencionalmente e acelerar consultas complexas de leitura.",
        "B) Para organizar as tabelas e colunas de forma a reduzir a redundância de dados e eliminar anomalias de inserção, atualização e exclusão, garantindo a integridade estrutural.",
        "C) Para converter arquivos de texto em planilhas Excel formatadas.",
        "D) Para criptografar senhas de usuários com algoritmos de hash."
    ],
    "B",
    "A normalização divide dados repetidos em tabelas relacionadas através de chaves estrangeiras, otimizando o armazenamento e evitando inconsistências lógicas.",
    "Em contrapartida, excesso de normalização pode exigir muitos JOINs, motivando a desnormalização em cenários de alta leitura."
);

addQuestion(
    "Banco de Dados", "Média",
    "Qual é a principal utilidade de um banco de dados em memória do tipo Chave-Valor (como Redis) em uma arquitetura de software moderna?",
    "Bancos Chave-Valor (Redis)",
    [
        "A) Armazenar logs históricos e backups em fitas magnéticas de longo prazo.",
        "B) Atuar como cache de alta performance, gerenciamento de sessões, filas de mensagens rápidas e contadores em tempo real, devido ao acesso quase instantâneo na RAM.",
        "C) Executar relatórios gerenciais complexos em SQL com milhões de linhas cruzadas.",
        "D) Substituir totalmente o armazenamento persistente em disco em sistemas corporativos críticos."
    ],
    "B",
    "O Redis armazena dados diretamente na memória RAM, oferecendo tempos de resposta na ordem de microssegundos, o que alivia a carga de bancos relacionais em consultas frequentes.",
    "Pode ser configurado com persistência em disco (RDB/AOF) para evitar perda total de dados em reinicializações."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que diferencia o Sharding (Fragmentação) da Replicação em bancos de dados distribuídos?",
    "Sharding vs Replicação",
    [
        "A) Sharding duplica todos os dados em múltiplos servidores para redundância; replicação divide os dados particionando-os entre diferentes nós.",
        "B) A replicação copia e sincroniza dados em múltiplos nós para garantir alta disponibilidade e leitura escalável; o sharding divide o banco de dados em partes menores (shards) distribuídas horizontalmente para suportar volumes massivos de escrita e armazenamento.",
        "C) Não há diferença técnica; ambos são sinônimos de backups em nuvem.",
        "D) Sharding é exclusivo de bancos relacionais e replicação de NoSQL."
    ],
    "B",
    "Enquanto a replicação resolve problemas de disponibilidade e performance de leitura (nós Master-Slave), o sharding resolve problemas de limite físico de armazenamento e gargalos de escrita em bases gigantescas.",
    "O roteamento de chaves de sharding exige planejamento cuidadoso para evitar desbalanceamento (hot spots)."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que modela primariamente um banco de dados orientado a Grafos (Graph Database, como Neo4j)?",
    "Bancos de Grafos",
    [
        "A) Tabelas relacionais estritas com restrições de chaves primárias numéricas.",
        "B) Dados altamente conectados compostos por Nós (Entidades), Arestas (Relacionamentos) e Propriedades, ideal para redes sociais, motores de recomendação e detecção de fraudes.",
        "C) Arquivos binários planos sem estrutura relacional.",
        "D) Séries temporais de métricas de CPU e temperatura."
    ],
    "B",
    "Bancos de grafos calculam relacionamentos complexos de múltiplos graus de forma extremamente eficiente, sem a necessidade de operações custosas de JOIN em grandes tabelas relacionais.",
    "Utilizam linguagens de consulta específicas, como o Cypher."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que é o modelo BASE em bancos de dados NoSQL distribuídos, em contraponto ao modelo ACID?",
    "Modelo BASE",
    [
        "A) Um protocolo rígido de segurança bancária para senhas.",
        "B) Um acrônimo para Basic Availability (Disponibilidade Básica), Soft-state (Estado Flexível) e Eventual consistency (Consistência Eventual), priorizando disponibilidade e escalabilidade sobre consistência imediata.",
        "C) Um método para compactar tabelas SQL em formato binário.",
        "D) Um padrão de arquitetura frontend para aplicações React."
    ],
    "B",
    "Enquanto o ACID busca rigidez transacional imediata, o modelo BASE aceita que o sistema flutue temporariamente em seu estado até atingir a consistência completa de forma assíncrona.",
    "Reflete perfeitamente a filosofia de design dos sistemas NoSQL modernos orientados a microsserviços."
);

addQuestion(
    "Banco de Dados", "Média",
    "Em que consiste a técnica de 'Desnormalização' em bancos de dados?",
    "Desnormalização",
    [
        "A) Corrigir erros de sintaxe em comandos SQL corrompidos.",
        "B) Introduzir intencionalmente redundância de dados (como duplicar colunas ou tabelas) para eliminar a necessidade de JOINs complexos e acelerar drasticamente o tempo de leitura em consultas pesadas.",
        "C) Apagar todas as chaves primárias de um banco relacional.",
        "D) Converter um banco NoSQL em tabelas planas do Excel."
    ],
    "B",
    "A desnormalização é um compromisso de design: sacrifica-se a pureza estrutural e a facilidade de escrita para obter ganhos expressivos de performance de leitura em ambientes de alta escala (como relatórios e dashboards).",
    "Exige que a aplicação gerencie a consistência dos dados duplicados via código ou eventos."
);

addQuestion(
    "Banco de Dados", "Média",
    "Qual é a função de um banco de dados de Séries Temporais (Time-Series Database, como InfluxDB ou TimescaleDB)?",
    "Séries Temporais",
    [
        "A) Armazenar calendários de compromissos pessoais e agendas corporativas.",
        "B) Otimizar a ingestão, armazenamento massivo e consulta de dados indexados por carimbos de data/hora (timestamps), como métricas de IoT, logs de servidores e cotações financeiras em tempo real.",
        "C) Gerenciar versões de código fonte em repositórios Git.",
        "D) Executar animações gráficas 3D em navegadores web."
    ],
    "B",
    "Dados de séries temporais chegam em alto volume e ordem cronológica estrita. Bancos especializados usam compressão agressiva de colunas por tempo e políticas automáticas de retenção (retention policies).",
    "Essenciais para monitoramento de infraestrutura e observabilidade moderna."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que garantem as propriedades ACID em transações de bancos de dados relacionais?",
    "Propriedades ACID",
    [
        "A) Atomicidade, Consistência, Isolamento e Durabilidade: garantem que operações transacionais complexas sejam executadas de forma confiável e íntegra.",
        "B) Agilidade, Conectividade, Indexação e Distribuição em nuvem.",
        "C) Apenas a velocidade de leitura em consultas sem índices.",
        "D) Criptografia avançada em repouso."
    ],
    "A",
    "A Atomicidade assegura que tudo ou nada seja executado; o Isolamento impede interferências entre transações concorrentes; a Durabilidade garante que dados confirmados não se percam em falhas.",
    "Fundilaria de bancos relacionais tradicionais (OLTP)."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que é um Índice (Index) em um banco de dados e qual é o seu principal objetivo?",
    "Índices em Bancos de Dados",
    [
        "A) Um arquivo de backup incremental gerado automaticamente a cada hora.",
        "B) Uma estrutura de dados auxiliar (geralmente em árvore B-Tree) que melhora a velocidade de recuperação de registros em uma tabela, ao custo de espaço extra em disco e leve lentidão nas escritas.",
        "C) Uma chave estrangeira que conecta tabelas diferentes.",
        "D) Um comando para apagar dados duplicados."
    ],
    "B",
    "Sem índices, o banco de dados precisaria fazer uma varredura completa na tabela (Full Table Scan) para encontrar registros, o que degrada a performance com grandes volumes de dados.",
    "Devem ser criados estrategicamente nas colunas mais buscadas ou usadas em JOINs."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que caracteriza o nível de isolamento 'Serializable' em transações concorrentes?",
    "Níveis de Isolamento",
    [
        "A) Permite leituras sujas e fantasmas para priorizar desempenho máximo.",
        "B) O nível mais rigoroso de isolamento, que garante que transações concorrentes executadas simultaneamente produzam exatamente o mesmo resultado que teriam se fossem executadas uma após a outra em série.",
        "C) Bloqueia o banco de dados inteiro por 24 horas a cada comando.",
        "D) É o padrão adotado por todos os bancos NoSQL em modo distribuído."
    ],
    "B",
    "Evita anomalias como leitura suja, leitura não repetitiva e dados fantasmas, embora traga forte impacto de contenção de locks e concorrência.",
    "Essencial para aplicações financeiras estritas."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que é um banco de dados orientado a Documentos (Document Store, como MongoDB)?",
    "Bancos Orientados a Documentos",
    [
        "A) Um software para gerenciar arquivos PDF e planilhas do Word.",
        "B) Um banco NoSQL que armazena dados em estruturas semiestruturadas flexíveis, como JSON ou BSON, onde cada documento encapsula os dados e seus metadados sem necessidade de esquemas rígidos.",
        "C) Um banco relacional restrito a tabelas normalizadas.",
        "D) Um repositório de código fonte baseado em texto plano."
    ],
    "B",
    "Document Stores permitem que campos variem entre registros de uma mesma coleção, facilitando a modelagem de dados que mudam com frequência.",
    "Permitem índices em subdocumentos e arrays."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que é o fenômeno conhecido como 'Leitura Fantasma' (Phantom Read) em bancos relacionais?",
    "Leitura Fantasma",
    [
        "A) Quando o usuário lê dados de uma tabela que foi completamente apagada.",
        "B) Quando uma transação executa duas vezes a mesma consulta com intervalo de tempo e, no segundo resultado, percebe que novas linhas foram inseridas por outra transação concorrente que fez commit.",
        "C) Um erro de hardware no disco rígido do servidor SQL.",
        "D) A leitura de senhas criptografadas em texto plano."
    ],
    "B",
    "Diferente da leitura não repetitiva (onde linhas existentes mudam), a leitura fantasma envolve o surgimento ou desaparecimento de linhas inteiras que satisfazem um critério de busca.",
    "Prevenido com níveis de isolamento mais altos ou travamentos de intervalo (Next-Key Locks)."
);

addQuestion(
    "Banco de Dados", "Média",
    "Qual é a utilidade do comando 'EXPLAIN' (ou 'EXPLAIN PLAN') em bancos de dados relacionais?",
    "Otimização de Consultas (EXPLAIN)",
    [
        "A) Traduzir consultas SQL para a linguagem Python.",
        "B) Exibir o plano de execução gerado pelo otimizador do banco de dados para uma query, mostrando se índices estão sendo usados e como as tabelas estão sendo varridas.",
        "C) Excluir registros antigos para liberar espaço em disco.",
        "D) Criar automaticamente novas chaves primárias."
    ],
    "B",
    "O EXPLAIN é a ferramenta número um do desenvolvedor e DBA para diagnosticar consultas lentas e identificar gargalos de performance.",
    "Permite ajustar índices e reescrever queries ineficientes."
);

addQuestion(
    "Banco de Dados", "Fácil",
    "O que representa a chave primária (Primary Key) em uma tabela de banco de dados relacional?",
    "Chave Primária",
    [
        "A) A senha de acesso administrativo do servidor.",
        "B) Um identificador único para cada registro (linha) em uma tabela, que não pode ser nulo e não pode se repetir.",
        "C) O arquivo de configuração principal do SGBD.",
        "D) O endereço IP da máquina cliente."
    ],
    "B",
    "A chave primária garante a integridade de entidade, permitindo referenciar linhas específicas com precisão através de chaves estrangeiras.",
    "Pode ser composta por uma única coluna ou por múltiplas colunas (chave composta)."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que caracteriza um banco de dados Colunar (Column-Oriented Database, como Apache Cassandra ou Google Bigtable)?",
    "Bancos Colunares",
    [
        "A) Armazenam dados em linhas contínuas na memória RAM, ideais para sistemas de e-commerce transacionais.",
        "B) Armazenam dados organizados por colunas em vez de linhas, permitindo altíssima performance em agregações massivas e compressão extrema de dados em análises (OLAP).",
        "C) Impedem o uso de chaves primárias compostas.",
        "D) São incompatíveis com distribuições em cluster."
    ],
    "B",
    "Enquanto bancos relacionais tradicionais são orientados a linhas (ótimos para transações OLTP unitárias), bancos colunares brilham em consultas analíticas que leem apenas subconjuntos de colunas de bilhões de registros.",
    "Amplamente usados em Data Warehouses e Big Data."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que significa o conceito de Deadlock (Impasse) em sistemas de banco de dados?",
    "Deadlock",
    [
        "A) A falha permanente do disco rígido principal do servidor.",
        "B) Uma situação em que duas ou mais transações ficam permanentemente bloqueadas, cada uma aguardando a liberação de um recurso (lock) que está retido pela outra.",
        "C) O encerramento abrupto de uma conexão de rede por timeout.",
        "D) A corrupção de índices gerada por picos de energia."
    ],
    "B",
    "Para resolver deadlocks, o SGBD detecta o impasse automaticamente e aborta (rollback) uma das transações envolvidas, liberando seus recursos.",
    "Aplicativos bem projetados devem tratar erros de deadlock realizando novas tentativas automáticas (retries)."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que é uma View (Visão) em bancos de dados relacionais?",
    "Views em Banco de Dados",
    [
        "A) Uma cópia física estática da tabela armazenada em arquivo separado.",
        "B) Uma consulta (query) SQL armazenada no banco de dados que é tratada como uma tabela virtual, cujos dados são dinamicamente calculados ou recuperados no momento do acesso.",
        "C) A interface gráfica web usada para administrar o servidor PostgreSQL.",
        "D) Um log de auditoria de acessos de usuários."
    ],
    "B",
    "Views ajudam a simplificar consultas complexas reutilizáveis e podem atuar como camada de segurança, ocultando colunas sensíveis (como senhas) dos usuários finais.",
    "Existem também as Materialized Views, que persistem os dados em disco para acelerar leituras."
);

addQuestion(
    "Banco de Dados", "Fácil",
    "Qual é a função da instrução 'JOIN' em SQL?",
    "Instrução JOIN",
    [
        "A) Apagar tabelas vazias do banco de dados.",
        "B) Combinar registros de duas ou mais tabelas com base em uma condição lógica relacionada entre suas colunas (geralmente chave primária e estrangeira).",
        "C) Inserir novos registros em lote.",
        "D) Alterar o tipo de dado de uma coluna."
    ],
    "B",
    "Os tipos mais comuns de JOIN incluem INNER JOIN, LEFT JOIN, RIGHT JOIN e FULL OUTER JOIN.",
    "Fundilaria fundamental para resgatar dados relacionalmente normalizados."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que são Gatilhos (Triggers) em bancos de dados?",
    "Triggers",
    [
        "A) Mensagens de erro enviadas por e-mail ao administrador.",
        "B) Procedimentos armazenados (stored procedures) executados automaticamente pelo SGBD em resposta a determinados eventos de modificação de dados (INSERT, UPDATE, DELETE) em uma tabela.",
        "C) Rotinas de backup executadas manualmente aos finais de semana.",
        "D) Ferramentas de compactação de logs."
    ],
    "B",
    "Triggers são úteis para auditoria, validações complexas e manutenção de integridade derivada, embora possam dificultar o rastreamento da lógica de negócios se usados em excesso.",
    "Devem ser empregados com parcimônia para evitar impactos de performance ocultos."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que é um Índice Composto (Composite Index) e qual regra deve ser observada ao criá-lo?",
    "Índice Composto",
    [
        "A) Um índice que abrange múltiplas colunas; a ordem das colunas na definição do índice importa enormemente, pois o SGBD só consegue aproveitá-lo eficientemente se a consulta filtrar pela coluna mais à esquerda (prefixo mais à esquerda).",
        "B) Um índice criado automaticamente para chaves estrangeiras sem restrições.",
        "C) Um índice exclusivo para bancos de dados NoSQL chave-valor.",
        "D) Um backup compactado de tabelas correlacionadas."
    ],
    "A",
    "Se você criar um índice composto em (coluna_a, coluna_b), consultas que filtram apenas por coluna_b não conseguirão usar o índice de forma ideal.",
    "Conceito crucial para tuning de performance em grandes bases."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que diferencia os comandos 'TRUNCATE' e 'DELETE' em SQL?",
    "TRUNCATE vs DELETE",
    [
        "A) TRUNCATE é uma operação de DDL que remove todos os registros de uma tabela rapidamente sem disparar triggers de linha e reiniciando contadores de auto-incremento; DELETE é uma operação de DML linha a linha que permite cláusula WHERE e dispara triggers.",
        "B) Não há diferença; ambos removem dados da mesma exata forma.",
        "C) DELETE apaga a estrutura da tabela e TRUNCATE apenas as colunas nulas.",
        "D) TRUNCATE requer transações explícitas e DELETE não."
    ],
    "A",
    "O TRUNCATE é muito mais rápido em grandes tabelas porque desaloca as páginas de dados de uma vez, mas não pode ser desfeito facilmente se executado sem transação (dependendo do SGBD).",
    "O DELETE gera logs de desfazer (undo logs) para cada linha removida."
);

addQuestion(
    "Banco de Dados", "Fácil",
    "O que é uma Chave Estrangeira (Foreign Key)?",
    "Chave Estrangeira",
    [
        "A) Uma senha de criptografia gerada por sistemas externos.",
        "B) Uma coluna ou conjunto de colunas em uma tabela cujos valores correspondem à chave primária de outra tabela, estabelecendo um vínculo relacional entre elas.",
        "C) Um índice temporário criado na memória RAM.",
        "D) O identificador de backup em nuvem."
    ],
    "B",
    "As chaves estrangeiras garantem a integridade referencial, impedindo que o banco de dados armazene registros órfãos que apontem para entidades inexistentes.",
    "Podem ter regras de exclusão em cascata (ON DELETE CASCADE)."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que é um ORM (Object-Relational Mapping)?",
    "ORM",
    [
        "A) Um protocolo de rede para comunicação entre microsserviços.",
        "B) Uma técnica de programação que conecta o paradigma de orientação a objetos (classes e objetos) aos bancos de dados relacionais (tabelas e registros), permitindo manipular dados via código orientado a objetos.",
        "C) Um banco de dados NoSQL orientado a memória.",
        "D) Uma ferramenta de design gráfico para diagramas entidade-relacionamento."
    ],
    "B",
    "Exemplos populares de ORM incluem Hibernate/JPA (Java), Entity Framework (.NET), Sequelize/Prisma (Node.js) e SQLAlchemy (Python).",
    "Facilita o desenvolvimento, mas exige cuidado com consultas ineficientes geradas automaticamente (como o problema N+1)."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que consiste o problema 'N+1 Selects' comum ao utilizar ORMs?",
    "Problema N+1 Selects",
    [
        "A) Quando o banco de dados falha ao tentar executar mais de 1 conexões simultâneas.",
        "B) Um problema de performance onde o ORM executa 1 consulta inicial para buscar uma lista de N registros, e em seguida executa N consultas adicionais separadas para buscar os dados relacionados de cada um deles.",
        "C) Um erro de compilação em consultas SQL nativas.",
        "D) A duplicação acidental de chaves primárias."
    ],
    "B",
    "Isso gera uma enxurrada desnecessária de requisições ao banco de dados, degradando severamente a performance.",
    "É resolvido utilizando técnicas de carregamento ansioso (Eager Loading ou JOIN FETCH)."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que caracteriza o modelo de armazenamento em Banco de Dados Orientado a Colunas (Wide-Column Store, como Apache Cassandra)?",
    "Wide-Column Store",
    [
        "A) Tabelas rígidas com junções complexas obrigatórias.",
        "B) Armazenamento baseado em famílias de colunas onde as linhas podem ter conjuntos de colunas completamente diferentes entre si, otimizado para gravações massivas distribuídas.",
        "C) Arquivos de texto plano sem indexação.",
        "D) Exclusividade para ambientes embarcados IoT."
    ],
    "B",
    "Diferente de bancos relacionais, o modelo de colunas largas prioriza consultas baseadas na chave de partição e alta taxa de escrita (Write-heavy).",
    "Altamente escalável horizontalmente."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que é a técnica de Indexação Bitmap e em qual cenário ela é altamente recomendada?",
    "Índice Bitmap",
    [
        "A) Um índice que converte imagens em tabelas relacionais.",
        "B) Uma estrutura de índice que utiliza matrizes de bits para representar a presença de valores em colunas, altamente eficiente em colunas com baixa cardinalidade (poucos valores distintos, como gênero ou estado civil) em consultas analíticas complexas.",
        "C) Um método de criptografia para dados binários.",
        "D) Um índice exclusivo para bancos NoSQL de documentos."
    ],
    "B",
    "Enquanto B-Trees são excelentes para alta cardinalidade (muitos valores únicos), Bitmaps brilham combinando múltiplos filtros booleanos em Data Warehouses.",
    "Pouco eficientes em ambientes com grande volume de atualizações simultâneas (OLTP)."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que é um Data Warehouse em arquitetura de dados?",
    "Data Warehouse",
    [
        "A) O servidor físico onde ficam armazenados os cabos de rede da empresa.",
        "B) Um sistema de banco de dados centralizado projetado especificamente para consultas analíticas (OLAP), consolidação, relatórios e inteligência de negócios a partir de múltiplas fontes de dados corporativos.",
        "C) Um cache em memória RAM para sessões de usuários web.",
        "D) Um repositório versionado de código fonte."
    ],
    "B",
    "Diferente dos bancos operacionais (OLTP) focados em transações rápidas do dia a dia, o Data Warehouse armazena dados históricos desnormalizados para suporte à tomada de decisão.",
    "Exemplos modernos incluem Snowflake, Google BigQuery e Amazon Redshift."
);

addQuestion(
    "Banco de Dados", "Fácil",
    "Qual é a função da cláusula 'GROUP BY' em comandos SQL?",
    "Cláusula GROUP BY",
    [
        "A) Agrupar tabelas diferentes em um único arquivo compactado.",
        "B) Agrupar linhas que possuem valores idênticos nas colunas especificadas em conjuntos resumidos, permitindo a aplicação de funções de agregação (como SUM, AVG, COUNT).",
        "C) Ordenar os resultados da consulta em ordem alfabética.",
        "D) Filtrar registros antes de realizar qualquer junção."
    ],
    "B",
    "É sempre usada em conjunto com funções estatísticas para extrair métricas agrupadas por categorias.",
    "O filtro pós-agrupamento é feito com a cláusula HAVING."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que é a desnormalização controlada em sistemas de alta performance?",
    "Desnormalização Controlada",
    [
        "A) Apagar colunas aleatórias para economizar memória.",
        "B) A prática deliberada de adicionar redundância estrutural (como armazenar valores calculados ou duplicar dados) para evitar JOINs custosos e atingir tempos de resposta em tempo real.",
        "C) Ignorar regras de chave primária em bancos relacionais.",
        "D) Converter arquivos JSON em planilhas CSV."
    ],
    "B",
    "Embora aumente o risco de anomalias de atualização se não for bem gerenciada, é indispensável em sistemas de altíssimo tráfego.",
    "Exige que a aplicação mantenha a sincronia dos dados redundantes."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que é o conceito de 'Write-Ahead Logging' (WAL) em SGBDs?",
    "Write-Ahead Logging (WAL)",
    [
        "A) Um método de escrever logs de acesso de usuários em arquivos de texto.",
        "B) Uma técnica de durabilidade e recuperação onde todas as modificações de dados são gravadas em um arquivo de log sequencial no disco *antes* de serem aplicadas às páginas de dados principais.",
        "C) Um algoritmo para encriptar senhas em trânsito.",
        "D) Uma ferramenta de versionamento de código integrada ao SGBD."
    ],
    "B",
    "O WAL garante que, em caso de queda abrupta de energia ou falha no servidor, o banco de dados consiga recuperar o estado consistente aplicando ou desfazendo transações pendentes durante o processo de crash recovery.",
    "Fundamental para garantir a propriedade de Durabilidade do ACID."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que significa a propriedade de Atomicidade em transações ACID?",
    "Atomicidade (ACID)",
    [
        "A) Que os dados devem ser armazenados em átomos criptografados.",
        "B) Que todas as operações de uma transação são tratadas como uma única unidade indivisível: ou todas são executadas com sucesso e confirmadas (commit), ou todas são revertidas (rollback) em caso de falha.",
        "C) Que o banco de dados roda em uma única thread de processador.",
        "D) Que os registros nunca podem ser apagados."
    ],
    "B",
    "Evita que o banco de dados fique em estados intermediários inconsistentes (por exemplo, debitar de uma conta bancária sem creditar na outra).",
    "Base da confiabilidade transacional."
);

addQuestion(
    "Banco de Dados", "Fácil",
    "Qual comando SQL é utilizado para inserir novos registros em uma tabela?",
    "Comando INSERT",
    [
        "A) ADD INTO",
        "B) INSERT INTO",
        "C) CREATE RECORD",
        "D) UPDATE TABLE"
    ],
    "B",
    "O comando `INSERT INTO nome_tabela (colunas) VALUES (valores);` é o padrão fundamental de DML para popular bases relacionais.",
    "Pode inserir uma única linha ou múltiplas linhas em uma única execução."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que são Stored Procedures (Procedimentos Armazenados)?",
    "Stored Procedures",
    [
        "A) Rotinas de salvamento automático de arquivos na nuvem.",
        "B) Sub-rotinas ou blocos de código SQL compilados e armazenados diretamente no servidor de banco de dados, que podem ser executados por aplicações clientes.",
        "C) Arquivos de configuração de hardware do servidor.",
        "D) Códigos de criptografia de senhas."
    ],
    "B",
    "Stored procedures ajudam a centralizar a lógica de negócios no banco de dados, reduzir o tráfego de rede e reforçar a segurança.",
    "Em contrapartida, podem dificultar o controle de versionamento de código e testes automatizados se usados em excesso."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que é o Teorema PACELC para sistemas distribuídos?",
    "Teorema PACELC",
    [
        "A) Uma extensão do Teorema CAP que estipula que, se houver uma Partição (P), um sistema deve escolher entre Disponibilidade (A) ou Consistência (C); caso contrário (E), quando o sistema estiver rodando normalmente sem partições, ele deve escolher entre Latência (L) ou Consistência (C).",
        "B) Um protocolo de segurança para redes sem fio.",
        "C) Um método para calcular o desempenho de servidores NoSQL.",
        "D) Uma regra de normalização de bancos NoSQL."
    ],
    "A",
    "O CAP cobre apenas o comportamento durante falhas de rede (partições); o PACELC complementa a análise explicando o compromisso de design (Trade-off) entre Latência e Consistência mesmo quando a rede está funcionando perfeitamente.",
    "Muitos sistemas NoSQL escolhem AP/EL (Disponibilidade em partição, Latência menor em operação normal)."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que é um banco de dados poliglota (Polyglot Persistence)?",
    "Polyglot Persistence",
    [
        "A) Um banco de dados que suporta apenas a língua inglesa e espanhola.",
        "B) O padrão de arquitetura moderna onde uma aplicação utiliza diferentes tipos de bancos de dados (relacionais, NoSQL de documentos, grafos, chave-valor) combinados, escolhendo a ferramenta ideal para cada subdomínio específico.",
        "C) Um banco que armazena dados em múltiplos servidores geograficamente isolados.",
        "D) Uma linguagem de programação para consultas SQL universais."
    ],
    "B",
    "Reconhece que 'uma única tecnologia de banco de dados não serve para resolver todos os problemas de forma ideal'.",
    "Exemplo: usar PostgreSQL para dados transacionais críticos, Redis para cache e Neo4j para recomendações."
);

addQuestion(
    "Banco de Dados", "Fácil",
    "Qual comando SQL é utilizado para alterar a estrutura de uma tabela existente (como adicionar uma nova coluna)?",
    "Comando ALTER TABLE",
    [
        "A) MODIFY TABLE",
        "B) ALTER TABLE",
        "C) UPDATE STRUCTURE",
        "D) CHANGE COLUMN"
    ],
    "B",
    "O comando `ALTER TABLE` faz parte da DDL (Data Definition Language) e permite modificar colunas, restrições e índices sem precisar recriar a tabela do zero.",
    "Deve ser usado com cuidado em tabelas de grande porte em produção."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que significa a propriedade de Isolamento (Isolation) em transações ACID?",
    "Isolamento (ACID)",
    [
        "A) Que o banco de dados deve ser mantido em uma sala isolada fisicamente.",
        "B) Que a execução simultânea de múltiplas transações deve resultar em um estado do sistema equivalente ao de sua execução sequencial, impedindo que transações concorrentes vejam dados intermediários não confirmados.",
        "C) Que o servidor não pode se conectar à internet.",
        "D) Que cada tabela deve ficar em um disco rígido separado."
    ],
    "B",
    "O nível de isolamento garante que o trabalho de uma transação não seja interferido por outras ocorrendo ao mesmo tempo.",
    "Equilibra consistência e concorrência através de travas (locks) ou controle de versão multiversão (MVCC)."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que é o mecanismo MVCC (Multi-Version Concurrency Control) em SGBDs?",
    "MVCC",
    [
        "A) Um antivírus para bancos de dados relacionais.",
        "B) Um controle de concorrência onde o banco de dados mantém múltiplas versões físicas dos mesmos dados, permitindo que leitores não bloqueiem escritores e escritores não bloqueiem leitores.",
        "C) Um protocolo de replicação em nuvem multirregião.",
        "D) Uma ferramenta de backup em fita magnética."
    ],
    "B",
    "O MVCC é o padrão adotado por modernos SGBDs relacionais (como PostgreSQL e MySQL/InnoDB) para garantir alta concorrência e escalabilidade de leitura sem travar tabelas inteiras.",
    "Exige processos de limpeza em segundo plano (como VACUUM no Postgres) para remover versões antigas obsoletas."
);

/* =====================================================
   BLOCO 7 (COMPLETO - 40 QUESTÕES): BANCO DE DADOS E SQL
===================================================== */

// --- 1 a 30: Conceitos, NoSQL, Arquitetura e SGBD ---

addQuestion(
    "Banco de Dados", "Média",
    "O que preconiza o Teorema de CAP em sistemas distribuídos de bancos de dados?",
    "Teorema de CAP",
    [
        "A) Um sistema distribuído pode garantir simultaneamente e sem restrições a Consistência (Consistency), a Disponibilidade (Availability) e a Tolerância a Particionamento de Rede (Partition Tolerance).",
        "B) Em caso de uma falha de rede (particionamento), um sistema distribuído pode escolher garantir Consistência ou Disponibilidade, mas nunca ambas simultaneamente.",
        "C) Garante criptografia absoluta para dados em repouso e em trânsito.",
        "D) Define o limite máximo de conexões simultâneas que um banco NoSQL suporta."
    ],
    "B",
    "O Teorema de CAP (Brewer) estabelece que redes distribuídas estão sujeitas a falhas de comunicação (partições). Portanto, a escolha em cenários de falha resume-se a CP (consistência ou parada) ou AP (disponibilidade com dados eventualmente consistentes).",
    "Bancos relacionais tradicionais tendem a priorizar CP, enquanto muitos NoSQL focam em AP."
);

addQuestion(
    "Banco de Dados", "Média",
    "Qual é a principal diferença conceitual entre bancos de dados relacionais (SQL) e não relacionais (NoSQL)?",
    "Relacional vs NoSQL",
    [
        "A) Bancos NoSQL não utilizam nenhum tipo de estrutura de dados e armazenam tudo em arquivos comprimidos.",
        "B) Bancos relacionais estruturam dados em tabelas rígidas com esquemas fixos e fortes garantias ACID; bancos NoSQL oferecem alta escalabilidade horizontal e esquemas flexíveis (documentos, chave-valor, colunas ou grafos), priorizando performance e flexibilidade.",
        "C) Bancos NoSQL são totalmente incompatíveis com arquiteturas de microsserviços.",
        "D) Bancos relacionais rodam apenas em servidores Linux e NoSQL apenas em Windows."
    ],
    "B",
    "O NoSQL surgiu para resolver problemas de grande volume e alta velocidade de dados (Big Data) onde a escalabilidade horizontal é mais crítica do que as junções relacionais complexas.",
    "A escolha depende diretamente do domínio do problema e dos requisitos de consistência dos dados."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que caracteriza o modelo de Consistência Eventual (Eventual Consistency) comumente adotado em bancos NoSQL?",
    "Consistência Eventual",
    [
        "A) Os dados nunca são salvos permanentemente no disco rígido.",
        "B) Se nenhuma nova atualização for feita em um dado item, todas as réplicas eventualmente retornarão o mesmo valor após um curto período de propagação na rede.",
        "C) As transações exigem bloqueio síncrono absoluto em todas as máquinas do cluster.",
        "D) O banco de dados apaga registros antigos automaticamente a cada meia-noite."
    ],
    "B",
    "A consistência eventual prioriza a alta disponibilidade e performance de gravação (modelo AP do CAP), aceitando que leituras imediatas após uma escrita possam retornar dados desatualizados por instantes.",
    "Comum em sistemas de redes sociais, carrinhos de compras e contadores de visualizações."
);

addQuestion(
    "Banco de Dados", "Média",
    "Para que serve o processo de Normalização de Bancos de Dados (até a 3ª Forma Normal)?",
    "Normalização",
    [
        "A) Para duplicar dados intencionalmente e acelerar consultas complexas de leitura.",
        "B) Para organizar as tabelas e colunas de forma a reduzir a redundância de dados e eliminar anomalias de inserção, atualização e exclusão, garantindo a integridade estrutural.",
        "C) Para converter arquivos de texto em planilhas Excel formatadas.",
        "D) Para criptografar senhas de usuários com algoritmos de hash."
    ],
    "B",
    "A normalização divide dados repetidos em tabelas relacionadas através de chaves estrangeiras, otimizando o armazenamento e evitando inconsistências lógicas.",
    "Em contrapartida, excesso de normalização pode exigir muitos JOINs, motivando a desnormalização em cenários de alta leitura."
);

addQuestion(
    "Banco de Dados", "Média",
    "Qual é a principal utilidade de um banco de dados em memória do tipo Chave-Valor (como Redis) em uma arquitetura de software moderna?",
    "Bancos Chave-Valor (Redis)",
    [
        "A) Armazenar logs históricos e backups em fitas magnéticas de longo prazo.",
        "B) Atuar como cache de alta performance, gerenciamento de sessões, filas de mensagens rápidas e contadores em tempo real, devido ao acesso quase instantâneo na RAM.",
        "C) Executar relatórios gerenciais complexos em SQL com milhões de linhas cruzadas.",
        "D) Substituir totalmente o armazenamento persistente em disco em sistemas corporativos críticos."
    ],
    "B",
    "O Redis armazena dados diretamente na memória RAM, oferecendo tempos de resposta na ordem de microssegundos, o que alivia a carga de bancos relacionais em consultas frequentes.",
    "Pode ser configurado com persistência em disco (RDB/AOF) para evitar perda total de dados em reinicializações."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que diferencia o Sharding (Fragmentação) da Replicação em bancos de dados distribuídos?",
    "Sharding vs Replicação",
    [
        "A) Sharding duplica todos os dados em múltiplos servidores para redundância; replicação divide os dados particionando-os entre diferentes nós.",
        "B) A replicação copia e sincroniza dados em múltiplos nós para garantir alta disponibilidade e leitura escalável; o sharding divide o banco de dados em partes menores (shards) distribuídas horizontalmente para suportar volumes massivos de escrita e armazenamento.",
        "C) Não há diferença técnica; ambos são sinônimos de backups em nuvem.",
        "D) Sharding é exclusivo de bancos relacionais e replicação de NoSQL."
    ],
    "B",
    "Enquanto a replicação resolve problemas de disponibilidade e performance de leitura (nós Master-Slave), o sharding resolve problemas de limite físico de armazenamento e gargalos de escrita em bases gigantescas.",
    "O roteamento de chaves de sharding exige planejamento cuidadoso para evitar desbalanceamento (hot spots)."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que modela primariamente um banco de dados orientado a Grafos (Graph Database, como Neo4j)?",
    "Bancos de Grafos",
    [
        "A) Tabelas relacionais estritas com restrições de chaves primárias numéricas.",
        "B) Dados altamente conectados compostos por Nós (Entidades), Arestas (Relacionamentos) e Propriedades, ideal para redes sociais, motores de recomendação e detecção de fraudes.",
        "C) Arquivos binários planos sem estrutura relacional.",
        "D) Séries temporais de métricas de CPU e temperatura."
    ],
    "B",
    "Bancos de grafos calculam relacionamentos complexos de múltiplos graus de forma extremamente eficiente, sem a necessidade de operações custosas de JOIN em grandes tabelas relacionais.",
    "Utilizam linguagens de consulta específicas, como o Cypher."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que é o modelo BASE em bancos de dados NoSQL distribuídos, em contraponto ao modelo ACID?",
    "Modelo BASE",
    [
        "A) Um protocolo rígido de segurança bancária para senhas.",
        "B) Um acrônimo para Basic Availability (Disponibilidade Básica), Soft-state (Estado Flexível) e Eventual consistency (Consistência Eventual), priorizando disponibilidade e escalabilidade sobre consistência imediata.",
        "C) Um método para compactar tabelas SQL em formato binário.",
        "D) Um padrão de arquitetura frontend para aplicações React."
    ],
    "B",
    "Enquanto o ACID busca rigidez transacional imediata, o modelo BASE aceita que o sistema flutue temporariamente em seu estado até atingir a consistência completa de forma assíncrona.",
    "Reflete perfeitamente a filosofia de design dos sistemas NoSQL modernos orientados a microsserviços."
);

addQuestion(
    "Banco de Dados", "Média",
    "Em que consiste a técnica de 'Desnormalização' em bancos de dados?",
    "Desnormalização",
    [
        "A) Corrigir erros de sintaxe em comandos SQL corrompidos.",
        "B) Introduzir intencionalmente redundância de dados (como duplicar colunas ou tabelas) para eliminar a necessidade de JOINs complexos e acelerar drasticamente o tempo de leitura em consultas pesadas.",
        "C) Apagar todas as chaves primárias de um banco relacional.",
        "D) Converter um banco NoSQL em tabelas planas do Excel."
    ],
    "B",
    "A desnormalização é um compromisso de design: sacrifica-se a pureza estrutural e a facilidade de escrita para obter ganhos expressivos de performance de leitura em ambientes de alta escala (como relatórios e dashboards).",
    "Exige que a aplicação gerencie a consistência dos dados duplicados via código ou eventos."
);

addQuestion(
    "Banco de Dados", "Média",
    "Qual é a função de um banco de dados de Séries Temporais (Time-Series Database, como InfluxDB ou TimescaleDB)?",
    "Séries Temporais",
    [
        "A) Armazenar calendários de compromissos pessoais e agendas corporativas.",
        "B) Otimizar a ingestão, armazenamento massivo e consulta de dados indexados por carimbos de data/hora (timestamps), como métricas de IoT, logs de servidores e cotações financeiras em tempo real.",
        "C) Gerenciar versões de código fonte em repositórios Git.",
        "D) Executar animações gráficas 3D em navegadores web."
    ],
    "B",
    "Dados de séries temporais chegam em alto volume e ordem cronológica estrita. Bancos especializados usam compressão agressiva de colunas por tempo e políticas automáticas de retenção (retention policies).",
    "Essenciais para monitoramento de infraestrutura e observabilidade moderna."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que garantem as propriedades ACID em transações de bancos de dados relacionais?",
    "Propriedades ACID",
    [
        "A) Atomicidade, Consistência, Isolamento e Durabilidade: garantem que operações transacionais complexas sejam executadas de forma confiável e íntegra.",
        "B) Agilidade, Conectividade, Indexação e Distribuição em nuvem.",
        "C) Apenas a velocidade de leitura em consultas sem índices.",
        "D) Criptografia avançada em repouso."
    ],
    "A",
    "A Atomicidade assegura que tudo ou nada seja executado; o Isolamento impede interferências entre transações concorrentes; a Durabilidade garante que dados confirmados não se percam em falhas.",
    "Fundilaria de bancos relacionais tradicionais (OLTP)."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que é um Índice (Index) em um banco de dados e qual é o seu principal objetivo?",
    "Índices em Bancos de Dados",
    [
        "A) Um arquivo de backup incremental gerado automaticamente a cada hora.",
        "B) Uma estrutura de dados auxiliar (geralmente em árvore B-Tree) que melhora a velocidade de recuperação de registros em uma tabela, ao custo de espaço extra em disco e leve lentidão nas escritas.",
        "C) Uma chave estrangeira que conecta tabelas diferentes.",
        "D) Um comando para apagar dados duplicados."
    ],
    "B",
    "Sem índices, o banco de dados precisaria fazer uma varredura completa na tabela (Full Table Scan) para encontrar registros, o que degrada a performance com grandes volumes de dados.",
    "Devem ser criados estrategicamente nas colunas mais buscadas ou usadas em JOINs."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que caracteriza o nível de isolamento 'Serializable' em transações concorrentes?",
    "Níveis de Isolamento",
    [
        "A) Permite leituras sujas e fantasmas para priorizar desempenho máximo.",
        "B) O nível mais rigoroso de isolamento, que garante que transações concorrentes executadas simultaneamente produzam exatamente o mesmo resultado que teriam se fossem executadas uma após a outra em série.",
        "C) Bloqueia o banco de dados inteiro por 24 horas a cada comando.",
        "D) É o padrão adotado por todos os bancos NoSQL em modo distribuído."
    ],
    "B",
    "Evita anomalias como leitura suja, leitura não repetitiva e dados fantasmas, embora traga forte impacto de contenção de locks e concorrência.",
    "Essencial para aplicações financeiras estritas."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que é um banco de dados orientado a Documentos (Document Store, como MongoDB)?",
    "Bancos Orientados a Documentos",
    [
        "A) Um software para gerenciar arquivos PDF e planilhas do Word.",
        "B) Um banco NoSQL que armazena dados em estruturas semiestruturadas flexíveis, como JSON ou BSON, onde cada documento encapsula os dados e seus metadados sem necessidade de esquemas rígidos.",
        "C) Um banco relacional restrito a tabelas normalizadas.",
        "D) Um repositório de código fonte baseado em texto plano."
    ],
    "B",
    "Document Stores permitem que campos variem entre registros de uma mesma coleção, facilitando a modelagem de dados que mudam com frequência.",
    "Permitem índices em subdocumentos e arrays."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que é o fenômeno conhecido como 'Leitura Fantasma' (Phantom Read) em bancos relacionais?",
    "Leitura Fantasma",
    [
        "A) Quando o usuário lê dados de uma tabela que foi completamente apagada.",
        "B) Quando uma transação executa duas vezes a mesma consulta com intervalo de tempo e, no segundo resultado, percebe que novas linhas foram inseridas por outra transação concorrente que fez commit.",
        "C) Um erro de hardware no disco rígido do servidor SQL.",
        "D) A leitura de senhas criptografadas em texto plano."
    ],
    "B",
    "Diferente da leitura não repetitiva (onde linhas existentes mudam), a leitura fantasma envolve o surgimento ou desaparecimento de linhas inteiras que satisfazem um critério de busca.",
    "Prevenido com níveis de isolamento mais altos ou travamentos de intervalo (Next-Key Locks)."
);

addQuestion(
    "Banco de Dados", "Média",
    "Qual é a utilidade do comando 'EXPLAIN' (ou 'EXPLAIN PLAN') em bancos de dados relacionais?",
    "Otimização de Consultas (EXPLAIN)",
    [
        "A) Traduzir consultas SQL para a linguagem Python.",
        "B) Exibir o plano de execução gerado pelo otimizador do banco de dados para uma query, mostrando se índices estão sendo usados e como as tabelas estão sendo varridas.",
        "C) Excluir registros antigos para liberar espaço em disco.",
        "D) Criar automaticamente novas chaves primárias."
    ],
    "B",
    "O EXPLAIN é a ferramenta número um do desenvolvedor e DBA para diagnosticar consultas lentas e identificar gargalos de performance.",
    "Permite ajustar índices e reescrever queries ineficientes."
);

addQuestion(
    "Banco de Dados", "Fácil",
    "O que representa a chave primária (Primary Key) em uma tabela de banco de dados relacional?",
    "Chave Primária",
    [
        "A) A senha de acesso administrativo do servidor.",
        "B) Um identificador único para cada registro (linha) em uma tabela, que não pode ser nulo e não pode se repetir.",
        "C) O arquivo de configuração principal do SGBD.",
        "D) O endereço IP da máquina cliente."
    ],
    "B",
    "A chave primária garante a integridade de entidade, permitindo referenciar linhas específicas com precisão através de chaves estrangeiras.",
    "Pode ser composta por uma única coluna ou por múltiplas colunas (chave composta)."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que caracteriza um banco de dados Colunar (Column-Oriented Database, como Apache Cassandra ou Google Bigtable)?",
    "Bancos Colunares",
    [
        "A) Armazenam dados em linhas contínuas na memória RAM, ideais para sistemas de e-commerce transacionais.",
        "B) Armazenam dados organizados por colunas em vez de linhas, permitindo altíssima performance em agregações massivas e compressão extrema de dados em análises (OLAP).",
        "C) Impedem o uso de chaves primárias compostas.",
        "D) São incompatíveis com distribuições em cluster."
    ],
    "B",
    "Enquanto bancos relacionais tradicionais são orientados a linhas (ótimos para transações OLTP unitárias), bancos colunares brilham em consultas analíticas que leem apenas subconjuntos de colunas de bilhões de registros.",
    "Amplamente usados em Data Warehouses e Big Data."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que significa o conceito de Deadlock (Impasse) em sistemas de banco de dados?",
    "Deadlock",
    [
        "A) A falha permanente do disco rígido principal do servidor.",
        "B) Uma situação em que duas ou mais transações ficam permanentemente bloqueadas, cada uma aguardando a liberação de um recurso (lock) que está retido pela outra.",
        "C) O encerramento abrupto de uma conexão de rede por timeout.",
        "D) A corrupção de índices gerada por picos de energia."
    ],
    "B",
    "Para resolver deadlocks, o SGBD detecta o impasse automaticamente e aborta (rollback) uma das transações envolvidas, liberando seus recursos.",
    "Aplicativos bien projetados devem tratar erros de deadlock realizando novas tentativas automáticas (retries)."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que é uma View (Visão) em bancos de dados relacionais?",
    "Views em Banco de Dados",
    [
        "A) Uma cópia física estática da tabela armazenada em arquivo separado.",
        "B) Uma consulta (query) SQL armazenada no banco de dados que é tratada como uma tabela virtual, cujos dados são dinamicamente calculados ou recuperados no momento do acesso.",
        "C) A interface gráfica web usada para administrar o servidor PostgreSQL.",
        "D) Um log de auditoria de acessos de usuários."
    ],
    "B",
    "Views ajudam a simplificar consultas complexas reutilizáveis e podem atuar como camada de segurança, ocultando colunas sensíveis (como senhas) dos usuários finais.",
    "Existem também as Materialized Views, que persistem os dados em disco para acelerar leituras."
);

addQuestion(
    "Banco de Dados", "Fácil",
    "Qual é a função da instrução 'JOIN' em SQL?",
    "Instrução JOIN",
    [
        "A) Apagar tabelas vazias do banco de dados.",
        "B) Combinar registros de duas ou mais tabelas com base em uma condição lógica relacionada entre suas colunas (geralmente chave primária e estrangeira).",
        "C) Inserir novos registros em lote.",
        "D) Alterar o tipo de dado de uma coluna."
    ],
    "B",
    "Os tipos mais comuns de JOIN incluem INNER JOIN, LEFT JOIN, RIGHT JOIN e FULL OUTER JOIN.",
    "Fundilaria fundamental para resgatar dados relacionalmente normalizados."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que são Gatilhos (Triggers) em bancos de dados?",
    "Triggers",
    [
        "A) Mensagens de erro enviadas por e-mail ao administrador.",
        "B) Procedimentos armazenados (stored procedures) executados automaticamente pelo SGBD em resposta a determinados eventos de modificação de dados (INSERT, UPDATE, DELETE) em uma tabela.",
        "C) Rotinas de backup executadas manualmente aos finais de semana.",
        "D) Ferramentas de compactação de logs."
    ],
    "B",
    "Triggers são úteis para auditoria, validações complexas e manutenção de integridade derivada, embora possam dificultar o rastreamento da lógica de negócios se usados em excesso.",
    "Devem ser empregados com parcimônia para evitar impactos de performance ocultos."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que é um Índice Composto (Composite Index) e qual regra deve ser observada ao criá-lo?",
    "Índice Composto",
    [
        "A) Um índice que abrange múltiplas colunas; a ordem das colunas na definição do índice importa enormemente, pois o SGBD só consegue aproveitá-lo eficientemente se a consulta filtrar pela coluna mais à esquerda (prefixo mais à esquerda).",
        "B) Um índice criado automaticamente para chaves estrangeiras sem restrições.",
        "C) Um índice exclusivo para bancos de dados NoSQL chave-valor.",
        "D) Um backup compactado de tabelas correlacionadas."
    ],
    "A",
    "Se você criar um índice composto em (coluna_a, coluna_b), consultas que filtram apenas por coluna_b não conseguirão usar o índice de forma ideal.",
    "Conceito crucial para tuning de performance em grandes bases."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que diferencia os comandos 'TRUNCATE' e 'DELETE' em SQL?",
    "TRUNCATE vs DELETE",
    [
        "A) TRUNCATE é uma operação de DDL que remove todos os registros de uma tabela rapidamente sem disparar triggers de linha e reiniciando contadores de auto-incremento; DELETE é uma operação de DML linha a linha que permite cláusula WHERE e dispara triggers.",
        "B) Não há diferença; ambos removem dados da mesma exata forma.",
        "C) DELETE apaga a estrutura da tabela e TRUNCATE apenas as colunas nulas.",
        "D) TRUNCATE requer transações explícitas e DELETE não."
    ],
    "A",
    "O TRUNCATE é muito mais rápido em grandes tabelas porque desaloca as páginas de dados de uma vez, mas não pode ser desfeito facilmente se executado sem transação (dependendo do SGBD).",
    "O DELETE gera logs de desfazer (undo logs) para cada linha removida."
);

addQuestion(
    "Banco de Dados", "Fácil",
    "O que é uma Chave Estrangeira (Foreign Key)?",
    "Chave Estrangeira",
    [
        "A) Uma senha de criptografia gerada por sistemas externos.",
        "B) Uma coluna ou conjunto de colunas em uma tabela cujos valores correspondem à chave primária de outra tabela, estabelecendo um vínculo relacional entre elas.",
        "C) Um índice temporário criado na memória RAM.",
        "D) O identificador de backup em nuvem."
    ],
    "B",
    "As chaves estrangeiras garantem a integridade referencial, impedindo que o banco de dados armazene registros órfãos que apontem para entidades inexistentes.",
    "Podem ter regras de exclusão em cascata (ON DELETE CASCADE)."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que é um ORM (Object-Relational Mapping)?",
    "ORM",
    [
        "A) Um protocolo de rede para comunicação entre microsserviços.",
        "B) Uma técnica de programação que conecta o paradigma de orientação a objetos (classes e objetos) aos bancos de dados relacionais (tabelas e registros), permitindo manipular dados via código orientado a objetos.",
        "C) Um banco de dados NoSQL orientado a memória.",
        "D) Uma ferramenta de design gráfico para diagramas entidade-relacionamento."
    ],
    "B",
    "Exemplos populares de ORM incluem Hibernate/JPA (Java), Entity Framework (.NET), Sequelize/Prisma (Node.js) e SQLAlchemy (Python).",
    "Facilita o desenvolvimento, mas exige cuidado com consultas ineficientes geradas automaticamente (como o problema N+1)."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que consiste o problema 'N+1 Selects' comum ao utilizar ORMs?",
    "Problema N+1 Selects",
    [
        "A) Quando o banco de dados falha ao tentar executar mais de 1 conexões simultâneas.",
        "B) Um problema de performance onde o ORM executa 1 consulta inicial para buscar uma lista de N registros, e em seguida executa N consultas adicionais separadas para buscar os dados relacionados de cada um deles.",
        "C) Um erro de compilação em consultas SQL nativas.",
        "D) A duplicação acidental de chaves primárias."
    ],
    "B",
    "Isso gera uma enxurrada desnecessária de requisições ao banco de dados, degradando severamente a performance.",
    "É resolvido utilizando técnicas de carregamento ansioso (Eager Loading ou JOIN FETCH)."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que caracteriza o modelo de armazenamento em Banco de Dados Orientado a Colunas (Wide-Column Store, como Apache Cassandra)?",
    "Wide-Column Store",
    [
        "A) Tabelas rígidas com junções complexas obrigatórias.",
        "B) Armazenamento baseado em famílias de colunas onde as linhas podem ter conjuntos de colunas completamente diferentes entre si, otimizado para gravações massivas distribuídas.",
        "C) Arquivos de texto plano sem indexação.",
        "D) Exclusividade para ambientes embarcados IoT."
    ],
    "B",
    "Diferente de bancos relacionais, o modelo de colunas largas prioriza consultas baseadas na chave de partição e alta taxa de escrita (Write-heavy).",
    "Altamente escalável horizontalmente."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que é a técnica de Indexação Bitmap e em qual cenário ela é altamente recomendada?",
    "Índice Bitmap",
    [
        "A) Um índice que converte imagens em tabelas relacionais.",
        "B) Uma estrutura de índice que utiliza matrizes de bits para representar a presença de valores em colunas, altamente eficiente em colunas com baixa cardinalidade (poucos valores distintos, como gênero ou estado civil) em consultas analíticas complexas.",
        "C) Um método de criptografia para dados binários.",
        "D) Um índice exclusivo para bancos NoSQL de documentos."
    ],
    "B",
    "Enquanto B-Trees são excelentes para alta cardinalidade (muitos valores únicos), Bitmaps brilham combinando múltiplos filtros booleanos em Data Warehouses.",
    "Pouco eficientes em ambientes com grande volume de atualizações simultâneas (OLTP)."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que é um Data Warehouse em arquitetura de dados?",
    "Data Warehouse",
    [
        "A) O servidor físico onde ficam armazenados os cabos de rede da empresa.",
        "B) Um sistema de banco de dados centralizado projetado especificamente para consultas analíticas (OLAP), consolidação, relatórios e inteligência de negócios a partir de múltiplas fontes de dados corporativos.",
        "C) Um cache em memória RAM para sessões de usuários web.",
        "D) Um repositório versionado de código fonte."
    ],
    "B",
    "Diferente dos bancos operacionais (OLTP) focados em transações rápidas do dia a dia, o Data Warehouse armazena dados históricos desnormalizados para suporte à tomada de decisão.",
    "Exemplos modernos incluem Snowflake, Google BigQuery e Amazon Redshift."
);


// --- 31 a 40: Questões Práticas e Avançadas de SQL ---

addQuestion(
    "Banco de Dados", "Média",
    "Qual é a principal diferença entre os comandos `DELETE`, `TRUNCATE` e `DROP` em bancos de dados relacionais?",
    "Comandos DDL e DML",
    [
        "A) Todos fazem exatamente a mesma coisa, apagando dados e estruturas de forma idêntica.",
        "B) `DELETE` é um comando DML que remove linhas específicas (permitindo filtro WHERE e rollback de transação); `TRUNCATE` é um comando DDL que remove todas as linhas rapidamente reiniciando contadores de identidade sem registrar cada linha individualmente no log de transações; `DROP` exclui permanentemente a estrutura inteira da tabela do banco de dados.",
        "C) `DROP` apaga apenas uma linha específica e `DELETE` destrói o servidor físico.",
        "D) `TRUNCATE` é utilizado exclusivamente para criar novas tabelas e visões."
    ],
    "B",
    "Compreender a diferença entre DML (Data Manipulation Language) e DDL (Data Definition Language) é crucial para performance e segurança operacional em bancos relacionais.",
    "Sempre verifique se há chaves estrangeiras ativas antes de executar comandos como `TRUNCATE` ou `DROP`."
);

addQuestion(
    "Banco de Dados", "Média",
    "Qual é o comportamento padrão de um `INNER JOIN` ao combinar duas tabelas em uma consulta SQL?",
    "Junções (Joins)",
    [
        "A) Retorna todos os registros da tabela à esquerda, mesmo que não haja correspondência na tabela à direita.",
        "B) Retorna apenas os registros que possuem correspondência (valores correspondentes) em ambas as tabelas envolvidas na junção.",
        "C) Retorna o produto cartesiano absoluto, combinando todas as linhas de ambas as tabelas sem restrições.",
        "D) Retorna apenas os registros exclusivos que não possuem correspondência em nenhuma das tabelas."
    ],
    "B",
    "O `INNER JOIN` é a junção mais comum. Linhas que não encontram correspondência na condição de igualdade (ON) são descartadas do resultado final.",
    "Diferencia-se de `LEFT JOIN` e `RIGHT JOIN`, que preservam registros da tabela base mesmo sem correspondência."
);

addQuestion(
    "Banco de Dados", "Média",
    "Para que servem as funções de agregação no SQL, como `COUNT`, `SUM`, `AVG`, `MAX` e `MIN`, quando combinadas com a cláusula `GROUP BY`?",
    "Funções de Agregação e Agrupamento",
    [
        "A) Para ordenar o resultado final da consulta alfabeticamente.",
        "B) Para realizar cálculos estatísticos e resumir conjuntos de dados agrupados por colunas específicas, condensando múltiplos registros em linhas de resumo.",
        "C) Para criar chaves primárias automáticas em novas tabelas.",
        "D) Para filtrar registros individuais antes que a consulta seja executada."
    ],
    "B",
    "O `GROUP BY` divide o conjunto de resultados em subgrupos, permitindo aplicar funções de agregação (como somar valores de vendas ou contar clientes) por cada categoria específica.",
    "Para filtrar resultados após a agregação, deve-se utilizar a cláusula `HAVING` em vez de `WHERE`."
);

addQuestion(
    "Banco de Dados", "Média",
    "Qual é a função da cláusula `HAVING` em uma consulta SQL agregada?",
    "Cláusula HAVING vs WHERE",
    [
        "A) Filtrar linhas individuais da tabela antes que o agrupamento (`GROUP BY`) seja realizado.",
        "B) Filtrar os resultados gerados após a aplicação de funções de agregação e agrupamento (`GROUP BY`), atuando como um filtro para os grupos formados.",
        "C) Ordenar os dados em ordem decrescente de forma automática.",
        "D) Unir duas tabelas diferentes sem precisar da palavra-chave JOIN."
    ],
    "B",
    "A confusão entre `WHERE` e `HAVING` é clássica: o `WHERE` filtra linhas brutas antes da agregação, enquanto o `HAVING` filtra os resultados já agregados (ex: `HAVING COUNT(*) > 5`).",
    "O `HAVING` vem sempre após o `GROUP BY` na estrutura sintática da query."
);

addQuestion(
    "Banco de Dados", "Média",
    "Qual é a diferença funcional entre os operadores `UNION` e `UNION ALL` ao combinar consultas SQL?",
    "Operadores de Conjuntos",
    [
        "A) `UNION` remove duplicatas dos resultados combinados e executa uma ordenação implícita; `UNION ALL` inclui todos os registros (inclusive duplicados) de forma direta e mais rápida.",
        "B) `UNION` une tabelas de bancos de dados diferentes e `UNION ALL` junta apenas uma tabela consigo mesma.",
        "C) Não há diferença; ambos funcionam de maneira idêntica em qualquer SGBD.",
        "D) `UNION ALL` apaga os dados originais e `UNION` cria um backup."
    ],
    "A",
    "Como o `UNION` padrão exige a remoção de duplicatas (processo de distinct), ele consome mais CPU e memória. Se você sabe que não há duplicatas ou quer mantê-las, o `UNION ALL` é consideravelmente mais performático.",
    "Ambos exigem que as consultas combinadas tenham o mesmo número de colunas e tipos de dados compatíveis."
);

addQuestion(
    "Banco de Dados", "Média",
    "Qual é a função de uma Subconsulta (Subquery ou Consulta Aninhada) no SQL?",
    "Subconsultas",
    [
        "A) Executar tarefas de manutenção e limpeza física de logs no servidor.",
        "B) Permitir que uma consulta SQL seja colocada dentro de outra instrução (`SELECT`, `INSERT`, `UPDATE` ou `DELETE`), servindo como filtro dinâmico ou fonte de dados derivada.",
        "C) Submeter relatórios gerenciais diretamente para a impressora padrão.",
        "D) Criptografar colunas sensíveis em formato binário."
    ],
    "B",
    "Subconsultas podem ser escalares (retornando um único valor) ou correlacionadas (quando dependem da linha avaliada na consulta externa). São poderosas para resolver lógicas complexas de filtragem.",
    "Em muitos cenários modernos, o uso de CTEs (`WITH`) substitui subconsultas complexas com ganho de legibilidade."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que caracteriza uma Visão (View) em um banco de dados relacional?",
    "Views (Visões)",
    [
        "A) Um arquivo físico duplicado que copia todos os dados para uma máquina de backup na nuvem.",
        "B) Uma consulta SQL armazenada no banco de dados que atua como uma tabela virtual, permitindo encapsular consultas complexas, simplificar a segurança de acesso a colunas e reutilizar lógicas de negócio.",
        "C) Uma interface gráfica web para visualização de relatórios em PDF.",
        "D) Um índice temporário gerado apenas durante reinicializações do sistema."
    ],
    "B",
    "As views não armazenam os dados fisicamente por padrão (exceto em materialized views); elas recalculam o resultado a cada acesso, servindo como uma camada de abstração e segurança sobre as tabelas base.",
    "Úteis para ocultar colunas sensíveis de usuários comuns em grandes bases de dados."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que significa a propriedade de Atomicidade em transações ACID?",
    "Atomicidade (ACID)",
    [
        "A) Que os dados devem ser armazenados em átomos criptografados.",
        "B) Que todas as operações de uma transação são tratadas como uma única unidade indivisível: ou todas são executadas com sucesso e confirmadas (commit), ou todas são revertidas (rollback) em caso de falha.",
        "C) Que o banco de dados roda em uma única thread de processador.",
        "D) Que os registros nunca podem ser apagados."
    ],
    "B",
    "Evita que o banco de dados fique em estados intermediários inconsistentes (por exemplo, debitar de uma conta bancária sem creditar na outra).",
    "Base da confiabilidade transacional."
);

addQuestion(
    "Banco de Dados", "Fácil",
    "Qual comando SQL é utilizado para inserir novos registros em uma tabela?",
    "Comando INSERT",
    [
        "A) ADD INTO",
        "B) INSERT INTO",
        "C) CREATE RECORD",
        "D) UPDATE TABLE"
    ],
    "B",
    "O comando `INSERT INTO nome_tabela (colunas) VALUES (valores);` é o padrão fundamental de DML para popular bases relacionais.",
    "Pode inserir uma única linha ou múltiplas linhas em uma única execução."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que é o Teorema PACELC para sistemas distribuídos?",
    "Teorema PACELC",
    [
        "A) Uma extensão do Teorema CAP que estipula que, se houver uma Partição (P), um sistema deve escolher entre Disponibilidade (A) ou Consistência (C); caso contrário (E), quando o sistema estiver rodando normalmente sem partições, ele deve escolher entre Latência (L) ou Consistência (C).",
        "B) Um protocolo de segurança para redes sem fio.",
        "C) Um método para calcular o desempenho de servidores NoSQL.",
        "D) Uma regra de normalização de bancos NoSQL."
    ],
    "A",
    "O CAP cobre apenas o comportamento durante falhas de rede (partições); o PACELC complementa a análise explicando o compromisso de design (Trade-off) entre Latência e Consistência mesmo quando a rede está funcionando perfeitamente.",
    "Muitos sistemas NoSQL escolhem AP/EL (Disponibilidade em partição, Latência menor em operação normal)."
);

/* =====================================================
   BLOCO 8 (COMPLETO - 40 QUESTÕES): DESENVOLVIMENTO WEB (HTML, CSS E JAVASCRIPT)
===================================================== */

// --- 1 a 15: HTML e Fundamentos Web ---

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual tag HTML é utilizada para criar um hiperlink para outra página ou site?",
    "<a href=\"https://www.exemplo.com\">Link</a>",
    [
        "A) <link href=\"...\">",
        "B) <a href=\"...\">Link</a>",
        "C) <hyperlink>...</hyperlink>",
        "D) <url>...</url>"
    ],
    "B",
    "A tag <a> (anchor) combinada com o atributo href define hiperlinks na web.",
    "A tag <link> é usada tipicamente para carregar folhas de estilo no HTML."
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual tag HTML é semanticamente a mais adequada para representar o cabeçalho principal de uma página ou seção?",
    "<header>",
    [
        "A) <head>",
        "B) <top>",
        "C) <header>",
        "D) <h1>"
    ],
    "C",
    "A tag <header> representa conteúdo introdutório ou um grupo de elementos de navegação.",
    "A tag <head> fica oculta e guarda metadados da página, enquanto <h1> define um título de nível 1."
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual tag HTML é utilizada para criar uma lista não ordenada (com marcadores em bolinhas)?",
    "<ul>",
    [
        "A) <ol>",
        "B) <list>",
        "C) <ul>",
        "D) <li>"
    ],
    "C",
    "A tag <ul> (unordered list) agrupa itens de lista que utilizam a tag <li>.",
    "A tag <ol> cria listas ordenadas (numeradas)."
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual tag HTML é utilizada para inserir um arquivo JavaScript externo em um documento?",
    "<script src=\"script.js\"></script>",
    [
        "A) <javascript src=\"script.js\">",
        "B) <script href=\"script.js\">",
        "C) <script src=\"script.js\"></script>",
        "D) <js file=\"script.js\">"
    ],
    "C",
    "A tag <script> com o atributo src vincula scripts externos à página.",
    "Geralmente colocada no final do corpo (body) ou no head com defer."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "Qual é a finalidade do atributo async ou defer em tags <script> no HTML?",
    "Controlar o carregamento e execução assíncrona de scripts externos",
    [
        "A) Comprimir o tamanho do arquivo JavaScript para baixar mais rápido",
        "B) Permitir o carregamento não bloqueante do script em paralelo com a análise do HTML",
        "C) Criptografar o código JavaScript contra inspeção",
        "D) Forçar a execução imediata travando a renderização"
    ],
    "B",
    "Scripts sem async/defer pausam o parsing do HTML até que o script seja baixado e executado. Com defer, o script executa após o documento estar pronto.",
    "Melhora consideravelmente a performance de carregamento da página."
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual elemento HTML é utilizado para agrupar conteúdos de forma genérica em nível de bloco (block-level), muito usado para estilização com CSS?",
    "<div>",
    [
        "A) <span>",
        "B) <section>",
        "C) <div>",
        "D) <block>"
    ],
    "C",
    "A tag <div> não possui significado semântico específico por si só, servindo como container em bloco genérico.",
    "Para elementos em linha (inline), utiliza-se frequentemente a tag <span>."
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual atributo HTML é obrigatório na tag <img> para garantir acessibilidade a leitores de tela e descrever a imagem caso ela não carregue?",
    "alt",
    [
        "A) title",
        "B) alt",
        "C) description",
        "D) src-desc"
    ],
    "B",
    "O atributo alt fornece um texto alternativo essencial para a acessibilidade web (WCAG).",
    "O atributo src define o caminho do arquivo de imagem."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "O que são elementos HTML Semânticos e qual a sua principal vantagem?",
    "Elementos que dão significado claro ao seu conteúdo para navegadores e desenvolvedores",
    [
        "A) Elementos que rodam códigos executáveis diretamente no navegador",
        "B) Tags que transmitem claramente o seu significado estrutural tanto para o navegador quanto para leitores de tela e mecanismos de busca (SEO)",
        "C) Tags exclusivas para estilização de fontes e cores sem uso de CSS",
        "D) Atalhos de teclado para navegação rápida"
    ],
    "B",
    "Exemplos de tags semânticas incluem <article>, <section>, <nav> e <footer>, substituindo o uso excessivo de divs genéricas.",
    "Melhoram significativamente a acessibilidade e o SEO das páginas."
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual tag HTML é utilizada para criar um campo de entrada de dados interativo (como texto, senha ou checkbox) em um formulário?",
    "<input>",
    [
        "A) <form-field>",
        "B) <input>",
        "C) <text-box>",
        "D) <field>"
    ],
    "B",
    "A tag <input> altera seu comportamento com base no atributo type (ex: type='text', type='password', type='checkbox').",
    "Deve ser associada a um elemento <label> para boa acessibilidade."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "Qual é a diferença entre as tags <section>, <article> e <div> em HTML5?",
    "Contexto e semântica de agrupamento",
    [
        "A) Não há nenhuma diferença; todas geram exatamente o mesmo comportamento visual",
        "B) <article> representa um conteúdo independente e distribuível; <section> agrupa conteúdos temáticos relacionados; <div> é um container puramente genérico sem significado semântico",
        "C) <section> é usada apenas para rodapés e <article> para cabeçalhos",
        "D) <div> é moderna e substitui completamente <section> e <article>"
    ],
    "B",
    "A escolha correta da tag semântica enriquece a árvore do documento para leitores de tela e indexadores de busca.",
    "Divs continuam úteis para fins de estilização pura quando nenhum significado se aplica."
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual tag HTML é utilizada para estruturar a tabela propriamente dita, contendo linhas e células de dados?",
    "<table>",
    [
        "A) <grid>",
        "B) <table>",
        "C) <tab>",
        "D) <data-grid>"
    ],
    "B",
    "A tag <table> é combinada com <tr> (linha), <th> (cabeçalho da célula) e <td> (célula de dado).",
    "Não deve ser utilizada para estruturar o layout geral da página."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "O que significa a especificação HTML5 em termos de multimídia?",
    "Suporte nativo a elementos de áudio e vídeo sem plugins externos",
    [
        "A) A exigência de instalar o Adobe Flash Player para rodar animações",
        "B) A introdução de tags nativas como <audio> e <video>, dispensando plugins proprietários de terceiros",
        "C) A conversão automática de imagens JPG para arquivos vetoriais",
        "D) A remoção completa de imagens do ecossistema web"
    ],
    "B",
    "Com o HTML5, tags como <video> e <audio> tornaram a reprodução de mídia nativa e universal nos navegadores.",
    "Reduziu drasticamente falhas de segurança e dependência de softwares legados."
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual tag HTML é utilizada para definir metadados sobre o documento, como codificação de caracteres, título da aba e links de estilo?",
    "<head>",
    [
        "A) <meta-data>",
        "B) <head>",
        "C) <header>",
        "D) <body>"
    ],
    "B",
    "O elemento <head> abriga informações que não são exibidas diretamente na página visível, como <title>, <meta> e <link>.",
    "Diferente do <body>, que engloba todo o conteúdo visualizado pelo usuário."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "Qual é a função da tag <meta charset=\"UTF-8\"> no cabeçalho de uma página HTML?",
    "Definir a codificação de caracteres para suportar acentos e símbolos universais",
    [
        "A) Definir a velocidade de carregamento do servidor",
        "B) Especificar o conjunto de caracteres UTF-8, garantindo a correta exibição de acentos, cedilhas e caracteres internacionais",
        "C) Criptografar o código fonte contra cópias piratas",
        "D) Definir a linguagem padrão da interface do navegador"
    ],
    "B",
    "O UTF-8 é o padrão mundial de codificação de caracteres na web.",
    "Sua ausência pode causar problemas de exibição de caracteres especiais (gerando símbolos corrompidos)."
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual tag HTML é utilizada para criar uma caixa de texto de múltiplas linhas (área de texto) em um formulário?",
    "<textarea>",
    [
        "A) <input type=\"multiline\">",
        "B) <textarea>",
        "C) <text-input lines=\"multiple\">",
        "D) <box-text>"
    ],
    "B",
    "A tag <textarea> permite que os usuários insiram blocos extensos de texto livre.",
    "Diferente do <input type='text'>, que é limitado a uma única linha."
);


// --- 16 a 27: CSS e Estilização Avançada ---

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual propriedade CSS é utilizada para alterar a cor de fundo de um elemento?",
    "background-color: #ffffff;",
    [
        "A) color",
        "B) background-color",
        "C) fill-color",
        "D) bg-style"
    ],
    "B",
    "A propriedade background-color define a cor de fundo, enquanto color altera a cor do texto.",
    "Essencial para estilização visual básica."
);

addQuestion(
    "Desenvolvimento Web", "Difícil",
    "Qual é a diferença principal entre position: absolute e position: fixed em CSS?",
    "Contexto de referência e rolagem da página",
    [
        "A) Absolute posiciona em relação à tela, enquanto fixed posiciona em relação ao corpo",
        "B) Absolute posiciona em relação ao ancestral posicionado mais próximo, enquanto fixed posiciona em relação à janela de visualização (viewport) e não se move com o scroll",
        "C) Fixed funciona apenas em dispositivos móveis",
        "D) Não há diferença prática de comportamento"
    ],
    "B",
    "Elementos com position: fixed ficam fixos na tela mesmo quando o usuário rola a página (scroll), ao contrário de absolute.",
    "Fundamentais para criar menus fixos e layouts complexos."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "O que caracteriza o modelo de layout CSS Flexbox?",
    "Alinhamento unidimensional de itens",
    [
        "A) Um sistema de grade bidimensional focado em colunas e linhas complexas",
        "B) Um modelo unidimensional projetado para distribuir espaço e alinhar itens em linha ou coluna",
        "C) Um método obsoleto substituído por tabelas HTML",
        "D) Uma ferramenta exclusiva para animações 3D"
    ],
    "B",
    "O Flexbox é ideal para layouts onde os itens precisam se ajustar dinamicamente em uma única direção (linha ou coluna).",
    "Para layouts complexos em grade de duas dimensões, usa-se CSS Grid."
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual propriedade CSS define a opacidade (transparência) de um elemento?",
    "opacity: 0.5;",
    [
        "A) transparency",
        "B) opacity",
        "C) alpha",
        "D) visibility"
    ],
    "B",
    "A propriedade opacity aceita valores de 0 (totalmente transparente) a 1 (totalmente opaco).",
    "Diferente de visibility: hidden, a opacidade ainda mantém a interatividade do elemento se não for ajustada."
);

addQuestion(
    "Desenvolvimento Web", "Difícil",
    "No contexto de CSS Grid, o que significa a unidade fracionária fr?",
    "Fração do espaço disponível no container da grade",
    [
        "A) Uma unidade fixa baseada em fontes tipográficas",
        "B) Uma fração do espaço livre disponível dentro do container grid",
        "C) Pixels flutuantes responsivos",
        "D) Porcentagem baseada na altura da tela"
    ],
    "B",
    "A unidade fr facilita criar layouts flexíveis onde o espaço é distribuído proporcionalmente (ex: 1fr 2fr).",
    "Elimina o cálculo manual complexo de porcentagens com margens."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "O que é o conceito de CSS Specificity (Especificidade)?",
    "Regra de peso que define qual estilo CSS será aplicado quando há conflitos",
    [
        "A) A velocidade com que o navegador interpreta o arquivo de estilos",
        "B) O peso calculado de seletores CSS para determinar qual regra prevalece em caso de conflito de regras sobre o mesmo elemento",
        "C) A quantidade de linhas de código em um arquivo CSS",
        "D) O suporte a navegadores antigos"
    ],
    "B",
    "IDs têm mais peso que classes, que por sua vez têm mais peso que seletores de tag.",
    "O uso excessivo de !important sobrescreve a especificidade normal."
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual propriedade CSS define o espaçamento interno entre o conteúdo de um elemento e suas bordas?",
    "padding: 15px;",
    [
        "A) margin",
        "B) spacing",
        "C) padding",
        "D) border-gap"
    ],
    "C",
    "O padding define o espaço interno. O margin define o espaço externo ao redor da borda.",
    "Componentes fundamentais do CSS Box Model."
);

addQuestion(
    "Desenvolvimento Web", "Difícil",
    "O que define o comportamento de seletores CSS combinadores, como o seletor de irmão adjacente (+)?",
    "Seleciona o elemento imediatamente após o especificado",
    [
        "A) Seleciona todos os descendentes diretos ou indiretos",
        "B) Seleciona o elemento que vem imediatamente após o primeiro elemento especificado, desde que compartilhem o mesmo pai",
        "C) Seleciona apenas elementos que possuem classes idênticas",
        "D) Seleciona elementos pais recursivamente"
    ],
    "B",
    "O combinador + atinge o próximo irmão imediato. O combinador ~ atinge todos os irmãos seguintes.",
    "Útil para estilizações condicionais baseadas na ordem estrutural do HTML."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "O que são Media Queries em CSS e qual é o seu principal caso de uso?",
    "Regras condicionais para aplicar estilos baseados nas características do dispositivo (como largura da tela)",
    [
        "A) Funções para carregar vídeos e mídias em alta definição",
        "B) Ferramentas de estilização condicional que aplicam regras CSS específicas dependendo do tamanho da tela, resolução ou orientação do dispositivo (essencial para Design Responsivo)",
        "C) Consultas de banco de dados feitas diretamente no arquivo de estilos",
        "D) Comandos de animação vetorial"
    ],
    "B",
    "As media queries formam a base do design responsivo moderno, permitindo adaptar interfaces de desktops para celulares e tablets.",
    "Exemplo: @media (max-width: 768px) { ... }"
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual propriedade CSS é utilizada para alterar a cor do texto de um elemento?",
    "color: #ff0000;",
    [
        "A) text-color",
        "B) font-color",
        "C) color",
        "D) text-style"
    ],
    "C",
    "A propriedade color define a cor do texto, diferentemente de background-color.",
    "Pode receber valores em HEX, RGB, HSL ou nomes de cores diretos."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "Qual é a diferença entre unidades de medida relativas (como em, rem, %) e absolutas (como px) em CSS?",
    "Escalabilidade em relação a contextos ou dispositivos",
    [
        "A) Unidades relativas só funcionam em navegadores mobile",
        "B) Unidades absolutas (px) possuem tamanho fixo invariável; unidades relativas (rem, em, %) escalam dinamicamente com base no elemento pai, raiz ou viewport, facilitando a acessibilidade e responsividade",
        "C) Unidades relativas não aceitam casas decimais",
        "D) Não há diferença prática na renderização moderna"
    ],
    "B",
    "O uso de rem (relativo à fonte raiz <html>) é altamente recomendado para tipografia responsiva e acessibilidade (zoom de tela).",
    "Pixels (px) continuam úteis para bordas finas e detalhes de layout estritos."
);

addQuestion(
    "Desenvolvimento Web", "Difícil",
    "O que faz a propriedade CSS `box-sizing: border-box;`?",
    "Inclui padding e border na largura e altura totais declaradas do elemento",
    [
        "A) Adiciona sombras tridimensionais automáticas nas bordas do elemento",
        "B) Faz com que o padding e a borda sejam incluídos dentro das dimensões de largura (width) e altura (height) especificadas, evitando que o elemento expanda além do esperado",
        "C) Converte caixas retangulares em círculos perfeitos",
        "D) Remove completamente as bordas de tabelas"
    ],
    "B",
    "Por padrão (content-box), o padding e a border somam-se à largura declarada, quebrando layouts frequentemente. Border-box resolve esse problema intuitivamente.",
    "É amplamente aplicada como reset universal em folhas de estilo modernas (* { box-sizing: border-box; })."
);


// --- 28 a 40: JavaScript, DOM e Assincronicidade ---

addQuestion(
    "Desenvolvimento Web", "Média",
    "O que significa a sigla DOM no contexto de desenvolvimento web com JavaScript?",
    "Document Object Model",
    [
        "A) Data Object Management",
        "B) Document Object Model",
        "C) Digital Oriented Markup",
        "D) Dynamic Opacity Module"
    ],
    "B",
    "O DOM é a representação em árvore estruturada do documento HTML que permite ao JavaScript interagir e modificar elementos da página.",
    "Permite manipulação dinâmica de conteúdo, classes e estilos."
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual método JavaScript é utilizado para selecionar um único elemento do DOM utilizando um seletor CSS (como uma classe ou ID)?",
    "document.querySelector('#meuId');",
    [
        "A) document.getElementById() apenas",
        "B) document.querySelector()",
        "C) document.selectElement()",
        "D) document.findElement()"
    ],
    "B",
    "O querySelector retorna o primeiro elemento que corresponde ao seletor CSS especificado.",
    "Para retornar todos os elementos correspondentes, usa-se querySelectorAll()."
);

addQuestion(
    "Desenvolvimento Web", "Difícil",
    "O que é o mecanismo de Event Bubbling (Borbulhamento de Eventos) em JavaScript?",
    "Propagação de eventos do elemento mais interno para os mais externos",
    [
        "A) A criação de eventos duplicados por falha de sintaxe",
        "B) O fluxo onde um evento disparado em um elemento filho é propagado para cima através de seus ancestrais na árvore DOM",
        "C) O cancelamento automático de requisições AJAX simultâneas",
        "D) A execução assíncrona de funções em background"
    ],
    "B",
    "Quando um evento ocorre em um elemento, ele primeiro roda os ouvintes do próprio elemento e depois sobe propagando-se para os elementos pai.",
    "Pode ser interrompido usando o método event.stopPropagation()."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "O que são Promises em JavaScript?",
    "Objetos que representam a conclusão ou falha de uma operação assíncrona",
    [
        "A) Variáveis constantes que nunca mudam de valor",
        "B) Objetos que representam o resultado eventual (sucesso ou erro) de uma operação assíncrona",
        "C) Funções matemáticas de alta precisão",
        "D) Atalhos para criar loops for otimizados"
    ],
    "B",
    "Promises possuem estados: pending (pendente), fulfilled (realizada) e rejected (rejeitada).",
    "Facilitam o tratamento de código assíncrono em comparação a callbacks aninhados."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "O que o operador await faz dentro de uma função assíncrona (async function) em JavaScript?",
    "Pausa a execução da função até que a Promise seja resolvida",
    [
        "A) Interrompe a execução de todo o navegador",
        "B) Faz a função aguardar de forma assíncrona a resolução de uma Promise antes de prosseguir com a próxima linha",
        "C) Converte tipos primitivos em objetos",
        "D) Dispara um erro síncrono proposital"
    ],
    "B",
    "O await torna o código assíncrono muito mais legível, parecendo um código síncrono linear.",
    "Só pode ser utilizado dentro de funções declaradas com a palavra-chave async."
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual comando JavaScript converte um objeto ou array JavaScript em uma string JSON?",
    "JSON.stringify(objeto);",
    [
        "A) JSON.parse()",
        "B) JSON.stringify()",
        "C) JSON.toText()",
        "D) JSON.convert()"
    ],
    "B",
    "JSON.stringify serializa dados para o formato de texto JSON, enquanto JSON.parse faz o inverso (texto para objeto).",
    "Fundamental para enviar dados via fetch para APIs."
);

addQuestion(
    "Desenvolvimento Web", "Difícil",
    "O que é o CORS (Cross-Origin Resource Sharing) em aplicações web?",
    "Mecanismo de segurança baseado em cabeçalhos HTTP",
    [
        "A) Um protocolo de criptografia de ponta a ponta para senhas",
        "B) Um mecanismo de segurança implementado por navegadores que restringe requisições HTTP feitas a partir de um domínio diferente daquele que serviu o recurso original",
        "C) Uma biblioteca JavaScript para requisições assíncronas",
        "D) Um padrão de rotas para Single Page Applications"
    ],
    "B",
    "O CORS protege contra requisições maliciosas entre origens distintas, exigindo cabeçalhos específicos no servidor para liberar o acesso.",
    "Erros de CORS ocorrem frequentemente ao testar APIs locais sem configuração de permissão."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "Qual é a principal utilidade do localStorage em navegadores web?",
    "Armazenamento persistente de dados chave-valor no navegador",
    [
        "A) Enviar dados criptografados diretamente para um banco de dados em nuvem",
        "B) Armazenar dados no navegador do usuário de forma persistente, mesmo após fechar a aba ou o navegador",
        "C) Guardar arquivos temporários que expiram ao fechar a sessão",
        "D) Gerenciar o histórico de navegação avançado"
    ],
    "B",
    "Diferente do sessionStorage (que apaga ao fechar a aba), o localStorage armazena dados sem data de expiração explícita.",
    "Armazena apenas strings. Objetos precisam ser convertidos com JSON.stringify."
);

addQuestion(
    "Desenvolvimento Web", "Difícil",
    "O que é o Virtual DOM utilizado em bibliotecas como o React?",
    "Cópia leve do DOM real mantida na memória",
    [
        "A) Um navegador web rodando em servidores na nuvem",
        "B) Uma representação leve em memória do DOM real, permitindo calcular o diff e atualizar apenas os nós alterados de forma otimizada",
        "C) Um emulador de dispositivos móveis para testes",
        "D) Uma extensão de segurança para JavaScript"
    ],
    "B",
    "O Virtual DOM minimiza manipulações diretas e lentas do DOM real, melhorando drasticamente a performance de renderização.",
    "O algoritmo de reconciliação compara o estado anterior com o atual."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "O que significa dizer que o JavaScript é uma linguagem de programação single-threaded?",
    "Executa apenas uma instrução por vez na thread principal",
    [
        "A) Não suporta nenhum tipo de operação assíncrona",
        "B) Possui apenas uma linha de execução principal na thread, processando tarefas sequencialmente",
        "C) Roda estritamente em processadores de um único núcleo",
        "D) É uma linguagem exclusiva para servidores monousuário"
    ],
    "B",
    "Embora seja single-threaded, o JavaScript gerencia operações assíncronas eficientemente através do Event Loop e callbacks.",
    "Evita problemas complexos de concorrência comum em multithreading tradicional."
);

addQuestion(
    "Desenvolvimento Web", "Difícil",
    "O que são Web Workers em JavaScript?",
    "Scripts executados em background em threads separadas",
    [
        "A) Robôs de indexação de motores de busca",
        "B) Um mecanismo que permite executar scripts JavaScript em threads de segundo plano separadas da thread principal da interface",
        "C) Ferramentas de automação de testes end-to-end",
        "D) Servidores web embutidos no navegador"
    ],
    "B",
    "Web Workers evitam que tarefas pesadas de processamento travem a interface gráfica do usuário na thread principal.",
    "Eles não têm acesso direto ao DOM da página."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "Qual é a utilidade do método fetch() em JavaScript moderno?",
    "Realizar requisições HTTP assíncronas para servidores (APIs)",
    [
        "A) Buscar elementos no DOM usando tags HTML",
        "B) Realizar requisições de rede assíncronas (como GET e POST) para buscar recursos ou APIs",
        "C) Baixar arquivos compactados em formato ZIP localmente",
        "D) Recarregar a página web automaticamente"
    ],
    "B",
    "O fetch() substituiu o antigo XMLHttpRequest, retornando Promises de forma nativa.",
    "Facilita a comunicação com serviços web e APIs RESTful."
);

addQuestion(
    "Desenvolvimento Web", "Difícil",
    "O que é um Closure (Fechamento) em JavaScript?",
    "Uma função que se lembra do seu escopo léxico mesmo quando executada fora dele",
    [
        "A) Um comando para encerrar conexões abertas de rede",
        "B) A capacidade de uma função interna acessar e lembrar das variáveis de sua função externa (escopo léxico), mesmo após a função externa já ter retornado",
        "C) Uma estrutura de dados para criptografar senhas locais",
        "D) Um erro de sintaxe gerado por variáveis não declaradas"
    ],
    "B",
    "Closures são fundamentais em JavaScript para criar variáveis privadas e emular encapsulamento de dados.",
    "Utilizados frequentemente em geradores de funções e callbacks avançados."
);

/* =====================================================
   BLOCO 09: SPRING FRAMEWORK (SPRING BOOT, DATA, SECURITY, CLOUD E ARQUITETURA)
===================================================== */

addQuestion(
    "Spring Framework",
    "Média",
    "O que é o conceito de Inversão de Controle (IoC) e Injeção de Dependência (DI) no Spring Framework?",
    "IoC e Injeção de Dependência",
    [
        "A) O Spring obriga o desenvolvedor a instanciar manualmente todas as classes com o operador `new` em tempo de execução.",
        "B) O framework (Container IoC) assume a responsabilidade de criar, gerenciar o ciclo de vida e injetar automaticamente os objetos (beans) onde forem necessários, promovendo o desacoplamento.",
        "C) É um mecanismo de segurança para criptografar senhas de usuários no banco de dados.",
        "D) Um padrão de roteamento de requisições HTTP para microsserviços."
    ],
    "B",
    "Em vez da classe controlar a criação de suas próprias dependências, o container do Spring faz essa injeção (geralmente via `@Autowired` ou construtor), facilitando testes e manutenção.",
    "A injeção via construtor é atualmente a prática recomendada em detrimento da injeção direta em campos (`@Autowired` em atributos)."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Qual é o principal objetivo do Spring Boot na simplificação do desenvolvimento de aplicações Java?",
    "Spring Boot",
    [
        "A) Substituir a linguagem Java por JavaScript no backend.",
        "B) Eliminar a necessidade de configurações XML complexas e Boilerplate, oferecendo auto-configuração (autoconfigure), dependências empacotadas (starters) e um servidor embutido (como Tomcat).",
        "C) Executar o código exclusivamente no navegador web do cliente.",
        "D) Fornecer um banco de dados relacional em memória com persistência infinita."
    ],
    "B",
    "O Spring Boot automatiza a configuração inicial de bibliotecas com base no classpath e nas dependências declaradas (os famosos `spring-boot-starter-*`), permitindo subir uma aplicação pronta para produção em minutos.",
    "Permite focar nas regras de negócio em vez de gastar horas configurando servidores de aplicação."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Como o Spring Data JPA simplifica a camada de persistência de dados em aplicações Java?",
    "Spring Data JPA",
    [
        "A) Exigindo que o desenvolvedor escreva manualmente todas as consultas SQL brutas para operações básicas de CRUD.",
        "B) Permitindo a criação automática de repositórios através de interfaces que estendem `JpaRepository`, gerando consultas dinâmicas baseadas no nome dos métodos e implementando o mapeamento objeto-relacional (ORM).",
        "C) Substituindo o banco de dados por arquivos de texto plano em formato CSV.",
        "D) Executando migrações de esquema via linha de comando do terminal."
    ],
    "B",
    "Com o Spring Data JPA, você cria uma interface como `interface UsuarioRepository extends JpaRepository<Usuario, Long>` e o framework implementa automaticamente operações como `save`, `findById`, `delete`, além de parser de nomes como `findByEmail`.",
    "Reduz drasticamente o código repetitivo (boilerplate) de acesso a dados."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Qual é a função das anotações `@Controller` e `@RestController` no Spring MVC / Spring Boot?",
    "Spring MVC e REST",
    [
        "A) `@Controller` lida com requisições HTTP retornando visualizações (como páginas HTML via Thymeleaf), enquanto `@RestController` é uma combinação de `@Controller` com `@ResponseBody`, serializando os retornos automaticamente para JSON ou XML.",
        "B) `@RestController` é usado apenas para conectar o sistema ao banco de dados Oracle.",
        "C) Não há diferença técnica; ambas executam exatamente o mesmo comportamento de serialização.",
        "D) `@Controller` gerencia transações de segurança e `@RestController` gerencia rotas de arquivos estáticos."
    ],
    "A",
    "A anotação `@RestController` é o padrão para desenvolvimento de APIs REST modernas, pois garante que o objeto retornado por um método seja convertido diretamente em JSON para consumo pelo frontend.",
    "Facilita a construção de arquiteturas desacopladas."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que o Spring Security gerencia em uma aplicação web corporativa?",
    "Spring Security",
    [
        "A) O balanceamento de carga entre servidores na nuvem AWS.",
        "B) O framework abrangente e altamente customizável de autenticação (quem você é) e controle de autorização (o que você pode fazer), além de proteção contra vulnerabilidades comuns como CSRF e XSS.",
        "C) A compactação de arquivos estáticos de imagem e JavaScript.",
        "D) A execução de testes unitários automatizados."
    ],
    "B",
    "O Spring Security intercepta requisições HTTP através de uma cadeia de filtros (Security Filter Chain), garantindo que apenas usuários autenticados e com as devidas roles/permissões acessem endpoints protegidos.",
    "É amplamente integrado com padrões modernos como OAuth2, JWT e autenticação baseada em sessão."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Para que serve a anotação `@Transactional` no Spring?",
    "Gerenciamento de Transações",
    [
        "A) Para registrar logs de erro no arquivo console da aplicação.",
        "B) Para gerenciar automaticamente o limite de conexões simultâneas com o servidor.",
        "C) Para declarar que um método ou classe deve executar dentro de uma transação de banco de dados, garantindo atomicidade (ACID) — ou seja, se ocorrer uma exceção não tratada, todas as operações são revertidas (rollback).",
        "D) Para criptografar dados sensíveis trafegados na rede."
    ],
    "C",
    "O Spring gerencia transações de forma declarativa através de proxies. Se um método anotado com `@Transactional` lança uma RuntimeException, o framework executa o rollback automático no banco.",
    "Fundamental para manter a consistência de dados em operações complexas que envolvem múltiplos passos."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que são e para que servem os 'Spring Boot Actuator' em uma aplicação de produção?",
    "Spring Boot Actuator",
    [
        "A) Ferramentas para gerar diagramas UML da arquitetura da aplicação.",
        "B) Endpoints prontos de monitoramento e gerenciamento que expõem métricas de saúde da aplicação (`/actuator/health`), uso de memória, threads, ambiente e informações de build.",
        "C) Um compilador de código Java para binários nativos.",
        "D) Um framework de testes de aceitação em interface gráfica."
    ],
    "B",
    "O Actuator é essencial em ambientes de microsserviços e produção, permitindo que ferramentas de observabilidade (como Prometheus, Grafana ou Kubernetes) monitorem a saúde do serviço em tempo real.",
    "Endpoints sensíveis devem ser devidamente protegidos via Spring Security."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Qual é a utilidade do ecossistema 'Spring Cloud' no desenvolvimento de software?",
    "Spring Cloud",
    [
        "A) Fornecer ferramentas e padrões para o desenvolvimento e gerenciamento de arquiteturas baseadas em microsserviços (como Service Discovery, API Gateway, Config Server e Circuit Breaker).",
        "B) Hospedar arquivos estáticos de imagens na nuvem da Google.",
        "C) Substituir o framework Spring Boot por servidores web tradicionais legados.",
        "D) Otimizar consultas SQL em bancos de dados relacionais locais."
    ],
    "A",
    "O Spring Cloud resolve os problemas complexos inerentes a sistemas distribuídos, como descoberta dinâmica de serviços (Eureka), centralização de configurações e tolerância a faltas.",
    "Facilita a transição de monólitos para ambientes resilientes baseados em nuvem."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Como o Spring lida com o tratamento global de exceções em APIs REST?",
    "Tratamento de Exceções",
    [
        "A) Deixando a aplicação quebrar e exibir stack traces em HTML para o usuário final.",
        "B) Utilizando classes anotadas com `@ControllerAdvice` (ou `@RestControllerAdvice`) combinadas com `@ExceptionHandler` para capturar exceções de forma centralizada e retornar respostas HTTP padronizadas.",
        "C) Forçando o reinício automático do servidor web a cada erro encontrado.",
        "D) Convertendo erros de banco de dados diretamente em arquivos PDF."
    ],
    "B",
    "O `@ControllerAdvice` atua como um interceptor global de erros, permitindo mapear exceções de negócio (ex: `RecursoNaoEncontradoException`) para códigos de status HTTP apropriados (`404 Not Found`) de forma limpa.",
    "Evita duplicação de blocos `try-catch` espalhados por todos os controllers."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que o Spring Profiles (`application-{profile}.properties` ou `.yml`) permite configurar em uma aplicação?",
    "Spring Profiles",
    [
        "A) Os perfis de acesso e permissões dos usuários administradores do sistema.",
        "B) Conjuntos de configurações customizadas e isoladas para diferentes ambientes de execução (como `dev`, `test`, `prod`), permitindo alternar facilmente conexões de banco de dados e portas sem alterar o código fonte.",
        "C) A paleta de cores e temas visuais do framework.",
        "D) As credenciais de acesso ao repositório GitHub."
    ],
    "B",
    "Os profiles ajudam a separar parâmetros que mudam conforme o ambiente onde a aplicação está rodando (ex: banco H2 em memória para desenvolvimento e PostgreSQL corporativo para produção).",
    "Pode ser ativado via propriedade `spring.profiles.active=prod`."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Qual é a função da anotação `@Component` e suas especializações (`@Service`, `@Repository`, `@Controller`) no Spring?",
    "Estereótipos do Spring",
    [
        "A) Indicar classes que devem ser ignoradas pelo container IoC.",
        "B) Marcar classes para que o Spring faça a varredura automática (Component Scanning) e as registre como beans gerenciados no container.",
        "C) Definir rotas de conexão exclusiva com o protocolo FTP.",
        "D) Configurar regras de formatação de moeda para internacionalização."
    ],
    "B",
    "O Spring detecta automaticamente classes anotadas com `@Component` e seus derivados semânticos, instanciando-as e tornando-as disponíveis para injeção de dependência.",
    "`@Repository` também adiciona tradução automática de exceções de banco de dados para DataAccessExceptions do Spring."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que significa o escopo de um Bean no Spring (`singleton`, `prototype`, `request`, `session`)?",
    "Escopo de Beans",
    [
        "A) A quantidade de linhas de código que a classe possui.",
        "B) O tempo de vida e a forma como o container do Spring gerencia e compartilha instâncias daquele bean (por exemplo, `singleton` cria apenas uma instância para toda a aplicação; `prototype` cria uma nova instância a cada injeção ou solicitação).",
        "C) O nível de criptografia da classe contra engenharia reversa.",
        "D) A prioridade com que o compilador executa a classe."
    ],
    "B",
    "O escopo padrão no Spring é `singleton`. Beans com estado mutável compartilhados em threads concorrentes sob escopo singleton podem gerar problemas de concorrência (thread-safety).",
    "Escopos web como `request` e `session` só estão disponíveis em aplicações web integradas."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Para que servem as anotações `@PostConstruct` e `@PreDestroy` em um bean gerenciado pelo Spring?",
    "Ciclo de Vida do Bean",
    [
        "A) Para registrar logs de erro críticos no console do sistema.",
        "B) Para executar métodos específicos logo após a construção e injeção de dependências do bean (`@PostConstruct`) e antes que o bean seja destruído pelo container (`@PreDestroy`).",
        "C) Para testar a velocidade de resposta do banco de dados.",
        "D) Para abrir e fechar conexões de rede via Bluetooth."
    ],
    "B",
    "Esses ganchos (hooks) permitem inicializar recursos (como carregar caches ou abrir pools dedicados) e realizar limpezas adequadas antes do encerramento da aplicação.",
    "Faziam parte do pacote padrão `javax.annotation` (agora `jakarta.annotation`)."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que é o conceito de Spring Boot Starters e qual a sua principal vantagem?",
    "Spring Boot Starters",
    [
        "A) Atalhos de teclado para compilar o código mais rápido na IDE.",
        "B) Descritores de dependências prontos que reúnem todas as bibliotecas necessárias para um tipo específico de projeto (ex: `spring-boot-starter-web`, `spring-boot-starter-data-jpa`), eliminando o gerenciamento manual de versões.",
        "C) Ferramentas para iniciar o sistema operacional a partir do disco rígido externo.",
        "D) Plugins para converter código Java para Python."
    ],
    "B",
    "Os starters garantem compatibilidade entre versões de bibliotecas correlatas (como Hibernate, Jackson e Tomcat), poupando desenvolvedores de conflitos de dependências no Maven ou Gradle.",
    "Basta adicionar o starter correto para habilitar uma pilha tecnológica inteira."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Qual é o papel da anotação `@SpringBootApplication` nas classes principais do Spring Boot?",
    "Anotação Principal",
    [
        "A) É uma anotação meta que combina três outras anotações cruciais: `@SpringBootConfiguration`, `@EnableAutoConfiguration` e `@ComponentScan`.",
        "B) Força a aplicação a rodar exclusivamente em modo de homologação.",
        "C) Desativa todos os filtros de segurança do Spring Security.",
        "D) Cria tabelas físicas no banco de dados automaticamente semânticas."
    ],
    "A",
    "Essa única anotação inicializa o contexto da aplicação, ativa a varredura de componentes a partir do pacote atual e aciona a auto-configuração inteligente do Spring Boot.",
    "Geralmente colocada na classe que contém o método `main`."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Como o Spring Boot determina quais configurações automáticas aplicar ao iniciar (Auto-Configuration)?",
    "Auto-Configuration",
    [
        "A) Lendo arquivos de texto gerados aleatoriamente pelo sistema operacional.",
        "B) Analisando o classpath da aplicação (quais dependências foram adicionadas no projeto) e as propriedades definidas no `application.properties` ou `application.yml` através de condicionais como `@ConditionalOnClass`.",
        "C) Consultando um servidor de inteligência artificial em nuvem em tempo real.",
        "D) Verificando a quantidade de memória RAM disponível na placa de vídeo."
    ],
    "B",
    "Se o driver do H2 e o Spring Data JPA estiverem no classpath, o Spring Boot auto-configura uma fonte de dados (DataSource) em memória sem que você precise escrever código para isso.",
    "Pode ser desativada pontualmente usando o atributo `exclude` na anotação principal."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Para que serve a anotação `@Configuration` combinada com `@Bean` em classes Java do Spring?",
    "Java-based Configuration",
    [
        "A) Para definir classes de configuração que registram manualmente beans no container IoC quando bibliotecas externas não possuem anotações de estereótipo.",
        "B) Para conectar a aplicação diretamente a impressoras locais via USB.",
        "C) Para criar telas de interface gráfica em desktop.",
        "D) Para compactar arquivos binários em formato ZIP."
    ],
    "A",
    "É a forma padrão para instanciar e configurar beans de terceiros (como um `ObjectMapper` customizado ou um cliente HTTP) cujas classes você não pode alterar para adicionar `@Component`.",
    "Os métodos anotados com `@Bean` são interceptados pelo container para garantir o comportamento Singleton."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que o Spring Expression Language (SpEL) permite fazer em aplicações Spring?",
    "SpEL",
    [
        "A) Compilar código Java diretamente para linguagem de máquina Assembly.",
        "B) Avaliar expressões dinâmicas em tempo de execução para consultar e manipular o grafo de objetos do container, sendo amplamente usado em injeções com `@Value` e regras de segurança.",
        "C) Escrever consultas SQL otimizadas para bancos NoSQL.",
        "D) Traduzir textos da interface para múltiplos idiomas automaticamente."
    ],
    "B",
    "Permite injetar propriedades usando sintaxe como `@Value(\"${app.nome:Padrao}\")` ou realizar operações lógicas complexas diretamente nas anotações.",
    "Oferece forte integração com o ecossistema Spring."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que é o Spring Native e qual problema ele busca resolver?",
    "Spring Native",
    [
        "A) Uma versão do Spring que roda exclusivamente em dispositivos móveis Android antigos.",
        "B) Uma tecnologia que permite compilar aplicações Spring Boot em executáveis nativos usando o GraalVM, reduzindo drasticamente o tempo de inicialização (startup time) e o consumo de memória RAM.",
        "C) Um driver para conectar o Spring diretamente a sistemas operacionais Linux legados.",
        "D) Uma biblioteca para criar jogos em 2D usando Java."
    ],
    "B",
    "A compilação nativa via GraalVM elimina a necessidade de carregar a máquina virtual Java tradicional em tempo de execução, ideal para ambientes serverless e Kubernetes.",
    "Integrado nativamente a partir do Spring Framework 6 / Spring Boot 3."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Como funcionam as propriedades externas (Externalized Configuration) no Spring Boot?",
    "Externalized Configuration",
    [
        "A) Obrigando o desenvolvedor a recompilar o arquivo JAR toda vez que mudar uma URL de conexão.",
        "B) Permitindo separar o código das configurações por meio de arquivos (`application.properties`, `application.yml`), variáveis de ambiente, argumentos de linha de comando (`--server.port=9090`) e JNDI.",
        "C) Armazenando senhas em texto puro diretamente no código fonte do repositório.",
        "D) Sincronizando dados através de disquetes de 3.5 polegadas."
    ],
    "B",
    "O Spring Boot possui uma ordem estrita de precedência para carregar propriedades, permitindo sobrescrever configurações locais facilmente via variáveis de ambiente em produção.",
    "Variáveis de ambiente em formato maiúsculo com sublinhados (ex: `SPRING_DATASOURCE_URL`) são mapeadas automaticamente."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que é o mecanismo de Derived Query Methods (Consultas Derivadas) no Spring Data JPA?",
    "Derived Query Methods",
    [
        "A) Um gerador de relatórios visuais em PDF.",
        "B) A capacidade de criar consultas SQL/JPQL automaticamente com base puramente na assinatura e nomenclatura dos métodos da interface de repositório (ex: `findByNomeAndEmail`).",
        "C) Um otimizador de índices para bancos de dados relacionais.",
        "D) Um sistema de cache em memória para requisições HTTP."
    ],
    "B",
    "O Spring analisa o nome do método (`findBy`, `readBy`, `countBy`, `deleteBy`) combinando com propriedades da entidade para gerar a consulta correspondente sem necessidade de código manual.",
    "Evita escrever consultas JPQL simples repetidamente."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Para que serve a anotação `@Query` no Spring Data JPA?",
    "Anotação @Query",
    [
        "A) Para disparar alertas sonoros quando o banco de dados cair.",
        "B) Para escrever consultas personalizadas utilizando JPQL (Java Persistence Query Language) ou SQL nativo diretamente nos métodos dos repositórios.",
        "C) Para gerar dados fakes de teste automaticamente.",
        "D) Para mapear relacionamentos de chave estrangeira entre tabelas."
    ],
    "B",
    "Quando as consultas derivadas se tornam complexas demais ou exigem junções avançadas (JOINs), a anotação `@Query` permite escrever o comando personalizado. Pode usar `nativeQuery = true` para SQL puro.",
    "Suporta parâmetros nomeados com `@Param`."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que são e para que servem as Paginations e Sortings através das interfaces `Pageable` e `Page` no Spring Data JPA?",
    "Paginação e Ordenação",
    [
        "A) Para redimensionar o tamanho das janelas de código na IDE.",
        "B) Para buscar grandes volumes de dados do banco de dados divididos em páginas controladas e ordenadas, otimizando o uso de memória e a performance da API.",
        "C) Para criar animações de rolagem infinita no frontend.",
        "D) Para limitar a quantidade de linhas em arquivos de log."
    ],
    "B",
    "Passando um objeto `Pageable` (geralmente construído via `PageRequest.of(page, size, sort)`) no método do repositório, o Spring gera automaticamente as cláusulas LIMIT e OFFSET no SQL subjacente.",
    "Retorna um objeto `Page<T>` contendo metadados úteis como total de elementos e total de páginas."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Qual é a diferença entre carregamento EAGER (ocioso/imediato) e LAZY (preguiçoso) em mapeamentos JPA (`@OneToMany`, `@ManyToOne`)?",
    "EAGER vs LAZY",
    [
        "A) EAGER carrega os dados associados apenas quando acessados explicitamente; LAZY carrega tudo imediatamente junto com a entidade principal.",
        "B) LAZY carrega os dados relacionados sob demanda (apenas quando o getter correspondente é chamado), economizando recursos; EAGER carrega os dados associados imediatamente na mesma consulta inicial.",
        "C) Não há diferença de desempenho entre ambos.",
        "D) LAZY funciona apenas com bancos de dados NoSQL."
    ],
    "B",
    "O padrão para coleções (`@OneToMany`, `@ManyToMany`) no JPA é `LAZY` para evitar consultas pesadas desnecessárias. O acesso fora de uma transação ativa pode gerar a famosa exceção `LazyInitializationException`.",
    "Associações para um (`@ManyToOne`, `@OneToOne`) vêm por padrão como `EAGER`."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que o Flyway ou Liquibase realizam quando integrados a uma aplicação Spring Boot?",
    "Database Migrations",
    [
        "A) Gerenciam o versionamento e a evolução estrutural do banco de dados (criação de tabelas, colunas, scripts de migração SQL) de forma automatizada e controlada entre diferentes ambientes.",
        "B) Converte arquivos de texto em planilhas Excel na nuvem.",
        "C) Realizam backups automáticos do disco rígido local.",
        "D) Otimizam loops de repetição em Java."
    ],
    "A",
    "Eles evitam o risco de usar `spring.jpa.hibernate.ddl-auto=create-drop` ou `update` em produção, garantindo que o esquema do banco evolua de forma previsível e auditável via scripts versionados.",
    "Os scripts são executados ordenadamente assim que a aplicação sobe."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que é o conceito de Projections (Projeções) no Spring Data JPA?",
    "Projections",
    [
        "A) Ferramentas de inteligência artificial para projetar telas em 3D.",
        "B) Um mecanismo que permite buscar apenas um subconjunto específico de colunas de uma entidade usando interfaces (Interface-based Projections) ou classes DTO, evitando o tráfego desnecessário de dados.",
        "C) Um padrão de design para criar animações em HTML5.",
        "D) Um formato de compactação de imagens."
    ],
    "B",
    "Em vez de carregar a entidade inteira com dezenas de colunas, você pode definir uma interface com getters específicos (`interface NomeEmailOnly { String getNome(); String getEmail(); }`) e o Spring otimiza a query.",
    "Melhora a performance em consultas de leitura intensiva."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que ocorre quando uma operação de banco de dados lança uma exceção e o método está anotado com `@Transactional`?",
    "Rollback Transactional",
    [
        "A) A transação é mantida aberta indefinidamente até o servidor reiniciar.",
        "B) O Spring realiza o rollback automático da transação caso ocorra uma `RuntimeException` (ou subclasses de `Error`), desfazendo todas as alterações feitas no banco de dados durante o escopo.",
        "C) O erro é ignorado silenciosamente e o fluxo continua.",
        "D) O sistema deleta todas as tabelas do banco de segurança."
    ],
    "B",
    "Por padrão, exceções checadas (`Checked Exceptions`, como `IOException`) não disparam rollback automático a menos que explicitamente configurado (`@Transactional(rollbackFor = Exception.class)`).",
    "Garante a integridade dos dados transacionais."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Para que serve a anotação `@Modifying` combinada com `@Query` no Spring Data JPA?",
    "@Modifying",
    [
        "A) Para modificar o estilo visual dos botões no front-end.",
        "B) Para indicar ao Spring Data que a consulta personalizada (`@Query`) é uma operação de alteração de dados (como UPDATE, DELETE ou INSERT), exigindo uma transação ativa.",
        "C) Para alterar dinamicamente o tipo de banco de dados em tempo de execução.",
        "D) Para modificar permissões de acesso de usuários no Spring Security."
    ],
    "B",
    "Por padrão, o Spring Data assume que consultas `@Query` são do tipo SELECT. Sem o `@Modifying`, operações de escrita em consultas JPQL nativas geram erros.",
    "Deve ser usado obrigatoriamente dentro de métodos transacionais."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que é o cache de primeiro nível (First-Level Cache) gerenciado pelo EntityManager / Hibernate no JPA?",
    "Hibernate Cache",
    [
        "A) Um cache compartilhado por todos os servidores do cluster em nuvem.",
        "B) Um cache associado ao ciclo de vida da transação (EntityManager/Session), que armazena entidades já carregadas para evitar consultas repetidas ao banco de dados dentro da mesma transação.",
        "C) O cache do navegador web do usuário final.",
        "D) Um armazenamento temporário na memória ROM do processador."
    ],
    "B",
    "Se você buscar o mesmo ID duas vezes dentro do mesmo escopo de persistência, a segunda chamada retorna a instância em memória sem ir ao banco.",
    "Existe também o cache de segundo nível (Second-Level Cache), que opera no nível da fábrica de sessões (SessionFactory)."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Qual é a utilidade da anotação `@EntityListeners` em entidades JPA?",
    "Entity Listeners",
    [
        "A) Para escutar eventos de cliques de mouse em formulários web.",
        "B) Para interceptar o ciclo de vida da entidade no banco de dados (como antes de persistir `@PrePersist`, após carregar `@PostLoad`, antes de atualizar `@PreUpdate`), permitindo auditorias automáticas.",
        "C) Para escutar requisições HTTP vindas de APIs externas.",
        "D) Para monitorar o uso de CPU do servidor."
    ],
    "B",
    "Muito utilizada para preencher automaticamente campos de data de criação e atualização (`createdAt`, `updatedAt`) sem precisar repassá-los manualmente em todos os serviços.",
    "Comum em classes de auditoria com `@EntityListeners(AuditingEntityListener.class)`."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Como o Spring Security gerencia a autenticação em APIs REST modernas utilizando tokens JWT (JSON Web Token)?",
    "Spring Security & JWT",
    [
        "A) O Spring Security armazena o token permanentemente na memória RAM do roteador Wi-Fi.",
        "B) Através da criação de um filtro customizado (que estende `OncePerRequestFilter`) inserido na Security Filter Chain para interceptar requisições, validar o token no cabeçalho Authorization e autenticar o contexto de segurança.",
        "C) Substituindo completamente o protocolo HTTP por sockets criptografados.",
        "D) Criptografando arquivos de código fonte em tempo de compilação."
    ],
    "B",
    "Em APIs REST sem estado (stateless), o JWT substitui as sessões tradicionais baseadas em cookies. O filtro valida a assinatura do token e popula o `SecurityContextHolder`.",
    "O servidor não precisa manter estado de sessão dos usuários conectados."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Para que serve a anotação `@EnableWebSecurity` e o uso de beans do tipo `SecurityFilterChain` nas versões modernas do Spring Security (6+ / Boot 3+)?",
    "SecurityFilterChain",
    [
        "A) Para bloquear completamente o acesso de qualquer usuário à aplicação.",
        "B) Para configurar de forma declarativa e fluida as regras de segurança HTTP, como quais endpoints são públicos, quais exigem autenticação, regras de CORS, CSRF e o gerenciamento da sessão stateless.",
        "C) Para criptografar senhas usando algoritmos obsoletos como MD5.",
        "D) Para gerar certificados SSL autoassinados."
    ],
    "B",
    "Substituiu a antiga classe adaptadora `WebSecurityConfigurerAdapter` (que foi descontinuada), adotando uma abordagem baseada estritamente em componentes e builder fluídos.",
    "Garante controle granular sobre o fluxo de requisições."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que é o Service Discovery (Descoberta de Serviços) no ecossistema Spring Cloud, utilizando ferramentas como Netflix Eureka?",
    "Spring Cloud Eureka",
    [
        "A) Um mecanismo para descobrir vírus e malwares em servidores Java.",
        "B) Um registro centralizado onde microsserviços dinâmicos se registram ao inicializar e consultam uns aos outros por nome lógico, dispensando endereços IP estáticos em ambientes elásticos de nuvem.",
        "C) Uma ferramenta para buscar arquivos perdidos no disco rígido.",
        "D) Um banco de dados NoSQL distribuído."
    ],
    "B",
    "Em arquiteturas de microsserviços onde instâncias sobem e descem dinamicamente (ex: containers Kubernetes), o Service Discovery resolve o problema de comunicação entre serviços sem configuração manual de IPs.",
    "Composto por um servidor de registro (Eureka Server) e clientes (Eureka Clients)."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Qual é a função do Spring Cloud Gateway em uma arquitetura de microsserviços?",
    "Spring Cloud Gateway",
    [
        "A) Gerenciar portas físicas de roteamento de rede no switch da empresa.",
        "B) Atuar como ponto de entrada único (API Gateway) para todas as requisições externas, gerenciando roteamento dinâmico, filtros de segurança globais, limitação de taxa (rate limiting) e balanceamento de carga.",
        "C) Compilar arquivos Java para aplicações móveis iOS.",
        "D) Substituir bancos de dados relacionais por proxies reversos."
    ],
    "B",
    "O Gateway centraliza responsabilidades transversais que antes estariam duplicadas em cada microsserviço, servindo como a porta da frente segura para clientes web e mobile.",
    "Construído sobre o ecossistema reativo Project Reactor (WebFlux)."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Como o Spring Boot facilita a realização de testes de integração com banco de dados usando a anotação `@DataJpaTest`?",
    "Testes com @DataJpaTest",
    [
        "A) Iniciando um servidor Tomcat completo e abrindo telas no navegador.",
        "B) Configurando automaticamente um ambiente de teste focado na camada JPA (carregando apenas repositórios, entidades e configurando por padrão um banco de dados em memória como H2), executando os testes de forma isolada e transacional.",
        "C) Executando testes unitários puramente em JavaScript.",
        "D) Conectando-se obrigatoriamente ao banco de dados de produção da empresa."
    ],
    "B",
    "O `@DataJpaTest` desativa a auto-configuração completa e carrega apenas os componentes essenciais para testar persistência, garantindo alta velocidade nos testes de repositórios.",
    "Cada teste é executado dentro de uma transação que sofre rollback automático ao final."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Para que serve a anotação `@SpringBootTest` em testes automatizados?",
    "@SpringBootTest",
    [
        "A) Para testar apenas funções matemáticas isoladas sem carregar o Spring.",
        "B) Para carregar o ApplicationContext completo do Spring Boot (incluindo todos os beans, serviços e controladores), permitindo testes de integração ponta a ponta (E2E).",
        "C) Para testar a velocidade de download de arquivos da internet.",
        "D) Para gerar relatórios de cobertura de código em formato gráfico."
    ],
    "B",
    "É a anotação mais abrangente para testes, simulando o ambiente real de execução da aplicação. Como carrega todo o contexto, tende a ser mais pesada que testes focados (@WebMvcTest, @DataJpaTest).",
    "Pode ser combinada com `WebEnvironment.RANDOM_PORT` para testar requisições HTTP reais via `TestRestTemplate` ou `WebTestClient`."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que é o Circuit Breaker (Disjuntor) provido pelo Resilience4j integrado ao Spring Cloud?",
    "Circuit Breaker",
    [
        "A) Um dispositivo físico de proteção contra curtos-circuitos elétricos no servidor.",
        "B) Um padrão de resiliência que monitora falhas em chamadas a serviços externos; se o número de erros ultrapassar um limite, o circuito 'abre', bloqueando novas chamadas imediatas e retornando uma resposta padrão (fallback) para evitar efeito cascata de indisponibilidade.",
        "C) Um mecanismo para desligar a aplicação quando o uso de memória atinge 100%.",
        "D) Um sistema de criptografia de senhas para APIs."
    ],
    "B",
    "Evita que a queda de um microsserviço secundário derrube toda a cadeia de microsserviços dependentes por esgotamento de threads (thread starvation).",
    "Possui estados: Closed, Open e Half-Open."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que o Spring Cloud Config Server resolve em ambientes corporativos distribuídos?",
    "Spring Cloud Config",
    [
        "A) A formatação de arquivos de texto em planilhas.",
        "B) A centralização do gerenciamento de arquivos de configuração de todos os microsserviços em um repositório remoto (como Git), permitindo atualizar parâmetros em tempo de execução sem recompilar as aplicações.",
        "C) O controle de acesso físico aos servidores em data centers.",
        "D) A tradução automática de códigos Java para C#."
    ],
    "B",
    "Em vez de cada microsserviço ter seus próprios application.properties espalhados, o Config Server centraliza e serve as configurações de forma segura e versionada.",
    "Suporta atualização dinâmica de propriedades via endpoint `/actuator/refresh` (quando combinado com `@RefreshScope`)."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Qual é a função da anotação `@WebMvcTest` em testes unitários do Spring Boot?",
    "@WebMvcTest",
    [
        "A) Testar diretamente queries SQL complexas no banco de dados Oracle.",
        "B) Focar o teste estritamente na camada web (Controllers), carregando apenas os componentes necessários do Spring MVC (como `@Controller`, `@ControllerAdvice`, conversores) sem subir o banco de dados ou serviços de negócio reais.",
        "C) Executar testes de estresse em servidores de nuvem.",
        "D) Compilar arquivos HTML para React."
    ],
    "B",
    "Permite testar rotas, validações de payload e códigos de status HTTP rapidamente com o auxílio do `MockMvc`, mockando as dependências de serviço (`@MockBean`).",
    "Isola o teste da camada de persistência."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Como o Spring lida com agendamento de tarefas (Task Scheduling) de forma declarativa?",
    "Spring Scheduling",
    [
        "A) Exigindo a instalação de servidores de fila externos complexos obrigatórios.",
        "B) Através da anotação `@EnableScheduling` na classe de configuração e `@Scheduled(cron = '0 0 12 * * ?')` nos métodos que devem executar periodicamente.",
        "C) Executando código exclusivamente quando o usuário clica em um botão na interface.",
        "D) Lendo arquivos do Excel em segundo plano."
    ],
    "B",
    "O Spring disponibiliza um agendador de tarefas embutido baseado em pool de threads, suportando tanto intervalos fixos (`fixedRate`, `fixedDelay`) quanto expressões Cron completas.",
    "Ideal para rotas de limpeza de cache, envio de e-mails em lote ou relatórios agendados simples."
);

/* =====================================================
   REST E SOAP (ARQUITETURAS DE APIS E SERVIÇOS WEB)
===================================================== */

addQuestion(
    "REST e SOAP",
    "Média",
    "Qual é a principal diferença arquitetural e de protocolo entre os estilos REST e SOAP?",
    "Conceitos Básicos",
    [
        "A) O REST é um protocolo estrito baseado em XML padronizado pela W3C, enquanto o SOAP é um estilo arquitetural flexível restrito apenas ao método GET.",
        "B) O SOAP é um protocolo rígido baseado estritamente em XML com envelope próprio e contratos WSDL rígidos; o REST é um estilo arquitetural leve que utiliza verbos HTTP padrão (GET, POST, PUT, DELETE) e suporta múltiplos formatos de dados como JSON.",
        "C) O REST funciona exclusivamente sobre redes locais sem fio, enquanto o SOAP opera somente via Bluetooth.",
        "D) Não há diferenças técnicas; ambos são sinônimos para chamadas de procedimentos remotos (RPC)."
    ],
    "B",
    "O SOAP (Simple Object Access Protocol) é um protocolo pesado com especificações rígidas de segurança e transações (WS-Security). O REST (Representational State Transfer) foca em recursos, escalabilidade e simplicidade usando os princípios nativos da web.",
    "O REST tornou-se o padrão dominante para APIs web modernas devido à sua leveza e facilidade de consumo com JSON."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Como o REST lida com o conceito de 'Stateless' (Sem Estado) em suas requisições?",
    "Princípios do REST",
    [
        "A) O servidor armazena todas as senhas e históricos de navegação dos clientes em memória RAM.",
        "B) Cada requisição do cliente para o servidor deve conter todas as informações necessárias para entender e processar a solicitação, sem depender de contextos ou sessões armazenadas previamente no servidor.",
        "C) O estado da aplicação é mantido permanentemente em cookies criptografados no banco de dados relacional.",
        "D) O servidor gerencia o fluxo temporal das telas do usuário através de conexões TCP persistentes."
    ],
    "B",
    "A restrição Stateless melhora drasticamente a escalabilidade dos servidores REST, pois qualquer instância do servidor pode atender a qualquer requisição de forma independente.",
    "A autenticação baseada em tokens (como JWT) encaixa-se perfeitamente nessa premissa."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Qual é o papel do arquivo WSDL (Web Services Description Language) no ecossistema SOAP?",
    "Contratos SOAP",
    [
        "A) Servir como um documento de estilos CSS para renderizar páginas HTML no navegador.",
        "B) Descrever formalmente o contrato do serviço SOAP, especificando as operações disponíveis, os formatos XML esperados, os tipos de dados e os endpoints de comunicação.",
        "C) Criptografar o payload da mensagem contra ataques de negação de serviço (DDoS).",
        "D) Substituir o banco de dados relacional no armazenamento de logs de erro."
    ],
    "B",
    "O WSDL atua como um contrato rígido baseado em XML. Ferramentas de desenvolvimento podem ler esse arquivo automaticamente para gerar stubs e classes de cliente capazes de consumir a API SOAP.",
    "Garante alta tipagem e validação estricta, embora adicione complexidade de configuração."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Quais são os verbos HTTP padrão mais comumente utilizados em uma API RESTful para mapear operações CRUD (Create, Read, Update, Delete)?",
    "Verbos HTTP no REST",
    [
        "A) `FETCH`, `SEND`, `CHANGE`, `REMOVE`",
        "B) `GET` (Ler), `POST` (Criar), `PUT`/`PATCH` (Atualizar), `DELETE` (Remover)",
        "C) `SELECT`, `INSERT`, `UPDATE`, `DROP`",
        "D) `REQUEST`, `RESPONSE`, `VALIDATE`, `EXECUTE`"
    ],
    "B",
    "O REST explora a semântica nativa dos métodos HTTP. O `GET` recupera recursos, `POST` cria novos recursos, `PUT`/`PATCH` atualizam e `DELETE` os remove.",
    "O uso correto dos verbos e códigos de status HTTP (200, 201, 400, 404, 500) é essencial para uma API REST bem projetada."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Por que o protocolo SOAP é frequentemente escolhido em ambientes corporativos bancários ou governamentais legados?",
    "Uso do SOAP",
    [
        "A) Porque ele consome menos largura de banda que o formato JSON.",
        "B) Devido aos seus padrões nativos robustos de segurança avançada (WS-Security), confiabilidade transacional (ACID/WS-AtomicTransaction) e contratos contratuais rígidos.",
        "C) Porque os navegadores web modernos executam SOAP de forma nativa sem bibliotecas adicionais.",
        "D) Porque ele não exige o uso de endereços IP para comunicação."
    ],
    "B",
    "Embora mais pesado e complexo que o REST, o SOAP oferece recursos de segurança corporativa de nível empresarial integrados e garantias rígidas de entrega de mensagens.",
    "Ainda é muito comum em sistemas legados corporativos e integrações B2B (Business-to-Business)."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que significa o conceito de 'HATEOAS' (Hypermedia As The Engine Of Application State) no nível mais avançado de maturidade REST (Modelo de Maturidade de Richardson)?",
    "HATEOAS no REST",
    [
        "A) Um sistema de criptografia de ponta a ponta para proteger dados contra ataques de man-in-the-middle.",
        "B) A prática de incluir links de hipermídia nas respostas da API, permitindo que o cliente navegue dinamicamente pelas próximas ações possíveis sem precisar hardcodar URLs.",
        "C) Uma biblioteca de compressão de arquivos JSON para otimizar o tráfego de rede.",
        "D) Um framework de injeção de dependência para microsserviços Java."
    ],
    "B",
    "Com HATEOAS, a resposta da API não traz apenas os dados, mas também os links de navegação disponíveis (ex: links para pagar, cancelar ou atualizar o recurso), tornando o cliente altamente desacoplado da estrutura de URLs.",
    "Representa o Nível 3 do Modelo de Maturidade de Leonard Richardson para APIs REST."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Qual é a principal desvantagem técnica associada ao uso do protocolo SOAP?",
    "Limitações do SOAP",
    [
        "A) A incapacidade total de trafegar dados em formato numérico.",
        "B) O alto overhead de processamento e banda devido à obrigatoriedade de serialização e parsing de estruturas XML complexas (Envelopes SOAP), além do acoplamento rígido.",
        "C) A falta absoluta de padrões de segurança e criptografia.",
        "D) A impossibilidade de ser executado sobre o protocolo HTTP."
    ],
    "B",
    "O XML do SOAP é verboso e pesado. Processar envelopes SOAP exige mais recursos computacionais de CPU e memória em comparação com o formato JSON leve utilizado pelo REST.",
    "Isso tornou o SOAP impopular para aplicações móveis e arquiteturas de alta escala orientadas a microsserviços."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Como o REST gerencia a identificação dos recursos disponibilizados na web?",
    "Recursos no REST",
    [
        "A) Através de nomes de métodos remotos encapsulados em um arquivo XML.",
        "B) Através de URIs (Uniform Resource Identifiers) claros e orientados a substantivos (ex: `/clientes/123/pedidos`).",
        "C) Através de números de portas TCP exclusivos para cada cliente conectado.",
        "D) Através de comandos SQL diretos enviados na URL."
    ],
    "B",
    "No REST, tudo é tratado como um 'recurso'. As URIs devem identificar os recursos de forma intuitiva, focando em substantivos no plural em vez de verbos de ação.",
    "Exemplo correto: `GET /produtos` em vez de `GET /obterProdutos`."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Em termos de transporte e flexibilidade de protocolos, qual é a grande vantagem do REST sobre o SOAP?",
    "Transporte no REST",
    [
        "A) O REST opera exclusivamente via protocolo FTP.",
        "B) O SOAP está preso obrigatoriamente ao protocolo HTTP, enquanto o REST pode usar qualquer protocolo de rede.",
        "C) O SOAP é altamente acoplado ao protocolo HTTP (e dependente de extensões rígidas), enquanto o REST tira proveito universal de qualquer recurso web baseado em HTTP, podendo também transitar facilmente sobre JSON, XML, HTML ou texto puro.",
        "D) O REST exige conexões dedicadas via cabo de fibra ótica."
    ],
    "C",
    "Embora o SOAP possa teoricamente rodar sobre SMTP ou TCP, ele é fortemente atrelado ao HTTP com regras complexas de envelopamento. O REST aproveita diretamente a infraestrutura nativa da web (cache, proxies, gateways HTTP).",
    "A flexibilidade de formatos de payload (JSON, XML, YAML) também favorece o REST."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Qual formato de serialização de dados é o mais universal e amplamente associado ao desenvolvimento de APIs REST modernas?",
    "Formatos de Dados no REST",
    [
        "A) XML estrito com validação XSD obrigatória.",
        "B) JSON (JavaScript Object Notation), devido à sua leveza, legibilidade humana e facilidade de parsing nativo em linguagens web.",
        "C) Arquivos binários compactados em formato ZIP.",
        "D) Textos estruturados em planilhas CSV."
    ],
    "B",
    "Embora o REST suporte múltiplos formatos (conteúdo negociado via header `Accept`), o JSON tornou-se o padrão de fato da indústria por sua simplicidade e baixo consumo de banda comparado ao XML.",
    "Acelera o desenvolvimento tanto no backend quanto no frontend."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que caracteriza o componente UDDI (Universal Description, Discovery, and Integration) na arquitetura tradicional de Web Services SOAP?",
    "UDDI no SOAP",
    [
        "A) Um banco de dados relacional para cache de imagens.",
        "B) Um diretório centralizado onde provedores registram seus serviços WSDL para que clientes possam descobri-los dinamicamente.",
        "C) Um mecanismo de criptografia de senhas para o protocolo HTTP.",
        "D) Uma ferramenta de testes automatizados de front-end."
    ],
    "B",
    "O UDDI formava a tríade clássica do SOAP junto com WSDL e o próprio protocolo SOAP, funcionando como um catálogo corporativo de serviços.",
    "Atualmente é pouco utilizado, tendo sido substituído por abordagens mais modernas em nuvem."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que significa a restrição de 'Uniform Interface' (Interface Uniforme) no estilo arquitetural REST?",
    "Interface Uniforme",
    [
        "A) Que todas as respostas da API devem usar a mesma paleta de cores CSS.",
        "B) Que as interações entre cliente e servidor seguem um conjunto padronizado de regras (identificação de recursos via URIs, manipulação via representações, mensagens auto-descritivas e HATEOAS), simplificando a arquitetura.",
        "C) Que o servidor deve aceitar apenas comandos escritos em linguagem C.",
        "D) Que o tamanho de todas as respostas JSON deve ser exatamente o mesmo."
    ],
    "B",
    "A interface uniforme desacopla os clientes das implementações dos servidores, permitindo que cada parte evolua de forma independente.",
    "É um dos pilares fundamentais definidos por Roy Fielding em sua tese."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Como o protocolo SOAP lida com a confiabilidade e transações distribuídas?",
    "WS-ReliableMessaging",
    [
        "A) Através de extensões de especificação conhecidas como WS-ReliableMessaging e WS-AtomicTransaction, que garantem entrega garantida de mensagens sobre redes instáveis.",
        "B) Deixando o pacote de dados ser descartado sem aviso prévio caso ocorra perda de sinal.",
        "C) Utilizando comandos de rollback automáticos no navegador do usuário.",
        "D) Criptografando o disco rígido do servidor de aplicação."
    ],
    "A",
    "O ecossistema WS-* (Web Services Standards) adiciona funcionalidades de nível empresarial que o HTTP puro do REST não possui nativamente.",
    "Exige implementações robustas tanto no cliente quanto no servidor."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Qual é a finalidade principal do cabeçalho HTTP `Cache-Control` em uma API RESTful?",
    "Cache no REST",
    [
        "A) Definir a senha de acesso root ao banco de dados.",
        "B) Instruir clientes, proxies e servidores intermediários sobre como e por quanto tempo uma resposta de recurso pode ser armazenada em cache.",
        "C) Forçar o navegador a reiniciar a cada 5 segundos.",
        "D) Compactar o código JavaScript do front-end."
    ],
    "B",
    "O uso correto de cache (ex: `Cache-Control: max-age=3600`) reduz drasticamente a carga no servidor e melhora a latência para os clientes.",
    "Aproveita a infraestrutura nativa da web que o SOAP não consegue utilizar com a mesma facilidade."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que representa o Nível 1 (Recursos) no Modelo de Maturidade de Richardson para APIs REST?",
    "Maturidade Richardson",
    [
        "A) O uso de um único endpoint genérico para todas as operações do sistema.",
        "B) A divisão do sistema em múltiplos URIs distintos para cada recurso específico (ex: `/usuarios`, `/produtos`), em vez de enviar tudo para um único túnel RPC.",
        "C) A implementação completa de HATEOAS com links hipermídia.",
        "D) A remoção total do protocolo HTTP."
    ],
    "B",
    "No Nível 1, a API começa a tratar conceitos orientados a recursos, separando os pontos de entrada por entidades do domínio.",
    "O Nível 0 foca em chamadas de método remoto via URI única (Tunneling)."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que representa o Nível 2 (Verbos HTTP) no Modelo de Maturidade de Richardson para APIs REST?",
    "Maturidade Richardson",
    [
        "A) Usar sempre o método POST para qualquer operação de leitura ou escrita.",
        "B) Utilizar corretamente os métodos HTTP (GET para leitura, POST para criação, PUT para atualização, DELETE para remoção) e códigos de status apropriados.",
        "C) Substituir o protocolo HTTP por sockets TCP brutos.",
        "D) Encriptar payloads com chaves simétricas de 512 bits."
    ],
    "B",
    "Este nível explora a semântica dos verbos HTTP e códigos de status, tornando a API compreensível e padronizada.",
    "É o nível adotado pela imensa maioria das APIs REST comerciais do mercado."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Qual é o comportamento esperado de um método RESTful que retorna o código de status HTTP `201 Created`?",
    "Códigos HTTP",
    [
        "A) A requisição falhou por falta de parâmetros.",
        "B) O recurso foi criado com sucesso no servidor, e normalmente a resposta inclui um cabeçalho `Location` apontando para a URI do novo recurso criado.",
        "C) O servidor encontrou um erro interno inesperado.",
        "D) O recurso foi deletado permanentemente."
    ],
    "B",
    "O código `201` é a resposta padrão para operações bem-sucedidas de criação de recursos via POST ou PUT.",
    "Ajuda a manter o contrato semântico claro com o consumidor da API."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Como o SOAP lida com a segurança em nível de mensagem em comparação com a segurança baseada em transporte do REST (como HTTPS/TLS)?",
    "Segurança SOAP",
    [
        "A) O SOAP não possui nenhum mecanismo de segurança, sendo totalmente vulnerável.",
        "B) Enquanto o REST confia majoritariamente na segurança de transporte (HTTPS), o SOAP utiliza a especificação WS-Security para assinar e criptografar partes específicas do documento XML, garantindo segurança de ponta a ponta mesmo passando por múltiplos intermediários.",
        "C) O SOAP exige o uso de senhas escritas em cartões perfurados.",
        "D) O REST criptografa apenas arquivos de imagem."
    ],
    "B",
    "A segurança de mensagem do WS-Security protege o payload mesmo que ele transite por proxies ou barramentos corporativos (ESB) intermediários que decodifiquem o HTTPS.",
    "Torna o SOAP atraente para corporações com políticas estritas de auditoria de dados."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que significa a propriedade de 'Idempotência' em métodos HTTP no REST (como PUT, DELETE e GET)?",
    "Idempotência no REST",
    [
        "A) Que o método altera dados aleatórios a cada execução.",
        "B) Que realizar várias requisições idênticas consecutivas produz exatamente o mesmo efeito colateral no servidor do que realizar apenas uma única requisição.",
        "C) Que o servidor rejeitará qualquer requisição enviada após o meio-dia.",
        "D) Que a API funciona apenas em modo offline."
    ],
    "B",
    "Métodos como `GET`, `PUT` e `DELETE` são idempotentes (fazer um DELETE duas vezes no mesmo ID resulta no mesmo estado final: recurso inexistente). O `POST` por padrão não é idempotente.",
    "Fundamental para projetar sistemas tolerantes a falhas de rede e retentativas (retries)."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Qual é a principal diferença entre os métodos HTTP `PUT` e `PATCH` em uma API REST?",
    "PUT vs PATCH",
    [
        "A) Não há diferença; ambos criam novos usuários no sistema.",
        "B) O `PUT` substitui integralmente o recurso existente pelos dados enviados (atualização completa), enquanto o `PATCH` aplica apenas modificações parciais nos campos especificados.",
        "C) O `PATCH` funciona apenas via protocolo FTP.",
        "D) O `PUT` é utilizado exclusivamente para consultas de leitura."
    ],
    "B",
    "Se você enviar um objeto com apenas 2 campos via PUT em um recurso que possui 5 campos, os outros 3 podem ser apagados ou setados como nulos. No PATCH, apenas os 2 campos enviados são modificados.",
    "Ajuda a economizar banda e evitar sobrescritas acidentais."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que são os contratos XSD (XML Schema Definition) associados a serviços SOAP?",
    "XSD no SOAP",
    [
        "A) Arquivos de folha de estilo para formatação de texto em negrito.",
        "B) Documentos que definem a estrutura formal, os tipos de dados permitidos e a validação dos elementos XML trafidados nas mensagens SOAP.",
        "C) Senhas mestras de acesso ao banco de dados Oracle.",
        "D) Bibliotecas de animação gráfica para interfaces desktop."
    ],
    "B",
    "O XSD garante estritamente que nenhum dado fora do formato esperado entre ou saia do serviço SOAP, provendo validação rígida de tipos.",
    "Garante altíssima previsibilidade em integrações corporativas complexas."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Por que as APIs REST são consideradas mais escaláveis para aplicações web de alto volume de tráfego?",
    "Escalabilidad do REST",
    [
        "A) Porque exigem servidores físicos caríssimos dedicados a cada usuário.",
        "B) Devido à restrição Stateless, uso eficiente de cache HTTP intermediário e payloads leves em JSON, permitindo distribuir requisições facilmente entre múltiplos nós de servidores.",
        "C) Porque bloqueiam o acesso de robôs indexadores de busca.",
        "D) Porque utilizam conexões de linha discada."
    ],
    "B",
    "A capacidade de armazenar respostas em cache na rede (CDNs, proxies) e a ausência de estado de sessão no servidor reduzem gargalos de processamento.",
    "É a base arquitetural da web moderna de grande escala."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que indica o código de status HTTP `401 Unauthorized` em uma resposta de API REST?",
    "Códigos HTTP",
    [
        "A) O servidor está temporariamente desligado para manutenção.",
        "B) A requisição carece de credenciais de autenticação válidas; o cliente precisa se identificar (ex: enviar um token ou fazer login) antes de acessar o recurso.",
        "C) O recurso solicitado foi permanentemente apagado.",
        "D) O formato do JSON enviado está corrompido."
    ],
    "B",
    "Diferente do 403 (Forbidden, onde o usuário é conhecido mas não tem permissão), o 401 significa que o cliente não está autenticado.",
    "Indica que falta identificação válida na requisição."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que indica o código de status HTTP `403 Forbidden` em uma resposta de API REST?",
    "Códigos HTTP",
    [
        "A) O usuário precisa digitar a senha novamente porque ela expirou.",
        "B) O servidor entendeu a requisição e a identidade do cliente, mas este não possui as permissões (autorização/roles) necessárias para acessar o recurso solicitado.",
        "C) O endereço URL digitado não existe no servidor.",
        "D) O banco de dados relacional atingiu o limite de conexões."
    ],
    "B",
    "O servidor sabe quem é o cliente (autenticado), mas o perfil dele não tem privilégios suficientes para executar aquela ação.",
    "Distinção crucial em relação ao código 401."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Qual é a função do cabeçalho HTTP `Content-Type` em uma requisição ou resposta RESTful?",
    "Cabeçalhos HTTP",
    [
        "A) Determinar a velocidade máxima da conexão de internet em megabits.",
        "B) Indicar o tipo de mídia (MIME type) do corpo da mensagem enviado ou retornado (ex: `application/json`, `application/xml`, `text/plain`), permitindo que o receptor interprete os dados corretamente.",
        "C) Criptografar o IP do cliente contra rastreamento.",
        "D) Armazenar o histórico de navegação do usuário."
    ],
    "B",
    "Sem o `Content-Type: application/json`, o servidor pode não saber como fazer o parsing do corpo da requisição enviada pelo cliente.",
    "Essencial para a negociação de conteúdo (Content Negotiation)."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Qual é a função do cabeçalho HTTP `Accept` em uma requisição enviada por um cliente REST?",
    "Negociação de Conteúdo",
    [
        "A) Aceitar os termos de uso e política de privacidade do site.",
        "B) Informar ao servidor quais tipos de mídia (formatos de dados) o cliente é capaz de processar e prefere receber na resposta (ex: `Accept: application/json`).",
        "C) Permitir conexões automáticas via Bluetooth.",
        "D) Validar a assinatura digital do certificado SSL."
    ],
    "B",
    "Permite que o servidor decida dinamicamente se responderá em JSON, XML ou outro formato com base nas preferências declaradas pelo cliente.",
    "Fundamental para arquiteturas flexíveis orientadas a múltiplos clientes (web, mobile, desktop)."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Como o SOAP realiza a comunicação subjacente caso não utilize diretamente o protocolo HTTP?",
    "Transporte SOAP",
    [
        "A) Ele só pode rodar em disquetes de 3.5 polegadas.",
        "B) Embora o HTTP seja o mais comum, o envelope SOAP é independente de transporte, podendo ser transmitido via SMTP (e-mail), TCP puro ou JMS (Java Message Service).",
        "C) Através de sinais de rádio AM/FM analógicos.",
        "D) Por meio de conexões físicas diretas via porta serial RS-232."
    ],
    "B",
    "Essa flexibilidade de transporte era muito valorizada em ambientes corporativos antigos de integração assíncrona por filas de mensagens.",
    "No entanto, na prática moderna, quase todo SOAP roda sobre HTTP/HTTPS."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que significa a sigla REST e quem a cunhou?",
    "Origem do REST",
    [
        "A) Remote Execution System Transfer, cunhado por Alan Turing em 1950.",
        "B) Representational State Transfer, cunhado por Roy Fielding em sua tese de doutorado em 2000.",
        "C) Rapid Enterprise Service Technology, cunhado pela Microsoft em 2008.",
        "D) Reliable Secure Transmission, cunhado pelo W3C em 1999."
    ],
    "B",
    "Roy Fielding definiu o conjunto de restrições arquiteturais que moldaram a forma como a web e as APIs modernas funcionam.",
    "O REST descreve o comportamento de sistemas distribuídos baseados em hipermídia."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que é um 'Envelope' na estrutura de uma mensagem SOAP?",
    "Envelope SOAP",
    [
        "A) Um envelope físico de papel despachado pelos Correios.",
        "B) O elemento raiz obrigatório de qualquer documento XML SOAP, que divide a mensagem em duas partes lógicas opcionais/obrigatórias: o Header (cabeçalho) e o Body (corpo).",
        "C) Um algoritmo de criptografia simétrica de chave única.",
        "D) Um arquivo compactado em formato ZIP."
    ],
    "B",
    "O Envelope define o início e o fim da mensagem SOAP, contendo metadados de roteamento e segurança no Header e a carga útil de negócio no Body.",
    "É a assinatura estrutural inconfundível do protocolo SOAP."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Qual é o comportamento de um método RESTful que retorna o código de status HTTP `204 No Content`?",
    "Códigos HTTP",
    [
        "A) A requisição falhou porque o servidor está sem conexão com a internet.",
        "B) A requisição foi processada com sucesso pelo servidor, mas não há dados de corpo (payload) para retornar na resposta (comum em operações bem-sucedidas de exclusão via DELETE).",
        "C) O servidor encontrou um loop infinito de execução.",
        "D) O recurso solicitado foi duplicado incorretamente."
    ],
    "B",
    "Muito útil em endpoints de exclusão (`DELETE`) ou atualização sem retorno de dados, economizando banda de rede.",
    "Informa ao cliente que a ação ocorreu perfeitamente, embora nada precise ser exibido."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que caracteriza uma arquitetura de API orientada a recursos no REST em contraste com RPC (Remote Procedure Call)?",
    "REST vs RPC",
    [
        "A) No REST você foca em entidades/substantivos expostos por URIs (`/clientes`), enquanto no RPC você foca em invocar métodos/verbos remotos abstratos (`/deletarCliente?id=5`).",
        "B) O RPC utiliza exclusivamente JSON leve, enquanto o REST usa apenas XML pesado.",
        "C) O REST funciona apenas sem fio e o RPC via cabo.",
        "D) Não há diferença conceitual entre ambos."
    ],
    "A",
    "O RPC expõe funções ou procedimentos do backend como se fossem locais. O REST expõe o modelo de domínio da aplicação estruturado em recursos interconectados.",
    "O REST aproveita melhor a semântica e a infraestrutura nativa da web."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que significa o código de status HTTP `500 Internal Server Error` em uma API REST?",
    "Códigos HTTP",
    [
        "A) O cliente errou ao digitar a URL da API.",
        "B) O servidor encontrou uma condição inesperada que o impediu de atender à solicitação (ex: uma exceção Java não tratada, falha de conexão com o banco de dados).",
        "C) A senha do usuário foi alterada com sucesso.",
        "D) O navegador do cliente precisa ser atualizado."
    ],
    "B",
    "Indica um problema grave do lado do servidor, e não um erro de envio por parte do cliente.",
    "Exige análise de logs do backend para correção."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Como o SOAP lida com tratamento de erros em suas respostas XML?",
    "Fault SOAP",
    [
        "A) Retornando códigos de status numéricos HTTP genéricos como 404.",
        "B) Utilizando um elemento estruturado especial chamado `Fault` dentro do Body da resposta XML, contendo códigos de erro padronizados (`faultcode`, `faultstring`) para descrever o problema detalhadamente.",
        "C) Desligando o servidor imediatamente para proteger os dados.",
        "D) Convertendo o erro em um arquivo de áudio."
    ],
    "B",
    "O mecanismo de Fault do SOAP padroniza a forma como falhas e exceções são comunicadas de volta ao cliente em XML.",
    "Diferente do REST, que usa códigos de status HTTP variados, o SOAP frequentemente retorna HTTP 200 ou 500 trazendo o XML estruturado de Fault no corpo."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Qual é a relação entre microsserviços modernos e o estilo arquitetural REST?",
    "Microsserviços e REST",
    [
        "A) Microsserviços proíbem totalmente o uso de REST, exigindo apenas SOAP.",
        "B) O REST (junto com JSON) tornou-se o meio de comunicação síncrona predominante entre microsserviços devido à sua simplicidade, baixo acoplamento e independência de linguagem.",
        "C) O REST obriga todos os microsserviços a rodarem na mesma máquina física.",
        "D) O REST substitui completamente a necessidade de bancos de dados nos microsserviços."
    ],
    "B",
    "A leveza do REST facilita a comunicação HTTP leve entre diferentes serviços desenvolvidos em linguagens distintas (ex: Java falando com Python ou Node.js).",
    "É a espinha dorsal de muitas arquiteturas modernas baseadas em nuvem."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que indica o código de status HTTP `400 Bad Request` em uma resposta de API REST?",
    "Códigos HTTP",
    [
        "A) O servidor não conseguiu encontrar o recurso solicitado.",
        "B) O servidor não pôde processar a requisição devido a um erro do cliente (ex: sintaxe JSON inválida, parâmetros obrigatórios ausentes ou falha de validação de payload).",
        "C) O servidor foi invadido por hackers.",
        "D) O arquivo solicitado é grande demais."
    ],
    "B",
    "Indica que a requisição está mal formatada ou viola regras de validação de entrada, impedindo o processamento pelo backend.",
    "Um dos códigos de erro mais comuns no desenvolvimento de APIs."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que indica o código de status HTTP `404 Not Found` em uma API REST?",
    "Códigos HTTP",
    [
        "A) A operação foi concluída com sucesso absoluto.",
        "B) O servidor não encontrou nenhum recurso correspondente à URI fornecida ou o recurso foi removido.",
        "C) O usuário digitou a senha correta.",
        "D) O banco de dados relacional está sobrecarregado."
    ],
    "B",
    "Um dos códigos mais tradicionais da web, usado quando o identificador de um recurso buscado (ex: `/clientes/99999`) não existe no sistema.",
    "Ajuda a sinalizar claramente a ausência da entidade consultada."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Por que o SOAP exige o uso de ferramentas geradoras de código (stubs/proxies) enquanto o REST é consumido mais facilmente de forma nativa?",
    "Consumo de APIs",
    [
        "A) Porque o SOAP não pode ser lido por humanos, exigindo parsers complexos baseados em WSDL, enquanto o REST lida com JSON simples que qualquer linguagem consome nativamente sem contratos rígidos obrigatórios.",
        "B) Porque o REST é proibido em computadores corporativos.",
        "C) Porque o SOAP roda apenas em computadores quânticos.",
        "D) Não há diferenças na facilidade de consumo."
    ],
    "B",
    "A rigidez dos contratos WSDL e a verbosidade do XML do SOAP tornam quase inviável escrever clientes manualmente sem o auxílio de ferramentas automáticas.",
    "O REST foca na flexibilidade e no consumo ágil por clientes web e mobile."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que é a negociação de conteúdo (Content Negotiation) em uma API REST?",
    "Content Negotiation",
    [
        "A) Um acordo salarial entre desenvolvedores backend e frontend.",
        "B) O mecanismo pelo qual o cliente e o servidor entram em acordo sobre o formato de representação dos dados a ser trocado (ex: JSON vs XML), utilizando cabeçalhos como `Accept` e `Content-Type`.",
        "C) Um protocolo de criptografia de senhas em tempo de execução.",
        "D) Um sistema de controle de versão de código fonte."
    ],
    "B",
    "Permite que o mesmo endpoint sirva diferentes formatos de dados dependendo exclusivamente do que o cabeçalho da requisição do cliente solicitar.",
    "Aumenta a versatilidade e interoperabilidade dos serviços RESTful."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Qual é o impacto do uso de Proxies e CDNs intermediários em arquiteturas RESTful comparado ao SOAP?",
    "Proxies e CDNs no REST",
    [
        "A) Proxies e CDNs bloqueiam totalmente o tráfego REST.",
        "B) Como o REST utiliza verbos HTTP padronizados e semântica de recursos, proxies e CDNs podem armazenar respostas em cache de forma inteligente, reduzindo a latência global; o SOAP encapsula tudo em POSTs genéricos, dificultando esse cache intermediário.",
        "C) O SOAP aproveita muito melhor CDNs do que o REST.",
        "D) Não há impacto na performance de rede."
    ],
    "B",
    "O fato de requisições `GET` no REST serem seguras e idempotentes permite que a infraestrutura da internet faça cache agressivo das respostas, otimizando drasticamente a performance.",
    "Isso torna o REST incomparavelmente superior para distribuição de conteúdo web global."
);

/* =====================================================
    UML (LINGUAGEM DE MODELAGEM UNIFICADA) - Bloco 01
===================================================== */

addQuestion(
    "UML", 
    "Média", 
    "Qual é o principal objetivo de um Diagrama de Classes na UML?", 
    "Diagrama de Classes", 
    [
        "A) Mostrar o fluxo temporal de mensagens trocadas entre objetos em um cenário de uso.",
        "B) Representar a estrutura estática do sistema, exibindo as classes, seus atributos, operações e os relacionamentos entre elas.",
        "C) Descrever o comportamento dinâmico de um objeto através de estados e transições.",
        "D) Mapear fisicamente os nós de hardware e a topologia de rede onde a aplicação será executada."
    ], 
    "B", 
    "O Diagrama de Classes é o pilar estrutural mais utilizado da UML, servindo para modelar o domínio do problema e a arquitetura orientada a objetos antes da implementação do código.", 
    "Ele foca na visão estática, diferindo dos diagramas comportamentais."
);

addQuestion(
    "UML", 
    "Média", 
    "No contexto de relacionamentos entre classes na UML, qual é a diferença fundamental entre Composição e Agregação?", 
    "Relacionamentos UML", 
    [
        "A) A agregação indica uma relação de 'todo-parte' onde as partes podem existir independentemente do todo; a composição é uma forma mais forte de agregação onde o ciclo de vida da parte é dependente do todo.",
        "B) A composição é utilizada exclusivamente para classes abstratas e a agregação para interfaces.",
        "C) Não há diferença prática; ambos os termos são sinônimos para herança múltipla.",
        "D) A agregação utiliza uma seta preta sólida e a composição uma seta tracejada."
    ], 
    "A", 
    "Na agregação (losango vazio), o objeto parte sobrevive se o todo for destruído (ex: um curso e seus alunos). Na composição (losango preenchido), se o todo morre, as partes morrem junto (ex: uma casa e seus cômodos ou uma nota fiscal e seus itens).", 
    "A composição representa uma relação de propriedade estrita."
);

addQuestion(
    "UML", 
    "Média", 
    "Qual é a finalidade principal de um Diagrama de Casos de Uso?", 
    "Diagrama de Casos de Uso", 
    [
        "A) Detalhar a sintaxe de programação e os algoritmos internos dos métodos de uma classe.",
        "B) Mapear a infraestrutura de servidores cloud e balanceadores de carga.",
        "C) Ilustrar as funcionalidades do sistema a partir da perspectiva dos atores externos (usuários ou outros sistemas), mostrando quem interage com o quê.",
        "D) Controlar o versionamento de branches e merges no repositório Git."
    ], 
    "C", 
    "O Diagrama de Casos de Uso é uma ferramenta de análise de requisitos que descreve o comportamento do sistema sob o ponto de vista do usuário (ator), sem entrar em detalhes técnicos de implementação.", 
    "Utiliza elementos como atores (bonequinhos), elipses (casos de uso) e limites do sistema."
);

addQuestion(
    "UML", 
    "Média", 
    "Para que serve o relacionamento do tipo 'Include' (Inclusão) em um Diagrama de Casos de Uso?", 
    "Casos de Uso (Relacionamentos)", 
    [
        "A) Para indicar que um caso de uso é opcional e só executa se o usuário pagar uma taxa.",
        "B) Para indicar que o comportamento de um caso de uso base inclui obrigatoriamente a execução de outro caso de uso subtarefa (reutilização de comportamento obrigatório).",
        "C) Para herdar atributos e métodos de uma classe pai para uma classe filha.",
        "D) Para conectar o banco de dados relacional ao servidor backend."
    ], 
    "B", 
    "A relação `<<include>>` aponta que um fluxo principal sempre executa um subfluxo obrigatório (ex: o caso de uso 'Efetuar Pagamento' pode incluir obrigatoriamente o caso de uso 'Validar Token de Segurança').", 
    "Diferencia-se do `<<extend>>`, que modela comportamentos opcionais ou condicionais."
);

addQuestion(
    "UML", 
    "Média", 
    "Qual tipo de diagrama UML é mais adequado para representar a ordem cronológica de mensagens trocadas entre objetos ou atores?", 
    "Diagrama de Sequência", 
    [
        "A) Diagrama de Implantação",
        "B) Diagrama de Sequência",
        "C) Diagrama de Classes",
        "D) Diagrama de Componentes"
    ], 
    "B", 
    "O Diagrama de Sequência pertence à categoria de diagramas de interação, organizando os objetos na horizontal e o tempo na vertical para mostrar o fluxo dinâmico das chamadas de métodos.", 
    "É amplamente utilizado por desenvolvedores para documentar fluxos complexos de APIs e microsserviços."
);

addQuestion(
    "UML", 
    "Média", 
    "O que representa a visibilidade de um atributo ou método precedido pelo sinal de menos (`-`) em um Diagrama de Classes?", 
    "Visibilidade na UML", 
    [
        "A) Público (`public`); acessível por qualquer classe externa.",
        "B) Protegido (`protected`); acessível apenas pelas subclasses.",
        "C) Privado (`private`); acessível exclusivamente dentro da própria classe.",
        "D) Pacote (`package`); acessível apenas por classes do mesmo diretório."
    ], 
    "C", 
    "Na notação UML, o sinal de mais (`+`) indica visibilidade pública, o sustenido (`#`) indica protegida, o til (`~`) indica pacote e o menos (`-`) indica privada.", 
    "Esses símbolos ajudam a aplicar o princípio do encapsulamento na modelagem."
);

addQuestion(
    "UML", 
    "Média", 
    "Qual é o objetivo de um Diagrama de Atividades na UML?", 
    "Diagrama de Atividades", 
    [
        "A) Modelar o fluxo de controle lógico de processos, algoritmos ou fluxos de trabalho (workflows), funcionando como uma evolução sofisticada dos fluxogramas tradicionais.",
        "B) Descrever exclusivamente a arquitetura física de redes de computadores.",
        "C) Armazenar os logs de transações financeiras de um banco de dados.",
        "D) Representar a estrutura hierárquica de pastas de um projeto de software."
    ], 
    "A", 
    "O Diagrama de Atividades utiliza nós de ação, decisões (losangos) e barras de sincronização (fork/join) para modelar processos paralelos ou sequenciais, tanto de negócio quanto de software.", 
    "Excelente para modelar regras de negócio complexas com múltiplos desvios condicionais."
);

addQuestion(
    "UML", 
    "Média", 
    "O que modela um Diagrama de Estados (State Machine Diagram)?", 
    "Diagrama de Estados", 
    [
        "A) O estado financeiro e o balanço patrimonial da empresa desenvolvedora.",
        "B) O ciclo de vida de um objeto específico, mostrando os estados pelos quais ele passa, os eventos que disparam a mudança de estado e as ações associadas.",
        "C) A quantidade de servidores ativos em um cluster de computação em nuvem.",
        "D) As relações estáticas de herança entre várias classes do sistema."
    ], 
    "B", 
    "O Diagrama de Estados é ideal para objetos que mudam de comportamento drasticamente dependendo do momento (ex: um pedido que passa por: `Pendente` -> `Aprovado` -> `Enviado` -> `Entregue`).", 
    "Conecta-se intimamente com padrões de projeto como o State Pattern."
);

addQuestion(
    "UML", 
    "Média", 
    "Qual é a finalidade de um Diagrama de Implantação (Deployment Diagram)?", 
    "Diagrama de Implantação", 
    [
        "A) Mostrar a arquitetura física dos artefatos de software executados em nós de hardware (como servidores, dispositivos móveis e ambientes de nuvem).",
        "B) Detalhar o código fonte linha por linha em arquivos de extensão .java ou .cs.",
        "C) Descrever o passo a passo de uma tela de login para o usuário final.",
        "D) Listar os requisitos de negócio exigidos pelo Product Owner."
    ], 
    "A", 
    "O Diagrama de Implantação situa os componentes de software em suas respectivas infraestruturas físicas de hardware, mapeando conexões de rede e nós operacionais.", 
    "Pertence à categoria de diagramas estruturais voltados para a visão de infraestrutura."
);

addQuestion(
    "UML", 
    "Média", 
    "No contexto da UML, o que significa uma classe descrita em itálico ou com o modificador `<<abstract>>`?", 
    "Classes Abstratas na UML", 
    [
        "A) Uma classe que possui erros de sintaxe e não pode ser compilada.",
        "B) Uma classe abstrata, que serve como modelo base e não pode ser instanciada diretamente, exigindo que suas subclasses implementem seus métodos abstratos.",
        "C) Uma classe legada que foi descontinuada pelo desenvolvedor.",
        "D) Uma interface gráfica de usuário renderizada em formato web."
    ], 
    "B", 
    "Classes abstratas definem contratos genéricos e comportamentos parciais. Na UML, seus nomes aparecem em itálico ou acompanhados do estereótipo `<<abstract>>`.", 
    "Diferem das interfaces puras, embora ambas compartilhem a restrição de não permitirem instanciação direta com `new`."
);

addQuestion(
    "UML", 
    "Média", 
    "O que representa o relacionamento do tipo 'Extend' (Extensão) em um Diagrama de Casos de Uso?", 
    "Casos de Uso (Relacionamentos)", 
    [
        "A) Uma extensão de garantia contratual fornecida pelo fabricante do software.",
        "B) Um comportamento opcional ou condicional que é inserido em um caso de uso base sob determinadas circunstâncias.",
        "C) A herança direta de atributos entre tabelas de banco de dados relacionais.",
        "D) O encadeamento síncrono obrigatório de chamadas de métodos em uma API."
    ], 
    "B", 
    "A relação `<<extend>>` indica que um caso de uso secundário pode (ou não) estender o comportamento de um caso de uso base se uma condição específica for atendida (ex: 'Fazer Login' pode ser estendido por 'Enviar Código 2FA').", 
    "A seta aponta do caso de uso de extensão para o caso de uso base."
);

addQuestion(
    "UML", 
    "Média", 
    "Qual é a principal função de um Diagrama de Componentes na UML?", 
    "Diagrama de Componentes", 
    [
        "A) Mostrar a organização e as dependências entre os módulos de software, bibliotecas, executáveis e arquivos que compõem o sistema.",
        "B) Listar os componentes de hardware de uma placa-mãe de computador.",
        "C) Detalhar os componentes visuais de interface do usuário (botões, inputs e formulários HTML).",
        "D) Gerenciar a dependência de pacotes externos via gerenciadores como npm ou pip."
    ], 
    "A", 
    "O Diagrama de Componentes foca na arquitetura de alto nível baseada em blocos de software reutilizáveis e nas interfaces que eles expõem ou requerem.", 
    "Ajuda a visualizar a modularidade do sistema e o desacoplamento de partes."
);

addQuestion(
    "UML", 
    "Média", 
    "Como a herança (ou generalização) é representada graficamente em um Diagrama de Classes UML?", 
    "Relacionamentos UML", 
    [
        "A) Por uma linha tracejada com uma seta preta preenchida.",
        "B) Por uma linha contínua com uma ponta de seta fechada em forma de triângulo vazio apontando para a superclasse.",
        "C) Por um losango preenchido na ponta da classe filha.",
        "D) Por uma linha dupla com duas setas em sentidos apostos."
    ], 
    "B", 
    "A generalização estabelece que a subclasse herda características da superclasse. Na UML, a seta triangular vazia aponta sempre da classe especializada (filha) para a generalizada (pai).", 
    "Representa a famosa relação 'é um' (is-a)."
);

addQuestion(
    "UML", 
    "Média", 
    "O que indica a multiplicidade (como `1..*` ou `0..1`) colocada nas extremidades de uma associação em um Diagrama de Classes?", 
    "Multiplicidade na UML", 
    [
        "A) A quantidade de instâncias de uma classe que podem se relacionar com instâncias de outra classe.",
        "B) O número de linhas de código que cada método possui.",
        "C) A prioridade de execução das tarefas em um ambiente multithread.",
        "D) O consumo de memória RAM estimado para carregar o objeto."
    ], 
    "A", 
    "A multiplicidade define a cardinalidade do relacionamento. Por exemplo, `1` significa obrigatoriamente um, enquanto `0..*` significa de zero a muitos.", 
    "É fundamental para o mapeamento correto de cardinalidades em bancos de dados relacionais (1 para 1, 1 para N, N para N)."
);

addQuestion(
    "UML", 
    "Média", 
    "Qual é o propósito de um Diagrama de Comunicação (anteriormente chamado de Diagrama de Colaboração) na UML?", 
    "Diagrama de Comunicação", 
    [
        "A) Descrever o envio de e-mails de notificação automática aos usuários do sistema.",
        "B) Enfatizar a organização estrutural dos objetos que enviam e recebem mensagens, utilizando numeração sequencial para indicar a ordem das interações.",
        "C) Estabelecer protocolos de comunicação de rede TCP/IP.",
        "D) Controlar os chats e fóruns de suporte técnico de uma aplicação web."
    ], 
    "B", 
    "Enquanto o Diagrama de Sequência foca no eixo temporal, o Diagrama de Comunicação foca na disposição espacial dos objetos e nas ligações físicas/lógicas entre eles para trocar mensagens.", 
    "Ambos fazem parte da categoria de diagramas de interação da UML."
);

addQuestion(
    "UML", 
    "Média", 
    "O que representa o sinal de mais (`+`) antes de um atributo ou operação em um Diagrama de Classes?", 
    "Visibilidade na UML", 
    [
        "A) Visibilidade pública (`public`), permitindo acesso livre por qualquer outra classe.",
        "B) Operação matemática de adição ou incremento.",
        "C) Atributo obrigatório que não pode ser nulo.",
        "D) Indicador de que a classe possui múltiplos herdeiros."
    ], 
    "A", 
    "O modificador de acesso público (`+`) garante visibilidade irrestrita ao membro da classe a partir de qualquer ponto do projeto.", 
    "Faz parte do conjunto padrão de visibilidade junto com `-` (privado), `#` (protegido) e `~` (pacote)."
);

addQuestion(
    "UML", 
    "Média", 
    "O que caracteriza uma Interface na UML, geralmente representada pelo estereótipo `<<interface>>` ou por um círculo?", 
    "Interfaces na UML", 
    [
        "A) Uma classe completa com código funcional pronto para ser executado.",
        "B) Um conjunto de operações públicas que especifica um serviço de uma classe ou componente, sem conter implementações próprias de código.",
        "C) Uma tela gráfica de interface com o usuário construída em React ou Angular.",
        "D) Um driver de conexão proprietário para banco de dados relacional."
    ], 
    "B", 
    "Interfaces definem contratos que as classes devem cumprir ao implementá-las, contendo apenas assinaturas de métodos e constantes.", 
    "Promovem o princípio do acoplamento frouxo e da inversão de dependência."
);

addQuestion(
    "UML", 
    "Média", 
    "Para que serve um Diagrama de Visão Geral de Interação (Interaction Overview Diagram)?", 
    "Visão Geral de Interação", 
    [
        "A) Unir elementos de diagramas de atividades e diagramas de sequência para modelar o fluxo de controle de interações de forma macro.",
        "B) Substituir completamente o manual do usuário de um software comercial.",
        "C) Gerenciar o fluxo de caixa financeiro de projetos de TI.",
        "D) Exibir unicamente a tabela de rotas de uma API REST."
    ], 
    "A", 
    "Ele combina a estrutura de controle de um diagrama de atividades com nós que contêm fragmentos de diagramas de interação.", 
    "É um dos diagramas comportamentais mais avançados e menos comuns da UML."
);

addQuestion(
    "UML", 
    "Média", 
    "O que significa o conceito de Polimorfismo no contexto da orientação a objetos modelada em UML?", 
    "Conceitos de OO / UML", 
    [
        "A) A capacidade de um objeto assumir múltiplas formas de hardware.",
        "B) A habilidade de diferentes classes responderem à mesma mensagem (mesmo método) de maneiras específicas para cada uma delas.",
        "C) A duplicação acidental de código em múltiplos arquivos do projeto.",
        "D) A conversão automática de tipos de dados primitivos em strings."
    ], 
    "B", 
    "O polimorfismo permite que subclasses reescrevam (sobreponham) métodos herdados da superclasse, garantindo flexibilidade e extensibilidade ao sistema.", 
    "É um dos pilares fundamentais da programação orientada a objetos junto com encapsulamento e herança."
);

addQuestion(
    "UML", 
    "Média", 
    "Qual elemento da UML é utilizado para agrupar elementos correlacionados do modelo em blocos lógicos de gerenciamento, como pacotes de código?", 
    "Diagrama de Pacotes", 
    [
        "A) Caixa de areia (Sandbox)",
        "B) Pacote (Package), representado graficamente pelo ícone de uma pasta de arquivos",
        "C) Contêiner Docker",
        "D) Módulo estrito de compilação"
    ], 
    "B", 
    "Os pacotes ajudam a organizar modelos complexos em namespaces gerenciáveis, reduzindo a complexidade visual e estrutural do projeto.", 
    "Podem ser aplicados em qualquer tipo de diagrama UML para organizar elementos."
);

addQuestion(
    "UML", 
    "Média", 
    "O que indica o símbolo de `#` (sustenido) antes de um membro de classe em um Diagrama de Classes UML?", 
    "Visibilidade na UML", 
    [
        "A) Visibilidade protegida (`protected`); o membro é acessível na própria classe e em suas subclasses.",
        "B) Um número sequencial para identificação de hash no banco de dados.",
        "C) Que o método é estático (`static`) e compartilhado.",
        "D) Que a propriedade é obsoleta."
    ], 
    "A", 
    "O modificador `#` protege o atributo ou método contra acessos externos gerais, mas permite visibilidade para herdeiros diretos.", 
    "Complementa o conjunto de visibilidades junto com `+`, `-` e `~`."
);

addQuestion(
    "UML", 
    "Média", 
    "No Diagrama de Sequência, o que representa a linha tracejada vertical que desce a partir de um objeto ou ator?", 
    "Diagrama de Sequência", 
    [
        "A) Linha de Vida (Lifeline), indicando a existência do objeto ao longo do eixo temporal.",
        "B) Conexão de rede sem fio (Wi-Fi) com o servidor.",
        "C) Um erro de execução em tempo de compilação.",
        "D) O canal de log de depuração."
    ], 
    "A", 
    "A linha de vida mostra o período de tempo em que o objeto permanece ativo e participando das interações descritas no diagrama.", 
    "A caixa retangular no topo representa a instância do objeto."
);

addQuestion(
    "UML", 
    "Média", 
    "O que significam os blocos condicionais como `alt`, `loop` e `opt` em um Diagrama de Sequência UML?", 
    "Diagrama de Sequência", 
    [
        "A) Atalhos de teclado para edição do diagrama.",
        "B) Fragmentos combinados (Combined Fragments) que permitem modelar lógica de controle avançada (alternativas condicionais, repetições e opções).",
        "C) Funções matemáticas avançadas de otimização de código.",
        "D) Métodos deprecados de bibliotecas antigas."
    ], 
    "B", 
    "Os fragmentos combinados evitam a necessidade de criar diagramas separados para cada fluxo lógico alternativo, agrupando blocos de mensagens sob regras lógicas.", 
    "São essenciais para representar fluxos lógicos complexos baseados em desvios."
);

addQuestion(
    "UML", 
    "Média", 
    "Qual é a principal função de um Diagrama de Tempo (Timing Diagram) na UML?", 
    "Diagrama de Tempo", 
    [
        "A) Medir o tempo de resposta de requisições HTTP em servidores web.",
        "B) Focar nas mudanças de estado de um objeto ao longo do tempo e nas restrições temporais entre eventos.",
        "C) Cronometrar o tempo de desenvolvimento de uma sprint ágil.",
        "D) Gerenciar fuso horário em aplicações distribuídas globais."
    ], 
    "B", 
    "O Diagrama de Tempo é uma forma especializada de diagrama de interação que prioriza o eixo temporal linear para sistemas de tempo real ou embarcados.", 
    "Muito utilizado em sistemas ciber-físicos e automação industrial."
);

addQuestion(
    "UML", 
    "Média", 
    "O que representa o símbolo de `~` (til) antes de um atributo ou método em um Diagrama de Classes?", 
    "Visibilidade na UML", 
    [
        "A) Visibilidade de pacote (`package` ou default); acessível apenas por classes pertencentes ao mesmo pacote.",
        "B) Operação de negação lógica (NOT).",
        "C) Dado corrompido ou temporário.",
        "D) Atributo criptografado."
    ], 
    "A", 
    "A visibilidade de pacote restringe o acesso aos limites lógicos do namespace (pasta/pacote) onde a classe está declarada.", 
    "Corresponde ao modificador padrão em linguagens como Java quando nenhum outro modificador é explícito."
);

addQuestion(
    "UML", 
    "Média", 
    "O que é uma Classe Associativa em um Diagrama de Classes UML?", 
    "Relacionamentos UML", 
    [
        "A) Uma classe que armazena informações extras referentes unicamente a um relacionamento de associação N para N entre outras duas classes.",
        "B) Uma classe que une dois bancos de dados distintos.",
        "C) Um erro de modelagem que deve ser evitado a todo custo.",
        "D) Uma classe filha que herda de múltiplas superclasses simultaneamente."
    ], 
    "A", 
    "Quando um relacionamento N para N precisa carregar atributos próprios (ex: a associação entre `Aluno` e `Curso` precisa do atributo `Nota`), utiliza-se uma classe associativa conectada por uma linha tracejada.", 
    "Resolve a necessidade de armazenar dados que pertencem à relação e não às entidades isoladas."
);

addQuestion(
    "UML", 
    "Média", 
    "Em um Diagrama de Atividades, qual elemento representa um ponto de decisão ou ramificação condicional?", 
    "Diagrama de Atividades", 
    [
        "A) Um círculo preenchido em preto",
        "B) Um losango (Diamond) com múltiplos caminhos de saída rotulados por guardas condicionais",
        "C) Uma barra retangular preta espessa",
        "D) Um retângulo com bordas arredondadas"
    ], 
    "B", 
    "O losango funciona como um desvio onde o fluxo de execução segue apenas pelo caminho cuja condição (guarda) seja verdadeira.", 
    "Equivale conceitualmente ao comando `if/else` ou `switch` da programação."
);

addQuestion(
    "UML", 
    "Média", 
    "O que representam as barras de sincronização (Fork e Join) em um Diagrama de Atividades?", 
    "Diagrama de Atividades", 
    [
        "A) O início e o fim absoluto do sistema operacional.",
        "B) Barras pretas grossas utilizadas para dividir um fluxo único em múltiplos fluxos concorrentes (Fork) ou unir múltiplos fluxos concorrentes em um só (Join).",
        "C) Conexões de rede física via cabo de fibra óptica.",
        "D) O ponto de salvamento automático de arquivos."
    ], 
    "B", 
    "Elas permitem modelar processamento paralelo e multithreading, garantindo que tarefas paralelas sejam iniciadas juntas ou aguardem a conclusão umas das outras.", 
    "Essenciais para fluxos de trabalho que ocorrem simultaneamente."
);

addQuestion(
    "UML", 
    "Média", 
    "Qual é o objetivo de um Diagrama de Estrutura Composicionais (Composite Structure Diagram)?", 
    "Estrutura Composicional", 
    [
        "A) Mostrar a estrutura interna de um classificador (como uma classe, componente ou nó), incluindo suas partes, portas e conectores.",
        "B) Compor músicas de fundo para o software.",
        "C) Organizar arquivos compactados em formato ZIP ou RAR.",
        "D) Estruturar tabelas de layout CSS em páginas web."
    ], 
    "A", 
    "Ele detalha o interior de classes complexas que possuem arquiteturas internas de colaboração de instâncias acopladas.", 
    "Aprofunda a visão estrutural além dos atributos e operações tradicionais."
);

addQuestion(
    "UML", 
    "Média", 
    "O que significa o conceito de Dependência (representado por uma seta tracejada) em diagramas UML?", 
    "Relacionamentos UML", 
    [
        "A) Que a classe cliente sofre de acoplamento permanente de herança múltipla.",
        "B) Que uma mudança na especificação de um elemento (fornecedor) pode afetar o outro elemento que o utiliza (cliente), sem que haja uma associação estrutural permanente.",
        "C) Que o código possui erros de compilação pendentes.",
        "D) Que os arquivos dependem de conexão com a internet."
    ], 
    "B", 
    "A dependência é um relacionamento de uso mais fraco que a associação (ex: uma classe usa outra como parâmetro de método ou tipo de retorno local).", 
    "Representada graficamente por uma linha tracejada com seta aberta."
);

addQuestion(
    "UML", 
    "Média", 
    "O que é um 'Ator' (Actor) em um Diagrama de Casos de Uso?", 
    "Diagrama de Casos de Uso", 
    [
        "A) Um ator de cinema contratado para fazer o marketing do software.",
        "B) Um papel desempenhado por um usuário externo, hardware ou outro sistema que interage diretamente com o sistema em desenvolvimento.",
        "C) Uma função interna privada executada pelo banco de dados.",
        "D) O desenvolvedor sênior responsável pela codificação."
    ], 
    "B", 
    "Atores representam entidades externas que iniciam ou recebem interações do sistema, sendo tipicamente representados por um boneco palito.", 
    "Não fazem parte do sistema em si, mas delimitam o escopo de uso."
);

addQuestion(
    "UML", 
    "Média", 
    "Qual é a finalidade do Limite do Sistema (System Boundary) em um Diagrama de Casos de Uso?", 
    "Diagrama de Casos de Uso", 
    [
        "A) Delimitar visualmente o escopo do sistema que está sendo construído, separando o que está dentro do sistema (casos de uso) do que está fora (atores).",
        "B) Limitar a quantidade máxima de usuários logados simultaneamente.",
        "C) Proteger o sistema contra ataques cibernéticos de firewall.",
        "D) Definir o orçamento financeiro do projeto."
    ], 
    "A", 
    "O retângulo delimitador define claramente os limites funcionais do software em questão, facilitando a gestão de requisitos e escopo.", 
    "Ajuda a evitar a expansão descontrolada de escopo (scope creep)."
);

addQuestion(
    "UML", 
    "Média", 
    "No contexto de diagramas UML, o que representa a Orientação a Objetos no tocante ao Encapsulamento?", 
    "Conceitos de OO / UML", 
    [
        "A) A ocultação dos detalhes internos de funcionamento de um objeto, expondo apenas uma interface pública controlada.",
        "B) A compactação de arquivos binários para economia de disco.",
        "C) O armazenamento de dados em nuvem criptografada.",
        "D) A proteção de copyright da marca do software."
    ], 
    "A", 
    "O encapsulamento protege o estado interno do objeto contra modificações externas indevidas, permitindo alteração interna sem quebrar o código cliente.", 
    "É diretamente mapeado na UML através dos modificadores de visibilidade (+, -, #, ~)."
);

addQuestion(
    "UML", 
    "Média", 
    "O que representa uma Operação Abstrata (ou método abstrato) em uma classe UML?", 
    "Classes Abstratas na UML", 
    [
        "A) Um método que possui código completo altamente otimizado.",
        "B) Um método que possui apenas a assinatura definida na superclasse, exigindo obrigatoriamente que as subclasses concretas forneçam a implementação.",
        "C) Um método que foi deletado do sistema.",
        "D) Um método executado automaticamente em segundo plano."
    ], 
    "B", 
    "Métodos abstratos definem contratos obrigatórios que garantem que todas as subclasses compartilhem o mesmo comportamento polimórfico adaptado.", 
    "Aparecem em itálico nos diagramas de classes."
);

addQuestion(
    "UML", 
    "Média", 
    "Qual é a utilidade do Diagrama de Perfil (Profile Diagram) na UML?", 
    "Diagrama de Perfil", 
    [
        "A) Criar perfis de acesso e senhas para os administradores do sistema.",
        "B) Permitir a personalização e extensão de modelos UML através de estereótipos, tags e restrições para domínios específicos.",
        "C) Analisar o perfil de consumo de memória RAM do servidor.",
        "D) Criar redes sociais corporativas."
    ], 
    "B", 
    "Os perfis estendem a metamodelação padrão da UML para atender a nichos específicos (como modelagem de banco de dados ou sistemas embarcados).", 
    "Permite criar metadados customizados."
);

addQuestion(
    "UML", 
    "Média", 
    "O que caracteriza a Multiplicidade '0..*' em uma associação UML?", 
    "Multiplicidade na UML", 
    [
        "A) Exatamente zero ou uma ocorrência.",
        "B) Zero ou mais ocorrências (nenhuma ou quantas forem necessárias).",
        "C) Obrigatoriamente muitas ocorrências, com mínimo de uma.",
        "D) Intervalo fechado exclusivo de dez itens."
    ], 
    "B", 
    "Indica opcionalidade total de instâncias na outra ponta da associação, permitindo coleções vazias ou com múltiplos elementos.", 
    "Corresponde a listas ou arrays que podem estar vazios no código."
);

addQuestion(
    "UML", 
    "Média", 
    "Qual é a principal diferença entre um Diagrama de Estados e um Diagrama de Atividades?", 
    "Diagramas Comportamentais", 
    [
        "A) O Diagrama de Estados foca nos estados de um único objeto e nos eventos que mudam esses estados; o Diagrama de Atividades foca no fluxo de controle procedimental de processos ou algoritmos.",
        "B) O Diagrama de Estados é feito em formato 3D e o de atividades em 2D.",
        "C) Não há diferença; são sinônimos perfeitos na especificação UML.",
        "D) O Diagrama de Estados é voltado apenas para hardware e o de atividades para software."
    ], 
    "A", 
    "Enquanto o diagrama de estados descreve o ciclo de vida reativo de uma entidade baseada em eventos, o diagrama de atividades modela uma sequência linear ou paralela de passos executados.", 
    "Ambos descrevem comportamento dinâmico, mas sob perspectivas distintas."
);

addQuestion(
    "UML", 
    "Média", 
    "O que é uma Classe Concreta na UML em oposição a uma Classe Abstrata?", 
    "Classes na UML", 
    [
        "A) Uma classe construída de concreto armado para infraestrutura física.",
        "B) Uma classe que pode ser instanciada diretamente (criar objetos com `new`), pois possui implementações para todas as suas operações.",
        "C) Uma classe que não possui atributos, apenas comentários.",
        "D) Uma classe legada que não pode mais ser modificada."
    ], 
    "B", 
    "Classes concretas implementam todos os contratos herdados e estão prontas para gerar instâncias em tempo de execução.", 
    "Seus nomes aparecem com fonte normal (não em itálico)."
);

addQuestion(
    "UML", 
    "Média", 
    "No contexto de modelagem de dados, como uma chave estrangeira (Foreign Key) costuma ser representada em um Diagrama de Classes UML?", 
    "Diagrama de Classes", 
    [
        "A) Através de linhas de associação diretas entre as classes com multiplicidades corretas, em vez de expor apenas o ID bruto como atributo isolado.",
        "B) Através de linhas vermelhas tracejadas com marca d'água.",
        "C) Não pode ser representada de nenhuma forma na UML.",
        "D) Apenas utilizando comentários textuais."
    ], 
    "A", 
    "A UML prioriza relacionamentos orientados a objetos (Associações) em vez de depender estritamente de chaves estrangeiras primitivas, embora atributos de ID possam coexistir.", 
    "Facilita a transição do modelo conceitual para o objeto-relacional."
);

addQuestion(
    "UML", 
    "Média", 
    "Qual é a principal vantagem de utilizar a UML (Linguagem de Modelagem Unificada) em projetos de software corporativos?", 
    "Fundamentos da UML", 
    [
        "A) Garantir que o sistema seja compilado automaticamente sem bugs.",
        "B) Fornecer uma notação padronizada, rica e visual para especificar, construir e documentar os artefatos de um sistema de software, facilitando a comunicação da equipe.",
        "C) Substituir totalmente a necessidade de escrever código de programação.",
        "D) Reduzir o custo de aquisição de licenças de servidores em nuvem."
    ], 
    "B", 
    "A UML atua como uma 'planta baixa' padronizada da engenharia de software, permitindo alinhar arquitetos, desenvolvedores, testadores e analistas de negócios.", 
    "Padronizada pela OMG (Object Management Group)."
);


/* =====================================================
    ARQUITETURA DE SOFTWARE - 40 QUESTÕES
===================================================== */

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "Qual é o principal objetivo da Arquitetura Limpa (Clean Architecture), proposta por Robert C. Martin (Uncle Bob)?", 
    "Clean Architecture", 
    [
        "A) Garantir que o banco de dados relacional seja o núcleo central e inalterável de toda a regra de negócio da aplicação.",
        "B) Separar as preocupações do software em camadas concêntricas, onde as dependências apontam sempre de fora para dentro (as regras de negócio centrais não conhecem detalhes de framework, UI ou banco de dados).",
        "C) Automatizar a criação de arquivos CSS e scripts de estilização para o front-end.",
        "D) Substituir a orientação a objetos tradicional por programação puramente funcional em servidores web."
    ], 
    "B", 
    "A Clean Architecture isola o domínio (regras de negócio) de agentes externos como frameworks, banco de dados ou interfaces de usuário, garantindo alta testabilidade e independência tecnológica.", 
    "A Regra de Dependência é o pilar fundamental: código de círculos externos pode conhecer círculos internos, mas nunca o inverso."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "No contexto da Arquitetura Hexagonal (também conhecida como Ports and Adapters), qual é a função das Portas (Ports) e dos Adaptadores (Adapters)?", 
    "Arquitetura Hexagonal", 
    [
        "A) As portas são gabinetes de servidores físicos e os adaptadores são cabos de rede de fibra ótica.",
        "B) As portas definem interfaces abstratas de entrada e saída para a aplicação, enquanto os adaptadores implementam essas portas para conectar o núcleo de negócio a tecnologias externas específicas (como REST APIs, bancos SQL ou filas).",
        "C) As portas controlam o roteamento de telas no front-end e os adaptadores gerenciam folhas de estilo.",
        "D) As portas substituem completamente a necessidade de testes unitários automatizados."
    ], 
    "B", 
    "A Arquitetura Hexagonal isola o núcleo da aplicação (Domain) permitindo que ele seja acionado ou acione o mundo exterior através de Portas (contratos) e Adaptadores (implementações concretas de I/O).", 
    "Isso facilita a troca de um banco de dados ou framework sem alterar uma única linha da regra de negócio."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "Quais são as características fundamentais que definem o estilo de Arquitetura de Microsserviços em comparação com uma aplicação Monolítica?", 
    "Microsserviços vs Monolito", 
    [
        "A) Microsserviços rodam obrigatoriamente na mesma máquina física e compartilham a mesma base de dados centralizada.",
        "B) Uma aplicação é estruturada como um conjunto de pequenos serviços independentes, cada um executando em seu próprio processo, comunicando-se via mecanismos leves (geralmente HTTP/REST ou gRPC) e podendo ser implantados de forma autônoma.",
        "C) Microsserviços eliminam a necessidade de testes automatizados e integração contínua.",
        "D) Monolitos são sempre modernos e escaláveis, enquanto microsserviços são usados apenas em sistemas legados."
    ], 
    "B", 
    "Microsserviços promovem o desacoplamento organizacional e técnico, permitindo que diferentes equipes desenvolvam, escalem e façam deploy de serviços de forma independente.", 
    "Em contrapartida, introduzem complexidade distribuída em áreas como consistência de dados, latência de rede e observabilidade."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que caracteriza o padrão arquitetural MVC (Model-View-Controller)?", 
    "Padrão MVC", 
    [
        "A) A união de todas as regras de banco de dados, layout visual e lógica de controle em um único arquivo de código executável.",
        "B) A separação de responsabilidades em três componentes: o Model (dados e lógica de negócio), a View (interface de apresentação visual) e o Controller (intermediário que gerencia as entradas do usuário e atualiza o Model/View).",
        "C) Um padrão exclusivo para bancos de dados NoSQL distribuídos.",
        "D) Uma técnica de criptografia de ponta para requisições HTTP."
    ], 
    "B", 
    "O MVC é um dos padrões mais clássicos da engenharia de software, promovendo a separação entre a representação visual dos dados, a interface de controle e a lógica estrutural.", 
    "Serve de base conceitual para diversos frameworks web modernos (como Spring MVC, ASP.NET Core MVC, Laravel, entre outros)."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que propõe o padrão arquitetural CQRS (Command Query Responsibility Segregation)?", 
    "CQRS", 
    [
        "A) Utilizar a mesma tabela e o mesmo modelo de objetos tanto para operações pesadas de escrita quanto para consultas simples de leitura.",
        "B) Separar rigorosamente os modelos e operações de leitura (Queries) dos modelos e operações de escrita/atualização (Commands), permitindo otimizar cada lado de forma independente.",
        "C) Sincronizar dados exclusivamente via arquivos de texto plano em lotes diários.",
        "D) Substituir servidores web tradicionais por funções serverless."
    ], 
    "B", 
    "Em sistemas de alta escala, as necessidades de leitura diferem drasticamente das de escrita. O CQRS permite escalar e otimizar bancos de dados de leitura separadamente das bases transacionais de escrita.", 
    "Muitas vezes é combinado com o padrão Event Sourcing para rastrear o estado do sistema através de eventos."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "No contexto de Arquitetura Orientada a Microsserviços, qual é o objetivo do padrão 'API Gateway'?", 
    "API Gateway", 
    [
        "A) Substituir os bancos de dados relacionais por tabelas em cache.",
        "B) Atuar como um ponto único de entrada (proxy reverso) para todas as requisições dos clientes, lidando com roteamento, autenticação, controle de taxa (rate limiting), SSL termination e agregação de respostas.",
        "C) Executar testes de carga automatizados direto no servidor de produção.",
        "D) Gerenciar o versionamento de código no repositório GitHub."
    ], 
    "B", 
    "O API Gateway oculta a topologia interna dos microsserviços dos clientes externos, fornecendo uma fachada unificada que simplifica o consumo e centraliza políticas transversais de segurança.", 
    "Evita que clientes móveis precisem fazer dezenas de requisições diretas a microsserviços internos diferentes."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que caracteriza uma Arquitetura Orientada a Eventos (Event-Driven Architecture - EDA)?", 
    "Event-Driven Architecture", 
    [
        "A) Os serviços comunicam-se estritamente de forma síncrona através de chamadas HTTP bloqueantes encadeadas.",
        "B) A produção, detecção e consumo de eventos ocorrem de forma assíncrona entre componentes desacoplados, permitindo reatividade imediata e alta escalabilidade por meio de brokers de mensagens (como Kafka ou RabbitMQ).",
        "C) O sistema aguarda o encerramento manual do operador para processar qualquer dado.",
        "D) As regras de negócio ficam centralizadas em um único banco de dados monolítico."
    ], 
    "B", 
    "Na EDA, um componente publica um fato ocorrido (evento) sem se preocupar com quem vai consumi-lo, promovendo um desacoplamento temporal e espacial extremo entre os serviços.", 
    "É ideal para arquiteturas reativas e sistemas que lidam com grandes volumes de dados em tempo real."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que avalia a métrica de 'Acoplamento' (Coupling) na arquitetura de software?", 
    "Acoplamento e Coesão", 
    [
        "A) O grau de interconexão entre diferentes módulos ou classes de um sistema; quanto menor o acoplamento, mais independentes e fáceis de modificar os módulos são.",
        "B) A quantidade de linhas de código que cada desenvolvedor escreve por dia.",
        "C) O espaço em disco ocupado pelos arquivos binários da aplicação compilada.",
        "D) A velocidade de execução dos testes unitários em milissegundos."
    ], 
    "A", 
    "Um baixo acoplamento é altamente desejável, pois alterações em um módulo não quebram os demais.", 
    "Deve sempre caminhar junto com a alta coesão (módulos que fazem uma única coisa bem feita)."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "Qual é a principal proposta da Arquitetura Orientada a Serviços (SOA - Service-Oriented Architecture)?", 
    "SOA", 
    [
        "A) Desenvolver aplicações monolíticas gigantescas sem divisão de componentes.",
        "B) Estruturar o software em serviços interoperáveis e reutilizáveis que se comunicam através de um barramento central de integração (ESB - Enterprise Service Bus) e protocolos padronizados.",
        "C) Executar códigos exclusivamente no navegador web do cliente.",
        "D) Eliminar o uso de bancos de dados relacionais em corporações."
    ], 
    "B", 
    "A SOA precursora dos microsserviços focava fortemente na integração empresarial e reutilização de serviços corporativos, frequentemente utilizando SOAP, XML e o ESB.", 
    "Enquanto a SOA foca em compartilhamento e integração corporativa, os microsserviços focam em autonomia e descentralização."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que define a Arquitetura em Camadas (Layered Architecture ou N-Tier)?", 
    "Arquitetura em Camadas", 
    [
        "A) Organizar o software em bandas horizontais superpostas (ex: Apresentação, Negócio/Domínio, Persistência/Dados), onde cada camada presta serviços para a camada imediatamente superior.",
        "B) Dividir o sistema em pequenos processos independentes distribuídos em servidores cloud.",
        "C) Executar o código de forma estritamente funcional sem estados internos.",
        "D) Agrupar classes por funcionalidades de negócio verticais independentes."
    ], 
    "A", 
    "A arquitetura em camadas tradicional organiza o sistema de forma técnica e horizontal. É amplamente compreendida, embora exija cuidado para evitar o vazamento de regras de negócio entre as camadas.", 
    "É o ponto de partida arquitetural mais comum para sistemas corporativos tradicionais."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que caracteriza o padrão arquitetural Publisher-Subscriber (Pub/Sub)?", 
    "Padrão Pub/Sub", 
    [
        "A) Os emissores de mensagens enviam dados diretamente para um único cliente de forma síncrona e bloqueante.",
        "B) Os emissores (publishers) enviam mensagens a um canal ou tópico sem conhecer os destinatários (subscribers), e a infraestrutura de mensageria encaminha as cópias aos interessados.",
        "C) Um banco de dados relacional centralizado onde todos os clientes realizam leitura e escrita síncrona.",
        "D) Uma técnica de renderização de páginas HTML no lado do cliente."
    ], 
    "B", 
    "O padrão Pub/Sub desacopla severamente quem produz a informação de quem a consome, permitindo múltiplos assinantes dinâmicos sem alterar o publicador.", 
    "É altamente empregado em sistemas de streaming de dados e mensageria distribuída."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que significa a sigla SOLID no contexto de design de software orientado a objetos?", 
    "Princípios SOLID", 
    [
        "A) Cinco princípios fundamentais de design (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) que facilitam a manutenção e testabilidade.",
        "B) Cinco regras obrigatórias de estruturação de tabelas em bancos de dados relacionais.",
        "C) Cinco padrões para criptografia de senhas em sistemas web.",
        "D) Uma metodologia ágil focada exclusivamente em reuniões diárias de equipe."
    ], 
    "A", 
    "Os princípios SOLID ajudam arquitetos e desenvolvedores a escreverem código altamente modular, flexível, de baixo acoplamento e fácil de estender.", 
    "São a base essencial para arquiteturas limpas e sustentáveis a longo prazo."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que estabelece o Princípio da Responsabilidade Única (Single Responsibility Principle - SRP)?", 
    "Princípios SOLID", 
    [
        "A) Uma classe deve ter apenas um, e apenas um, motivo para mudar, significando que ela deve concentrar-se em uma única parte da funcionalidade do software.",
        "B) Um sistema inteiro deve consistir em apenas um arquivo de código-fonte principal.",
        "C) Toda função deve executar exatamente uma linha de comando antes de retornar.",
        "D) Uma aplicação deve possuir apenas um desenvolvedor responsável por sua manutenção."
    ], 
    "A", 
    "O SRP evita que classes fiquem sobrecarregadas com múltiplas responsabilidades não relacionadas, reduzindo o impacto de futuras alterações.", 
    "Se uma classe lida com lógica de negócio e persistência ao mesmo tempo, ela viola o SRP."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que determina o Princípio Aberto/Fechado (Open/Closed Principle - OCP)?", 
    "Princípios SOLID", 
    [
        "A) As entidades de software devem ser abertas para extensão, mas fechadas para modificação.",
        "B) O código-fonte de um sistema deve permanecer sempre aberto na internet, mas fechado para edições locais.",
        "C) Funções públicas devem ser abertas para chamadas externas e fechadas para testes internos.",
        "D) Bancos de dados devem ser abertos a leituras e fechados para escrituras simultâneas."
    ], 
    "A", 
    "O OCP permite adicionar novas funcionalidades ao sistema criando novos códigos (extensão) em vez de alterar códigos antigos já testados e funcionais (modificação).", 
    "Geralmente é alcançado através do uso de interfaces, classes abstratas e polimorfismo."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que postula o Princípio da Substituição de Liskov (Liskov Substitution Principle - LSP)?", 
    "Princípios SOLID", 
    [
        "A) Objetos em um programa devem ser substituíveis por instâncias de seus subtipos sem alterar a correção ou o comportamento esperado do programa.",
        "B) Subclasses devem sempre lançar exceções quando herdarem métodos de classes pai.",
        "C) Herança de classes deve ser evitada em favor de funções estáticas globais.",
        "D) Variáveis globais podem substituir parâmetros de métodos em qualquer situação."
    ], 
    "A", 
    "O LSP garante que uma classe derivada atenda rigorosamente ao contrato estabelecido pela classe base, evitando comportamentos inesperados ao usar polimorfismo.", 
    "Violar o LSP costuma gerar erros sutis em tempo de execução."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "Qual é o objetivo do Princípio da Segregação de Interfaces (Interface Segregation Principle - ISP)?", 
    "Princípios SOLID", 
    [
        "A) Forçar classes a implementarem interfaces grandes e genéricas com dezenas de métodos.",
        "B) Muitas interfaces específicas são melhores do que uma única interface genérica e volumosa, evitando que clientes dependam de métodos que não utilizam.",
        "C) Segregar a interface gráfica do usuário do banco de dados relacional.",
        "D) Isolar redes corporativas usando firewalls baseados em portas físicas."
    ], 
    "B", 
    "O ISP evita o acoplamento desnecessário a métodos irrelevantes, mantendo os contratos coesos e focados nas necessidades reais de cada cliente.", 
    "Interfaces enxutas facilitam implementações mockadas em testes unitários."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que determina o Princípio da Inversão de Dependência (Dependency Inversion Principle - DIP)?", 
    "Princípios SOLID", 
    [
        "A) Módulos de alto nível não devem depender de módulos de baixo nível; ambos devem depender de abstrações. Além disso, abstrações não devem depender de detalhes.",
        "B) O banco de dados deve controlar diretamente a lógica de negócio central.",
        "C) Dependências circulares entre pacotes são obrigatórias para otimizar compilações.",
        "D) Classes concretas devem instanciar diretamente suas dependências internas usando 'new'."
    ], 
    "A", 
    "O DIP desacopla os componentes principais das implementações tecnológicas voláteis, injetando interfaces ou contratos em vez de acoplar classes concretas.", 
    "É o princípio base que sustenta a Injeção de Dependência e arquiteturas desacopladas."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que avalia a métrica de 'Coesão' (Cohesion) em um módulo de software?", 
    "Acoplamento e Coesão", 
    [
        "A) O grau em que os elementos internos de um módulo pertencem uns aos outros e trabalham juntos para realizar uma única tarefa bem definida.",
        "B) O volume de conexões de rede entre servidores distribuidos na nuvem.",
        "C) A quantidade de dependências externas que uma biblioteca possui no arquivo package.json.",
        "D) O tempo necessário para compilar todo o código-fonte."
    ], 
    "A", 
    "Busca-se sempre alta coesão dentro de módulos ou classes, garantindo que suas responsabilidades sejam estritamente focadas e coesas.", 
    "Alta coesão combinada com baixo acoplamento é o padrão ouro do design de software."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que caracteriza o padrão arquitetural Domain-Driven Design (DDD)?", 
    "Domain-Driven Design", 
    [
        "A) Um foco em modelar o software em torno do domínio de negócio complexo, utilizando uma Linguagem Ubíqua compartilhada entre especialistas de negócio e desenvolvedores.",
        "B) Uma técnica exclusiva para otimizar consultas SQL em bancos de dados relacionais legados.",
        "C) Um framework JavaScript voltado para criação de interfaces de usuário reativas.",
        "D) Uma metodologia de infraestrutura focada apenas em servidores físicos on-premise."
    ], 
    "A", 
    "O DDD prioriza o núcleo do negócio, modelando entidades, value objects, agregados e repositórios para refletir fielmente as regras e processos da empresa.", 
    "Ajuda a lidar com alta complexidade de domínios corporativos."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "No contexto de Domain-Driven Design (DDD), o que é um 'Agregado' (Aggregate)?", 
    "Domain-Driven Design", 
    [
        "A) Um cluster de objetos de domínio associados que tratamos como uma unidade única para fins de alteração de dados, tendo uma Entidade raiz (Aggregate Root).",
        "B) Uma tabela temporária de auditoria em um banco NoSQL.",
        "C) Um grupo de servidores web balanceados por carga.",
        "D) Um arquivo de configuração de build em ferramentas como Maven ou Gradle."
    ], 
    "A", 
    "O Aggregate define limites claros de consistência transacional, garantindo que invariantes de negócio sejam mantidas dentro do limite do agregado.", 
    "Modificações externas devem sempre passar pela raiz do agregado (Aggregate Root)."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que define o padrão arquitetural Microkernel (ou Arquitetura Plugável)?", 
    "Padrão Microkernel", 
    [
        "A) Um núcleo central minimalista que fornece apenas as funcionalidades sistêmicas fundamentais, complementado por módulos ou plugins independentes que adicionam recursos específicos.",
        "B) Um sistema operacional completo rodando dentro de um navegador web.",
        "C) Uma aplicação monolítica sem nenhuma separação de pacotes.",
        "D) Um banco de dados distribuído sem suporte a transações ACID."
    ], 
    "A", 
    "O padrão Microkernel é muito utilizado em IDEs (como VS Code ou Eclipse) e sistemas operacionais, onde funcionalidades extras são adicionadas via extensões.", 
    "Permite alta extensibilidade e isolamento de funcionalidades opcionais."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que caracteriza uma Arquitetura Baseada em Espaços (Space-Based Architecture)?", 
    "Space-Based Architecture", 
    [
        "A) Um estilo arquitetural projetado para escalar horizontalmente de forma extrema através da remoção de gargalos de banco de dados centralizado, utilizando dados em memória (in-memory data grids) e processamento paralelo.",
        "B) Uma arquitetura restrita apenas a sistemas de controle de satélites espaciais.",
        "C) O armazenamento de dados exclusivamente em discos rígidos físicos externos.",
        "D) Uma aplicação que roda inteiramente dentro da memória cache do processador CPU."
    ], 
    "A", 
    "A Space-Based Architecture elimina o banco de dados centralizado como ponto único de falha e gargalo de concorrência, replicando dados em cache na memória de nós processadores.", 
    "Ideal para lidar com picos massivos de tráfego imprevisíveis."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que é a 'Lei de Conway' na engenharia de software e arquitetura?", 
    "Lei de Conway", 
    [
        "A) As organizações que projetam sistemas são restritas a produzir designs que são cópias das estruturas de comunicação dessas organizações.",
        "B) O tempo de execução de um software dobra a cada 18 meses, independentemente do hardware.",
        "C) Todo microsserviço deve possuir exatamente três desenvolvedores associados.",
        "D) Bugs de software sempre aparecem primeiro em ambientes de produção."
    ], 
    "A", 
    "A Lei de Conway demonstra que a estrutura organizacional de uma empresa influencia diretamente a arquitetura técnica dos softwares que ela constrói.", 
    "É frequentemente citada para justificar o uso de microsserviços alinhados a equipes multidisciplinares autônomas (Equipes Inversas / Reverse Conway Maneuver)."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que avalia o conceito de 'Escalabilidade Horizontal' (Scale Out)?", 
    "Escalabilidade", 
    [
        "A) A capacidade de adicionar mais instâncias ou nós de servidores ao sistema para distribuir a carga de trabalho.",
        "B) O aumento da capacidade de processamento de um único servidor adicionando mais memória RAM ou discos mais potentes.",
        "C) A expansão física do tamanho do gabinete do computador central.",
        "D) O aumento do número de linhas de código em um arquivo fonte."
    ], 
    "A", 
    "A escalabilidade horizontal permite crescer infinitamente (até limites de rede/infra) adicionando máquinas mais simples, diferentemente da escalabilidade vertical (Scale Up), que possui limites físicos de hardware.", 
    "É um pilar fundamental em arquiteturas nativas em nuvem."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "No contexto de sistemas distribuídos e arquitetura de microsserviços, o que preconiza o Teorema de CAP?", 
    "Teorema de CAP", 
    [
        "A) Um sistema de dados distribuído pode garantir simultaneamente no máximo duas de três propriedades: Consistência (Consistency), Disponibilidade (Availability) e Tolerância a Partição (Partition Tolerance).",
        "B) Servidores cloud devem priorizar Custo, Agilidade e Performance acima de tudo.",
        "C) Aplicações web modernas exigem Cache, Autenticação e Proxy obrigatórios.",
        "D) Conexões de rede suportam apenas Concorrência, Autonomia e Protocolos seguros."
    ], 
    "A", 
    "Como falhas de rede (partições) são inevitáveis em sistemas distribuídos reais, os arquitetos devem escolher conscientemente entre Consistência (CP) ou Disponibilidade (AP) durante uma falha de rede.", 
    "Fundamento crítico na escolha de bancos de dados NoSQL e SQL distribuídos."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que descreve o padrão 'Circuit Breaker' (Disjuntor) em sistemas distribuídos?", 
    "Resiliência e Circuit Breaker", 
    [
        "A) Um mecanismo de proteção que monitora falhas em chamadas a serviços externos; se o índice de falhas ultrapassar um limite, o circuito 'abre' e rejeita requisições rapidamente sem sobrecarregar o serviço instável.",
        "B) Um disjuntor elétrico físico que desliga o servidor em caso de superaquecimento.",
        "C) Um algoritmo de criptografia para proteger senhas de usuários.",
        "D) Uma ferramenta de integração contínua para build de projetos."
    ], 
    "A", 
    "O Circuit Breaker evita falhas em cascata em arquiteturas de microsserviços, permitindo que sistemas falhem de forma controlada e se recuperem graciosamente.", 
    "Possui estados típicos como Closed, Open e Half-Open."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "Qual é a finalidade do padrão 'Service Discovery' em arquiteturas de microsserviços?", 
    "Service Discovery", 
    [
        "A) Permitir que os microsserviços descubram dinamicamente endereços IP e portas de outros serviços na rede sem necessidade de configuração estática.",
        "B) Descobrir senhas perdidas de administradores de sistemas.",
        "C) Encontrar arquivos perdidos no disco rígido do servidor.",
        "D) Mapear rotas de URL no front-end da aplicação."
    ], 
    "A", 
    "Em ambientes de nuvem onde instâncias de microsserviços sobem e descem elasticamente (com IPs dinâmicos), o Service Discovery (como Consul, Eureka ou DNS interno) mantém o diretório atualizado de localização dos serviços.", 
    "Essencial para automação de infraestrutura."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que caracteriza o padrão arquitetural 'Serverless' (Computação Sem Servidor)?", 
    "Serverless", 
    [
        "A) O desenvolvedor escreve código que é executado em containers efêmeros gerenciados por terceiros (como AWS Lambda), cobrando apenas pelo tempo de execução real, sem gerenciamento de servidores físicos ou virtuais.",
        "B) Um sistema que não utiliza nenhum tipo de computador ou processador.",
        "C) Servidores que rodam exclusivamente desligados da tomada.",
        "D) Uma aplicação que roda inteiramente no navegador do cliente sem backend."
    ], 
    "A", 
    "O Serverless transfere toda a responsabilidade de provisionamento, escalabilidade automática e manutenção de infraestrutura para o provedor de nuvem.", 
    "Excelente para cargas de trabalho orientadas a eventos e APIs de uso esporádico ou variável."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que define o padrão arquitetural 'Monolito Modular'?", 
    "Monolito Modular", 
    [
        "A) Uma aplicação estruturada como um único binário/implantação, mas dividida internamente em módulos de negócio fortemente encapsulados e desacoplados, evitando o espalhamento de dependências.",
        "B) Um monolito antigo que foi dividido em 50 microsserviços independentes.",
        "C) Um conjunto de microsserviços que compartilham o mesmo código fonte.",
        "D) Um sistema sem nenhuma separação de pacotes ou camadas."
    ], 
    "A", 
    "O Monolito Modular combina a simplicidade de deploy de um monolito com a organização limpa e modular de um sistema bem desenhado, servindo muitas vezes de transição para microsserviços.", 
    "Evita a complexidade distribuída precoce."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que avalia a característica de 'Mantenabilidade' (Maintainability) de um sistema de software?", 
    "Atributos de Qualidade", 
    [
        "A) A facilidade com que um sistema pode ser modificado para corrigir defeitos, melhorar o desempenho ou adaptar-se a mudanças em seu ambiente.",
        "B) A quantidade de manutenção física preventiva feita nos racks de servidores.",
        "C) O custo mensal da conta de energia elétrica do data center.",
        "D) A velocidade com que a equipe atual faz reuniões de planejamento."
    ], 
    "A", 
    "Sistemas com alta mantenabilidade possuem código limpo, boa cobertura de testes, baixo acoplamento e alta coesão, reduzindo o custo total de propriedade (TCO).", 
    "É um dos principais atributos de qualidade arquitetural (ilities)."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "No contexto de testes de arquitetura, o que ferramentas como ArchUnit permitem verificar?", 
    "Testes de Arquitetura", 
    [
        "A) Regras arquiteturais de forma automatizada no código (ex: classes de persistência não devem acessar diretamente camadas de apresentação, ou pacotes de domínio não devem depender de frameworks web).",
        "B) A velocidade de clock do processador do servidor de homologação.",
        "C) A quantidade de pixels corretos em uma tela mobile.",
        "D) O tempo de resposta de requisições HTTP externas."
    ], 
    "A", 
    "O ArchUnit permite escrever testes unitários em código para validar o próprio design arquitetural, impedindo que desenvolvedores quebrem as regras de dependência ao longo do tempo.", 
    "Garante conformidade arquitetural contínua em projetos de grande porte."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que caracteriza o padrão arquitetural 'Pipes and Filters' (Tubos e Filtros)?", 
    "Padrão Pipes and Filters", 
    [
        "A) O processamento de um fluxo de dados é dividido em etapas sequenciais independentes (filtros) conectadas por canais de transmissão (tubos), onde cada filtro transforma a entrada e repassa a saída.",
        "B) Um encanamento hidráulico físico que refrigera os servidores do data center.",
        "C) Filtros de segurança de rede baseados em endereços IP.",
        "D) Um método de filtragem de dados em consultas SQL complexas."
    ], 
    "A", 
    "O padrão Pipes and Filters é amplamente utilizado em processamento de lotes (batch processing), compiladores e pipelines de dados, promovendo alta reutilização e desacoplamento de etapas.", 
    "Cada filtro opera de forma isolada."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que significa a prática de 'Refatoração Arquitetural' (Architectural Refactoring)?", 
    "Refatoração", 
    [
        "A) A reestruturação de componentes e dependências estruturais de um sistema para melhorar seus atributos de qualidade internos sem alterar seu comportamento externo observável.",
        "B) A reescrita completa de um software usando uma linguagem de programação diferente a cada semana.",
        "C) A formatação automática de arquivos de texto usando editores de código.",
        "D) A troca física de servidores antigos por novos discos rígidos."
    ], 
    "A", 
    "A refatoração arquitetural combate o 'débito técnico estrutural' acumulado, permitindo que o sistema continue evoluindo de forma sustentável.", 
    "Exige forte cobertura de testes automatizados para garantir segurança."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "Qual é a função de um 'Load Balancer' (Balanceador de Carga) na arquitetura de infraestrutura?", 
    "Balanceamento de Carga", 
    [
        "A) Distribuir o tráfego de rede ou de requisições de clientes entre múltiplos servidores de backend para otimizar a utilização de recursos, maximizar a capacidade de processamento e evitar sobrecarga.",
        "B) Equilibrar o peso físico dos gabinetes de servidores no rack.",
        "C) Balancear o uso de memória RAM entre threads de uma única aplicação.",
        "D) Dividir tarefas de desenvolvimento entre os membros da equipe de TI."
    ], 
    "A", 
    "O Load Balancer é indispensável para alcançar alta disponibilidade e escalabilidade horizontal, atuando como ponto de entrada para clusters de servidores.", 
    "Pode operar em camadas de rede (L4) ou de aplicação (L7)."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que caracteriza o padrão arquitetural 'Blackboard' (Quadro-Negro)?", 
    "Padrão Blackboard", 
    [
        "A) Um espaço de dados global compartilhado (o quadro-negro) onde vários módulos especialistas independentes (agentes) leem e escrevem informações para resolver problemas complexos onde não há uma rotina determinística clara.",
        "B) Uma sala de aula tradicional usada para treinamentos de arquitetura de software.",
        "C) Um painel Kanban usado por equipes ágeis para gerenciar tarefas.",
        "D) Um sistema de monitoramento de logs em tempo real."
    ], 
    "A", 
    "O padrão Blackboard é útil em inteligência artificial, reconhecimento de padrões e sistemas especialistas, onde múltiplos algoritmos colaboram para construir uma solução parcial iterativa.", 
    "Os agentes não se comunicam diretamente entre si, apenas através do quadro-negro."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que avalia o atributo de qualidade 'Resiliência' (Resilience) em sistemas distribuídos?", 
    "Resiliência", 
    [
        "A) A capacidade do sistema de se recuperar de falhas e continuar operando de forma aceitável, em vez de falhar completamente diante de erros inesperados.",
        "B) A rigidez dos materiais físicos usados na carcaça dos computadores.",
        "C) A velocidade com que desenvolvedores corrigem bugs em produção.",
        "D) A capacidade de resistir a ataques de força bruta em senhas."
    ], 
    "A", 
    "Sistemas resilientes assumem que falhas de rede, quedas de serviços e travamentos de hardware vão ocorrer, implementando estratégias como retries, fallbacks e disjuntores.", 
    "Difere de robustez, pois foca na recuperação após a falha."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "No contexto de arquitetura de software, o que é um 'Anti-Corruption Layer' (ACL - Camada Anticorrupção)?", 
    "Anti-Corruption Layer", 
    [
        "A) Uma camada tradutora posicionada entre um subsistema moderno e um sistema legado (ou de terceiros), impedindo que conceitos e modelos legados mal estruturados 'corrompam' o domínio limpo da nova aplicação.",
        "B) Um sistema antivírus corporativo que bloqueia acessos maliciosos.",
        "C) Um módulo de segurança focado em auditoria de fraudes financeiras.",
        "D) Uma ferramenta para impedir plágio de código-fonte no GitHub."
    ], 
    "A", 
    "A ACL isola o sistema novo traduzindo bidirecionalmente os modelos de dados e chamadas, permitindo integração segura com legados sem poluir a arquitetura interna.", 
    "Crucial em projetos de migração gradual."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que define o padrão arquitetural 'Broker' (Corretor de Mensagens/Serviços)?", 
    "Padrão Broker", 
    [
        "A) Um componente intermediário responsável por coordenar a comunicação entre clientes e servidores distribuídos, ocultando os detalhes de localização e facilitando o desacoplamento.",
        "B) Um corretor de imóveis responsável por alugar data centers.",
        "C) Um sistema de transações financeiras em bolsas de valores.",
        "D) Uma biblioteca para formatação de arquivos JSON."
    ], 
    "A", 
    "O padrão Broker permite que componentes distribuídos solicitem e recebam serviços de terceiros através de um intermediário padronizado.", 
    "Muito presente em sistemas de filas e brokers de mensageria modernos."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que significa a adoção de 'Design Patterns' (Padrões de Projeto) na arquitetura de software?", 
    "Design Patterns", 
    [
        "A) Soluções típicas e reutilizáveis para problemas recorrentes encontrados no projeto e desenvolvimento de software orientado a objetos.",
        "B) Regras estritas de formatação visual de telas em CSS.",
        "C) Padrões obrigatórios de nomenclatura de variáveis definidos pelo compilador.",
        "D) Modelos de contratos comerciais entre empresas de tecnologia."
    ], 
    "A", 
    "Catalogados amplamente pelo livro da Gang of Four (GoF), os padrões de projeto (como Factory, Singleton, Observer, Strategy) fornecem vocabulário compartilhado e soluções validadas para arquitetos e desenvolvedores.", 
    "Ajudam a estruturar o código de forma elegante e desacoplada."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que caracteriza o padrão de projeto comportamental 'Strategy'?", 
    "Design Patterns", 
    [
        "A) Permitir definir uma família de algoritmos, encapsular cada um deles em classes separadas e tornar os algoritmos intercambiáveis em tempo de execução.",
        "B) Garantir que uma classe tenha apenas uma única instância em todo o sistema.",
        "C) Notificar automaticamente múltiplos objetos sobre mudanças de estado.",
        "D) Criar objetos complexos passo a passo de forma isolada."
    ], 
    "A", 
    "O padrão Strategy elimina o uso excessivo de condicionais complexas (if/else ou switch), delegando comportamentos variados a classes polimórficas injetadas.", 
    "Promove o princípio aberto/fechado (OCP)."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "Qual é o propósito principal do padrão de projeto 'Observer'?", 
    "Design Patterns", 
    [
        "A) Definir uma dependência um-para-muitos entre objetos para que, quando um objeto mudar de estado, todos os seus dependentes sejam notificados e atualizados automaticamente.",
        "B) Observar o desempenho de CPU e memória dos servidores em tempo real.",
        "C) Monitorar logs de erro gerados por usuários na aplicação web.",
        "D) Inspecionar pacotes de rede usando firewalls."
    ], 
    "A", 
    "O padrão Observer é a base conceitual para arquiteturas reativas, programação assíncrona baseada em eventos e fluxos de dados observáveis.", 
    "Desacopla o emissor do evento dos receptores interessados."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que define a abordagem de 'Documentação Arquitetural' através do modelo C4?", 
    "Documentação Arquitetural", 
    [
        "A) Um conjunto de diagramas hierárquicos baseados em Contexto, Contêineres, Componentes e Código para descrever a arquitetura de software de forma clara e estruturada.",
        "B) Um modelo matemático para calcular o custo de servidores em nuvem.",
        "C) Um padrão de quatro colunas para relatórios de testes de carga.",
        "D) Uma metodologia ágil focada em quatro reuniões semanais."
    ], 
    "A", 
    "Criado por Simon Brown, o modelo C4 resolve o problema de diagramas confusos ou desatualizados, permitindo dar 'zoom' desde a visão macro do sistema (contexto) até os detalhes internos de componentes.", 
    "Facilita enormemente a comunicação técnica na equipe."

/* =====================================================
    DESIGN PATTERNS (40 QUESTÕES COMPLETAS)
===================================================== */

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão de projeto criacional garante que uma classe tenha apenas uma instância em toda a aplicação e fornece um ponto de acesso global para ela?", 
    "Singleton", 
    [
        "A) Factory Method",
        "B) Singleton",
        "C) Prototype",
        "D) Builder"
    ], 
    "B", 
    "O Singleton restringe a instanciação de uma classe a um único objeto, sendo útil para gerenciar recursos compartilhados como conexões de banco de dados ou configurações globais.", 
    "Cuidado com o uso excessivo de Singletons, pois eles introduzem estado global e podem dificultar testes unitários."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual categoria de Design Patterns foca na forma como classes e objetos são compostos para formar estruturas maiores, garantindo flexibilidade e eficiência?", 
    "Padrões Estruturais", 
    [
        "A) Criacionais",
        "B) Estruturais",
        "C) Comportamentais",
        "D) Concorrentes"
    ], 
    "B", 
    "Os padrões estruturais (como Adapter, Decorator e Facade) explicam como montar objetos e classes em estruturas maiores, mantendo essas estruturas flexíveis.", 
    "Exemplos clássicos de estruturais: Adapter, Composite, Proxy."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental permite que você defina uma família de algoritmos, coloque cada um deles em uma classe separada e faça com que seus objetos sejam intercambiáveis em tempo de execução?", 
    "Strategy", 
    [
        "A) Strategy",
        "B) Observer",
        "C) Command",
        "D) Template Method"
    ], 
    "A", 
    "O padrão Strategy permite alterar o comportamento de um objeto em tempo de execução encapsulando algoritmos intercambiáveis.", 
    "Ideal para substituir grandes estruturas condicionais (if/else ou switch/case) baseadas no tipo de comportamento."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão criacional fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas?", 
    "Abstract Factory", 
    [
        "A) Factory Method",
        "B) Abstract Factory",
        "C) Builder",
        "D) Singleton"
    ], 
    "B", 
    "O Abstract Factory permite produzir famílias de produtos compatíveis sem que o código cliente dependa de suas classes concretas.", 
    "Muito útil quando o sistema precisa ser independente de como seus produtos são criados, compostos e representados."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão de projeto criacional define uma interface para criar um objeto, mas deixa as subclasses decidirem qual classe instanciar, permitindo que a instanciação seja adiada para as subclasses?", 
    "Factory Method", 
    [
        "A) Abstract Factory",
        "B) Factory Method",
        "C) Prototype",
        "D) Singleton"
    ], 
    "B", 
    "O Factory Method resolve o problema de criar objetos sem especificar a classe exata do objeto que será criado, delegando essa responsabilidade para as subclasses.", 
    "Promove o princípio aberto/fechado (Open/Closed Principle) do SOLID."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão criacional permite construir objetos complexos passo a passo, utilizando o mesmo código de construção para produzir diferentes tipos e representações de um objeto?", 
    "Builder", 
    [
        "A) Builder",
        "B) Factory Method",
        "C) Prototype",
        "D) Adapter"
    ], 
    "A", 
    "O Builder separa a construção de um objeto complexo da sua representação, permitindo a criação de diferentes variações utilizando o mesmo processo.", 
    "Evita construtores telescópicos com dezenas de parâmetros opcionais."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão criacional permite copiar objetos existentes sem que o código dependa de suas classes, clonando instâncias em tempo de execução?", 
    "Prototype", 
    [
        "A) Prototype",
        "B) Singleton",
        "C) Factory Method",
        "D) Facade"
    ], 
    "A", 
    "O Prototype especifica os tipos de objetos a criar usando uma instância exemplar e cria novos objetos copiando este protótipo.", 
    "Útil para evitar a criação custosa de objetos via banco de dados ou operações complexas de inicialização."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão estrutural permite que objetos com interfaces incompatíveis colaborem entre si, atuando como um tradutor ou wrapper?", 
    "Adapter", 
    [
        "A) Decorator",
        "B) Adapter",
        "C) Facade",
        "D) Bridge"
    ], 
    "B", 
    "O Adapter converte a interface de uma classe em outra interface esperada pelos clientes, permitindo que classes trabalhem juntas que antes não conseguiam devido a incompatibilidades.", 
    "Muito comum ao integrar bibliotecas de terceiros ou sistemas legados."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão estrutural desacopla uma abstração de sua implementação, permitindo que ambas possam variar independentemente?", 
    "Bridge", 
    [
        "A) Bridge",
        "B) Composite",
        "C) Proxy",
        "D) Flyweight"
    ], 
    "A", 
    "O padrão Bridge divide uma classe grande ou um conjunto de classes intimamente ligadas em duas hierarquias separadas (abstração e implementação) que podem ser desenvolvidas independentemente.", 
    "Evita a explosão de subclasses combinatórias."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão estrutural permite que você componha objetos em estruturas de árvores e trabalhe com essas estruturas como se fossem objetos individuais?", 
    "Composite", 
    [
        "A) Composite",
        "B) Decorator",
        "C) Flyweight",
        "D) Proxy"
    ], 
    "A", 
    "O Composite permite que clientes tratem objetos individuais e composições de objetos de maneira uniforme (ex: hierarquias de arquivos e pastas).", 
    "Baseia-se em recursividade nas chamadas de métodos estruturais."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão estrutural anexa novos comportamentos a objetos colocando-os dentro de objetos wrapper que contêm esses comportamentos?", 
    "Decorator", 
    [
        "A) Adapter",
        "B) Decorator",
        "C) Facade",
        "D) Proxy"
    ], 
    "B", 
    "O Decorator permite adicionar responsabilidades a objetos dinamicamente em tempo de execução, sendo uma alternativa flexível à herança para estender funcionalidades.", 
    "Muito utilizado em fluxos de I/O (como streams de leitura e escrita)."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão estrutural fornece uma interface simplificada para uma biblioteca, um framework ou um conjunto complexo de classes?", 
    "Facade", 
    [
        "A) Facade",
        "B) Proxy",
        "C) Bridge",
        "D) Adapter"
    ], 
    "A", 
    "O Facade oculta a complexidade de subsistemas internos por trás de uma fachada de alto nível, facilitando o uso por clientes externos.", 
    "Reduz o acoplamento entre o código cliente e subsistemas complexos."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão estrutural usa compartilhamento para dar suporte a grandes quantidades de objetos de granulação fina de forma eficiente em termos de memória?", 
    "Flyweight", 
    [
        "A) Flyweight",
        "B) Singleton",
        "C) Prototype",
        "D) Composite"
    ], 
    "A", 
    "O Flyweight economiza RAM armazenando o estado compartilhado (intrínseco) no próprio objeto e passando o estado contextual (extrínseco) para os métodos.", 
    "Comum em editores de texto para renderização eficiente de milhares de caracteres."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão estrutural fornece um substituto ou placeholder para outro objeto, controlando o acesso a ele (ex: controle de acesso, carregamento tardio ou cache)?", 
    "Proxy", 
    [
        "A) Proxy",
        "B) Decorator",
        "C) Adapter",
        "D) Facade"
    ], 
    "A", 
    "O Proxy intercepta chamadas ao objeto real, permitindo executar tarefas antes ou depois do repasse da requisição (ex: Lazy Loading, Smart References, Protection Proxy).", 
    "Mantém a mesma interface do objeto original."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental define uma dependência um-para-muitos entre objetos para que, quando um objeto mudar de estado, todos os seus dependentes sejam notificados e atualizados automaticamente?", 
    "Observer", 
    [
        "A) Observer",
        "B) Strategy",
        "C) State",
        "D) Mediator"
    ], 
    "A", 
    "O Observer estabelece o mecanismo de publicação-assinatura (pub/sub), desacoplando o sujeito emissor dos observadores interessados nas mudanças.", 
    "Base fundamental para arquiteturas reativas e interfaces orientadas a eventos."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental permite que um objeto altere seu comportamento quando seu interior muda de estado, parecendo que a classe do objeto mudou?", 
    "State", 
    [
        "A) State",
        "B) Strategy",
        "C) Command",
        "D) Memento"
    ], 
    "A", 
    "O padrão State encapsula comportamentos dependentes de estados em classes separadas e delega as transições para o objeto de estado atual, eliminando grandes estruturas condicionais.", 
    "Muito próximo estruturalmente do padrão Strategy, mas com foco em transições de ciclo de vida."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental encapsula uma solicitação como um objeto, permitindo parametrizar clientes com diferentes solicitações, enfileirar operações e suportar operações que podem ser desfeitas (undo)?", 
    "Command", 
    [
        "A) Command",
        "B) Mediator",
        "C) Chain of Responsibility",
        "D) Visitor"
    ], 
    "A", 
    "O Command transforma uma operação em um objeto independente contendo todos os dados e dependências necessárias para executá-la mais tarde.", 
    "Ideal para filas de tarefas, históricos de ações e macros."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental permite que você passe solicitações ao longo duma cadeia de handlers, onde cada handler decide se processa a solicitação ou a passa para o próximo handler da cadeia?", 
    "Chain of Responsibility", 
    [
        "A) Chain of Responsibility",
        "B) Mediator",
        "C) Observer",
        "D) Template Method"
    ], 
    "A", 
    "A Chain of Responsibility desacopla o remetente de um comando do seu receptor, permitindo múltiplos objetos processarem a requisição em sequência.", 
    "Comum em middlewares de requisições HTTP (como em Express.js ou Spring Security)."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental define o esqueleto de um algoritmo em uma operação, postergando a implementação de alguns passos para as subclasses?", 
    "Template Method", 
    [
        "A) Template Method",
        "B) Strategy",
        "C) Factory Method",
        "D) State"
    ], 
    "A", 
    "O Template Method permite que subclasses reescrevam etapas específicas de um algoritmo sem alterar a estrutura global do fluxo.", 
    "Utiliza o princípio de inversão de controle (Hollywood Principle: 'Não nos chame, nós chamaremos você')."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental reduz o acoplamento caótico entre classes, restringindo as comunicações diretas entre os objetos e forçando-os a colaborar apenas através de um objeto mediador?", 
    "Mediator", 
    [
        "A) Mediator",
        "B) Observer",
        "C) Facade",
        "D) Command"
    ], 
    "A", 
    "O Mediator centraliza a lógica de comunicação de um grupo de objetos, evitando que eles se conheçam explicitamente e reduza o acoplamento complexo de rede M para M.", 
    "Comum em sistemas de controle de interface de usuário complexos."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental permite capturar e externalizar o estado interno de um objeto sem violar o encapsulamento, de modo que o objeto possa ser restaurado a esse estado mais tarde?", 
    "Memento", 
    [
        "A) Memento",
        "B) Prototype",
        "C) Command",
        "D) State"
    ], 
    "A", 
    "O Memento armazena cópias de segurança do estado de um objeto de forma desacoplada, permitindo implementar funcionalidades de desfazer/refazer (undo/redo).", 
    "Respeita o encapsulamento ao não expor diretamente os dados internos do originador."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental permite percorrer elementos de uma coleção (como listas, árvores ou grafos) de maneira sequencial sem expor sua representação interna?", 
    "Iterator", 
    [
        "A) Iterator",
        "B) Composite",
        "C) Visitor",
        "D) Interpreter"
    ], 
    "A", 
    "O Iterator extrai a lógica de travessia de dados para um objeto iterador dedicado, uniformizando o acesso a diferentes estruturas de dados.", 
    "Presente nativamente na maioria das linguagens modernas (ex: `for...of`, interfaces `Iterator`)."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental permite separar algoritmos dos objetos sobre os quais eles operam, possibilitando adicionar novas operações sem alterar as classes desses objetos?", 
    "Visitor", 
    [
        "A) Visitor",
        "B) Strategy",
        "C) Template Method",
        "D) Command"
    ], 
    "A", 
    "O Visitor utiliza dupla dispatch para injetar novas operações em uma hierarquia de classes estável sem modificar suas estruturas.", 
    "Comum em compiladores e analisadores sintácticos de árvores de código."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental permite definir uma gramática para uma linguagem e um interpretador para usar essa gramática para avaliar sentenças na linguagem?", 
    "Interpreter", 
    [
        "A) Interpreter",
        "B) Command",
        "C) Mediator",
        "D) Visitor"
    ], 
    "A", 
    "O Interpreter mapeia regras gramaticais em classes de objetos, permitindo avaliar expressões complexas baseadas em árvores de sintaxe.", 
    "Pouco utilizado no dia a dia, exceto em motores de regras de negócio, parsers ou ferramentas de busca."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual é a principal vantagem de aplicar Design Patterns em projetos de desenvolvimento de software?", 
    "Fundamentos de Design Patterns", 
    [
        "A) Eliminar completamente a necessidade de escrever testes unitários.",
        "B) Fornecer soluções comprovadas e reutilizáveis para problemas recorrentes de projeto, facilitando um vocabulário compartilhado entre desenvolvedores.",
        "C) Reduzir a quantidade de linhas de código binário compilado pela metade.",
        "D) Garantir velocidade máxima de execução em microcontroladores."
    ], 
    "B", 
    "Os padrões de projeto encapsulam décadas de experiência coletiva da engenharia de software orientada a objetos.", 
    "Originados e popularizados pelo livro clássico da 'Gang of Four' (GoF)."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "No contexto dos princípios SOLID, com quais categorias de Design Patterns o Princípio da Responsabilidade Única (SRP) e o Princípio Aberto/Fechado (OCP) mais se alinham diretamente?", 
    "SOLID e Design Patterns", 
    [
        "A) Com praticamente todos os padrões GoF, pois buscam modularidade, baixo acoplamento e alta coesão.",
        "B) Apenas com padrões estritamente criacionais baseados em XML.",
        "C) Apenas com o padrão Singleton.",
        "D) Não há relação conceitual entre SOLID e padrões de projeto."
    ], 
    "A", 
    "Os padrões de projeto foram concebidos justamente para materializar os princípios SOLID na prática arquitetural.", 
    "Facilitam a manutenção e a escalabilidade de sistemas de grande porte."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual é a principal diferença conceitual entre os padrões Strategy e State?", 
    "Strategy vs State", 
    [
        "A) O Strategy é um padrão criacional e o State é estrutural.",
        "B) O Strategy é escolhido pelo cliente de forma consciente para realizar uma tarefa; o State gerencia mudanças internas automáticas de ciclo de vida do objeto sem que o cliente precise gerenciar transições explícitas.",
        "C) O Strategy só funciona em JavaScript e o State apenas em C++.",
        "D) Não há diferença; são sinônimos perfeitos."
    ], 
    "B", 
    "Embora estruturalmente parecidos (composição com delegação), suas intenções de negócio e acoplamento de transições diferem significativamente.", 
    "O State conhece outros estados e comanda transições; o Strategy é independente."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão de projeto criacional pode ser implementado de forma segura em ambientes multithread utilizando técnicas como Double-Checked Locking?", 
    "Singleton", 
    [
        "A) Singleton",
        "B) Builder",
        "C) Prototype",
        "D) Factory Method"
    ], 
    "A", 
    "Em aplicações concorrentes, múltiplos threads podem tentar instanciar o Singleton simultaneamente se a inicialização não for thread-safe.", 
    "Exige cuidados especiais dependendo da linguagem de programação utilizada (ex: Java, C#, Python)."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "O que caracteriza o uso do padrão Null Object dentro de padrões comportamentais/estruturais?", 
    "Null Object Pattern", 
    [
        "A) Substituir referências nulas (`null`) por um objeto polimórfico que implementa o comportamento padrão neutro (vazio), evitando checagens constantes de `if (x != null)`.",
        "B) Deletar arquivos corrompidos do disco rígido.",
        "C) Forçar exceções de ponteiro nulo em tempo de execução.",
        "D) Desativar o coletor de lixo (Garbage Collector)."
    ], 
    "A", 
    "O Null Object encapsula o comportamento de 'nada' ou 'ausência', simplificando o código cliente ao eliminar condicionais repetitivas de checagem de nulidade.", 
    "Promove o princípio do polimorfismo limpo."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão estrutural é frequentemente comparado a um 'cartão de crédito virtual' ou 'um substituto seguro' que delega chamadas para um objeto pesado ou remoto?", 
    "Proxy", 
    [
        "A) Proxy",
        "B) Adapter",
        "C) Decorator",
        "D) Bridge"
    ], 
    "A", 
    "O Proxy atua como intermediário transparente, controlando o acesso, otimizando recursos (Lazy Loading) ou adicionando camadas de segurança.", 
    "Muito utilizado em ORMs para carregamento tardio de relacionamentos (Lazy Loading Proxies)."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão criacional é útil quando a criação de objetos é mais custosa do que clonar instâncias pré-existentes na memória?", 
    "Prototype", 
    [
        "A) Prototype",
        "B) Singleton",
        "C) Factory Method",
        "D) Facade"
    ], 
    "A", 
    "O Prototype permite a criação de novos objetos através da cópia de protótipos já carregados, economizando viagens ao banco de dados ou inicializações complexas.", 
    "Evita hierarquias complexas de subclasses de fábrica."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental permite desacoplar remetentes e receptores através de mensagens distribuídas em canais ou tópicos de eventos?", 
    "Observer", 
    [
        "A) Observer",
        "B) Command",
        "C) Mediator",
        "D) State"
    ], 
    "A", 
    "O padrão Observer notifica automaticamente múltiplos objetos dependentes sobre qualquer mudança de estado no objeto observado.", 
    "Base fundamental para arquiteturas reativas baseadas em eventos."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "No contexto de refatoração de código legado, qual categoria de Design Patterns costuma ser mais aplicada para desacoplar sistemas rígidos e interfaces incompatíveis?", 
    "Padrões Estruturais", 
    [
        "A) Estruturais",
        "B) Criacionais",
        "C) Concorrentes",
        "D) Apenas testes unitários"
    ], 
    "A", 
    "Padrões como Adapter, Facade e Bridge são cruciais para adaptar APIs antigas a novos contratos sem reescrever todo o sistema.", 
    "Facilitam a transição gradual de arquiteturas legadas."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental é ideal para implementar a funcionalidade de 'Desfazer' (Undo) e 'Refazer' (Redo) em editores de texto ou softwares gráficos?", 
    "Command", 
    [
        "A) Command",
        "B) Strategy",
        "C) Template Method",
        "D) Iterator"
    ], 
    "A", 
    "O padrão Command encapsula ações como objetos independentes, permitindo armazená-las em pilhas de histórico para reversão.", 
    "Pode ser combinado com o padrão Memento para salvar o estado dos dados manipulados."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual é o principal risco associado ao uso inadequado do padrão Singleton em aplicações orientadas a objetos?", 
    "Singleton", 
    [
        "A) Introduzir estado global oculto e forte acoplamento, dificultando a escrita de testes unitários isolados.",
        "B) Gerar erros de compilação automáticos de sintaxe.",
        "C) Duplicar instâncias de hardware na placa-mãe.",
        "D) Aumentar a velocidade de execução da CPU em 500%."
    ], 
    "A", 
    "O estado global dificulta o paralelismo e o isolamento de testes, pois testes diferentes podem interferir nas variáveis compartilhadas do Singleton.", 
    "Recomenda-se cautela e preferência por Injeção de Dependência sempre que possível."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão estrutural permite adicionar funcionalidades a um objeto individual de forma dinâmica, sem afetar o comportamento de outros objetos da mesma classe?", 
    "Decorator", 
    [
        "A) Decorator",
        "B) Adapter",
        "C) Composite",
        "D) Proxy"
    ], 
    "A", 
    "O Decorator envolve o objeto original em wrappers sucessivos para estender comportamentos em tempo de execução.", 
    "Evita a explosão combinatorial de subclasses para cada combinação de recursos."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental define passos fixos de um algoritmo na superclasse, permitindo que as subclasses alterem apenas etapas específicas?", 
    "Template Method", 
    [
        "A) Template Method",
        "B) Strategy",
        "C) State",
        "D) Builder"
    ], 
    "A", 
    "O Template Method reutiliza o fluxo principal do algoritmo e delega os detalhes customizáveis para métodos abstratos implementados nas subclasses.", 
    "Exemplo clássico: algoritmos de salvamento ou processamento de arquivos em etapas (abrir, ler, processar, fechar)."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão estrutural atua como um 'escudo' ou 'controlador de acesso' na frente de um objeto sensível ou remoto?", 
    "Proxy", 
    [
        "A) Proxy",
        "B) Facade",
        "C) Adapter",
        "D) Flyweight"
    ], 
    "A", 
    "O Proxy de Proteção verifica permissões antes de repassar a chamada ao objeto real.", 
    "Mantém a mesma assinatura de interface do objeto original para total transparência."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental evita que um remetente de solicitação acople-se rigidamente ao seu receptor, permitindo que vários objetos tenham a chance de tratar o pedido em sequência?", 
    "Chain of Responsibility", 
    [
        "A) Chain of Responsibility",
        "B) Mediator",
        "C) Observer",
        "D) Command"
    ], 
    "A", 
    "Os handlers formam uma corrente onde cada elo decide se consome a requisição ou a repassa adiante.", 
    "Muito utilizado em frameworks web para processamento de middlewares de requisição."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Como os Design Patterns se relacionam com os princípios de orientação a objetos (como encapsulamento, herança e polimorfismo)?", 
    "Fundamentos de Design Patterns", 
    [
        "A) Eles aplicam esses pilares de forma avançada para resolver problemas recorrentes de design com baixo acoplamento e alta coesão.",
        "B) Eles substituem completamente o uso de polimorfismo por variáveis globais.",
        "C) Eles funcionam apenas em linguagens não tipadas.",
        "D) Eles anulam a necessidade de encapsulamento."
    ], 
    "A", 
    "Os padrões são receitas arquiteturais construídas diretamente sobre os fundamentos da orientação a objetos.", 
    "Promovem código limpo, extensível e de fácil manutenção."
);

/* =====================================================
   DOMAIN-DRIVEN DESIGN (DDD)
===================================================== */

const dddQuest = [
    {
        q: "O que é a 'Linguagem Ubíqua' (Ubiquitous Language) no contexto do Domain-Driven Design (DDD)?",
        c: "Linguagem Ubíqua",
        o: [
            "A) Uma linguagem de programação exclusiva desenvolvida para implementar regras de negócio complexas.",
            "B) Uma linguagem rigorosamente compartilhada e comum entre desenvolvedores e especialistas do domínio, utilizada tanto nas conversas quanto no código-fonte.",
            "C) O padrão internacional de documentação em diagramas UML exigido para sistemas corporativos.",
            "D) Um framework de tradução automática de código legado para microsserviços modernos."
        ],
        a: "B",
        e: "A Linguagem Ubíqua elimina a barreira de tradução entre negócios e tecnologia, garantindo que os termos do domínio apareçam diretamente nas classes, métodos e variáveis do software.",
        t: "Se os especialistas de negócio chamam o conceito de 'Apólice', o código deve usar `Apolice`, e não termos genéricos como `Registro`."
    },
    {
        q: "Qual é a principal diferença conceitual entre uma Entidade (Entity) e um Objeto de Valor (Value Object) no DDD?",
        c: "Entidades vs Objetos de Valor",
        o: [
            "A) As entidades possuem identidade própria e única que persiste ao longo das mudanças de atributos, enquanto os objetos de valor são definidos exclusivamente pelos seus valores e são imutáveis.",
            "B) Os objetos de valor salvam dados no banco relacional, e as entidades ficam apenas na memória RAM.",
            "C) As entidades não podem conter regras de negócio, função exclusiva dos objetos de valor.",
            "D) Não há diferença arquitetural; ambos são sinônimos para classes de domínio."
        ],
        a: "A",
        e: "Uma Entidade (ex: `Cliente` com um ID único) continua sendo a mesma mesmo se o endereço mudar. Um Objeto de Valor (ex: `Endereco` ou `Dinheiro`) é comparado pelo conteúdo; se alterar um centavo, ele se torna outro objeto de valor.",
        t: "Sempre que possível, prefira modelar conceitos como Objetos de Valor pela facilidade de manutenção e imutabilidade."
    },
    {
        q: "O que define um 'Bounded Context' (Contexto Delimitado) e qual é a sua importância na arquitetura?",
        c: "Contexto Delimitado",
        o: [
            "A) O limite físico de memória RAM que um microsserviço pode consumir em produção.",
            "B) A demarcação explícita dentro da qual um modelo de domínio se aplica, garantindo que termos e conceitos tenham um significado preciso e isolado.",
            "C) A restrição de segurança que impede acessos externos não autorizados via token JWT.",
            "D) O tempo limite de resposta (timeout) para requisições HTTP entre diferentes servidores."
        ],
        a: "B",
        e: "Em grandes sistemas, um termo como 'Produto' significa coisas totalmente diferentes para o setor de Vendas e para o setor de Logística. O Bounded Context isola esses modelos para que não haja contaminação conceitual.",
        t: "Muitas vezes, cada Bounded Context corresponde diretamente a um microsserviço independente."
    },
    {
        q: "No padrão de projeto tático do DDD, o que é um 'Aggregate' (Agregado) e uma 'Aggregate Root' (Raiz do Agregado)?",
        c: "Agregados",
        o: [
            "A) Um banco de dados NoSQL utilizado para armazenar logs de auditoria em lote.",
            "B) Um agrupamento de entidades e objetos de valor associados tratado como uma unidade única para mudanças de dados, sendo que a Raiz do Agregado é a única porta de entrada externa para acessá-los.",
            "C) Uma biblioteca de relatórios estatísticos em tempo de execução.",
            "D) O diagrama que une todas as tabelas do sistema em formato relacional."
        ],
        a: "B",
        e: "O Agregado define limites de consistência transacional. Alterações em qualquer elemento interno devem passar obrigatoriamente pela Raiz do Agregado para garantir a integridade das regras de negócio.",
        t: "Manter os agregados pequenos reduz conflitos de concorrência em sistemas distribuídos."
    },
    {
        q: "Quando devemos utilizar um 'Domain Service' (Serviço de Domínio) no DDD?",
        c: "Serviços de Domínio",
        o: [
            "A) Para realizar consultas SQL de infraestrutura diretamente na tabela de usuários.",
            "B) Quando uma operação de negócio envolve múltiplos agregados ou conceitos que não pertencem de forma natural a nenhuma entidade ou objeto de valor isolado.",
            "C) Para substituir completamente os controladores REST de uma API web.",
            "D) Para gerenciar o roteamento de telas no frontend."
        ],
        a: "B",
        e: "Embora a maioria da lógica de negócio deva residir dentro das Entidades e Objetos de Valor, algumas regras coordenam vários objetos diferentes (ex: uma transferência bancária entre duas contas distintas). Nesses casos, usa-se um Serviço de Domínio.",
        t: "Serviços de domínio não devem conter estado (stateless) e focam puramente em comportamento."
    },
    {
        q: "Qual é a principal função de um Repositório (Repository) na arquitetura orientada ao domínio?",
        c: "Repositórios",
        o: [
            "A) Executar scripts de migração de banco de dados (Flyway ou Liquibase).",
            "B) Forçar o desacoplamento entre a camada de domínio e a persistência, simulando uma coleção em memória para encontrar, adicionar e remover agregados inteiros.",
            "C) Substituir os testes unitários por simulações reais de disco rígido.",
            "D) Criptografar senhas de usuários antes de salvar no SGBD."
        ],
        a: "B",
        e: "O repositório isola o domínio dos detalhes de infraestrutura (como ORMs, SQL ou NoSQL). Ele deve operar sempre em nível de Agregados, e não de tabelas individuais.",
        t: "Em DDD, criamos repositórios apenas para Raízes de Agregados."
    },
    {
        q: "O que distingue o 'Design Estratégico' (Strategic Design) do 'Design Tático' (Tactical Design) no DDD?",
        c: "Estratégico vs Tático",
        o: [
            "A) O estratégico foca na organização de grandes sistemas, contextos delimitados e relacionamentos entre equipes; o tático foca nos padrões de código de implementação interna (entidades, objetos de valor, repositórios).",
            "B) O estratégico é usado apenas em projetos legados, e o tático é exclusivo para arquiteturas serverless.",
            "C) O estratégico é responsabilidade exclusiva dos testadores (QA), enquanto o tático é feito pelo Product Owner.",
            "D) Não há distinção conceitual; ambos tratam da mesma granularidade de código."
        ],
        a: "A",
        e: "O Design Estratégico ajuda a enxergar o 'panorama geral' da empresa e dividir o domínio em partes gerenciáveis (Bounded Contexts, Context Mapping). O Design Tático entra no nível microscópico do código-fonte.",
        t: "Muitos desenvolvedores aplicam padrões táticos sem usar o design estratégico, perdendo os maiores benefícios do DDD."
    },
    {
        q: "Para que serve uma 'Anti-Corruption Layer' (Camada Anticorrupção - ACL) quando integramos sistemas?",
        c: "Camada Anticorrupção",
        o: [
            "A) Para bloquear tentativas de invasão e ataques de injeção de SQL na API.",
            "B) Para traduzir e isolar o modelo de domínio moderno de sistemas legados ou de terceiros mal estruturados, impedindo que conceitos externos 'sujem' o código limpo da aplicação.",
            "C) Para auditar a folha de pagamento e evitar fraudes financeiras internas.",
            "D) Para compactar pacotes de dados antes de enviar via protocolo gRPC."
        ],
        a: "B",
        e: "A ACL atua como uma ponte tradutora entre dois subsistemas com modelos diferentes. Assim, se o sistema legado usa termos confusos, a camada os traduz para a Linguagem Ubíqua do seu domínio atual.",
        t: "É um padrão essencial ao modernizar sistemas legados de forma incremental."
    },
    {
        q: "Qual é o papel de um 'Domain Event' (Evento de Domínio) em uma arquitetura DDD?",
        c: "Eventos de Domínio",
        o: [
            "A) Registrar erros de sintaxe e exceções de NullPointer no arquivo de log do servidor.",
            "B) Representar formalmente algo importante que aconteceu no domínio do negócio (ex: 'PedidoPago' ou 'ClienteCadastrado'), permitindo comunicação assíncrona e reativa entre agregados ou contextos.",
            "C) Agendar reinicializações automáticas do servidor de aplicações toda meia-noite.",
            "D) Controlar cliques de mouse e eventos de interface do usuário no front-end."
        ],
        a: "B",
        e: "Eventos de Domínio capturam efeitos colaterais de negócios de forma desacoplada. Um agregado dispara um evento, e outros componentes ou contextos podem escutá-lo para reagir sem acoplamento direto.",
        t: "São a base fundamental para arquiteturas orientadas a eventos (Event-Driven Architecture) e padrões como CQRS."
    },
    {
        q: "No contexto de criação de objetos complexos no DDD, quando devemos utilizar o padrão 'Factory' (Fábrica)?",
        c: "Fábricas",
        o: [
            "A) Para fabricar componentes físicos de hardware em linhas de montagem industrial.",
            "B) Para encapsular a lógica complexa de criação de Agregados ou Entidades, garantindo que o objeto nasça sempre em um estado válido e consistente, sem poluir o construtor padrão.",
            "C) Para gerar conexões simultâneas com bancos de dados relacionais.",
            "D) Para compilar o código Java/C# para código de máquina nativo."
        ],
        a: "B",
        e: "Quando a construção de um agregado exige validações complexas, regras de negócio ou montagem de sub-objetos, delegar essa responsabilidade a uma Factory mantém o domínio limpo e coeso.",
        t: "Ajuda a evitar a criação de objetos 'incompletos' ou inválidos na aplicação."
    }
];

dddQuest.forEach(x => {
    addQuestion("Domain-Driven Design (DDD)", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   SCRUM E EXTREME PROGRAMMING (XP)
===================================================== */

const scrumXp = [
    {
        q: "Qual é a principal responsabilidade do Product Owner (PO) no framework Scrum?",
        c: "Papéis no Scrum",
        o: [
            "A) Garantir que o time siga rigorosamente os processos tradicionais de gerenciamento de projetos em cascata.",
            "B) Representar os interesses dos stakeholders, gerenciar, detalhar e priorizar o Product Backlog (Fila do Produto).",
            "C) Atuar como líder servente removendo impedimentos técnicos e facilitando os eventos diários.",
            "D) Escrever e executar os testes automatizados de aceitação de código."
        ],
        a: "B",
        e: "O Product Owner é o único dono do Product Backlog e responsável por maximizar o valor do produto, decidindo o que entra na fila e qual a ordem de prioridade com base no retorno de valor para o negócio.",
        t: "O PO responde pelo 'quê' deve ser feito, enquanto o time de desenvolvimento decide o 'como'."
    },
    {
        q: "O que ocorre tipicamente durante a reunião de Sprint Retrospective (Retrospectiva da Sprint) no Scrum?",
        c: "Eventos do Scrum",
        o: [
            "A) O time apresenta o incremento de software pronto para os clientes e stakeholders externos.",
            "B) O time de desenvolvimento inspeciona a si próprio, avaliando pessoas, relacionamentos, processos e ferramentas, criando um plano de melhorias para a próxima Sprint.",
            "C) O Scrum Master distribui as tarefas da semana seguinte para cada desenvolvedor.",
            "D) O Product Owner cancela a Sprint caso as metas financeiras não tenham sido atingidas."
        ],
        a: "B",
        e: "A Retrospectiva é um evento focado em melhoria contínua interna do time, onde se discute o que funcionou bem, o que falhou e o que pode ser aprimorado no processo de trabalho.",
        t: "Diferencia-se da Sprint Review, que foca na inspeção do produto entregue."
    },
    {
        q: "No Extreme Programming (XP), o que caracteriza a prática de 'Programação em Par' (Pair Programming)?",
        c: "Práticas do XP",
        o: [
            "A) Dois desenvolvedores trabalham juntos na mesma estação de trabalho, onde um escreve o código (piloto) e o outro revisa e pensa criticamente em tempo real (observador/copiloto), invertendo os papéis frequentemente.",
            "B) Cada desenvolvedor trabalha em um branch separado e faz um merge ao final do dia.",
            "C) Os desenvolvedores competem para ver quem entrega a mesma feature mais rápido.",
            "D) A equipe se divide em duplas para realizar testes de carga em servidores remotos."
        ],
        a: "A",
        e: "A programação em par melhora a qualidade do código, reduz a quantidade de defeitos de forma instantânea e promove a disseminação de conhecimento técnico entre os membros da equipe.",
        t: "É uma das práticas mais icônicas e debatidas do desenvolvimento ágil."
    },
    {
        q: "O que compõe o chamado 'Sprint Backlog' em um projeto Scrum?",
        c: "Artefatos do Scrum",
        o: [
            "A) A lista completa de todos os requisitos desejados para o software ao longo de todo o ciclo de vida do produto.",
            "B) O conjunto de itens do Product Backlog selecionados para a Sprint atual, juntamente com o plano de desenvolvimento necessário para entregar o incremento.",
            "C) O relatório de desempenho financeiro apresentado aos investidores da empresa.",
            "D) A lista de bugs críticos encontrados pelo setor de qualidade em produção."
        ],
        a: "B",
        e: "O Sprint Backlog pertence exclusivamente ao time de desenvolvimento e detalha o trabalho que a equipe realizará para atingir a Meta da Sprint (Sprint Goal).",
        t: "Ele é dinâmico e evolui ao longo da Sprint conforme o time descobre mais sobre o trabalho."
    },
    {
        q: "Quais são os cinco valores fundamentais propostos pelo Extreme Programming (XP)?",
        c: "Valores do XP",
        o: [
            "A) Custo, Escopo, Prazo, Qualidade e Hierarquia.",
            "B) Comunicação, Simplicidade, Feedback, Coragem e Respeito.",
            "C) Planejamento, Execução, Controle, Monitoramento e Encerramento.",
            "D) Transparência, Inspeção, Adaptação, Velocidade e Previsibilidade."
        ],
        a: "B",
        e: "Os cinco valores do XP guiam as atitudes e comportamentos da equipe técnica, criando um ambiente colaborativo e altamente adaptável a mudanças.",
        t: "Esses valores sustentam as 12 práticas clássicas do XP."
    },
    {
        q: "Qual melhor descreve o papel do Scrum Master em um projeto ágil?",
        c: "Papéis no Scrum",
        o: [
            "A) Um gerente de projeto tradicional que cobra prazos, delega tarefas e controla horas trabalhadas.",
            "B) Um líder servente (servant leader) que ajuda a remover impedimentos, protege a equipe de interferências externas e promove a adoção do Scrum.",
            "C) O responsável técnico supremo pela arquitetura de código e banco de dados.",
            "D) O representante oficial dos clientes que valida cada linha de código escrita."
        ],
        a: "B",
        e: "O Scrum Master não manda na equipe; ele serve ao time, facilitando os eventos, garantindo que o Scrum seja compreendido e ajudando a eliminar bloqueios que atrapalham a produtividade.",
        t: "Ele atua como um facilitador e guardião do processo ágil."
    },
    {
        q: "No contexto do Extreme Programming (XP), qual é o objetivo da prática de Refatoração Contínua (Refactoring)?",
        c: "Práticas do XP",
        o: [
            "A) Reescrever completamente o software do zero a cada seis meses para usar novas linguagens.",
            "B) Melhorar a estrutura interna do código existente sem alterar o seu comportamento externo, mantendo-o limpo, legível e livre de dívidas técnicas.",
            "C) Aumentar artificialmente o número de linhas de código para impressionar os gestores.",
            "D) Traduzir comentários em inglês para o idioma nativo da equipe."
        ],
        a: "B",
        e: "A refatoração constante evita o acúmulo de complexidade desnecessária (dívida técnica), tornando o sistema mais fácil de manter e estender ao longo do tempo.",
        t: "No XP, refatorar é uma atividade diária e integrada ao desenvolvimento."
    },
    {
        q: "O que significa a 'Definição de Pronto' (Definition of Done - DoD) no Scrum?",
        c: "Conceitos do Scrum",
        o: [
            "A) O momento exato em que o cliente paga a fatura mensal do contrato de software.",
            "B) Uma compreensão compartilhada e formal de todos os critérios de qualidade que um incremento de software deve atender para ser considerado completo e liberável.",
            "C) A quantidade de horas semanais que os desenvolvedores passam na empresa.",
            "D) A autorização dada pelo gerente para iniciar uma nova Sprint."
        ],
        a: "B",
        e: "A DoD garante transparência e qualidade. Se um item do backlog não atende aos critérios da DoD (ex: código revisado, testes unitários passando, documentado), ele não pode ser considerado pronto nem entregue.",
        t: "Diferencia-se da 'Definition of Ready' (DoR), que define quando um item está pronto para entrar na Sprint."
    },
    {
        q: "O que significa o conceito de 'Timebox' aplicado aos eventos do Scrum?",
        c: "Eventos do Scrum",
        o: [
            "A) Um cronograma flexível que pode ser estendido caso a reunião não termine.",
            "B) Uma duração máxima fixa alocada para cada evento ou atividade, ajudando a focar, evitar reuniões longas e promover a pontualidade.",
            "C) O prazo de entrega estipulado pelo contrato com o cliente final.",
            "D) Uma ferramenta de controle de ponto dos funcionários."
        ],
        a: "B",
        e: "Os eventos do Scrum (como a Daily de 15 minutos ou a Planning de até 8 horas para Sprints de um mês) possuem duração máxima estrita (Timebox) para otimizar o tempo e evitar desperdícios.",
        t: "Uma vez esgotado o tempo de um evento timeboxed, ele é encerrado."
    },
    {
        q: "Qual prática do Extreme Programming (XP) enfatiza a integração frequente de código várias vezes ao dia, combinada com testes automatizados?",
        c: "Práticas do XP",
        o: [
            "A) Integração Contínua (Continuous Integration)",
            "B) Cascata Estendida (Extended Waterfall)",
            "C) Planejamento de Longo Prazo (Long-Term Planning)",
            "D) Controle Manual de Mudanças (Change Control Board)"
        ],
        a: "A",
        e: "A Integração Contínua no XP exige que os desenvolvedores integrem seu código ao repositório principal com alta frequência, rodando suítes de testes automatizados para detectar conflitos e bugs imediatamente.",
        t: "Minimiza o pesadelo de integrar códigos divergentes após semanas de trabalho isolado."
    }
];

scrumXp.forEach(x => {
    addQuestion("Scrum e XP", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});
/* =====================================================
   TESTES DE SOFTWARE
===================================================== */

const testesSoftware = [
    {
        q: "Qual é a principal diferença conceitual entre testes de caixa preta (black-box) e testes de caixa branca (white-box)?",
        c: "Caixa Preta vs Caixa Branca",
        o: [
            "A) O teste de caixa preta é feito apenas em servidores de produção, enquanto o de caixa branca roda localmente.",
            "B) O teste de caixa preta valida a funcionalidade externa e os requisitos do sistema sem conhecer o código interno, enquanto o teste de caixa branca examina a estrutura interna, lógica e caminhos do código-fonte.",
            "C) O teste de caixa preta é totalmente automatizado e o de caixa branca é executado exclusivamente de forma manual.",
            "D) Não há diferença prática; ambos utilizam os mesmos algoritmos de cobertura de código."
        ],
        a: "B",
        e: "Nos testes de caixa preta (especificação), o testador avalia entradas e saídas baseando-se nos requisitos funcionais. Nos testes de caixa branca (estruturais), o testador conhece o código e escreve casos para cobrir ramificações, loops e linhas de código.",
        t: "Testes unitários costumam ser de caixa branca, enquanto testes de aceitação e sistema tendem a ser de caixa preta."
    },
    {
        q: "No contexto da pirâmide de testes de software, qual é a principal característica dos testes unitários (Unit Tests)?",
        c: "Pirâmide de Testes",
        o: [
            "A) São testes lentos que validam a integração completa entre o banco de dados e a interface gráfica.",
            "B) São testes de baixo nível, rápidos e isolados que verificam o comportamento de pequenos blocos de código (como funções ou métodos individuais).",
            "C) São executados manualmente por usuários finais em ambiente de homologação.",
            "D) Substituem completamente a necessidade de testes de sistema e de regressão."
        ],
        a: "B",
        e: "Os testes unitários formam a base da pirâmide de testes. Devem ser executados em grande quantidade, rodar em milissegundos e isolar dependências externas utilizando mocks ou stubs.",
        t: "Uma boa suíte de testes unitários detecta regressões imediatamente após alterações no código."
    },
    {
        q: "O que significa o conceito de 'TDD' (Test-Driven Development) no ciclo de desenvolvimento de software?",
        c: "TDD",
        o: [
            "A) Desenvolver todo o sistema primeiro e escrever os testes automatizados apenas após o deploy em produção.",
            "B) Uma técnica onde os testes automatizados são escritos antes do código de produção, seguindo o ciclo: falhar (Red), passar (Green) e refatorar (Refactor).",
            "C) Um método de teste baseado em carga para medir a tolerância a falhas de servidores web.",
            "D) Documentar os requisitos do cliente utilizando diagramas de casos de uso em UML."
        ],
        a: "B",
        e: "No TDD, o desenvolvedor primeiro escreve um teste que falha para uma funcionalidade desejada, depois escreve o código mínimo necessário para fazer o teste passar, e por fim refatora o código mantendo-o limpo.",
        t: "O TDD ajuda a projetar códigos mais desacoplados e altamente testáveis desde a concepção."
    },
    {
        q: "Qual é o principal objetivo dos testes de integração em uma aplicação?",
        c: "Testes de Integração",
        o: [
            "A) Garantir que métodos individuais em classes isoladas funcionem sem erros de sintaxe.",
            "B) Verificar se diferentes módulos, componentes ou serviços do sistema (como a comunicação entre a API e o banco de dados) funcionam corretamente quando combinados.",
            "C) Validar a experiência visual e o design responsivo em diferentes tamanhos de tela.",
            "D) Testar o comportamento do aplicativo sob estresse extremo de requisições simultâneas."
        ],
        a: "B",
        e: "Enquanto o teste unitário isola as partes, o teste de integração assegura que a engrenagem conjunta funcione — por exemplo, testando se um repositório consegue persistir dados reais no banco de dados sem quebrar.",
        t: "Eles identificam falhas de interface ou contratos entre serviços que os testes unitários não conseguem pegar."
    },
    {
        q: "O que avalia o tipo de teste conhecido como 'Teste de Regressão'?",
        c: "Testes de Regressão",
        o: [
            "A) Se o software consegue voltar para uma versão anterior em caso de falha crítica no servidor.",
            "B) Se novas alterações no código (correções de bugs ou novas features) quebraram funcionalidades que já funcionavam anteriormente.",
            "C) Se a velocidade de carregamento regrediu após a otimização de imagens.",
            "D) O nível de satisfação dos usuários antigos em relação aos novos menus do sistema."
        ],
        a: "B",
        e: "O teste de regressão é executado sempre que há uma mudança no código para garantir que o comportamento existente permaneceu intacto. A automação é fundamental para tornar esse processo viável.",
        t: "Suítes de testes de regressão automatizadas economizam centenas de horas de testes manuais."
    },
    {
        q: "Qual é a finalidade de utilizar 'Mocks' (ou Dublês de Teste) durante a execução de testes unitários?",
        c: "Mocks e Stubs",
        o: [
            "A) Simular o comportamento de componentes ou dependências externas complexas (como APIs de pagamento ou conexões de banco de dados) de forma controlada e rápida.",
            "B) Gerar senhas criptografadas aleatórias para testes de segurança de intrusão.",
            "C) Criar cópias de backup automáticas do código-fonte para o GitHub.",
            "D) Traduzir mensagens de erro do inglês para o português no console."
        ],
        a: "A",
        e: "Mocks permitem isolar a unidade que está sendo testada, simulando respostas e evitando dependências lentas ou instáveis (como requisições reais de rede ou operações pesadas de disco).",
        t: "O uso excessivo de mocks pode indicar que o código possui forte acoplamento e precisa de refatoração."
    },
    {
        q: "O que mede a métrica de 'Cobertura de Código' (Code Coverage), como a fornecida por ferramentas como JaCoCo ou Istanbul?",
        c: "Cobertura de Código",
        o: [
            "A) A porcentagem exata de bugs corrigidos pela equipe de QA em um sprint.",
            "B) A proporção de linhas, instruções ou ramificações do código-fonte que foram executadas ao menos uma vez durante a bateria de testes automatizados.",
            "C) O espaço em disco ocupado pelos arquivos de teste em comparação com o código de produção.",
            "D) O tempo total de execução da suíte de testes em segundos."
        ],
        a: "B",
        e: "A cobertura de código aponta quais partes do sistema passaram pelos testes. Alta cobertura não garante ausência total de bugs, mas indica quais trechos do código estão desprotegidos contra falhas.",
        t: "Deve ser tratada como um indicador de qualidade, e não como uma meta absoluta de perfeição."
    },
    {
        q: "Qual é o foco principal dos chamados 'Testes de Aceitação' (Acceptance Testing)?",
        c: "Testes de Aceitação",
        o: [
            "A) Verificar se a lógica matemática de funções matemáticas internas está correta.",
            "B) Validar se o sistema atende aos requisitos de negócio e se está pronto para ser aceito pelo cliente ou usuário final.",
            "C) Testar a robustez do servidor contra quedas de energia no data center.",
            "D) Analisar vulnerabilidades de injeção de SQL no backend."
        ],
        a: "B",
        e: "Os testes de aceitação focam nos critérios de valor de negócio. Muitas vezes são expressos no formato Behavior-Driven Development (BDD) utilizando sintaxe Gherkin (Dado-Quando-Então).",
        t: "Garantem que o software construído é exatamente o que o cliente pediu e especificou."
    },
    {
        q: "No contexto de testes de software não funcionais, o que avalia um 'Teste de Carga' (Load Testing)?",
        c: "Testes Não Funcionais",
        o: [
            "A) A capacidade do sistema de suportar uma carga esperada de usuários e transações simultâneas, medindo o desempenho sob estresse operacional.",
            "B) O peso físico dos servidores em racks metálicos dentro de uma sala climatizada.",
            "C) A quantidade de linhas de código que cada desenvolvedor consegue commitar por dia.",
            "D) A facilidade de uso e acessibilidade da interface para pessoas com deficiência visual."
        ],
        a: "A",
        e: "O teste de carga simula o tráfego real ou projetado para identificar gargalos de performance, tempos de resposta lentos e limites operacionais antes que o sistema vá para produção.",
        t: "É um pilar essencial para sistemas corporativos que recebem alta concorrência de acessos."
    },
    {
        q: "O que caracteriza a prática de Integração Contínua (CI) em relação aos testes automatizados?",
        c: "Integração Contínua",
        o: [
            "A) Executar testes manuais de homologação uma vez a cada semestre antes de liberar o sistema.",
            "B) Automatizar a execução de toda a suíte de testes sempre que novos códigos são enviados (pushed) para o repositório compartilhado, garantindo feedback rápido sobre falhas.",
            "C) Permitir que o código seja enviado para produção sem passar por validações prévias.",
            "D) Sincronizar branches locais via git fetch de forma manual."
        ],
        a: "B",
        e: "A Integração Contínua (gerenciada por ferramentas como GitHub Actions, GitLab CI ou Jenkins) roda os testes automaticamente a cada commit, bloqueando a entrada de código que quebre o sistema.",
        t: "Garante que o repositório principal permaneça sempre em um estado saudável e executável."
    }
];

testesSoftware.forEach(x => {
    addQuestion("Testes de Software", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});
/* =====================================================
   GIT E CONTROLE DE VERSÃO
===================================================== */

const gitQuest = [
    {
        q: "Qual é a principal diferença entre os comandos 'git pull' e 'git fetch' em um fluxo de trabalho com Git?",
        c: "Fetch vs Pull",
        o: [
            "A) O 'git fetch' atualiza imediatamente os arquivos da árvore de trabalho (working directory), enquanto o 'git pull' apenas baixa o histórico.",
            "B) O 'git fetch' baixa as alterações do repositório remoto sem aplicá-las automaticamente no seu branch atual, enquanto o 'git pull' baixa e faz o merge (mesclagem) automático na sequência.",
            "C) O 'git pull' é exclusivo para servidores locais e o 'git fetch' é usado apenas no GitHub.",
            "D) Não há diferença funcional; ambos executam exatamente a mesma rotina de sincronização."
        ],
        a: "B",
        e: "O `git fetch` busca as novidades do remoto atualizando as referências locais (como `origin/main`), permitindo que você inspecione o código antes de integrar. O `git pull` faz o `fetch` seguidos de um `merge` imediato.",
        t: "Utilizar `git fetch` costuma ser mais seguro para revisar o que mudou antes de juntar no seu código atual."
    },
    {
        q: "No Git, para que serve o comando 'git stash'?",
        c: "Git Stash",
        o: [
            "A) Para apagar permanentemente o histórico de commits corrompidos.",
            "B) Para guardar temporariamente as alterações não commitadas (modificações em arquivos rastreados) em um estoque, limpando a sua área de trabalho sem perder o progresso.",
            "C) Para criar um novo branch isolado direto na nuvem do GitHub.",
            "D) Para enviar o código diretamente para o servidor de produção em ambiente de homologação."
        ],
        a: "B",
        e: "O `git stash` é ideal quando você está no meio de uma alteração, precisa mudar de branch urgentemente para corrigir um bug, mas ainda não quer fazer um commit definitivo.",
        t: "Você pode recuperar o que guardou usando o comando `git stash pop`."
    },
    {
        q: "O que acontece quando executamos o comando 'git reset --soft HEAD~1'?",
        c: "Git Reset",
        o: [
            "A) Desfaz o último commit, mas mantém todas as alterações dos arquivos preservadas na área de staged (prontas para novo commit).",
            "B) Apaga permanentemente o último commit e descarta todas as alterações feitas no código de forma irreversível.",
            "C) Remove o repositório local do computador e desconecta do GitHub.",
            "D) Converte o branch atual em um arquivo compactado zip."
        ],
        a: "A",
        e: "O modificador `--soft` volta o ponteiro do HEAD em um commit, mantendo intactas as modificações no `staging area`. O `--mixed` (padrão) mantém as alterações no working directory, e o `--hard` apaga tudo.",
        t: "Use `--hard` com muito cuidado, pois ele descarta o trabalho não salvo."
    },
    {
        q: "Qual é a utilidade e o comportamento padrão do arquivo '.gitignore' em um projeto versionado?",
        c: ".gitignore",
        o: [
            "A) Listar os colaboradores autorizados a realizar push no repositório remoto.",
            "B) Definir padrões de arquivos e pastas que o Git deve ignorar e não rastrear (como dependências pesadas, arquivos de configuração local e caches).",
            "C) Automatizar os testes unitários toda vez que um commit for realizado.",
            "D) Armazenar senhas de acesso criptografadas para conexão com o banco de dados."
        ],
        a: "B",
        e: "O `.gitignore` impede que arquivos gerados automaticamente, credenciais sensíveis ou pastas de pacotes (`node_modules`, `build`, etc.) sejam enviados por engano para o versionamento.",
        t: "Arquivos que já estão sendo rastreados pelo Git continuam sendo monitorados mesmo se você adicioná-los depois ao `.gitignore`, exigindo remoção prévia com `git rm --cached`."
    },
    {
        q: "Qual é a diferença fundamental entre os comandos 'git merge' e 'git rebase' ao integrar alterações de um branch em outro?",
        c: "Merge vs Rebase",
        o: [
            "A) O 'merge' cria um commit de junção preservando o histórico real de ramificação, enquanto o 'rebase' reescreve o histórico aplicando os commits em sequência linear.",
            "B) O 'rebase' é mais rápido porque deleta os branches antigos, enquanto o 'merge' é proibido em equipes ágeis.",
            "C) O 'merge' altera o código remoto e o 'rebase' altera apenas o repositório local.",
            "D) Não há diferença matemática; ambos geram exatos mesmos hashes de commit."
        ],
        a: "A",
        e: "O `merge` preserva o contexto histórico criando um nó de união (merge commit). O `rebase` move a base da sua branch para o topo da branch de destino, gerando uma linha do tempo limpa e linear.",
        t: "Evite usar `rebase` em branches públicos/compartilhados para não confundir o histórico de outros desenvolvedores."
    },
    {
        q: "No fluxo de trabalho do Git, o que caracteriza a área chamada 'Staging Area' (ou Index)?",
        c: "Áreas do Git",
        o: [
            "A) O servidor remoto hospedado na nuvem (GitHub ou GitLab).",
            "B) Uma área intermediária onde você seleciona e prepara quais arquivos modificados serão incluídos no próximo commit.",
            "C) O diretório físico oculto `.git` onde ficam os logs de configuração.",
            "D) Um ambiente de homologação onde o site roda em produção."
        ],
        a: "B",
        e: "Antes de salvar as mudanças com `git commit`, você usa o `git add` para mover os arquivos da working tree para a Staging Area, selecionando exatamente o que compõe a sua entrega.",
        t: "Isso permite commitar partes específicas de arquivos modificados através do modo interativo (`git add -p`)."
    },
    {
        q: "O que o comando 'git checkout -b novo-branch' (ou 'git switch -c') realiza na prática?",
        c: "Branches",
        o: [
            "A) Deleta permanentemente o branch atual e todos os seus arquivos.",
            "B) Cria um novo branch e muda imediatamente o contexto de trabalho para ele em um único comando.",
            "C) Sincroniza o branch local com a última versão estável da nuvem.",
            "D) Cria uma tag de versão para release de software."
        ],
        a: "B",
        e: "Esse comando combina a criação de uma nova ramificação (`branch`) com a troca instantânea para ela, economizando o uso de dois comandos separados (`git branch` + `git checkout`).",
        t: "Nas versões mais recentes do Git, o comando moderno recomendado para troca é `git switch`."
    },
    {
        q: "O que ocorre quando o Git aponta um conflito de merge (merge conflict)?",
        c: "Conflitos",
        o: [
            "A) O repositório é corrompido e precisa ser baixado novamente do zero.",
            "B) O Git encontrou alterações concorrentes na mesma linha de código em branches diferentes e pausa a mesclagem para que o desenvolvedor decida manualmente qual código manter.",
            "C) O sistema operacional bloqueia o acesso aos arquivos por falta de permissão de administrador.",
            "D) O GitHub rejeita o projeto por violação de boas práticas de código limpo."
        ],
        a: "B",
        e: "O Git insere marcadores visuais (`<<<<<<<`, `=======`, `>>>>>>>`) no arquivo conflitante. Cabe ao programador editar o código para resolver o impasse, salvar o arquivo, dar `git add` e concluir o commit.",
        t: "Editores modernos como o VS Code possuem ferramentas visuais excelentes para resolução de conflitos de merge."
    },
    {
        q: "Para que serve o comando 'git log --oneline --graph'?",
        c: "Git Log",
        o: [
            "A) Para gerar um gráfico de consumo de memória RAM do processo do Git.",
            "B) Para exibir o histórico de commits de forma resumida (uma linha por commit) acompanhado de uma representação gráfica em árvore das ramificações.",
            "C) Para criar um diagrama UML da arquitetura do software baseado nos commits.",
            "D) Para medir a produtividade e quantidade de linhas escritas por cada desenvolvedor."
        ],
        a: "B",
        e: "Essa combinação de parâmetros do `git log` é excelente para visualizar rapidamente o fluxo de merges, ramificações e o histórico linear de forma limpa e direta no terminal.",
        t: "Muitos desenvolvedores criam um alias (atalho) no terminal para esse comando devido à sua alta utilidade."
    },
    {
        q: "O que é um 'Git Hook' e onde ele é executado?",
        c: "Git Hooks",
        o: [
            "A) Uma ferramenta gráfica oficial para conectar o repositório local ao GitHub Desktop.",
            "B) Um script personalizado que o Git executa automaticamente antes ou depois de eventos específicos, como commits, pushes ou merges.",
            "C) Um tipo de chave criptográfica utilizada para autenticação SSH no servidor remoto.",
            "D) Um plugin de extensão para debug de erros de sintaxe em JavaScript."
        ],
        a: "B",
        e: "Os hooks ficam na pasta oculta `.git/hooks` e são muito usados para rodar linters (como ESLint), formatadores de código ou testes automatizados antes de permitir um commit (`pre-commit`).",
        t: "Eles ajudam a garantir a qualidade do código antes mesmo que ele seja enviado para o repositório compartilhado."
    }
];

gitQuest.forEach(x => {
    addQuestion("Git", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});
/* =====================================================
   CRIPTOGRAFIA E CERTIFICAÇÃO DIGITAL
===================================================== */

const criptografia = [
    {
        q: "Qual é a principal diferença conceitual entre a criptografia simétrica e a criptografia assimétrica?",
        c: "Simétrica vs Assimétrica",
        o: [
            "A) A criptografia simétrica utiliza chaves diferentes para cifrar e decifrar, enquanto a assimétrica utiliza a mesma chave.",
            "B) A criptografia simétrica utiliza uma única chave compartilhada para cifrar e decifrar, enquanto a assimétrica utiliza um par de chaves (pública e privada).",
            "C) A criptografia simétrica é exclusiva para ambientes web via HTTPS, e a assimétrica é apenas para arquivos locais.",
            "D) Não há diferença de segurança; a criptografia assimétrica é apenas uma versão mais antiga da simétrica."
        ],
        a: "B",
        e: "Na criptografia simétrica, a mesma chave secreta faz todo o trabalho, exigindo um canal seguro de troca. Na assimétrica, o que a chave pública criptografa, apenas a chave privada correspondente descodifica.",
        t: "Algoritmos simétricos (como AES) são muito mais rápidos que os assimétricos (como RSA)."
    },
    {
        q: "No contexto da Segurança da Informação, o que garante a propriedade de 'Não-Repúdio' (ou Irretratabilidade)?",
        c: "",
        o: [
            "A) O uso exclusiva de senhas fortes com troca obrigatória a cada 30 dias.",
            "B) A capacidade de impedir que um usuário negue a autoria de uma mensagem ou transação que ele realizou.",
            "C) A criptografia de dados em trânsito utilizando protocolos de rede como o TLS 1.3.",
            "D) O armazenamento de senhas utilizando funções de hash unidirecionais com salt."
        ],
        a: "B",
        e: "O não-repúdio assegura que o emissor de uma mensagem não possa negar posteriormente tê-la enviado, o que é comumente alcançado com o uso de assinaturas digitais baseadas em criptografia assimétrica.",
        t: "Fundamental em transações bancárias e documentos legais digitais."
    },
    {
        q: "O que é uma função de Hash criptográfico (como SHA-256) e qual é uma de suas propriedades fundamentais?",
        c: "Funções Hash",
        o: [
            "A) Uma função reversível que compacta e descompacta arquivos grandes para otimizar espaço em disco.",
            "B) Um algoritmo matemático que converte uma entrada de tamanho arbitrário em uma string de tamanho fixo, sendo unidirecional (impossível de reverter para obter o dado original).",
            "C) Um sistema de chaves gêmeas onde a chave pública descobre o texto original gerado pelo hash.",
            "D) Um protocolo de troca de chaves simétricas inseguras em redes públicas."
        ],
        a: "B",
        e: "O hash gera uma 'impressão digital' única do arquivo ou texto. Ele é unidirecional (one-way) e resistente a colisões (difícil encontrar duas entradas que gerem o mesmo hash).",
        t: "Funções hash são amplamente utilizadas na verificação de integridade de dados e armazenamento seguro de senhas."
    },
    {
        q: "Qual é a principal função de uma Autoridade Certificadora (AC) dentro de uma Infraestrutura de Chaves Públicas (ICP)?",
        c: "ICP-Brasil e Certificação",
        o: [
            "A) Bloquear ataques de negação de serviço (DDoS) em servidores de aplicações web.",
            "B) Emitir, suspender, revogar e gerenciar certificados digitais, atrelando uma chave pública à identidade de um usuário ou instituição.",
            "C) Armazenar cópias de segurança (backup) de todas as senhas dos usuários para recuperação em caso de perda.",
            "D) Executar varreduras de vulnerabilidades em códigos-fonte antes do deploy em produção."
        ],
        a: "B",
        e: "A Autoridade Certificadora atua como uma terceira parte confiável que valida a identidade do titular e emite o certificado digital assinado com sua própria chave privada.",
        t: "O certificado digital funciona como o 'RG' eletrônico de pessoas físicas ou jurídicas."
    },
    {
        q: "Como funciona o processo de criação de uma Assinatura Digital?",
        c: "Assinatura Digital",
        o: [
            "A) O documento é cifrado integralmente utilizando a chave pública do destinatário.",
            "B) O resumo (hash) do documento é gerado e criptografado utilizando a chave privada do remetente.",
            "C) A senha do usuário é anexada ao final do arquivo em formato de texto plano protegido por permissões do sistema.",
            "D) Utiliza-se exclusivamente criptografia simétrica para mascarar o cabeçalho do arquivo."
        ],
        a: "B",
        e: "Para assinar, calcula-se o hash do documento e criptografa-se esse hash com a chave privada de quem assina. Qualquer pessoa pode usar a chave pública do remetente para decifrar o hash e conferir a integridade e autoria.",
        t: "A assinatura digital garante integridade, autenticidade e não-repúdio."
    },
    {
        q: "O que significa dizer que um certificado digital foi revogado e onde essa informação é consultada?",
        c: "Revogação de Certificados",
        o: [
            "A) Significa que a senha expirou e deve ser trocada no painel da AC. É consultada no arquivo hosts do sistema.",
            "B) Significa que o certificado perdeu a validade antes do prazo devido a comprometimento de chave ou mudança de dados, sendo consultado via LCR (Lista de Certificados Revogados ou CRL) ou protocolo OCSP.",
            "C) Significa que o site utilizava protocolo HTTP e migrou para HTTPS.",
            "D) Significa que o algoritmo AES foi substituído por uma chave simétrica menor."
        ],
        a: "B",
        e: "A revogação invalida o certificado antes da data de expiração oficial. Sistemas checam listas de revogação (CRL) ou consultam o status em tempo real via protocolo OCSP (Online Certificate Status Protocol).",
        t: "Verificar a revogação é uma etapa crucial na validação de conexões SSL/TLS seguras."
    },
    {
        q: "Qual é o objetivo do protocolo TLS (Transport Layer Security) — sucessor espiritual do SSL — em uma aplicação web?",
        c: "TLS / HTTPS",
        o: [
            "A) Otimizar o tempo de carregamento de páginas HTML através da compressão de imagens e scripts.",
            "B) Proporcionar segurança de comunicação fim-a-fim na internet através de criptografia, autenticação de servidor e garantia de integridade.",
            "C) Substituir os bancos de dados relacionais por estruturas baseadas em blocos criptografados.",
            "D) Controlar o acesso de usuários por meio de perfis de permissão baseados em papéis (RBAC)."
        ],
        a: "B",
        e: "O TLS opera na camada de transporte (ou logo acima dela), criando um túnel seguro (HTTPS) onde os dados trocados entre o navegador e o servidor ficam protegidos contra interceptação e adulteração.",
        t: "O estabelecimento dessa conexão segura ocorre inicialmente através do chamado 'Handshake TLS'."
    },
    {
        q: "O que caracteriza um ataque do tipo 'Man-in-the-Middle' (MitM) em redes de computadores?",
        c: "Ameaças e Ataques",
        o: [
            "A) Um invasor sobrecarrega o servidor web com milhões de requisições falsas simultâneas.",
            "B) Um atacante intercepta secretamente e possivelmente altera a comunicação entre duas partes que acreditam estar se comunicando diretamente entre si.",
            "C) O roubo físico de discos rígidos em um data center para extração de arquivos em cache.",
            "D) A instalação de vírus de macro em planilhas eletrônicas compartilhadas na rede interna."
        ],
        a: "B",
        e: "No ataque MitM, o intermediário mal-intencionado fica no meio da rota dos pacotes de dados, podendo escutar ou modificar o conteúdo sem que os usuários percebam, o que é mitigado pelo uso de certificados digitais válidos e HSTS.",
        t: "Redes Wi-Fi públicas desprotegidas são cenários comuns para esse tipo de tentativa de invasão."
    },
    {
        q: "No contexto de criptografia simétrica, qual é a finalidade do 'Salt' (um dado aleatório) quando adicionado ao processo de hash de senhas?",
        c: "Armazenamento de Senhas",
        o: [
            "A) Aumentar o tamanho do arquivo de texto plano para dificultar ataques de força bruta.",
            "B) Garantir que duas pessoas que utilizem a mesma senha gerem hashes finais completamente diferentes, neutralizando ataques baseados em tabelas prontas (Rainbow Tables).",
            "C) Permitir que a senha seja recuperada facilmente pelo administrador do sistema em caso de esquecimento.",
            "D) Criptografar a conexão de rede durante o envio da senha para o servidor backend."
        ],
        a: "B",
        e: "O Salt adiciona uma sequência de caracteres aleatórios única a cada senha antes de aplicar a função hash. Assim, senhas iguais geram hashes totalmente distintos nas tabelas do banco de dados.",
        t: "O uso de Salt em conjunto com funções lentas como Argon2 ou Bcrypt é padrão ouro para segurança de senhas."
    },
    {
        q: "Qual dos seguintes algoritmos é amplamente reconhecido e utilizado como padrão global para criptografia simétrica de blocos?",
        c: "Algoritmos Criptográficos",
        o: [
            "A) RSA",
            "B) Diffie-Hellman",
            "C) AES (Advanced Encryption Standard)",
            "D) MD5"
        ],
        a: "C",
        e: "O AES (Advanced Encryption Standard) é o algoritmo de criptografia simétrica padrão da indústria e do governo norte-americano, operando em blocos de 128 bits com chaves de 128, 192 ou 256 bits.",
        t: "O MD5 é uma função hash antiga e insegura, enquanto o RSA é um algoritmo assimétrico."
    }
];

criptografia.forEach(x => {
    addQuestion("Criptografia e Certificação Digital", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});

