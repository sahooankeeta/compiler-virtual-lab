const test = {
  preTest: [
    //QUESTIONS FOR EXP 1
    [
      //QUESTON 1
      {
        question: "How many types of comments are there in a program?",
        options: [
          {
            option: "2",
            isCorrect: true,
          },
          {
            option: "1",
            isCorrect: false,
          },
          {
            option: "4",
            isCorrect: false,
          },
          {
            option: "Comments are not allowed",
            isCorrect: false,
          },
        ],
      },

      //QUESTION 2
      {
        question: "What is a comment in C language?",
        options: [
          {
            option:
              "comments are parts of the source code disregarded by the compiler",
            isCorrect: true,
          },
          {
            option:
              "comments are executed by the compiler to find the meaning of the comment",
            isCorrect: false,
          },
          {
            option: "comments are executable",
            isCorrect: false,
          },
          {
            option: "comments are executed by the compiler",
            isCorrect: false,
          },
        ],
      },

      //QUESTON 3
      {
        question: "What type of comments does C support?",
        options: [
          {
            option: "single line",
            isCorrect: false,
          },
          {
            option: "multiline",
            isCorrect: false,
          },
          {
            option: "single line and multi-line",
            isCorrect: true,
          },
          {
            option: "reusable line",
            isCorrect: false,
          },
        ],
      },

      //QUESTION 4
      {
        question: "What is used to write multi line comment in C ?",
        options: [
          {
            option: "/* …. */",
            isCorrect: true,
          },
          {
            option: "/$ …. $/",
            isCorrect: false,
          },
          {
            option: "//",
            isCorrect: false,
          },
          {
            option: "/$ …. */",
            isCorrect: false,
          },
        ],
      },

      //QUESTION 5
      {
        question: "What is used to write single line comment in C ?",
        options: [
          {
            option: "/* …. */",
            isCorrect: false,
          },
          {
            option: "/$ …. $/",
            isCorrect: false,
          },
          {
            option: "//",
            isCorrect: true,
          },
          {
            option: "/$ …. */",
            isCorrect: false,
          },
        ],
      },
    ],

    //QUESTIONS FOR EXP 2
    [
      //QUESTON 1
      {
        question: "Lexical analysis is the _______ phase of a compiler",
        options: [
          {
            option: "first",
            isCorrect: true,
          },
          {
            option: "second",
            isCorrect: false,
          },
          {
            option: "third",
            isCorrect: false,
          },
          {
            option: "fourth",
            isCorrect: false,
          },
        ],
      },

      //QUESTION 2
      {
        question: "What is the output of lexical analyzer?",
        options: [
          {
            option: "A set of RE",
            isCorrect: false,
          },
          {
            option: " Syntax Tree",
            isCorrect: false,
          },
          {
            option: "Set of Tokens",
            isCorrect: true,
          },
          {
            option: "String Character",
            isCorrect: false,
          },
        ],
      },

      //QUESTON 3
      {
        question: "lexical analyzer is used to ?",
        options: [
          {
            option: "remove whitespace",
            isCorrect: false,
          },
          {
            option: "removing comments",
            isCorrect: false,
          },
          {
            option: "breaks these syntaxes into a series of tokens",
            isCorrect: false,
          },
          {
            option: "All of the above",
            isCorrect: true,
          },
        ],
      },

      //QUESTION 4
      {
        question: "If the lexical analyzer finds a token invalid then?",
        options: [
          {
            option: "it generates an exception",
            isCorrect: true,
          },
          {
            option: "it generates an warning",
            isCorrect: false,
          },
          {
            option: "it generates an error",
            isCorrect: true,
          },
          {
            option: " reads the whole program",
            isCorrect: false,
          },
        ],
      },
      //QUESTION 5
      {
        question:
          "When the lexical analyzer read the source-code, it scans the code?",
        options: [
          {
            option: "line by line",
            isCorrect: false,
          },
          {
            option: "word by word",
            isCorrect: false,
          },
          {
            option: "letter by letter",
            isCorrect: true,
          },
          {
            option: "reads the whole program",
            isCorrect: false,
          },
        ],
      },
    ],

    //QUESTIONS FOR EXP 3
    [
      //QUESTON 1
      {
        question: "The grammar defined by regular expressions is known as?",
        options: [
          {
            option: "regular language",
            isCorrect: false,
          },
          {
            option: "regular grammar",
            isCorrect: true,
          },
          {
            option: "regular notations",
            isCorrect: false,
          },
          {
            option: "regular operation",
            isCorrect: false,
          },
        ],
      },
      //QUESTION 2
      {
        question: "A language is regular if and only if",
        options: [
          {
            option: " accepted by DFA",
            isCorrect: true,
          },
          {
            option: "accepted by LBA",
            isCorrect: false,
          },
          {
            option: "accepted by PDA",
            isCorrect: false,
          },
          {
            option: "accepted by Turing machin",
            isCorrect: false,
          },
        ],
      },

      //QUESTON 3
      {
        question: "Reular expression are",
        options: [
          {
            option: "Type 0 lanuage",
            isCorrect: false,
          },
          {
            option: "Type 1 lanuage",
            isCorrect: false,
          },
          {
            option: "Type 2 lanuage",
            isCorrect: false,
          },
          {
            option: "Type 3 lanuage",
            isCorrect: true,
          },
        ],
      },
      //QUESTION 4
      {
        question:
          "From the following grammars, which describes the lexical syntax?",
        options: [
          {
            option: "Lexical Grammar",
            isCorrect: true,
          },
          {
            option: "Context-free Grammar",
            isCorrect: false,
          },
          {
            option: "Syntactic Grammar",
            isCorrect: false,
          },
          {
            option: " Regular Grammar",
            isCorrect: false,
          },
        ],
      },
      //QUESTION 5
      {
        question:
          "Which of the following is NOT the set of regular expression R = (ab + abb)* bbab?",
        options: [
          {
            option: " ababbbbab",
            isCorrect: true,
          },
          {
            option: " abbbab",
            isCorrect: false,
          },
          {
            option: "ababbabbbab",
            isCorrect: false,
          },
          {
            option: "abababab",
            isCorrect: false,
          },
        ],
      },
    ],

    //QUESTIONS FOR EXP 4
    [
      //QUESTON 1
      {
        question: "Which of the following is true for variable names in C?",
        options: [
          {
            option:
              "They can contain alphanumeric characters as well as special characters",
            isCorrect: false,
          },
          {
            option:
              "It is not an error to declare a variable to be one of the keywords(like goto, static)",
            isCorrect: false,
          },
          {
            option: " Variable names cannot start with a digit",
            isCorrect: true,
          },
          {
            option: " Variable can be of any length",
            isCorrect: false,
          },
        ],
      },
      //QUESTION 2
      {
        question: "All keywords in C are in ____",
        options: [
          {
            option: " LowerCase letters",
            isCorrect: true,
          },
          {
            option: "UpperCase letters",
            isCorrect: false,
          },
          {
            option: "CamelCase letters",
            isCorrect: false,
          },
          {
            option: " None of the mentioned",
            isCorrect: false,
          },
        ],
      },

      //QUESTON 3
      {
        question:
          "Which of the following is not a valid variable name declaration? ",
        options: [
          {
            option: "int __a3;",
            isCorrect: false,
          },
          {
            option: "kolkata",

            isCorrect: false,
          },
          {
            option: " int __A3",
            isCorrect: false,
          },
          {
            option: "None of the mentioned",
            isCorrect: true,
          },
        ],
      },
      //QUESTION 4
      {
        question: "Which of the following is not a valid variable name?",
        options: [
          {
            option: "delhi",
            isCorrect: false,
          },
          {
            option: "delhi123",
            isCorrect: false,
          },
          {
            option: "delhi_1",
            isCorrect: false,
          },
          {
            option: "123delhi",
            isCorrect: true,
          },
        ],
      },
      //QUESTION 5
      {
        question:
          "Why do variable names beginning with the underscore is not encouraged?",
        options: [
          {
            option: "It is not standardized",
            isCorrect: false,
          },
          {
            option:
              "To avoid conflicts since assemblers and loaders use such names",
            isCorrect: false,
          },
          {
            option: "To avoid conflicts since library routines use such names",
            isCorrect: true,
          },
          {
            option:
              "To avoid conflicts with environment variables of an operating system",
            isCorrect: false,
          },
        ],
      },
    ],
    //QUESTIONS FOR EXP 5
    [
      //QUESTON 1
      {
        question:
          "When the parser starts constructing the parse tree from the start symbol and then tries to transform the start symbol to the input, it is called?",
        options: [
          {
            option: "Bottom-up parsing",
            isCorrect: false,
          },
          {
            option: "Top-down parsing",
            isCorrect: true,
          },
          {
            option: " Both",
            isCorrect: false,
          },
          {
            option: "None",
            isCorrect: false,
          },
        ],
      },
      //QUESTION 2
      {
        question:
          " Assume that the SLR parser for a grammar G has n1 states and the LALR parser for G has n2 states.",
        options: [
          {
            option: " n1 is necessarily less than n2",
            isCorrect: false,
          },
          {
            option: " n1 is necessarily equal to n2",
            isCorrect: true,
          },
          {
            option: " n1 is necessarily greater than n2",
            isCorrect: false,
          },
          {
            option: " None of the mentioned",
            isCorrect: false,
          },
        ],
      },

      //QUESTON 3
      {
        question:
          "Which of the following derivations does a top-down parser use while parsing an input string? ",
        options: [
          {
            option: "Leftmost derivation",
            isCorrect: true,
          },
          {
            option: "Leftmost derivation in reverse",

            isCorrect: false,
          },
          {
            option: "Rightmost derivation",
            isCorrect: false,
          },
          {
            option: "Rightmost derivation in reverse",
            isCorrect: false,
          },
        ],
      },
      //QUESTION 4
      {
        question:
          "In which derivation the leftmost non-terminal symbol is replaced at each step?",
        options: [
          {
            option: "Left recursion",
            isCorrect: false,
          },
          {
            option: "Left non-terminal",
            isCorrect: false,
          },
          {
            option: "Left pushdown",
            isCorrect: false,
          },
          {
            option: "Leftmost",
            isCorrect: true,
          },
        ],
      },
      //QUESTION 5
      {
        question: "Which of the following statements is false?",
        options: [
          {
            option: "Unambiguous grammar has both kind of derivations",
            isCorrect: true,
          },
          {
            option: "An LL(1) parser is a top-down parser",
            isCorrect: false,
          },
          {
            option: "LALR is more powerful than SLR",
            isCorrect: false,
          },
          {
            option: "Ambiguous grammar cannot be LR(k)",
            isCorrect: false,
          },
        ],
      },
    ],
  ],

  postTest: [
    //QUESTIONS FOR EXP 1
    [
      //QUESTON 1
      {
        question: "What is a compiler?",
        options: [
          {
            option:
              "system program that converts instructions to machine language",
            isCorrect: true,
          },
          {
            option:
              " system program that converts machine language to high-level language",
            isCorrect: false,
          },
          {
            option: "system program that writes instructions to perform",
            isCorrect: false,
          },
          {
            option: "None of the mentioned",
            isCorrect: false,
          },
        ],
      },
      //QUESTION 2
      {
        question: "Which of the following is a stage of compiler design?",
        options: [
          {
            option: "Semantic analysis",
            isCorrect: false,
          },
          {
            option: "Intermediate code generator",
            isCorrect: false,
          },
          {
            option: "Code generator",
            isCorrect: false,
          },
          {
            option: "All of the mentioned",
            isCorrect: true,
          },
        ],
      },

      //QUESTON 3
      {
        question: "What is the use of a symbol table in compiler design?",
        options: [
          {
            option: "Finding name’s scope",
            isCorrect: false,
          },
          {
            option: "Type checking",
            isCorrect: false,
          },
          {
            option: "Keeping all of the names of all entities in one place",
            isCorrect: false,
          },
          {
            option: "All of the mentioned",
            isCorrect: true,
          },
        ],
      },
      //QUESTION 4
      {
        question:
          "A programmer, writes a program to multiply two numbers instead of dividing them by mistake, how can this error be detected?",
        options: [
          {
            option: "Compiler or interpreter",
            isCorrect: false,
          },
          {
            option: "Compiler only",
            isCorrect: false,
          },
          {
            option: "Interpreter only",
            isCorrect: false,
          },
          {
            option: "None of the mentioned",
            isCorrect: true,
          },
        ],
      },
      //QUESTION 5
      {
        question: "Which of the following error can a compiler check?",
        options: [
          {
            option: "Syntax Error",
            isCorrect: true,
          },
          {
            option: "Logical Error",
            isCorrect: false,
          },
          {
            option: "Both Logical and Syntax Error",
            isCorrect: false,
          },
          {
            option: "Compiler cannot check errors",
            isCorrect: false,
          },
        ],
      },
    ],

    //QUESTIONS FOR EXP 2
    [
      //QUESTON 1
      {
        question:
          "Which of the following phase of the compiler is Syntax Analysis?",
        options: [
          {
            option: "Second",
            isCorrect: true,
          },
          {
            option: "Third",
            isCorrect: false,
          },
          {
            option: "First",
            isCorrect: false,
          },
          {
            option: "All of the mentioned",
            isCorrect: false,
          },
        ],
      },
      //QUESTION 2
      {
        question: "Which of the following is a definition of compiler?",
        options: [
          {
            option:
              "Acceptance of a program written in a high-level language and produces an object program",
            isCorrect: true,
          },
          {
            option: "Program is put into memory and executes it",
            isCorrect: false,
          },
          {
            option: "Translation of assembly language into machine language",
            isCorrect: false,
          },
          {
            option: "None of the mentioned",
            isCorrect: false,
          },
        ],
      },

      //QUESTON 3
      {
        question:
          "Which of the following is a system program that integrates a program’s individually compiled modules into a form that can be executed?",
        options: [
          {
            option: "Interpreter",
            isCorrect: false,
          },
          {
            option: "Assembler",
            isCorrect: false,
          },
          {
            option: "Compiler",
            isCorrect: false,
          },
          {
            option: "Linking Loader",
            isCorrect: true,
          },
        ],
      },
      //QUESTION 4
      {
        question:
          "Which of the following is known as a compiler for a high-level language that runs on one machine and produces code for a different machine?",
        options: [
          {
            option: "Cross compiler",
            isCorrect: true,
          },
          {
            option: "Multipass compiler",
            isCorrect: false,
          },
          {
            option: "Optimizing compiler",
            isCorrect: false,
          },
          {
            option: "One pass compiler",
            isCorrect: false,
          },
        ],
      },
      //QUESTION 5
      {
        question: "Who is responsible for the creation of the symbol table?",
        options: [
          {
            option: "Assembler",
            isCorrect: false,
          },
          {
            option: "Compiler",
            isCorrect: true,
          },
          {
            option: "Interpreter",
            isCorrect: false,
          },
          {
            option: "All of the mentioned",
            isCorrect: false,
          },
        ],
      },
    ],

    //QUESTIONS FOR EXP 3
    [
      //QUESTON 1
      {
        question:
          "Which of the following concept of FSA is used in the compiler?",
        options: [
          {
            option: "Code optimization",
            isCorrect: false,
          },
          {
            option: "Code generation",
            isCorrect: false,
          },
          {
            option: "Lexical analysis",
            isCorrect: true,
          },
          {
            option: "Parser",
            isCorrect: false,
          },
        ],
      },
      //QUESTION 2
      {
        question:
          "Which of the following is a part of a compiler that takes as input a stream of characters and produces as output a stream of words along with their associated syntactic categories?",
        options: [
          {
            option: "Optimizer",
            isCorrect: false,
          },
          {
            option: "Scanner",
            isCorrect: true,
          },
          {
            option: "Parser",
            isCorrect: false,
          },
          {
            option: "None of the mentioned",
            isCorrect: false,
          },
        ],
      },

      //QUESTON 3
      {
        question: "What is CFG?",
        options: [
          {
            option: "Regular Expression",
            isCorrect: false,
          },
          {
            option: " Compiler",
            isCorrect: true,
          },
          {
            option: "Language expression",
            isCorrect: false,
          },
          {
            option: "All of the mentioned",
            isCorrect: false,
          },
        ],
      },
      //QUESTION 4
      {
        question:
          "Which of the following is correct regarding an optimizer Compiler?",
        options: [
          {
            option: "Optimize the code",
            isCorrect: false,
          },
          {
            option: "Is optimized to occupy less space",
            isCorrect: false,
          },
          {
            option: "Both of the mentioned",
            isCorrect: false,
          },
          {
            option: "None of the mentioned",
            isCorrect: true,
          },
        ],
      },
      //QUESTION 5
      {
        question: "Which of the following error can Compiler diagnose?",
        options: [
          {
            option: "Logical errors only",
            isCorrect: false,
          },
          {
            option: "Grammatical and logical errors",
            isCorrect: false,
          },
          {
            option: "Grammatical errors only",
            isCorrect: true,
          },
          {
            option: "All of the mentioned",
            isCorrect: false,
          },
        ],
      },
    ],

    //QUESTIONS FOR EXP 4
    [
      //QUESTON 1
      {
        question:
          "In which of the following phase of the compiler is Lexical Analyser?",
        options: [
          {
            option: "Second",
            isCorrect: false,
          },
          {
            option: "Third",
            isCorrect: false,
          },
          {
            option: "First",
            isCorrect: true,
          },
          {
            option: "All of the mentioned",
            isCorrect: false,
          },
        ],
      },
      //QUESTION 2
      {
        question: "Which of the following does an address code involve?",
        options: [
          {
            option: "No unary operators",
            isCorrect: false,
          },
          {
            option: "Exactly 3 address",
            isCorrect: false,
          },
          {
            option: "At most Three address",
            isCorrect: false,
          },
          {
            option: "None of the mentioned",
            isCorrect: true,
          },
        ],
      },

      //QUESTON 3
      {
        question: "Why System program such as compiler are designed?",
        options: [
          {
            option: "They are Serially usable",
            isCorrect: false,
          },
          {
            option: "They are Re-enterable",
            isCorrect: true,
          },
          {
            option: "They are Nonreusable",
            isCorrect: false,
          },
          {
            option: "All of the mentioned",
            isCorrect: false,
          },
        ],
      },
      //QUESTION 4
      {
        question:
          "What is the action of parsing the source program into proper syntactic classes known as?",
        options: [
          {
            option: "Interpretation analysis",
            isCorrect: false,
          },
          {
            option: "General syntax analysis",
            isCorrect: false,
          },
          {
            option: "Syntax analysis",
            isCorrect: false,
          },
          {
            option: "Lexical analysis",
            isCorrect: true,
          },
        ],
      },
      //QUESTION 5
      {
        question: "What is the bottom-up parsing method also known as?",
        options: [
          {
            option: "Predictive parsing",
            isCorrect: false,
          },
          {
            option: "Shift reduce parsing",
            isCorrect: true,
          },
          {
            option: "Recursive descent parsing",
            isCorrect: false,
          },
          {
            option: "None",
            isCorrect: false,
          },
        ],
      },
    ],
    //QUESTIONS FOR EXP 5
    [
      //QUESTON 1
      {
        question:
          "Which one of the following is true at any valid state in shift-reduce parsing?",
        options: [
          {
            option: "At the bottom we find the prefixes",
            isCorrect: false,
          },
          {
            option: "Stack consists of viable prefixes",
            isCorrect: false,
          },
          {
            option: "Stack contains only viable prefixes",
            isCorrect: true,
          },
          {
            option: "None of the mentioned",
            isCorrect: false,
          },
        ],
      },
      //QUESTION 2
      {
        question: "Which of the following does an address code involve?",
        options: [
          {
            option: "Lexical analyzer generator Parser generator",
            isCorrect: false,
          },
          {
            option: "Semantic analyzer ",
            isCorrect: false,
          },

          {
            option: "Parser generator",
            isCorrect: true,
          },
          {
            option: "None of the above",
            isCorrect: false,
          },
        ],
      },

      //QUESTON 3
      {
        question: "Which of the following parser is most powerful? ",
        options: [
          {
            option: "Operator precedence",
            isCorrect: false,
          },
          {
            option: "Canonical LR",
            isCorrect: true,
          },
          {
            option: "LALR",
            isCorrect: false,
          },
          {
            option: "SLR",
            isCorrect: false,
          },
        ],
      },
      //QUESTION 4
      {
        question:
          "A parser with the valid prefix property is advantageous because it ___",
        options: [
          {
            option: "Detects errors",
            isCorrect: false,
          },
          {
            option: "Errors are passed to the next phase",
            isCorrect: true,
          },
          {
            option: "All of the mentioned",
            isCorrect: false,
          },
          {
            option: "None of the mentioned",
            isCorrect: false,
          },
        ],
      },
      //QUESTION 5
      {
        question: "What is the similarity between LR, LALR and SLR?",
        options: [
          {
            option: "Same parsing table, but different algorithm",
            isCorrect: false,
          },
          {
            option: "Use same algorithm, but different parsing table.",
            isCorrect: true,
          },
          {
            option:
              "Their Parsing tables and algorithm are similar but uses top down approach.",
            isCorrect: false,
          },
          {
            option: "Both Parsing tables and algorithm are different.",
            isCorrect: false,
          },
        ],
      },
    ],
  ],
};
export default test;
