import * as React from "react";
import { useHistory, useParams } from "react-router-dom";
import roleParser from "./../../images/role-parser.PNG";
import theoryGrammar from "./../../images/theory-grammar.PNG";
import thoerySentence from "./../../images/theory-sentence.PNG";
import useStyles from "./styles";
const Theory = () => {
  const history = useHistory();
  const { id } = useParams();
  const classes = useStyles();
  if (id === "1")
    return (
      <div>
        <h1 className={classes.h1}>theory</h1>
        <p className={classes.p}>
          In programming, comments are hints that a programmer can add to make
          their code easier to read and understand. There are two ways to add
          comments in C: Single-line Comments in C In C, a single line comment
          starts with //. It starts and ends in the same line. Multi-line
          Comments in C In C programming, there is another type of comment that
          allows us to comment on multiple lines at once, they are multi-line
          comments. To write multi-line comments, we use the /.../
        </p>
      </div>
    );
  if (id === "2")
    return (
      <div>
        <h1 className={classes.h1}>theory</h1>
        <p className={classes.p}>
          The goal of parsing is to check the validity of a source string and to
          determine its syntactic structure. For an invalid string the parser
          issues diagnostic messages reporting the cause and nature of error in
          the string. For a valid string it builds a parse tree to reflect the
          sequence of derivations or reductions performed during parsing.
        </p>
        <h1>ROLE OF PARSER</h1>
        <img src={roleParser} alt="parser"></img>
        <ul className={classes.p}>
          <li>Performs Context-free syntax analysis</li>
          <li>Guide Context-sensitive analysis</li>
          <li>Construct an Intermediate Representation</li>
          <li>Produces meaningful error messages</li>
        </ul>
        <h1>TOP DOWN PARSER</h1>
        <p className={classes.p}>
          Top down parsing according to a grammar G attempts to derive a string
          matching a source string through a sequence of derivation starting
          with distinguished symbol of G.
        </p>
        <ul className={classes.p}>
          <li>A top-down parser starts with the root of the parse tree.</li>
          <li>
            Perform Derivation by picking production and tries to match the
            input
          </li>
          <li>May Require backtracking</li>
          <li>
            Some grammars are backtrack free (left factored / left recursive
            eliminated)
          </li>
        </ul>
        <p className={classes.p}>
          Let us understand the process of Parsing with the help of parse tree
          using English language grammar.
        </p>
        <div>
          <img src={theoryGrammar} alt="grammar"></img>
        </div>

        <img src={thoerySentence} alt="sentence"></img>
        <p className={classes.p}>
          LL (1) parser is a table driven top down parser for left-to-left
          parsing. The ‘1’ in LL(1) indicates that the grammar uses a look ahead
          of one source symbol- that is the prediction to be made is determined
          by the next source symbol. A major advantage of LL (1) parsing is its
          amenability to automatic construction by a parser generator. Grammar
          use for LL(1)
        </p>
      </div>
    );
  if (id === "3")
    return (
      <div>
        <h1 className={classes.h1}>theory</h1>
        <p className={classes.p}>
          The lexical analyzer needs to scan and identify only a finite set of
          valid string/token/lexeme that belong to the language in hand. It
          searches for the pattern defined by the language rules. Regular
          expressions have the capability to express finite languages by
          defining a pattern for finite strings of symbols. The grammar defined
          by it is known as regular grammar. The language defined by regular
          grammar is known as regular language.
        </p>
        <p className={classes.p}>
          Regular expression is an important notation for specifying patterns.
          Each pattern matches a set of strings, so regular expressions serve as
          names for a set of strings. Programming language tokens can be
          described by regular languages. The specification of regular
          expressions is an example of a recursive definition. Regular languages
          are easy to understand and have efficient implementation. There are a
          number of algebraic laws that are obeyed by regular expressions, which
          can be used to manipulate regular expressions into equivalent forms.
        </p>
      </div>
    );
  if (id === "4")
    return (
      <div>
        <h1 className={classes.h1}>theory</h1>
        <p className={classes.p}>
          C identifiers represent the name in the C program, for example,
          variables, functions, arrays, structures, unions, labels, etc.
          <br /> An identifier can be composed of letters such as uppercase,
          lowercase letters, underscore, digits, but the starting letter should
          be either an alphabet or an underscore.
          <br /> Rules for naming identifiers A valid identifier can have
          letters (both uppercase and lowercase letters), digits and
          underscores.
          <br /> The first letter of an identifier should be either a letter or
          an underscore. You cannot use keywords like int, while etc. as
          identifiers.
          <br /> There is no rule on how long an identifier can be. However, you
          may run into problems in some compilers if the identifier is longer
          than 31 characters.
        </p>
      </div>
    );
  if (id === "5")
    return (
      <div>
        <h1 className={classes.h1}>theory</h1>
        <p className={classes.p}>
          The parser is that phase of the compiler which takes a token string as
          input and with the help of existing grammar, converts it into the
          corresponding Intermediate Representation. The parser is also known as
          Syntax Analyzer.
          <br />
          It is of two types:
        </p>
        <h2>Top-down parsing</h2>
        <p className={classes.p}>
          The top down parsing is known as recursive parsing or predictive
          parsing. In the top down parsing, the parsing starts from the start
          symbol and transform it into the input symbol.
        </p>
        <h2>Bottom-up parsing</h2>
        <p className={classes.p}>
          Bottom up parsing is also known as shift-reduce parsing. It is used to
          construct a parse tree for an input string. In the bottom up parsing,
          the parsing starts with the input symbol and construct the parse tree
          up to the start symbol by tracing out the rightmost derivations of
          string in reverse.
        </p>
      </div>
    );
};
export default Theory;
