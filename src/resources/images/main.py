import ply.lex as lex
import ply.yacc as yacc
import sys

tokens = [
    'SELECTOR',
    'NAME',
    'COLON',
    'SEMICOLON',
    'OPENBRACKET',
    'CLOSEBRACKET',
    'PROPERTY',
    'WHITESPACE',
    'VALUE',
]

t_OPENBRACKET = r'\{'
t_CLOSEBRACKET = r'\}'
t_COLON = r'\:'
t_SEMICOLON = r'\;'
t_SELECTOR = r'[\.\#]'

#panav{property:value;property:value;}

def t_PROPERTY(t):
    r'[a-zA-Z]+(?=:)'
    t.type = 'PROPERTY'
    return t

def t_VALUE(t):
    r'[a-zA-Z]+(?=;)'
    t.type = 'VALUE'
    return t

def t_NAME(t):
    r'[a-zA-Z_][a-zA-Z_0-9]*'
    t.type = 'NAME'
    return t

def t_WHITESPACE(t):
    r'[\s\t\n]'
    t.lexer.skip(1)

def t_error(t):
    print("BAD SYNTAX")
    quit()

lexer = lex.lex()

def p_start(p):
    '''
    start : A
    '''

def p_empty(p):
    '''
    empty : 
    ''' 

    print("String parsed succesfully")

def p_A(p):
    '''
    A : SELECTOR NAME OPENBRACKET X CLOSEBRACKET
    '''

def p_X(p):
    '''
    X : PROPERTY COLON VALUE SEMICOLON X
      | empty
    '''

parser = yacc.yacc()

while True:
    try:
        s = input('')
    except EOFError:
        break

    parser.parse(s)


