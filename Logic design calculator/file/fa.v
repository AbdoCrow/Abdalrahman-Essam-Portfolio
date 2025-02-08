module fa (
    input a,b,pc,
    output sum,carry
);
wire s,oan1,oan2;
  xor_top xor1(
        .A(a),
        .B(b),
        .F(s)
    );
and and1(oan1,a,b);
  xor_top xor2(
        .A(s),
        .B(pc),
        .F(sum)
    );
and and2(oan2,s,pc);
or or1(carry,oan2,oan1);
endmodule