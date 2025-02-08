module mult (
    input [2:0] a,
    input [2:0] b,
    output [4:0] c

);
assign c[4] = a[2] ^ b[2];
assign c[0] = a[0] & b[0];
assign c[1] = (a[1] & b[0] & ~(b[1] & a[0])) | (a[0] & b[1] & ~(a[1] & b[0]));
assign c[2] = a[1] & b[1] & ~(b[0] & a[0]);
assign c[3] = a[1] & a[0] & b[1] & b[0]; 

endmodule