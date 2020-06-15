let r

const I = a => a

r = I(3)
r

r = I(I)
r

const SELF = f => f(f)

r = SELF(I)
r

const PRI = a => _ => a

r = PRI(7)(11)
r

const ULT = _ => b => b

r = ULT(7)(11)
r

const TRO = f => a => b => f(b)(a)

r = TRO(ULT)(7)(11)
r

r = TRO(PRI)(6)(12)
r

const ULT2 = a => b => TRO(PRI)(a)(b)

r = ULT2(13)(20)
r

// boolean TRUE e FALSE
// TRUE ? <PRI> : ULT
// FALSE ? PRI : <ULT>

const T = PRI
const F = ULT

T.inspect = () => 'Verdadeiro (PRI)'
F.inspect = () => 'Falso (ULT)'

T
F

// NOT
const NOT = a => a(F)(T)

r = NOT(F)
r

// AND
const AND = a => b => a(b)(F)

r = AND(T)(T)
r

// OR
const OR = a => b => a(T)(b)

r = OR(F)(F)
r

const EQ = a => b => a(b)(NOT(b))

r = EQ(T)(T)
r

r = EQ(T)(F)
r

r = EQ(F)(T)
r

r = EQ(F)(F)
r

const XOR = a => b => NOT(EQ(a)(b))

r = XOR(F)(T)
r