module two_comp (
    input [2:0] a,
    output [2:0] b
);
  assign b[0] = a[0];
  assign b[2] = a[2];
  assign b[1] = ((a[2] ^ a[1]) | (a[1] & ~a[0]));

endmodule