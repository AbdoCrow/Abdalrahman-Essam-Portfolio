module xor_top (
  input A, B,
  output F
);
  wire o1, o2; 

  comb1 comb1_1 (
    .in1(A), 
    .in2(B), 
    .res1(o1)
  );

  comb1 comb1_2 (
    .in1(B), 
    .in2(A), 
    .res1(o2)
  );

  assign F = o1 | o2; 
endmodule